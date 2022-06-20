import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/AllRoutes';
import {
  BrowserRouter as Router
} from "react-router-dom";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { getAllcomments } from './actions/comments';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchAllQuestions())
    dispatch(getAllcomments())
  }, [dispatch])

  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
