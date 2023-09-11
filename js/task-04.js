const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValuespan = document.querySelector('#value');

let countervalue = 0;

decrementBtn.addEventListener('click', () => {
    countervalue -= 1; 
    counterValuespan.textContent = countervalue;
}); 

incrementBtn.addEventListener('click', () => {
    countervalue += 1;
     counterValuespan.textContent = countervalue;
});


