import UserInfo from "./UserInfo";

interface TestimonialCardProps {
  name: string;
  username: string;
  profileImg: string;
  content: string;
}

const TestimonialCard = ({ name, username, profileImg, content }: TestimonialCardProps) => {
  return (
    <article
      className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      tabIndex={0}
      aria-label={`Post by ${name}`}
    >
      {/* User Information */}
      <UserInfo name={name} username={username} profileImg={profileImg} />
      
      {/* Comment Text */}
      <p className="font-normal text-base text-neutral-600">
        {content}
      </p>
    </article>
  );
};

export default TestimonialCard;
