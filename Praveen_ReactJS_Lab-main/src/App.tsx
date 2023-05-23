import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './Components/ExpenseTracker';
import ShowData from './Components/ShowList';

function App() {
  return (
    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    */
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<ExpenseTracker onClose={null}  onTrue={null} />} />
          <Route path="/" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
