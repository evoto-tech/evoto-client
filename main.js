const { app, BrowserWindow } = require('electron')
const spawn = require('child_process').spawn
const dotenv = require('dotenv')
const multichain = require('multichain-node')

let multichaind

dotenv.config()

function createWindow () {
  let win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)
  if (process.env.NODE_ENV === 'development') win.webContents.openDevTools()
  win.on('closed', () => { win = null })
  return win
}

app.on('ready', () => {
  app.win = createWindow()
  app.win.webContents.on('did-finish-load', () => {
    startChain()
      .then(connectChain)
      .then(() => {
        app.win.webContents.send('chain-connection')
      })
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    multichaind.kill()
    app.quit()
  }
})

app.on('activate', () => {
  if (app.win === null) createWindow()
})

app.on('browser-window-created', (e, window) => {
  window.setMenu(null)
})

function handleConnectionError (err) {
  app.win.webContents.send('chain-connection', 'err', err)
}

function startChain () {
  return new Promise((resolve, reject) => {
    try {
      multichaind = spawn('./multichain/multichaind.exe',
        [ process.env.CHAIN_NAME,
          '-daemon',
          '-server',
          '-bind=127.0.0.1'
        ])
      multichaind.stdout.on('data', (data) => {
        if (data.indexOf('Node started') > -1) resolve()
      })
      multichaind.stderr.on('data', (data) => {
        reject(data)
      })
    } catch (e) {
      reject(e)
    }
  }, handleConnectionError)
}

function connectChain () {
  return new Promise((resolve, reject) => {
    const chain = multichain({
      port: process.env.CHAIN_PORT,
      host: process.env.CHAIN_HOST,
      user: process.env.CHAIN_USERNAME,
      pass: process.env.CHAIN_PASSWORD
    })

    chain.getInfo((err, info) => {
      err = err || info.errors
      if (err) return reject(err)
      resolve()
    })
  }, handleConnectionError)
}
