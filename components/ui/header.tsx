import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="  w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.gray.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.gray.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="mx-auto">
          {/* <div className="relative flex items-center justify-between gap-x-2 h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow"> */}
          <div className="relative flex items-center justify-between gap-x-2 h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-900/70 rounded-lg px-3 ">
            {/* Border with dots in corners */}
            {/* <div
              className="absolute -inset-1.5 bg-gray-500/15 dark:bg-gray-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            /> */}
            {/* Site branding */}
            <div className="flex-1">
              {/* Logo */}
              <Link href="/">
                <div className="flex flex-row items-center space-x-1">
                <svg
                  aria-labelledby="icon-gallery-logo"
                  role="img"
                  viewBox="0 0 240	240 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                >
                  <title id="icon-gallery-logo">
                    A custom curated gallery by Icon Gallery
                  </title>
                  <path
           
                    fill="white"
                    stroke="rgba(255,255,255,0.5)"
                    d="M120,30c-49.7,0-90,40.3-90,90s40.3,90,90,90s90-40.3,90-90S169.7,30,120,30L120,30z M121.2,52.5
		c6,0.1,12-0.4,17.9-1.5v2.3c-3.2,0.9-5.8,3.7-8,8.2c-0.3,0.6-0.5,1.2-0.7,1.8c-0.7,0-1.3,0-2,0c-2.5,0-4.9,0.1-7.2,0.3V52.5z
		 M97.3,51c6.6,0.9,12.5,1.4,17.8,1.5v12c-2.8,0.6-5.6,1.4-8.2,2.4c-0.2-1.2-0.6-2.4-0.9-3.6c-1.7-5.1-4.6-8.5-8.6-10V51H97.3z
		 M65.3,121c0-10.5,2.1-19.3,6.4-26.5c3.6-6.4,8.7-12,14.7-16.1c-8,11.3-11.9,25.6-11.9,42.8c0.1,5.8,0.6,11.6,1.4,17.3
		c0.9,7.4,3.7,15,8.4,23C71.6,151.6,65.3,138.1,65.3,121L65.3,121z M150.5,168.1c-6.6,2.8-13.6,4.8-20.7,5.9c0.3,1.4,0.8,2.7,1.4,4
		l0,0c2.3,4.5,4.9,7.4,7.8,8.6v2.3c-5.9-1.1-11.9-1.6-17.9-1.5v-108c2.3-0.3,4.6-0.5,6.9-0.4l0,0c-0.2,3.4-0.3,7.3-0.3,11.5v61.1
		c0,3.9,0.1,7.5,0.3,10.6c0.1,1.5,0.2,2.9,0.4,4.2c5.5-0.8,9.5-2.7,12.2-5.8c1.2-2.2,1.8-6.1,1.8-11.9v-13.1
		c0-9.4-3.5-14.9-10.4-16.3v-1.8c2.4,0.1,5.8,0.3,10.1,0.6c3.3,0.3,6.1,0.5,8.3,0.6L150.5,168.1z M149.3,80.9c-5.8-4-12.8-6-20.9-6
		h-0.3c-2.3,0-4.6,0.1-6.9,0.4c-2.1,0.2-4.1,0.6-6.1,1.2c-2.4,0.6-4.7,1.5-6.9,2.7C96.1,85.7,90,99.4,90,120.5
		c0,22.9,5.9,37.3,17.8,43.3c0.1-1.4,0.2-3,0.3-4.6c0.2-4.1,0.3-8.9,0.3-14.2V87.7c0-1.3,0-2.6,0-3.8c2.1-1.3,4.3-2.4,6.7-3.1v106.7
		c-6,0.2-11.9,0.7-17.8,1.5v-2.3c4.1-1.7,7-5.4,8.7-11v-0.1c0.4-1.3,0.7-2.7,0.9-4.1c-5.3-2.1-10-5.3-13.8-9.5
		c-4.1-4.6-7-10.1-8.7-16c-2-7.3-3-14.9-2.9-22.5c0-27.8,8.7-45.2,26-52.3c2.4-1,5-1.8,7.6-2.3c2-0.4,4.1-0.8,6.1-1
		c2.4-0.2,4.8-0.4,7.2-0.4h1c11,0.1,22,2,32.4,5.8c0,6.1,0.1,10.7,0.3,14c0.2,2.8,0.3,6.2,0.3,10.3h-2C159,90.8,155,84.8,149.3,80.9
		z M174.7,119.2c-5.9,2.4-8.9,8.8-8.9,19.2v24.9c-1.3,0.3-2.6,0.7-3.8,1.2c-0.9,0.2-1.7,0.5-2.5,0.8c-0.7,0.3-1.2,0.4-1.7,0.6v-47.2
		c3.1-0.1,6-0.3,8.6-0.6c4.2-0.4,7-0.6,8.3-0.6L174.7,119.2L174.7,119.2z"
                  ></path>
                </svg>
                <p>Icon Gallery Viewing Room</p>
                </div>
              </Link>
            </div>
           
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center sm:gap-x-3 text-sm font-medium">
                <li className="text-gray-800 dark:text-gray-400 "> Gallery curated for:</li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/30 py-1.5 px-3 uppercase"
                    href="/collection-one"
                  >
                    David Lobato
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3 uppercase"
                    href="/collection-two"
                  >
                    Jeff Meleski
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </li> */}
              </ul>
            </nav>

            {/* Light switch */}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
