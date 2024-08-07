import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useStorage } from "@plasmohq/storage/hook"

import type { KeyFormForm } from "../KeyForm"
import { Textarea } from "../ui/textarea"

const downloaderSchema = z.object({
  fileUrl: z.string().url()
})

export type DownloaderForm = z.infer<typeof downloaderSchema>

function buildDownloadUrl(fileUrl: string, workerUrl: string, key: string) {
  return `${workerUrl}/download?fileUrl=${fileUrl}&key=${key}`
}
export function Downloader() {
  const [workerInfo] = useStorage<KeyFormForm>("workerInfo")
  const form = useForm<DownloaderForm>({
    resolver: zodResolver(downloaderSchema),
    defaultValues: {
      fileUrl: ""
    }
  })

  function onSubmit(values: DownloaderForm) {
    console.log(values)
    window.open(
      buildDownloadUrl(values.fileUrl, workerInfo.workerUrl, workerInfo.key)
    )
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fileUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>文件地址</FormLabel>
                <FormControl>
                  <Textarea placeholder="文件地址" {...field} />
                </FormControl>
                <FormDescription>请填写你要下载的文件的URL</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            下载
          </Button>
        </form>
      </Form>
    </div>
  )
}
