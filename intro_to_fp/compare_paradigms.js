// Directions: Rewrite the imperative code below as Object-Oriented

/* 
let status = 'active'
let warp = 2
let type = 'Dilithium Crystal'
let status_report = 'Captain, '

if(status === 'active' && warp <= 4) {
    status_report += 'the engines are active and we could be going faster.'
} else if (status === 'active' && warp > 4) {
    status_report += 'the engines are active and we are going ' + warp + '.'
} else if (status === 'down') {
    status_report += 'the engines are down.'
} else {
    status_report += 'the comms are down and we can`t reach engineering.'
}

console.log(status_report)
*/

class WarpDrive {
  // Creating a class requires to decide what properties to give it.
  // Everything that was a global variable at the imperative program, I want to make a property on class
  constructor(type, recipient) {
    this.type = type;
    this.status = "active";
    this.warp = 2;
    this.recipient = recipient ? recipient : "Captain";
  }

  // The bulk of the logic that the imperative program had in the global scope, I turn into methods
  // Now need to reference values that belong to this instance of class WarpDrive, instead of global variables

  status_report() {
    if (this.status === "active" && this.warp <= 4) {
      return (
        this.recipient + ", the engines are active and we could be going faster"
      );
    } else if (this.status === "active" && this.warp > 4) {
      return (
        this.recipient +
        ", the engines are active and we are going " +
        this.warp
      );
    } else if (this.status === "down") {
      return this.recipient + ", the engines are down";
    } else {
      return (
        this.recipient + ", the comms are down and we can`t reach engineering"
      );
    }
  }

  // Anytime when a variable changing in the imperative program, it is a sign that a method will be needed in this class
  // I added these setter methods as examples for how you could update the state of the object to test the various status_report responses

  set_status(status) {
    this.status = status;
  }

  set_warp(integer) {
    this.warp = integer;
  }
}

// I'm working with classes now so, I have to instantiate the class before I use it

let enterprise_warp = new WarpDrive("Dilithium Chrystal");

enterprise_warp.set_warp(2);

console.log(enterprise_warp.status_report());

// expected output: Captain, the engines are active and we could go faster.
