// Objects of a superclass should be replaceable with objects of a subclass without altering the correctness of the program.

class Employee {
    constructor() {

    }

    getSaalry() {
        return 200000
    }

}

class AdditionBenifit extends Employee {
    constructor() {
        super()
    }

    getBonus() {
        return 10000
    }
}

class PermanentEmp extends AdditionBenifit {
    constructor() {
        super()
    }

    getFullSalry() {
        return this.getBonus() + this.getSaalry()
    }
}

class ContractEmp extends Employee {
    constructor() {
        super()
    }

    getFullSalry() {
        return  this.getSaalry()
    }
}

const emp1 = new PermanentEmp();
const emp1c = new ContractEmp();

console.log("Permanent employee salary ::",emp1.getFullSalry());
console.log("contract employee salary ::",emp1c.getFullSalry());


// There is a problems getBonus Class is avaiable for contract employee also so it is not following the LSP

