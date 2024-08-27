import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { FaDiscord } from "react-icons/fa";
import { url } from "inspector";
export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#4B57DB" }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="min-h-screen flex flex-col">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            height: "70vh",
          }}
        />

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center p-4 bg-transparent">
          <div className="flex items-center">
            <FaDiscord className="text-white size-9 mr-2" />
            <span className="text-white text-lg font-semibold">Discord</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {[
                "Download",
                "Nitro",
                "Veiligheid",
                "Ondersteuning",
                "Blog",
                "Careers",
              ].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">
                    {item}
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-white text-[#4B57DB] hover:bg-gray-200">
            Login
          </Button>
        </header>

        {/* Main content */}
        <main className="flex-grow flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              IMAGINE A PLACE...
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="space-x-4">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Download for Windows
              </Button>
              <Button className="bg-[#23272A] text-white hover:bg-gray-700 px-8 py-4">
                Open Discord in your browser
              </Button>
            </div>
          </div>
        </main>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}

        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>
    </main>
  );
}
