// Script para manipular o formulário de chamados de suporte técnico
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("supportForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coletando os dados do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const issue = document.getElementById("issue").value;

        // Exibindo os dados no console (para fins de teste)
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Descrição do Problema:", issue);

        // Aqui você pode enviar os dados para um servidor ou armazená-los localmente
        alert("Chamado enviado com sucesso!");
        document.getElementById("response").innerHTML = "<p>Chamado enviado com sucesso!</p>";
        form.reset(); // Limpa o formulário após o envio
    });
    // Adicionando um evento de clique para o botão de limpar
    const clearButton = document.getElementById("clearButton"); 
    clearButton.addEventListener("click", function() {
        form.reset(); // Limpa o formulário
        document.getElementById("response").innerHTML = ""; // Limpa a mensagem de resposta
    });
});
