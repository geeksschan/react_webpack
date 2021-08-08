import React from 'react'

import classnames from 'classnames/bind';

import styles from './contentHeader.module.scss';
const cx = classnames.bind(styles);

const ContentHeader = ({title, description}) => {
  return (
    <div className={cx('content_header')}>
      {title && <h2 className={cx('title')}>{title}</h2>}
      {description && <p className={cx('description')}>{description}</p>}
    </div>
  )
}

export default ContentHeader
