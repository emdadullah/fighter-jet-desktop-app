const electron=require('electron');

const { app, BrowserWindow } = require('electron')


let win
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1500, height: 1000, resizable: false })
  
  //hide Menubar
  //win.setMenu(null)

  // and load the index.html of the app.
  win.loadFile('main.html')
}

app.on('ready', createWindow)



