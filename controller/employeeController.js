function EmployeeController() { }

EmployeeController.prototype.createEmployee = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email });
    if(user){
        return res.status(400).json({ message: 'User already exists' });
    }

    let newUserData = { firstName, lastName, email, password };
    const employee = await User.create(newUserData);
    res.status(201).json(employee);


}

EmployeeController.prototype.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findById(id);
    if(!user){
        return res.status(400).json({ message: 'User not found' });
    }

    let newUserData = { firstName, lastName, email, password };
    const employee = await User.findByIdAndUpdate(id, newUserData, { new: true });
    res.status(200).json(employee);
}

EmployeeController.prototype.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
}

EmployeeController.prototype.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await User.findById(id);
    res.status(200).json(employee);
}

module.exports = new EmployeeController();
