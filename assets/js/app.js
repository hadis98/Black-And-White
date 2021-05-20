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

const slideShow_container = document.querySelector(".slideShow__container");
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

const chooseImg_flowers_container =
    document.getElementById("chooseImg_flowers");
const chooseImg_nature_container =
    document.getElementById("chooseImg_nature");
const chooseImg_people_container =
    document.getElementById("chooseImg_people");


let curIdx_flowers = 0;
let curIdx_nature = 0;
let curIdx_people = 0;

flowersBtn.addEventListener("click", () => {
    chooseImg_nature_container.style.display = "none";
    chooseImg_flowers_container.style.display = "grid";
    chooseImg_people_container.style.display = "none";
    flowers_slideshow.style.display = "flex";
    people_slideshow.style.display = "none";
    nature_slideshow.style.display = "none";
    slideShow_img_flowers.src = flowers[curIdx_flowers];
});

natureBtn.addEventListener("click", () => {
    flowers_slideshow.style.display = "none";
    chooseImg_nature_container.style.display = "grid";
    chooseImg_flowers_container.style.display = "none";
    chooseImg_people_container.style.display = "none";
    people_slideshow.style.display = "none";
    nature_slideshow.style.display = "flex";
    slideShow_img_nature.src = nature[curIdx_flowers];
});

peopleBtn.addEventListener("click", () => {
    chooseImg_nature_container.style.display = "none";
    chooseImg_flowers_container.style.display = "none";
    chooseImg_people_container.style.display = "grid";
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

for (let i = 0; i < flowers.length; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("column-img");
    imgDiv.classList.add("column-img-flowers");
    const image = document.createElement("img");
    image.src = flowers[i];
    imgDiv.appendChild(image);
    chooseImg_flowers_container.appendChild(imgDiv);
}
for (let i = 0; i < nature.length; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("column-img");
    imgDiv.classList.add("column-img-nature");
    const image = document.createElement("img");
    image.src = nature[i];
    imgDiv.appendChild(image);
    chooseImg_nature_container.appendChild(imgDiv);
}
for (let i = 0; i < people.length; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("column-img");
    imgDiv.classList.add("column-img-people");
    const image = document.createElement("img");
    image.src = people[i];
    imgDiv.appendChild(image);
    chooseImg_people_container.appendChild(imgDiv);
}

const columnImages_flowers = document.querySelectorAll(".column-img-flowers");
const columnImages_nature = document.querySelectorAll(".column-img-nature");
const columnImages_people = document.querySelectorAll(".column-img-people");
for (let i = 0; i < columnImages_flowers.length; i++) {
    columnImages_flowers[i].addEventListener("click", () => {
        changeColumnImage(i, columnImages_flowers, slideShow_img_flowers, flowers, 'flowers');
    });
}

for (let i = 0; i < columnImages_nature.length; i++) {
    columnImages_nature[i].addEventListener("click", () => {
        changeColumnImage(i, columnImages_nature, slideShow_img_nature, nature, 'nature');
    });
}

for (let i = 0; i < columnImages_people.length; i++) {
    columnImages_people[i].addEventListener("click", () => {
        changeColumnImage(i, columnImages_people, slideShow_img_people, people, 'people');
    });
}

function changeColumnImage(index, array, slideShowimg, arr, type) {
    for (i = 0; i < array.length; i++)
        array[i].className = array[i].className.replace(
            " active",
            ""
        );
    array[index].classList += " active";
    slideShowimg.src = arr[index];
    if (type === 'flowers') {
        curIdx_flowers = index;

    } else if (type === 'nature') {
        curIdx_nature = index;
    } else if (type === 'people') {
        curIdx_people = index;
    }
}

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
        for (i = 0; i < columnImages_flowers.length; i++)
            columnImages_flowers[i].className = columnImages_flowers[i].className.replace(
                " active",
                ""
            );
        columnImages_flowers[curIdx_flowers].classList += " active";
    } else if (array === nature) {
        slideShow_img_nature.src = nature[curIdx_nature];
        for (i = 0; i < columnImages_nature.length; i++)
            columnImages_nature[i].className = columnImages_nature[i].className.replace(
                " active",
                ""
            );
        columnImages_nature[curIdx_nature].classList += " active";
    } else if (array === people) {
        slideShow_img_people.src = people[curIdx_people];
        for (i = 0; i < columnImages_people.length; i++)
            columnImages_people[i].className = columnImages_people[i].className.replace(
                " active",
                ""
            );
        columnImages_people[curIdx_people].classList += " active";
    }
    slideShow_container.classList.add("fadeIn");
}