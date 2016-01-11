---
layout: post
title:  "ES6: valores padrão em parâmetros de funções"
description: "Agora é possível atribuir valores a parâmetros caso eles não sejam passados o/"
type: Post
date: 2016-01-06
image: "https://cloud.githubusercontent.com/assets/1345662/12068674/5c23b1b6-aff9-11e5-8118-2d1b6ddbab78.jpg"
alt: "Encosto de cama com algumas almofadas e ao lado um pequeno armário com um despertador em cima"
lang: pt-br
url_en: /es6-default-values-parameters
url_br: /es6-valores-padrao-parametros
---

Parâmetros passados em funções, ok? Ok. Com ES6 é possível passar valores padrão para eles.

Quando criamos uma função, poderíamos verificar se os valores foram passados ou não, e dependendo da resposta, atribuir um valor a ele; algo mais ou menos assim.

{% highlight js %}
function oldHello(name) {
  var name = (!name) ? 'James Bond' : name;
  var nickname = (!nickname) ? 'Bond' : nickname;
  
  console.log('My name is ' + nickname + ', ' + name);
}

oldHello();
// My name is Bond, James Bond
{% endhighlight %}

Agora, podemos fazer algo assim:

{% highlight js %}
function hello(name = 'James Bond', nickname = 'Bond') {
  console.log('My name is ' + nickname + ', ' + name);
}

hello();
// My name is Bond, James Bond
{% endhighlight %}

[Aqui](http://jsbin.com/kofifu/edit?js,console) você encontra um JS Bin com os exemplos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
