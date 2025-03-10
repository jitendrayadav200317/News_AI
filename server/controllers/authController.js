import User from "../model/User.js";

// ------------login-------------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User is not registered , Please register and try again",
      });
    }
    //check if password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Password do not match",
      });
    }

    // last token generation
    const token = jwt.sign(
      { id: user._id, name: user.name },
      "hello_this_string",
      { expiresIn: "1d" }
    );
    console.log(user);

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      preferences: user.preferences,
      message: "login successfull",
    });
  } catch (error) {}
};

// ---------------register-----------------
export const register = async (req, res) => {
  const { name, password, email } = req.body;

  // check if user is alardy register
  const user = await User.findOne({ email });

  console.log(user);
  if (user) {
    return res.status(404).json({
      massage: "User is alredy register , plase Login",
    });
  }

  // user new register
  const newUser = await User.create({ name, password, email });

  res.status(201).json({
    data: newUser,
    massage: "Succesfully register",
  });
};
