
 /*console.log("Hello, World!");

const sum = function(a, b) {
    return a + b;
};
sum(5, 10);

const sqrtsum = function(a, b) {
    return Math.sqrt(sum(a, b));
}

sqrtsum(5, 10); */

 //const sum = (a,b) => {return a+b;};
 
 
 //IIFE (Immediately Invoked Function Expression)

 //(() = > {
   // console.log("hello")
 //})();

 //let a = 10;
 t//ypeof a; //number
 //if(a<10){
   // let a = 20;
    //console.log(a); //20
 //}
 //console.log(a); //10

 //callback function
  //function sum (a, b, ){}

//  function msgWithSum(callback, msg){
    //let result = callback(20,40);
  //  console.log(msg);
  //}
 // msgWithSum(sum,"rahul");

 function login(error, msg){
    if(error){
        console.log("Error: "+error);
    }else{
        console.log("Success: "+msg);
    }
}

function loginHandler(username, password,clbk ){
    if(username == "ptomer" && password == "1234"){
        clbk(null, " Login Sucessfull")
    }else{
        clbk("Invalid username or password", null);
    }
}
 loginHandler("ptomer", "1234", login);