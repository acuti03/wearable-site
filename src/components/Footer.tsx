/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OY8i6nhR960
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import logoString from "@/assets/icon.jpeg";
import { Separator } from "@/components/ui/separator";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="z-1 container-footer flex h-1/6 w-full flex-col items-center bg-background/30 p-5 px-[13%] pt-16 backdrop-blur-sm">
      <div className="mb-10 flex h-full w-10/12 items-center justify-between">
        <div className="flex flex-col">
          <div className="flex h-full translate-y-[-100%] items-center">
            <img className="size-10 rounded-full" src={logoString} alt="logo" />
            <h1 className="ml-3 text-3xl font-bold">Wearable</h1>
          </div>
          <div className="ml-10 flex gap-3 pt-5">
            <a href="#">
              <BsFacebook className="size-5" />
            </a>
            <a href="#">
              <BsTwitter className="size-5" />
            </a>
            <a href="#">
              <BsInstagram className="size-5" />
            </a>
            <a href="#">
              <BsDribbble className="size-5" />
            </a>
            <a href="#">
              <BsGithub className="size-5" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-around gap-16 text-slate-400">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">ABOUT</h3>
            <div className="flex flex-col gap-1">
              <a href="#" className="font-light hover:underline">
                About us
              </a>
              <a href="#" className="font-light hover:underline">
                Contact us
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">FOLLOW US</h3>
            <div className="flex flex-col gap-1">
              <a href="#" className="font-light hover:underline">
                Github
              </a>
              <a href="#" className="font-light hover:underline">
                Discord
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">LEGAL</h3>
            <div className="flex flex-col gap-1">
              <a href="#" className="font-light hover:underline">
                Privacy policy
              </a>
              <a href="#" className="font-light hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex w-full items-center justify-center p-5">
        <p className="text-center text-sm font-light">
          © 2024 Wearable. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
