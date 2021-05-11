import { useEffect, useState } from 'react'

const useTitlePage = (
  newTitle: string
): (string | React.Dispatch<React.SetStateAction<string>>)[] => {
  const [title, setTitle] = useState(newTitle)

  useEffect(() => {
    document.title = title
  }, [title])

  return [title, setTitle]
}

export default useTitlePage
