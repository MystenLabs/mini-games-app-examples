import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import blackjack from "../public/minigames/blackjack.svg";
import coinflip from "../public/minigames/coinflip.svg";
import plinko from "../public/minigames/plinko.svg";
import solitaire from "../public/minigames/solitaire.svg";
import Link from "next/link";
import suilogo from "@/app/sui_logo.svg";

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
        <div className="z-10 w-full px-5 xl:px-0">
            <div className="mx-5 mb-10 flex h-16 items-center justify-center ">
                <Link href="https://sui.io/" className="flex items-center font-display text-2xl">
                    <Image
                        src={suilogo}
                        alt="Sui logo"
                        className="mr-2 rounded-sm"
                    ></Image>
                </Link>
            </div>
            <h1
                className="animate-fade-up text-white bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
                style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
            >
                Web3 Mini Games <br/>built on Sui
            </h1>
            <p
                className="mt-12 animate-fade-up-subtitle text-center text-white opacity-0 [text-wrap:balance] md:text-xl"
                style={{animationDelay: "0.25s", animationFillMode: "forwards",}}
            >
                A collection of mini games, to inspire the community of Sui.
            </p>

        </div>
        <div className="my-20 grid max-w-screen-xl animate-fade-up grid-cols-1 gap-10 px-5 md:grid-cols-2 xl:px-0">
            {features.map(({title, description, demo, githubUrl, docsUrl, unavailable}) => (
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
                unavailable={unavailable}
            />
        ))}
      </div>
    </>
  );
}

const imageDimensions = { width: 420, height: 420 };

const features = [
  {
    title: "Blackjack",
    description:
      "Beat the dealer by getting as close to 21 as possible without going over.",
    demo: (
      <a href={'https://blackjack-sui.vercel.app/'} target={'_blank'} rel="noreferrer">
        <Image
          src={blackjack}
          alt="Image of Blackjack"
          width={imageDimensions.width}
          height={imageDimensions.height}
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
            <a href={"https://satoshi-flip.mystenlabs.com/"} target={'_blank'} rel="noreferrer">
                <Image
                    src={coinflip}
                    alt="Image of Satoshi Coin Flip"
                    width={imageDimensions.width}
                    height={imageDimensions.height}
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
            "Bet on balls that bounce around a series of pegs until they land in a slot.",
        demo: (
            <a href={"https://plinko-poc.vercel.app/"} target={'_blank'} rel="noreferrer">
                <Image
                    src={plinko}
                    alt="Image of Plinko"
                    width={imageDimensions.width}
                    height={imageDimensions.height}
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
            <a href={'https://mysten-solitaire.vercel.app/'} target={'_blank'} rel="noreferrer">
                <Image
                    src={solitaire}
                    alt="Image of Solitaire"
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    className={'rounded-lg hover:opacity-70 animate-fade-down'}
                    unoptimized
                />
            </a>
        ),
        githubUrl: 'https://github.com/mystenLabs/solitaire',
        docsUrl: 'https://docs.sui.io/guides/developer/app-examples/solitaire',
        unavailable: true,
    },
];
