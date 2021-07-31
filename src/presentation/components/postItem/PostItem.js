import React from 'react'
import classnames from 'classnames/bind';

import PostItemInner from '../postItemInner/PostItemInner';

import styles from './postItem.module.scss';
const cx = classnames.bind(styles);

const PostItem = () => {
  return (
    <div className={cx('item')} >
      <PostItemInner />
    </div>
  )
}

export default PostItem
