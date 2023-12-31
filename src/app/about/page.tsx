import { type Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Me",
}

export default function AboutPage() {
  return (
    <main className="z-10 flex min-h-screen flex-col px-6 py-24 text-light-900">
      <div className="relative flex flex-grow flex-col items-center justify-center gap-8">
        <h1 className="max-w-[300px] animate-slide-down font-dm-serif-display text-4xl opacity-0 animation-delay-100">
          Hello there!
        </h1>
        <p className="max-w-2xl animate-slide-down text-center text-lg text-light-100 opacity-0 animation-delay-150">
          I'm charliee, a Software Developer and Designer from the UK. I'm
          non-binary and go by they/them, and I'm neurodivergent.
        </p>
        <p className="max-w-2xl animate-slide-down text-center text-lg text-light-100 opacity-0 animation-delay-200">
          Around 2 years ago, I began with HTML and CSS. Now, my toolkit
          includes React, Next.js, Tailwind CSS, and more. I enjoy combining
          design and code to build clean and modern websites.
        </p>
        <div className="flex gap-4 text-light-100">
          <Link
            href={"https://github.com/notcharliee"}
            className="flex animate-slide-down justify-center opacity-0 duration-300 animation-delay-[250ms] hover:text-light-900"
          >
            {GitHubSVG}
          </Link>
          <Link
            href={"https://discord.com/users/764138386709544971"}
            className="flex animate-slide-down justify-center opacity-0 duration-300 animation-delay-[350ms] hover:text-light-900"
          >
            {DiscordSVG}
          </Link>
          <Link
            href={"https://twitter.com/notchxrliee"}
            className="flex animate-slide-down justify-center opacity-0 duration-300 animation-delay-[450ms] hover:text-light-900"
          >
            {TwitterSVG}
          </Link>
          <Link
            href={"https://tiktok.com/@_notcharliee"}
            className="flex animate-slide-down justify-center opacity-0 duration-300 animation-delay-[350ms] hover:text-light-900"
          >
            {TikTokSVG}
          </Link>
          <Link
            href={"https://youtube.com/@notcharliee"}
            className="flex animate-slide-down justify-center opacity-0 duration-300 animation-delay-[250ms] hover:text-light-900"
          >
            {YouTubeSVG}
          </Link>
        </div>
      </div>
    </main>
  )
}

// SVG Files

const GitHubSVG = (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <title>github</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
)

const DiscordSVG = (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <title>discord</title>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
  </svg>
)

const TwitterSVG = (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <title>twitter</title>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
  </svg>
)

const TikTokSVG = (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <title>tiktok</title>
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
  </svg>
)

const YouTubeSVG = (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 576 512"
  >
    <title>youtube</title>
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
  </svg>
)
