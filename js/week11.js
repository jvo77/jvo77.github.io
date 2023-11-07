const x = 1;
const y =2;

if(x == y){
    console.log("SUCCESS");
}
else{
    console.log("FAIL");
}
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});
function random(number){
    return Math.floor(Math.random() * number);
}
function random2(number){
    return (Math.random() * number);
}

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let i = 0; i < 100; i++){
        ctx.beginPath();
        let pink = random(255);
        let purple = random(255);
        let blue = random(225);
        let alpha = random2(1);
        let color = "rgba("+pink+","+purple+","+blue+","+alpha+")";
        ctx.fillStyle= color;
        ctx.rect(
            random(canvas.width),
            random(canvas.height),
            random(200),
            random(400),
        );
        ctx.fill();
    }
}


btn.addEventListener("click", draw);