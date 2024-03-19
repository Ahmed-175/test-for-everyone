const Userofweb = require("../schema/NewUserschema");

const loginadmser = async (req, res) => {
  const { username, password } = req.body;
  const user = await Userofweb.findOne({ username: username });
  if (!user) {
    return res.status(401).json({ error: "اسم المستخدم غير صحيح" });
  } else {
    if (password === user.password) {
      const isUserAdmin = true;
      res.status(201).json(isUserAdmin);
    } else {
      return res.status(401).json({ error: "كلمة المرور غير صحيحة" });
    }
  }
};


module.exports = loginadmser;
