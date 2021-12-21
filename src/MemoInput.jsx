import 'bootstrap/dist/css/bootstrap.min.css';
import './MemoInput.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setNewMemo, addNewMemo } from './redux/memo/memoSlice';
import axios from 'axios';

function MemoInput() {
  const newMemo = useSelector((state) => { return state.memo.newMemo })
  const dispatch = useDispatch()

  const handleMemoInputSubmit = (e) => {
    e.preventDefault();

    if(!newMemo) {
      alert('메모를 입력하세요.');
      return;
    }

    axios.post('/api/memo/new-memo', {
      newMemo: newMemo
    })
    .then((res) => {
      dispatch(addNewMemo());
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      dispatch(setNewMemo(''));
    })
  }

  const handleMemoInputChange = (e) => {
    dispatch(setNewMemo(e.target.value));
  }

  return (
    <div className="memo-input">
      <Form onSubmit={handleMemoInputSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter memo" value={ newMemo } onChange={handleMemoInputChange}></Form.Control>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button onClick={handleMemoInputSubmit}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default MemoInput;
