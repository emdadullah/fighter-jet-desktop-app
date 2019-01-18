const electron=require('electron');

const { app, BrowserWindow } = require('electron')


let win
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1500, height: 700, resizable: false })

  // and load the index.html of the app.
  win.loadFile('main.html')
}

app.on('ready', createWindow)


