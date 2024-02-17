import { Icon } from "@iconify/react"
import { List } from "./List"
import { Search } from "./Search"

export const Navbar = () => {
  return (
    <nav className="bg-slate-950 h-20 flex gap-8 justify-center md:justify-evenly items-center">
      <Search/>
      <List />
      <ul>
        <li className="
        hidden md:text-white
        (md:block md:flex md:flex-col-reverse md:gap-1 md:items-center md:border-l-2 md:pl-2 md:border-white)
        ">
          <span className="hidden lg:block">For business</span>
          <Icon icon="ep:menu" fontSize={'2rem'}></Icon>
        </li>
      </ul>
    </nav>
  )
}
