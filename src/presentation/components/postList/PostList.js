import React from 'react'

import classnames from 'classnames/bind';

import styles from './postList.module.scss';
const cx = classnames.bind(styles);

const PostList = ({children}) => {
  return (
    <div className={cx('list')}>
      {children}
    </div>
  )
}

export default PostList
