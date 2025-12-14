"use client";
import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs</title>
        <meta name="description" content="Explore CodeBucks's Next.js developer portfolio..." />
      </Head>

      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          
          <div className="flex w-full items-center justify-between lg:flex-col gap-8">
            
            {/* LEFT SIDE: CSS Animated "HEY MATE" */}
            <div className="w-1/2 md:w-full lg:w-full flex justify-center overflow-hidden">
              
              {/* Apply the CSS class 'crash-in' here */}
              <span className="crash-in inline-block font-black text-9xl md:text-8xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-dark to-gray-500 dark:from-light dark:to-gray-400">
                HEY MATE
              </span>

            </div>

            {/* RIGHT SIDE: Text Content */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Making ordinary ideas into extraordinary."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs lg:text-center">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="mailto:heymatte.studio@gmail.com"
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base"
                >
                  Contact <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
              </div>
            </div>

          </div>
        </Layout>

        <HireMe />
        
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Codebucks"
          />
        </div>
      </article>

      {/* --- CSS STYLES --- */}
      <style jsx>{`
        /* 1. Define the Crash Animation */
        @keyframes crashEffect {
          0% {
            opacity: 0;
            transform: scale(10); /* Start Huge */
          }
          100% {
            opacity: 1;
            transform: scale(1); /* End Normal */
          }
        }

        /* 2. Create the class */
        .crash-in {
          /* Using a cubic-bezier to mimic a "Spring" bounce */
          animation: crashEffect 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </>
  );
}