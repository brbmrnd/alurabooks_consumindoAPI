const cep = document.getElementById('cep');
const errorMessage = document.getElementById('campo__erro');

async function searchAdress(cep) {
    errorMessage.innerHTML = '';
    if (cep) {
        try {
            let API = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            let result = await API.json();

            if (result.erro) {
                throw new Error('Esse cep não existe!');
            }

            const endereco = document.getElementById('endereco');
            const bairro = document.getElementById('bairro');
            const cidade = document.getElementById('cidade');
            const estado = document.getElementById('estado');

            //preenchimento automático dos dados
            endereco.value = result.logradouro;
            bairro.value = result.bairro;
            cidade.value = result.localidade;
            estado.value = result.uf;

            return result;
        }

        catch (erro) {
            console.log(erro)
            errorMessage.innerHTML = `<p>Cep inválido.</p>`
        }
    }
}
//aciona a função quando o usuário clica fora do campo
cep.addEventListener('focusout', () => searchAdress(cep.value));
