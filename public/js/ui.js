const recipes = document.querySelector(".recipes");
document.addEventListener("DOMContentLoaded", function () {
  // nav menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // add recipe form
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });
  updateOnlineStatus();
});

// render recipe data
const renderRecipe = (data, id) => {
  const html = `
    <div class="card-panel recipe white row" data-id="${id}">
      <img src="/img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${data.title}</div>
        <div class="recipe-ingredients">${data.ingredients}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" style="font-size:30px;cursor:pointer;" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  recipes.innerHTML += html;
};

// remove a recipe from DOM
const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`);
  recipe.remove();
};

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

function updateOnlineStatus(event) {
  const condition = navigator.onLine ? "online" : "offline";
  document.querySelector(".status").classList.remove(`online`);
  document.querySelector(".status").classList.remove(`offline`);
  document.querySelector(".status").classList.add(`${condition}`);
  if(condition === 'online'){
    document.querySelector('.status').textContent = 'Online 😆 😆 😆';
  }
  else{
    document.querySelector('.status').textContent = 'Offline 🤬 🤬 🤬';
  }
}
