import React from 'react';
import PostItem from './PostItem';
import PostItemInner from '../postItemInner/PostItemInner';

import tempDataJson from '../postItemInner/temp.data.json';

export default {
 title: 'Components/PostItem'
};

const Template = (args) => {
 return (
   <PostItem>
     <PostItemInner {...tempDataJson.default} />
   </PostItem>
 )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
 name: 'default'
};