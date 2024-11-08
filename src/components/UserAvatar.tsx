import { User } from "next-auth";
import { FC } from "react";
import { Avatar } from "./ui/Avatar";
import { AvatarFallback, AvatarProps, Image } from "@radix-ui/react-avatar";
import { Icon } from "lucide-react";
import { Icons } from "./Icons";

interface UserAvatarProps extends AvatarProps{
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...Props}) => {
  return (
    <Avatar {...Props}>
      {user.image ? (
        //if image exists it generates the avatar with square size
        <div>
          <Image
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-4 w-4"/>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
