canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");

color="pink";
document.getElementById("color_input").value=color;
width = 5;
document.getElementById("width_input").value=width;

var last_position_of_x, last_position_of_y;
var width_of_screen=screen.width;
var new_canvas_width=screen.width-100;
var new_canvas_height=screen.height-100;

if(width_of_screen < 992){
    document.getElementById("my_canvas").height=new_canvas_height;
    document.getElementById("my_canvas").width=new_canvas_width;

}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
 color = document.getElementById("color_input").value;
 width = document.getElementById("width_input").value;
 


 last_position_of_x=e.touches[0].clientX -canvas.offsetLeft;
 last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
   
 console.log("touchstart");
}




canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x=e.touches[0].clientX -canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
   

        console.log("touchmove");
         ctx.beginPath();
          ctx.strokeStyle = color; 
          ctx.lineWidth = width;
          ctx.moveTo(last_position_of_x, last_position_of_y);
          console.log("Last position of x and y coordinates = ");
           console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
           ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
            console.log("Current position of x and y coordinates = "); 
            console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
ctx.stroke();
    
    last_position_of_x = current_position_of_touch_x;
     last_position_of_y = current_position_of_touch_y;

}
function clearArea() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

var mouseEvent="empty";
console.log(mouseEvent); 
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
 color = document.getElementById("color_input").value;
 width = document.getElementById("width_input").value;
 mouseEvent = "mouseDown";
 console.log(mouseEvent);
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
 
 mouseEvent = "mouseup";
 console.log(mouseEvent);
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
 
 mouseEvent = "mouseleave";
 console.log(mouseEvent);
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX -canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {

        console.log("mousedown + mousemove");
         ctx.beginPath();
          ctx.strokeStyle = color; 
          ctx.lineWidth = width;
          ctx.moveTo(last_position_of_x, last_position_of_y);
          console.log("Last position of x and y coordinates = ");
           console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
           ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            console.log("Current position of x and y coordinates = "); 
            console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;

}
function clearArea() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}