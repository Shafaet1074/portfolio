
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed md:visible invisible left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center bg-[#1F3239] text-white p-4 space-y-4">
      <SocialLink icon={<FaLinkedin size={30} />} name="LinkedIn" link="https://www.linkedin.com/in/shafaet-hossain-alif-b99808180/" />
      <SocialLink icon={<FaGithub size={30} />} name="GitHub" link="https://github.com/Shafaet1074" />
      <SocialLink icon={<FaEnvelope size={30} />} name="Email" link="mailto:hossainshafaet63@gmail.com" />
      <SocialLink icon={<FaFacebook size={30} />} name="Facebook" link="https://www.facebook.com/shafahet.hossain.9" />
    </div>
  );
};

const SocialLink = ({ icon, name, link }) => {
  return (
    <div className="relative group w-10">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 transition-all duration-300 transform-gpu group-hover:w-32 bg-gray-900 rounded-md">
        <span className="absolute left-12 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm px-2 py-1 rounded-md transition-opacity duration-300">{name}</span>
        {icon}
      </a>
    </div>
  );
};

export default Sidebar;
