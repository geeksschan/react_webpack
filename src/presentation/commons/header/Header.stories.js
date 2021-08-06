import React from 'react';
import Header from './Header';

export default {
 title: 'Common/header'
};

const Template = (args) => {
 return (
   <Header {...args} />
 )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
 name: 'default'
};