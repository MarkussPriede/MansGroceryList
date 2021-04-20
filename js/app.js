const POP_UP = document.getElementById('popUp');
let preces = [];

window.addEventListener('load', () => {
    preces = JSON.parse(localStorage.getItem("preces") || "[]");
    console.log(preces)
    render();
});

document.getElementById('jaunaPrece').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})
document.getElementById('pievienotPreci').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let preces = {nosaukums: nosaukums.value};

    nosaukums.value = "";

    preces.push(preces);

    render();
})