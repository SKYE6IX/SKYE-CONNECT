'use client';
import styled from 'styled-components';

interface ButtonProps {
  $isLoading: boolean;
}

export const CreatePostContainer = styled.div`
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1.3em;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding: 5px 10px;
  background-color: #eee;
`;

export const CreatePostBottom = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;
  height: 70px;
  input {
    display: none;
  }
`;

export const PhotosPreviewWrapper = styled.div`
  height: 60px;
  max-width: 70px;
  display: flex;
  gap: 0.2em;
  img {
    height: 100%;
    width: 100%;
    border-radius: 0.7em;
  }
`;

export const SubmitButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$isLoading ? ' #41644A' : '#263a29')};
  width: 80px;
  height: 30px;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
`;
