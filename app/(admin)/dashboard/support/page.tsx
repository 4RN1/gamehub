import SupportList from '@/components/support/SupportPage'

export default async function page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/supportMessages`)
  const tickets = await res.json()

  return (
    <div>
      <SupportList tickets={tickets} />
    </div>
  )
}