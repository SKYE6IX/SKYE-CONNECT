import { FC } from 'react';
import List from '@mui/material/List';
import {
  useRemoveChatHistoryMutation,
  useDeleteChatMutation,
} from '@/globalRedux/service/chatApi';
import {
  DeleteChatOptionHeader,
  CustomAvatar,
  CustomDialog,
  CustomDialogTitle,
  CustomListItem,
  CustomListItemText,
  CustomListItemButton,
} from './style';

type DeleteChatOptionsProps = {
  open: boolean;
  handleCloseDeleteOption: () => void;
  chat_id: string;
  correspond_user_id: number;
  avatar: string | undefined;
  first_name: string;
};

const DeleteChatOptions: FC<DeleteChatOptionsProps> = ({
  open,
  handleCloseDeleteOption,
  chat_id,
  correspond_user_id,
  avatar,
  first_name,
}) => {
  const [removeChat] = useRemoveChatHistoryMutation();
  const [deleteChat] = useDeleteChatMutation();

  const handleRemoveChatHistory = async () => {
    await removeChat({
      chat_id: chat_id,
      chat_with_id: correspond_user_id,
    })
      .unwrap()
      .then((res) => {
        if (res.status === true) {
          handleCloseDeleteOption();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteChat = async () => {
    await deleteChat({
      chat_id: chat_id,
      chat_with_id: correspond_user_id,
    })
      .unwrap()
      .then((res) => {
        if (res.status === true) {
          handleCloseDeleteOption();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CustomDialog open={open}>
      <DeleteChatOptionHeader>
        <CustomAvatar src={avatar} alt={first_name} />
        <CustomDialogTitle>Delete chat with {first_name}</CustomDialogTitle>
      </DeleteChatOptionHeader>
      <List>
        <CustomListItem disableGutters>
          <CustomListItemButton onClick={handleRemoveChatHistory}>
            <CustomListItemText>Delete for me</CustomListItemText>
          </CustomListItemButton>

          <CustomListItemButton onClick={handleDeleteChat}>
            <CustomListItemText>
              Delete for me and {first_name}
            </CustomListItemText>
          </CustomListItemButton>

          <CustomListItemButton onClick={handleCloseDeleteOption}>
            <CustomListItemText>Cancel</CustomListItemText>
          </CustomListItemButton>
        </CustomListItem>
      </List>
    </CustomDialog>
  );
};

export default DeleteChatOptions;
