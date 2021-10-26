import { useEffect } from 'react';
import * as Style from './App.styles';
import { usePersonagem } from './hooks/usePersonagem';
import { Personagem } from './components/Personagem';

export default function App() {
  const personagem = usePersonagem('Michelle');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyA':
      case 'ArrowLeft':
        personagem.moverParaEsquerda();
        break;
    
      case 'KeyW':
      case 'ArrowUp':
        personagem.moverParaCima();
        break;

      case 'KeyD':
      case 'ArrowRight':
        personagem.moverParaDireita();
        break;
      
      case 'KeyS':
      case 'ArrowDown':
        personagem.moverParaBaixo();
        break;
    }
  }

  return (
    <Style.Container>
      <Style.AreaMapa>
        <Personagem
          nome={personagem.nome}
          coordX={personagem.posicaoCoordX}
          coordY={personagem.posicaoCoordY}
          ladoPersonagem={personagem.lado}
        />
      </Style.AreaMapa>
    </Style.Container>
  );
}