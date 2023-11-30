const express = require('express')

const app = express()

const port = process.env.PORT || 3333

//Padrão Singleton
class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senhaUltraSecreta123";

  private constructor() {}

  static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  acessarBaseSecreta(senha: string): void {
    if (senha === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta!");
    }
  }
}

// Programa principal
const agenteSecreto = SistemaSeguranca.getInstance();
agenteSecreto.acessarBaseSecreta("senhaIncorreta"); // Acesso negado

agenteSecreto.acessarBaseSecreta("senhaUltraSecreta123"); // Acesso concedido


app.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})