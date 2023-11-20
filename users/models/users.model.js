const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});
const userModel = mongoose.model('Users', userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};
exports.findById = (id) => {
    return User.findById(id).then((result)=>{
        result = result.toJSON();
        delete result._id;
        delete result._v;
        return result;
    });
};