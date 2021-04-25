---
layout: post
title:  Cultura de desenvolvimento - a saga continua!
description: 'Números da pesquisa sobre Cultura de Desenvolvimento, realizada no primeiro semestre de 2018.'
type: Post
image: 'https://user-images.githubusercontent.com/1345662/43672243-3b60a9ea-9780-11e8-816e-aa70213ebe7d.jpg'
alt: 'Vista de dentro de um barco de madeira em alto mar para uma montanha.'
lang: pt-br
category: cultura
permalink: 'cultura-de-desenvolvimento/'
ref: 'cultura-desenvolvimento'
---

<style>
.bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
}

.bar__item {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.bar__item:after {
	content: attr(data-value);
	color: #fff;
  font-size: 16px;
  position: absolute;
  top: 50%;
  min-width: 90px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, .5);
  transform: translateY(-50%);
}

@media (max-width: 600px) {
	.bar__item:after {
		min-width: 10px;
		width: 55px;
	}
}

.bar__item--first:after {
	left: 10px;
	text-align: left;
}

.bar__item--last:after {
	right: 10px;
	text-align: right;
}

.bar__item--middle:after {
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}

.is-positive { background-color: #3f7ad5; }
.is-negative { background-color: #d74642; }
.is-neutral { background-color: #619e52; }
</style>

Em torno de 3 ou 4 anos atrás depois de um meetup, senão me engano um [FEMUG-SP](https://www.meetup.com/pt-BR/femugsp/), o tema _cultura de desenvolvimento_ começou a me chamar atenção. Até que recebi um convite pra palestrar em um evento, e foi _a deixa_ para me enfiar de cabeça no tema e comecar a estudar mais sobre. O resultado [foi essa apresentação](https://speakerdeck.com/raphaelfabeni/falando-sobre-cultura-de-desenvolvimento).

## A saga continua

Sempre mantive o interesse pelo tema, e esse ano apareceu uma nova oportunidade de revisitá-lo. Pra tentar entender um pouco de como está o cenário da comunidade web em relação à cultura de desenvolvimento, deixei uma pesquisa rolando por alguns dias. A pesquisa era totalmente anônima e tinha como objetivo coletar respostas sobre alguns dos pontos que fazem parte do tema.

## Os números da pesquisa

**31** dias e **394** respostas.

### Se você tivesse que dar uma nota para o quão boa é a cultura de desenvolvimento no local que trabalha, qual seria?

* **16.3%** - nota maior que 8.
* **51.9%** - nota entre 6 e 8.
* **31.8%** - nota menor que 6.

### De acordo com a sua nota, a empresa estaria de "recuperação". Por que você acha isso?

_Não existe esse conceito de cultura e por isso não temos espaço/tempo para fazer as coisas do time_
Presente em **66%** das respostas

_Não temos nenhum auxílio para atividades extras como cursos e eventos._
Presente em **63.7%** das respostas

_Não temos hoje uma pessoa que possa organizar e liderar isso (ou até mesmo iniciar)._
Presente em **49.7%** das respostas

* Falta de tempo - **4.6%**
* Falta de apoio da empresa - **4.6%**
* Cultura de apagar incêndio - **2.3%**
* Gestão não acredita na idéia - **2.3%**
* Falta de adoção do time - **1.7%**

### Você tem algum tipo de auxílio/bolsa para cursos e eventos?

* _Sim_ - **37.15%**
* _Não_ - **62.85%**

<div class="bar">
  <div class="bar__item bar__item--first is-positive" style="width: 37.15%;" data-value="Sim (37.15%)"></div>
  <div class="bar__item bar__item--last is-negative" style="width: 62.85%;" data-value="Não (62.85%)"></div>
</div>

### Você tem feedbacks sobre o progresso da sua carreira?

* _Sim_ - **52.9%**
* _Não_ - **47.1%**

<div class="bar">
  <div class="bar__item bar__item--first is-positive" style="width: 52.9%;" data-value="Sim (52.9%)"></div>
  <div class="bar__item bar__item--last is-negative" style="width: 47.1%;" data-value="Não (47.1%)"></div>
</div>

### Caso queira resolver um problema fazendo pair programming, existe essa possibilidade/liberdade onde trabalha?

* _Sim_ - **77.9%**
* _Não_ - **22.1%**

<div class="bar">
  <div class="bar__item bar__item--first is-positive" style="width: 77.9%;" data-value="Sim (77.9%)"></div>
  <div class="bar__item bar__item--last is-negative" style="width: 22.1%;" data-value="Não (22.1%)"></div>
</div>

### E se seu time decidir comecar a incentivar/apoiar open source. Sua empresa apoiaria?

* _Sim_ - **41.5%**
* _Talvez_ - **39.2%**
* _Não_ - **19.3%**

<div class="bar">
  <div class="bar__item bar__item--first is-positive" style="width: 41.5%;" data-value="Sim (41.5%)"></div>
  <div class="bar__item bar__item--middle is-neutral" style="width: 39.2%;" data-value="Talvez (39.2%)"></div>
  <div class="bar__item bar__item--last is-negative" style="width: 19.3%;" data-value="Não (19.3%)"></div>
</div>

### Você tem a opção de remoto na sua empresa?

* _Sim_ - **49.6%**
* _Não_ - **50.4%**

<div class="bar">
  <div class="bar__item bar__item--first is-positive" style="width: 49.6%;" data-value="Sim (49.6%)"></div>
  <div class="bar__item bar__item--last is-negative" style="width: 50.4%;" data-value="Não (50.4%)"></div>
</div>

### O que é mais importante na hora de tomar uma decisão para aceitar um emprego?

* Atividades como pair programming, reuniões de time, workshops, etc - **23.9%**
* Feedbacks de carreira - **19.8%**
* Remoto - **17.3%**
* Outros - **15.5%**
* Oportunidade exterior - **10.9%**
* Auxílio em cursos e eventos - **10.4%**
* Incentivo open source - **2.3%**

* Para quase **1/4** das pessoas, o principal ponto é o **salário**.
* **Qualidade de vida** é a escolha de aproximadamente **12%** das pessoas.
* **Salário, Cultura e Carreira** juntos somam em torno de **60%** das escolhas.
* **2%** das pessoas querem saber é do **café**.

### No processo seletivo para o seu time, existe alguém do time técnico participando do processo?

* _Sim_ - **79.9%**
* _Não_ - **20.1%**

<div class="bar">
  <div class="bar__item bar__item--first is-positive" style="width: 79.9%;" data-value="Sim (79.9%)"></div>
  <div class="bar__item bar__item--last is-negative" style="width: 20.1%;" data-value="Não (20.1%)"></div>
</div>

### Você já participu de algum processo e não teve feedback?

* _Sim_ - **81.7%**
* _Não_ - **18.3%**

<div class="bar">
  <div class="bar__item bar__item--first is-negative" style="width: 81.7%;" data-value="Sim (81.7%)"></div>
  <div class="bar__item bar__item--last is-positive" style="width: 18.3%;" data-value="Não (18.3%)"></div>
</div>

Os slides das palestras [estão aqui](https://speakerdeck.com/raphaelfabeni/cultura-de-desenvolvimento).
