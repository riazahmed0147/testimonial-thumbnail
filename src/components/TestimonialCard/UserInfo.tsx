interface UserInfoProps {
  name: string;
  username: string;
  profileImg: string;
}


const UserInfo = ({ name, username, profileImg }: UserInfoProps) => {
  return (
    <header 
      className="flex items-center gap-4 self-stretch"
      aria-label={`User profile of ${name}`}  
    >
      <div className="w-12 h-12">
        <img
          src={profileImg}
          alt={`Profile picture of ${name}`}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-px grow">
        <span className="font-semibold text-lg text-neutral-900">
          {name}
        </span>
        <span className="font-normal text-sm text-neutral-600">
          @{username}
        </span>
      </div>
    </header>
  );
};

export default UserInfo;
