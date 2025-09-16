import { useForm } from "react-hook-form";

function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function submitForm(e) {
    console.log("form is submitted", e);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-2 items-center my-20"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="">Name:</label>
          <input
            {...register("username", {
              required: { value: true, message: "This field is required" },
            })}
            className="border py-1 px-3 rounded-2xl flex-1"
            type="text"
          />
          <div className="text-red-500">{errors?.username?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Password:</label>
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
              maxLength: {
                value: 25,
                message: "Max length of password is 25 characters",
              },
              minLength: {
                value: 8,
                message: "Minimum of 8 characters is required",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message:
                  "Password must have atleast one special characcter and one number",
              },
            })}
            className="border flex-1 py-1 px-3 rounded-2xl"
            type="text"
          />
          <div className="text-red-500">{errors?.password?.message}</div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Confirm password:</label>
          <input
            {...register("confirm", {
              required: { value: true, message: "This field is required" },
              maxLength: {
                value: 25,
                message: "Max length of password is 25 characters",
              },
              minLength: {
                value: 8,
                message: "Minimum of 8 characters is required",
              },
            })}
            className="border py-1 px-3 rounded-2xl"
            type="text"
          />
          <div className="text-red-500">{errors?.confirm?.message}</div>
        </div>
        <button className="border rounded-2xl p-2">Submit</button>
      </form>
    </div>
  );
}

export default HookForm;
