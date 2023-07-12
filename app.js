//getting element dom
let elem = document.querySelector('.ele');
let srt = document.querySelector('.srt');
let dd = document.querySelector('.dr')
let strtbtn = document.querySelector('.start');
let strt = document.querySelector('.strt');
let game = document.querySelector('.game');
let done = document.querySelector('.done');
let over = document.querySelector('.over');
let msg = document.querySelector('.msg');
let strta = document.querySelector('.start-again');

//array to initialize
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sorted array thing
let i = 0;
let arrsrt = [];

//dragging element creation
let arr1 = arr.map((e) => {
    let rnd = Math.floor((Math.random() * 100) % 10);
    let p = document.createElement('p');
    p.setAttribute('class', 'drager');
    arrsrt[i] = arr[rnd];
    ++i;
    p.innerText = arr[rnd];
    elem.appendChild(p);

})
i = 0;//setting starting pointer to zero

//drop elements creation
let arr2 = arr.map((e) => {
    let p = document.createElement('p')
    p.setAttribute('class', 'sorter');
    p.innerText = "?";
    srt.appendChild(p);

})

//event listener starts

//starting game
strtbtn.addEventListener('click', () => {
    strt.style.display = "none";
    game.style.display = "flex";
    document.title = "Game Started";
})

//drageer start
let indx = 0;
let srtr = document.querySelectorAll('.sorter');
let drg = document.querySelectorAll('.drager')
drg.forEach((e, ind) => {
    e.setAttribute('draggable', 'true');
    e.addEventListener('dragstart', (el) => {
        el.dataTransfer.setData("text/plain", el.target.innerText)
    })
    e.addEventListener('drag', () => {
        indx = ind;
    })
})


//draggr end and dropeer 
srtr.forEach((e, ind) => {
    e.addEventListener('drop', (el) => {
        let data = el.dataTransfer.getData("text/plain");
        if (e.innerText == '?') {
            e.innerText = data;
            drg[indx].innerText = "?"
        }
        el.preventDefault();
    })
    e.addEventListener('dragover', (el) => {
        el.preventDefault()
    })
})

//conclude the game
done.addEventListener('click', () => {
    document.title = "Game Concluded";
    game.style.display = "none";
    over.style.display = "flex";
    //scoring
    let gt = document.querySelectorAll('.sorter');
    arrsrt.sort();
    console.log(arrsrt)
    let c = 0;
    for (let j = 0; j < gt.length; j++) {
        if (gt[j].innerText == arrsrt[j]) c++;
    }
    msg.innerText = `Congrats !! You have Scored ${(c / 10) * 100} %`
})

//start-Again
strta.addEventListener('click', () => {
    location.reload();
    // console.log(location)
})