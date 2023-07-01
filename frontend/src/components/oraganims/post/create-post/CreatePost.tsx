'use client';
import { FC, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useAddPostMutation } from '@/globalRedux/service/postApi';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {
  CreatePostContainer,
  TextArea,
  SubmitButton,
  CreatePostBottom,
  PhotosPreviewWrapper,
} from './style';
import useForm from '@/hooks/useForm';
import { previewPhotos } from './helper';
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
        <CreatePostBottom>
          <input
            ref={fileRef}
            type="file"
            name="images"
            id="images"
            onChange={handleFileChange}
            multiple
          />
          <label htmlFor="images">
            <CameraAltIcon style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
          </label>

          <PhotosPreviewWrapper>
            {previewPhotos(formState.images).map((img, i) => (
              <img src={img} key={i} />
            ))}
          </PhotosPreviewWrapper>

          <SubmitButton
            type="submit"
            disabled={isLoading}
            $isLoading={isLoading}
          >
            {isLoading ? (
              <CircularProgress
                disableShrink
                style={{
                  width: '16px',
                  height: '16px',
                  color: 'white',
                }}
              />
            ) : (
              'Post'
            )}
          </SubmitButton>
        </CreatePostBottom>
      </form>
    </CreatePostContainer>
  );
};
export default CreatePost;
