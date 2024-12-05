export function formatJoinDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'short',
    }).format(date);
}
