import React, {useState, useEffect} from 'react';

import PostItem from './presentation/components/postItem/PostItem';
import PostList from './presentation/components/postList/postList';

import "@scss/global.scss";

const Root = () => {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  function onChange(e) {
    const inputText = e.target.value;
    setName(inputText);
  }

  function onClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `hello example ${count}`;
  });

  return (
    <div>
      <PostList>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </PostList>
    </div>
  );
};

export default Root;