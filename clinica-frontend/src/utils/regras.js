/**
 * Converte as funções de validação de validators.js em regras do el-form (Element Plus).
 */
export function criarRegras(modelo, validar, campos) {
  return Object.fromEntries(
    campos.map((campo) => [
      campo,
      [
        {
          required: true, // exibe o asterisco; a verificação real é feita pelo validator abaixo
          trigger: ['blur', 'change'],
          validator: (_regra, _valor, callback) => {
            const mensagem = validar(modelo)[campo]
            mensagem ? callback(new Error(mensagem)) : callback()
          },
        },
      ],
    ]),
  )
}
