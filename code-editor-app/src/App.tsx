import { useState,useRef, useCallback, useEffect } from 'react';
import './prism.css'
import './App.scss';
import Editor from './Components/Editor';
import FileExplorer  from './Components/FileExplorer';
import NavBar from './Components/NavBar';
import View from './Components/View';
//import Prompt from './Components/Prompt';

interface project{
  name:string;
  html:string;
  css:string;
  js:string;
}

const App = ()=>{
  const AppRef= useRef<HTMLParagraphElement>(null);
  const codeEditorRef = useRef<HTMLParagraphElement>(null);
  const liveViewRef = useRef<HTMLParagraphElement>(null);
  const resizer = useRef<HTMLParagraphElement>(null);
  const codeInputRef = useRef<HTMLTextAreaElement>(null);
  const codeOutputRef = useRef<HTMLParagraphElement>(null);

  const [projectArray,setProjectArray] = useState<project[]>([]);
  const [currProject,setCurrProject] = useState(0);
  const [currFile,setCurrFile] = useState("");
  const [currContent,setCurrContent] = useState("");
  const[filePath,setFilePath] = useState("");
  const[html,setHtml] = useState("");
  const[css,setCss] = useState("");
  const[js,setJs] = useState("");
  const viewProject = (value:number) => {
    setCurrProject(value);
  }

  const viewFile = (value:string) => {
    setCurrFile(value);
    setFilePath(projectArray[currProject].name+">index."+value);
  }

  const saveContent = (value:string)=>{
    if(currFile === "html"){
      projectArray[currProject].html = value;
    }

    else if(currFile === "css")
      projectArray[currProject].css = value;
    else if(currFile === "js")
      projectArray[currProject].js = value;

      if(projectArray && projectArray[currProject]){
        setHtml(projectArray[currProject].html)
        setCss(projectArray[currProject].css)
        setJs(projectArray[currProject].js)
      }

  }

  useEffect(() => {
    const initialProject:project[] = [
      {
        name: "Project1",
        html: "//Type you html body here",
        css: "//Type you css code here",
        js: "//Type you JS code here"
      },
    ]
    setCurrProject(0);
    setProjectArray(initialProject)
    setCurrFile("html");
    setFilePath(initialProject[0].name+">index.html");
  }, []);

  useEffect(() => {
    if(currFile === "html")
      setCurrContent(projectArray[currProject]?.html)
    else if(currFile === "css")
      setCurrContent(projectArray[currProject]?.css)
    else if(currFile === "js")
      setCurrContent(projectArray[currProject]?.js)
    
    if(projectArray && projectArray[currProject]){
        setHtml(projectArray[currProject].html)
        setCss(projectArray[currProject].css)
        setJs(projectArray[currProject].js)
    }

  }, [currFile,currProject,projectArray]);



  const onMouseDown = useCallback(() =>{
      const onMouseMove: { (event: MouseEvent): void } = (event: MouseEvent) => {
        const rx = resizer.current?.getBoundingClientRect().x;
        const hl = liveViewRef.current?.getBoundingClientRect().height;
        const hc = codeEditorRef.current?.getBoundingClientRect().height;
        const oc = codeOutputRef.current?.getBoundingClientRect().height;
        let move =  event.movementY;
        if(hc!-(5*move)<250){
          if(move<0)
            move= - move;
        }
          resizer!.current!.style.top = `${rx! + move}px`
          liveViewRef!.current!.style.height = `${hl! - move}px`
          codeEditorRef!.current!.style.height = `${hc! + move}px`
          codeInputRef!.current!.style.height = `${oc! + move}px`
          codeOutputRef!.current!.style.height = `${oc! + move}px`

      }

      const onMouseUp = ()=>{
        AppRef!.current!.removeEventListener("mousemove", onMouseMove);
        AppRef!.current!.removeEventListener("mouseup", onMouseUp);
    }

      AppRef!.current!.addEventListener("mousemove", onMouseMove);
      AppRef!.current!.addEventListener("mouseup", onMouseUp);
  },[])

  return (
    <div ref = {AppRef} className="App">
      {/* <Prompt/> */}
      <NavBar/>
      <div className = "project">
        <div ref = {codeEditorRef} className = "codeEditor">
          <FileExplorer projects = {projectArray} viewProject={viewProject} viewFile={viewFile}/>
          <Editor savedContent = {currContent} 
          saveContent = {saveContent} 
          filePath={filePath} 
          fileType={currFile} 
          codeInputRef={codeInputRef} 
          codeOutputRef = {codeOutputRef}/>
        </div>
        <div className = "liveView">
          <View resizerRef = {resizer} viewRef = {liveViewRef} 
          onMouseDown = {onMouseDown}
          html={html}
          js={js} 
          css={css}/>
        </div>
      </div>
    </div>
  );
}

export default App;