"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  value: string;
  className?: string;
};

export function CopyInput({ value, className }: Props) {
  const [isCopied, setCopied] = useState(false);

  const handleClipboard = async () => {
    try {
      setCopied(true);

      await navigator.clipboard.writeText(value);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {}
  };

  return (
    <div
      className={cn(
        "flex items-center relative w-full border border-border py-2 px-4",
        className
      )}
    >
      <div className="pr-7 text-[#878787] text-sm">{value}</div>
      <button type="button" onClick={handleClipboard}>
        <span className="sr-only">Copy</span>
        <motion.div
          className="absolute right-4 top-2"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isCopied ? 0 : 1, scale: isCopied ? 0 : 1 }}
        >
          <CopyIcon className="size-5" />
        </motion.div>

        <motion.div
          className="absolute right-4 top-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isCopied ? 1 : 0, scale: isCopied ? 1 : 0 }}
        >
          <CheckIcon className="size-5" />
        </motion.div>
      </button>
    </div>
  );
}
