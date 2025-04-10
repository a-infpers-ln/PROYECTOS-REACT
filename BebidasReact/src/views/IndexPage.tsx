import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {

  useAppStore((state) => state)
  return (
    <>
      <h1>Inicio</h1>
    </>
  )
}
