const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtn = document.getElementById('btn-send-messege')
const ipc = electron.ipcRenderer

closeBtn.addEventListener('click', function(enent){
    var window = remote.getCurrentWindow();
    window.close();
})

const updateBtn = document.getElementById('updateBtn')

