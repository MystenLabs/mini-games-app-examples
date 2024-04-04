import {BuyMeACoffee, Twitter} from "../shared/icons";

export default function Footer() {
  return (
      <div className="absolute w-full py-5 text-center">
          <p className="text-gray-500 pb-8">
              ©2024 Copyright Sui Foundation. All rights reserved.
          </p>
          <a
              href="https://twitter.com/SuiNetwork"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-20 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full px-7 py-2 transition-colors hover:opacity-70"
              style={{backgroundColor: "rgb(75,163,251)"}}
          >
              <Twitter className="text-[#1d9bf0]"/>
              <p className="text-sm font-semibold text-white">
                  Follow us on Twitter
              </p>
          </a>
      </div>
  );
}
