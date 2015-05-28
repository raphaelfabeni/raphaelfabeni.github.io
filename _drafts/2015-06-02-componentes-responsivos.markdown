---
layout: post
title:  "Componentes responsivos"
description: ""
type: Post
date: 2015-06-02
image: ''
alt: ''
---

Lembro a primeira vez que comecei a mexer com design responsivo. Na hora pensei: *que bruxaria é essa manolo?*. Achava tudo aquilo maravilhoso. Aí comecei a pesquisar mais e mais sobre o assunto e vi que design responsivo é muito mais do que só *blocar* todo seu conteúdo pra ele *caber* nas telas dos smartphones e tablets. É necessário todo um estudo e toda uma preparação desde a parte de arquitetura/layout até o desenvolvimento para que independente da resolução que o usuário acesse o seu projeto, ele tenha uma boa experiência e usabilidade e não dê de cara com um monte de coisa jogada ali no famoso *faz caber*.

Mas enfim, esse é um outro assunto e que quero abordar em breve num novo post. Minha idéia aqui é documentar e escrever algumas idéias que já coloquei em prática algumas vezes e que, pelo menos pra mim, parecem ter dado certo.

## O cenário atual do design responsivo

Design responsivo já esteve *mais na moda* acredito eu. Lembro de um lugar que trabalhei, que no início, logo que colocamos a colocar em prática, o design responsivo era um *plus* a mais no projeto, até porque pouco sabíamos sobre o tema e não queríamos correr o risco; com o tempo ele foi se tornando algo normal e presente em todos os projetos. Pra quem é da frente do *freela*, já vi em vários lugares alguns tópicos sobre o assunto (lembro de um que vi faz um tempo de um desenvolvedor falando que seu cliente tinha achado caro pra fazer um site com design responsivo, que segundo ele era só *diminuir o tamanho das coisas*).

## Tem jeito certo?

Minha preferência é seguir pelo *[mobile first](http://abookapart.com/products/mobile-first)*, que nada mais é que começar pensando o projeto pela parte *mobile* e aos poucos ir adaptando para resoluções maiores. Acontece muito também pela *interwebs* da vida fazer o processo inverso: desenvolver o projeto na resolução que geralmente é especificada no *layout*, eaí após isso fazer o que já vi muita gente falando por aí: *deixar o site responsivo*. Existe um certo? Deixo pra você responder.

## Pré processadores e a estrutura

Grande parte dos projetos que mexi até hoje utilizam pré-processadores de CSS. E pra ser sincero, nem sempre pra utilizar todas as *features* que eles oferecem, mas em grande parte também pela possibilidade da modularização de arquivos. Esse é um outro assunto bem extenso e se você se interessa por ele, recomendo a talk [Arquitetura CSS](https://speakerdeck.com/rafaelrinaldi/arquitetura-css) do [Rafael Rinaldi](https://twitter.com/rafaelrinaldi). Cada técnica utiliza-se de um padrão para nomenclatura tanto de classes e até para a divisão das pastas relacionadas à estruturação do projeto.

### Módulos ou componentes?

Independente da técnica utilizada, acredito que a principal idéia da maioria seja semelhante: modularizar seu código para que ele fique escalável e fácil de fazer manutenção. Com isso, abrimos as portas para arquivos específicos para módulos (ou componentes, da maneira que você preferir). Tá mas o que isso tem a ver com design responsivo?

Recentemente tive que mexer em um projeto que possuía alguns *módulos/componentes bem definidos*, cada um com um arquivo de estilo específico. O que já vi em alguns lugares é cada arquivo ter suas regras específicas de estilo e após isso um arquivo específico que faz a *responsividade* da coisa. É o famoso arquivo *media-queries.extensaoquevocequiser*.

Uma outra maneira de se fazer, e que eu particularmente prefiro, é que cada *módulo/componente* seja responsivo por si só; independente de outros arquivos. Assim, se tivéssemos um arquivo `fabeni-component.scss`, em um exemplo rápido, poderíamos ter algo assim:

{% highlight css %}
.fabeni {
    // estilos para resoluções até 600px
}

// Breakpoint
@media (min-width: 600px) {
    // estilos para resoluções maiores que 600px
}
{% endhighlight %}

No exemplo acima, é usada a idéia do *mobile first*, assim a classe tem um estilo inicial padrão e através da *media querie*, altero esse estilo para resoluções maiores que 600 pixels.

## Deixe seu módulo/componente o mais fluído possível

Se você gostou da idéia módulos/componentes responsivos, e eu pudesse dar uma dica é que você os deixe o mais fluído possíveis. Assim, você passa o controle total de largura e altura para o grid. Uma dor de cabeça a menos para se preocupar, pois você sabe que independente da largura, o seu componente vai se adaptar corretamente.

Claro que nem tudo são flores e na prática e na correria do dia a dia as coisas podem não sair tão fáceis assim. É normal que em uma resolução ou outra, o conjunto de componentes em uma determinada tela pode demandar ainda um pente fino, principalmente em questões de alinhamento.

## É a bala de prata isso?

Claro que não, pois eu acho que não existe. O certo geralmente é aquilo que melhor se adequa a você ou ao seu time.

__

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.

