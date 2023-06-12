const artilhariaValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLenght: {
            value: 2,
            message: 'Minimo de caracteres é 2'
        },
        maxLength: {
            value: 20,
            message: 'Máximo de caracteres é 10'
        },
    },
    equipe: {
        required: 'Campo obrigatório',
    },
    gols: {
        required: 'Campo obrigatório',
        maxLength: {
            value: 2,
            message: 'Digite apenas 2 digitos'
        }
    },
    assistencias: {
        required: 'Campo obrigatório',
        maxLength: {
            value: 2,
            message: 'Digite apenas 2 digitos'
        }
    },
    quant_jogos: {
        required: 'Campo obrigatório',
        maxLength: {
            value: 2,
            message: 'Digite apenas 2 digitos'
        },
        max: {
            value: 13,
            message: 'Máximo de 13 jogos'
        }
    }
}


export default artilhariaValidator