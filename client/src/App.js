import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const login = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.name);
    } else {
      alert(data.message);
    }
  };

  if (user) {
    return (
      <div>
        <h2>Welcome {user}</h2>
        <ul>
          <li>Lead 1</li>
          <li>Task 1</li>
          <li>User 1</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
