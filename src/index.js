import './index.scss';
const root = document.getElementById('root');
let count = 0;
window.addEventListener('deviceorientation', e => {
    if (count % 5 === 0) root.innerText = `Alpha: ${e.alpha} \n\n Beta: ${e.beta} \n\n Gamma: ${e.gamma} `;
    count++;
}, true);
