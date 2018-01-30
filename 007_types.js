// Boolean
var paidAccount = true;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "James Cross";
// Array
var ages = [33, 28, 11];
var names = ["James", "Cross", "Jen"];
// Tuple
var player;
player = [3, 'Corerra'];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
var apiData = [123, 'Cross', false];
// Void
function printOut(msg) {
    console.log(msg);
}
