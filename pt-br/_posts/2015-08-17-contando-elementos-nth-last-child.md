---
layout: post
title:  "Contando elementos com nth-last-child"
description: "A magia negra do pseudo seletor pra nos ajudar com conteúdos que podem variar"
type: Post
date: 2015-08-17
image: "https://cloud.githubusercontent.com/assets/1345662/9317504/74f362ec-4512-11e5-8482-c09480c791cf.jpg"
alt: "Imagem mostra um grupo de artistas em posando para a foto em frente a uma casa de shows em uma época antiga"
lang: pt-br
category: 'tech'
permalink: 'contando-elementos-nth-last-child/'
ref: 'contando-nth-last-child'
---

Acredito que não há dúvidas de que o Design Responsivo veio pra ficar e que não está mais apenas *na moda*. Mais do que ficar pensando em tamanhos específicos de telas ou em *mobile* e *tablet*, minha opinião é que esqueçamos isso. Com a variedade de smartphones diferentes que existem hoje, acho difícil separarmos o que é *mobile* do que é *tablet* ou *desktop*. Um exemplo disso é o [Viewport sizes](http://viewportsizes.com/) que traz uma lista completa com os tamanhos dos *viewports* de vários dispositivos diferentes. Mas isso é só a minha opinião.

Acredito que o principal é fazer com que o seu conteúdo, independente de resolução ou tela, seja acessível pro usuário; afinal, e muitas vezes esquecemos disso, é exatamente isso que importa: que *o usuário encontre a informação que procura*. Quem aqui nunca entrou em algum site pra procurar algo, e por um motivo *xis* não conseguiu acessar aquela informação, seja por ela não estar disposta de forma correta, ou por algum problema *cross-browser* e por aí vai.

## Adaptando seu conteúdo

Pra mim, uma das principais vertentes que o *design responsivo* trouxe foi a priorização de volta no conteúdo. Mais que qualquer coisa, devemos focar na *informação* que deve ser passada e garantir que ela seja acessada independente de dispositivo ou resolução.

E, nesse caminho das pedras, uma hora ou outra teremos que trabalhar com um tipo de conteúdo que pode variar. *Eaí Bino, como fazer?* Nesses dias cai numa situação desse tipo e vi que há diversos caminhos para resolver esse problema.

## O problema do conteúdo variável

Jogo rápido: imaginem uma lista disposta horizontalmente com *5 itens*. Podemos pensar então que em uma determinada resolução cada item teria *20%* de largura da lista e em um determinado *breakpoint* cada item ficaria com a largura total da lista (ou se formos pelo lado do *mobile first*, cada item teria por padrão a largura inteira da lista e, só a partir de um determinado *breakpoint* que ele ficaria com a nova largura de *20%*).

{% gist 546d68dd0085fdbd67a1f23554c331e5 %}

Ou, se pensarmos numa abordagem *mobile first* (apenas a encargo de exemplo):

{% gist a31f3bbac74b584936ff52bb192cbc7f %}

Beleza, *matou*! Mas, e se a quantidade de itens variar? Por exemplo entre 3 e 5? Me deparei com uma situação semelhante alguns dias atrás e meu primeiro pensamento foi: antes da renderização dos elementos na página eu vejo quantos itens tem ali e, dependendo do resultado, coloco uma classe na lista. Algo mais ou menos assim:

{% gist 5c3da021c428ce52e0a386f8978d76de %}

Resolve o problema? Resolve. Mas nem sempre temos essa opção, de contar por exemplo com o lado do servidor para nos retornar o número de itens. Aí nesse caso, uma outra solução seria via JavaScript, seguindo o mesmo pensamento: contar os elementos e de acordo com o resultado, aplicar uma classe na lista.

E tem ainda uma outra coisa: nesse caso nem estamos pensando ainda em *breakpoints* e variações de resolução. Paramos ainda no primeiro ponto que é simplesmente que o seu *conteúdo* esteja bem disposto numa resolução qualquer; pra depois disso, podermos pensar na estratégia a se seguir.

Dando uma pesquisada na Barsa da internet vi que daria pra resolver esse problema apenas com o velho e bom CSS.

## Contando os elementos

A idéia básica é através do CSS, descobrirmos quantos itens estão presentes na lista e a partir daí aplicarmos a largura correta para cada item. *Mas, eaí? Como contar, certo?* Podemos usar a *magia negra* dos *pseudo* seletores pra nos ajudar com isso.

### O cara nth-last-child

Esse *brother* aí nada mais faz do que contar o elemento partindo do seu último item. Então se quiséssemos, por exemplo selecionar o segundo item da lista, mas iniciando a contagem do fim, faríamos algo assim:

{% gist 25598b080e4a1c48a7d03c487937fcce %}

Uma representação bem simples do item selecionado:

* item 1
* item 2
* item 3
* *item 4 (selecionado)*
* item 5

Tendo idéia de como selecionar um elemento, podemos estabelecer a seguinte linha de raciocínio:

* temos que saber exatamente quantos itens temos, chegando no primeiro elemento da lista.
* selecionar todos os elementos irmãos.

Vamos por partes. Conseguimos matar o primeiro item utilizando o que vimos no exemplo anterior. Então, partindo de uma lista de 5 itens, poderíamos fazer algo assim:

{% gist 43e970b9b44956a0658bae82dc325fc4 %}

*E shaaazam!* Conseguimos teoricamente *contar* quantos elementos temos na lista. Agora é só aplicarmos as demais variações.

{% gist 251d420b63f38d279b235d43d4069afd %}

Fiz um exemplo rápido no *CodePen* com o que falamos aqui.

<figure class="text-center loading">
    <p data-height="268" data-theme-id="4240" data-slug-hash="xGNXzO" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/xGNXzO/'>Quantity queries</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>

Algumas referências e links legais:

* [Quantity ordering with CSS](http://www.smashingmagazine.com/2015/07/quantity-ordering-with-css/)
* [Quantity queries](http://quantityqueries.com/)

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
