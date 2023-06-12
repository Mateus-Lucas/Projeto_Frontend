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
        pattern: {
            value: /^\d{1,3}(?:,\d{1,2})?$/,
            message: 'Digite nesse padrão 0,00'
        }
    },
    equipe: {
        required: 'Campo obrigatório',
    }
}

export default jogadorValidator