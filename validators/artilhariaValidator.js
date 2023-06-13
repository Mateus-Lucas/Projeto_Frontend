const artilhariaValidator = {
    nome: {
        required: 'Campo obrigatório',
    },
    equipe: {
        required: 'Campo obrigatório',
    },
    gols: {
        required: 'Campo obrigatório',
    },
    assistencias: {
        required: 'Campo obrigatório',
    },
    quant_jogos: {
        required: 'Campo obrigatório',
        max: {
            value: 13,
            message: 'Máximo de 13 jogos'
        }
    }
}


export default artilhariaValidator