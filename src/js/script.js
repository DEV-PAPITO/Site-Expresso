
let iconMenu = document.getElementById('btn-menu')
let Menu = document.getElementById('mobile-menu')
let overlay = document.getElementById('overlay-mobile')


iconMenu.addEventListener('click', ()=>{
    Menu.classList.add('open')
})

Menu.addEventListener('click', ()=>{
    Menu.classList.remove('open')
})

overlay.addEventListener('click', ()=>{
    Menu.classList.remove('open')
})


















