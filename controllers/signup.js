const User = require('../schema/users')

const signup = async (req, res) => {
  const { fristname , lastname , username , password  } = req.body;
  const usernor = await User.findOne({ username: username });
  if (usernor){
    return res.status(401).json({ error: "اسم المستخدم موجود سابقا"});
  }else{
    const newUser = new User({fristname , lastname , username , password});
    await newUser.save();
    res.status(201).send('تم حفظ البيانات بنجاح!');
  }
};

module.exports = signup;