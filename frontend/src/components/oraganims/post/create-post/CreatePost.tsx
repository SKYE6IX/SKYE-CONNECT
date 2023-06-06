'use client';
import { FC, useRef } from 'react';
import { useAddPostMutation } from '@/globalRedux/service/postApi';
import { PhotoCameraIcon } from '@/components/atoms/MUIComponents/Components';
import {
  CreatePostContainer,
  TextArea,
  MediaInput,
  SubmitButton,
} from './style';
import useForm from '@/hooks/useForm';
interface PostForm {
  content: string;
  images: any;
}
const CreatePost: FC = () => {
  const fileRef = useRef<any>(null);
  const { formState, handleChange, resetForm, handleFileChange } =
    useForm<PostForm>({
      initialState: {
        content: '',
        images: [],
      },
    });
  const [addPost, { isLoading }] = useAddPostMutation();

  //Contructor a FormData that will take the images
  const formData = new FormData();
  Array.from(formState.images).forEach((file: any) => {
    formData.append('images', file);
  });
  formData.append('content', formState.content);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPost(formData);
    fileRef.current.value = null;
    resetForm();
  };
  return (
    <CreatePostContainer>
      <form onSubmit={handleSubmit}>
        <TextArea
          name="content"
          placeholder=" What's on your mind?"
          onChange={handleChange}
          value={formState.content}
        />
        <MediaInput>
          <input
            ref={fileRef}
            type="file"
            name="images"
            id="images"
            onChange={handleFileChange}
            multiple
          />
          <label htmlFor="images">
            <PhotoCameraIcon
              style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            />
          </label>
          <SubmitButton type="submit" disabled={isLoading}>
            Post
          </SubmitButton>
        </MediaInput>
      </form>
    </CreatePostContainer>
  );
};

export default CreatePost;
