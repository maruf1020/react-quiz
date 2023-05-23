import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <SignUpForm></SignUpForm>
      </div>
    </>
  );
}
