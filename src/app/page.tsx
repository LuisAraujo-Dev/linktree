import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-4">
      <Profile
        src="/profile.jpg"
        alt="Foto de Luís Araújo"
        name="@luisaraujo"
        description="Desenvolvedor Web • React • Next.js"
      />
      <p className="text-gray-400 mt-6">Meus links estão aqui abaixo 👇</p>
    </main>
  );
}