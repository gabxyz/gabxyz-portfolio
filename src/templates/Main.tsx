import { ReactNode } from "react";

import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";
import { ThemeChanger } from "@/components/DarkModeBtn";

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto max-w-screen-xl">
        <div className="border-b border-stone-400">
          <div className="flex-row items-center justify-between md:flex">
            <div className="mx-8 mt-4 pt-14 pb-4">
              <div className="cursor-default text-center text-3xl font-bold text-slate-900 ">
                {AppConfig.title}
              </div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="mx-4 mb-4 md:mx-8">
                <ThemeChanger />
              </div>
              <ul className="hidden flex-wrap justify-end text-lg md:flex">
                <li className="mr-8">
                  <Link href="/">
                    <a className="border-none text-zinc-900 hover:text-stone-500">
                      Home
                    </a>
                  </Link>
                </li>

                <li className="mr-8">
                  <Link href="/portfolio/">
                    <a className="border-none text-zinc-900 hover:text-stone-500">
                      Portfolio
                    </a>
                  </Link>
                </li>

                <li className="mr-8">
                  <Link href="/about/">
                    <a className="border-none text-zinc-900 hover:text-stone-500">
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content mx-8 py-5 text-lg">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
