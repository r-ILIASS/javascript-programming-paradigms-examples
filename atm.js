/*** EXAMPLE OF PROCEDURAL PROGRAMMING ***/

/** Basic ATM fucntionality 
 * @toWithdraw positive number between 0 and 99999
 */
export function atm(toWithdraw) {
    
    const available = 5000;
    const notesAvailable = [100, 50, 10, 5, 1];
    const notesToDispence = [];
    let preparedAmount = 0;
    let amountLeft = toWithdraw;

    if ((toWithdraw <= 0 && toWithdraw < 99999) || !toWithdraw)
        throw Error("Provide a positive number");
    console.log(`Amount to withdraw: ${toWithdraw}`);

    /*** check If we have enough in the machine */
    if (available >= toWithdraw) {
        console.log("Processing... Please wait.");
    } else {
        throw Error("Amount not availbale in the ATM");
    }

    /*** give $100 notes first */
    if (amountLeft / notesAvailable[0] >= 0) {
        const quantity = amountLeft / notesAvailable[0];

        for (let i = 0; i < Math.floor(quantity); i++) {
            preparedAmount += notesAvailable[0];
            notesToDispence.push(notesAvailable[0]);
            amountLeft -= notesAvailable[0];
        }
    }

    /*** give $50 notes second */
    if (amountLeft / notesAvailable[1] >= 0) {
        const quantity = amountLeft / notesAvailable[1];

        for (let i = 0; i < Math.floor(quantity); i++) {
            preparedAmount += notesAvailable[1];
            notesToDispence.push(notesAvailable[1]);
            amountLeft -= notesAvailable[1];
        }
    }

    /*** give $10 notes third */
    if (amountLeft / notesAvailable[2] >= 0) {
        const quantity = amountLeft / notesAvailable[2];

        for (let i = 0; i < Math.floor(quantity); i++) {
            preparedAmount += notesAvailable[2];
            notesToDispence.push(notesAvailable[2]);
            amountLeft -= notesAvailable[2];
        }
    }

    /*** give $5 notes fourth */
    if (amountLeft / notesAvailable[3] >= 0) {
        const quantity = amountLeft / notesAvailable[3];

        for (let i = 0; i < Math.floor(quantity); i++) {
            preparedAmount += notesAvailable[3];
            notesToDispence.push(notesAvailable[3]);
            amountLeft -= notesAvailable[3];
        }
    }

    if (amountLeft / notesAvailable[4] >= 0) {
        const quantity = amountLeft / notesAvailable[4];

        for (let i = 0; i < Math.floor(quantity); i++) {
            preparedAmount += notesAvailable[4];
            notesToDispence.push(notesAvailable[4]);
            amountLeft -= notesAvailable[4];
        }
    }
    console.log(`Bank notes: ${notesToDispence}`);
    console.log(
        `Amount dispenced: ${notesToDispence.reduce((a, b) => a + b, 0)}`
    );
    if (amountLeft) console.log(`Amount not dispenced: ${amountLeft.toFixed(2)}`);
}
