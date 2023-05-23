import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, userName);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("wrong Information");
      setLoading(false);
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        required
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}></TextInput>
      <TextInput
        type="text"
        placeholder="Enter email"
        required
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></TextInput>
      <TextInput
        type="password"
        placeholder="Enter password"
        required
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></TextInput>
      <TextInput
        type="password"
        placeholder="Confirm password"
        required
        icon="lock_clock"
        value={ConfirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}></TextInput>
      <CheckBox
        text="I agree to the Terms &amp; Conditions"
        required
        value={agree}
        onChange={(e) => setAgree(e.target.checked)}></CheckBox>
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
