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
}

export default artilhariaValidator