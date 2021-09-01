import React, { ReactElement, useEffect, useState } from 'react'
import useTitlePage from '@/hooks/useTitlePage'
import Ecosystem from '@/components/Ecosystem'
import Logo192 from '@/images/logo192.png'
import GithubIcon from '@/images/github-icon.svg'
import PrettierIcon from '@/images/prettier.png'
import TypescriptIcon from '@/images/typescript.svg'
import EslinIcon from '@/images/eslint.svg'
import '@/style.css'

interface AlertProps {
  message: string
  status: 'success' | 'error'
}

interface CloneCommandProps {
  command: string
  isActive: boolean
  id: string
  type: 'HTTPS' | 'SSH'
}

interface ScriptProps {
  command: {
    yarn?: string
    npm?: string
  }
  description: string
  id: string
}

const scripts: ScriptProps[] = [
  {
    command: {
      yarn: 'yarn start',
      npm: 'npm run start',
    },
    description:
      'Start the app and open http://localhost:3000 to view it in the browser.',
    id: Math.random().toString(),
  },
  {
    command: {
      yarn: 'yarn test',
      npm: 'npm run test',
    },
    description: 'Launches the test runner in the interactive watch mode.',
    id: Math.random().toString(),
  },
  {
    command: {
      yarn: 'yarn build',
      npm: 'npm run build',
    },
    description:
      'It correctly bundles React in production mode and optimizes the build for the best performance.',
    id: Math.random().toString(),
  },
  {
    command: {
      yarn: 'yarn lint',
      npm: 'npm run lint',
    },
    description: 'Fix all error because ESlint.',
    id: Math.random().toString(),
  },
  {
    command: {
      yarn: 'yarn reset',
      npm: 'npm run reset',
    },
    description:
      'Delete all files, folders, and code which related to landing page.',
    id: Math.random().toString(),
  },
]

const App = (): ReactElement => {
  useTitlePage('React Typescript App')
  const [isAlertShow, setIsAlertShow] = useState(false)
  const [isInputProjectShow, setIsInputProjectShow] = useState(false)
  const [inputProject, setInputProject] = useState('')
  const [isAutoInstallEnable, setIsAutoInstallEnable] = useState(false)
  const [cloneCommands, setCloneCommands] = useState<CloneCommandProps[]>([
    {
      id: Math.random().toString(),
      type: 'HTTPS',
      command:
        'git clone https://github.com/alfianandinugraha/create-react-typescript-app.git',
      isActive: true,
    },
    {
      id: Math.random().toString(),
      type: 'SSH',
      command:
        'git clone git@github.com:alfianandinugraha/create-react-typescript-app.git',
      isActive: false,
    },
  ])
  const [alert, setAlert] = useState<AlertProps>({
    message: 'Failed to copy, please use modern browser',
    status: 'error',
  })

  const inputProjectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProject(e.target.value.replace(' ', '-'))
  }

  const writeClipboard = (payload: string) => {
    setIsAlertShow(true)
    try {
      navigator.clipboard
        .writeText(payload)
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

  const switchCloneCommand = (type: CloneCommandProps['type']) => {
    const newCloneCommands = cloneCommands.map((cloneCommand) => ({
      ...cloneCommand,
      isActive: type === cloneCommand.type,
    }))

    setCloneCommands(newCloneCommands)
  }

  const getActiveCloneCommand = () => {
    let result = cloneCommands.filter((command) => command.isActive)[0].command

    if (!inputProject) return result

    if (isInputProjectShow) {
      result += ` "${inputProject}"`
    }

    return result
  }

  const yarnAutoInstallCommand = () =>
    `${getActiveCloneCommand()} && yarn install --cwd "${
      inputProject || 'create-react-typescript-app'
    }"`

  const npmAutoInstallCommand = () =>
    `${getActiveCloneCommand()} && cd "${
      inputProject || 'create-react-typescript-app'
    }" && npm install && cd ".."`

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

  const AutoInstallCommandComponent = () => (
    <section className="code-group">
      <section className="code-block">
        <p>Yarn</p>
        <code
          onClick={() => writeClipboard(yarnAutoInstallCommand())}
          aria-hidden="true"
        >
          {yarnAutoInstallCommand()}
        </code>
      </section>
      <section className="code-block">
        <p>NPM</p>
        <code
          onClick={() => writeClipboard(npmAutoInstallCommand())}
          aria-hidden="true"
        >
          {npmAutoInstallCommand()}
        </code>
      </section>
    </section>
  )

  return (
    <main className="container">
      {isAlertShow && (
        <section className={`alert alert--${alert.status}`}>
          <p>{alert.message}</p>
        </section>
      )}
      <a
        className="fork"
        href="https://github.com/alfianandinugraha/create-react-typescript-app"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GithubIcon} alt="github icon" />
        <span>
          Star me on <b>GitHub</b>
        </span>
      </a>
      <section className="wrapper">
        <img src={Logo192} alt="react icon" className="react-logo" />
        <div className="icon-group">
          <img src={TypescriptIcon} alt="typescipt icon" />
          <img src={EslinIcon} alt="eslint icon" />
          <img src={PrettierIcon} alt="prettier icon" />
        </div>
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
        <section className="stat">
          <section className="stat__item">
            <a
              className="github-button"
              href="https://github.com/alfianandinugraha/create-react-typescript-app"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star alfianandinugraha/create-react-typescript-app on GitHub"
            >
              Star
            </a>
          </section>
          <section className="stat__item">
            <a
              className="github-button"
              href="https://github.com/alfianandinugraha/create-react-typescript-app/fork"
              data-icon="octicon-repo-forked"
              data-size="large"
              data-show-count="true"
              aria-label="Fork alfianandinugraha/create-react-typescript-app on GitHub"
            >
              Fork
            </a>
          </section>
          <section className="stat__item">
            <a
              className="github-button"
              href="https://github.com/alfianandinugraha/create-react-typescript-app/archive/HEAD.zip"
              data-icon="octicon-download"
              data-size="large"
              aria-label="Download alfianandinugraha/create-react-typescript-app on GitHub"
            >
              Download
            </a>
          </section>
        </section>
        <section className="installation">
          <section className="menu-bar">
            {cloneCommands.map((command) => (
              <span
                className={`menu-bar__item ${
                  command.isActive ? 'menu-bar__item--active' : ''
                }`}
                onClick={() => switchCloneCommand(command.type)}
                aria-hidden="true"
                key={command.id}
              >
                {command.type}
              </span>
            ))}
          </section>
          <section
            className="toggle-input"
            onClick={() => setIsInputProjectShow(!isInputProjectShow)}
            aria-hidden="true"
          >
            {!isInputProjectShow ? 'Show ' : 'Close '}Custom Project Name
          </section>
          {isInputProjectShow && (
            <section className="input-project">
              <input
                type="text"
                className="input-project-name"
                placeholder="Project / folder name (optional)"
                onChange={inputProjectHandler}
                value={inputProject}
              />
              <label
                htmlFor="auto-install-checkbox"
                className="checkbox"
                aria-hidden="true"
              >
                <input
                  type="checkbox"
                  id="auto-install-checkbox"
                  checked={isAutoInstallEnable}
                  onChange={() => {
                    setIsAutoInstallEnable(!isAutoInstallEnable)
                  }}
                />
                <span>Auto install package</span>
              </label>
            </section>
          )}
          {isAutoInstallEnable && isInputProjectShow ? (
            <AutoInstallCommandComponent />
          ) : (
            <section className="code-block">
              <code
                onClick={() => writeClipboard(getActiveCloneCommand())}
                aria-hidden="true"
              >
                {getActiveCloneCommand()}
              </code>
            </section>
          )}
        </section>
        <section className="scripts">
          <h2>Available Scripts</h2>
          <section className="scripts__wrapper">
            {scripts.map((script) => (
              <div className="script__item" key={script.id}>
                <div className="code-block">
                  <code
                    onClick={() => writeClipboard(script.command.yarn || '')}
                    aria-hidden="true"
                  >
                    {script.command.yarn}
                  </code>
                  <span>or</span>
                  <code
                    onClick={() => writeClipboard(script.command.npm || '')}
                    aria-hidden="true"
                  >
                    {script.command.npm}
                  </code>
                </div>
                <p>{script.description}</p>
              </div>
            ))}
          </section>
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
