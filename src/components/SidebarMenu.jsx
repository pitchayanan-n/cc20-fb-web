import { Link } from "react-router";
import {
  BookmarkIcon,
  ClockIcon,
  DropdownArrow,
  FriendsIcon,
  GroupIcon,
  MediaIcon,
} from "../icons";
import useUserStore from "../stores/userStore";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

function SidebarMenu() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:hidden">
      <Link to="/profile">
        <MenuItem
          icon={Avatar}
          text={`${user.firstName} ${user.lastName}`}
          className="w-11 h-11 rounded-full bg-slate-200"
          imgSrc={user.profileImage}
        />
      </Link>
      <Link to="/friends">
        <MenuItem icon={FriendsIcon} text="Friends" className="w-11" />
      </Link>
      <MenuItem icon={ClockIcon} text="Memories" className="w-10" />
      <MenuItem icon={BookmarkIcon} text="Save" className="w-10" />
      <MenuItem icon={GroupIcon} text="Group" className="w-10" />
      <MenuItem icon={MediaIcon} text="Video" className="w-10" />
      <MenuItem icon={DropdownArrow} text="More.." className="w-10" />
    </div>
  );
}
export default SidebarMenu;
