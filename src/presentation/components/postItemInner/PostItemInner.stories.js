import React from 'react';
import PostItemInner from './PostItemInner'

import tempDataJson from './temp.data.json';

export default {
  title: 'Components/PostItemInner'
};

const Template = (args) => {
  return (
    <PostItemInner {...args} />
  )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
  name: 'default',
};