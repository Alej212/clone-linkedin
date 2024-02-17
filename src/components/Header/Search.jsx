import { Icon } from "@iconify/react";

export const Search = ({children}) => {
  return (
    <div className="h-min flex gap-4">
        <div>
            {children}
        </div>
        <form action="" className="hidden md:block">
            <input type="text" placeholder="Search" className="h-full rounded-sm pl-4" />
        </form>
    </div>
  )
}
