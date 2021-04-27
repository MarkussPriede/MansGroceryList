const POP_UP = document.getElementById("popUp");
let preces = [];

window.addEventListener("load", () => {
  preces = JSON.parse(localStorage.getItem("preces") || "[]");
  console.log(preces);
  render();
});

document.getElementById("jaunaPrece").addEventListener("click", () => {
  POP_UP.style.display = "block";
});

document.getElementById("pievienotPreci").addEventListener("click", () => {
  POP_UP.style.display = "none";

  let prece = { nosaukums: nosaukums.value, daudzums: daudzums.value };

  nosaukums.value = "";
  daudzums.value = "";

  preces.push(prece);

  render();
});

function render() {
  let saraksts = document.getElementById("saraksts");
  saraksts.innerHTML = "";

  for (let i = 0; i < preces.length; i++) {
    let prece = `
        <div class="prece">
            <h3 class="sadala">Preces nosaukums: ${preces[i].nosaukums}</h3>
            <h3>Daudzums: ${preces[i].daudzums}</h3>
        </div>`;

    saraksts.innerHTML += prece;
  }

  localStorage.setItem("preces", JSON.stringify(preces));
}
