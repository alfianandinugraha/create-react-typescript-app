import React, { ReactElement } from 'react'
import useTitlePage from '@/hooks/useTitlePage'
import Ecosystem from '@/components/Ecosystem'
import '@/style.css'

const CLONE_COMMAND =
  'git clone https://github.com/alfianandinugraha/create-react-typescript-app.git'

const App = (): ReactElement => {
  useTitlePage('React Typescript App')

  const copyCloneCommand = () => {
    navigator.clipboard.writeText(CLONE_COMMAND).catch((err) => {
      console.error('failed to copy clone command')
      console.error(err)
    })
  }

  return (
    <main className="container">
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
            Copy
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
