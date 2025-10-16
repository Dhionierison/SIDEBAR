import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8 border-l border-[#E7F0F3]">
        <h1 className="text-3xl font-bold">Conteúdo Principal</h1>
        <p className="mt-4 text-muted-foreground">
          O sidebar pode ser expandido ou retraído clicando no botão de seta.
        </p>
      </main>
    </div>
  )
}
