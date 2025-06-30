import { SearchIcon } from "../icons";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

function SidebarContact() {
  return (
    <div className="fixed top-14 right-0 p-2 h-full w-[350px] overflow-auto flex flex-col gap-2 max-xl:hidden">
      <div className="flex justify-between text-gray-500">
        <span>Contact</span>
        <div className="flex gap-2">
          <SearchIcon />
          ...
        </div>
      </div>
      <MenuItem
        icon={Avatar}
        text="Arm Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc="https://www.svgrepo.com/show/420350/christmas-clous-santa.svg"
      />
      <MenuItem
        icon={Avatar}
        text="Ham Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc="https://www.svgrepo.com/show/420320/avatar-coffee-cup.svg"
      />
      <MenuItem
        icon={Avatar}
        text="Cake Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc="https://www.svgrepo.com/show/420343/avatar-joker-squad.svg"
      />
    </div>
  );
}
export default SidebarContact;
