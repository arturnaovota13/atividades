let res = document.getElementById('res');

function Calcular() {
    let conta = (8.7 * 3.5 + 7.5 * 3.2 / 10).toFixed(3)

    console.log("Resposta: ",conta);

    res.innerHTML = conta;

}