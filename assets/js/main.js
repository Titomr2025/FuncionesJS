let colorGlobal = "";

 
    const divKey = document.querySelector("#key");
    const contenedor = document.querySelector("#contenedor");

   
    function crearDiv(color) {
      const nuevoDiv = document.createElement("div");
      nuevoDiv.className = "nuevo-div";
      nuevoDiv.style.backgroundColor = color;
      contenedor.appendChild(nuevoDiv);
    }

    document.addEventListener('keydown', function(event) {
      if(event.key === 'a') {
        colorGlobal = "pink";
        divKey.style.backgroundColor = colorGlobal;
      } else if(event.key === 's') {
        colorGlobal = "orange";
        divKey.style.backgroundColor = colorGlobal;
      } else if(event.key === 'd') {
        colorGlobal = "lightblue";
        divKey.style.backgroundColor = colorGlobal;
      }
      
      else if(event.key === 'q') {
        crearDiv("purple");
      } else if(event.key === 'w') {
        crearDiv("gray");
      } else if(event.key === 'e') {
        crearDiv("brown");
      }
    });