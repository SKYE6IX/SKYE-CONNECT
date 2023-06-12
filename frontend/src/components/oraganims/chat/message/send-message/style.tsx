'use client';
import styled from 'styled-components';

export const SendMessageWrapper = styled.div`
  width: 100%;
`;

export const SendMessageForm = styled.form`
  display: flex;
  gap: 0.8em;
`;

export const SendMessageFormTextArea = styled.textarea`
  resize: none;
  border: none;
  width: 100%;
  outline: none;
  border: none;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1em;
  padding: 1em;
  line-height: 1em;
  max-height: 300px;
`;

export const SendMessageButton = styled.button`
  background: #f8e896;
  border: none;
  border-radius: 50%;
  max-height: 35px;
  align-self: flex-end;
  padding: 0.4em;
`;
