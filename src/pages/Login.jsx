import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useUserContext } from "../providers/useUserContext";

function Login() {
  const userContext = useUserContext();

  const passwordRef = useRef();
  const usernameRef = useRef();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  function handleMessages(type, message) {
    if (type === "success") {
      setError("");
      setSuccessMessage(message);
    } else {
      setError(message);
      setSuccessMessage("");
    }
  }

  const { customFetch: loginapi, loading } = useFetch({
    url: "/auth/login",
    fetchOptions: { method: "POST" },
    onSuccess: (res) => {
      console.log(res);
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem(
          "user",
          JSON.stringify({ name: "test name", id: 12 })
        );

        userContext.setUser({
          isLogin: true,
          userDetails: { name: "test name", id: 12 },
          token: res.token,
        });
        navigate("/");
      }
      handleMessages("success", "logged in successfully");
    },
    onError: (error) => {
      handleMessages("error", error.message);
    },
  });

  function onSubmit() {
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    if (!username) {
      handleMessages("error", "please enter a username");
      return;
    }
    if (!password) {
      handleMessages("error", "please enter a password");
      return;
    }
    if (password.length < 4) {
      handleMessages("error", "password must be greater than 4");
      return;
    }
    loginapi({ body: { username: username, password: password } });
  }
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input ref={usernameRef} name="username" className="border" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password</label>
          <input ref={passwordRef} name="password" className="border" />
        </div>
        <button
          onClick={onSubmit}
          disabled={loading}
          type="submit"
          className="border w-max px-2 rounded-3xl"
        >
          {loading ? "Submitting....." : "Submit"}
        </button>
        {error && <label className="text-red-600">{error}</label>}
        {successMessage && (
          <label className="text-green-600">{successMessage}</label>
        )}
      </div>
    </div>
  );
}

export default Login;
