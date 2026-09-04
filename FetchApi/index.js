// console.log(hiii)
const root = document.getElementById("container");
const button = document.getElementById("btn");
const display = document.getElementById("display");
const loader = document.getElementById("loader");

async function fetchData() {
    try {
        loader.textContent = "Loading...";
        const serverData = await fetch("https://fakestoreapi.com/products/");
        const jsonData = await serverData.json();

        let table = `<table border="">
            ${jsonData.map((item) => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.image}" alt="${item.title}" width="100"></td>
                    <td>${item.description}</td>
                </tr>
            `)}

        </table>`;

        display.innerHTML = table;
    } catch (error) {
        console.log("error is" + error);
    } finally {
        loader.textContent = "";
    }
}

button.addEventListener("click", fetchData);