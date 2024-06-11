import { Hello } from "./Hello";
import { Message } from "./Message";
/*import { Message } from "./Message";*/
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome age="16" name="Manuel"/>
    </div>
  );
}
