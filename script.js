const openNav = document.querySelector("#toggle-open")
const closeNav = document.querySelector("#toggle-close")
const mobileNav = document.querySelector(".mobile-nav-container")

openNav.onclick = function () {
    mobileNav.classList.toggle('show-or-remove-mobile-nav')
}
closeNav.onclick = function () {
    mobileNav.classList.toggle('show-or-remove-mobile-nav')
}
