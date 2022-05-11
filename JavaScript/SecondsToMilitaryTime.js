//Convert seconds into HH:MM:SS
function humanReadable (seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
    const second = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${second}`;
}