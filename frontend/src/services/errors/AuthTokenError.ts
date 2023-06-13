export class AuthTokenError extends Error {
  constructor() {
    super("Erro no Token de Autenticação.");
  }
}
