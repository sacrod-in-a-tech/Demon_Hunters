// Exact supplied CTF / hackathon participation history.
// Year grouping is preserved exactly as provided, even where an event
// name references a different year than the section it's grouped under.

export interface HistoryYear {
  year: string
  events: string[]
}

export const history: HistoryYear[] = [
  {
    year: '2026',
    events: [
      'Hack Astra',
      'Junior Crypt 2026 CTF',
      'Boro CTF',
      'NNS CTF',
      'BDsec CTF',
      'scripCTF',
      'Jail CTF',
      'AMD Developer Hackathon',
      'Lumbini (Hack for Safety) Hackathon',
    ],
  },
  {
    year: '2025',
    events: [
      'hxp 39C3 CTF',
      'TSG CTF 2025',
      'BSides Algiers 2025',
      'Cybercoliseum IV',
      'niteCTF 2025',
      'NexHunt CTF',
      'VuwCTF 2025',
      'BlackHat MEA CTF Final 2025',
      'P3rf3ctr00t CTF 2025',
      'HeroCTF v7',
      '2025 Qiangwang Challenge on Cyber Mimic Defense Finals',
      'CTFZone 2025 Final',
      'PatriotCTF 2025',
      'MetaCTF November 2025 Flash CTF',
      'snakeCTF 2025 Finals',
    ],
  },
  {
    year: '2024',
    events: [
      'ASIS CTF Finals 2024',
      'hxp 38C3 CTF',
      '0xL4ugh CTF',
      'BackdoorCTF 2024',
      'NTUA_H4CK',
      'm0leCon 2025 Beginner CTF',
      'TSG CTF 2024',
      'THJCC CTF 2024 winter',
    ],
  },
  {
    year: '2023',
    events: [
      'New Year CTF 2024',
      '37C3 Potluck CTF',
      "Code X Sport Jung'23 CTF",
      'SECCON CTF 2023 International Finals',
      'niteCTF',
    ],
  },
  {
    year: '2022',
    events: [
      'ASIS CTF Finals 2022',
      'niteCTF',
      'Damncon 2022',
      'ISITDTU CTF 2022 Finals',
      'BackdoorCTF 2022',
      'Junior School CTF',
      'pingCTF 2022',
      'X-MAS CTF 2022',
      'NahamCon EU 2022 CTF',
      'Jule CTF',
      'INTENT CTF 2022',
      'STEM CTF: Cyber Challenge 2022',
      'BSides Mumbai CTF 2022',
    ],
  },
]

export const historyYears = history.map((h) => h.year)
export const totalEvents = history.reduce((sum, h) => sum + h.events.length, 0)
export const yearsActive = history.length
export const totalHackathons = history.reduce(
  (sum, h) => sum + h.events.filter((e) => /hackathon/i.test(e)).length,
  0
)
export const totalCTFs = totalEvents - totalHackathons
