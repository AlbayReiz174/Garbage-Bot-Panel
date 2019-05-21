const {app, BrowserWindow} = require('electron');
let mainWindow;
function createWindow () {
	mainWindow = new BrowserWindow{width: 410, hight, 300} //sorunlu burası
	mainWindow.loadFile('panel.html');
	mainWindow.setMenu(null)
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
};
app.on('redy', createWindow);
app.on('window-all-closed', function () {
	if (process.platform !=='darwin') {
		app.quit();
	};
});
app.on('activate', function () {
	if (mainWindow === null)  {
		createWindow();
	};
 });


//bu kadardı  şidmi panele bakalım
//oldu 
