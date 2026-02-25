// ====== MODELOS ======
class Cliente {
    constructor(nome) {
        this.nome = nome;
    }
}

class ContaCorrente {
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }
}

// ====== TESTE VISUAL (4 prints) ======
const ricardo = new Cliente("Ricardo");
const alice = new Cliente("Alice");
const conta = new ContaCorrente();

conta.cliente = ricardo;
conta.cliente = alice;

console.log(alice.nome);
console.log(conta.cliente.nome);
