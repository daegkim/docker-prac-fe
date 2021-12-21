import 'bootstrap/dist/css/bootstrap.min.css';
import './MemoList.css';
import { Fade, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setMemos } from './redux/memo/memoSlice';

function MemoList() {
  const memos = useSelector((state) => { return state.memo.memos })
  const dispatch = useDispatch()
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    console.log('reload')
    axios.get('/api/memo/list')
    .then((res) => {
      if(res.data.isSuccess){
        dispatch(setMemos(res.data.memos));
      }
      else {
        console.log(res.data.errMsg);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setIsFadeIn(true);
    })
  }, [])

  return (
    <div className="memo-list">
      <Fade in={isFadeIn} timeout={9000}>
        <ListGroup variant="flush">
          {
            memos.map((val, idx) => {
              return (
                <ListGroup.Item key={idx} style={{cursor: "pointer"}}>
                  <p> { val } </p>
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </Fade>
    </div>
  );
}

export default MemoList;
