// // console.log("Hii Sir");
// const root = document.getElementById("container");

// const btn = document.getElementById("btn");
// console.log(btn);
// console.log(root);

// async function getData() {
//     // alert("Hii Sir");
//     const response = await fetch('https://fakestoreapi.com/products');
//     const jsonData = await response.json();
//     root.innerHTML = `<h2 style="color: blue;">${jsonData[0].title}</h2>`;
//     // console.log(jsonData);
   
        
  const btn = document.getElementById('btn');
console.log(btn);

const root = document.getElementById('root');
console.log(root);

const h1 = document.createElement('h1');

const loader = document.createElement('h2');
loader.innerHTML = "Loading.....";

async function showData() {
    try {
        // Show loader before fetching data
        root.appendChild(loader);

        const serverData = await fetch("https://fakestoreapi.com/products");
        const jsonData = await serverData.json();

        // Heading
        h1.innerHTML = `<h1 style="color:red">${jsonData[0].title}</h1>`;

        // Create table
        let table = `
            <table border="1" cellpadding="10">
                <tr>
                    <th>Image</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>

                ${jsonData.map((ele) => {
                    return `
                        <tr>
                            <td>
                                <img src="${ele.image}" height="200" width="200">
                            </td>
                            <td>${ele.id}</td>
                            <td>${ele.title}</td>
                            <td>${ele.price}</td>
                        </tr>
                    `;
                }).join("")}

            </table>
        `;

        root.appendChild(h1);

        // Add table to webpage
        root.innerHTML += table;

    } catch (e) {
        console.log(e);
    } finally {
        // Remove loader
        if (root.contains(loader)) {
            root.removeChild(loader);
        }
    }
}

btn.addEventListener('click', showData);