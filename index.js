// console.log("hello I m using js");

// function sum(a,b) {
//     return a+b;
// }

// let a = sum(2,4);
// console.log(a);

// function sqrt(a,b){
//     return Math.sqrt(a,b);
// }

// console.log(sqrt(2,3));

// const sum1 = function(a,b){
//     return(a+b);
// }
// console.log(sum1(3,4));

// const sum2=(a,b)=>{return a+b};
// console.log(sum2(5,6));


//IIFE
// (() => {
//     console.log("heyyy using IIFE")
// })();

// let a=34;
// if(a<40){
//     let a=40;
//     console.log("value of a inside block = "+a);
// }
// console.log("value of a outside block = "+a);

//callback
// function sum(a,b){
//     return a+b;
// }

// function msgwithsum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("Hii," +msg+ " your result is = "+result);
// }
// msgwithsum(sum,"rahul")

// function login(error,msg){
//     if(error){
//         console.log("Error is : "+error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username=="rahulsingh157" && password=="123455"){
//         clbk(null,"login Success")
//     }else{
//         clbk("username or password is incorrect", null)
//     }
// }

// loginHandler("rahulsingh157", "123455", login);

//console.log("one");
//setTimeout(()=>{console.log("Two")},1000)
//console.log("three");

//console.log("one");
  //for(i = 0;i<1000;i++){
    //console.log("i="+1);
  //}
  //console.log("Two");


  //const container = document.getElementById('container');
  
  //const button = document.createElement('button');
  
   
   // const educationDetails = document.createElement('p');
    //educationDetails.innerHTML = '<strong>Degree:</strong> B.Tech<br/><strong>Year: </strong> 3rd Year<br/><strong>College:</strong> ABES Engineering College';
    //resumeDiv.appendChild(educationDetails);
    
   //const skills = document.create
    

    //const contactDetails = document.createElement('p');
  //  contactDetails.innerHTML = '<strong>Email:</strong> rishuu@example.com<br/><strong>Phone:</strong> 9340950818';
    //resumeDiv.appendChild(contactDetails);
  
   // container.appendChild(resumeDiv);
    
    //const newBtn = document.createElement('button');
    //newBtn.innerText = 'Generate Again';
    //newBtn.addEventListener('click', ping);
    //container.appendChild(newBtn);
  //}
  
 // button.addEventListener('click', ping);


  //function ping(){
    //try{
      //loader.innerHTML = "Loading file......"
      //const welcome = document.createElement("h2");

      //container.appendChild()
      //h1.style.backgroundcolor='cyan';
      //h1.stytle.color ='red';


   // }
  //}

  const container = document.getElementById("container");
const image = document.createElement("img");
image.src = "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg";
image.setAttribute("height",200);
image.setAttribute("width",200);

function showResume(){


        container.appendChild(image);
    
    
}
