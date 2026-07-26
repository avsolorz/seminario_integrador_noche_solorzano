// Lista de eventos programados por el gestor

interface Evento {
  nombre: string
  icono: string
  asistentes: number
}

interface EventListProps {
  eventos: Evento[]
  title?: string
}

export default function EventList({ eventos, title = 'Eventos' }: EventListProps) {
  if (eventos.length === 0) {
    return <p style={{ color: '#999' }}>No hay eventos programados.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {eventos.map((evento) => (
          <li
            key={evento.nombre}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{evento.icono} {evento.nombre}</span>
            <span style={{ color: '#888', fontSize: 13 }}>{evento.asistentes} asistentes</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
