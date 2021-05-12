import React, { ReactElement, useEffect, useState } from 'react'
import useTitlePage from '@/hooks/useTitlePage'
import Ecosystem from '@/components/Ecosystem'
import '@/style.css'

interface AlertProps {
  message: string
  status: 'success' | 'error'
}

const CLONE_COMMAND =
  'git clone https://github.com/alfianandinugraha/create-react-typescript-app.git'

const App = (): ReactElement => {
  useTitlePage('React Typescript App')
  const [isAlertShow, setIsAlertShow] = useState(false)
  const [alert, setAlert] = useState<AlertProps>({
    message: 'Failed to copy, please use modern browser',
    status: 'error',
  })

  const copyCloneCommand = () => {
    setIsAlertShow(true)
    try {
      navigator.clipboard
        .writeText(CLONE_COMMAND)
        .then(() => {
          setAlert({
            message: 'Command copied ! 🚀🚀🚀',
            status: 'success',
          })
        })
        .catch(() => {
          setAlert({
            message: 'Failed to copy, please use modern browser',
            status: 'error',
          })
        })
    } catch {
      setAlert({
        message: 'Failed to copy, please use modern browser',
        status: 'error',
      })
    }
  }

  useEffect(() => {
    if (!isAlertShow) return

    const interval = setInterval(() => {
      setIsAlertShow(false)
    }, 2000)

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(interval)
    }
  }, [isAlertShow])

  return (
    <main className="container">
      {isAlertShow && (
        <section className={`alert alert--${alert.status}`}>
          <p>{alert.message}</p>
        </section>
      )}
      <section className="wrapper">
        <img src="/logo192.png" alt="react icon" className="react-logo" />
        <h1 className="heading" data-testid="title">
          Create React{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.typescriptlang.org/"
          >
            Typescript
          </a>{' '}
          App
        </h1>
        <section className="installation">
          <code>{CLONE_COMMAND}</code>
          <button type="button" onClick={copyCloneCommand}>
            <img
              src="./copy-svgrepo-com.svg"
              alt="clipboard icon"
              className="clipboard-icon"
            />
            <span>Copy</span>
          </button>
        </section>
        <Ecosystem />
        <section className="contribute">
          <h2>Contribute</h2>
          <p>
            Please visit{' '}
            <a
              href="https://github.com/alfianandinugraha/create-react-typescript-app"
              target="_blank"
              rel="noreferrer"
            >
              Create React Typescript App
            </a>
          </p>
        </section>
      </section>
    </main>
  )
}

export default App
