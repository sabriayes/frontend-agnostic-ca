export function getInitials(name: string) {
    return name
        .split(' ')
        .slice(0, 2)
        .map(c => c[0] || '')
        .filter(Boolean)
        .join('')
        .toLocaleUpperCase();
}
