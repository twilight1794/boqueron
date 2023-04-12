"use strict"

var arr = [
    ["Elote", "1f33d", true],
    ["Naranja", "1f34a", true],
    ["Limón", "1f34b", true],
    ["Plátano", "1f34c", true],
    ["Piña", "1f34d", true],
    ["Manzana", "1f34e", true],
    ["Arroz", "1f35a", true],
    ["Sopa", "1f35c", true],
    ["Fideos", "1f35d", false],
    ["Pan", "1f35e", false],
    ["Papitas fritas", "1f35f", false],
    ["Galletas", "1f36a", false],
    ["Chocolate", "1f36b", false],
    ["Caramelo", "1f36c", false],
    ["Pescado", "1f41f", true],
    ["Hongos", "1f344", true],
    ["Tomate", "1f345", true],
    ["Berenjena", "1f346", true],
    ["Uva", "1f347", true],
    ["Melón", "1f348", true],
    ["Sandía", "1f349", true],
    ["Pera", "1f350", true],
    ["Durazno", "1f351", true],
    ["Cerezas", "1f352", true],
    ["Fresa", "1f353", true],
    ["Hamburguesa", "1f354", false],
    ["Pizza", "1f355", false],
    ["Carne", "1f356", true],
    ["Pollo", "1f357", true],
    ["Zanahoria", "1f360", true],
    ["Paleta", "1f361", false],
    ["Helado", "1f368", false],
    ["Dona", "1f369", false],
    ["Pastel", "1f370", false],
    ["Huevo", "1f373", true],
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function dibujar(){
    if (window.arr.length){
        document.getElementById("mesa").textContent = "";
        var img = document.createElement("img");
        img.src = "Twemoji_"+window.arr[0][1]+".svg";
        document.getElementById("mesa").appendChild(img);
        document.getElementById("mensaje").textContent = window.arr[0][0];
    } else {
        var dlg = document.getElementsByTagName("dialog")[0];
        document.getElementById("res").textContent = window.buenas.toString();
        dlg.showModal();
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    window.buenas = 0;
    window.arr = shuffle(arr).slice(0, 10);
    document.body.addEventListener("click", (e2) => {
        if (document.body.classList.contains("correcto") || document.body.classList.contains("incorrecto")){
            document.body.classList.remove("correcto", "incorrecto");
            window.arr.shift();
            dibujar();
        }
    });
    Array.from(document.querySelectorAll("button")).forEach((el) => {
        el.addEventListener("click", function(e2){
            if ((this.dataset.value == "s" && window.arr[0][2]) || (this.dataset.value == "n" && window.arr[0][2] == false)){
                document.body.classList.add("correcto");
                console.log("Correcto! "+arr[0][0]+" "+arr[0][1]+" "+arr[0][2]+" "+this.dataset.value);
                console.log(this);
                window.buenas++;
            } else {
                document.body.classList.add("incorrecto");
                console.log("Incorrecto! "+arr[0][0]+" "+arr[0][1]+" "+arr[0][2]+" "+this.dataset.value);
                console.log(this);
            }
        });
    });
    dibujar();
});
