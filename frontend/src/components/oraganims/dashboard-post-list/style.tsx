'use client';
import styled from 'styled-components';

interface ActivePostsOption {
  $isPostActive: boolean;
}

export const DashboardPostContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  min-height: 400px;
`;

export const DashboardPostHeader = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1em;
  }
`;

export const DashboardPostHeaderButton = styled.li<ActivePostsOption>`
  background-color: ${(props) => props.$isPostActive && ' #9a9483'};
  color: ${(props) => (props.$isPostActive ? 'white' : 'black')};
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5em;
  border-radius: 1em;
  cursor: pointer;
  transition: ease-in 0.5s;
  &:hover {
    background-color: #aaa492;
  }
`;

export const Divider = styled.hr`
  border-top: 1px solid black;
  border-radius: inherit;
`;

//backgroud-colors
//active: #9A9483
//hover: #AAA492
