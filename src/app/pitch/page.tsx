import { Grid } from "@/components/pitch/grid";
import { PitchCarusel } from "@/components/pitch/pitch-carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6pm | Pitch deck",
  description: "6pm is your AI financial assistant that helps you manage your expenses and budgets. With 6pm, you can easily track your expenses, set financial goals, and get personalized insights to help you make better financial decisions.",
};

export default function Page() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 h-screen text-primary bg-[#09090B]">
      <Grid />

      <PitchCarusel />
    </div>
  );
}
