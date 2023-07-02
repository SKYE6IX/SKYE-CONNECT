'use client';
import styled from 'styled-components';

export const Container = styled.main`
  height: 93vh;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  grid-gap: 10px;
  background-color: #eaeaea;
  height: 93vh;
  padding: 10px 20px;
`;

export const Main = styled.div`
  padding: 20px 20px;
  background-color: white;
  border-radius: 10px;
  overflow-x: scroll;
`;
export const MainAsides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px 60px;
  background-color: white;
  border-radius: 10px;
`;
