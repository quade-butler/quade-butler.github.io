const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/atc_example.svg") {
        myImage.setAttribute("src", "images/atc_filter.svg");
        myImage.setAttribute("width", "500px");
    } else {
        myImage.setAttribute("src", "images/atc_example.svg");
        myImage.setAttribute("width", "500px");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Nonlinear Filtering Using Double Exponenital Quadrature by ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Nonlinear Filtering Using Double Exponenital Quadrature by ${storedName}`;
}
  
myButton.onclick = () => {
setUserName();
};
  