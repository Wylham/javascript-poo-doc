class Semaforo {
  cor = "vermelho";
  ligado = false;
  tempoRestante = 0;

  ligar() {
    this.ligado = true;
    this.cor = "vermelho";
  }

  desligar() {
    this.ligado = false;
    this.cor = "apagado";
    this.tempoRestante = 0;
  }

  trocarCor(novaCor) {
    if (!this.ligado) return;

    const permitidas = ["vermelho", "amarelo", "verde"];
    if (!permitidas.includes(novaCor)) return;
    this.cor = novaCor;
  }

  iniciarContagem(segundos) {
    if (!this.ligado) return;
    if (segundos <= 0) return;

    this.tempoRestante = segundos;
  }
}

const s1 = new Semaforo();
s1.ligar();
s1.iniciarContagem(59);
s1.trocarCor("verde");
s1.iniciarContagem(59);
s1.trocarCor("amarelo");
s1.iniciarContagem(10);
s1.trocarCor("vermelho");
console.log(s1);
