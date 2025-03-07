"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@clerk/nextjs";

import { signUpFormSchema, SignUpFormType } from "@/schemas/signUpFormSchema";
import { logger } from "@repo/utils";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";

export default function RegisterForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit(signUpArtist);

  async function signUpArtist(data: SignUpFormType) {
    if (!isLoaded) return;

    try {
      const session = await signUp.create({
        emailAddress: data.email,
        password: data.password,
        firstName: data.name,
      });
      setActive({ session: session?.createdSessionId });
    } catch (error) {
      logger.error("Error signing up", error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      toast.error("Error", {
        description: errorMessage,
        dismissible: true,
      });
    }
  }

  return (
    <form className="p-6 md:p-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Join PixelBloom Studio</h1>
          <p className="text-balance text-muted-foreground">Create an account to start managing your wallpapers</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" {...register("name")} />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="johndoe@example.com" {...register("email")} />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>
        <div id="clerk-captcha"></div>
        <Button type="submit" className="w-full bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
          Sign Up
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
        <div className="text-center text-sm">
          Already Have an account?
          <Link href="/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
