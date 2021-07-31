import React from 'react'
import classnames from 'classnames/bind';

import styles from './titleText.module.scss';
const cx = classnames.bind(styles);

const TitleText = ({text, isEmphasis}) => {
  return (
    <>
      {isEmphasis ? (
        <strong className={cx('text')} data-text={text}>
          <span>{text}</span>
        </strong>
      ) : (
        <span className={cx('text')} data-text={text}>
          <span>{text}</span>
        </span>
      )}
    </>
  )
}

export default TitleText
