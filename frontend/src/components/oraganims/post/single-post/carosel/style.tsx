'use client';
import styled from 'styled-components';

interface Props {
  photos_length: number;
  current_index: number;
}

export const CaroselContainer = styled.div<{ photos_lenght: number }>`
  width: 560px;
  height: 450px;
  padding: 0.5em;
  position: relative;
  div {
    height: 100%;
    width: ${({ photos_lenght }) => photos_lenght === 1 && '100%'};
    overflow: clip;
  }
`;

export const InnerContainer = styled.div<Props>`
  display: flex;
  height: 100%;
  width: ${({ photos_length }) => 550 * photos_length}px;
  transform: translateX(${({ current_index }) => -(current_index * 550)}px);
  transition: transform ease-out 0.3s;
`;

export const CaroselItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const SharedButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  background: none;
  height: 70px;
  width: 70px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border: none;
  z-index: 10;
  cursor: pointer;
  svg {
    height: 100%;
    width: 100px;
    margin: 0px;
    color: rgb(178, 178, 178);
  }
`;

export const CaroselLeftButtton = styled(SharedButtonStyles)`
  left: -15px;
`;
export const CaroselRightButtton = styled(SharedButtonStyles)`
  right: -15px;
`;
