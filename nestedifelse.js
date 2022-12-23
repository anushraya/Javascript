let winningNumber=19;
let x=prompt("guess");
if(x==winningNumber){
    console.log("correct guess");
}
else{
    if(x < winningNumber){
        console.log("too low")
    }

else{
    console.log("too high")
}
}