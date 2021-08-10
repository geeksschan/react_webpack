import React, { useState, useEffect } from 'react'

import classnames from 'classnames/bind';

import styles from './postEnd.module.scss';
const cx = classnames.bind(styles);

const PostEnd = () => {

  useEffect(() => {
    
  });

  return (
    <div className={cx('post')}>
      <div className={cx('cover')}>
        <div className={cx('thumbnail_area')}>
          <img src="https://picsum.photos/600/600" className={cx('image')}  alt="" />
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
          <h2 className={cx('title')}>
            Slipknot’s Concert in Phoenix Showed Why Mayhem Fest Died
          </h2>
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
      
      
      <div className={cx('content_area')}>
        
        <div className={cx('content')}>
          <p className={cx('description')}>
            국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.대법원장은 국회의 동의를 얻어 대통령이 임명한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
          </p>
          <p className={cx('description')}>
            국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.대법원장은 국회의 동의를 얻어 대통령이 임명한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
          </p>
          <p className={cx('description')}>
            국무총리·국무위원 또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수 있다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.대법원장은 국회의 동의를 얻어 대통령이 임명한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
          </p>
          <div className={cx('youtube')}>
            <iframe id="player" type="text/html" width="100%" height="100%"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PostEnd
