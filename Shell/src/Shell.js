import React from 'react';
import {
  Link,
  Route,
  Routes,
  Navigate,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Home from './Home';


function Shell() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default Shell;