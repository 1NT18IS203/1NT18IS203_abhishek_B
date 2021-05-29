const b1 = document.getElementsByClassName("b1")[0];
const b2 = document.getElementsByClassName("b1")[0].children[0];
const b3 = document.getElementsByClassName("b3")[0];
const b4 = document.getElementsByClassName("dead")[0];
const b5 =document.getElementsByClassName("b4")[0];
const button = document.getElementsByClassName("sub")[0];
var arr=[];





b1.addEventListener('mouseenter', ()=>{
    
    arr.push("public area");
   
    console.log(" public area");
});


b1.addEventListener('click',(event)=>{
    if( event.target.style.backgroundColor === 'rgb(11, 54, 173)')
        event.target.style.backgroundColor='black';
    else
        event.target.style.backgroundColor = 'rgb(11, 54, 173)';
    console.log(event.target);
})

b2.addEventListener('click',(event)=>{
    event.stopPropagation();
    if( event.target.style.backgroundColor === 'rgb(39, 204, 204)')
    event.target.style.backgroundColor='green';
else
    
    event.target.style.backgroundColor = 'rgb(39, 204, 204)';

    console.log(event.target);
})

b3.addEventListener('click',(event)=>{
    event.stopPropagation();
    if(event.target.style.backgroundColor==='rgb(236, 190, 35)')
        event.target.style.backgroundColor='pink';
    else
    event.target.style.backgroundColor = 'rgb(236, 190, 35)'
    console.log(event.target);
})

b5.addEventListener('click',(event)=>{

    event.stopPropagation();
    if(event.target.style.backgroundColor==='rgb(238, 38, 38)')
        event.target.style.backgroundColor='white';
    else
        event.target.style.backgroundColor = 'rgb(238, 38, 38)'
    
    console.log(event.target);
})





  
b2.addEventListener('mouseenter', ()=>{
    arr.push("security area");
    console.log("security area");
});

b3.addEventListener('mouseenter', ()=>{
    arr.push("Unauthorized area");
    console.log("Unauthorized area");
});

b4.addEventListener('mouseenter', ()=>{
    arr.push("Danger Zone");
    console.log("Danger Zone");
});

b4.addEventListener('click', ()=>{
    alert("You are dead!");
   
})

button.addEventListener('click',()=>{
    
        document.getElementsByClassName("out")[0].innerHTML = arr.toString() ;
  
})


