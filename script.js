// Array de objetos contendo a descrição
// e o status da tarefa
let tarefas = [];

function adicionarTarefa() {

    let descricao =
        document.getElementById("novaTarefa").value.trim();

    if (descricao === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push({
        descricao: descricao,
        status: false
    });

    document.getElementById("novaTarefa").value = "";

    atualizarTela();
}

function alterarStatus(indice) {

    tarefas[indice].status =
        !tarefas[indice].status;

    atualizarTela();
}

function atualizarTela() {

    let lista =
        document.getElementById("lista");

    lista.innerHTML = "";

    let concluidas = 0;

    for (let i = 0; i < tarefas.length; i++) {

        if (tarefas[i].status) {
            concluidas++;
        }

        lista.innerHTML += `
            <div class="tarefa">

                <input
                    type="checkbox"
                    ${tarefas[i].status ? "checked" : ""}
                    onchange="alterarStatus(${i})">

                <span class="${
                    tarefas[i].status
                    ? "concluida"
                    : "pendente"
                }">

                    ${tarefas[i].descricao}

                </span>

            </div>
        `;
    }

    document.getElementById("contador").innerText =
        `${concluidas} de ${tarefas.length} tarefas concluídas`;
}