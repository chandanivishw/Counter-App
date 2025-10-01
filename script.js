let paraNum = document.getElementById("p-num");
let increaseBtn = document.getElementById("incr-btn");
let decreaseBtn = document.getElementById("dcr-btn");
let resetBtn = document.getElementById("reset-btn");

increaseBtn.addEventListener("click", () => {
    let count = parseInt(paraNum.innerText); // Ensure it's a number
    count++;
    paraNum.innerText = count;
    updateColor(count);

});
decreaseBtn.addEventListener("click", () => {
    let count = parseInt(paraNum.innerText); // Ensure it's a number
    count--;
    paraNum.innerText = count;
    updateColor(count);
    // let count = parseInt(paraNum.innerText); // Ensure it's a number
    // if(count>0){
    // count--;
    // }
    // paraNum.innerText = count;
});
resetBtn.addEventListener("click", () => {
    let count = 0;
    paraNum.innerText = count;
    updateColor(count);
    // setTimeout(()=>{
    //      paraNum.innerText = count;
    //        updateColor(count);
    // },100)
   
  

});
function updateColor(count) {
    paraNum.classList.remove("green", "red", "black");
    if (count > 0) {
        // console.log("green");
        paraNum.classList.add("green");
    } else if (count < 0) {
        // console.log("red");
        paraNum.classList.add("red");
    } else {
        // console.log("black");
        paraNum.classList.add("black");
    }

}


