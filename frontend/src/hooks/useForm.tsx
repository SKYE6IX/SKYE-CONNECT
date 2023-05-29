'use client';
import { useState, useEffect, ChangeEvent } from 'react';
interface UseForm<T> {
  initialState: T;
}
function useForm<T extends object>({ initialState }: UseForm<T>) {
  const [formState, setFormState] = useState<T>(initialState);
  //convert the whole object to strings and use to watch how the initial state change
  //when we run the code on useEffect to populate our update form
  const initialValue = Object.values(initialState).join('');
  useEffect(() => {
    setFormState(initialState);
  }, [initialValue]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, files } = e.target;
    if (!e.target.files?.length) {
      return;
    }
    setFormState({ ...formState, [name]: files });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.currentTarget;
    setFormState({ ...formState, [name]: value });
  };
  const resetForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(formState).map(([key, value]: any) => [key, ''])
    );
    setFormState(blankState);
  };
  return {
    formState,
    handleChange,
    handleFileChange,
    resetForm,
    handleInputChange,
    setFormState,
  };
}
export default useForm;
