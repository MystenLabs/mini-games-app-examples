import {BuyMeACoffee, Twitter} from "../shared/icons";

export default function Footer() {
  return (
      <div className="absolute w-full py-5 text-center">
          <p className="text-gray-500 pb-4">
              © 2024 Mysten Labs. All Rights Reserved.
          </p>
          <a
              href="https://twitter.com/mysten_labs?lang=en"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-black px-7 py-2 transition-colors hover:opacity-70"
          >
              <Twitter className="text-[#1d9bf0]"/>
              <p className="text-sm font-semibold text-white">
                  Follow us on X.com
              </p>
          </a>
      </div>
  );
}
