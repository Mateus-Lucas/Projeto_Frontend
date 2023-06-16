const overallValidator = {
    nome: {
        required: 'Campo obrigatório',
    },
    numero: {
        required: 'Campo obrigatório',
        minLenght: {
            value: 2,
            message: 'Digite 2 caracteres no minimo'
        }
    }
}

export default overallValidator