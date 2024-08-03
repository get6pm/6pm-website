"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Turnstile } from "@marsidev/react-turnstile"
import { FormEvent, useState } from "react"
import { usePostHog } from "posthog-js/react"
import { createPeople, findPeople } from "../api/people"

export default function WaitlistPage() {
  const posthog = usePostHog()
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  const [verifiedTurnstitle, setVerifiedTurnstitle] = useState(false)
  const [showTurnstitle, setShowTurnstitle] = useState<
    "invisible" | "normal" | "compact" | "auto" | undefined
  >("invisible")
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  })
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState<string>()

  const onChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()

    const validatedTurnstile = await fetch("/api/verify", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "content-type": "application/json",
      },
    })

    const data = await validatedTurnstile.json()

    if (data.success || process.env.NODE_ENV === "development") {
      // the token has been validated
      const people = await findPeople(formData.email)
      if (people?.length === 0) {
        await createPeople({
          email: formData.email,
          name: formData.name,
        })

        alert("Thank you for registering on our waitlist!")
      }

      setLoading(false)
      posthog?.capture("waitlist_user_added", {
        properties: formData,
        distinctId: formData?.email,
      })
    }
  }

  return (
    <>
      <Header />
      <section className="flex flex-col h-screen justify-center items-center ">
        <div className="flex flex-col justify-center items-center p-5 bg-inherite md:w-1/2 w-full">
          <p className="bg-gradient-to-r from-zinc-100 to-zinc-700 text-transparent bg-clip-text p-5 md:text-4xl text-4xl font-bold text-center">
            Join The Waitlist 6pm Today!
          </p>

          <p className="text-zinc-500 md:text-md sm:text-sm text-center">
            Be among the first to experience the revolutionary AI Financial
            Assistant that will transform the way you manage your expenses and
            budgets.
          </p>

          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center w-full py-5 space-y-2"
          >
            <Input
              name="name"
              required={true}
              type="text"
              placeholder="Your full name"
              className="w-full md:w-1/2 bg-inherite"
              onChange={onChange}
            />
            <Input
              name="email"
              onChange={onChange}
              required={true}
              type="email"
              placeholder="Your email address"
              className="w-full md:w-1/2 bg-inherite"
            />
            {turnstileSiteKey && (
              <Turnstile
                className="w-full md:w-1/2 justify-self-center	"
                options={{ size: showTurnstitle }}
                siteKey={"1x00000000000000000000AA"}
                onError={() => {
                  setShowTurnstitle("normal")
                }}
                onBeforeInteractive={() => {
                  setShowTurnstitle("normal")
                }}
                onSuccess={(successToken) => {
                  setVerifiedTurnstitle(true)
                  setToken(successToken)
                }}
              />
            )}
            <Button
              type="submit"
              disabled={!verifiedTurnstitle || loading}
              className="rounded-md md:w-1/4 w-1/3 text-xs"
            >
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
