import { Age } from "./Age";

export function Welcome({ name = "dear User", age }) {
  return (
    <div className="welcome">
      <p> 
        Welcome, <strong>{name}</strong>!
      </p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
      {/* {<Age age={age} />} */}
    </div>
  );
}
