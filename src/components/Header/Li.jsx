export const Li = ({children, hasBorder = false}) => {

    return (
        <li className={`
        flex flex-col-reverse gap-1 items-center
        ${ hasBorder ? 'border-l-2 pl-2 border-white' : ''}
        `}>
          {children}
        </li>
    )
}

