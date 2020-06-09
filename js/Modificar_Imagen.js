

var Stark_Texto = document.getElementById("titulo");

var Stark_Imagen = document.getElementById("Elon_Musk")

Stark_Imagen.addEventListener("click",function()
    {
        Stark_Imagen.style.width= "900px"; 
        Stark_Texto.innerHTML="Stark Aumentado";
        Stark_Texto.style.color="purple";

        

        Stark_Imagen.addEventListener("click",function()
            {
                Stark_Imagen.style.width= "600px"; 
                Stark_Texto.innerHTML="Stark Retroalimentado Inicial";
                Stark_Texto.style.color="orange";
            });
    });

