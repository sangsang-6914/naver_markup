import React from 'react';
import styles from './Naver.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Naver() {
  return (
    <main className={cx('wrap')}>
      <h1>제목</h1>
      <div className={cx('main')}>text</div>
    </main>
  );
}

export default Naver;
