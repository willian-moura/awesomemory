import { useEffect, useRef } from 'react'

const useOutsideClick = (callback: EventListener) => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event)
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref, callback])

  return ref
}

export default useOutsideClick
