import * as React from "react"
import { cn } from "@/presentation/utils/cn"

const ALERT_VARIANTS = {
  default: "bg-background text-foreground [&>svg]:text-foreground",
  destructive:
    "border-destructive/50 text-destructive [&>svg]:text-destructive bg-destructive/10",
} as const

interface AlertProps extends React.ComponentProps<"div"> {
  variant?: keyof typeof ALERT_VARIANTS
}

function Alert({
  className,
  variant = "default",
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
        ALERT_VARIANTS[variant],
        className,
      )}
      {...props}
    />
  )
}

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="alert-title"
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
