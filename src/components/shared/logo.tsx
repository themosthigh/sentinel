import Image from 'next/image'
import SentinelSvg from '@/assets/sentinel.svg'

export default function Logo() {
  return <Image src={SentinelSvg} alt="sentinel logo" height={100} width={100} />
}


