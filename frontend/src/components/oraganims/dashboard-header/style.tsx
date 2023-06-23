'use client';
import styled from 'styled-components';

interface HeaderCoverUrl {
  header_cover_url: string | undefined;
  preveiw_header_cover: string | undefined;
}

export const DashboardHeaderContainer = styled.div`
  width: 100%;
  border-radius: 1em;
`;
export const DashboardHeaderCoverImageWrapper = styled.div<HeaderCoverUrl>`
  background: ${({ header_cover_url, preveiw_header_cover }) =>
    preveiw_header_cover
      ? `url(${preveiw_header_cover})`
      : header_cover_url
      ? `url(${header_cover_url})`
      : 'rgba(2, 4, 0, 0.2)'};
  background-size: cover;
  background-position: 50% 50%;
  height: 300px;
  display: flex;
  width: 100%;
  border-radius: 1em 1em 0px 0px;
  padding: 1em;
  position: relative;
`;

export const Form = styled.form`
  margin-left: auto;
  display: flex;
  gap: 0.5em;
  input {
    display: none;
  }
  label {
    align-self: flex-start;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.35s ease-in;
    &:hover {
      background-color: rgb(240, 238, 237);
      color: black;
      padding: 0.2em;
      border-radius: 0.5em;
    }
  }
  button {
    align-self: flex-start;
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.35s ease-in;
    &:hover {
      background-color: rgb(240, 238, 237);
      color: black;
      padding: 0.2em;
      border-radius: 0.5em;
    }
  }
`;

export const ProgressContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
