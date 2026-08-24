// console.log("Hii Sir");
const root = document.getElementById("container");

const btn = document.getElementById("btn");
console.log(btn);
console.log(root);

async function getData() {
    // alert("Hii Sir");
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    root.innerHTML = `<h2 style="color: blue;">${jsonData[0].title}</h2>`;
    // console.log(jsonData);
   
        
   
} btn.addEventListener("click", getData);
