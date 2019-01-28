const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const url = require('url')

var fighterJet = new Jet();

var sendBtn = document.getElementById("feedbackBtn")
function sendFeedback(){
    document.getElementById('messagebox').style.display = 'block';
}
function sendToMessage(){
    var message = document.getElementById('messagebox').value;
    sendToSlack("Hello World", "fighter-jet-message", "#fighter-jet");
}




// sendBtn.addEventListener('click', function (event) {

//     const modalPath = path.join( __dirname, 'form.html')
//     console.log(modalPath)
//     let win = new BrowserWindow({
//         frame: false,
//         alwaysOnTop: true,
//         width: 800,
//         height: 200
//     })
//     win.on('close', function () {
//         win = null
//     })
    //win.loadURL(modalPath)
//     win.loadURL(url.format({
//         pathname: path.join(__dirname, 'modalPath'),
//         protocol:'file:',
//         slashes:true
//     }));
//     win.show()
// })

