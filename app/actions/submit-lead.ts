'use server'

import { redirect } from 'next/navigation'

// NOTE DEV: Remplacer par ton vrai lien Cal.com
const CAL_COM_BASE = 'https://cal.com/TON-LIEN'

export type LeadField =
  | 'firstName'
  | 'lastName'
  | 'company'
  | 'socialLink'
  | 'sector'
  | 'clientSource'

export type LeadFormState = {
  errors: Partial<Record<LeadField, string>>
}

const REQUIRED: LeadField[] = ['firstName', 'lastName', 'company', 'sector', 'clientSource']

const LABELS: Record<LeadField, string> = {
  firstName: 'Prénom',
  lastName: 'Nom',
  company: 'Entreprise',
  socialLink: 'Lien réseaux sociaux',
  sector: "Secteur d'activité",
  clientSource: 'Source principale de clients',
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const errors: LeadFormState['errors'] = {}

  for (const field of REQUIRED) {
    const value = formData.get(field)
    if (typeof value !== 'string' || value.trim() === '') {
      errors[field] = `${LABELS[field]} est requis.`
    }
  }

  const socialLink = formData.get('socialLink')
  if (typeof socialLink === 'string' && socialLink.trim() !== '') {
    try {
      const normalized = socialLink.startsWith('http') ? socialLink : `https://${socialLink}`
      new URL(normalized)
    } catch {
      errors.socialLink = 'Lien invalide (ex : https://linkedin.com/company/votre-entreprise).'
    }
  }

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  const params = new URLSearchParams({
    firstName: String(formData.get('firstName')),
    lastName: String(formData.get('lastName')),
    company: String(formData.get('company')),
    sector: String(formData.get('sector')),
    clientSource: String(formData.get('clientSource')),
  })
  if (typeof socialLink === 'string' && socialLink.trim() !== '') {
    params.set('socialLink', socialLink.trim())
  }

  redirect(`${CAL_COM_BASE}?${params.toString()}`)
}