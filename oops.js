// class BankAccount{
//     name;
//     accountNo;
//     constructor(name,accountNo){
//         this.name=name;
//         this.accountNo=accountNo;
//     }

//     display(){
//         console.log(name);
//         console.log(this.accountNo);
//     }
// }


// Parent class
class BankAccount {
    constructor(name, accountNo, balance) {
        this.name = name;
        this.accountNo = accountNo;
        this.balance = balance;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Account No:", this.accountNo);
        console.log("Balance:", this.balance);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdraw Amount:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }
}

// Child class
class SalaryAccount extends BankAccount {
    constructor(name, accountNo, balance, salary) {
        super(name, accountNo, balance);
        this.salary = salary;
    }

    calculateSalaryAfterWithdraw(amount) {
        this.withdraw(amount);
        let remainingSalary = this.salary - amount;

        console.log("Salary:", this.salary);
        console.log("Salary After Withdraw:", remainingSalary);
    }

    display() {
        super.display();
        console.log("Salary:", this.salary);
    }
}

// Object creation
let account = new SalaryAccount(
    "Dhruv",
    123456,
    50000,
    40000
);

account.display();

account.calculateSalaryAfterWithdraw(10000);

setTimeout(() => {
   console.log("My name is Dhruv Sharma") 
}, 5000);