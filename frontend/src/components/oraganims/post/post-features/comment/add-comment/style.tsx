'use client';
import styled from 'styled-components';
export const AddCommentForm = styled.form`
  position: relative;
  width: 100%;
`;

export const AddCommentTextArea = styled.textarea`
  width: 100%;
  height: 45px;
  line-height: calc(45px / 2);
  resize: none;
  border-radius: 1.5rem;
  outline: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  padding: 0.5em 1em;
  font-weight: 400;
  background-color: #eee;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2);
`;

export const AddCommentButton = styled.button`
  border: none;
  position: absolute;
  top: 0.6em;
  right: 0.5em;
  cursor: pointer;
  outline: none;
`;
