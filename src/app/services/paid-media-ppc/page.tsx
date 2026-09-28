import { permanentRedirect } from 'next/navigation'

export default function PaidMediaPPCRedirectPage() {
  permanentRedirect('/services/google-ads')
}
