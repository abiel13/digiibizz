"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/uitls";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { AuthValidator } from "@/lib/validations";
import * as zod from 'zod'

const page = () => {

  const {register, handleSubmit,formState:{errors} } = useForm<zod.infer<typeof AuthValidator>>({
    resolver: zodResolver(AuthValidator)
  })

const onSubmit = async ({email,password}: any) => {}


  return ( 
    <>
      <div className="container mx-auto px-6 relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            logo
            <h1 className="text-2xl font-bold">Create a DigiBizz Account </h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href={"/sign-in"}
            >
              Already have an account ? sign in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="gap-1 grid py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                  {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-400": errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                </div>{" "}
                <div className="gap-1 grid py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                  {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-400": errors.password,
                    })}
                    placeholder="password"
                  />
                </div>
                <Button  >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
