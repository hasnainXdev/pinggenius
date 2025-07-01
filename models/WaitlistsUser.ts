import mongoose from "mongoose"

const WaitlistsUser = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['user', 'admin'], default: 'user' },

}, { timestamps: true }
)

const WaitlistsUserModel = mongoose.models.WaitlistsUserModel || mongoose.model('WaitlistsUser', WaitlistsUser)