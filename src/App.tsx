import React, { ReactElement } from 'react'
import useTitlePage from '@/hooks/useTitlePage'
import '@/style.css'

const App = (): ReactElement => {
  useTitlePage('React Typescript App')

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
        <section className="ecosystem">
          <h2>Ecosystem</h2>
          <ol>
            <li>
              <a
                href="https://reactrouter.com/web/guides/quick-start"
                target="_blank"
                rel="noreferrer"
              >
                react-router
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pmndrs/jotai"
                target="_blank"
                rel="noreferrer"
              >
                jotai
              </a>
            </li>
            <li>
              <a
                href="https://reactcommunity.org/react-transition-group/"
                target="_blank"
                rel="noreferrer"
              >
                react-transition-group
              </a>
            </li>
            <li>
              <a
                href="https://testing-library.com/docs/react-testing-library/intro/"
                target="_blank"
                rel="noreferrer"
              >
                testing-library
              </a>
            </li>
            <li>
              <a
                href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
                target="_blank"
                rel="noreferrer"
              >
                React Developer Tools
              </a>
            </li>
          </ol>
        </section>
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
