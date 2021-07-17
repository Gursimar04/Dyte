import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCode } from '@fortawesome/free-solid-svg-icons'
import './Project.scss'

interface project{
  "name":string;
  "html":string;
  "css":string;
  "js":string;
}

interface props{
  pr: project
  viewFile: (value:string) => void;
}
const FileExplorer:React.FC<props>= ({pr,viewFile})=>{
  return (
    <div className="pr">
        <div className = "fileName">
          <FontAwesomeIcon icon = {faFile}/>
          <div className="name">{pr.name}</div>
        </div>        
        <div className = "files">
            <div onClick ={()=>{viewFile("html")}} className="file"> 
              <FontAwesomeIcon icon = {faCode}/> 
              <div className="fileName">index.html</div>
            </div>
            <div onClick ={()=>{viewFile("css")}} className="file"> 
              <FontAwesomeIcon icon = {faCode}/> 
              <div className="fileName">index.css</div>
            </div>
            <div onClick ={()=>{viewFile("js")}} className="file"> 
              <FontAwesomeIcon icon = {faCode}/> 
              <div className="fileName">index.js</div>
            </div>
        </div>
    </div>
  );
}

export default FileExplorer;