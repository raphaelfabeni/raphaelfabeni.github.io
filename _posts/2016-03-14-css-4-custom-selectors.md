---
layout: post
title:  "CSS level 4: custom selectors"
description: "Juntar alguns seletores em uma variável. Sim, é possível."
type: Post
date: 2016-03-14
image: "https://cloud.githubusercontent.com/assets/1345662/13733793/fd6e4256-e975-11e5-8498-ff80c382917d.jpg"
alt: "Dois cachorros quase em pé olhando para a foto"
lang: pt-br
url_en: /custom-selectors-css-4
url_br: /css-4-custom-selectors
---

A possibilidade de armazenar valores em variáveis foi um dos pontos principais pontos dentre outros, na minha opinião, para o crescimento da adoção dos pré processadores. E se pudéssemos armazenar seletores? Sim, vou chorar. ʘ‿ʘ

É possível fazermos algo assim:

{% highlight css %}
@custom-selector :--button button, .btn, input[type="submit"];

:--button {
  /* css magic */ 
}
{% endhighlight %}

O que fizemos acima foi armazenar todos os elementos `button` e `input[type="submit"]` e também com a classe `btn` em `:--button`. Feito isso, declaramos as regras de estilo direto em `:--button`.

Com base nisso, podemos brincar um pouco mais e fazermos algo do tipo:

{% highlight css %}
@custom-selector :--enter :hover, :focus, .is-hover;
@custom-selector :--active :active, .is-active;

:--button:--enter {
  /* :hover, :focus and .is-hover styles */
}

:--button:--active {
  /* :active and .is-active styles */
}
{% endhighlight %}

O que fizemos na brincadeira acima foi:

* Armazenar os estados `:hover`, `:focus` e os elementos com classe `is:hover` em `:--enter`.
* Armazenar o estados `:active` e os elementos com a classe `.is-active` em `:--active`.
* Juntamos *tudão*: tudo que haviámos armazenado em `:--button` com `:--enter` e `:--active`.

Podíamos também chegar no mesmo resultado usando o nosso amigo [matches](/css-4-seletor-matches/):

{% highlight css %}
:--button:matches(:hover, :focus, .is-hover) {
  /* :hover, :focus and .is-hover styles */
}

:--button:matches(:active, .is-active) {
  /* :active and .is-active styles */  
}
{% endhighlight %}

A diferença, apontada pelo meu amigo [Rafael Rinaldi](https://twitter.com/rafaelrinaldi) é que o grande `custom selectors` é uma opção de *preset* se comparado com o `matches`, o que o deixa mais fácil de reutilizar.

<figure class="text-center loading">
  <p data-height="145" data-theme-id="4240" data-slug-hash="eZzjVw" data-default-tab="result" data-user="raphaelfabeni" class="codepen">See the Pen <a href="http://codepen.io/raphaelfabeni/pen/eZzjVw/">:not selector</a> by Raphael Fabeni (<a href="http://codepen.io/raphaelfabeni">@raphaelfabeni</a>) on <a href="http://codepen.io">CodePen</a>.</p>
</figure>

[Aqui](http://codepen.io/raphaelfabeni/pen/eZzjVw) é possível ver um exemplo com os códigos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>