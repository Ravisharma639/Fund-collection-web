import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-4 text-center">
        <div className="font-bold flex gap-2 text-2xl sm:text-3xl md:text-5xl justify-center items-center flex-wrap">
          Mission is to support
          <span>
            <Image src="/collect.gif" alt="Collect" width={58} height={58} />
          </span>
        </div>
        <p className="text-sm sm:text-base">
          Mission to support underprivileged children. Start now!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/login">
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Donate Now
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10" />

      <div className="text-white container mx-auto px-4 pb-32 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14">
          Join Us in Changing Lives — One Child at a Time
        </h2>
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-96 justify-center items-center">
          {[
            {
              src: "man.gif",
              title: "Fund Yourself",
              text: "Help a child’s future with your support.",
            },
            {
              src: "coins-12582.gif",
              title: "Money",
              text: "Every coin counts toward a brighter tomorrow.",
            },
            {
              src: "group-anime.webp",
              title: "People group",
              text: "Make a direct impact on a child’s life.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="space-y-3 flex flex-col items-center text-center max-w-[220px]"
            >
              <img
                className="rounded-full p-1 bg-slate-400"
                src={item.src}
                alt={item.title}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
              <p className="font-bold">{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white h-1 opacity-10" />

      <div className="text-white container mx-auto px-4 pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        <div className="w-full max-w-[90vw] sm:max-w-[560px] aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/figrl0aOULs?si=fn8DEgeb5BSD9xZO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
