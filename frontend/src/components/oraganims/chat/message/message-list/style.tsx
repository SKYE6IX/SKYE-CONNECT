'use client';
import styled from 'styled-components';

const SharedStyles = styled.div`
  display: flex;
`;
export const MessageRowLeft = styled(SharedStyles)``;

export const MessageRowBlue = styled(SharedStyles)`
  flex-direction: column;
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #a8ddfd;
  width: 60%;
  text-align: left;
  border: 1px solid #97c6e3;
  font: 400 0.9rem 'Roboto', sans-serif;
  border-radius: 10px;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid #a8ddfd;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    left: -15px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid #97c6e3;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    left: -17px;
  }
  span {
    align-self: flex-end;
    font-weight: 300;
    font-size: 0.6rem;
  }
`;

export const MessageRowRight = styled(SharedStyles)`
  justify-content: flex-end;
`;
export const MessageRowOrange = styled(SharedStyles)`
  flex-direction: column;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f8e896;
  width: 60%;
  text-align: left;
  font: 400 0.9rem 'Roboto', sans-serif;
  border: 1px solid #dfd087;
  border-radius: 10px;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid #f8e896;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    right: -15px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid #dfd087;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    right: -17px;
  }
`;

export const MessageText = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

export const MessageBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.3em;
  div {
    display: flex;
    align-items: center;
    gap: 0.2em;
    span,
    svg {
      font-weight: 300;
      font-size: 0.7rem;
    }
  }
`;
