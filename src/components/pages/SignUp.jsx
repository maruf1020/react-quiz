import classes from "../../styles/signUp.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <Form className={classes.SignUp}>
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"></TextInput>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"></TextInput>
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"></TextInput>
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"></TextInput>
          <CheckBox text="I agree to the Terms &amp; Conditions"></CheckBox>
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
