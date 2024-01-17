import { Metadata } from "next"

type Props = { params: { productId: string } }

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`)
    }, 1000)
  })
  return {
    title: `Product ${title}`,
    description: `Details about product ${params.productId}`,
  }
}

export default function page( { params }: Props) {
  return (
    <div>Details about produt {params.productId}</div>
  )
}
