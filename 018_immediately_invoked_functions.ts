var names: string[] = ['James', 'Abby', 'Sierra'];
var counter: number = 0;

(function () {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);