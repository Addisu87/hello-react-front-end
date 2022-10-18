import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
