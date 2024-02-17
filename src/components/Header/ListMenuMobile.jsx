import { Icon } from "@iconify/react";

export const ListMenuMobile = () => {
  const className = 'flex flex-col-reverse gap-1 justify-center items-center';

  return (
    <ul className="
    md:hidden
    flex flex-row pt-5 pb-5 justify-around items-center text-white font-semibold
    ">
      <li className={className}>
        <Icon icon="ci:house-01" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <Icon icon="iconoir:network" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <Icon icon="pajamas:work" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <Icon icon="lucide:messages-square" fontSize={'1.4rem'} />
      </li>
      <li className={className}>
        <Icon icon="material-symbols:notifications-outline" fontSize={'1.4rem'} />
      </li>
    </ul>
  )
}
