import { FC } from 'react';
import { PhotoCameraIcon } from '@/components/atoms/MUIComponents/Components';
import {
  CreatePostContainer,
  TextArea,
  MediaInput,
  SubmitButton,
} from './style';

interface PostForm {
  content: string;
  images: any;
}
const CreatePost: FC = () => {
  return (
    <CreatePostContainer>
      <form action="">
        <TextArea />
        <MediaInput>
          <input type="file" />
          <label htmlFor="">
            <PhotoCameraIcon
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            />
          </label>
          <SubmitButton type="submit">Post</SubmitButton>
        </MediaInput>
      </form>
    </CreatePostContainer>
  );
};

export default CreatePost;
