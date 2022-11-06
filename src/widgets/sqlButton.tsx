import {
    ReactWidget,
    ToolbarButtonComponent
  } from '@jupyterlab/apputils';
  import { FileBrowser } from '@jupyterlab/filebrowser';
  import * as React from 'react';
  import { dbIcon } from '../style/icons';
  
  export function addDBButton(
    filebrowser: FileBrowser
  ): void {
    filebrowser.toolbar.addItem(
      'dbClone',
      ReactWidget.create(
        <ToolbarButtonComponent
        enabled={true}
        icon={dbIcon}
        onClick={() => {
          alert('You did it!');
        }}
        tooltip={'DB Connection'}
      />
      )
    );
  }