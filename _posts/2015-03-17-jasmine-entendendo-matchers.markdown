---
layout: post
title:  "Jasmine: entendendo os matchers"
description: "Por acaso, você conhece todos os matchers que o Jasmine nos oferece pra brincar?"
type: Post
date: 2015-03-17
image: 'https://cloud.githubusercontent.com/assets/1345662/11458074/e50ba9de-969f-11e5-9983-999042edf9c0.jpg'
alt: 'Cadeado preso em uma grade'
---

Há algum tempo atrás escrevi umas groselhas sobre *Jasmine*, mais uma introdução sobre o *framework* e como escrever testes era algo intuitivo e fácil. Se você tem interesse, o post é o: [Brincando com Jasmine](/brincando-com-jasmine).

Uma parte legal do *Jasmine* e que adianta muito o nosso lado são os *matchers*: de um modo resumido e direto, um *matcher* implementa uma comparação *booleana* entre o valor atual e o valor esperado. É responsável em passar para o *Jasmine* se o que *esperamos* através do nosso teste é *verdadeiro* ou falso. Com base nisso, o *Jasmine* vai passar ou falhar a *spec*.

## `toEqual`

Esse talvez seja o mais básico e um dos que mais iremos usar. Simplemente verifica se duas coisas são iguais (e não necessariamente o mesmo objeto). Por exemplo, as seguintes *expects* iriam passar:

{% highlight js %}
expect(true).toEqual(true);
expect([1, 2, 3]).toEqual([1, 2, 3]);
{% endhighlight %}

Da mesma forma, as seguintes iriam falhar:

{% highlight js %}
expect(5).toEqual(12);
expect([1, 2, 3]).toEqual([11, 12, 13]);
{% endhighlight %}

## `toBe`

O *matcher* `toBe` a princípio parece ser igual ao anterior *toEqual*. A diferença é que `toBe` verifica não só se os dois valores são iguais, mas também como se eles são do mesmo objeto.

Pra podermos ver a diferença entre os dois:

{% highlight js %}
var bob = { model: "Camaro" };
var john = { model: "Camaro" };

expect(bob).toEqual(john); // passa => são equivalentes
expect(bob).toBe(john); // falha => não é o mesmo objeto
{% endhighlight %}

Apesar de *bob* e *john* serem similares, eles não são o mesmo objeto, o que faz a *spec* passar se for usado o *matcher* `toEqual` mas falha se for usado o *matcher* `toBe`. O mesmo acontece para arrays:

{% highlight js %}
var group = [100, 101, 102];

expect(group).toEqual([100, 101, 102]); // passa => são equivalentes
expect(group).toBe([100, 101, 102]); // falha => não é o mesmo array
{% endhighlight %}

## `toBeTruthy` e `toBeFalsy`

Para testar se algum valor é avaliado commo *true* ou *false*, podemos usar respectivamente os *matchers* `toBeTruthy` e `toBeFalsy`:

{% highlight js %}
expect(true).toBeTruthy();
expect(1000).toBeTruthy();
expect({}).toBeTruthy();

expect("").toBeFalsy();
expect(null).toBeFalsy();
expect(false).toBeFalsy();
{% endhighlight %}

Se pararmos pra olhar com calma o exemplo anterior podemos notar que a avaliação dos *matchers* `toBeTruthy` e `toBeFalsy` é idêntica ao *JavaScript*. Então temos alguns valores específicos que são considerados *falsy* e todo o restante é avaliado como *truthy*. Pra nossa referência, uma lista dos valores que são avaliados como *falsy* pelo *Jasmine*:

* `false`
* `0`
* `""`
* `undefined`
* `null`
* `NaN`


## `not`

Muitas vezes podemos inverter um *matcher* pra termos certeza de que ele não é um valor `true`. Podemos fazer isso facilmente adicionando o prefixo `.not`:

{% highlight js %}
expect('Fabeni').not.toEqual('Finelli');
{% endhighlight %}

## `toContain`

Conseguimos também verificar se um elemento *está contido* em um *array* ou *string* por exemplo, como o *matcher* `toContain`.

{% highlight js %}
expect([10, 11, 12, 13, 14, 15]).toContain(13);
expect('Raphael Fabeni').toContain('Fabeni');
{% endhighlight %}

## `toBeDefined` e `toBeUndefined`

Da mesma maneira que vimos os *matchers* `toBeTruthy` e `toBeFalsy`, *Jasmine* também nos oferece os benditos `toBeDefined` e `toBeUndefined` que verificam se um valor é `defined` ou `undefined`.

{% highlight js %}
var iAmUndefined;
expect(null).toBeDefined(); // passa
expect('Fabeni').toBeDefined(); // passa
expect(iAmUndefined).toBeDefined(); // falha

expect(iAmUndefined).toBeUndefined(); // passa
expect(12).toBeUndefined(); // falha
expect(null).toBeUndefined(); // falha
{% endhighlight %}

## `toBeNull`

Direto ao ponto, esse brother simplesmente avalia se um valor é `null`:

{% highlight js %}
expect(null).toBeNull(); // passa
expect(false).toBeNull(); // falha
expect(1).toBeNull(); // falha
{% endhighlight %}

## `toBeNaN`

Sem muitas delongas, esse *matcher* verifica se um valor é `NaN`:

{% highlight js %}
expect(0).toBeNaN(); // falha
expect(10).not.toBeNaN(); // passa
{% endhighlight %}

## `toBeGreatherThan` e `toBeLessThan`

Esses dois *matchers* verificam se um valor é maior ou menor que um outro valor passado.

{% highlight js %}
expect(10).toBeGreatherThan(1); // passa
expect(10).toBeLessThan(20); // passa
{% endhighlight %}

## `toBeCloseTo`

Esse *matcher* permite que possamos verificar se um certo número está próximo de um outro número, dado uma certa precisão decimal como segundo argumento. Poderíamos por exemplo, verificar se um número é próximo de `25.23` com um ponto decimal, poderíamos fazer algo assim:

{% highlight js %}
expect(25.23).toBeCloseTo(25.2, 1); // passa
{% endhighlight %}

## `toMatch`

Esse cara verifica se algum valor está de acordo com base em uma expressão regular.

{% highlight js %}
expect('Yes, we can!').toMatch(/we/); // passa
{% endhighlight %}

## `toThrow`

Esse *matcher* permite que verifiquemos se uma função lançou um erro. Como exemplo, vamos imaginar que temos uma função `onlyNumbers` que deve *lançar uma exceção* caso o argumento passado seja uma *string* e não um número. Podemos usar aqui uma *função anônima* para nos facilitar a vida:

{% highlight js %}
expect(function() {
    onlyNumbers('argumento errado')
}).toThrow();
{% endhighlight %}

## Ufa...

Deu pra ver que o *framework* nos oferece um monte de opção para utilizarmos em nossos testes. É ainda é possível fazer nossos *matchers* customizados, mas vou deixar isso para um próximo post. Se você se interessar mais pelo assunto, recomendo o livro [JavaScript Testing with Jasmine](http://shop.oreilly.com/product/0636920028277.do) que inclusive li recentemente e tive a idéia de escrever o post.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.












