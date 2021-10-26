import { LadosPersonagem } from '../../types/LadosPersonagem';
import * as Style from './styles';

type PersonagemProps = {
  nome: string;
  coordX: number;
  coordY: number;
  ladoPersonagem: LadosPersonagem;
}

export function Personagem({ nome, coordX, coordY, ladoPersonagem }: PersonagemProps) {
  const tamanho = 30;
  const lados = {
    frente: 0,
    esquerdo: -30,
    direito: -60,
    costas: -90
  };

  return (
    <Style.Container
      tamanho={tamanho}
      deslocHorizontal={coordX * tamanho}
      deslocVertical={coordY * tamanho}
      posicaoLado={lados[ladoPersonagem] ?? 0}
    >
      <Style.BalaoNome>{nome}</Style.BalaoNome>
    </Style.Container>
  );
}