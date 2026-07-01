import imgPortada from '../assets/mateo-nueva-portada.jpeg'
import imgTecnico from '../assets/mateo-tecnico.jpeg'
import imgDefensa from '../assets/mateo-defensa.jpeg'
import imgAccion1 from '../assets/mateo-accion-1.jpeg'
import imgAccion2 from '../assets/mateo-accion-2.jpeg'
import imgRetrato from '../assets/mateo-retrato.jpg'

export const ATHLETE = {
  name: 'MATEO NUÑEZ\nMISEREZ',
  nameShort: 'MATEO NÚÑEZ MISEREZ',
  height: '183.5',
  weight: '126',
  eliteCareer: 'ARG U20 • ARG XV U23 • DOGOS XV',
  currentClub: 'OLD RESIAN CLUB',
  university: 'COMERCIO INTERNACIONAL',
  recruitingId: 'ID: MNM-2002-ARG',
  email: 'mateomiserez@gmail.com',
  phone: '+54 9 3496 46-7950',
  location: 'Rosario, Argentina',
}

export const IMAGES = {
  portada: imgPortada,
  tecnico: imgTecnico,
  accion1: imgAccion1,
  accion2: imgAccion2,
  retrato: imgRetrato,
}

export const TRAJECTORY = [
  { year: '2019-22', team: 'ACADEMIA UAR'                        },
  { year: '2022',    team: 'JAGUARES XV'                         },
  { year: '2023-24', team: 'DOGOS XV',         highlight: true   },
  { year: '2024',    team: 'ARGENTINA XV U23', champion: true    },
  { year: '2025',    team: 'CDUL PORTUGAL',    champion: true    },
  { year: '2026',    team: 'OLD RESIAN'                          },
]

export const TECH_STATS = [
  {
    title: 'TÉCNICA DE SCRUM DE ÉLITE',
    desc: 'Excelente postura, espalda recta y empuje coordinado. Diseñado para dominar la trinchera y forzar penales.',
  },
  {
    title: 'SÓLIDO EN EL SET-PIECE',
    desc: 'Levantamiento potente en el lineout y excelente posicionamiento en la estructura y avance del maul.',
  },
  {
    title: 'TRANSPORTE DE PELOTA EXPLOSIVO',
    desc: '126kg de potencia dinámica. Capacidad para romper la línea de ventaja en canales cortos bajo intensa presión defensiva.',
  },
  {
    title: 'LIMPIEZA DE RUCK DE ALTA VELOCIDAD',
    desc: 'Entradas limpias y contundentes que aseguran pelota rápida y limpia para el medio scrum.',
  },
  {
    title: 'TACKLE DOMINANTE',
    desc: 'Tackles ofensivos que frenan el impulso rival y generan oportunidades de recuperación (turnovers).',
  },
]

export const GALLERY = [
  {
    src: imgAccion1,
    alt: 'Match Action Carry',
    label: 'CAM 01 // TRANSPORTE DE PELOTA',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: imgDefensa,
    alt: 'Match Action Scrum',
    label: 'CAM 02 // DEFENSA',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: imgAccion2,
    alt: 'Match Action Contact',
    label: 'CAM 03 // CONTACTO',
    colSpan: 1,
    rowSpan: 1,
  },
]

export const MEDIA_LINKS = [
  {
    title: 'HIGHLIGHT REEL',
    subtitle: 'Mejores jugadas e impacto',
    url: 'https://www.youtube.com/watch?v=owPh4U8scfg',
  },
  {
    title: 'ARGENTINA U20',
    subtitle: 'Partido Completo vs Uruguay (#1)',
    url: 'https://www.youtube.com/watch?v=Yy0UTRGN97Y',
  },
  {
    title: 'DOGOS XV',
    subtitle: 'Súper Rugby Américas (#1)',
    url: 'https://www.youtube.com/watch?v=bhNizTtGbSI',
  },
  {
    title: 'DOGOS XV vs PAMPAS',
    subtitle: 'Partido Completo (#17)',
    url: 'https://www.youtube.com/watch?v=IsKEHNtTb9g',
  },
  {
    title: 'INSTAGRAM',
    subtitle: '@mateonmiserez',
    url: 'https://instagram.com/mateonmiserez',
    icon: 'instagram',
  },
  {
    title: 'LINKEDIN',
    subtitle: 'Red Profesional',
    url: 'https://linkedin.com/in/mateonmiserez',
    icon: 'linkedin',
  },
]
