/*** check if we have enough money in the machine */
export function checkIfCachAvailable(available, toWithdraw) {
    if (available >= toWithdraw) {
        console.log("Processing... Please wait.");
        return true;
    } else {
        console.log("Amount not available in the ATM");
        return false;
    }
}

/*** calculate how much to give prioritizing larger bank-notes */
export function prepareCash(toWithdraw, notesAvailable) {
    const notesToDispence = [];
    let preparedAmount = 0;
    let amountLeft = toWithdraw;

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
    return {
        notesToDispence,
        amountLeft,
    };
}
