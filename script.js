

async function searchAdress(cep) {
    if (cep) {
        try {
            let API = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            let result = await API.json();

            if (result.erro) {
                throw new Error('Esse cep não existe!');
            } else {
                console.log(result);
                return result;
            }
        }
        catch (erro) {
            console.log(erro)
        }
    }
}

