import Link from "next/link"
import Card from "@/app/components/card"

export default function page() {
  return (
    <Card>
        <div> Archived page</div>
        <Link href={'/dashboard'}>Default</Link>
    </Card>
  )
}
