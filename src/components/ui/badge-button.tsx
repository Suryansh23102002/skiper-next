import React, { ReactNode } from "react"
import { IceCreamCone } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface BadgeButtonProps {
  children: ReactNode
}

const BadgeButton = ({ children }: BadgeButtonProps) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/10 bg-white text-base dark:bg-muted dark:border-white/10 dark:text-white"
    >
      <IceCreamCone className="mr-1 fill-[#9ff01d] stroke-1 text-neutral-800 dark:text-white" />
      {children}
    </Badge>
  )
}

export default BadgeButton
