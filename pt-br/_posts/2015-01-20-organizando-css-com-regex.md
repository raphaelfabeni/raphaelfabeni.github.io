---
layout: post
title:  "Regex para organizar seu CSS"
description: "Obsessivo por organização, acabei brincando esses dias para reorganizar uns arquivos CSS"
type: Post
date: 2015-01-20
image: 'https://cloud.githubusercontent.com/assets/1345662/11458198/72f7ffe8-96a2-11e5-839e-3ecf51e82068.jpg'
alt: 'Detalhe de um adorno em, aparenteente, parece ser uma porta de madeira'
lang: pt-br
category: 'tech'
permalink: 'organizando-css-com-regex/'
ref: 'organizando-css-com-regex'
---

Sempre fui um cara bastante preocupado em organização e acho que acabei passando essa característica pro mundo do desenvolvimento. Por exemplo, código não identado ou com a falta de um padrão são coisas que me incomodam um pouco. Se você se interessa pelo assunto, recomendo esse [artigo](https://medium.com/@shankarcabus/css-escalavel-parte-1-41e7e863799e) do [Shankar Cabus](https://twitter.com/ShankarCabus) que é focado em CSS escalável.

Sou daqueles que prefere pecar pelo excesso do que pela falta. Pra mim, tudo tem que ser documentado/explicado. O que você está escrevendo ali na hora, outras pessoas não tem como adivinhar e até você mesmo pode esquecer isso depois de um tempo.

Falando em CSS, eu gosto de utilizar comentários para divisão do código em blocos. Fiz há um tempo atrás uns [snippets para o Sublime Text](https://github.com/raphaelfabeni/css-comments) com base no que é proposto pelo [idiomatic-css](https://github.com/necolas/idiomatic-css) e não consigo mais viver sem. Se você é como eu, e se interessa pelo assunto, apresentei uma talk rápida [sobre organização de CSS](https://speakerdeck.com/raphaelfabeni/organizando-o-css) em um dos [Meetups de CSS](http://www.meetup.com/CSS-SP/) e recomendo também essa [talk sobre manutenção e refatoração de CSS] do [Lucas Mazza](https://twitter.com/lucasmazza) que aborda uns assuntos bem legais.


## Arrumando a casa

Algum tempo atrás acabei mexendo em um código CSS *beeeeem* antigo. Logo de cara já sai arrumando indentação e principalmente adotando um padrão para a escrita do código. *Mas que padrão é esse?*, você deve estar se perguntando. São coisas simples. Por exemplo, o trecho de código abaixo:

{% gist e6e74a1136ef8a1ea73ad8dc891de908 %}

Ficaria assim:

{% gist 16603c9a90eeba80dafc0315b7ded405 %}

São pequenos detalhes, mas que para mim fazem uma diferença tremenda. Principalmente na leitura do todo. Mas três classes são tranquilas de mudar, e quando você tem vários arquivos? Minha idéia foi ir para o *Find & Replace* do Sublime Text.

Suponha que temos o seguinte código:

{% gist 34186c479d013995a4aafc7718ba8762 %}

Eu iria querer pegar o `:` que vem depois da propriedade e colocar um espaço logo após ele, separando-o do valor e assim melhorando um pouco a leitura. Mas veja o que acontece:

{% gist b076a870c39d90bc64857ca86202728a %}

Viram? Ele insere também um espaço antes do `hover`. Poderíamos arrumar isso manualmente ou até fazer um outro *Find & Replace*, trocando `: hover` por `:hover`. Mas não, queria brincar um pouco mais. E foi aí que pensei: *por que não Regex?* #oremos

## Regex nosso de cada dia

Lembro de uma vez conversando com o [Rinaldi](https://twitter.com/rafaelrinaldi) que ele disse que ninguém domina regex e, realmente acho que pra dominar a parada você tem que ser tipo Batman. Brincadeiras a parte, regex é muito bacana, apesar de ter dado tela azul na minha cabeça algumas vezes.

Minha idéia era tentar aplicar o básico de regex no *Find & Replace* para tentar solucionar problemas como o citado acima com os `:`. Antes de qualquer coisa, estou usando o *Find & Replace* do Sublime Text que pode ser acessado pelo comando `cmd + shift + f` e, ativando a opção de Regex (clicando em botão do lado esquerdo que tem um ponto e um asterisco => `.*`).

### Caso 1 => os dois pontos

{% gist edba449f2403e1d1fae69fd6260d8080 %}

* *Find* => `([a-zA-z0-9])\:(?!hover|focus)([a-zA-z0-9])`
* *Replace* => `$1: $2`

Nesse caso estamos buscando quaisquer digitos ou letras (exceto que formem as strings *hover* ou *focus*) e que estejam em volta de um `:` e substituindo pelo primeiro *match* seguido de dois pontos, espaço e o segundo *match*; deixando nosso código assim.

{% gist 58297a566135e883f6c4f7d06bb3e76d %}

### Caso 2 => as chaves

* *Find* => `([a-zA-z0-9])\{([a-zA-z0-9])`
* *Replace* => `$1 { $2`

Agora apenas buscamos `{` que estejam envoltas em letras ou números e aplicamos um espaço em volta delas.

{% gist b2a096cb2a3b2c010b05d747016a0b41 %}

* *Find* => `(\;)\}`
* *Replace* => `$1 }`

Continuando agora para a chave de fechamento, buscamos qualquer `;` que seja seguida de uma `}` e apenas adicionamos um espaço antes dela.

{% gist 6968be9d8f7e87fdda221f87174ce6dc %}

### Caso 3 => o ponto e vírgula

* *Find* => `([a-zA-z0-9])\;([a-zA-z0-9])`
* *Replace* => `$1;\n\t$2`

Agora buscamos todo `;` que esteja entre letras e/ou dígitos e substituímos pelo primeiro *match* seguido do ponto e vírgula, uma quebra de linha, um *tab* e por fim o segundo *match*; deixando nosso código dessa maneira.

{% gist 8f13f7354e997faa92e1562bc3031bba %}

## Vale a pena?

Estamos na era da automatização e eu me perguntei logo no início se não teria alguma ferramenta ou até extensão do Sublime que fizesse isso. Antes de procurar a resposta, resolvi brincar um pouco com regex.

A resposta da pergunta acima acredito que seja meio óbvia e espero que você não fique bravo de ter lido até aqui e descobrir que **sim**, existem soluções prontas para isso. Uma delas é o [SassBeautify](https://packagecontrol.io/packages/SassBeautify) que pode ser instalado via *package control*.
