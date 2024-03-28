import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/mysten_labs?lang=en"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-black px-7 py-2 transition-colors hover:opacity-70"
        >
          <Twitter className="text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-white">
            Follow us on X.com
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
            <span className={"text-red-500"}>Web3</span> Mini Games by Mysten Labs
        </h1>
          <p
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          A collection of mini games, to inspire the community of Sui.
        </p>
        <div
            className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{animationDelay: "0.3s", animationFillMode: "forwards"}}
        >
          <a
              className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              href="https://github.com/steven-tey/precedent"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Github/>
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        {features.map(({title, description, demo, large}) => (
            <Card
                key={title}
                title={title}
                description={description}
                demo={
                  title === "Beautiful, reusable components" ? (
                      <ComponentGrid/>
                  ) : (
                      demo
                  )
                }
                large={large}
            />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Blackjack",
    description:
      "A classic card game, where the goal is to beat the dealer by getting as close to 21 as possible without going over.",
    demo: (
      <a href={'https://blackjack-sui.vercel.app/'}>
        <Image
          src="https://images.unsplash.com/photo-1611210991827-c46845fc502c?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image of Blackjack"
          width={300}
          height={300}
          className={'rounded-lg hover:opacity-70'}
          unoptimized
        />
      </a>
    ),
  },
    {
        title: "Satoshi Coin Flip",
        description:
           "A simple coin flip game, where you can bet on heads or tails.",
        demo: (
            <a href={"https://satoshi-flip.mystenlabs.com/"}>
                <Image
                    src="https://images.unsplash.com/photo-1579758258316-57081bac8ea8?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image of Satoshi Coin Flip"
                    width={300}
                    height={300}
                    className={'rounded-lg hover:opacity-70'}
                    unoptimized
                />
            </a>
        ),
    },
    {
        title: "Plinko",
        description:
            "Plinko is a game where you drop a ball and it bounces around a series of pegs until it lands in a slot at the bottom.",
        demo: (
            <a href={"https://plinko-poc.vercel.app/"}>
                <Image
                    src="https://images.unsplash.com/photo-1550534790-5724c29d08f1?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image of Plinko"
                    width={300}
                    height={300}
                    className={'rounded-lg hover:opacity-70'}
                    unoptimized
                />
            </a>
        ),
    },
    {
        title: "Solitaire",
        description:
            "A single player card game, where the goal is to move all cards to the foundation piles.",
        demo: (
            <a href={'https://mysten-solitaire.vercel.app/game'}>
                <Image
                    src="https://images.unsplash.com/photo-1501003878151-d3cb87799705?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image of Solitaire"
                    width={300}
                    height={300}
                    className={'rounded-lg hover:opacity-70'}
                    unoptimized
                />
            </a>
        ),
    },
];
