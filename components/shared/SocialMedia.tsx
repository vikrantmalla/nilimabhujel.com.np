import { PageData } from "@/types/data";
import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const ExternalLink = ({ href, children, label }: any) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className="inline-flex items-center justify-center text-center w-[50px] h-[50px] text-base border border-black rounded-full no-underline shadow-md lg:transition-transform lg:hover:-translate-y-2 bg-white  hover:bg-[#8986C2] text-black hover:text-white hover:border-[#8986C2]"
  >
    {children}
  </a>
);

const SocialMedia = ({ pages }: PageData.Data) => {
  return (
    <div className="flex justify-center gap-8 my-10">
      <ExternalLink
        href={`${pages[0].contact.behanceLink}`}
        label="Behance"
      >
        <FaBehance size={20} />
      </ExternalLink>
      <ExternalLink href={`${pages[0].contact.dribbbleUrl}`} label="Dribbble">
        <FaDribbble size={20} />
      </ExternalLink>
      <ExternalLink
        href={`${pages[0].contact.linkedinUrl}`}
        label="Linkedin"
      >
        <FaLinkedinIn size={20} />
      </ExternalLink>
    </div>
  );
};

export default SocialMedia;
