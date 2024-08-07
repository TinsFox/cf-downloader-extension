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

import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  key: z.string().min(2),
  workerUrl: z.string().url()
})
export type KeyFormForm = z.infer<typeof formSchema>

export function KeyForm() {
  const [workerInfo, setWorkerInfo] = useStorage<KeyFormForm>(
    "workerInfo",
    (storedData) =>
      typeof storedData === "undefined"
        ? {
            key: "",
            fileUrl: ""
          }
        : storedData
  )
  console.log("get workerInfo", workerInfo)
  const form = useForm<KeyFormForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      key: "",
      workerUrl: ""
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setWorkerInfo(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>密钥</FormLabel>
              <FormControl>
                <Input placeholder="密钥" {...field} type="password" />
              </FormControl>
              <FormDescription>
                请输入你在部署 worker 时使用的 key
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workerUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>worker 地址</FormLabel>
              <FormControl>
                <Textarea placeholder="请输入你的 worker 地址" {...field} />
              </FormControl>
              <FormDescription>请输入你的 worker 地址</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">保存</Button>
      </form>
    </Form>
  )
}
