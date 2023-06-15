'use client';
import styled from 'styled-components';

const SharedStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardTemplateContainer = styled(SharedStyles)`
  align-items: center;
  padding: 1rem 0;
`;

export const InnerWrapper = styled(SharedStyles)`
  gap: 2rem;
  width: 1200px;
`;

export const DashboardTemplateBodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 35%;
  gap: 1rem;
`;

export const DashboardTemplateMain = styled(SharedStyles)`
  gap: 1em;
`;

export const DashboardTemplateAside = styled(SharedStyles)`
  gap: 1em;
`;
