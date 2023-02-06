import LogoUrl from '@/public/logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (<>
    <div className="p-3 mt-2 text-center text-xs">
      <Image src={LogoUrl} alt="RRR Logo" />
    </div>
  </>)
}