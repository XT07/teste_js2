function capE() {
    const form = document.querySelector("#formIMC");

    function getEventForm(e) {
        e.preventDefault()
    }

    form.addEventListener("submit", getEventForm)
}

function calculate() {
    const resp = document.querySelector("#resp");
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const resultCalc = peso / (altura ** 2);

    function createP() {
        const p = document.createElement("p");
        return p
    }

    const pr = createP();
    pr.innerHTML = (`Seu IMC foi de: ${resultCalc.toFixed(1)}`);
    resp.innerHTML = "";
    resp.appendChild(pr)
}

capE()