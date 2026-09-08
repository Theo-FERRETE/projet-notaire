import Image from 'next/image'

const studioImage = '/qui-suis-je/expertise-notariale.png'

export function AboutSection({ heading, image, backgroundColor, textColor }: { heading?: string; image?: string; backgroundColor?: string | null; textColor?: string | null }) {
  return (
    <section className="grid items-center gap-16 bg-[#fdfcf7] px-8 py-28 lg:grid-cols-2" id="office" style={{ backgroundColor: backgroundColor ?? undefined, color: textColor ?? undefined }}>
      <div>
        <h2 className="mb-8 font-serif text-[clamp(34px,4vw,46px)] font-medium leading-[1.25]">
          {heading ?? <><span>La rigueur du droit,</span><br /><em className="font-normal">l’élégance du service.</em></>}
        </h2>
        <div className="max-w-[520px] space-y-6 text-[16px] leading-[1.6] text-[#4d4732]">
          <p>Fondée sur des valeurs de transparence et de proximité, notre étude accompagne particuliers et entreprises dans toutes les étapes juridiques de leur développement.</p>
          <p>Située au cœur de la capitale, notre structure à taille humaine privilégie le contact direct et la réactivité pour une sécurité juridique sans compromis.</p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[520px] border border-black/10 bg-[#f8f5ed] p-[18px]">
        <div className="relative h-[600px] w-full">
          <Image src={image ?? studioImage} alt="Le cabinet" fill sizes="(max-width: 1024px) 100vw, 484px" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
