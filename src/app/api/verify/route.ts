import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile"

export async function POST(request: Request) {
  try {
    const { token } = (await request.json()) as { token: string }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: `secret=${encodeURIComponent(
          process.env.TURNSTILE_SECRET_KEY || ""
        )}&response=${encodeURIComponent(token)}`,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    )

    const data = (await res.json()) as TurnstileServerValidationResponse

    return new Response(JSON.stringify(data), {
      status: data.success ? 200 : 400,
      headers: {
        "content-type": "application/json",
      },
    })
  } catch (error) {
    console.log("api/verify POST: ", error)
  }
}
