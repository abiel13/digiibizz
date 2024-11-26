import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import BenefitCard from "@/components/benefitCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { benefits } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
     
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="capitalize text-4xl font-bold tracking-light text-gray-80 sm:text-6xl">
            your market place for great-quality{" "}
            <span className="text-yellow-500">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digibizz, Every assets on our platform is verified by our
            team to meet communities high standard
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href={"/products"}>
              Browse Latest
            </Link>
            <Button variant={"ghost"}>Our Quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <section className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {benefits.map((benefit, index) => (
              <BenefitCard benefit={benefit} key={index} />
            ))}
          </section>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
