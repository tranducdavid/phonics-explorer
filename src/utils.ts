export const spellingToRegex = (pattern: string): RegExp => {
  const specialChars = /[-/\\^$*+?.()|[\]{}]/g
  pattern = pattern.replace(specialChars, '\\$&')

  pattern = pattern.replace(/\\\.\\\.\\\./g, '.')

  const regexPattern = new RegExp(pattern, 'i')

  return regexPattern
}
