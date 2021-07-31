import React from 'react'
import classnames from 'classnames/bind';

import styles from './postItemInner.module.scss';
import TitleText from '../titleText/TitleText';

const cx = classnames.bind(styles);

const tempProps = {
  title: '제목이 입력되는 부분입니다.',
  titleEmphsis: '강조되는 글씨!!',
  image: 'http://mrparkerbjj.com/wp-content/uploads/2021/07/maxresdefault-1.jpg'
};

const PostItemInner = ({}) => {

  const { title, titleEmphsis, image } = tempProps;

  return (
    <div className={cx('inner')}>
      <div className={cx('thumbnail')}>
        <span className={cx('image_box')}>
          <img className={cx('image')} src={image} alt="" />
        </span>
      </div>
      <h3 className={cx('title')}>
        <TitleText text={title} />
        <TitleText text={titleEmphsis} isEmphasis={true} />
      </h3>

      <div className={cx('tag_area')}>
        <div className={cx('tag_list')} role="list">
          <span className={cx('tag_item')} role="listitem">트라이앵글</span>
          <span className={cx('tag_item')} role="listitem">스파이더가드</span>
          <span className={cx('tag_item')} role="listitem">깃초크</span>
        </div>
      </div>
      
      <p className={cx('description')}>설명이 추가되는 부분입니다.</p>

      <div className={cx('meta_area')}>
        <span className={cx('meta')}>3,123 likes</span>
        <span className={cx('meta')}>created 1 month ago</span>
      </div>
    </div>
  )
}

export default PostItemInner
