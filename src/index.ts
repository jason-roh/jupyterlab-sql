import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-sql extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-sql:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-sql is activated!');
  }
};

export default plugin;
