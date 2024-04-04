import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import {Github} from "@/components/shared/icons";
import {nFormatter} from "@/lib/utils";
import Tooltip from "@/components/shared/tooltip";

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
          className="py-1 my-3 mb-5 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href={docsUrl}
          target="_blank"
          rel="noopener noreferrer"
      >
          <p>📖</p>
          <p>
              <span className="hidden sm:inline-block">Docs{" "}</span>
          </p>
      </a>
  )

    const docsUnavailable = (<div
        className="select-none py-1 my-3 mb-5 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
    >
        <p>🚧</p>
        <p>
            <span className="hidden sm:inline-block">Docs{" "}</span>
        </p>
    </div>
    )
    return (
        <div
            className={`py-4 flex flex-col justify-around relative col-span-1 rounded-xl border border-blue-950 shadow-md ${
                large ? "md:col-span-2" : ""
            } `}
            style={{backgroundColor: 'rgb(22,25,59)' }}
        >

            <h2 className="flex justify-center items-center text-white bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
                {title}
            </h2>
            <div className="flex h-60 items-center justify-center">{demo}</div>
            <div className="mx-auto max-w-md text-center flex flex-col items-center">

              <div className="prose-sm mt-3 leading-normal text-white ">
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
              <div className={'flex flex-row gap-2'}>
                  {unavailable && (
                      <Tooltip content={"Coming soon!"}>
                          {docsUnavailable}
                      </Tooltip>
                  )}
                  {!unavailable && docs}
                  <a
                      className="py-1 my-3 mb-5 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
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
