"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import {
  AlertCircle,
  Check,
  MailIcon,
  PartyPopper,
  UserIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { type WaitlistFormData, waitlistFormSchema } from "./form-schema";
import { submitWaitlist } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import clsx from "clsx";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function WaitlistPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: { name: "", email: "" },
  });
  const posthog = usePostHog();
  const token = form.watch("token");
  const email = form.watch("email");

  const handleSubmit = async (data: WaitlistFormData) => {
    setIsSuccess(false);
    try {
      await submitWaitlist(data);

      posthog?.capture("waitlist_user_added", {
        properties: data,
        distinctId: data?.email,
      });
      setIsSuccess(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to submit waitlist form";
      console.error("Failed to submit waitlist form", error);
      form.setError("root", { message });
      setIsSuccess(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-300">
      <section className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col  max-w-lg justify-center items-center p-5 bg-inherite md:w-1/2 w-full">
          <div className="p-5">
            <p className="bg-gradient-to-r from-zinc-100 to-zinc-700 text-transparent bg-clip-text  md:text-4xl text-4xl font-bold text-center">
              Join The Waitlist
            </p>
            <p className="bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-500  text-transparent bg-clip-text  md:text-4xl text-4xl font-bold text-center">
              for 6pm Today!
            </p>
          </div>

          <p className="text-center text-muted-foreground">
            Be among the first to experience the revolutionary AI Financial
            Assistant that will transform the way you manage your expenses and
            budgets.
          </p>

          <Form {...form}>
            <form
              className="flex flex-col items-center w-full max-w-[300px] py-5 space-y-4"
              onSubmit={form.handleSubmit(handleSubmit)}
              onChange={() => setIsSuccess(false)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        autoFocus
                        className="h-12 w-full transition-opacity text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-200  dark:border-zinc-800  dark:focus:bg-zinc-800 dark:hover:bg-zinc-800"
                        startIcon={UserIcon}
                        placeholder="Your full name (optional)"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="h-12 w-full transition-opacity text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-200  dark:border-zinc-800  dark:focus:bg-zinc-800 dark:hover:bg-zinc-800"
                        startIcon={MailIcon}
                        placeholder="Your email address"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.formState.errors.root && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Oops!</AlertTitle>
                  <AlertDescription>
                    {form.formState.errors.root.message}
                  </AlertDescription>
                </Alert>
              )}
              {TURNSTILE_SITE_KEY && (
                <div className={clsx(isSuccess && "hidden")}>
                  <Turnstile
                    options={{
                      size: "auto",
                      theme: "dark",
                      responseFieldName: "token",
                    }}
                    siteKey={TURNSTILE_SITE_KEY}
                    onSuccess={(successToken) => {
                      form.setValue("token", successToken);
                    }}
                  />
                </div>
              )}
              {isSuccess && (
                <Alert variant="success">
                  <PartyPopper className="h-4 w-4" />
                  <AlertTitle>Tadaaa!</AlertTitle>
                  <AlertDescription>
                    <div className="text-zinc-400">
                      We've added{" "}
                      <span className="dark:text-zinc-200">
                        {email || "your email"}
                      </span>{" "}
                      to our waitlist. We'll let you know when 6pm is ready.
                    </div>
                  </AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                disabled={
                  !token ||
                  form.formState.isSubmitting ||
                  !form.formState.isValid
                }
                className="rounded-md h-12 w-full flex items-center justify-center gap-3"
              >
                {form.formState.isSubmitting && (
                  <svg
                    aria-hidden="true"
                    className="size-6 text-gray-200 animate-spin fill-slate-800"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
                Notify me on Launch
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </div>
  );
}
