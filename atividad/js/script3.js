let res = document.getElementById('res')

function Calcular() {
    let conta = (36.6 / 3.3 * 2.5 * 6.3 + 6.0).toFixed(3)

    console.log("Resposta: ",conta)
    
    res.innerHTML = conta
    res.innerHTML = conta;
    res.innerHTML = conta;
    res.style.backgroundColor = "white";
    res.style.color = "black";
    res.style.border = "1px solid black";
    res.style.borderRadius = "15px";
    res.style.width = "auto";
}