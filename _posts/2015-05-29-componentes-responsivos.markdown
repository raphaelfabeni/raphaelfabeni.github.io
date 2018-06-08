---
layout: post
title:  "Componentes responsivos"
description: "Uma idéia que tive há algum tempo atrás sobre cada componente ser responsivo e independente."
type: Post
date: 2015-05-29
image: 'https://cloud.githubusercontent.com/assets/1345662/11457956/32c0b946-969e-11e5-8fe0-d65ce3647453.jpg'
alt: 'Foto mostra uma parte de uma roda gigante'
lang: pt-br
category: 'css'
---

Lembro a primeira vez que comecei a mexer com design responsivo. Na hora a minha reação foi: *que bruxaria é essa manolo?*. Achava tudo aquilo maravilhoso. Com o tempo, passei a pesquisar mais e mais sobre o assunto e vi que design responsivo é **muito mais do que só blocar todo seu conteúdo** pra ele *caber* nas telas dos smartphones e tablets. É necessário todo um estudo e toda uma preparação desde a parte de arquitetura/layout até o desenvolvimento para que **independente da resolução** que o usuário acesse o seu projeto, ele tenha uma **boa experiência e usabilidade** e não dê de cara com um monte de coisa jogada ali no famoso *faz caber*.

Mas enfim, esse é um outro assunto e que quero abordar em breve num novo post. Minha idéia aqui é documentar e escrever algumas idéias que já coloquei em prática algumas vezes e que, pelo menos pra mim, parecem ter dado certo.

## O cenário atual do design responsivo

Design responsivo já esteve *mais na moda*, acredito eu. Lembro de um lugar que trabalhei, que no início, logo que colocamos a colocar em prática, o design responsivo era um *plus* a mais no projeto, até porque pouco sabíamos sobre o tema e estávamos aprendendo aos poucos; com o tempo ele foi se tornando algo normal e presente em todos os projetos. Pra quem é da frente do *freela*, já vi em vários lugares alguns tópicos sobre o assunto e imagino o quanto de coisa essa galera já deve ter ouvido. Lembro de um caso que vi faz um tempo, não lembro onde, de um desenvolvedor falando que seu cliente tinha achado caro pra fazer um site com design responsivo; que segundo ele era fácil, era só *diminuir o tamanho das coisas*. ¯\\\_(ツ)_/¯

## Tem jeito certo?

Minha preferência é seguir pelo *[mobile first](http://abookapart.com/products/mobile-first)*, que nada mais é que começar pensando o projeto pela parte *mobile* e aos poucos ir adaptando para resoluções maiores. Acontece muito também pela *interwebs* da vida, fazer o processo inverso: desenvolver o projeto na resolução que geralmente é especificada no *layout*, e depois isso fazer o que muita gente fala por aí: *deixar o site responsivo*. Existe um certo? Deixo pra você responder pois isso envolve várias outras coisas, principalmente do projeto.

## Pré processadores e a estrutura

Grande parte dos projetos que mexi até hoje utilizavam pré-processadores de CSS. E pra ser sincero, acabo nem sempre utilizando todas as *features* que eles oferecem, mas em grande parte também pela possibilidade da modularização de arquivos. Esse é um outro assunto bem extenso e se você se interessa por ele, recomendo a talk [Arquitetura CSS](https://speakerdeck.com/rafaelrinaldi/arquitetura-css) do [Rafael Rinaldi](https://twitter.com/rafaelrinaldi).

### Módulos ou componentes?

Independente da técnica utilizada, acredito que a principal idéia da maioria delas seja semelhante (ou pelo menos só eu acredito isso): modularizar seu código para que ele fique escalável e fácil de fazer manutenção. Com isso, abrimos as portas para arquivos específicos para módulos (ou componentes, da maneira que você preferir). Beleza! Mas o que isso tem a ver com design responsivo, certo?

Recentemente tive que mexer em um projeto que possuía alguns *módulos/componentes bem definidos*, a maioria com um arquivo de estilo específico. O que já vi em alguns lugares é cada arquivo ter suas regras específicas de estilo e um arquivo específico fica responsável por fazer a *responsividade* da coisa. É o famoso arquivo *media-queries.extensaoquevocequiser*.

Algum tempo atrás, tive um relampejo sobre esse tema, e pensei que seria bacana que cada módulo fosse *responsivo e independente*. Ou seja, que esse módulo fosse se adaptasse independente da largura do grid e que todas suas regras de estilo e responsividade estivessem isoladas no seu arquivo específico.

Dessa maneira, se tivéssemos um arquivo `fabeni-component.preprocessadorquevocequiser`, poderíamos ter algo assim:

```css
.fabeni {
    /* estilos para resoluções até 600px */
}

/* Breakpoint */
@media (min-width: 600px) {

  .fabeni {
    /* estilos para resoluções maiores que 600px */
  }

}
```

No exemplo acima, usamos a idéia do *mobile first*, assim a classe tem um estilo inicial padrão e através das *media queries*, alteramos esse estilo para resoluções maiores que 600 pixels.

## Deixe seu módulo/componente o mais fluído possível

Se você gostou da idéia acima de módulos/componentes responsivos, e eu pudesse dar uma dica é que você os deixe o mais fluído possíveis. Assim, você passa o controle total de largura e altura para o grid. Uma dor de cabeça a menos para se preocupar, pois você sabe que independente da largura, o seu componente vai se adaptar corretamente.

Claro que nem tudo são flores e na prática e na correria do dia a dia as coisas podem não sair tão fáceis assim. Uma outra coisa a se levantar, é normal que em uma resolução ou outra, o conjunto de componentes em uma determinada tela possa demandar ainda um pente fino, principalmente em questões de alinhamento.

## É a bala de prata isso?

Claro que não, pois eu acho que isso não existe. O certo geralmente é aquilo que melhor se adequa a você ou ao seu time. Vale ressaltar aqui, que tudo que escrevi aqui foi de uma idéia que tive há algum tempo atrás e que com certeza, você possa já ter ouvido falar sobre algo semelhante por aí. Por fim, um último ponto é sobre a perfomance: será que em um projeto com muitos módulos, a presença das *media queries* dentro de vários arquivos não poderia aumentar o tamanho do arquivo? Talvez sim. Mas acredito que talvez alguma solução via *grunt* no processo de build, possa ajudar nisso (ou não).

__

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.

