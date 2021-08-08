import React from 'react';
import Loading from './Loading';

export default {
 title: 'Common/Loading'
};

const Template = (args) => {
 return (
   <Loading {...args} />
 )
};

export const Default = Template.bind();

Default.args = {};

Default.story = {
 name: 'default'
};