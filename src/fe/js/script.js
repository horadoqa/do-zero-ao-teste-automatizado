document.addEventListener('DOMContentLoaded', function() {
    console.log("Script carregado!");

    document.getElementById('submitButton').addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio do formulário
        
        console.log("Botão acionado !!!"); // Log quando o botão é clicado
        this.textContent = 'Enviado'; // Muda o texto do botão
        this.disabled = true; // Desabilita o botão após o clique

        // Aqui você pode adicionar qualquer lógica adicional, como validação de formulário ou exibir uma mensagem de sucesso.
        // Exemplo:
        // alert('Seu formulário foi enviado!');

        // Redireciona para a segunda página
        window.location.href = "obrigado.html"; // Altere para o caminho correto da sua página de destino
    });
});