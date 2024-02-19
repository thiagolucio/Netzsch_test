import { RiUserFollowFill } from "react-icons/ri";

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <div className="w-auto py-5 px-10 bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-3 rounded-xl flex justify-center items-center">
      <RiUserFollowFill className="text-white fill-white text-2xl mr-1" />
      <span className="text-white">{message}</span>
    </div>
  );
};

export default SuccessMessage;