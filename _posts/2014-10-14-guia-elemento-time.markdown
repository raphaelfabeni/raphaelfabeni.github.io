---
layout: post
title:  "Um guia para o elemento time"
description: "Você já ouviu falar no elemento time? Conheça os segredos dessa tag e comece a usá-la"
type: Post
date: 2014-10-14
image: 'https://cloud.githubusercontent.com/assets/1345662/11458306/77ace862-96a4-11e5-8d7f-669a8591c360.jpg'
alt: 'Imagem mostra relógio de pulso segurado pela corda'
lang: pt-br
category: 'html'
---

O HTML5 trouxe diversas coisas bacanas pra nós desenvolvedores. Uma das mais simples e que eu acho que são uma das mais legais é a questão da semântica com os novos elementos. O surgimento dessas tags deixaram nossos códigos mais semânticos e legíveis, tanto por nós como pelas máquinas.

Um desses elementos é o time. Já havia lido sobre ele, mas nunca tinha ido muito a fundo. Esses dias encontrei um texto do Aurelio De Rosa no SitePoint que explica bastante coisa sobre este elemento e resolvi traduzir pra gente.

--

Tempo - uma das poucas coisas que sabemos que é infinita. Os seres humanos, bem como animais e plantas, têm lidado com o tempo desde o início de sua existência.

Na web essa necessidade não é diferente. Mesmo nesse meio, precisamos nos comunicar com outras pessoas de que alguma coisa aconteceu em um determinado ponto, em uma data específica, ou em relação a um outro tempo definido.

Antes do HTML5 não tivemos nenhum elemento para marcar semanticamente uma data ou hora. Nos últimos anos, outras soluções, como os <a href="http://microformats.org/" target="_blank">Microformats</a> e <a href="http://en.wikipedia.org/wiki/Microdata_%28HTML%29" target="_blank">Microdata</a>, tentaram preencher esta lacuna para situações específicas (data de nascimento, a publicação de um livro, e assim por diante).

Nesse artigo eu irei cobrir o elemento <code>time</code> do HTML5, o que ajuda a responder à necessidade de que acabamos de discutir.

## O que é o elemento <code>time</code>?

O elemento <code>time</code> foi introduzido na especificação do HTML5 em 2009. Então, em 2011 foi trocado  em favor do <code>data</code>. Então, em seguida, o elemento foi reintroduzido e melhorado para permitir novos formatos de data/hora. A partir deste ponto você pode ver que as especificações podem ser bastante controversas.

O elemento <code>time</code> representa uma data e/ou um tempo no <a href="http://en.wikipedia.org/wiki/Gregorian_calendar" target="_blank">calendário gregoriano</a>. É um elemento inline (como <code>&lt;span&gt;</code> e <code>&lt;a&gt;</code>) e deve ter uma tag de fechamento (como <code>&lt;div&gt;</code> e <code>&lt;span&gt;</code>). Quando usado na sua forma mais simples, o conteúdo do elemento deve ser uma string <a href="http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element" target="_blank">de data e/ou tempo válidas</a>.

Um exemplo abaixo:

```html
<!-- 1º Fevereiro 2009 -->
<time>2009-02-01</time>
```

No código acima, eu estou definindo uma data, especificamente 1º de fevereiro de 2009. O formato utilizado no código (aaaa-mm-dd) deve ser familiar para você se você já mexeu algum tempo com Linux, mas, como veremos mais adiante neste artigo, este não é o único formato válido.

No primeiro esboço das especificações, datas precisas eram um dos poucos formatos que você podia escrever. Por exemplo, você não podia especificar uma data como "Novembro 2014" ou "476" (o início da Idade Média). Isso foi um grande problema para vários casos, como a datação de uma pintura ou de um acontecimento histórico pois não havia uma data precisa.

Felizmente, esse tipo de data agora é permitida na especificação. Então, hoje nós podemos descrever um determinado mês de um ano sem um dia:

```html
<!-- Janeiro 2014 -->
<time>2014-01</time>
```

## O atributo <code>datetime</code>

A especificação para o elemento também padronizou um atributo chamado de <code>datetime</code>.

Ao escrevermos datas como nos formatos discutidos na seção anterior, pode funciona em alguns países/culturas, como pode não atender outros. Por exemplo, os italianos (e nós brasileiros) escrevem datas usando o formato <i>dd/mm/aaaa</i>. Portanto, mostrar uma data em outro formato pode gerar confusão.

Este problema pode ser facilmente resolvido usando o atributo <code>datetime</code> do elemento <code>time</code>. É um atributo opcional que contém as informações em um formato legível por uma máquina, como os observados nos exemplos anteriores, o que nos permite que possamos escrever o conteúdo do elemento da qualquer maneira que nós quisermos.

Na verdade, se o atributo <code>datetime</code> não for especificado, o conteúdo deve estar em um dos formatos de data/hora válidos, caso contrário, podemos usá-lo como quisermos. Isso é ótimo porque nos permite escrever um código assim:

```html
A próxima reunião está agendada para <time datetime="2014-10">Outubro</time>.
```

Ou assim:

```html
A próxima reunião está agendada para o <time datetime="2014-10">próximo mês</time>.
```

Ambos exemplos possuem um conteúdo de data que não é legível por uma máquina de acordo com a especificação, mas são aceitáveis​​, por causa da presença do atributo <code>datetime</code>, que <i>faz uso</i> de um formato válido.

À primeira vista, isso pode parecer estranho. Mas o conteúdo do elemento foi concebido para servir os seres humanos, não máquinas. Além disso, esse fato permite a internacionalização das datas. Por exemplo:

```html
<!-- Mesma mensagem anterior, só que em italiano -->
Il prossimo incontro è programmato per <time datetime="2014-10">il mese prossimo</time>.
```

No código acima temos a mesma mensagem anterior, só que em Italiano.

## O atributo <code>pubdate</code>

Os primeiros rascunhos da especificação definiam um atributo <code>pubdate</code> para o elemento <code>time</code>. Este atributo era um <i>booleano</i> que indicava que uma determinada data era a data de publicação do elemento pai <code>article</code> ou, em caso de ausência de elemento <code>article</code> pai, de todo o documento.

Você poderia escrever por exemplo:

```html
<article>
    <h1>Um título</h1>
    <p>Esse é o conteúdo do article.</p>
    <footer>
        <p>Artigo publicado em <time datetime="2014-09-05" pubdate>05 de setembro de 2014</time>
    </footer>
</article>
```

Nesse caso, 05 de setembro de 2014 seria a data de publicação desse <code>article</code>.

Eu fui um grande fã deste atributo desde que aprendi bastante sobre isso, mas, infelizmente, ele foi removido da especificação. Essa decisão criou um grande problema, porque um grande número de pessoas (inclusive eu) usam a data de publicação para julgar o frescor e a relevância de um artigo ou notícia. Embora seja verdade que você ainda possa acessar a página de um artigo e ver a data de publicação, precisamos de uma forma padrão para uma máquina de ler a data.

No atual momento não existe um atributo que substitua <code>pubdate</code>, mas você pode empregar o <a href="http://schema.org/BlogPosting" target="_blank">BlogPosting schema</a>, e especificamente o valor <code>datePublished</code> como mostrado abaixo:

```html
    <article itemscope itemType="http://schema.org/BlogPosting">
        <h1 itemprop="headline">Um título</h1>
        <p itemprop="articleBody">Conteúdo do article.</p>

        <footer>
            <p>Artigo publicado em <time datetime="2014-09-05" itemprop="datePublished">05 de setembro de 2014</time>
        </footer>
</article>
```

Agora que você tem um <i>overview</i> completo do elemento <code>time</code>, vamos ver os diversos formatos permitidos.

Os formatos validos para o conteúdo do elemento <code>time</code> na ausência do atributo <code>datetime</code> e para esse atributo em si são descritos nos itens seguintes.

## Um mês válido

Deve ser uma <i>string</i> especificando um mês específico de um ano no formato <b>aaaa-mm</b>. Por exemplo:

```html
<!-- Setembro 2014 -->
<time>2014-09</time>
```

## Uma data válida (dia do mês)

Deve ser uma <i>string</i> especificando uma data precisa no formato <b>aaaa-mm-dd</b>.

Por exemplo:

```html
<!-- 16 de setembro de 2014 -->
<time>2014-09-16</time>
```

## Uma data válida sem ano

Deve ser uma <i>string</i> especificando um mês e um dia sem um ano no formato <b>mm-dd</b>.

Por exemplo:
```html
<!-- 29 de Junho -->
<time>06-29</time>
```

## Um tempo válido

Deve ser uma <i>string</i> especificando um tempo sem uma data e usando o formato 24 horas, da seguinte maneira <b>HH:MM[:SS[.mm]]</b> onde:
<ul>
    <li><b>H</b> são horas</li>
    <li><b>M</b> são minutos</li>
    <li><b>S</b> são segundos</li>
    <li><b>m</b> são milisegundos</li>
    <li>Os <i>brackets</i> indicam partes que são opcionais.</li>
</ul>

Um exemplo desse formato mostrado abaixo:

```html
<!-- 16 horas e 10 minutos (ou 4 horas e 10 minutos pm) -->
<time datetime="16:10">afternoon</time>
```

## Uma data e hora <i>flutuante</i> válida

Esse formato é apresentado na especificação do W3C, mas não na versão WHATWG. Deve ser uma data e um tempo precisos no formato <b>aaaa-mm-ddTHH:MM[:SS[.mm]]</b> ou <b>aaaa-mm-dd HH:MM[:SS[.mmm]]</b>. Por exemplo:

```html
<!-- 16 de Setembro de 2014 às 18 horas, 20 minutos, e 30 segundos -->
<time datetime="2014-09-16T18:20:30">Terça-feira às 18:20</time>
```

## Um fuso horário válido

Deve ser uma <i>string</i> representando um fuso horário. Por exemplo:

```html
<!-- GMT+1 (Itália) -->
<time>+01:00</time>
```

## Uma data e tempo global válidos

Deve ser uma <i>string</i> representando uma data completa, incluindo tempo e fuso horário. Por exemplo:

```html
<!-- 16 de Setembro de 2014 às 18 horas, 20 minutos, e 30 segundos um um fuso horário de GMT+1 (como a Itália) -->
<time>2014-09-16T18:20:30+01:00</time>
```

## Uma semana válida

Deve ser uma <i>string</i> representando uma semana do ano. Por exemplo:

```html
<!-- A 18ª semana de 2014 -->
<time>2014-W18</time>
```

## Um ano válido

Deve ser uma <i>string</i> representando um ano. Por exemplo:

```html
<!-- 2014 -->
<time datetime="2014">Esse ano</time>
```

## Uma <i>string</i> válida de duração

Deve ser uma <i>string</i> representando uma duração. Uma duração pode começar com o prefixo <i>"P"</i> (para <i>período</i>) e usa <i>"D"</i> para marcar os <i>dias</i>. Por exemplo:

```html
<!-- Uma duração de 4 dias -->
<time datetime="P4D">quatro dias</time>
```

Em caso da necessidade de especificar melhor o período, após o <i>"D"</i>, você pode adicionar um <i>"T"</i>, que significa <i>tempo</i>, e usar <i>"H"</i> para <i>horas</i>, <i>"M"</i> para <i>minutos</i> e <i>"S"</i> para <i>segundos</i>. Assim:

```html
<!-- Uma duração de quatro dias, quatro horas e três minutos -->
<time datetime="P4DT4H3M">quatro dias</time>
```

Esse formato também permite a você especificar um ou mais <a href="http://www.w3.org/TR/html5/infrastructure.html#duration-time-component" target="_blank">componentes de duração de tempo</a>.

## Limitações

A especificação atual tem algumas limitações no que você pode definir com o elemento <code>time</code>. Uma dessas limitações é que você não pode indicar intervalos de datas. Então, se você estiver escrevendo um post sobre uma conferência que dura mais de um dia, por exemplo a partir de 26 de junho de 2014 a 28 de junho de 2014, você terá que usar dois elementos <code>time</code>. Um bom exemplo pode ser encontrado na <a href="http://aurelio.audero.it/speaking" target="_blank">página sobre palestras do meu website</a>, onde eu uso o elemento <code>time</code>, como mostrado abaixo:

```html
<time datetime="2014-06-28">26<span class="hidden">de Junho de 2014</span></time>-<time datetime="2014-06-28">28 Junho 2014</time>
```

Outra limitação é que você não pode usar o elemento <code>time</code> para representar datas antes da <a href="http://en.wikipedia.org/wiki/Common_Era" target="_blank">Era Comum</a>.

## Suporte
Baseado no <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" target="_blank">artigo no MDN</a>, o suporte do elemento <code>time</code> é:
<ul>
    <li>Chrome 33+</li>
    <li>Firefox 22+</li>
    <li>Internet Explorer 9+</li>
    <li>Opera 22+</li>
    <li>Safari 7+</li>
</ul>

No entanto, não há muito o que se preocupar sobre navegadores antigos. Na verdade, em caso do navegador não oferecer suporte para o elemento, ele será renderizado como um elemento <i>inline</i> desconhecido.

## Conclusão

Se você ainda não começou a usar o elemento <code>time</code> nas suas páginas, eu espero que esse guia lhe inspire a começar.

Para mais informações, aqui vão alguns links relevantes:

<ul>
    <li><a href="http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-time-element"><code>&lt;time&gt;</code> Element on W3C</a></li>
    <li><a href="https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"><code>&lt;time&gt;</code> Element on WHATWG</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code> Element on MDN</a></li>
    <li><a href="https://wiki.whatwg.org/wiki/Time_element"><code>&lt;time&gt;</code> Element Wiki on WHATWG</a></li>
</ul>

—

<p>Texto traduzido e adaptado do <a href="http://www.sitepoint.com/html5-time-element-guide/">artigo </a>escrito pelo <a title="Perfil do twitter" href="https://twitter.com/AurelioDeRosa">Aurelio De Rosa</a> em 16 de setembro de 2014.</p>

Tradução autorizada pelo <a href="http://www.sitepoint.com/">SitePoint</a>.

Qualquer erro ou sugestão de melhoria na tradução, é bem vinda!
