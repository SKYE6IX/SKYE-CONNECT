import { FC } from 'react';
import { GroupCardContainer } from './styles';

const GroupCard: FC = () => {
  return (
    <GroupCardContainer>
      <h4>Group</h4>
      <ul>
        <li>#MovieGoer</li>
        <li>#HikingTeam</li>
        <li>#Web Dev</li>
        <li>#PartyGroup</li>
        <li>#MeetUp</li>
      </ul>
    </GroupCardContainer>
  );
};

export default GroupCard;
