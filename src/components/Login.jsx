import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessege, setErrorMessege] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    // validate the form data

    const msg = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    // console.log(msg);
    setErrorMessege(msg);

    if (msg) return;

    // SignIn / SignUp
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/88421401?s=40&v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              console.log(user);
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessege(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessege(errorCode + " - " + errorMessage);
        });
    } else {
      // SignIn Login
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessege(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-[400px] mt-24 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <p className="text-4xl p-1 mb-2 text-white font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full rounded-[5px] border border-gray-500 bg-black bg-opacity-20 text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-3 w-full rounded-[5px] border border-gray-500 bg-black bg-opacity-20 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full rounded-[5px] border border-gray-500 bg-black bg-opacity-20 text-white"
        />
        <p className="text-red-500 text-lg font-bold p-2">{errorMessege}</p>
        <button
          className="p-2 my-3 rounded-[5px] bg-red-700 w-full text-white hover:bg-red-600"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          <span className="text-white cursor-pointer hover:underline">
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
