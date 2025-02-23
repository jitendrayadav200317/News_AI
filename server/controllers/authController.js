import User from "../model/User.js";
export const login = () => {};

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
  const newUser = await User.create({name,password,email})

  res.status(201).json({
    data : newUser,
    massage : "Succesfully register"
  })
};