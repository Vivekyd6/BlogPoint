import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import SinglePost from './pages/SinglePost.js';
import Error from './pages/Error.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog/:slug" element={<SinglePost />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
