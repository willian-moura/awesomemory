import { useEffect, useState } from 'react'
import { Props } from '../../../types/globals'

export default function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return children
}
