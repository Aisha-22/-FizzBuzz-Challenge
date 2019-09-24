var output = [];
var count = 1;

function fizzBuzz(){

if (count % 3 === 0 && count % 5 === 0) {
    output.push("Fizz Buzz");
}   

else if (count % 3 === 0){
    output.push("Fizz");
}
else if (count % 5 === 0){
    output.push("Buzz");
}
    
    count++;
    console.log(output);
}

document.getElementById("output").innerHTML = output;