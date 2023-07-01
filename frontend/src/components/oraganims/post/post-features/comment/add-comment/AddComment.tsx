import { FC } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useAddCommentMutation } from '@/globalRedux/service/postApi';
import useForm from '@/hooks/useForm';
import { AddCommentForm, AddCommentTextArea, AddCommentButton } from './style';
import type { CommentForm } from '@/types/post';

type AddCommentProps = {
  post_id: number;
};

const AddComment: FC<AddCommentProps> = ({ post_id }) => {
  const [addComment, { isLoading }] = useAddCommentMutation();
  const { formState, handleChange, resetForm } = useForm<CommentForm>({
    initialState: {
      content: '',
    },
  });
  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addComment({ postID: post_id, body: formState });
    resetForm();
  };

  return (
    <AddCommentForm onSubmit={handleSumbit}>
      <AddCommentTextArea
        name="content"
        onChange={handleChange}
        value={formState.content}
        placeholder="Add comment"
      />
      <AddCommentButton type="submit" disabled={isLoading}>
        <SendIcon />
      </AddCommentButton>
    </AddCommentForm>
  );
};

export default AddComment;
