import Illustration from "../Illustration";
import LogInForm from "../LogInForm";

export default function Login() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <LogInForm></LogInForm>
      </div>
    </>
  );
}
