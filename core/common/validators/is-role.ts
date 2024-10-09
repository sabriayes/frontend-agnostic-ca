export function isRole(cur: string, roles: object) {
    return Object.values(roles).includes(cur);
}
