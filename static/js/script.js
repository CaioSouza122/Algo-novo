// Script para manipular o formulário de chamados de suporte técnico
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("supportForm");
    const clearButton = document.getElementById("clearButton");

    // Debug opcional (não interfere no envio)
    form.addEventListener("submit", function () {
        console.log("Formulário sendo enviado para o Flask...");
    });

    //Botão limpar
    clearButton.addEventListener("click", function () {
        document.getElementById("response").innerHTML = "";
        console.log("Formulário limpo");
    });
});
