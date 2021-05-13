const fs = require('fs')
const readline = require('readline')

const updateAppTsx = () => {
  const appTsxContent = `import React from 'react'

const App = (): React.ReactElement => <p>Hello world ! 👋🏼👋🏼👋🏼</p>

export default App
`

  try {
    console.log('⏳ Update App.tsx...')
    fs.writeFileSync(`${__dirname}/src/App.tsx`, appTsxContent)
    console.log('✅ Update App.tsx successfully\n')
  } catch (err) {
    console.log(err)
    console.log('error to update App.tsx\n')
  }
}
const deleteUnusedFiles = () => {
  const fileToDelete = [
    `${__dirname}/src/style.css`,
    `${__dirname}/src/App.test.tsx`,
    `${__dirname}/src/components/Ecosystem.tsx`,
    `${__dirname}/src/hooks/useTitlePage.ts`,
  ]

  try {
    fileToDelete.forEach((filePath) => {
      console.log(`⏳ Delete ${filePath}...`)
      fs.unlinkSync(filePath)
      console.log(`✅ Delete ${filePath} successfully\n`)
    })
  } catch (err) {
    console.log(err)
    console.log('Failed to delete unused files\n')
  }
}

const deleteUnusedFolder = () => {
  const folderToDelete = [
    `${__dirname}/src/components`,
    `${__dirname}/src/hooks`,
  ]

  try {
    folderToDelete.forEach((filePath) => {
      console.log(`⏳ Delete ${filePath}...`)
      fs.rmdirSync(filePath)
      console.log(`✅ Delete ${filePath} successfully\n`)
    })
  } catch (err) {
    console.log(err)
    console.log('Failed to delete unused files\n')
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Are you sure to delete all initial files ? [Y/N] : ', (answer) => {
  console.log('')
  if (answer.toLocaleLowerCase() === 'n') {
    console.log('Opeation cancelled')
    rl.close()
    return
  }

  if (answer.toLocaleLowerCase() !== 'y') return

  updateAppTsx()
  deleteUnusedFiles()
  deleteUnusedFolder()
  console.log('Remove initial files successfully, Happy coding ✈️')
  console.log('To cancel the operation use command `git checkout -- src\\`\n')
  console.log(
    'contribute please visit : https://github.com/alfianandinugraha/create-react-typescript-app'
  )
  rl.close()
})
