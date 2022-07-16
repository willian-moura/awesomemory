type Props = {
  large?: boolean
}

export default function Logo({ large }: Props) {
  const src = large ? 'logo_large.svg' : 'logo.svg'
  return <img src={src} alt={'logo'} />
}
