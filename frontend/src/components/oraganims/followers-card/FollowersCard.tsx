import { FC } from 'react';
import {
  FollowersCardContainer,
  Followers,
  CustomAvatar,
  FollowersCardTextContents,
} from './style';

const FollowersCard: FC = () => {
  return (
    <FollowersCardContainer>
      <h4>Followers</h4>
      <Followers>
        <CustomAvatar />
        <FollowersCardTextContents>
          <span>Azeez</span>
          <span>Abiola</span>
          <p>Web Developer from Moscow</p>
        </FollowersCardTextContents>
      </Followers>
    </FollowersCardContainer>
  );
};

export default FollowersCard;
