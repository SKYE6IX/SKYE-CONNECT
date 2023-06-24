'use client';
import styled from 'styled-components';

interface Props {
  $is_fixed: boolean;
}

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
  width: 100%;
`;

export const DashboardTemplateMain = styled(SharedStyles)`
  gap: 1em;
`;

export const DashboardTemplateAside = styled(SharedStyles)`
  position: relative;
`;

export const AsideContentWrapper = styled(SharedStyles)<Props>`
  gap: 1em;
  position: ${({ $is_fixed }) => ($is_fixed ? 'sticky' : '')};
  top: ${({ $is_fixed }) => ($is_fixed ? '0px' : '')};
`;
