import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className=" flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className=" flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className=" text-base text-gray-700">
            worstCars 1999 All rights not reserved
          </p>
        </div>

        <div className=" footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className=" footer__link">
              <h3 className=" font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className=" text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-between items-center border-gray-100 sm:px-16 px-6 py-10 flex-wrap mt-10 border-t">
        <p>adsfadsfasdf;lakdsfjasdlkf</p>

        <div className=" footer__copyrights-link">
          <Link className=" text-gray-500 " href="/">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
