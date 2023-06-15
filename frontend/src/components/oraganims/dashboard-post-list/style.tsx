'use client';
import styled from 'styled-components';

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

export const Divider = styled.hr`
  border-top: 1px solid black;
  border-radius: inherit;
`;
