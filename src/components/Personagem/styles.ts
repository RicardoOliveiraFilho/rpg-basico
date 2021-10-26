import styled from 'styled-components';

type ContainerProps = {
  tamanho: number;
  deslocHorizontal: number;
  deslocVertical: number;
  posicaoLado: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.tamanho}px;
  height: ${props => props.tamanho}px;
  position: absolute;
  left: ${props => props.deslocHorizontal}px;
  top: ${props => props.deslocVertical}px;
  background-image: url('/assets/personagem.png');
  background-position: 0px ${props => props.posicaoLado}px;
`;

export const BalaoNome = styled.div`
    background-color: #000;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 10px;
    text-align: center;
    margin-top: -20px;
    margin-left: -6px;
`;