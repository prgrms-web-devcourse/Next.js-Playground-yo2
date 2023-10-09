import { getProducts } from '@/service/products'
import Link from 'next/link'
import styles from './page.module.css'

// export const revalidate = 3

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts()
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: {
    //   revalidate: 0,
    // }, // 3초 마다 다시 받아와서 ISR로 만들어 준다.
    cache: 'no-store',
  })
  const data = await res.json()
  const factText = data.data[0]

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }, i) => (
          <li key={i}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  )
}
