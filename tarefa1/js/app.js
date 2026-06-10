const lista = document.getElementById("lista-carros");

fetch("https://apiintranet.kryptonbpo.com.br/test-dev/exercise-1")
    .then((resultado) => resultado.json())
    .then((json) => {

    json.carros.forEach((carro) => {
            const motor = json.motores.find((m) => m.id === carro.motor_id);

            const card = document.createElement("div");
            card.innerHTML = `
                <h3>${carro.marca} - ${carro.modelo}</h3>
                <p> Cor: ${carro.cor} </p>
                <p> Motor: ${motor.cilindros} cilindros, ${motor.litragem}cc, ${motor.posicionamento_cilindros} </p>
                <button>Excluir</button>
            `;
            lista.appendChild(card);
              
            const botaoExcluir = card.querySelector("button");
            botaoExcluir.addEventListener("click", () => {
            lista.removeChild(card);
        });

            });
    });

    document.getElementById("form-carro").addEventListener("submit", evento => {
        evento.preventDefault();

        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const cor = document.getElementById("cor").value;
        const cilindros = parseInt(document.getElementById("cilindros").value);
        const litragem = parseInt(document.getElementById("litragem").value);
        const posicionamento = document.getElementById("posicionamento").value;

        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${marca} - ${modelo}</h3>
            <p> Cor: ${cor} </p>
            <p> Motor: ${cilindros} cilindros, ${litragem}cc, ${posicionamento} </p>
            <button>Excluir</button>
        `;
        lista.appendChild(card);

        const botaoExcluir = card.querySelector("button");
         botaoExcluir.addEventListener("click", () => {
        lista.removeChild(card);
    });
 });