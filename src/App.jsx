import { PostsList } from "./components/Post/PostList.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import "./components/Post/Post.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostsList />
    </>
  );
}

export default App;
