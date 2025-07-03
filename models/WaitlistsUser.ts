import mongoose from "mongoose"

const WaitlistsUser = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    clerkId: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ['user', 'admin'], default: 'user' },
    isWaitlisted: { type: Boolean, required: true, default: false },

}, { timestamps: true }
)

const WaitlistsUserModel = mongoose.models.WaitlistsUserModel || mongoose.model('WaitlistsUser', WaitlistsUser)

export default WaitlistsUserModel