import SignUpForm from "./assets/components/SignUpForm";
import Authenticate from "./assets/components/Authenticate";
import { useState } from "react";
export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}