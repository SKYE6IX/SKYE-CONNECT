import { FC } from 'react';
import { SendIcon } from '@/components/atoms/MUIComponents/Components';
import { AddCommentForm, AddCommentTextArea, AddCommentButton } from './style';

const AddComment: FC = () => {
  return (
    <AddCommentForm>
      <AddCommentTextArea />
      <AddCommentButton type="submit">
        <SendIcon />
      </AddCommentButton>
    </AddCommentForm>
  );
};

export default AddComment;
