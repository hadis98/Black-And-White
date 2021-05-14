const flowers = [
  "images/flowers/julia-kadel-8PyMrTiVK4E-unsplash_40.jpg",
  "images/flowers/anca-gabriela-zosin-OYEsm66ynm4-unsplash.jpg",
  "images/flowers/priscilla-du-preez-5QQ-YCp0beM-unsplash.jpg",
  "images/flowers/ryan-song-ttCNLEiIvjM-unsplash.jpg",
];

const nature = [
  "images/nature/cody-fitzgerald-4NwnTnKwscI-unsplash.jpg",
  "images/nature/david-banning-BKrI50Vjm3I-unsplash.jpg",
  "images/nature/devang-punia-L3aV7ZzwYE4-unsplash.jpg",
  "images/nature/ines-alvarez-fdez-hKug0W1tnVU-unsplash.jpg",
];

const people = [
  "images/human/omid-armin-xWVyLLUztv0-unsplash.jpg",
  "images/human/charles-gaudreault-qmTQW6aMNZU-unsplash.jpg",
  "images/human/joshua-fuller-07DnduZvZ28-unsplash.jpg",
  "images/human/mohammad-metri-U1ytD7WJvy0-unsplash.jpg",
];

const flowersBtn = document.getElementById('flowers-collection');
const natureBtn = document.getElementById('nature-collection');
const peopleBtn = document.getElementById('people-collection');

const flowers_slideshow = document.getElementById('flowers-slide');
const nature_slideshow = document.getElementById('nature-slide');
const people_slideshow = document.getElementById('people-slide');

const slideShow_img = document.querySelector(".slideShow__container img");
const slideShow_img_flowers = document.querySelector('#flowers-slide img');
const slideShow_img_nature = document.querySelector('#nature-slide img');
const slideShow_img_people = document.querySelector('#people-slide img');
const prevBtnFlowrs = document.querySelector("#flowers-prev");
const nextBtnFlowers = document.querySelector("#flowers-next");

const prevBtnNature = document.querySelector("#nature-prev");
const nextBtnNature = document.querySelector("#nature-next");

const prevBtnPeople = document.querySelector("#people-prev");
const nextBtnPeople = document.querySelector("#people-next");

flowersBtn.addEventListener('click',()=>{
    flowers_slideshow.style.display ="flex";
    people_slideshow.style.display ="none";
    nature_slideshow.style.display = "none";
    slideShow_img_flowers.src = flowers[curIdx_flowers];
})

natureBtn.addEventListener('click',()=>{
    flowers_slideshow.style.display ="none";
    people_slideshow.style.display ="none";
    nature_slideshow.style.display = "flex";
    slideShow_img_nature.src = nature[curIdx_flowers];
})

peopleBtn.addEventListener('click',()=>{
    flowers_slideshow.style.display ="none";
    nature_slideshow.style.display = "none";
    people_slideshow.style.display ="flex";
    slideShow_img_people.src = people[curIdx_flowers];
})




prevBtnFlowrs.addEventListener("click", ()=>{
    clickPrevBtn(flowers);
});
nextBtnFlowers.addEventListener("click", ()=>{
    clickNextBtn(flowers)
});

prevBtnNature.addEventListener("click", ()=>{
    clickPrevBtn(nature);
});
nextBtnNature.addEventListener("click", ()=>{
    clickNextBtn(nature)
});

prevBtnPeople.addEventListener("click", ()=>{
    clickPrevBtn(people);
});
nextBtnPeople.addEventListener("click", ()=>{
    clickNextBtn(people)
});

let curIdx_flowers = 0;
let curIdx_nature = 0;
let curIdx_people = 0;

function clickPrevBtn(array) {
  let index;
  if (array === flowers) {
    index = curIdx_flowers;
  } else if (array === nature) {
    index = curIdx_nature;
  } else if (array === people) {
    index = curIdx_people;
  }

  if (index > 0) {
    index--;
  } else if (index === 0) {
    index = array.length - 1;
  }

  if (array === flowers) {
    curIdx_flowers = index;
  } else if (array === nature) {
    curIdx_nature = index;
  } else if (array === people) {
    curIdx_people = index;
  }
  changeImage(array);
}
function clickNextBtn(array) {
  let index;
  if (array === flowers) {
    index = curIdx_flowers;
  } else if (array === nature) {
    index = curIdx_nature;
  } else if (array === people) {
    index = curIdx_people;
  }
  if (index < array.length - 1) {
    index++;
  } else if (index === array.length - 1) {
    index = 0;
  }
  if (array === flowers) {
    curIdx_flowers = index;
  } else if (array === nature) {
    curIdx_nature = index;
  } else if (array === people) {
    curIdx_people = index;
  }
  changeImage(array);
}

function changeImage(array) {
  let index;
  if (array === flowers) {
    slideShow_img_flowers.src = flowers[curIdx_flowers];
  } else if (array === nature) {
    slideShow_img_nature.src = nature[curIdx_nature];
  } else if (array === people) {
    slideShow_img_people.src = people[curIdx_people];
  }
}
