export default function page( { params }: { params: { productId: string } }) {
  return (
    <div>Details about produt {params.productId}</div>
  )
}
