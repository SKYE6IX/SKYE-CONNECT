import { FC } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {
  CustomDialog,
  CustomDialogTitle,
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

const UpdateProfile: FC = () => {
  return (
    <CustomDialog open={false}>
      <CustomDialogTitle>Profile</CustomDialogTitle>
      <UpdateProfileAvatar>
        <CustomAvatar />
        <input type="file" name="avatar" id="avatar" />
        <label htmlFor="avatar">
          {<CameraAltIcon style={{ fontSize: '3rem' }} />}
        </label>
      </UpdateProfileAvatar>
      <DialogContent dividers>
        <UpdateProfileForm>
          <UpdateProfileFormNameInputs>
            <NameInput
              type="text"
              name="first_name"
              id="first_name"
              label="Firstname"
              placeholder=" "
            />
            <NameInput
              type="text"
              name="last_name"
              id="last_name"
              label="Lastname"
              placeholder=" "
            />
          </UpdateProfileFormNameInputs>

          <UpdateProfileOtherInput
            type="text"
            name="username"
            id="update_username"
            label="Username"
            placeholder=" "
          />
          <UpdateProfileOtherInput
            type="text"
            name="email"
            id="email"
            label="Email"
            placeholder=" "
          />

          <UpdateProfileAboutme>
            <label htmlFor="">About me</label>
            <textarea name="" id=""></textarea>
          </UpdateProfileAboutme>

          <UpdateProfileGenderFiledset>
            <legend>Gender</legend>
            <label>Male</label>
            <input type="radio" name="gender" value="male" />
            <label>Female</label>
            <input type="radio" name="gender" value="female" />
          </UpdateProfileGenderFiledset>

          <UpdateProfileBirthdayInputWrapper>
            <BirthDayInput
              type="text"
              name="date_of_birth"
              id="date_of_birth"
              label="Birthday"
              placeholder=" "
            />
          </UpdateProfileBirthdayInputWrapper>

          {/* <CountryDropdown /> */}
          {/* <RegionDropdown /> */}

          <UpdateProfileOtherInput
            type="text"
            name="professional"
            id="professional"
            label="Professional"
            placeholder=" "
          />

          <DialogActions>
            <Button>SAVE CHANGES</Button>
          </DialogActions>
        </UpdateProfileForm>
      </DialogContent>
    </CustomDialog>
  );
};

export default UpdateProfile;
