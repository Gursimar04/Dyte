import './FileExplorer.scss';
import Project from './Project';

interface project{
  "name":string;
  "html":string;
  "css":string;
  "js":string;
}

interface props{
  projects: project[];
  viewProject: (value:number) => void;
  viewFile: (value:string) => void;

}
const FileExplorer:React.FC<props>= ({projects,viewProject,viewFile})=>{

    const projectList = ()=>{
    return(
      <div>
        {
          projects.map((e,i) => {
            return(
              <div key={i} onClick={()=>{viewProject(i)}}>
                <Project  pr = {e} viewFile = {viewFile}/>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div className="fileExplorer">
        <div className = "title">Explorer</div>
        {projectList()}
    </div>
  );
}

export default FileExplorer;