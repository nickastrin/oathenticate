import { authService } from "@/features/authentication/services/auth-service";
import { useState } from "react";

export function Login() {
  const { login } = authService();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <div className="background flex flex-col justify-center items-center gap-2">
      this is the login page
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>
        <input
          type={isPasswordHidden ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => setIsPasswordHidden(!isPasswordHidden)}>
          <span className="material-symbols-rounded">
            {isPasswordHidden ? "visibility" : "visibility_off"}
          </span>
        </button>
      </div>
      <button onClick={() => login(username, password)}>Log in</button>
    </div>
  );
}
