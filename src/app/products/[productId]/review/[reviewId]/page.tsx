"use client"; // to make the error boundary reset button work, you need to add this line
import { notFound } from "next/navigation"

function grtRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default function page({params}: {params: {reviewId: string, productId: string}}) {
  const random = grtRandomInt(2)
  if (random === 1) {
      throw new Error('id is not valid');
  }
  if (+(params.reviewId) > 500) {
      notFound()
  }
  return (
    <>
      <div>Review {params.reviewId} of product {params.productId} </div>
    </>
  )
}
 