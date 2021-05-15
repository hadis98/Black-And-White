const navbar_icon = document.querySelector('.navbar-icon');
console.log(navbar_icon);
navbar_icon.addEventListener('click', () => {
    document.getElementById('menu2').style.display = "flex";
    document.getElementById('menu2').classList.add('flex-menu')
    navbar_close_icon.style.display = "block";
})

const navbar_close_icon = document.querySelector('.close-menu');
const menuLink_li = document.querySelectorAll('.menu-link-li');
navbar_close_icon.addEventListener('click', () => {
    document.getElementById('menu2').style.display = "none";
    navbar_icon.style.display = "block";
    navbar_close_icon.style.display = "none";

})

for (let i = 0; i < menuLink_li.length; i++) {
    menuLink_li[i].addEventListener('click', () => {
        navbar_close_icon.style.display = "none";
        document.getElementById('menu2').style.display = "none";
    })
}