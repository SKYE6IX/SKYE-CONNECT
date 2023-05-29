import mongoose from "mongoose";
function makeAnObjectID(id) {
    if (!id) {
        return new mongoose.Types.ObjectId();
    }
    else {
        return new mongoose.Types.ObjectId(id);
    }
}
export default makeAnObjectID;
