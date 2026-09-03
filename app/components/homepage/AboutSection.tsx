const studioImage = 'https://www.figma.com/api/mcp/asset/26369986-f44d-421c-82f1-1b20889554b4.png'
const brandMark = 'https://www.figma.com/api/mcp/asset/2afe72df-2afa-4cd9-b0c2-fa33e0af921c.svg'

export function AboutSection() {
  return (
    <section className="grid items-center gap-16 bg-[#fdfcf7] px-8 py-28 lg:grid-cols-2" id="office">
      <div>
        <h2 className="mb-8 font-serif text-[clamp(34px,4vw,46px)] font-medium leading-[1.25]">
          La rigueur du droit,<br /><em className="font-normal">l’élégance du service.</em>
        </h2>
        <div className="max-w-[520px] space-y-6 text-[16px] leading-[1.6] text-[#4d4732]">
          <p>Fondée sur des valeurs de transparence et de proximité, notre étude accompagne particuliers et entreprises dans toutes les étapes juridiques de leur développement.</p>
          <p>Située au cœur de la capitale, notre structure à taille humaine privilégie le contact direct et la réactivité pour une sécurité juridique sans compromis.</p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[520px] border border-black/10 bg-[#f8f5ed] p-[18px]">
        <img src={studioImage} alt="Le cabinet" className="h-[600px] w-full object-cover" />
        <div className="absolute -bottom-6 -left-6 grid h-32 w-32 place-items-center border border-black/10 bg-[#fdfcf7]/95">
          <img src={brandMark} alt="" className="h-9 w-9" />
        </div>
      </div>
    </section>
  )
}
