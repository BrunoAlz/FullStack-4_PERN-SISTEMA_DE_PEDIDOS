const responseMessages = {
  notFound: {
    error: "Registro não encontrado.",
  },
  invalidCredentials: {
    error: "Credenciais inválidas.",
  },
  serverError: {
    error: "Erro interno do Servidor.",
  },
  userNotFound: {
    error: "Usuário não encontrado.",
  },
  incorretPassword: {
    error: "Senha incorreta.",
  },
  emailInUse: {
    error: "Já existe um usuário com esse e-mail.",
  },
  nonExistentToken: {
    error: "Token de autenticação não fornecido.",
  },
  invalidToken: {
    error: "Token de autenticação inválido.",
  },
  credentialsError: {
    error: "Credenciais Inválidas, verifique seu email e senha.",
  },
  userCreated: "Usuário registrado com sucesso.",
  userUpdated: "Usuário atualizado com sucesso.",
  userDeleted: "Usuário excluído com sucesso.",
  categoryExists: {
    error: "Está categoria já foi cadastrada."
  }
};

export { responseMessages };
