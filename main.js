const {app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
    win.webContents.openDevTools();

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)/**
 * Created by pl04334 on 4/16/2018.
 */
