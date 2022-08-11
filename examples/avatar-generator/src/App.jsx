import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getAvatar(name, gender) {
    const url = `https://avatars.dicebear.com/api/${gender}/${name}.svg`;
    setAvatar(url);
  }

  async function generateRandomUser() {
    setIsLoading(true);
    const userRes = await fetch(
      "https://randomuser.me/api/?inc=gender,name&results=1"
    );
    const userData = await userRes.json();
    const fullName = `${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last}`;
    const gender = userData.results[0].gender;
    setIsLoading(false);
    setName(fullName);
    getAvatar(fullName, gender);
  }

  return (
    <div className="wrapper">
      <h1 align="center">Avatar Generator</h1>
      <Button onClick={() => generateRandomUser()}>Generate User</Button>
      <UserCard isLoading={isLoading} name={name} avatar={avatar} />
    </div>
  );
}

export default App;
