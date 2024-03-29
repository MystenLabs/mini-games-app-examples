import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import blackjack from "../public/minigames/blackjack.avif";
import coinflip from "../public/minigames/coinflip.avif";
import plinko from "../public/minigames/plinko.avif";
import solitaire from "../public/minigames/solitaire.avif";

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
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
            <span className={"text-blue-400"}>Web3</span> Mini Games built on Sui
        </h1>
          <p
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          A collection of mini games, to inspire the community of Sui.
        </p>

      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        {features.map(({title, description, demo, githubUrl, docsUrl}) => (
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
                githubUrl={githubUrl}
                docsUrl={docsUrl}
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
      "Beat the dealer by getting as close to 21 as possible without going over.",
    demo: (
      <a href={'https://blackjack-sui.vercel.app/'}>
        <Image
          src={blackjack}
          alt="Image of Blackjack"
          width={300}
          height={300}
          className={'rounded-lg hover:opacity-70 animate-fade-down'}
          unoptimized
        />
      </a>
    ),
      githubUrl: 'https://github.com/MystenLabs/blackjack-sui',
      docsUrl: 'https://docs.sui.io/guides/developer/app-examples/blackjack'
  },
    {
        title: "Satoshi Coin Flip",
        description:
           "A simple coin flip game, where you can bet that the result will be either heads or tails.",
        demo: (
            <a href={"https://satoshi-flip.mystenlabs.com/"}>
                <Image
                    src={coinflip}
                    alt="Image of Satoshi Coin Flip"
                    width={300}
                    height={300}
                    className={'rounded-lg hover:opacity-70 animate-fade-down'}
                    unoptimized
                />
            </a>
        ),
        githubUrl: 'https://github.com/MystenLabs/satoshi-coin-flip',
        docsUrl: 'https://docs.sui.io/guides/developer/app-examples/coin-flip'
    },
    {
        title: "Plinko",
        description:
            "Bet on balls that bounce around a series of pegs until they lands in a slot.",
        demo: (
            <a href={"https://plinko-poc.vercel.app/"}>
                <Image
                    src={plinko}
                    alt="Image of Plinko"
                    width={300}
                    height={300}
                    className={'rounded-lg hover:opacity-70 animate-fade-down'}
                    unoptimized
                />
            </a>
        ),
        githubUrl: 'https://github.com/MystenLabs/plinko-poc/',
        docsUrl: 'https://docs.sui.io/guides/developer/app-examples/plinko'
    },
    {
        title: "Solitaire",
        description:
            "A single player card game, where the goal is to move all cards to the foundation piles.",
        demo: (
            <a href={'https://mysten-solitaire.vercel.app/'}>
                <Image
                    src={solitaire}
                    alt="Image of Solitaire"
                    width={300}
                    height={300}
                    className={'rounded-lg hover:opacity-70 animate-fade-down'}
                    unoptimized
                />
            </a>
        ),
        githubUrl: 'https://github.com/mystenLabs/solitaire',
        docsUrl: 'https://docs.sui.io/guides/developer/app-examples/solitaire'
    },
];
