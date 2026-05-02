import { getSupportMessage } from '@/app/api/supportMessages/route'

import SupportList from '@/components/support/SupportPage'

export default async function page() {
  const tickets = await getSupportMessage()

  return (
    <div>
      <SupportList tickets={tickets} />
    </div>
  )
}