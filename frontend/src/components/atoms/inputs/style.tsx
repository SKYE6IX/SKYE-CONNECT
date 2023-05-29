'use client';
import styled from 'styled-components';
const InputField = styled.div`
  width: 300px;
  position: relative;
  input {
    background-color: #eee;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 100%;
    outline: none;
  }
  label {
    position: absolute;
    left: 1em;
    top: 0.8em;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: #eee;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: -0.5em;
    left: 0.8em;
    font-size: 0.8rem;
    border-radius: 0.2em;
    padding: 0.3em;
  }
`;

export default InputField;
