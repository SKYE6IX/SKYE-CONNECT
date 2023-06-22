'use client';
import styled from 'styled-components';

interface Props {
  photos_length: number;
  current_index: number;
}

export const CaroselContainer = styled.div`
  position: relative;
  max-height: 750px;
  overflow: hidden;
`;

export const InnerContainer = styled.div<Props>`
  display: flex;
  width: ${({ photos_length }) => 600 * photos_length}px;
  transform: translateX(${({ current_index }) => -(current_index * 600)}px);
  transition: transform ease-out 0.3s;
`;

export const CaroselItem = styled.div`
  width: 600px;
  img {
    max-width: 100%;
    max-height: 100%;
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
  }
`;

export const CaroselLeftButtton = styled(SharedButtonStyles)`
  left: -15px;
`;
export const CaroselRightButtton = styled(SharedButtonStyles)`
  right: -15px;
`;
