import React, { HTMLAttributes, FC } from 'react';
import InputField from './style';
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  value?: string | number;
  name: string;
  label: string;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => string;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type FormInputProps = InputProps;
const FormInput: FC<FormInputProps> = ({
  type,
  value,
  name,
  label,
  id,
  placeholder,
  className,
  handleBlur,
  handleFocus,
  handleChange,
}) => {
  return (
    <InputField className={className}>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </InputField>
  );
};
export default FormInput;
