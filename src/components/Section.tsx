import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;

const Section = (props: SectionProps) => {
  return (
    <section
      className={cn(
        "flex h-screen w-4/5 snap-center snap-always items-center justify-center",
        props.className,
      )}
      {...props}
    >
      <div className="flex h-[85%] w-[90%] flex-col items-center justify-center rounded-3xl bg-secondary/30 backdrop-blur-sm">
        {props.children}
      </div>
    </section>
  );
};

export default Section;
