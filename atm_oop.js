export default class ATM {
    constructor(toWithdraw) {
        this.toWithdraw = toWithdraw.toFixed(2);
        this.available = 5000;
        this.notesAvailable = [100, 50, 10, 5, 1];
    }

    run() {
        console.log("Amount to withdraw: " + String(this.toWithdraw));
        if (this.checkAvailableCach(this.available, this.toWithdraw)) {
            const { notesToDispence, amountLeft } = this.prepareNotes(
                this.toWithdraw,
                this.notesAvailable
            );
            console.log(`Bank notes: ${notesToDispence}`);
            console.log(
                `Amount dispenced: ${notesToDispence.reduce(
                    (a, b) => a + b,
                    0
                )}`
            );
            if (amountLeft)
                console.log(`Amount not dispenced: ${amountLeft.toFixed(2)}`);
        }
    }

    /*** check if we have enough moneyu in the machine */
    checkAvailableCach() {
        if (this.available > this.toWithdraw) {
            console.log("Processing... Please wait.");
            return true;
        } else {
            console.log("Amount not available in the ATM");
            return false;
        }
    }

    /*** Prepare cach giving the larger notes first */
    prepareNotes() {
        let amountLeft = this.toWithdraw;
        let preparedAmount = 0;
        const notesToDispence = [];

        /*** give $100 notes first */
        if (amountLeft / this.notesAvailable[0] >= 0) {
            const quantity = amountLeft / this.notesAvailable[0];

            for (let i = 0; i < Math.floor(quantity); i++) {
                preparedAmount += this.notesAvailable[0];
                notesToDispence.push(this.notesAvailable[0]);
                amountLeft -= this.notesAvailable[0];
            }
        }

        /*** give $50 notes second */
        if (amountLeft / this.notesAvailable[1] >= 0) {
            const quantity = amountLeft / this.notesAvailable[1];

            for (let i = 0; i < Math.floor(quantity); i++) {
                preparedAmount += this.notesAvailable[1];
                notesToDispence.push(this.notesAvailable[1]);
                amountLeft -= this.notesAvailable[1];
            }
        }

        /*** give $10 notes third */
        if (amountLeft / this.notesAvailable[2] >= 0) {
            const quantity = amountLeft / this.notesAvailable[2];

            for (let i = 0; i < Math.floor(quantity); i++) {
                preparedAmount += this.notesAvailable[2];
                notesToDispence.push(this.notesAvailable[2]);
                amountLeft -= this.notesAvailable[2];
            }
        }

        /*** give $5 notes fourth */
        if (amountLeft / this.notesAvailable[3] >= 0) {
            const quantity = amountLeft / this.notesAvailable[3];

            for (let i = 0; i < Math.floor(quantity); i++) {
                preparedAmount += this.notesAvailable[3];
                notesToDispence.push(this.notesAvailable[3]);
                amountLeft -= this.notesAvailable[3];
            }
        }

        if (amountLeft / this.notesAvailable[4] >= 0) {
            const quantity = amountLeft / this.notesAvailable[4];

            for (let i = 0; i < Math.floor(quantity); i++) {
                preparedAmount += this.notesAvailable[4];
                notesToDispence.push(this.notesAvailable[4]);
                amountLeft -= this.notesAvailable[4];
            }
        }

        return { notesToDispence, amountLeft };
    }
}
