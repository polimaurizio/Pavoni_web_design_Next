import React from "react";
import classNames from "classnames";
import Divider from "../Divider";
import Link from "next/link";

const CustomButton = ({ href, children, className }) => {
  let classes = classNames(
    "flex pt-20 font-montserrat font-light text-base",
    className
  );

  return (
    <div className={classes}>
      <Link href={href}>
        <div className={"button flex items-center cursor-pointer"}>
          <svg
            width="33"
            height="33"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19.5" cy="19.5" r="19.5" fill="#D9D9D9" />
            <path
              d="M18 14L23 19.5L18 25"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className={"pl-3 overflow-hidden"}>
            <p className="text-primary">{children}</p>
            <Divider />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CustomButton;
