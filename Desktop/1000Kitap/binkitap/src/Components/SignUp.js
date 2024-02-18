import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../api";
import { createUserFailure, createUserRequest, createUserSuccess} from "../action/userAction";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // useDispatch hook'unu kullanarak action dispatch etmek için bir dispatch fonksiyonu alıyoruz

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    // Sign-up işlemi başladığında createUserRequest action'ını dispatch ediyoruz
    dispatch(createUserRequest());

    try {
      // API'yi kullanarak yeni kullanıcı oluşturma isteğini gerçekleştiriyoruz
      const newUser = await createUser({ email, username, password });
      // createUserSuccess action'ını dispatch ederek başarılı bir şekilde yeni kullanıcı oluşturulduğunu belirtiyoruz
      dispatch(createUserSuccess(newUser));
      // Başarılı bir şekilde kayıt olduğunda kullanıcıya bir mesaj gösterebiliriz veya başka bir işlem yapabiliriz
      console.log("Successfully signed up:", newUser);
    } catch (error) {
      // createUserFailure action'ını dispatch ederek kullanıcı oluşturma sırasında bir hata oluştuğunu belirtiyoruz
      dispatch(createUserFailure(error.message));
      // Hata durumunda kullanıcıya bir hata mesajı gösterebiliriz veya başka bir işlem yapabiliriz
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
