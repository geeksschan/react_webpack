import React from 'react';

import PostList from './PostList';
import PostItem from '../postItem/PostItem';
import PostItemInner from '../postItemInner/PostItemInner';

import tempDataJson from '../postItemInner/temp.data.json';

export default {
 title: 'Components/PostList'
};

const Template = (args) => {
 return (
   <PostList>
     {[1,2,3,4,5,6,7].map((item, index) => {
      return (
        <PostItem key={index}>
          <PostItemInner {...tempDataJson.default} />
        </PostItem>
      )
     })}
   </PostList>
 )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
 name: 'default'
};