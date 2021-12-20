import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'react-bootstrap';

import MemoInput from './MemoInput';
import MemoList from './MemoList';

function App() {
  return (
    <div className="app">
      <Row>
        <div className="app-header">Memo App</div>
      </Row>
      <Row>
        <Col  
          xs={{span: 10, offset: 1}}
          sm={{span: 8, offset: 2}}
          lg={{span: 6, offset: 3}}
          xl={{span: 6, offset: 3}}>
          <MemoInput></MemoInput>
        </Col>
      </Row>
      <Row>
        <Col  
          xs={{span: 10, offset: 1}}
          sm={{span: 8, offset: 2}}
          lg={{span: 6, offset: 3}}
          xl={{span: 6, offset: 3}}>
          <MemoList></MemoList>
        </Col>
      </Row>
      <Row>
        <Col  
          xs={{span: 10, offset: 1}}
          sm={{span: 8, offset: 2}}
          lg={{span: 6, offset: 3}}
          xl={{span: 6, offset: 3}}>
          <p style={{borderTop: "2px solid #D2F3F8", padding: '10px'}}> The End </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
