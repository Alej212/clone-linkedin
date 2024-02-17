import { Icon } from "@iconify/react"

export const List = () => {
  const className = 'flex flex-col-reverse gap-1 justify-center items-center';

  return (
    <ul className="
    hidden
    (md:h-full md:max-w-max md:flex md:flex-row md:gap-8 md:justify-center md:items-center md:text-white md:font-semibold)
    ">
      <li className={className}>
        <span className="hidden lg:block">Home</span>
        <Icon icon="ci:house-01" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <span className="hidden lg:block">My network</span>
        <Icon icon="iconoir:network" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <span className="hidden lg:block">Jobs</span>
        <Icon icon="pajamas:work" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <span className="hidden lg:block">Messaging</span>
        <Icon icon="lucide:messages-square" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <span className="hidden lg:block">Notifications</span>
        <Icon icon="material-symbols:notifications-outline" fontSize={'1.4rem'} />
      </li>
    </ul>
  )
}

