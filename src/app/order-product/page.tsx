"use client";
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const handelClick = () => {
        console.log('Order Now');
        router.push('/');
    }
  return (
    <>
        <h1>Order Product page</h1>
        <button onClick={handelClick}>Order Now</button>     
    </>
  )
}
