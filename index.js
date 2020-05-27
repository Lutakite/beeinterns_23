const form = document.querySelector('.form');
const legend = document.querySelector('.legend');
const tryclick = document.querySelector('.tryclick');

document.addEventListener('submit', (event) => {
    alert('Submit ok');
});


function f(event) {
    form.style.background = 'black';
}
  
for (const btn of document.querySelectorAll('.btn')) {
    btn.addEventListener('focus', f)
}


document.addEventListener('keypress', (event) => {
    form.style.background = 'pink';
});

window.addEventListener('resize', (event) => {
    legend.style.background = 'green';
});

let i = 50;
tryclick.addEventListener('mouseover', (event) => {
    tryclick.style.transform = 'translate(' + i + 'px, -' + i + 'px)';
    i += Math.floor(Math.random() * (50 + 50)) - 50;
}, {capture: true});