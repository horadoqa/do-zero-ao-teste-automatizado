document.addEventListener('DOMContentLoaded', function() {
    console.log("Script carregado!");

    const submitButton = document.getElementById('submitButton');
    
    const requiredFields = [
        document.getElementById('name'),
        document.getElementById('email'),
        document.getElementById('phone'),
        document.getElementById('country'),
        document.getElementById('select-itens')
    ];

    // Função para verificar se todos os campos obrigatórios estão preenchidos
    function checkFormValidity() {
        const allFilled = requiredFields.every(field => field.value.trim() !== '');
        submitButton.disabled = !allFilled; // Habilita ou desabilita o botão
    }

    // Adiciona eventos de input para todos os campos obrigatórios
    requiredFields.forEach(field => {
        field.addEventListener('input', checkFormValidity);
    });

    // Inicialmente desabilita o botão se os campos não estiverem preenchidos
    checkFormValidity();

    submitButton.addEventListener('click', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
       
        // Validações simples
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Muda o texto do botão e desabilita
        console.log("Botão acionado !!!");
        this.textContent = 'Enviado';
        this.disabled = true;

        window.location.href = "obrigado.html";

    });

    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
