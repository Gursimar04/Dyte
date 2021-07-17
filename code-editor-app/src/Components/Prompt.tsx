import './Prompt.scss'

const Prompt:React.FC= ()=>{
  return (
    <div className="prompt">
        <div className="topBorder"/>
        <div className = "name">
            Project Name:
        </div>
        <input value ="untitled"/>
    </div>
  );
}

export default Prompt;