const {app, BrowserWindow} = require('electron')
const dotenv = require('dotenv')
const Client = require('bitcoin-core')

let win

dotenv.config()

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
  win.on('closed', () => { win = null })
}

app.on('ready', () => {
  createWindow()
  win.webContents.on('did-finish-load', () => {
    connectChain()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (win === null) createWindow()
})

function connectChain () {
  let client = new Client({
    host: process.env.CHAIN_HOST,
    port: process.env.CHAIN_PORT,
    username: process.env.CHAIN_USERNAME,
    password: process.env.CHAIN_PASSWORD
  })

  client.getInfo()
    .then((help) => console.log(help))
    .catch((err) => {
      console.log(err)
      win.webContents.send('chain-connection', 'err', err)
    })
}
