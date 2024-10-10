'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'

export function DocsHeader({ title }) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )
  let link = section?.links?.find((link) => link.href === pathname)

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      <title>{section.title + ' | ' + link?.title || ''}</title>
      <meta name="description" content={section?.desc || ''}></meta>
      {section && (
        <p className="font-display text-sm font-medium text-sky-500">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
      )}
    </header>
  )
}
