import { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import './mail-editor-wrapper.scss';

export default function MailEditorWrapper() {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div className="mail-editor-wrapper">
      <div className="mail-editor-wrapper__commands-bar">
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} minHeight="100vh" onLoad={onLoad} />
    </div>
  );
}
