import { FC } from 'react';
import PostCard from '../post/post-card/PostCard';
import { DashboardPostContainer, DashboardPostHeader, Divider } from './style';

const DashboardPostList: FC = () => {
  return (
    <DashboardPostContainer>
      <DashboardPostHeader>
        <ul>
          <li>My posts</li>
          <li>Liked posts</li>
        </ul>
      </DashboardPostHeader>
      <Divider />
    </DashboardPostContainer>
  );
};

export default DashboardPostList;
