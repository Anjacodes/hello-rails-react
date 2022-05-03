import React, { useEffect } from "react"
import { fetchGreetings } from "../redux/greetings";
import { useSelector, useDispatch } from 'react-redux'

const Greeting = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchGreetings());
    }, [dispatch]);

    const message = useSelector((state) => state.greetingsReducer);

    return (
      <div>
        <h1>Greeting</h1>
        <p>Greeting: {message.message}</p>
      </div>
    );
}

export default Greeting;