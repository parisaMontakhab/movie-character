import { XCircleIcon } from "@heroicons/react/16/solid";


export default function Modal({title,children}) {
  return (
    <div className="backdrop" onClick={()=>onOpen(false)}>
        <div className="modal">
            <div className="modal__header">
                <h2 className="title">{title}</h2>
                <button onClick={()=>onOpen(false)}>
                    <XCircleIcon className="icon close"/>
                </button>

            </div>

        </div>
        {children}
    </div>
  )
}
