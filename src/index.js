import './index.scss';
const orientation = document.getElementById('orientation');
const motion = document.getElementById('motion');
let count = 0;
window.addEventListener('deviceorientation', e => {
    if (count % 5 === 0) root.innerText = `Alpha: ${e.alpha} \n\n Beta: ${e.beta} \n\n Gamma: ${e.gamma} `;
    count++;
}, true);

window.addEventListener('devicemotion', e => {
    console.log('e', e);
    motion.innerText = e;
}, true);
