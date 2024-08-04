"use server";

import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
import type { WaitlistFormData } from "./form-schema";
import { getFirstNameAndLastNameFromHandleAndDisplayName } from "@/lib/utils";

const { TWENTY_API_KEY, TWENTY_API_URL } = process.env;

async function verifyTurnstileToken(token: string) {
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
  );

  const data = (await res.json()) as TurnstileServerValidationResponse;

  return data;
}

export async function findPeopleFromTwenty(email: string) {
  try {
    const res = await fetch(
      `${TWENTY_API_URL}/people/?${new URLSearchParams({
        filter: `email[eq]:${email}`,
      })}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${TWENTY_API_KEY}` },
      }
    );

    const data = await res.json();
    return data?.data?.people?.[0] || null;
  } catch (error) {
    console.log("findPeopleFromTwenty", error);
    throw new Error("Failed to find people");
  }
}

export async function createPersonOnTwenty({
  email,
  name,
}: {
  email: string;
  name?: { firstName?: string; lastName?: string };
}) {
  try {
    const res = await fetch(`${TWENTY_API_URL}/people/?`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TWENTY_API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        stage: "WAITING",
      }),
    });

    const data = await res.json();
    return data.data.createPerson;
  } catch (error) {
    console.log("createPeople: ", error);
    throw new Error("Failed to create person");
  }
}

export async function submitWaitlist({
  email,
  token,
  name = "",
}: WaitlistFormData) {
  console.log("submitting waitlist form", { email, token, name });

  // Verify turnstile token
  const verificationResponse = await verifyTurnstileToken(token);

  if (!verificationResponse.success) {
    throw new Error("Failed to verify token");
  }

  // Check if person already exists
  const people = await findPeopleFromTwenty(email);

  if (people) {
    console.log("Person already exists", people);
    // TODO: Update person if needed
    return { success: true, result: "people_already_exist" };
  }

  // Create person
  const createdPerson = await createPersonOnTwenty({
    email,
    name: getFirstNameAndLastNameFromHandleAndDisplayName(email, name),
  });

  console.log("Person created", createdPerson);

  return { success: true, result: "person_created" };
}
