---
layout: post
title:  "CSS level 4: seletor matches"
description: "Com base em uma lista de argumentos, selecionar elementos ficou mais fácil."
type: Post
date: 2016-03-07
image: "https://cloud.githubusercontent.com/assets/1345662/13560552/4958f4e4-e3ff-11e5-8de4-20372d14ab0b.jpg"
alt: "Uma caixa de madeira cheia de nozes"
lang: pt-br
url_en: /matches-selector-css-4
url_br: /css-4-seletor-matches
---

CSS3 já era coisa fina. Agora, na sua versão 4, ou melhor dizendo, em seu *nível 4*, como será dividido a partir de agora, tem muita coisa bacana. Uma delas é o seletor `:matches`.

Com ele, podemos substituir por exemplo, uma marcação assim:

{% highlight css %}
div .highlight,
footer .highlight {
  color: blue;
}
{% endhighlight %}

Para algo assim:

{% highlight css %}
:matches(div, footer) .highlight {
  color: blue;
}
{% endhighlight %}

Ou seja, `atacamos` toda classe `highlight` que seja filha de uma `div` ou `footer`.

Podemos ainda fazer da maneira inversa, como no exemplo abaixo: onde selecionamos todos elementos `p` que tenham a classe `success` ou que seja `first-child`.

{% highlight css %}
p:matches(:first-child, .success) {
  color: green;
}
{% endhighlight %}

[Aqui](http://codepen.io/raphaelfabeni/pen/LNGZYx/) é possível ver um exemplo com os códigos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
