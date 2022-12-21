import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import {useState} from "react";
import ReactCodeInput from 'react-code-input';
import { MD5 } from "md5-js-tools";

function App() {
  let [curText, setCurtext] = useState("")
  return (
    <div className="App">
    <Container>
      <Row>
        &nbsp;
        &nbsp;
      </Row>
      <Row>
      <h1>
      Weihnachts-Code
      </h1>
      </Row>
      <Row>
        <Col>
          <ReactCodeInput type='text' fields={13} 
    onChange={(text)=>{setCurtext(text)}} 
      inputStyle= {{
      fontFamily: 'monospace',
      margin:  '4px',
      MozAppearance: 'textfield',
      width: '20px',
      borderRadius: '3px',
      fontSize: '14px',
      height: '26px',
      border: '1px solid'
      }}
    />
        </Col>
      </Row>
      <Row>
        {
          MD5.generate(curText.toLowerCase())==="1b2f0d0e15cfda97f350695e279e989f" ?
          (<h1>🎉🎉✅🎉🎉</h1>):(<h1>❌</h1>)
        }
      </Row>
    </Container>
    </div>
  );
}

export default App;
