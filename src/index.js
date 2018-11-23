import Alpha from './mp3/alpha.mp3'
import Beta from './mp3/beta.mp3'
import Gamma from './mp3/gamma.mp3'
import Spin from './mp3/spin.mp3'
import AssShake from './mp3/assshake.mp3'
import CrotchThrust from './mp3/crotchthrust.mp3'
import LegUp from './mp3/legup.mp3'

import './index.scss';

const orientation = document.getElementById('orientation');
const rotationrate = document.getElementById('rotationrate');
const acceleration = document.getElementById('acceleration');
const accelerationgravity = document.getElementById('accelerationgravity');
const scoreboard = document.getElementById('scoreboard');
const THRESH = 360;

let ap = {
    alpha: new Audio(Alpha),
    beta: new Audio(Beta),
    gamma: new Audio(Gamma),
    spin: new Audio(Spin),
    assShake: new Audio(AssShake),
    crotchThrust: new Audio(CrotchThrust),
    legUp: new Audio(LegUp)
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

let AX = 0;
let highestAX = 0;

let AY = 0;
let highestAY = 0;

let AZ = 0;
let highestAZ = 0;

let RRA = 0;
let highestRRA = 0;

let RRB = 0;
let highestRRB = 0;

let RRG = 0;
let highestRRG = 0;

let shouldTrigger = true;
let triggerThresh = 250;
const triggerSafety = () => {
    shouldTrigger = false;
    setTimeout(() => {
        shouldTrigger = true;
    }, triggerThresh);
}

window.addEventListener('devicemotion', e => {

    AX = Math.abs(e.acceleration.x);
    highestAX = (AX > highestAX) ? AX : highestAX;

    AY = Math.abs(e.acceleration.y);
    highestAY = (AY > highestAY) ? AY : highestAY;


    AZ = Math.abs(e.acceleration.z);
    highestAZ = (AZ > highestAZ) ? AZ : highestAZ;


    RRA = Math.abs(e.rotationRate.alpha);
    highestRRA = (RRA > highestRRA) ? RRA : highestRRA;

    RRB = Math.abs(e.rotationRate.beta);
    highestRRB = (RRB > highestRRB) ? RRB : highestRRB;

    RRG = Math.abs(e.rotationRate.gamma);
    highestRRG = (RRG > highestRRB) ? RRG : highestRRG;

    if (rr % 5 === 0) rotationrate.innerText = `Rotation Rate: \n\n Alpha: ${e.rotationRate.alpha} ${highestRRA} \n Beta: ${e.rotationRate.beta} ${highestRRB} \n Gamma: ${e.rotationRate.gamma} ${highestRRG} \n\n\n`;
    rr++;

    if (a % 5 === 0) acceleration.innerText = `Acceleration \n\n x: ${e.acceleration.x} ${highestAX} \n y: ${e.acceleration.y} ${highestAY} \n z: ${e.acceleration.z} ${highestAZ} \n\n\n`;
    a++;

    if (ag % 5 === 0) accelerationgravity.innerText = `Acceleration w gravity \n\n x: ${e.accelerationIncludingGravity.x} \n y: ${e.accelerationIncludingGravity.y} \n z: ${e.accelerationIncludingGravity.z} \n\n\n`;

    if (ag % 5 === 0) scoreboard.innerText = `Score \n\n Ass shakes: ${me.score.assShakes} \n Spins: ${me.score.spins} \n CrotchThrusts: ${me.score.crotchThrusts} \n Jump: ${me.score.legUps} \n\n\n`;
    ag++;

//    if (Math.abs(e.rotationRate.alpha) > THRESH) ap.alpha.play();
//    if (Math.abs(e.rotationRate.beta) > THRESH) ap.beta.play();
//    if (Math.abs(e.rotationRate.gamma) > THRESH) ap.gamma.play();


    console.log('AX', AX, 'AY', AY, 'AZ', AZ, 'RRA', RRA, 'RRB', RRB, 'RRG', RRG);
   if (shouldTrigger) {

	if (AY > 13) {
	    me.score.legUps++;
//            ap.legUp.play();
	} else if (AX > 5 || AZ > 3) {
	    if (RRB < 85) {
                me.score.crotchThrusts++;
//                ap.crotchThrust.play();
            } else {
                me.score.assShakes++;
 //               ap.assShake.play();
	    }
        }


	if (RRB > 350) {
            me.score.spins++;
//            ap.spin.play();
        }

	triggerSafety();
    }
}, true);

document.body.addEventListener('click', ()=>{ ap.alpha.play(); });
