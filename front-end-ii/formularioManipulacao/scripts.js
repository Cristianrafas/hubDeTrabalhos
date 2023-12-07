document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Nome: ' + e.target.nome.value);
    console.log('Endereço: ' + e.target.endereco.value);
    console.log('Cidade: ' + e.target.cidade.value);
    console.log('Estado: ' + e.target.estado.value);
    console.log('Natureza do Cargo: ' + document.querySelector('input[type=radio]').name);

    const interesses = [];
    const checkboxes = document.getElementsByName('interesses');

    let peloMenosUmInteresseMarcado = false;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            interesses.push(checkbox.value);
            peloMenosUmInteresseMarcado = true;
        }
    });

    if (!peloMenosUmInteresseMarcado) {
        console.log('Por favor, selecione pelo menos um interesse.');
    }
    console.log('Interesse: ' + interesses.join(', '));
    console.log('Mini-curriculo: ' + e.target.curriculo.value)
})