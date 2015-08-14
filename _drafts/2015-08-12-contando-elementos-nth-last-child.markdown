---
layout: post
title:  "Contando elementos com nth-last-child"
description: ""
type: Post
date: 2015-08-12
image: ""
imageExternal: true
alt: ""
---

Acredito que não há dúvidas de que o Design Responsivo veio pra ficar e que não está mais apenas *na moda*. Mais do que ficar pensando em tamanhos específicos de telas ou em *mobile* e *tablet*, minha opinião é que esqueçamos isso. Com a variedade de smartphones diferentes que existem hoje, acho difícil separarmos o que é *mobile* do que é *tablet* ou *desktop*. Um exemplo disso é o [Viewport sizes](http://viewportsizes.com/) que traz uma lista completa com os tamanhos dos *viewports* de vários dispositivos diferentes. Mas isso é só a minha opinião.

Acredito que o principal é fazer com que o seu conteúdo, independente de resolução ou tela, seja acessível pro usuário; afinal, e muitas vezes esquecemos disso, é exatamente isso que importa: que *o usuário encontre a informação que procura*. Quem aqui nunca entrou em algum site pra procurar algo, e por um motivo *xis* não conseguiu acessar aquela informação, seja por ela não estar disposta de forma correta, ou por algum problema *cross-browser* e por aí vai.

## Adaptando seu conteúdo

Pra mim, uma das principais vertentes que o *design responsivo* trouxe foi a priorização de volta no conteúdo. Mais que qualquer coisa, devemos focar na *informação* que deve ser passada e garantir que ela seja acessada independente de dispositivo, resolução ou qualquer outra coisa.

E, nesse caminho das pedras, uma hora ou outra teremos que trabalhar com um tipo de conteúdo que pode variar. *Eaí Bino, como fazer?* Nesses dias cai numa situação semelhante e vi que há outros caminhos para resolver esse problema.

## O problema do conteúdo variável

Jogo rápido: imaginem uma lista com *5 itens* disposta horizontalmente. Podemos pensar então que cada item teria *20%* de largura e em um determinado *breakpoint* cada item teria a largura total da lista (ou se formos pelo lado do *mobile first*, cada item teria por padrão a largura inteira da lista e, só a partir de um determinado *breakpoint* que ele teria a nova largura de *20%*).

{% highlight css %}
.list li {
  width: 20%;
  float: left;
}

@media screen and (max-width: 768px) {
  width: 100%;
  float: none;
}
{% endhighlight %}

Ou, se pensarmos numa abordagem *mobile first* (apenas a encargo de exemplo):

{% highlight css %}
@media screen and (min-width: 768px) {
  width: 20%;
  float: left;
}
{% endhighlight %}

Beleza, *matou*! Mas, e se a quantidade de itens variar, por exemplo entre 3 e 5? Caí numa situação semelhante alguns dias atrás e meu primeiro pensamento foi: antes da renderização eu vejo quantos itens tem ali e, dependendo do resultado, coloco uma classe na lista. Algo mais ou menos assim:

{% highlight css %}
.list li {
  float: left;
}

.list-3 li { width: 33.3%; }
.list-4 li { width: 25%; }
.list-5 li { width: 20%; }
{% endhighlight %}

Resolve o problema? Resolve. Mas nem sempre temos essa opção, de contar por exemplo com o lado do servidor para nos retornar o número de itens. Aí nesse caso, uma outra solução seria via JavaScript, seguindo o mesmo pensamento, contar os elementos e de acordo com o resultado, aplicar uma classe na lista. 

E tem ainda uma outra coisa: nesse caso nem estamos ainda pensando em *breakpoints* e variações de resolução. Paramos ainda no primeiro ponto que é simplesmente que o seu *conteúdo* esteja bem disposto numa resolução qualquer; pra depois disso, podermos pensar na estratégia a se seguir.

Cai numa situação parecida com essa alguns dias atrás e dando uma pesquisada na Barsa da internet vi que daria pra resolver esse problema apenas com o velho e bom CSS.

## Contando os elementos

A idéia básica é através do CSS, descobrirmos quantos itens estão presentes na lista e a partir daí aplicarmos a largura correta para cada item.

Algumas referências e links legais:

* [Quantity ordering with CSS](http://www.smashingmagazine.com/2015/07/quantity-ordering-with-css/)
* [Quantity queries](http://quantityqueries.com/)

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.