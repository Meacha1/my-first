import { notFound } from "next/navigation"

export default function page({params}: {params: {reviewId: string, productId: string}}) {
  if (+(params.reviewId) > 500) {
      notFound()
  }
  return (
    <>
      <div>Review {params.reviewId} of product {params.productId} </div>
    </>
  )
}
 