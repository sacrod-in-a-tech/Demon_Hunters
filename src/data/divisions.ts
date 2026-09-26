export const LEADER_NAME = 'Anish Parajuli'

export type HunterGender = 'male' | 'female'

export interface Division {
  id: string
  number: string
  name: string
  shortName: string
  captain: string | null
  members: string[]
  description: string
}

export const divisions: Division[] = [
  {
    id: 'web-system-exploit',
    number: '01',
    name: 'Web & System Exploit',
    shortName: 'Web & System Exploit',
    captain: 'Nikesh Munikar',
    members: ['Sudip KC', 'Utsav Rai', 'Nimesh Gurung'],
    description:
      'Offensive research into web applications and system-level targets — breaking the surfaces attackers actually go after first.',
  },
  {
    id: 'reverse-engineering',
    number: '02',
    name: 'Reverse Engineering',
    shortName: 'Reverse Engineering',
    captain: LEADER_NAME,
    members: [],
    description:
      'Taking binaries apart to understand exactly how they work — and where they stop working the way they should.',
  },
  {
    id: 'cryptography',
    number: '03',
    name: 'Cryptography',
    shortName: 'Cryptography',
    captain: 'Anjit Paswan',
    members: ['Jenish Maharjan'],
    description:
      'Cipher analysis, protocol weaknesses, and the mathematics behind why some encryption schemes fail under pressure.',
  },
  {
    id: 'digital-forensics',
    number: '04',
    name: 'Digital Forensics',
    shortName: 'Digital Forensics',
    captain: 'Prabind Kuram Mahato',
    members: [
      'Abiral Timalsina',
      'Sulakshan Thapa',
      'Rahul Chaudhary',
      'Payal Chaudhary',
    ],
    description:
      'Reconstructing what happened from what was left behind — disk images, memory dumps, logs, and digital artifacts.',
  },
  {
    id: 'osint-blue-team',
    number: '05',
    name: 'OSINT (Blue Team)',
    shortName: 'OSINT (Blue Team)',
    captain: 'Lokendra Thapa Kshetri',
    members: [
      'Sajjan Adhikari',
      'Adesh Pun',
      'Alisha Rokka',
      'Om Prakash Shah',
    ],
    description:
      'Open-source intelligence and defensive monitoring — mapping exposure and watching for what the offense would exploit.',
  },
  {
    id: 'tools',
    number: '06',
    name: 'Tools',
    shortName: 'Tools',
    captain: null,
    members: [],
    description:
      'Internal tooling and automation built to keep every other division moving faster.',
  },
]

export interface Hunter {
  name: string
  divisionId: string
  divisionName: string
  isCaptain: boolean
  isLeader: boolean
  gender: HunterGender
}

const genderByName: Record<string, HunterGender> = {
  'Nikesh Munikar': 'male',
  'Sudip KC': 'male',
  'Utsav Rai': 'male',
  'Nimesh Gurung': 'male',

  'Anish Parajuli': 'male',

  'Anjit Paswan': 'male',
  'Jenish Maharjan': 'male',

  'Prabind Kuram Mahato': 'male',
  'Abiral Timalsina': 'male',
  'Sulakshan Thapa': 'male',
  'Rahul Chaudhary': 'male',
  'Payal Chaudhary': 'female',

  'Lokendra Thapa Kshetri': 'male',
  'Sajjan Adhikari': 'male',
  'Adesh Pun': 'male',
  'Alisha Rokka': 'female',
  'Om Prakash Shah': 'male',
}

export const hunters: Hunter[] = divisions.flatMap((division) => {
  const entries: Hunter[] = []

  if (division.captain) {
    entries.push({
      name: division.captain,
      divisionId: division.id,
      divisionName: division.name,
      isCaptain: true,
      isLeader: division.captain === LEADER_NAME,
      gender: genderByName[division.captain] ?? 'male',
    })
  }

  division.members
    .filter((name) => name !== division.captain)
    .forEach((name) => {
      entries.push({
        name,
        divisionId: division.id,
        divisionName: division.name,
        isCaptain: false,
        isLeader: false,
        gender: genderByName[name] ?? 'male',
      })
    })

  return entries
})

export const leader = hunters.find((hunter) => hunter.isLeader) ?? null

export function getDivisionById(id: string | null): Division | undefined {
  return divisions.find((division) => division.id === id)
}

export function getHuntersByDivision(
  divisionId: string | 'all',
): Hunter[] {
  if (divisionId === 'all') {
    return hunters
  }

  return hunters.filter((hunter) => hunter.divisionId === divisionId)
}

export const totalHunters = hunters.length
export const totalDivisions = divisions.length