import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/meta';
import React, { useEffect, useRef, useState } from 'react';

const defaultOptions: CodeMirror.EditorConfiguration = {
  mode: 'javascript',
  tabSize: 2,
  showCursorWhenSelecting: true,
  lineNumbers: true,
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

/**
 * NOTE: only use this component in the client side.
 *
 * ex)
 * const Editor = dynamic(() => import('@src/components/Editor'), { ssr: false });
 */
const Editor: React.VFC<Props> = ({ value, onChange }) => {
  const [editor, setEditor] = useState<CodeMirror.EditorFromTextArea>();
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // setup
    if (!editor && ref.current) {
      const instance = CodeMirror.fromTextArea(ref.current, defaultOptions);
      instance.setValue(value);
      instance.on('change', instance => {
        onChange(instance.getValue());
      });
      setEditor(instance);
    }
  }, [editor, onChange, value]);

  return <textarea ref={ref} rows={0} />;
};

export default Editor;
