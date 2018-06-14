try{
if (require('electron-squirrel-startup')) return;}
catch (e){

}
const {app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const url = require('url')

global.sharedObject = {prop1: process.argv};

//-- Handle installing, uninstalling, updating...
// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}

function handleSquirrelEvent() {
    if (process.argv.length === 1) {
        return false;
    }

    const ChildProcess = require('child_process');
    const path = require('path');

    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    const exeName = path.basename(process.execPath);

    const spawn = function(command, args) {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
        } catch (error) {}

        return spawnedProcess;
    };

    const spawnUpdate = function(args) {
        return spawn(updateDotExe, args);
    };

    //Handle the install cases...
    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(['--createShortcut', exeName]);
            //Handle the file extension association during Install ==> any file with that specific extension, or have
            //the icon will opened with the App.
            const {ProgId, ShellOption, Regedit} = require('electron-regedit')

            new ProgId({
                description: 'idfViewer',
                icon: 'assets/favicon.ico',
                squirrel: true,
                extensions: ['adf','idf'],
                //when do rigth click
                shell: [
                    new ShellOption({verb: ShellOption.OPEN}),
                    new ShellOption({verb: ShellOption.EDIT, args: ['--edit']}),
                    new ShellOption({verb: ShellOption.PRINT, args: ['--print']})
                ]
            })

            //Regedit.installAll(); //apply the above settings to the OS
            setTimeout(app.quit, 1000);
            return true;

        case '--squirrel-uninstall':
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(['--removeShortcut', exeName]);

            setTimeout(app.quit, 1000);
            return true;

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            app.quit();
            return true;
    }
};

let mainWin = null;
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
    mainWin.webContents.openDevTools();

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

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') { //if it is not macOS
    app.quit()
}
})
