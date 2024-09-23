export const Button = ({content, extraClasses, onClick}) => {

    return <button className={"flex items-center justify-center border-2 rounded-md w-4/5 max-w-full min-w-12 px-4 mr-0 cursor-pointer hover:text-customYellow my-1 whitespace-nowrap truncate text-base sm:min-w-12" + extraClasses} onClick={onClick}>{content}</button>
}