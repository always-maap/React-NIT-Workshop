import { useState, useRef } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Header from "./components/Header";
import party from "party-js";

function App() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [headerValue, setHeaderValue] = useState("Avatar Generator");
  const ref = useRef(null);

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

  function startParty() {
    party.confetti(ref.current, {
      count: party.variation.range(20, 40),
      spread: party.variation.range(10, 20),
      size: party.variation.range(1, 3),
    });
    setHeaderValue(name);
  }

  return (
    <div className="wrapper">
      <Header value={headerValue} setValue={setHeaderValue} />
      <Button ref={ref} onClick={() => generateRandomUser()}>
        Generate User
      </Button>
      <UserCard isLoading={isLoading} name={name} avatar={avatar} />
      {avatar !== "" && (
        <Button
          onClick={startParty}
          style={{ background: "green", color: "white" }}
        >
          Select as Avatar
        </Button>
      )}
    </div>
  );
}

export default App;
