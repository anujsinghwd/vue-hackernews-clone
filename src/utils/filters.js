export function host(url) {
    const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    const ports = host.split('.').slice(-3)
    if (ports[0] === 'www') ports.shift()
    return ports.join('.')
}