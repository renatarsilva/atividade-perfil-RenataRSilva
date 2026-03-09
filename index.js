document.getElementById("btn-preencher").addEventListener("click", () => {
  fetch("dados.json")
    .then((res) => res.json())
    .then((dados) => {
      // Nome
      document.getElementById("nome").textContent = dados.nome;

      // Informações básicas
      const listaDados = document.getElementById("lista-dados");
      listaDados.innerHTML = `
          <li><strong>Nascimento:</strong> ${dados.dataNascimento}</li>
          <li><strong>Email:</strong> ${dados.email}</li>
          <li><strong>Telefone:</strong> ${dados.telefone}</li>
          <li><a href="${dados.linkedin}" target="_blank">LinkedIn</a></li>
          <li><a href="${dados.github}" target="_blank">GitHub</a></li>
        `;

      // Conhecimentos
      const listaConhecimentos = document.getElementById("lista-conhecimentos");
      listaConhecimentos.innerHTML = "";

      dados.conhecimentos.forEach((conhecimento) => {
        const li = document.createElement("li");
        li.textContent = conhecimento;
        listaConhecimentos.appendChild(li);
      });

      // Experiências
      const experiencias = document.getElementById("experiencias");
      experiencias.innerHTML = "";

      dados.experiencias.forEach((item) => {
        experiencias.innerHTML += `
            <div class="experiencia-item">
              <h3>${item.cargo}</h3>
              <p><strong>Empresa:</strong> ${item.empresa}</p>
              <p><strong>Período:</strong> ${item.periodo}</p>
              <h4>Atividades:</h4>
              <ul>
                ${item.atividades
                  .map((atividade) => `<li>${atividade}</li>`)
                  .join("")}
              </ul>
            </div>
          `;
      });

      // Formação
      const formacao = document.getElementById("formacao");
      formacao.innerHTML = "";

      dados.formacao.forEach((item) => {
        formacao.innerHTML += `
            <div class="formacao-item">
              <p><strong>Curso:</strong> ${item.curso}</p>
              <p><strong>Instituição:</strong> ${item.instituicao}</p>
              <p><strong>Conclusão:</strong> ${item.conclusao}</p>
            </div>
          `;
      });
    })
    .catch((erro) => {
      console.error("Erro ao carregar dados:", erro);
    });
});
