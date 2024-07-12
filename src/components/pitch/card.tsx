import { cn } from "@/lib/utils";

export function Card({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex border flex-col items-center justify-center border-border bg-[#121212] px-6 pt-8 pb-6 space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}
