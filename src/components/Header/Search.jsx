import { Icon } from "@iconify/react";

export const Search = () => {
  return (
    <div className="
    h-min flex gap-4
    ">
        <div>
          <Icon icon="cib:linkedin" className="text-white" fontSize={'2.5rem'}></Icon>
        </div>
        <form action="" className="">
            <input type="text" placeholder="Search" className="h-full rounded-sm pl-4" />
        </form>
    </div>
  )
}
