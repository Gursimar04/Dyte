import { useEffect,useState } from 'react';
import './View.scss';
import InnerHTML from 'dangerously-set-html-content'

interface props{
  viewRef: React.RefObject<HTMLParagraphElement>;
  resizerRef: React.RefObject<HTMLParagraphElement>;
  onMouseDown: ()=>void;
  html:string;
  js:string;
  css:string;
}
const View: React.FC<props>= ({viewRef, resizerRef, onMouseDown,html,js,css})=>{
  const [syntax,setSyntax] = useState("<html><head><title>Project1</title><style></style></head><body><script></script></body></html>");
useEffect(() => {

  if(html && css){
    let set = "<html><head><title>Project1</title><style>";
    if(css !== "//Type you css code here")
      set+= css;
    
    set+="</style></head><body>";

    if(html!=="//Type you html body here")
      set+=html;


    if(js && js!=="//Type you JS code here"){
      try {
        eval(js);
        set+="<script>";
        set+=js;
        set+="</script>";
      } 
      catch (e) {
        if (e instanceof SyntaxError) {
        }
      }
    }

    set+="</body></html>";
    setSyntax(set);
  }
}, [html,css,js]);

  return (
    <div className = "liveRender" ref = {viewRef}>
        <div ref = {resizerRef} onMouseDown = {onMouseDown} className="resizer"></div>
        <InnerHTML className="border" html={syntax} />
    </div>
  );
}

export default View;