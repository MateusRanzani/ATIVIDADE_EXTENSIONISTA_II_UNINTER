import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const NavBar: NextPage = (props) => {
  const { data: session, status } = useSession();

  return (
    <nav>
      <div className="navBar flex justify-between items-center border-b-[1px] border-[#e6e5e5]">
        <div className="flex items-center">
          <div>
            <Link href="/">
              <div className="icon--logo">
                <Image
                  loader={myLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={60}
                  height={45}
                />
              </div>
            </Link>
          </div>

          <div className="mr-10">
            <Link href="/events">
              <a className="--button">EVENTOS</a>
            </Link>
          </div>
          <div className="mr-10">
            <Link href="/news">
              <a className="--button">NOTÍCIAS</a>
            </Link>
          </div>
        </div>
        {!session && (
         <button
         className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
         onClick={() => signIn('auth0')}
       >
         Login
       </button>
        )}
        {session && (
          <div>
            <Link href="/profile">
              <a className="text-[#DF3A3A]" onClick={() => signOut()}>
                SAIR
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const myLoader = ({ src, width, quality }: any) => {
  return "/assets/logoGreen.png";
};

export default NavBar;
