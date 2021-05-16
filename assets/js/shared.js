const menu2 = document.getElementById('menu2');
const menuLink_li = document.querySelectorAll('.menu-link-li');
menu2.style.display = "none";
const navbarBtn = document.querySelector('.navbarBtn-container');
navbarBtn.addEventListener('click', () => {
    toggle_navbarBtn(navbarBtn);
})

function toggle_navbarBtn(x) {
    x.classList.toggle("change");
    menu2.style.display = menu2.style.display === "none" ? "flex" : "none";
    menu2.classList.toggle('flex-menu');
}

for (let i = 0; i < menuLink_li.length; i++) {
    menuLink_li[i].addEventListener('click', () => {
        navbarBtn.classList.toggle('change');
        menu2.style.display = "none";
    })
}


//  const navbar_icon = document.querySelector('.navbar-icon');
// const navbar_icon = document.querySelector('.navbarBtn-container');
// const navbar_close_icon = document.querySelector('.change');
// console.log(navbar_close_icon);
// navbar_icon.addEventListener('click', () => {
//     document.getElementById('menu2').style.display = "flex";
//     document.getElementById('menu2').classList.add('flex-menu')
//     navbar_close_icon.style.display = "block";
// })


// const menuLink_li = document.querySelectorAll('.menu-link-li');
// navbar_close_icon.addEventListener('click', () => {
//     document.getElementById('menu2').style.display = "none";
//     navbar_icon.style.display = "block";
//     // navbar_close_icon.style.display = "none";

// })

// for (let i = 0; i < menuLink_li.length; i++) {
//     menuLink_li[i].addEventListener('click', () => {
//         navbar_close_icon.style.display = "none";
//         document.getElementById('menu2').style.display = "none";
//     })
// }