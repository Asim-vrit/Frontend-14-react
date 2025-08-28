import { useRef, useState } from "react";

function Product() {
  const passwordRef = useRef();
  const usernameRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  function handleMessages(type, message) {
    if (type === "success") {
      setError("");
      setSuccessMessage(message);
    } else {
      setError(message);
      setSuccessMessage("");
    }
  }
  async function loginapi(data) {
    try {
      setLoading(true);
      const raw = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "Application/JSON" },
      });
      if (!raw.ok) {
        throw new Error("Something went wrong");
      }
      setLoading(false);
      handleMessages("success", "logged in successfully");
    } catch (error) {
      setLoading(false);
      handleMessages("error", error.message);
      console.log(error.message);
    }
  }
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
    loginapi({ email: username, password: password });
  }
  return (
    <div>
      <button
        onClick={() => {
          passwordRef.current.value = "asim password";
          //   setUsername("asim");
        }}
      >
        Edit Asim
      </button>
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

export default Product;
