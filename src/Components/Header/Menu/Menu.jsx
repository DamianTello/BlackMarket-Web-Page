import "./Menu.css"

export const Menu = ({toggleMenu}) => {
  
    return (
            <svg onClick={ toggleMenu }
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                aria-label="Menu"
                className=" menu cursor-pointer hover:text-gray-700 
                            transition-colors max-h-20
                            
                            "
            >
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        
    )
}
