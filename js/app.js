//<div class="shuffling">
//    <div class="d-grid justify-content-center">
//        <button class="show btn btn-dark btn-lg m-3"></button>
//        <button class="shuffle btn btn-dark btn-lg m-3"></button>
//    </div>
//    <div class="gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-5"></div>
//    </div>
//</div>

const divShuffling = document.createElement('div');
divShuffling.className = "shuffling";
const divButton = document.createElement('div');
divButton.className = "d-grid justify-content-center"; 
const buttonShow = document.createElement('button');
buttonShow.className ="show btn btn-dark btn-lg m-3";
buttonShow.textContent = "Rodyti";
divButton.appendChild(buttonShow);
const buttonShuffle = document.createElement('button');
buttonShuffle.className ="shuffle btn btn-dark btn-lg m-3";
buttonShuffle.textContent = "Maišyti";
divButton.appendChild(buttonShuffle);
divShuffling.appendChild(divButton);
const divGallery = document.createElement('div');
divGallery.className = "gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-5";
divShuffling.appendChild(divGallery);
document.querySelector('.container').appendChild(divShuffling);

// F-ja failų numeriui (nuo 1 iki 10) maišyti
// const randomIndex = ()=>{
//     return Math.floor(Math.random()*(11-1)+1);
// }

// f-ja, kuri vykdo ciklą nuo paskutinio iki pirmo elemento, sukeičiant masyvo elementus vietomis atsitiktine tvarka
const shuffleArray = (array)=>{
    for (let i = array.length - 1; i > 0; i--) {
        // j reikšmei priskiria atsitiktinį skaičių skaičių nuo 0 iki i
        const j = Math.floor(Math.random() * (i + 1));
        // Masyvo elementų sukeitimas vietomis
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//
// 'Rodyti' mygtukas įgauna reikšmę style="display: none" ir
// prideda 10 paveiksleliu iš img/gallery katalogo
const show = document.querySelector('.show');
show.addEventListener('click', ()=>{
    show.style="display: none";
    const gallery = document.querySelector('gallery');
    for (let i = 1; i < 11; i++){
        const block = document.createElement('div');
        block.className="cards col";
        const image = document.createElement('img');
        image.className="img-fluid border border-danger rounded";
        image.src = "img/gallery/"+i+".jpg";
        block.appendChild(image);
        divGallery.appendChild(block);
    }
    // Susirenkam i srcValuesOrigin masyva images.src reikšmes
    const srcValuesOrigin = Array.from(document.querySelectorAll('img')).map(image => image.src);
    // console.log(srcValuesOrigin);
    //
    // const srcValuesOrigin = [
    //     "img/gallery/1.jpg",
    //     "img/gallery/2.jpg",
    //     "img/gallery/3.jpg",
    //     "img/gallery/4.jpg",
    //     "img/gallery/5.jpg",
    //     "img/gallery/6.jpg",
    //     "img/gallery/7.jpg",
    //     "img/gallery/8.jpg",
    //     "img/gallery/9.jpg",
    //     "img/gallery/10.jpg"
    // ];
    //
    // Pasiimam audio failus
    const audioHoly = new Audio('audio/holy.mp3');
    const audioDog = new Audio('audio/barking.mp3');
    // Myktuko 'Maišyti' veiksmų paleidimas
    const shuffle = document.querySelector('.shuffle');
    shuffle.addEventListener('click', ()=>{
        audioHoly.play();
        shuffleArray(srcValuesOrigin);
        //console.log(srcValuesOrigin);
        let cards = document.querySelectorAll('img');
        for (let i = 0; i < cards.length; i++) {
            cards[i].src = srcValuesOrigin[i];
        }
        // for (const card of cards){
        //     card.src = "img/gallery/"+randomIndex()+".jpg";
        //     console.log(card.scr);
        // }
    })
    //
    // Double-click pakeičia paveiksliuką į pastovų christmas.gif
    // let images = document.querySelectorAll('img');
    let cards = document.querySelectorAll('img');
    for(let card of cards){
        card.addEventListener('dblclick', ()=>{
        audioDog.play();
        card.src = "img/christmas.gif";
    })
    }
    //
})