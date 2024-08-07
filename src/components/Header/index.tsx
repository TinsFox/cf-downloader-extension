import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { Eraser } from "lucide-react"

import { useStorage } from "@plasmohq/storage/hook"

import type { KeyFormForm } from "../KeyForm"

export function Header() {
  const [_, setWorkerInfo] = useStorage<KeyFormForm>("workerInfo")

  return (
    <header className="flex justify-between items-center mb-3">
      <h1 className="flex items-center">
        <Icons.logo className="size-8 mr-3" />
        <span>CF Downloader</span>
      </h1>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                setWorkerInfo({
                  workerUrl: "",
                  key: ""
                })
              }}>
              <Eraser size={16} strokeWidth={1} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>重置</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  )
}
