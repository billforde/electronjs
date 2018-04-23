const {app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
    //Create the browser window.
    mainWin = new BrowserWindow({width: 800,
                            height: 600,
                            show: false
    });

    splash = new BrowserWindow({width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true});

    //load the splash sreen
    splash.loadURL(url.format({
        pathname: path.join(__dirname, 'splash.html'),
        protocol: 'file:',
        slashes: true
    }));

    //show debug screen
   //mainWin.webContents.openDevTools();

    //load the index.html of the app.
    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //if main window is ready to show, then destroy the splash window and show up the main window
    mainWin.once('ready-to-show', function() {
        splash.destroy();
    mainWin.show();
});
}

app.on('ready', createWindow)/**
 * Created by pl04334 on 4/16/2018.
 */
