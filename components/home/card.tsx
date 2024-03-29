import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import {Github} from "@/components/shared/icons";
import {nFormatter} from "@/lib/utils";

export default function Card({
  title,
  description,
  demo, githubUrl,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  githubUrl: string;
  large?: boolean;
}) {
  return (
      <div
          className={`py-4 flex flex-col justify-around relative col-span-1 rounded-xl border border-gray-200 bg-white shadow-md ${
              large ? "md:col-span-2" : ""
          } `}
      >

          <h2 className="flex justify-center items-center bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
              {title}
          </h2>
          <div className="flex h-60 items-center justify-center">{demo}</div>
          <div className="mx-auto max-w-md text-center flex flex-col items-center">

              <div className="prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] md:prose">
                  <ReactMarkdown
                      components={{
                          a: ({node, ...props}) => (
                              <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  {...props}
                                  className="font-medium text-gray-800 underline transition-colors"
                              />
                          ),
                          code: ({node, ...props}) => (
                              <code
                                  {...props}
                                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                                  inline="true"
                                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                              />
                          ),
                      }}
                  >
                      {description}
                  </ReactMarkdown>
              </div>

              <a
                  className="py-1 my-3 mb-5 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Github/>
                  <p>
                      <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
                  </p>
              </a>
          </div>

      </div>
  );
}
