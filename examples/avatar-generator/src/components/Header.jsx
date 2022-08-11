import { useState } from "react";
import Button from "./Button";

export default function Header(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div>
      {isEditMode ? (
        <>
          <input
            style={{ height: 70, fontSize: 28, marginRight: 5 }}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
          />
          <Button onClick={() => setIsEditMode(false)}>✔️</Button>
        </>
      ) : (
        <h1 onClick={() => setIsEditMode(true)} align="center">
          {props.value}
        </h1>
      )}
    </div>
  );
}
