var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/users";
function checkChatHistory(first_user_id, second_user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User.findById(first_user_id)
            .then(user => {
            return user === null || user === void 0 ? void 0 : user.chatLists.some((chatList) => {
                return String(chatList.chat_with) === second_user_id;
            });
        }).then(result => {
            return result;
        })
            .catch(err => {
            console.log(err);
        });
    });
}
export default checkChatHistory;
