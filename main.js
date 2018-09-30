const {app, BrowserWindow} = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#A9A9A9'
  });

  // и загрузит index.html приложение.
  win.loadURL(`file://${__dirname}/dist/electron-app/index.html`);

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
