import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SunsetBloomBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const SunsetBloomBackground = forwardRef<HTMLDivElement, SunsetBloomBackgroundProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="sunset-bloom-background"
        className={cn("relative isolate overflow-clip bg-[#FFFAF5] dark:bg-[#0A0B0E]", className)}
        {...props}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 -z-10 blur-xl"
        >
          <div className="absolute inset-0 bg-[#FFFAF5] dark:bg-[#0A0B0E]" />

          <div className="absolute top-[20%] -left-[14%] h-[66%] w-[66%] rounded-full bg-[#FB923C] opacity-72 dark:opacity-30 blur-3xl" />

          <div className="absolute top-[-12%] right-[8%] h-[62%] w-[62%] rounded-full bg-[#FACC15] opacity-68 dark:opacity-30 blur-3xl" />

          <div className="absolute bottom-[-18%] left-[38%] h-[58%] w-[58%] rounded-full bg-[#F43F5E] opacity-55 dark:opacity-20 blur-3xl" />

          <div className="absolute right-[-10%] bottom-[16%] h-[64%] w-[64%] rounded-full bg-[#F59E0B] opacity-62 dark:opacity-20 blur-3xl" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_center,#000_1px,transparent_1px)] dark:[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:4px_4px] opacity-[0.032]"
        />

        {children}
      </div>
    );
  }
);

SunsetBloomBackground.displayName = "SunsetBloomBackground";

export { SunsetBloomBackground };
