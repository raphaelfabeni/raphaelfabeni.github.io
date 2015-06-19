---
layout: post
title:  "Usando o currentColor do CSS"
description: ""
type: Post
date: 2015-06-24
image: ''
alt: ''
---

Variáveis no **CSS**? Em futuro não muito distante (ou talvez sim) poderemos usar nossas variáveis muito doidas diretamente no CSS, mas enquanto o sol não raia pra nós, conseguimos simular esse recurso através dos pré-processadores. Pra mim, o uso de variáveis são umas das principais e, acho que poucas, *features* que uso dos pré-processadores, mas voltemos ao assunto.

## Variáveis são legais

Se você está acostumado a utilizar um *Sass* ou *LESS* da vida, sabe o quão legal e útil pode ser utilizar variáveis quando falamos de estilo. Uma coisa útil é que variáveis nos ajudam a evitar repetições e nos ajudam e muito principalmente em projetos grandes onde a possibilidade, de por exemplo, ter uma repetição de uma cor específica é bem grande.

Um bom caso de aplicação de variáveis são na questão de temas ou variações de um componente ou até de um projeto inteiro. Criar e gerenciar esquemas de cores com variáveis fica bem mais fácil: podemos criar por exemplo, uma variável chamada `main-color` e declarar a cor `red` pra ela. Assim, se em uma manutenção futura, precisarmos mudar essa cor, alteramos apenas na declaração da variável e não em todos os casos que ela é utilizada. Claro que tudo depende de como estruturamos a *coisa toda*, pois uma pequena alteração de cor pode te dar alguns problemas.

## O tal do `currentColor`

O danado do `currentColor` funciona semelhante a uma variável salvo duas exceções: só podemos utilizá-lo com cores e, diferente de uma variável comum, não podemos `setar` o seu valor, e sim, isso é herdado do valor atual da propriedade `color` que está sendo usado no elemento. Ficou confuso? Eu também! Vamos lá!



## Mas eaí.. dá pra usar?

O suporte é bem melhor do que eu imaginava.. IE9, Chrome, Firefox, Safari e por aí vai. Existe um pequeno [*bug* bem pontual, para Safari e iOS Safari 8](http://stackoverflow.com/questions/29400291/currentcolor-seems-to-get-stuck-in-safari) quando aplicado em `:after` e `:before`. [Dá pra ver mais informações no site do Can I Use](http://caniuse.com/#feat=currentcolor).

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
