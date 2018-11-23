import './index.scss';
window.addEventListener('deviceorientation', e => {
    console.log('Alpha', e.alpha, 'Beta', e.beta, 'Gamma', e.gamma);
}, true);
