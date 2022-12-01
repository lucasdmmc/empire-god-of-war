import { CardContainer, CardContent, HistoryContainer, InfoBeforeReadingTheHistory } from "./styles";

export function History() {
  return (
    <HistoryContainer id="history">
      <InfoBeforeReadingTheHistory>
        <h2>Entenda como tudo começou</h2>
        <span>Conheça toda a história de God of War, do ínicio até o Ragnarok.</span>
        <p>
        God of War é uma série de jogos eletrônicos de ação-aventura criada por David Jaffe da Santa Monica Studio, da Sony. Iniciada em 2005 no console PlayStation 2 (PS2), tornou-se carro-chefe para a marca PlayStation, consistindo em nove jogos em várias plataformas. Baseada em distintas mitologias, a história segue Kratos, um guerreiro espartano que foi levado a matar sua família por seu antigo mestre, o deus da guerra Ares. Isso desencadeia uma série de eventos que levam à guerras com os panteões mitológicos. A era da mitologia grega da série mostra Kratos seguindo um caminho de vingança devido às maquinações dos deuses do Olimpo, enquanto a era da mitologia nórdica, que apresenta seu filho Atreus como protagonista secundário, mostra um Kratos mais velho em um caminho de redenção, o que inadvertidamente coloca os dois em conflito com os deuses nórdicos e em busca do impedimento do Ragnarök.
        </p>
        <p>
        A Santa Monica desenvolveu todos os títulos principais, enquanto a Ready at Dawn e Javaground/Sony Online Entertainment-Los Angeles (SOE-LA) desenvolveram os três jogos paralelos. A Sony Interactive Entertainment (SIE) publicou todos os jogos, exceto o título de telefone celular, que foi publicado pela Sony Pictures Digital. Os primeiros sete jogos constituem a era grega da franquia...
        </p>
      </InfoBeforeReadingTheHistory>

        <CardContainer data-aos="fade-up">
          <CardContent>
            <h3>Sinopse</h3>
            <p>
              Nesse conteúdo, você irá entender de forma geral, sobre quando os jogos foram criados e entender de forma cronológica toda a história de Kratos.
              <br/>
              <br/>
              Todas as informações do site foram tiradas de fontes confiaveis, então, podem ler com tranquilidade para poder megulhar nessa aventura que Kratos nos permitiu ter em todos esses anos de God of War.

              <br/>
              <br/>
              A continuação do conteúdo ao lado está na página principal da história. Clique no botão a baixo e se divirta nessa aventura!
            </p>

            <button>
              Tudo começou aqui...
            </button>
          </CardContent>
        </CardContainer>
    </HistoryContainer>
  )
}