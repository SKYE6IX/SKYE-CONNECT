//**HELPER FUNCTIONS */
export const previewAvatar = (avatar: any) => {
  let avatarUpload;
  if (avatar) {
    const imgUrl = URL.createObjectURL(avatar[0]);
    avatarUpload = imgUrl;
  }
  return avatarUpload;
};

export const createFormData = (data: any) => {
  const formData = new FormData();
  if (data.avatar) {
    Array.from(data.avatar).forEach((file: any) => {
      formData.append('avatar', file);
    });
  }
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};

export const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  return (e.target.type = 'text');
};

export const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  return (e.target.type = 'date');
};
