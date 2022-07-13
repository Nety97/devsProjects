

import PopOver from "./PopoOver"


export default function Boxes({data}) {


 return(
     <div>
         
         <div className='container'>
             
            
            {data ? data.map((x, y)=>{
                
                return <div className="box" style={{height: '50px', width: '50px', backgroundColor: (x.backgroundColor)}} key={y}>
                            { }
                           
                                <a target="_blank" href={x.projectURL} rel="noopener noreferrer">
                                 {/* <span>{x.emoji}</span> */}
                                 <PopOver projectName={x.projectName} emoji={x.emoji} description={x.shortDescription} developer={x.developerName}/>
                                </a>
                           
                        </div>
            })
        : null}
         </div>
     </div>
 )   
}