import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-[#E7F0F3] ml-0"> {/* Remove qualquer margem */}
        {/* Seu conteúdo principal aqui */}
      </main>
    </div>
  )
}