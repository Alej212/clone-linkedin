import { Icon } from "@iconify/react"
import { Li } from "./Li"
import { Search } from "./Search"

export const Navbar = () => {
  return (
    <nav className="bg-slate-950 h-20 flex justify-evenly items-center">
      <Search>
        <Icon icon="cib:linkedin" className="text-white" fontSize={'2.5rem'}></Icon>
      </Search>
      <ul className="h-full max-w-max flex flex-row gap-8 justify-center items-center text-white font-semibold">
        <Li>
          <span className="hidden lg:block">Home</span>
          <Icon icon="ci:house-01" fontSize={'1.4rem'} />
        </Li>
        <Li>
          <span className="hidden lg:block">My network</span>
          <Icon icon="iconoir:network" fontSize={'1.4rem'} />
        </Li>
        <Li>
          <span className="hidden lg:block">Jobs</span>
          <Icon icon="pajamas:work" fontSize={'1.4rem'} />
        </Li>
        <Li>
          <span className="hidden lg:block">Messaging</span>
          <Icon icon="lucide:messages-square" fontSize={'1.4rem'} />
        </Li>
        <Li>
          <span className="hidden lg:block">Notifications</span>
          <Icon icon="material-symbols:notifications-outline" fontSize={'1.4rem'} />
        </Li>
        <ul>
          <Li hasBorder>
            <span className="hidden lg:block">For business</span>
            <Icon icon="ep:menu" fontSize={'2rem'}></Icon>
          </Li>
        </ul>
      </ul>
    </nav>
  )
}
