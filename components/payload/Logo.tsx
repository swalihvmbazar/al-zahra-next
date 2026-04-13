import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src="/assets/logo.png"
      alt="Al Zahra Logo"
      width={160}
      height={48}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
