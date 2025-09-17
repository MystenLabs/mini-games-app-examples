import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Github } from "@/components/shared/icons";
// import { nFormatter } from "@/lib/utils";
// import Tooltip from "@/components/shared/tooltip";
// import OpenBook from "@/components/shared/icons/openBook";

export default function Card({
  title,
  description,
  demo,
  githubUrl /*docsUrl,*/,
  unavailable,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  githubUrl: string;
  //   docsUrl: string;
  unavailable?: boolean;
  large?: boolean;
}) {
  //   const docs = (
  //     <a
  //       className="my-3 mb-5 flex w-full items-center justify-center space-x-2 rounded-full border border-gray-600 bg-transparent px-5 py-2 text-sm text-white shadow-md transition-colors hover:border-white"
  //       href={docsUrl}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <OpenBook />
  //       <p>
  //         <span className="hidden sm:inline-block">Docs </span>
  //       </p>
  //     </a>
  //   );

  return (
    <div
      className={`relative col-span-1 flex flex-col justify-around gap-5 rounded-xl border border-blue-950 px-4 py-6 shadow-md ${
        large ? "md:col-span-2" : ""
      } `}
      style={{
        backdropFilter: "blur(40px)",
      }}
    >
      <h2 className="flex items-center justify-center bg-clip-text font-display text-xl font-bold text-transparent text-white [text-wrap:balance] md:text-3xl md:font-normal">
        {title}
      </h2>
      <div className="flex items-center justify-center">{demo}</div>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="prose-sm mt-3 w-full leading-normal text-white ">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-white"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm px-1 py-0.5 font-mono font-medium text-white"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
        <div className={"flex w-full flex-row justify-evenly gap-4"}>
          {!unavailable /*&& docs*/}
          <a
            className="my-3 mb-5 flex w-full items-center justify-center space-x-2 rounded-full border border-gray-600 bg-transparent px-5 py-2 text-sm text-white shadow-md transition-colors hover:border-white"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Repo </span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
