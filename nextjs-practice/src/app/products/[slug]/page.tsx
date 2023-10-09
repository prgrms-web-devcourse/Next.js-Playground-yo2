import { getProduct, getProducts } from '@/service/products'
import { notFound } from 'next/navigation'

export const revalidate = 3

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름: ${slug}`,
  }
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product.name} 제품 설명 페이지</h1>
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 줄거다.(SSG)
  const products = await getProducts()

  return products.map((product) => ({
    slug: product.id, // params에 들어가는 형태로 반환해 준다.
  }))
}
