import { useState } from "react";
import { PhotoIcon2 } from "../icons";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import AddPicture from "./AddPicture";

function PostForm() {
  const user = useUserStore((state) => state.user);
  const [addPic, setAddPic] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-center">Create Post</h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className="w-11 rounded-full" imgSrc={user.profileImage} />
        <div className="flex flex-col">
          <div className="text-sm">
            {user.firstName} {user.lastName}
          </div>
          <select className="select bg-slate-200 select-xs max-w-xs">
            <option disabled>Who can see?</option>
            <option>Public</option>
            <option>Friends</option>
          </select>
        </div>
      </div>
      <textarea
        className="textarea textarea-ghost w-full"
        placeholder={`What do you think? ${user.firstName}`}
      ></textarea>
      {addPic && <AddPicture />}
      <div className="flex justify-between border rounded-lg p-2 items-center cursor-pointer">
        <p>Add with your post</p>
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-110"
          onClick={() => setAddPic((prv) => !prv)}
        >
          <PhotoIcon2 className="w-7" />
        </div>
      </div>
      <button className="btn btn-sm btn-primary">Create Post</button>
    </div>
  );
}
export default PostForm;
