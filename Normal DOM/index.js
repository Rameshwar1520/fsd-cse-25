


 const root = document.getElementById('container');
 const button = document.getElementById('btn');
const h2 = document.createElement('h2');
const img = document.createElement('img');
const div = document.createElement('div');
console.log(root)
try{
function showData(){
    h2.innerText = 'Welcome to DOM';
    h2.style.color = 'red';
    h2.style.backgroundColor = 'yellow';
 img.src = "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg";
    img.setAttribute('height', '200');
    img.setAttribute('width', '200');
    div.style.border = '2px dotted blue';
    div.appendChild(img);
    div.appendChild(h2);

      root.appendChild(div);
      button.removeChild(button.firstChild);
        button.style.display = 'none';

}
}catch(error){
    console.log("error is"+error);
}
finally{ 

}
button.addEventListener('click', showData);

