export const spellingToRegex = (pattern: string): RegExp =>
  new RegExp(
    pattern
      .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
      .replace(/\\\.\\\.\\\./g, '.'),
    'i',
  )

export const ipaToRegex = (pattern: string): RegExp =>
  new RegExp(pattern.replace('/', '').replace(':', ''), 'i')
