import User from "../models/users";

async function checkChatHistory(first_user_id: string, second_user_id: string) {
    return await User.findById(first_user_id)
        .then(user => {
            return user?.chatLists.some((chatList) => {
                return String(chatList.chat_with) === second_user_id
            })
        }).then(result => {
            return result
        })
        .catch(err => {
            console.log(err)
        })
}

export default checkChatHistory