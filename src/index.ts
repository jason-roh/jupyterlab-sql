import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { ICommandPalette } from '@jupyterlab/apputils';
import { addDBButton } from './widgets/sqlButton';

/**
 * Initialization data for the jupyterlab_apod extension.
 */
function activate(app: JupyterFrontEnd, palette: ICommandPalette, factory: IFileBrowserFactory) {
  console.log('JupyterLab extension jupyterlab_db is activated!');
  const fileBrowser = factory.defaultBrowser;
  addDBButton(fileBrowser);
  console.log('ICommandPalette:', palette);
}

const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_db',
  autoStart: true,
  requires: [ICommandPalette, IFileBrowserFactory],
  activate: activate
};

export default extension;