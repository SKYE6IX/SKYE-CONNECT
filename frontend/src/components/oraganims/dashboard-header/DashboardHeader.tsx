import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useUploadHeaderCoverMutation } from '@/globalRedux/service/userApi';
import {
  DashboardHeaderContainer,
  DashboardHeaderCoverImageWrapper,
  Form,
  ProgressContainer,
} from './style';
import ProfileCard from '@/components/molecules/profile/profile-card/ProfileCard';
import type { User } from '@/types/user';
import useForm from '@/hooks/useForm';

type DashboardHeaderProps = {
  user: User | undefined;
  handleRefetchUser: () => void;
};

const previewHeaderCover = (header_cover: any) => {
  let headerCover;
  if (header_cover[0]) {
    const imgUrl = URL.createObjectURL(header_cover[0]);
    headerCover = imgUrl;
  }
  return headerCover;
};

const DashboardHeader: FC<DashboardHeaderProps> = ({
  user,
  handleRefetchUser,
}) => {
  const [uploadHeaderCover, { isLoading }] = useUploadHeaderCoverMutation();
  const { formState, handleFileChange, resetForm } = useForm({
    initialState: {
      header_cover: [],
    },
  });
  const formData = new FormData();
  formData.append('header_cover', formState.header_cover[0]);
  const submitHeaderCover = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      user_id: user?._id,
      data: formData,
    };
    await uploadHeaderCover(data)
      .unwrap()
      .then((res) => {
        if (res.status === true) {
          resetForm();
          handleRefetchUser();
        }
      });
  };
  const url = previewHeaderCover(formState.header_cover);
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderCoverImageWrapper
        header_cover_url={user?.header_cover.url}
        preveiw_header_cover={url}
      >
        {isLoading && (
          <ProgressContainer>
            <CircularProgress style={{ height: 70, width: 70 }} />
          </ProgressContainer>
        )}
        <Form onSubmit={submitHeaderCover}>
          <label htmlFor="header_cover">Change Cover</label>
          <input
            type="file"
            id="header_cover"
            name="header_cover"
            onChange={handleFileChange}
          />
          {formState.header_cover[0] && (
            <button type="submit">Set Cover</button>
          )}
        </Form>
      </DashboardHeaderCoverImageWrapper>
      <ProfileCard user={user} handleRefetchUser={handleRefetchUser} />
    </DashboardHeaderContainer>
  );
};
export default DashboardHeader;
