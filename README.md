# 🏦 ByteBank - Programação Orientada a Objetos

Projeto desenvolvido no **Curso JavaScript - Programando a Orientação a Objetos**. Sistema bancário simples para praticar conceitos de POO em JavaScript.

## 📁 Arquivos do Projeto

- `cliente.js` - Classe Cliente
- `contaCorrente.js` - Classe ContaCorrente
- `index.js` - Arquivo principal
- `treino.js` - Exercícios de prática
- `semaforo.js` - Exemplo adicional

## 🎯 O que foi Aprendido

### Classes e Objetos

- Criação de classes com ES6
- Construtores para inicializar objetos
- Instanciação de objetos

### Encapsulamento

- Propriedades privadas (convenção `_`)
- Getters e Setters
- Controle de acesso aos dados

### Módulos

- Import/Export de classes
- Organização do código em arquivos

### Validações

- Uso de `instanceof`
- Validação nos setters
- Proteção de propriedades

## 🚀 Como Executar

```bash
node index.js
```

## 💡 Exemplo de Uso

```javascript
// Criando cliente e conta
const cliente = new Cliente("Ricardo", 11122233309);
const conta = new ContaCorrente(1001, cliente);

// Operações bancárias
conta.depositar(500);
conta.sacar(100);
```

## 📚 Conceitos Aplicados

- **Abstração** - Modelagem de Cliente e ContaCorrente
- **Encapsulamento** - Proteção do CPF e saldo
- **Modularização** - Separação em arquivos
- **Validação** - Controle de tipos e valores

---

_Projeto do curso de JavaScript POO_ 🚀
