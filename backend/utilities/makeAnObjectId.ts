import mongoose from "mongoose";

function makeAnObjectID(id?: number | string) {
    if (!id) {
        return new mongoose.Types.ObjectId()
    } else {
        return new mongoose.Types.ObjectId(id)
    }
}

export default makeAnObjectID