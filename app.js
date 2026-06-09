fetch("https://apiintranet.kryptonbpo.com.br/test-dev/exercise-1")
    .then((resultado) => resultado.json())
    .then((json) => {

    const lista = document.getElementById("lista-carros");

    json.carros.forEach((carro) => {
            const motor = json.motores.find((m) => m.id === carro.motor_id);

            const card = document.createElement("div");
            card.innerHTML = `
                <h3>${carro.marca} - ${carro.modelo}</h3>
                <p> Cor: ${carro.cor} </p>
                <p> Motor: ${motor.cilindros} cilindros, ${motor.litragem}cc </p>
                <button>Excluir</button>
            `;
            lista.appendChild(card);
            });
    });