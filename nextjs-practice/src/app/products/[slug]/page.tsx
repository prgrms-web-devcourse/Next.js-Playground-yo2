import { getProduct, getProducts } from '@/service/products'
import NotFoundProduct from '../not-found'

type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  }
}

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug)

  if (!product) {
    NotFoundProduct()
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product} 제품 설명 페이지</h1>
}

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 줄거다.()
  const products = getProducts()

  return products.map((product) => ({
    slug: product, // params에 들어가는 형태로 반환해 준다.
  }))
}
