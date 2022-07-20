"use strict";

import { atm as atmOne } from "./atm_procedural.js";
import ATM from "./atm_oop.js";

console.log(
    "############################ ATM ONE (PROCEDURAL) ##############################"
);
atmOne(4453.223);

console.log("");
console.log("");
console.log(
    "############################ ATM TWO (OOP) ##############################"
);

new ATM(551.234322423).run();
