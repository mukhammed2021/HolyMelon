import { cn } from "@/lib/utils";

interface IconButtonProps {
   icon: React.ElementType;
   size?: number;
   iconClassName?: string;
   className?: string;
   href?: string;
}

export default function IconButton({
   icon: Icon,
   size = 40,
   iconClassName,
   className,
   href = "",
}: IconButtonProps) {
   return (
      <a
         href={href}
         className={cn(
            "inline-flex size-[4.375rem] items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700",
            className,
         )}
      >
         <Icon size={size} className={iconClassName} />
      </a>
   );
}
