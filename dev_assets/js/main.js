window.onload = function () {
  var menuOpen = document.getElementById('menu-open')
  var menuClose = document.getElementById('menu-close')
  var navList = document.getElementById('nav-list')

  menuOpen.onclick = function (e) {
    navList.classList.add('open')
  }
  
  menuClose.onclick = function (e) {
    navList.classList.remove('open')
  }
}