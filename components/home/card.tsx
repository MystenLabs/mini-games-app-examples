import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import {Github} from "@/components/shared/icons";
import {nFormatter} from "@/lib/utils";
import Tooltip from "@/components/shared/tooltip";
import OpenBook from "@/components/shared/icons/openBook";

export default function Card({
  title,
  description,
  demo, githubUrl, docsUrl,
    unavailable,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  githubUrl: string;
  docsUrl: string;
  unavailable?: boolean;
  large?: boolean;
}) {
  const docs = (
      <a
          className="w-full py-2 my-3 mb-5 flex items-center justify-center space-x-2 rounded-full border border-gray-600 hover:border-white bg-transparent px-5 text-sm text-white shadow-md transition-colors"
          href={docsUrl}
          target="_blank"
          rel="noopener noreferrer"
      >
          <OpenBook/>
          <p>
              <span className="hidden sm:inline-block">Docs{" "}</span>
          </p>
      </a>
  )

    const docsUnavailable = (<div
        className="w-full select-none py-2 my-3 mb-5 flex items-center justify-center space-x-2 rounded-full border border-gray-600 hover:border-white bg-transparent px-5 text-sm text-white shadow-md transition-colors"
    >
        <p>🚧</p>
        <p>
            <span className="hidden sm:inline-block">Docs{" "}</span>
        </p>
    </div>
    )
    return (
        <div
            className={`py-6 px-4 flex flex-col gap-5 justify-around relative col-span-1 rounded-xl border border-blue-950 shadow-md ${
                large ? "md:col-span-2" : ""
            } `}
            style={{
                backdropFilter: 'blur(40px)'
        }}
        >

            <h2 className="flex justify-center items-center text-white bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
                {title}
            </h2>
            <div className="flex items-center justify-center">{demo}</div>
            <div className="mx-auto max-w-md text-center flex flex-col items-center">

              <div className="w-full prose-sm mt-3 leading-normal text-white ">
                  <ReactMarkdown
                      components={{
                          a: ({node, ...props}) => (
                              <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  {...props}
                                  className="font-medium text-white"
                              />
                          ),
                          code: ({node, ...props}) => (
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
              <div className={'w-full flex flex-row gap-4 justify-evenly'}>
                  {unavailable && (
                      <Tooltip content={"Coming soon!"}>
                          {docsUnavailable}
                      </Tooltip>
                  )}
                  {!unavailable && docs}
                  <a
                      className="w-full py-2 my-3 mb-5 flex items-center justify-center space-x-2 rounded-full border border-gray-600 hover:border-white bg-transparent px-5 text-sm text-white shadow-md transition-colors"
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Github/>
                      <p>
                          <span className="hidden sm:inline-block">Repo{" "}</span>
                      </p>
                  </a>

              </div>
          </div>

      </div>
  );
}
