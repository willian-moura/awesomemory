import Router from 'next/router'

type Props = {
  large?: boolean
}

export default function Logo({ large }: Props) {
  const goToHome = () => {
    Router.push('/')
  }
  const src = large ? 'logo_large.svg' : 'logo.svg'
  return <img onClick={goToHome} src={src} alt={'logo'} />
}
