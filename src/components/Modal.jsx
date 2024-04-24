import { XCircleIcon } from "@heroicons/react/16/solid";


export default function Modal({title,children}) {
  return (
    <div className="backdrop">
        <div className="modal">
            <div className="modal__header">
                <h2 className="title">{title}</h2>
                <button>
                    <XCircleIcon className="icon close"/>
                </button>

            </div>

        </div>
        {children}
    </div>
  )
}
