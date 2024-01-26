import Card from '../../components/card';
import Link from 'next/link'
export default function UserAnalytics() {
  return (
    <Card>User Analytics slot <Link href={'/dashboard/archived'}>archived</Link></Card>
  )
}
