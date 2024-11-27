import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const isuser = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 ">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml flex lg:ml-0">
                <Link href={"/ "}>logo</Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isuser ? null : (
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/sign-in"}
                    >
                      Sign in
                    </Link>
                  )}
                  {isuser ? null : (
                    <span
                      className="h-6 w-px bg-gray-200 "
                      aria-hidden={true}
                    />
                  )}
                  {isuser ? null : (
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/sign-up"}
                    >
                      Create Account
                    </Link>
                  )}

                  {isuser ? (
                    <span
                      className="h-6 w-px bg-gray-200 "
                      aria-hidden={true}
                    />
                  ) : null}

                  {isuser ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200 "
                        aria-hidden={true}
                      />
                    </div>
                  )}


                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
