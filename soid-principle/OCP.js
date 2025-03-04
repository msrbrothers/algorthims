
// The Open-Closed Principle (OCP) is one of the five SOLID principles of object-oriented programming, designed to make software systems more maintainable and scalable. It states that:

// Definition
// "A software module should be open for extension but closed for modification."

// This means:

// Open for Extension: You can add new functionality to a module or class.
// Closed for Modification: You should not modify existing code when adding new functionality.




/*
 We have a system to calculate discounts for different user types: regular customers, premium customers, and new types of users in the future.
 
 class DiscountCalculator {
  calculate(userType, amount) {
    if (userType === "regular") {
      return amount * 0.9; // 10% discount
    } else if (userType === "premium") {
      return amount * 0.8; // 20% discount
    }
    return amount; // No discount
  }
}

// Adding a new user type, like "VIP", requires modifying this class
const calculator = new DiscountCalculator();
console.log(calculator.calculate("regular", 100)); // 90
console.log(calculator.calculate("premium", 100)); // 80


 */


// three type of user 

class DiscountStrategy {
    constructor() {

    }

    getDiscount(amount) {
        return amount
    }
}

class RegularCustomerDiscount extends DiscountStrategy {
    getDiscount(amount) {
        return amount * 0.9
    }
}

class PremiumCustomerDiscount extends DiscountStrategy {
    getDiscount(amount) {
        return amount * 0.8
    }
}

class VIPCustomerDiscount {
    getDiscount(amount) {
    return amount * 0.3
    }
}


class DiscountCalculator {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy
    }

    calculate(amount) {
        return this.discountStrategy.getDiscount(amount);
      }
}

const regCustomer = new DiscountCalculator(new RegularCustomerDiscount())

console.log("regCustomer ::", regCustomer.calculate(10000));
