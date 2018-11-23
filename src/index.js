import Alpha from './mp3/alpha.mp3'
import Beta from './mp3/beta.mp3'
import Gamma from './mp3/gamma.mp3'

import './index.scss';

const orientation = document.getElementById('orientation');
const rotationrate = document.getElementById('rotationrate');
const acceleration = document.getElementById('acceleration');
const accelerationgravity = document.getElementById('accelerationgravity');

let ap = {
    alpha: new Audio(Alpha),
    beta: new Audio(Beta),
    gamma: new Audio(Gamma)
};
/*
let o = 0;
window.addEventListener('deviceorientation', e => {
    if (o % 5 === 0) orientation.innerText = `Orientation: \n\n Alpha: ${e.alpha} \n Beta: ${e.beta} \n\Gamma: ${e.gamma} \n\n\n`;
    o++;
}, true);
*/
let rr = 0;
let a = 0;
let ag = 0;
window.addEventListener('devicemotion', e => {
    if (rr % 5 === 0) rotationrate.innerText = `Rotation Rate: \n\n x: ${e.rotationRate.alpha} \n y: ${e.rotationRate.beta} \n z: ${e.rotationRate.gamma} \n\n\n`;
    rr++;

    if (a % 5 === 0) acceleration.innerText = `Acceleration \n\n x: ${e.acceleration.x} \n y: ${e.acceleration.y} \n z: ${e.acceleration.z} \n\n\n`;
    a++;

    if (ag % 5 === 0) accelerationgravity.innerText = `Acceleration w gravity \n\n x: ${e.accelerationIncludingGravity.x} \n y: ${e.accelerationIncludingGravity.y} \n z: ${e.accelerationIncludingGravity.z} \n\n\n`;
    ag++;

    if (e.rotationRate.alpha > 100) ap.alpha.play();
    if (e.rotationRate.beta > 100) ap.beta.play();
    if (e.rotationRate.gamma > 100) ap.gamma.play();

}, true);
