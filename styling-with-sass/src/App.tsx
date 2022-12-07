import React, { useState } from "react";
import "./App.scss";
import Button from "./Components/Button";
import CheckBox from "./Components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e: any) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="App">
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? "true" : "false"}
      </p>
      <div className="buttons">
        {/* <Button size="large" onClick={() => console.log("클릭됐다!")}>
          BUTTON
        </Button> */}
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button color="gray" outline fullWidth>
          BUTTON
        </Button>
        <Button size="small" color="pink" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
