'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, type ChangeEvent } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { submitLead, type LeadField, type LeadFormState } from '../app/actions/submit-lead'

const SECTORS = [
  'BTP / Construction',
  'Commerce / Retail',
  'Services aux particuliers',
  'Services aux entreprises',
  'Santé / Bien-être',
  'Restauration / Hôtellerie',
  'Autre',
]

const SOURCES = [
  'Bouche à oreille',
  'Google / Recherche en ligne',
  'Réseaux sociaux',
  'Publicité payante',
  'Prospection terrain',
  'Autre',
]

type Values = Record<LeadField, string>

const EMPTY_VALUES: Values = {
  firstName: '',
  lastName: '',
  company: '',
  socialLink: '',
  sector: '',
  clientSource: '',
}

const INITIAL_STATE: LeadFormState = { errors: {} }

const INPUT_CLASS =
  'w-full rounded-2xl border border-leela-border bg-white/5 px-4 py-3 text-white placeholder-leela-slate-light/60 transition-colors focus:border-white/40 focus:outline-none'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-leela-dark-blue transition-all duration-300 hover:bg-leela-light-gray disabled:opacity-60"
    >
      {pending ? 'Envoi en cours…' : '👉 Réserver mon appel de 15 min'}
    </button>
  )
}

export default function LeadForm() {
  const [state, formAction] = useFormState(submitLead, INITIAL_STATE)
  const [step, setStep] = useState<0 | 1>(0)
  const [values, setValues] = useState<Values>(EMPTY_VALUES)
  const [clientErrors, setClientErrors] = useState<Partial<Record<LeadField, string>>>({})

  // NOTE DEV: si le serveur renvoie des erreurs sur l'étape 1, on y ramène l'utilisateur.
  useEffect(() => {
    const serverErrors = Object.keys(state.errors) as LeadField[]
    if (serverErrors.length === 0) return
    const hasStep1Error = serverErrors.some(
      (field) => field === 'firstName' || field === 'lastName' || field === 'company'
    )
    setStep(hasStep1Error ? 0 : 1)
  }, [state.errors])

  const setValue =
    (field: LeadField) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setClientErrors((current) => ({ ...current, [field]: undefined }))
    }

  const errorFor = (field: LeadField): string | undefined =>
    clientErrors[field] ?? state.errors[field]

  const goToStep2 = () => {
    const errors: Partial<Record<LeadField, string>> = {}
    if (values.firstName.trim() === '') errors.firstName = 'Prénom est requis.'
    if (values.lastName.trim() === '') errors.lastName = 'Nom est requis.'
    if (values.company.trim() === '') errors.company = 'Entreprise est requise.'
    setClientErrors(errors)
    if (Object.keys(errors).length === 0) setStep(1)
  }

  return (
    <section id="formulaire" className="bg-leela-dark-blue py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Prêt à voir votre site web ?</h2>
          <p className="mb-4 text-lg text-leela-slate-light">
            Remplissez ce formulaire : on prépare votre site et votre contenu avant l'appel, puis vous choisissez votre créneau de 15 min.
          </p>
          <p className="mb-10 text-sm italic text-leela-slate-light/80">
            Ces infos servent uniquement à personnaliser votre aperçu de contenu. Zéro spam.
          </p>

          {/* Indicateur d'étapes */}
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-white" />
            <span className={`h-1 w-16 rounded-full ${step === 1 ? 'bg-white' : 'bg-white/20'}`} />
          </div>
          <p className="mb-8 text-sm text-leela-slate-light">Étape {step + 1} / 2</p>

          <form action={formAction} className="text-left">
            {step === 1 && (
              <>
                <input type="hidden" name="firstName" value={values.firstName} />
                <input type="hidden" name="lastName" value={values.lastName} />
                <input type="hidden" name="company" value={values.company} />
              </>
            )}

            {step === 0 ? (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-leela-slate-light">Prénom *</span>
                    <input
                      name="firstName"
                      value={values.firstName}
                      onChange={setValue('firstName')}
                      className={INPUT_CLASS}
                      placeholder="Marie"
                    />
                    {errorFor('firstName') && (
                      <span className="mt-1 block text-sm text-red-400">{errorFor('firstName')}</span>
                    )}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-leela-slate-light">Nom *</span>
                    <input
                      name="lastName"
                      value={values.lastName}
                      onChange={setValue('lastName')}
                      className={INPUT_CLASS}
                      placeholder="Dupont"
                    />
                    {errorFor('lastName') && (
                      <span className="mt-1 block text-sm text-red-400">{errorFor('lastName')}</span>
                    )}
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-leela-slate-light">Entreprise *</span>
                  <input
                    name="company"
                    value={values.company}
                    onChange={setValue('company')}
                    className={INPUT_CLASS}
                    placeholder="Dupont Électricité"
                  />
                  {errorFor('company') && (
                    <span className="mt-1 block text-sm text-red-400">{errorFor('company')}</span>
                  )}
                </label>

                <button
                  type="button"
                  onClick={goToStep2}
                  className="w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-leela-dark-blue transition-all duration-300 hover:bg-leela-light-gray"
                >
                  Continuer →
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-leela-slate-light">
                    Site web ou LinkedIn (optionnel)
                  </span>
                  <input
                    name="socialLink"
                    value={values.socialLink}
                    onChange={setValue('socialLink')}
                    className={INPUT_CLASS}
                    placeholder="https://linkedin.com/company/votre-entreprise"
                  />
                  {errorFor('socialLink') && (
                    <span className="mt-1 block text-sm text-red-400">{errorFor('socialLink')}</span>
                  )}
                </label>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-leela-slate-light">
                      Secteur d'activité *
                    </span>
                    <select
                      name="sector"
                      value={values.sector}
                      onChange={setValue('sector')}
                      className={`${INPUT_CLASS} ${values.sector === '' ? 'text-leela-slate-light/60' : ''}`}
                    >
                      <option value="" disabled className="bg-leela-dark-blue">
                        Sélectionnez…
                      </option>
                      {SECTORS.map((sector) => (
                        <option key={sector} value={sector} className="bg-leela-dark-blue text-white">
                          {sector}
                        </option>
                      ))}
                    </select>
                    {errorFor('sector') && (
                      <span className="mt-1 block text-sm text-red-400">{errorFor('sector')}</span>
                    )}
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-leela-slate-light">
                      Source principale de clients *
                    </span>
                    <select
                      name="clientSource"
                      value={values.clientSource}
                      onChange={setValue('clientSource')}
                      className={`${INPUT_CLASS} ${values.clientSource === '' ? 'text-leela-slate-light/60' : ''}`}
                    >
                      <option value="" disabled className="bg-leela-dark-blue">
                        Sélectionnez…
                      </option>
                      {SOURCES.map((source) => (
                        <option key={source} value={source} className="bg-leela-dark-blue text-white">
                          {source}
                        </option>
                      ))}
                    </select>
                    {errorFor('clientSource') && (
                      <span className="mt-1 block text-sm text-red-400">{errorFor('clientSource')}</span>
                    )}
                  </label>
                </div>

                <SubmitButton />

                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="mx-auto block text-sm text-leela-slate-light underline transition-colors hover:text-white"
                >
                  ← Retour à l'étape 1
                </button>
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-leela-slate-light">Sans engagement. Places limitées.</p>
        </motion.div>
      </div>
    </section>
  )
}