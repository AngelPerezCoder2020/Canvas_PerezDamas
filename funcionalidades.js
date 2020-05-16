var a = document.getElementById("canvas").getContext("2d");
var boton = document.getElementById("listo");
var color = document.getElementById("color_Lineas");
var lines_P = document.getElementById("cant_Lineas");
var limite = document.getElementById("canvas").width;
boton.addEventListener("click", start);

function recuadro()
{
    a.beginPath();
    a.strokeStyle= "gray";
    a.moveTo(1, 1);
    a.lineTo(1, 299);
    a.stroke();
    a.lineTo(299, 299);
    a.stroke();
    a.lineTo(299, 1);
    a.stroke();
    a.lineTo(1, 1)
    a.stroke();
    a.closePath();
}
function dib(color, x1, y1, x2, y2)
{
    a.beginPath();
    a.strokeStyle= color;
    a.moveTo(x1, y1);
    a.lineTo(x2, y2);
    a.stroke();
    a.closePath();
}
recuadro();
function start()
{
    cant = parseInt(lines_P.value) + 1;   
    espacios = limite/cant;    
    var lines = 0;
    var xf = 0;
    var yf = 0;

    while(lines < cant)
    {    
        yf = yf + espacios;
           
        xf = xf + espacios;
                        
        dib(color.value, 0, yf, xf, 300);
        
        lines++;
    }
}