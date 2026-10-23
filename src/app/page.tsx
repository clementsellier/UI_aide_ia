// Page provisoire : vérifie que la charte est bien chargée. Sera remplacée par les écrans 1 à 5.
const couleurs = [
  { nom: "Corail", classe: "bg-coral" },
  { nom: "Sarcelle", classe: "bg-teal" },
  { nom: "Urgent", classe: "bg-urgent" },
  { nom: "Important", classe: "bg-important" },
  { nom: "Souhaitable", classe: "bg-souhaitable" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Environnement prêt</h1>
      <p className="mt-2 text-muted-foreground">
        Next.js, Tailwind et shadcn/ui sont configurés avec la charte Surcouche IA.
      </p>
      <div className="mt-8 rounded-xl border bg-card p-6">
        <div className="flex flex-wrap gap-4">
          {couleurs.map((c) => (
            <div key={c.nom} className="flex items-center gap-2 text-sm">
              <span className={`size-6 rounded-md ${c.classe}`} />
              {c.nom}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
