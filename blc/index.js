var isMenuExpanded = false;
function toggleMenu() {
  isMenuExpanded = !isMenuExpanded;
  $("#navbar-menu-btn").toggleClass("expand", isMenuExpanded);
}

var isMenuMoved = false;
$(document).on("scroll", () => {
  isMenuMoved = window.scrollY > 350;
  $("#navbar").toggleClass("moved", isMenuMoved);
});