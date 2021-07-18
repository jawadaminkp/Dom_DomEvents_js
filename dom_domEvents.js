// 1 grab elements from the dom
// 2 attach event listeners

//const body = document.querySelector('body');


//used for option 1
 const goCOOCOO = () => {
    const body = document.body;
    body.style.backgroundColor = '#C00C00';
}

//used for option 2
const coffeebuttons = document.querySelectorAll('.coffee-btn');

const goC0FFEE = () =>{
    document.body.style.backgroundColor = '#C0FFEE';
}

coffeebuttons.forEach((button)=>{
    button.onclick = goC0FFEE;
})

// coffeebuttons.onclick = function() {
//     document.body.style.backgroundColor = '#C0FFEE'; 

//this will not work since coffeebuttons are not one element but a node list
// }


//used for option 3

const lalabutton = document.querySelector('.lala-btn');

goLALALA = () => {
    document.body.style.backgroundColor = '#1A1A1A';
}

lalabutton.addEventListener('click', goLALALA);


const buttons = document.querySelectorAll('button');

goBlUE = () => {
    document.body.style.backgroundColor = '#BCC6EA';
}

buttons.forEach(function(button){
    button.addEventListener('mouseleave',goBlUE);
})