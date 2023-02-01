import createHeader from './header';
import createrEditor from './editor';

const header = createHeader();
const editor = createrEditor();

document.body.appendChild(header);
document.body.appendChild(editor);

if(module.hot) {

  let lastEditor = editor;

  module.hot.accept('./editor.js', () => {
  
    const value = lastEditor.value;
    document.body.removeChild(lastEditor);
    const newEditor = createEditor();
    newEditor.value = value;
    document.body.appendChild(newEditor);
    lastEditor = newEditor;
  })
}