import { ReactElement } from "react";
import { CTA } from "../types/types";

interface IconCardProps {
  icon: ReactElement<any, any>;
  description: string;
  heading?: string;
  cta?: CTA;
  textColor?: string;
  iconColor?: string;
}

const IconCard = ({
  icon,
  description,
  heading,
  cta,
  textColor,
  iconColor,
}: IconCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-36 lg:w-48 my-10">
      <div
        className={`${
          iconColor ? iconColor : ""
        } flex justify-center items-center rounded-full w-40 h-40 border-2 border-white p-5`}
      >
        {icon}
      </div>
      <div className={`${textColor ? textColor : ""} mt-5 text-center`}>
        <p className={`text-xl mb-3`}>{description}</p>
        {cta ? (
          <a href={cta.link}>
            <p className="">
              <i>{cta.text}</i>
            </p>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default IconCard;
