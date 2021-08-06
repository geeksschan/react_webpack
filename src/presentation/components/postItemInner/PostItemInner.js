import React from 'react'
import classnames from 'classnames/bind';

import styles from './postItemInner.module.scss';

const cx = classnames.bind(styles);

const PostItemInner = ({title, titleEmphsis, image}) => {
  

  return (
    <div className={cx('inner')}>
      <div className={cx('thumbnail')}>
        <img className={cx('image')} src={image} alt="" />
      </div>
      <div className={cx('info')}>
        <ul className={cx('tag_list')}>
          {[1,2].map((item) => {
            return (
              <li className={cx('tag_item')} key={item}>
                <span className={cx('text')}>TAG</span>
              </li>
            )
          })}
        </ul>
        <h3 className={cx('title')}>
          Slipknot’s Concert in Phoenix Showed Why Mayhem Fest Died
        </h3>
        <div className={cx('meta_area')}>
          <div className={cx('meta')}>
            <span>1,000 views</span>
          </div>
          <div className={cx('meta')}>
            <span>posted on 2021.07.01</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PostItemInner
