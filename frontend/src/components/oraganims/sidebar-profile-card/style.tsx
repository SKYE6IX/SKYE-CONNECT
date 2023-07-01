'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const SidebarProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  height: 350px;
`;
export const SidebarProfileCardAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
`;
export const SidebarProfileCardName = styled.div`
  span {
    margin: 0 0.2rem;
  }
`;
export const SidebarProfileCardAboutMe = styled.p`
  width: 200px;
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
`;
export const SidebarProfileCardInfoContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
export const SidebarProfileCardInfo = styled.div`
  text-align: center;
  h5 {
    font-weight: 400;
    margin: 0.5rem 0 0.5rem 0;
  }
  span {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
