"use strict";

import { atm as atmOne } from "./atm_procedural.js";
import ATMTWO from "./atm_oop.js";
import { checkIfCachAvailable, prepareCash } from "./atm_functional.js";

console.log(
    "############################ PROCEDURAL ###################################"
);

atmOne(4453.223);

console.log("");
console.log("");
console.log(
    "############################ OBJECT-ORIENTED ##############################"
);

new ATMTWO(551.234322423).run();

console.log("");
console.log("");
console.log(
    "############################ Functional ##############################"
);

const available = 5000;
const toWithdraw = 244.123;
const notesAvailable = [100, 50, 10, 1];

console.log(`Amount to withdraw: ${toWithdraw.toFixed(2)}`)
const isCachAvailable = checkIfCachAvailable(available, toWithdraw);

if (isCachAvailable) {
    const { notesToDispence, amountLeft } = prepareCash(
        toWithdraw,
        notesAvailable
    );
    console.log(`Bank notes: ${notesToDispence}`);
    console.log(
        `Amount dispenced: ${notesToDispence.reduce((a, b) => a + b, 0)}`
    );
    if (amountLeft)
        console.log(`Amount not dispenced: ${amountLeft.toFixed(2)}`);
}
