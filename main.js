const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path');
const url = require('url');

app.on('ready', () => {
    let win = new BrowserWindow({
        width:800, 
        heigth:600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    win.loadURL(startUrl)
})

exports.openWindow = (filename) => {
    let win = new BrowserWindow({
        width:800, 
        heigth:600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`file://${__dirname}/` + filename  + `.html`) 
}