document.addEventListener("valore caricato", function () {
    const Things = document.getElementById("Things");
    const addButton= document.getElementById("aggiungiTesto");
    const TooMuchThings = document.getElementById("TooMuchThings");
  
    addTButton.addEventListener("click", function () {
      const ButtonText = Things.value;
      if (ButtonText.trim() !== "") {
        const TooMuchThings = document.createElement("li");
        TooMuchThings.textContent = Text;
        TooMuchThings.addEventListener("click", function () {
            TooMuchThings.style.textDecoration = "line-through"; 
        })
  
        const delete_b = document.createElement("button");
        delete_b.textContent = "Elimina contenuto";
        delete_b.addEventListener("click", function () {
        TooMuchThings.style.textDecoration = "line-through"; 
        delete_b.remove();
        });
  
        TooMuchThings.appendChild(delete_b);
        TooMuchThings.appendChild(TooMuchThings);
  
        Things.value = "";
      }
    });
  });
  