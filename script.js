/* ===================
  Custom Context menu
  ===================*/
let context_menu = document.querySelector(".custom-content-menu");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(context_menu);
  context_menu.classList.add("active");
  console.log(`translate( ${e.clientX}px, ${e.clientY}px)`);
  context_menu.style.transform = `translate( ${e.clientX}px, ${e.clientY}px)`;
});
document.addEventListener("click", (e) => {
  context_menu.classList.remove("active");
});
