import { FC } from 'react';
import { DeleteIcon } from '@/components/atoms/MUIComponents/Components';
import { DeleteCommentButton } from './style';

const DeleteComment: FC = () => {
  return (
    <DeleteCommentButton>
      <DeleteIcon style={{ fontSize: '0.9rem' }} />
    </DeleteCommentButton>
  );
};

export default DeleteComment;
