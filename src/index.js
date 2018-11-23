import Alpha from './mp3/alpha.mp3'
import Beta from './mp3/beta.mp3'
import Gamma from './mp3/gamma.mp3'

import './index.scss';

const orientation = document.getElementById('orientation');
const rotationrate = document.getElementById('rotationrate');
const acceleration = document.getElementById('acceleration');
const accelerationgravity = document.getElementById('accelerationgravity');
const THRESH = 360;

let ap = {
    alpha: new Audio(Alpha),
    beta: new Audio(Beta),
    gamma: new Audio(Gamma)
};

class User {
	constructor(){
		this.score = {
			assShakes: 0,
			spins: 0,
			crotchThrusts: 0,
			legUps: 0
		};
	}
}
let me = new User();
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

    if (Math.abs(e.rotationRate.alpha) > THRESH) ap.alpha.play();
    if (Math.abs(e.rotationRate.beta) > THRESH) ap.beta.play();
    if (Math.abs(e.rotationRate.gamma) > THRESH) ap.gamma.play();
}, true);

document.body.addEventListener('click', ()=>{ ap.alpha.play(); });
