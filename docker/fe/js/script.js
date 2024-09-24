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

        // Coleta os dados do formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const country = document.getElementById('country').value;
        const framework = document.getElementById('select-itens').value;
        const comments = document.getElementById('area').value.trim();

        // Validações simples
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Muda o texto do botão e desabilita
        console.log("Botão acionado !!!");
        this.textContent = 'Enviado';
        this.disabled = true;

        // Envia os dados para o backend
        try {
            const userData = { name, email, phone, country, framework, comments };
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('Dados salvos com sucesso!');
                window.location.href = "obrigado.html"; 
            } else {
                console.error('Erro ao salvar dados');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    });

    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
