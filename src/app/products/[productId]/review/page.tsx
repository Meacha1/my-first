export default function page({params}: {params: {productId: string}}) {
  return (
    <>
        <h1>Review of product {params.productId}</h1>
        <h2>Review 1</h2>
        <h2>Review 2</h2>
        <h2>Review 3</h2>
    </>
  )
}