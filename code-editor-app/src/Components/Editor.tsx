import './Editor.scss';
import Prism from "prismjs";
import { useState,useEffect } from 'react';

interface props{
  savedContent:string;
  saveContent:(value:string)=>void
  filePath:string
  fileType:String
  codeInputRef: React.RefObject<HTMLTextAreaElement>;
  codeOutputRef: React.RefObject<HTMLParagraphElement>;
}

const Editor:React.FC<props> = ({savedContent,saveContent,filePath,fileType,codeInputRef,codeOutputRef})=>{
  const [content,setContent] = useState(savedContent);

  const whenEdited = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
      let value = content,
      selStartPos = codeInputRef!.current!.selectionStart;

    if (evt.key === "Tab") {
      value =
        value.substring(0, selStartPos) +"    " + value.substring(selStartPos, value.length);
        codeInputRef!.current!.selectionStart = selStartPos + 3;
        codeInputRef!.current!.selectionEnd = selStartPos + 4;
      evt.preventDefault();

      setContent(value);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {saveContent(content);}, 1200)
    return () => clearTimeout(timer)
   },[saveContent,content,filePath])

   useEffect(() => {
    setContent(savedContent);
   },[savedContent])

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);


  return (
    <div className="editor">
        <div className="path">{filePath}</div>
        <textarea ref = {codeInputRef} className= "code-input"
                  value={content}
                  onChange={evt => setContent(evt.target.value)}
                  onKeyDown = {whenEdited}
        />
        <div ref = {codeOutputRef} className="code-output">
          <pre>
            <code className = {`language-${fileType}`} >{content}</code>
        </pre>
        </div>
    </div>
  );
}

export default Editor;