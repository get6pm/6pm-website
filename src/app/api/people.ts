"use server"
import { getFirstNameAndLastNameFromHandleAndDisplayName } from "@/lib/utils"

const TWENTY_API_KEY = process.env.TWENTY_API_KEY
const TWENTY_API_URL = process.env.TWENTY_API_URL

export async function findPeople(email: string) {
  try {
    const res = await fetch(
      `${TWENTY_API_URL}/rest/people/?` +
        new URLSearchParams({ filter: `email[eq]:${email}` }),
      {
        method: "GET",
        headers: { Authorization: `Bearer ${TWENTY_API_KEY}` },
      }
    )

    const data = await res.json()
    return data?.data?.people
  } catch (error) {
    console.log("findPeople: ", error)
  }
}

export async function createPeople({
  email,
  name,
}: {
  email: string
  name: string
}) {
  try {
    const res = await fetch(`${TWENTY_API_URL}/rest/people/?`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TWENTY_API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name: getFirstNameAndLastNameFromHandleAndDisplayName(email, name),
        stage: "WAITING",
      }),
    })

    const data = await res.json()
    return data.data.createPerson
  } catch (error) {
    console.log("createPeople: ", error)
  }
}
