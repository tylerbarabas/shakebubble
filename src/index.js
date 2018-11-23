import './index.scss';
const root = document.getElementById('root');
window.addEventListener('deviceorientation', e => {
    root.innerText = `Alpha: ${e.alpha} Beta: ${e.beta} Gamma: ${e.gamma} `;
}, true);
