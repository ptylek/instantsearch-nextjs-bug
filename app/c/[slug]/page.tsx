import { Listing } from '@/components/listing'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <Listing filters={`categories:"${slug}"`} />
}
