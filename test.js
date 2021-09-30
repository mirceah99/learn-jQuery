var a = 2;
const b = this;
function function1(){
    console.log(this);
}
const c = function1;

console.log(this);
console.log(global);