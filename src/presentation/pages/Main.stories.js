import React from 'react';
import Root from '../../Root';

export default {
 title: 'Pages/Root'
};

const Template = (args) => {
 return (
   <Root {...args} />
 )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
 name: 'default'
};