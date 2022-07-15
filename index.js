

const outputColor = document.querySelector(".output-color");
const outputCode = document.querySelector(".output-code");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector("copy-btn");

let hexString = "123456789abcdef";


let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
};



let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();

    let angle = Math.floor(Math.random()*360);

    outputColor.style.background = `linear-gradient(${angle}deg, ${colorOne},${colorTwo})`;
    outputCode.value = `linear-gradient(${angle}deg, ${colorOne},${colorTwo})`;
    document.body.style.background = `linear-gradient(${angle}deg, ${colorOne},${colorTwo})`;
};

generateBtn.addEventListener("click",generateGrad);




window.onload = generateGrad;