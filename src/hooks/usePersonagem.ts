import { useState } from 'react';
import { LadosPersonagem } from '../types/LadosPersonagem';
import { pontosNoMapa } from '../data/pontos-no-mapa';

export function usePersonagem(nomeProp: string) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nome, setNome] = useState(nomeProp);
  const [posicao, setPosicao] = useState({ posX: 3, posY: 5 });
  const [lado, setLado] = useState<LadosPersonagem>('frente');

  function moverParaEsquerda() {
    setPosicao(posicao => ({
      posX: posicoesDisponiveis(posicao.posX - 1, posicao.posY)
        ? posicao.posX - 1
        : posicao.posX,
      posY: posicao.posY
    }));

    setLado('esquerdo');
  }

  function moverParaDireita() {
    setPosicao(posicao => ({
      posX: posicoesDisponiveis(posicao.posX + 1, posicao.posY)
        ? posicao.posX + 1
        : posicao.posX,
      posY: posicao.posY
    }));

    setLado('direito');
  }

  function moverParaCima() {
    setPosicao(posicao => ({
      posX: posicao.posX,
      posY: posicoesDisponiveis(posicao.posX, posicao.posY - 1)
        ? posicao.posY - 1
        : posicao.posY
    }));

    setLado('costas');
  }

  function moverParaBaixo() {
    setPosicao(posicao => ({
      posX: posicao.posX,
      posY: posicoesDisponiveis(posicao.posX, posicao.posY + 1)
        ? posicao.posY + 1
        : posicao.posY
    }));

    setLado('frente');
  }

  function posicoesDisponiveis(posX: number, posY: number) {
    if(pontosNoMapa[posY] && pontosNoMapa[posY][posX]) {
      return (pontosNoMapa[posY][posX] === 1);
    }
    return false;
  }

  return {
    nome,
    posicaoCoordX: posicao.posX,
    posicaoCoordY: posicao.posY,
    lado,
    moverParaCima,
    moverParaDireita,
    moverParaBaixo,
    moverParaEsquerda
  };
}