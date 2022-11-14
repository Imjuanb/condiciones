const imagen = document.querySelector("#img_0");
let estado = 0;

imagen.addEventListener("click", () => {
    let borderx = document.getElementById("img_0");
    
    if (estado === 0) {
        borderx.classList.remove("borderx");
        borderx.classList.add("button");
        estado = 1
        return
    }
     borderx.classList.remove("button",);
        borderx.classList.add("borderx");
        estado = 0
})

// parte 2

const inputCardHeart = document.querySelector("#inputCardHeart");
const inputCardPizza = document.querySelector("#inputCardPizza");
const inputCardDog = document.querySelector("#inputCardDog");

buttonV.addEventListener("click", () => {
    let amountOne =
    parseFloat(inputCardHeart.value) +
    parseFloat(inputCardPizza.value) +
    parseFloat(inputCardDog.value);

    if (amountOne <= 10) {
        paragraph.innerHTML = `<b>llevas: ${amountOne} sticker </b>`;
         } else {
            paragraph.innerHTML = "<b>llevas demasiados stickers </b";
         }
    
})

// parte 3
buttonI.addEventListener("click", () => {
    const addition = counterOne.value + counterTwo.value + counterThree.value;
    // console.log(addition);
    if (addition === "911") {
        paragraphTwo.innerHTML = "<b>password 1 correcto</b";
    } else {
        paragraphTwo.innerHTML = "<b>password incorrecto</b";
     } if (addition === "714") {
        paragraphTwo.innerHTML = "<b>password 2 correcto</b";
        return;
      }
})

