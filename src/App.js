import "./App.css";
import "./Button.css";
import Button from "./Button";

let sum = 0;

function App() {
  return (
    <div className="App">
      <div className="button">
        <Button
          label="0"
          onClick={() => {
            sum += 2;
            console.log(sum);
          }}
        />
      </div>
      <div className="button">
        <Button
          label="1"
          onClick={() => {
            sum += 2;
            console.log(sum);
          }}
        />
      </div>
      <div className="button">
        <Button
          label="2"
          onClick={() => {
            sum += 2;
            console.log(sum);
          }}
        />
      </div>
      <div className="button">
        <Button
          label="3"
          onClick={() => {
            sum += 2;
            console.log(sum);
          }}
        />
      </div>
    </div>
  );
}

export default App;
