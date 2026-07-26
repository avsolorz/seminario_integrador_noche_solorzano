// Saludo de bienvenida al organizador a cargo de un evento

interface OrganizerGreetingProps {
  organizador: string
  eventoACargo?: string
}

export default function OrganizerGreeting({ organizador, eventoACargo }: OrganizerGreetingProps) {
  const initials = organizador
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: '#6366f1',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
        }}
      >
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Hola, {organizador}</p>
        {eventoACargo && (
          <p style={{ margin: 0, fontSize: 13, color: '#888' }}>A cargo de: {eventoACargo}</p>
        )}
      </div>
    </div>
  )
}
