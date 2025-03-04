/**
 
The Interface Segregation Principle (ISP) is one of the SOLID principles in software design. It states:

Clients should not be forced to depend on interfaces they do not use.

In simpler terms:

It's better to have many small, specific interfaces rather than a large, general-purpose interface.
A class should not be required to implement methods it doesn't need.
This principle is aimed at keeping interfaces focused and client-specific, ensuring that users (clients) of the interfaces are not burdened with unnecessary methods.
 */


// Interface for Printing
class Printer {
    print() {
      throw new Error("Method not implemented.");
    }
  }
  
  // Interface for Scanning
  class Scanner {
    scan() {
      throw new Error("Method not implemented.");
    }
  }
  
  // Interface for Faxing
  class Faxer {
    fax() {
      throw new Error("Method not implemented.");
    }
  }
  
  class MultiFunctionPrinter extends Printer {
    print() {
      console.log("Printing...");
    }
  }
  
  class ScannerPrinter extends Printer {
    print() {
      console.log("Printing...");
    }
  
    scan() {
      console.log("Scanning...");
    }
  }
  
  class OldPrinter extends Printer {
    print() {
      console.log("Printing...");
    }
  }
  
  // Usage
  const printer = new OldPrinter();
  printer.print();  // Printing...
  
  const multifunctionPrinter = new ScannerPrinter();
  multifunctionPrinter.print();  // Printing...
  multifunctionPrinter.scan();   // Scanning...
  