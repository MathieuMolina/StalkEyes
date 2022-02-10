let balls = document.getElementsByClassName("Ball")


document.onmousemove = function() {


    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY *100 / window.innerWidth + "%";

    console.log("x = "+x);
    console.log("y ="+y)
}