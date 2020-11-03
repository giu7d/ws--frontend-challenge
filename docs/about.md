# Justificativas Técnicas

Justificativas para as tecnologias e técnicas utilizadas.

## Por que React?

React é um framework extensivamente testado, utilizado em diversas escalas. Minha experiencia também é um fator importante na escolha, já que utilizo o framework à mais de 2 anos, sendo minha escolha favorita quando procuro de um desenvolvimento rápido.

## SWR + Axios?

Axios é um excelente pacote para requisições HTTP que traz abstrações e novas funcionalidades para API fetch disponibilizada pelos navegadores. Já o SWR é um pacote que trás novas possibilidades na combinação de hooks com requisições HTTP. O SWR permite caching de dados de resposta; facilidade no tratamento de estados de erros e loading; abstração de fetch para hooks, entre outras funcionalidades.

## Por que utilizar o Styled Components e não um UI Kit pronto?

Gosto muito de CSS e acredito que criar componentes o mais nativo possível acrescenta muito em escalabilidade, identidade visual e experiencia do usuário quando comparados à UI Kits (que muitas vezes são feitos utilizados styled-components). Porem admito que para protótipos o ideal seria utilizar UI Kits, aumentando a velocidade do desenvolvimento.

## Container, fragments, layouts?

Containers são componentes que manipulam/interagem com estados externos como por exemplo APIs ou gerenciadores de estados.

Fragments são como _Views_, estas recebem props e renderizam a informação desejada. Dentro destes componentes busco evitar utilizar estados, exceto quando utilizados para propósitos de animação.

Layouts são componentes que provem uma interface para unir componentes de uma pagina.
