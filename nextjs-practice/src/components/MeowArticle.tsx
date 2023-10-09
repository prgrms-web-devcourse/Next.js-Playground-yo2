'use client'
import { useEffect, useState } from 'react'
import styles from './MeowArticle.module.css'

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비중...')

  // 컴포넌트가 마운트 될때 한번만 실행시켜 주고 싶다면 useEffect 빈 배열을 사용한다.
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]))
  }, [])

  return <article className={styles.article}>{text}</article>
}
