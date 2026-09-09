import Image from 'next/image'
import type { ReactNode } from 'react'
import { ContactForm } from '@/app/components/site/ContactForm'
import type { ContactInfoView } from './contact-data'

const IconAddress = () => (
	<svg className="h-6 w-4 text-gray-700" viewBox="0 0 16 24" fill="currentColor" aria-hidden="true" focusable="false">
		<path d="M8 0C3.6 0 0 3.6 0 8c0 4 8 16 8 16s8-12 8-16c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
	</svg>
)

const IconPhone = () => (
	<svg className="h-6 w-4 text-gray-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
		<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
	</svg>
)

const IconEmail = () => (
	<svg className="h-4 w-5 text-gray-700" viewBox="0 0 24 20" fill="currentColor" aria-hidden="true" focusable="false">
		<path d="M20 0H4C1.8 0 0 1.8 0 4v12c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 4-8 5-8-5v0zm0 12H4V4l8 5 8-5v12z" />
	</svg>
)

const IconHours = () => (
	<svg className="h-6 w-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
		<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-5.5-3.4V7z" />
	</svg>
)

const InfoCard = ({
	icon,
	label,
	children,
}: {
	icon: ReactNode
	label: string
	children: ReactNode
}) => (
	<div className="flex gap-4">
		<div className="shrink-0 pt-1">{icon}</div>
		<div>
			<h2 className="text-sm font-normal uppercase tracking-wider text-black">{label}</h2>
			<div className="mt-2 text-base leading-relaxed text-[#c5a059]">{children}</div>
		</div>
	</div>
)

/**
 * Bloc principal de la page Contact : coordonnées de l'étude (gauche),
 * formulaire de contact (droite) et photo avec citation (sous les
 * coordonnées). Tous les textes viennent du groupe CMS `contactContent`,
 * y compris la photo et la citation ; la maquette actuelle est conservée.
 */
export function ContactDetails({ view }: { view: ContactInfoView }) {
	const telHref = `tel:${view.phone.replace(/[^\d+]/g, '')}`

	return (
		<section aria-label="Coordonnées et formulaire de contact" className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
			<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
				{/* Left: contact details */}
				<div className="order-1 space-y-8 lg:col-start-1 lg:col-span-5 lg:row-start-1">
					<InfoCard icon={<IconAddress />} label={view.addressLabel}>
						<address className="not-italic">{view.address}</address>
					</InfoCard>
					<InfoCard icon={<IconPhone />} label={view.phoneLabel}>
						<a href={telHref} className="hover:underline">
							{view.phone}
						</a>
					</InfoCard>
					<InfoCard icon={<IconEmail />} label={view.emailLabel}>
						<a href={`mailto:${view.email}`} className="hover:underline">
							{view.email}
						</a>
					</InfoCard>
					<InfoCard icon={<IconHours />} label={view.hoursLabel}>
						{view.hours}
					</InfoCard>
				</div>

				{/* Right: form */}
				<section aria-labelledby="contact-form-heading" className="order-2 border border-white/10 bg-white p-6 sm:p-12 lg:col-start-6 lg:col-span-7 lg:row-start-1 lg:row-span-2">
					<h2 id="contact-form-heading" className="mb-8 text-base font-normal text-black">
						{view.formHeading}
					</h2>
					<ContactForm privacyHref={view.privacyHref} />
				</section>

				<figure className="order-3 relative mt-2 aspect-[3/4] w-full overflow-hidden bg-[#d8d6d0] sm:aspect-[4/5] lg:col-start-1 lg:col-span-5 lg:row-start-2 lg:mt-0 lg:max-w-[410px]">
					<Image
						src={view.quote.imageSrc}
						alt={view.quote.imageAlt}
						fill
						sizes="(max-width: 1023px) 100vw, 410px"
						className="object-cover object-center grayscale"
					/>
					<figcaption className="absolute bottom-4 left-4 right-4 bg-[#f1f1f7]/95 px-6 py-5 text-[#687183] sm:bottom-6 sm:left-6 sm:right-6 sm:px-8 sm:py-7">
						<blockquote className="font-serif text-sm italic leading-relaxed text-[#353841] sm:text-base">
							{view.quote.text}
						</blockquote>
						<cite className="mt-4 block not-italic text-xs uppercase tracking-[0.08em] text-[#687183] sm:text-sm">
							— {view.quote.cite}
						</cite>
					</figcaption>
				</figure>
			</div>
		</section>
	)
}
