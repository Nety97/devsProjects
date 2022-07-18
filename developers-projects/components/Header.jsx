export default function Header (){
    return(
        <div className="header">
            <h1>Devs projects</h1>
            <h2>A list of Developer Projects.</h2>
            <a href={`https://github.com/Nety97/devsProjects`} target='_blank' rel='noopener noreferrer'>
                <p>Upload you project</p>
            </a>
        </div>
    )
}