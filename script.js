//js ke true
let modeBtn=document.querySelector("#mode");
let currmode="Light";
modeBtn.addEventListener("click",()=>{
   if(currmode==="Light")
   {
    currmode="dark";
    document.querySelector("body").style.backgroundColor="black";
   }
   else{
    currmode="Light";
    document.querySelector("body").style.backgroundColor="white";
   } 
   console.log(currmode);
});

//********* Classlist in  CSS ke true */
//  let modeBtn=document.querySelector("#mode");
// let  body=document.querySelector("body");
// let currmode="Light";
// modeBtn.addEventListener("click",()=>{
//    if(currmode==="Light")
//    {
//     currmode="dark";
// body.classList.add("dark");
//   }
//     else{
//      currmode="Light";
// body.classList.add("white");
//     } 
//    console.log(currmode);
//  });