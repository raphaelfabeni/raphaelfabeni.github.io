---
layout: post
title:  "Jasmine: criando spies"
description: "Jasmine possibilita a criação de spies, que ao pé da letra, 'ficam de olho' em partes específicas do seu código."
type: Post
date: 2015-05-22
image: 'https://cloud.githubusercontent.com/assets/1345662/11457969/79fb1d56-969e-11e5-8326-aa50572ae52d.jpg'
alt: 'Vários relógios dourados presos a uma superfície e dispostos um ao lado do outro'
lang: pt-br
category: 'tech'
permalink: 'jasmine-spies/'
ref: 'jasmine-spies'
---

Há algum tempo atrás, escrevi umas groselhas sobre *Jasmine*: [um post foi mais uma introdução sobre o framework](/brincando-com-jasmine) e o [outro post foi sobre os matchers que o Jasmine nos oferece](/jasmine-entendendo-matchers).

## O que são os `spies`?

Basicamente quando usamos *Jasmine* especificamos nos testes como nosso código deve (ou deveria) funcionar. Ao usar um `spy` conseguimos fazer com que ele *fique de olho* em partes do nosso programa, assim essa parte pode ser substituída por um `spy` (que pode ser uma *função* ou *objeto*). Assim, conseguimos testar se determinada função está sendo chamada e se está sendo chamada com os argumentos esperados. Confuso? Vamos lá...

Imagine que temos uma brincadeira assim:

{% gist e0900d75e1f3076ce782b452d0d904c0 %}

Acima, temos um construtor de *sanduíche ¯\\_(ツ)_/¯* e dois métodos: um que vai adicionar ingredientes ao nosso sanduíche e outro que irá retornar a lista com os ingredientes do sanduíche super gostoso.

Agora, como testamos pra saber se os métodos estão funcionando do jeito que esperamos? Podemos começar com algo assim:

{% gist cda8e014105855a9b690e6474e60c6da %}

O que fizemos no código acima foi o seguinte:

* criamos uma variável `fabeni`;
* através do nosso `beforeEach`, antes de cada `spec` é criado um novo `Sandwich` e atrelado à `fabeni`;
* criamos um `spy` no método `addIngredient`,  para ser utilizado nas *specs* (através do `spyOn`, passamos como primeiro parâmetro o objeto relacionado e como segundo parâmetro o método que vamos espionar);
* adicionamos 2 ingredientes no *sanduíche* através do método `addIngredient`;
* criamos uma primeira `spec` que *espera* que o método `addIngredient` tenha sido chamado (através do *matcher* `toHaveBeenCalled()`).

Assim, se rodarmos nosso teste, vamos ver que ele passou, ou seja, o método `addIngredient` está sendo chamado perfeitamente.

<figure class="loading">
    <img src="https://cloud.githubusercontent.com/assets/1345662/11457980/ab42d886-969e-11e5-8e52-ba892aef800a.png" alt="Print da tela mostrando que o teste passou">
</figure>

Agora, se quisermos verificar se esse mesmo método está sendo chamado com os argumentos corretos poderíamos adicionar a seguinte *spec*:

{% gist 5517f832e13baa3817628a8395dd074f %}

Nessa nova *spec* utilizamos do *matcher* `toHaveBeenCalledWith()` com o argumento que esperamos que tenha sido chamado (conforme a chamada que fizemos no `beforeEach`). Feito isso, ao rodarmos nossos testes:

<figure class="loading">
    <img src="https://cloud.githubusercontent.com/assets/1345662/11457981/ab4446d0-969e-11e5-823b-286b2deb0db7.png" alt="Print da tela mostrando que o teste passou">
</figure>

Resumidamente o `spyOn` substitui a função, interceptando assim as suas chamadas e acompanhando algumas informações importantes sobre ela para utilizarmos em nossas *specs*. Aí temos um ponto a se considerar: dessa maneira perdemos as capacidades da função original. Para resolver isso podemos usar o `andCallThrough()`. Vamos lá:

{% gist 5b679d86b7a6b2d35cf8d846b9fd8037 %}

Acima, apenas preparamos o terreno:

* criamos duas variáveis `fabeni` e `fabeniBurger`;
* novamente utilizamos o `beforeEach` para fazermos algumas coisas antes de cada *spec*;
* criamos um `spy` no método `addIngredient`,  para ser utilizado nas *specs* e encadeamos o `.and.callThrough()` para transmitirmos as chamadas a ele através da função original;
* adicionamos 2 ingredientes no *sanduíche* através do método `addIngredient`;
* referenciamos em `fabeniBurger` o valor de retorno do método `mySandwich()` de `fabeni`.

Com isso então, podemos criar nossas *specs*:

{% gist 46ddec6e195ad4cfd82c3201a09a2d6e %}

No exemplo acima, criamos duas *specs*:

* a primeira simplesmente verifica se o método `mySandWich` foi chamado;
* e a segunda verifica se o valor retornado desse mesmo método (no caso referenciado na variável `fabeniBurger`) é igual ao que esperamos (de acordo com o que foi *setado* no `beforeEach`).

Aí é só rodarmos nossos testes:

<figure class="loading">
    <img src="https://cloud.githubusercontent.com/assets/1345662/11457979/ab42215c-969e-11e5-81a4-0652003ae440.png" alt="Print da tela mostrando que o teste passou">
</figure>

Valeu ao grande [Weslley Araujo](https://twitter.com/_weslleyaraujo) pela ajuda na revisão do post.
