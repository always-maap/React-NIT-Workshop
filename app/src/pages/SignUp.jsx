import { createAccount } from "../api/auth";

export default function SignUp() {
  function onSubmit(e) {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const email = formData.get("email");
    const password = formData.get("password");
    createAccount({ email, password });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">email</label>
        <input id="email" name="email" placeholder="email" required />
      </div>
      <div className="">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" placeholder="password" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
