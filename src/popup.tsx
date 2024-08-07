import "./style.css"

import { Downloader } from "@/components/Downloader"
import { KeyForm, type KeyFormForm } from "@/components/KeyForm"

import { useStorage } from "@plasmohq/storage/hook"

import { Header } from "./components/Header"

function IndexPopup() {
  const [workerInfo] = useStorage<KeyFormForm>("workerInfo")

  return (
    <div className="min-w-96 min-h-24 p-10 pt-10 rounded-lg">
      <Header />
      {workerInfo?.workerUrl === "" || workerInfo?.key === "" ? (
        <KeyForm />
      ) : (
        <Downloader />
      )}
    </div>
  )
}

export default IndexPopup
