function UserController() { }

UserController.prototype.createUser = async (req, res) => {
    var { firstName, lastName, email, password, role } = req.body;

    let role = await Role.findById(role);
    if(!role){
        return res.status(400).json({ message: 'Role not found' });
    }

    let permissions = role.permissions;
    let newUserData = { firstName, lastName, email, password, role, permissions };
    const user = await User.create(newUserData);
    res.status(201).json(user);
}

UserController.prototype.updateUser = async (req, res) => {
    const { id } = req.params;
    var { firstName, lastName, email, password, role } = req.body;

    let role = await Role.findById(role);
    if(!role){
        return res.status(400).json({ message: 'Role not found' });
    }

    let permissions = role.permissions;
    let newUserData = { firstName, lastName, email, password, role, permissions };
    const user = await User.findByIdAndUpdate(id, newUserData, { new: true });
    res.status(200).json(user);
}

UserController.prototype.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
}

UserController.prototype.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
}
module.exports = new UserController();
