import {useState} from "react";
import './App.css';
import Title from "./title";

function App() {

  const [update, setUpdate] = useState("");
  return (
    <div className="App">
      <Title
        text={update}
      />
      <input type="text" value={update} onChange={(e) => {
        setUpdate(e.target.value);
      }}/>
    </div>
  );
}
                                                                                                                    
export default App;
