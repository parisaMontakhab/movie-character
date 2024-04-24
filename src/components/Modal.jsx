import { XCircleIcon } from "@heroicons/react/16/solid";


export default function Modal({title,children,onOpen,open,favourites}) {
  if(!open) return null;
  return (
    <div className="backdrop" >
        <div className="modal">
            <div className="modal__header">
                <h2 className="title">{title}</h2>
                <button onClick={()=>onOpen(false)}>
                    <XCircleIcon className="icon close"/>
                </button>

            </div>
           {
           favourites.length=== 0 ? (<p style={{color:"var(--slate-200)"}}>please add to favourite</p>) :
           children
           }
        </div>
        
    </div>
  )
}
