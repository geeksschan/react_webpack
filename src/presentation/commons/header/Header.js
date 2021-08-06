import React from 'react'
import classnames from 'classnames/bind';

import styles from "./header.module.scss";

const cx = classnames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <h1 className={cx('title')}>주짓수팩토리</h1>
    </header>
  )
}

export default Header
