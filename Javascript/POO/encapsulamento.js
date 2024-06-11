class BankAccount {
    constructor(balance){
        this._balance = balance;
    }
    deposit(amount){
        this._balance += amount
        console.log('Done. Successfully added', amount, 'to your balance.');
    }
    withdraw(amount){
        if (amount <= this._balance) {
            this._balance -= this.balance;
            console.log('Done. Successfully withdrew', amount, 'from your balance.')
        } else {
            console.log('Insufficient funds.')
        } 
    }
}

const myCurrency = new BankAccount(500)
myCurrency.deposit(700)
myCurrency.withdraw(1500)
myCurrency.withdraw(1200)