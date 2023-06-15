'use client';
import { FC, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useUpdateUserMutation } from '@/globalRedux/service/userApi';
import useForm from '@/hooks/useForm';
import type { ProfileUpdateForm, User } from '@/types/user';
import {
  handleBlur,
  handleFocus,
  previewAvatar,
  createFormData,
} from './helper';
import { UpdateFeedback, UpdateProgress } from './UpdateFeedback';
import {
  CustomDialog,
  UpdateProfileAvatar,
  CustomAvatar,
  UpdateProfileForm,
  UpdateProfileFormNameInputs,
  NameInput,
  UpdateProfileOtherInput,
  UpdateProfileAboutme,
  UpdateProfileGenderFiledset,
  UpdateProfileBirthdayInputWrapper,
  BirthDayInput,
} from './style';

type UpdateProfileProps = {
  user: User | undefined;
  handleCloseUpdateProfile: () => void;
};

const UpdateProfile: FC<UpdateProfileProps> = ({
  user,
  handleCloseUpdateProfile,
}) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [openUpdateFeedback, setOpenUpdateFeedback] = useState<boolean>(false);
  const {
    formState,
    handleChange,
    handleFileChange,
    handleInputChange,
    setFormState,
  } = useForm<ProfileUpdateForm>({
    initialState: {
      email: user?.email || '',
      username: user?.username || '',
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      date_of_birth: user?.date_of_birth || null,
      gender: `${user?.gender || ''}`,
      country: `${user?.country || ''}`,
      city: `${user?.city || ''}`,
      professional: `${user?.professional || ''}`,
      about_me: `${user?.about_me || ''}`,
      password: '',
    },
  });

  // *** Set default birthday date
  const defaultDate = formState.date_of_birth?.toString().substring(0, 10);

  //**Convert form data into a FORMDATA type */
  const data = createFormData(formState);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser({ userID: user?._id, body: data })
      .unwrap()
      .then((res) => {
        if (res.status === 'success') {
          setOpenUpdateFeedback(true);
        }
      });
  };

  const handleCloseUpdateFeedback = () => {
    setOpenUpdateFeedback(false);
    handleCloseUpdateProfile();
  };

  return (
    <CustomDialog open={true} onClose={handleCloseUpdateProfile}>
      {isLoading && <UpdateProgress />}

      {openUpdateFeedback && (
        <UpdateFeedback handleClose={handleCloseUpdateFeedback} />
      )}

      <DialogTitle>Update your profile</DialogTitle>

      <UpdateProfileAvatar>
        <CustomAvatar
          src={previewAvatar(formState.avatar) || user?.avatar?.thumbnail}
          alt={formState.first_name}
        />
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={handleFileChange}
        />
        <label htmlFor="avatar">
          {<CameraAltIcon style={{ fontSize: '3rem' }} />}
        </label>
      </UpdateProfileAvatar>

      <DialogContent dividers>
        <UpdateProfileForm onSubmit={handleSubmit}>
          <UpdateProfileFormNameInputs>
            <NameInput
              type="text"
              name="first_name"
              id="first_name"
              label="Firstname"
              placeholder=" "
              value={formState.first_name}
              handleChange={handleChange}
            />
            <NameInput
              type="text"
              name="last_name"
              id="last_name"
              label="Lastname"
              placeholder=" "
              value={formState.last_name}
              handleChange={handleChange}
            />
          </UpdateProfileFormNameInputs>

          <UpdateProfileOtherInput
            type="text"
            name="username"
            id="update_username"
            label="Username"
            placeholder=" "
            value={formState.username}
            handleChange={handleChange}
          />
          <UpdateProfileOtherInput
            type="text"
            name="email"
            id="email"
            label="Email"
            placeholder=" "
            value={formState.email}
            handleChange={handleChange}
          />

          <UpdateProfileAboutme>
            <label htmlFor="about_me">About me</label>
            <textarea
              name="about_me"
              id="about_me"
              value={formState.about_me}
              onChange={handleChange}
            />
          </UpdateProfileAboutme>

          <UpdateProfileGenderFiledset>
            <legend>Gender</legend>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleInputChange}
              checked={formState.gender === 'male' && true}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleInputChange}
              checked={formState.gender === 'female' && true}
            />
          </UpdateProfileGenderFiledset>

          <UpdateProfileBirthdayInputWrapper>
            <BirthDayInput
              type="text"
              name="date_of_birth"
              id="date_of_birth"
              label="Birthday"
              placeholder=" "
              value={defaultDate}
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
            />
          </UpdateProfileBirthdayInputWrapper>

          <CountryDropdown
            value={formState.country || ''}
            onChange={(val) => {
              setFormState({ ...formState, country: val });
            }}
          />
          <RegionDropdown
            country={formState.country || ''}
            value={formState.city || ''}
            onChange={(val) => {
              setFormState({ ...formState, city: val });
            }}
          />

          <UpdateProfileOtherInput
            type="text"
            name="professional"
            id="professional"
            label="Professional"
            placeholder=" "
            value={formState.professional}
            handleChange={handleChange}
          />

          <DialogActions>
            <Button type="submit">SAVE CHANGES</Button>
          </DialogActions>
        </UpdateProfileForm>
      </DialogContent>
    </CustomDialog>
  );
};
export default UpdateProfile;
