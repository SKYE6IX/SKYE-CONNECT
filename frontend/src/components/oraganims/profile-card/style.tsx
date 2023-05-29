'use client';
import styled from 'styled-components';
import { Avatar } from '@/components/atoms/MUIComponents/Components';
export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  height: 350px;
`;
export const ProfileCardAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
`;
export const ProfileCardName = styled.div`
  span {
    margin: 0 0.2rem;
  }
`;
export const ProfileCardAboutMe = styled.p`
  width: 200px;
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
`;
export const ProfileCardInfoContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
export const ProfileCardInfo = styled.div`
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
