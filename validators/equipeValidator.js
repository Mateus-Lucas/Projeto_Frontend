const equipeValidator = {
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
  pais: {
    required: 'Campo obrigatório',
    pattern: {
      value: /^[A-Za-z\s´^öÇç]+$/,
      message: 'Digite apenas letras'
    },
    minLength: {
      value: 3,
      message: 'Minimo de caracteres é 3'
    },
    maxLength: {
      value: 30,
      message: 'Máximo de caracteres é 30'
    },
  },
  titulos: {
    required: 'Campo obrigatório',
  },
  quant_jogadores: {
    required: 'Campo obrigatório',
    max: {
      value: 30,
      message: 'Cadastre no máximo 30 jogadores'
    },
    min: {
      value: 11,
      message: 'Cadastre no mínimo 11 jogadores'
    }
  }
}

export default equipeValidator