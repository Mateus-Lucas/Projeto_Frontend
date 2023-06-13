const jogadorValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'Minimo de caracteres é 3'
        },
        maxLength: {
            value: 30,
            message: 'Máximo de caracteres é 30'
        },
        pattern: {
            value: /^[A-Za-z\s´^ö]+$/,
            message: 'Digite apenas letras'
        }
    },
    posicao: {
        required: 'Campo obrigatório',
    },
    contato: {
        required: 'Campo obrigatório',
    },
    idade: {
        required: 'Campo obrigatório',
        maxLength: {
            value: 2,
            message: 'Máximo de 2 digitos'
        },
        min: {
            value: 18,
            message: 'Idade mínima de 18 anos'
        }
    },
    altura: {
        required: 'Campo obrigatório',
        max: {
            value: 2.5,
            message: 'Altura máxima de 2.5 metros'
        }
    },
    equipe: {
        required: 'Campo obrigatório',
    }
}

export default jogadorValidator