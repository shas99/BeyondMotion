"use client";

import Head from "next/head";
import Link from "next/link";
import CssTextFadeIn from "@/components/CssTextFadeIn";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hey mate</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio..."
        />
      </Head>

      <article className="flex min-h-screen w-full text-dark dark:text-light">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            items-center
            justify-center
            gap-6
            px-4
            sm:px-6
            lg:px-8
            sm:items-start
            sm:justify-start
            sm:pt-24
          "
        >
          {/* BIG TITLE */}
          <CssTextFadeIn
            text="hey mate."
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 8rem)",
            }}
          />
          <CssTextFadeIn
            text="Making ordinary ideas into extraordinary."
            className="
              leading-snug
              font-medium
              opacity-75
              max-w-full
              sm:max-w-3xl
              text-center
            "
            style={{
              fontSize: "clamp(0.9rem, 3vw, 2rem)"
            }}
          />

          <div className="mt-4 flex items-center">
            <Link
              href="mailto:heymatte.studio@gmail.com"
              className="
                flex items-center
                rounded-lg
                border-2 border-solid
                bg-dark
                px-5 py-2
                text-base font-semibold
                capitalize
                text-light
                transition-all
                hover:border-dark hover:bg-transparent hover:text-dark
                dark:bg-light dark:text-dark
                dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                sm:px-6 sm:text-lg
              "
            >
              Contact
              <LinkArrow className="ml-2 w-5 sm:w-6" />
            </Link>
          </div>

          <HireMe />
        </div>
      </article>

      <style jsx>{`
        @keyframes crashEffect {
          0% {
            opacity: 0;
            transform: scale(8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .crash-in {
          animation: crashEffect 0.8s
            cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </>
  );
}
