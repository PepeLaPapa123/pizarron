var last_position_x, last_position_y;
var mouseEvent = "Empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

var width = screen.width;

new_width = width - 70;
new_height = screen.height - 300;

if (width < 992)
    {
       document.getElementById("myCanvas").width = new_width;
       document.getElementById("myCanvas").height = new_height;
    }

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
   color = document.getElementById("color").value;
   width_of_line = document.getElementById("width_of_line").value;

   mouseEvent = "mousedown";
}

//nuevas líneas cuando alzo el mouse no debe dibujar  
//activar el trazo solo cuando es mousedonwn
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
   mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
   mouseEvent = "mouseleave";
}



canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
   current_position_of_mouse_x  = e.clientX - canvas.offsetLeft;
   current_position_of_mouse_y = e.clientY - canvas.offsetTop;

   if (mouseEvent == "mousedown")
   {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;

      console.log("Last position of x and y coordinates = ");
      console.log("x = " + last_position_x + "y = " + last_position_y);
      ctx.moveTo(last_position_x, last_position_y);


      console.log("Current position of x and y coordinates = ");
      console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
      ctx.stroke();

      last_position_x = current_position_of_mouse_x;
      last_position_y = current_position_of_mouse_y;
   }
}


function clearArea()
{
   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}