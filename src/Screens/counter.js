import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost, removePost } from "../counter/counterSlice";
import "./counter.css";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log("post", count);
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPost(title));
    console.log("title", title);
  }
  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
    console.log(e.target.value);
  }
  const handleRemove = (value) => {
    console.log("cliked");
  };
  return (
    <div>
      {" "}
      <div class="todo-container stretch-width">
        <h1>
          TODO <span>v1.0</span>
        </h1>

        <form onSubmit={handleSubmit} class="todo-form">
          <div class="input-box">
            <input
              type="text"
              value={title}
              autocomplete="off"
              onChange={handleChange}
              id="todo-input"
              name="todo-input"
              placeholder="add new todo"
            />
            <button type="submit" class="primary-button add-btn">
              &#43;
            </button>
          </div>
        </form>

        <p class="task-counter"></p>
        <ul class="todo-list">
          {count &&
            count.map((post, index) => (
              <>
                <li class="item" data-key="1642161806100">
                  <span class="check-mark">✓</span>
                  {post}
                  <button
                    onClick={() => {
                      dispatch(removePost(index));
                    }}
                    class="deleteBtn"
                  >
                    🗑
                  </button>
                </li>
              </>
            ))}
          <li class="item" data-key="1642161806100">
            <span class="check-mark">✓</span>
            xfcfvdf
            <button class="deleteBtn">🗑</button>
          </li>
        </ul>
        <button class="clear-btn primary-button">Clear All</button>
      </div>
    </div>
  );
}

export default Counter;
