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
export const MediaInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem;
  input {
    display: none;
  }
`;

export const SubmitButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$isLoading ? ' #41644A' : '#263a29')};
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

// isLoading color:
