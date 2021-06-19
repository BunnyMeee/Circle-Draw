var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("lineWidth").value;
    radius = document.getElementById("radius").value
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "myMouseLeave";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUp";
}


function clearArea() {
    ctx.clearRect(0, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("mouseMove", myMouseMove);
function myMouseMove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last_position_of_x_and_y_coordinate =");
        console.log("x=" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current_position_of_x_and_y_coordinate =");
        console.log("x=" + current_position_of_mouse_x + "y =" + current_position_of_mouse_yu);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}
