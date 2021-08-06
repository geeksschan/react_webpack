import React from 'react'
import classnames from 'classnames/bind';

import styles from './postItem.module.scss';
const cx = classnames.bind(styles);

const PostItem = ({children}) => {
  return (
    <div className={cx('item')} >
      {children}
    </div>
  )
}

export default PostItem;
