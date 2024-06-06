import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Andrea" age="34" />
    </div>
  );
}
/* 
export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name="Andrea" age="34" />
    </div>
  );
}

Renderizzerò 2 <h2> con un componente message, quindi 2 <p> all'interno, più un <p>
esterno ai componenti per un totale di:
2 <h2>
3 <p>
*/
