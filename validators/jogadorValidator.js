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
            value: /^[A-Za-z\s´^öÇç]+$/,
            message: 'Digite apenas letras'
        }
    },
    posicao: {
        required: 'Campo obrigatório',
    },
    contato: {
        required: 'Campo obrigatório',
        pattern: {
            value: /^\(\d{2}\) \d\.\d{4}-\d{4}$/,
            message: 'Digite no formato certo (00) 0.0000-0000'
        }
    },
    idade: {
        required: 'Campo obrigatório',
        min: {
            value: 18,
            message: 'Idade mínima de 18 anos'
        }
    },
    altura: {
        required: 'Campo obrigatório',
        pattern: {
            value: /^\d\.\d{2} \(m\)$/,
            message: 'Digite no formato correto 0.00 (m)',
          }
    },
    equipe: {
        required: 'Campo obrigatório',
    }
}

export default jogadorValidator