// Boolean
let paidAccount : boolean = true;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "James Cross";

// Array
var ages : number[] = [33, 28, 11];
var names : string[] = ["James", "Cross", "Jen"];

// Tuple
let player : [ number, string];
player = [3, 'Corerra'];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [123, 'Cross', false];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}
