const jogoValidator = {
    casa: {
        required: 'Campo Obrigatório'
    },
    visitante: {
        required: 'Campo Obrigatório'
    },
    fase: {
        required: 'Campo Obrigatório'
    },
    data: {
        required: 'Campo Obrigatório',
        pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'Digite no formato certo 00/00/0000'
        }
    },
    horario: {
        required: 'Campo Obrigatório'
    }
}

export default jogoValidator