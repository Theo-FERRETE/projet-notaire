import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

const studioImage = '/qui-suis-je/expertise-notariale.png'

export function AboutSection({ heading, intro, body, image, imagePosition, backgroundColor, textColor }: { heading?: string; intro?: string; body?: DefaultTypedEditorState | null; image?: string; imagePosition?: string; backgroundColor?: string; textColor?: string }) {
  return (
    <section className="grid items-center gap-16 px-8 py-28 lg:grid-cols-2" style={{ backgroundColor: backgroundColor ?? '#fdfcf7', color: textColor ?? undefined }} id="office">
      <div>
        <h2 className="mb-8 font-serif text-[clamp(34px,4vw,46px)] font-medium leading-[1.25]">
          {heading ?? <><span>La rigueur du droit,</span><br /><em className="font-normal">l’élégance du service.</em></>}
        </h2>
        <div className="max-w-[520px] space-y-6 text-[16px] leading-[1.6]">
          {intro ? <p>{intro}</p> : null}
          {body ? (
            <RichText data={body} />
          ) : !intro ? (
            <>
              <p>Fondée sur des valeurs de transparence et de proximité, notre étude accompagne particuliers et entreprises dans toutes les étapes juridiques de leur développement.</p>
              <p>Située au cœur de la capitale, notre structure à taille humaine privilégie le contact direct et la réactivité pour une sécurité juridique sans compromis.</p>
            </>
          ) : null}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[520px] border border-black/10 bg-[#f8f5ed] p-[18px]">
        <div className="relative h-[600px] w-full">
          <Image src={image ?? studioImage} alt="Le cabinet" fill sizes="(max-width: 1024px) 100vw, 484px" className="object-cover" style={{ objectPosition: imagePosition ?? undefined }} />
        </div>
      </div>
    </section>
  )
}
