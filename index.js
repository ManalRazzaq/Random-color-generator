const containerElemnet = document.querySelector('.container');
// 1st STEP:
for (let index = 0; index < 10; index++) {
    const divelement = document.createElement('div');
    divelement.classList.add('color-container');
    containerElemnet.appendChild(divelement);
    
}
// 3rd STEP:
const colorCont = document.querySelectorAll('.color-container');
// fourth STEP
const genreateColor = ()=>{
    colorCont.forEach((currElem)=>{
     const callrandomNumbers = randomNumbers();
    //  console.log(callrandomNumbers);
     currElem.style.backgroundColor = "#" + callrandomNumbers;
     currElem.innerText = "#" + callrandomNumbers;
    })
}

// 2nd step Create a function for random  Numbers

const randomNumbers = ()=>{
    const randomchars = "0123456789abcdef";
    const randomlength = 6;
    let boxcolor = "";
    for (let index = 0; index < randomlength; index++) {
        const numberlenght = Math.floor(Math.random() *randomchars.length);
        // console.log(numberlenght);
        boxcolor  += randomchars.substring(numberlenght , numberlenght + 1);
        // console.log(boxcolor);
        
        
    }
    return boxcolor
}
randomNumbers();
genreateColor();




























