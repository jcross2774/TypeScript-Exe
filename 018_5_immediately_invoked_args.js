// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('James', 'Cross'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Jennifer', 'Ryan');
//# sourceMappingURL=018_5_immediately_invoked_args.js.map