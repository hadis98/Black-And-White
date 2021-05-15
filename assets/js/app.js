const flowers = [
    "./assets/images/flowers/julia-kadel-8PyMrTiVK4E-unsplash_40.jpg",
    "./assets/images/flowers/anca-gabriela-zosin-OYEsm66ynm4-unsplash.jpg",
    "./assets/images/flowers/priscilla-du-preez-5QQ-YCp0beM-unsplash.jpg",
    "./assets/images/flowers/ryan-song-ttCNLEiIvjM-unsplash.jpg",
];

const nature = [
    "./assets/images/nature/cody-fitzgerald-4NwnTnKwscI-unsplash.jpg",
    "./assets/images/nature/david-banning-BKrI50Vjm3I-unsplash.jpg",
    "./assets/images/nature/devang-punia-L3aV7ZzwYE4-unsplash.jpg",
    "./assets/images/nature/ines-alvarez-fdez-hKug0W1tnVU-unsplash.jpg",
];

const people = [
    "./assets/images/human/omid-armin-xWVyLLUztv0-unsplash.jpg",
    "./assets/images/human/charles-gaudreault-qmTQW6aMNZU-unsplash.jpg",
    "./assets/images/human/joshua-fuller-07DnduZvZ28-unsplash.jpg",
    "./assets/images/human/mohammad-metri-U1ytD7WJvy0-unsplash.jpg",
];

const flowersBtn = document.getElementById("flowers-collection");
const natureBtn = document.getElementById("nature-collection");
const peopleBtn = document.getElementById("people-collection");

const flowers_slideshow = document.getElementById("flowers-slide");
const nature_slideshow = document.getElementById("nature-slide");
const people_slideshow = document.getElementById("people-slide");

const slideShow_container = document.querySelector('.slideShow__container');
const slideShow_img_flowers = document.querySelector("#flowers-slide img");
const slideShow_img_nature = document.querySelector("#nature-slide img");
const slideShow_img_people = document.querySelector("#people-slide img");
// prev and next buttons
const prevBtnFlowrs = document.querySelector("#flowers-prev");
const nextBtnFlowers = document.querySelector("#flowers-next");

const prevBtnNature = document.querySelector("#nature-prev");
const nextBtnNature = document.querySelector("#nature-next");

const prevBtnPeople = document.querySelector("#people-prev");
const nextBtnPeople = document.querySelector("#people-next");


let curIdx_flowers = 0;
let curIdx_nature = 0;
let curIdx_people = 0;

flowersBtn.addEventListener("click", () => {
    flowers_slideshow.style.display = "flex";
    people_slideshow.style.display = "none";
    nature_slideshow.style.display = "none";
    slideShow_img_flowers.src = flowers[curIdx_flowers];
});

natureBtn.addEventListener("click", () => {
    flowers_slideshow.style.display = "none";
    people_slideshow.style.display = "none";
    nature_slideshow.style.display = "flex";
    slideShow_img_nature.src = nature[curIdx_flowers];
});

peopleBtn.addEventListener("click", () => {
    flowers_slideshow.style.display = "none";
    nature_slideshow.style.display = "none";
    people_slideshow.style.display = "flex";
    slideShow_img_people.src = people[curIdx_flowers];
});

prevBtnFlowrs.addEventListener("click", () => {
    clickPrevBtn(flowers);
});
nextBtnFlowers.addEventListener("click", () => {
    clickNextBtn(flowers);
});

prevBtnNature.addEventListener("click", () => {
    clickPrevBtn(nature);
});
nextBtnNature.addEventListener("click", () => {
    clickNextBtn(nature);
});

prevBtnPeople.addEventListener("click", () => {
    clickPrevBtn(people);
});
nextBtnPeople.addEventListener("click", () => {
    clickNextBtn(people);
});




function clickPrevBtn(array) {
    if (array === flowers) {
        if (curIdx_flowers > 0) {
            curIdx_flowers--;
        } else if (curIdx_flowers === 0) {
            curIdx_flowers = flowers.length - 1;
        }
    } else if (array === nature) {
        if (curIdx_nature > 0) {
            curIdx_nature--;
        } else if (curIdx_nature === 0) {
            curIdx_nature = nature.length - 1;
        }
    } else if (array === people) {
        if (curIdx_people > 0) {
            curIdx_people--;
        } else if (curIdx_people === 0) {
            curIdx_people = people.length - 1;
        }
    }
    changeImage(array);
}

function clickNextBtn(array) {
    if (array === flowers) {
        if (curIdx_flowers < flowers.length - 1) {
            curIdx_flowers++;
        } else if (curIdx_flowers === flowers.length - 1) {
            curIdx_flowers = 0;
        }
    } else if (array === nature) {
        if (curIdx_nature < nature.length - 1) {
            curIdx_nature++;
        } else if (curIdx_nature === nature.length - 1) {
            curIdx_nature = 0;
        }
    } else if (array === people) {
        if (curIdx_people < people.length - 1) {
            curIdx_people++;
        } else if (curIdx_people === people.length - 1) {
            curIdx_people = 0;
        }
    }

    changeImage(array);
}

function changeImage(array) {
    if (array === flowers) {
        slideShow_img_flowers.src = flowers[curIdx_flowers];
    } else if (array === nature) {
        slideShow_img_nature.src = nature[curIdx_nature];
    } else if (array === people) {
        slideShow_img_people.src = people[curIdx_people];
    }
    slideShow_container.classList.add('fadeIn');
}