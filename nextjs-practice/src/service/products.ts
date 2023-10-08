import { promises as fs } from 'fs'
import path from 'path'

export type Product = {
  id: string
  name: string
  price: string
}

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json')
  const data = await fs.readFile(filePath, 'utf-8')

  return JSON.parse(data) // JSON.parse도 Promise로 비동기적으로 동작해서 object로 만들어 준다.
}

// 해당 제품에 대한 정보를 return 해 주고 싶다.
export function getProduct(id: string) {
  return 'shirt'
}
