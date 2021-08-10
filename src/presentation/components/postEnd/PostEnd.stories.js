import React from 'react';
import PostEnd from './PostEnd';

export default {
 title: 'Components/PostEnd'
};

const Template = (args) => {
 return (
   <PostEnd {...args} />
 )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
 name: 'default'
};