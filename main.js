const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
        },
    });

    setTimeout(() => {
        mainWindow.loadURL('http://localhost:3000').catch(err => {
            console.error('Error al cargar la URL:', err);
            // Intentar recargar la URL después de un breve retraso
            setTimeout(() => {
                mainWindow.loadURL('http://localhost:3000').catch(err => {
                    console.error('Error al recargar la URL:', err);
                });
            }, 2000); // Retraso de 2 segundos
        });
    }, 2000); // Retraso de 2 segundos
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
