  ---
layout: post
title:  "Usando o currentColor do CSS"
description: ""
type: Post
date: 2015-06-24
image: ''
alt: ''
---

Variáveis no **CSS**? Em futuro não muito distante (ou talvez sim) poderemos usar nossas variáveis muito doidas diretamente no CSS, mas enquanto o sol não raia pra nós, conseguimos simular esse recurso através de pré-processadores. Pra mim, o uso de variáveis são umas das principais e, acho que uma das poucas, *features* que uso dos pré-processadores, mas voltemos ao assunto.

## Variáveis são legais

Se você está acostumado a utilizar um *Sass* ou *LESS* da vida, sabe o quão legal e útil pode ser utilizar variáveis quando falamos de estilo. Uma coisa útil é que variáveis nos ajudam a evitar repetições e nos auxiliam e muito principalmente em projetos grandes onde a possibilidade, de por exemplo, ter uma repetição de uma cor específica é bem grande.

Um bom caso de aplicação de variáveis são na questão de temas ou variações de um componente ou até de um projeto inteiro. Criar e gerenciar esquemas de cores com variáveis fica bem mais fácil: podemos criar por exemplo, uma variável chamada `main-color` e declarar a cor `red` pra ela. Assim, se em uma manutenção futura, precisarmos mudar essa cor, alteramos apenas na declaração da variável e não em todos os casos onde ela é utilizada. Claro que tudo depende de como estruturamos a *coisa toda*, pois uma pequena alteração de cor pode te dar alguns problemas.

## O tal do `currentColor`

O danado do `currentColor` funciona semelhante a uma variável salvo duas exceções: só podemos utilizá-lo com cores e, diferente de uma variável comum, não podemos `setar` o seu valor, e sim, isso é herdado do valor atual da propriedade `color` que está sendo usado no elemento e claro, seguindo a cascata. Ficou confuso? Eu também! Vamos lá!

Vamos supor que tenhamos o seguinte:

{% highlight css %}
body { color: green; }

div {
  color: currentColor;
  box-shadow: 1px 1px 1px 1px currentColor;
  outline: dotted 1px currentColor;
}
{% endhighlight %}

No exemplo acima, simplesmente definimos uma cor verde para o `body` e a utilizamos nos elementos `div` através dos caras `currentColor`. *Mas Fabeni, tu tá me enrolando! Eu não precisava do `currentColor` aí!* Exatamente, não precisava. Se voltarmos para o exemplo, chegaríamos no mesmo resultado apenas assim: 

{% highlight css %}
body { color: green; }

div {
  box-shadow: 1px 1px 1px 1px;
  outline: dotted 1px;
}
{% endhighlight %}

Algumas propriedades herdam o valor da propriedade `color` do elemento ou caso essa não tenha sudi setada, seguem a cascata, até achar da onde vão herdar esse valor. Algumas dessas propriedades são:

* o elemento texto em si;
* a borda do elemento;
* o `outline`;
* `box-shadow`;
* *bullets* de uma lista.

No exemplo abaixo, é possível ver que alterando a cor do `body`, todos os elementos que herdam essa cor, sofrem modificação de estilo.

<figure class="text-center loading">
    <p data-height="360" data-theme-id="4240" data-slug-hash="vOWKVm" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/vOWKVm/'>Color inherited</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>

Mas então, você deve estar perguntando: qual a real utilidade disso, certo? Agora que as coisas começam a ficar legais e, dependendo da sua criatividade e organição dá pra fazer algumas coisas bem legais.

É possível usar por exemplo em animações, svg, gradientes.. e por aí vai. Fuçando pela *interwebs* da vida, achei esse [exemplo que, através de uma animação, altera a cor do elemento `body`, mudando assim o `currentColor` usado em outro elemento](http://codepen.io/scottkellum/pen/Fhxql).

Brincando um pouco, montei esse exemplo rápido, onde o `currentColor` é aplicado no `:after` do elemento.

<figure class="text-center loading">
    <p data-height="300" data-theme-id="4240" data-slug-hash="aOVERw" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/aOVERw/'>Simple buttons using currentColor</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>

A idéia para formar o triângulo é criar uma borda geral transparente e setar apenas o lado que você quer com o `currentColor`, formando assim o triângulo. Uma outra abordagem e, que chegaria no mesmo resultado seria fazer o processo inverso: setar uma borda geral com cor (no caso nem precisaria do `currentColor` pois ele herdaria a cor da propriedade `color`) e depois disso, tirar a borda dos lados que você não queira. Algo mais ou menos assim:

{% highlight css %}
.element:after {
    border: 0.4em solid;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
}
{% endhighlight %}

## Mas eaí.. dá pra usar?

O suporte é bem melhor do que eu imaginava.. IE9, Chrome, Firefox, Safari e por aí vai. Existe um pequeno [*bug* bem pontual, para Safari e iOS Safari 8](http://stackoverflow.com/questions/29400291/currentcolor-seems-to-get-stuck-in-safari) quando aplicado em `:after` e `:before`. [Dá pra ver mais informações no site do Can I Use](http://caniuse.com/#feat=currentcolor).

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
