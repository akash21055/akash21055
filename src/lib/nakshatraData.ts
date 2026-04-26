export interface NakshatraDetail {
  id: number;
  name: string;
  description: string;
  color: string;
  image: string;
  rulingDeity: string;
  element?: string;
}

export const nakshatras: NakshatraDetail[] = [
  {
    id: 1,
    name: "Ashwini",
    description:
      "Ashwini, the first nakshatra, represents speed, healing, and new beginnings. Ruled by the Ashwini Kumaras, it carries youthful, dynamic energy and a pioneering spirit. People influenced by this nakshatra are often quick thinkers and action-oriented. It encourages initiative, vitality, and the ability to start fresh with optimism and courage.",
    color: "#ef4444",
    rulingDeity: "Ashwini Kumaras",
    image: "/images/nakshatra/ashwini.png",
  },
  {
    id: 2,
    name: "Bharani",
    description:
      "Bharani symbolizes creation, transformation, and the life force. Governed by Yama, it reflects discipline, responsibility, and inner strength. This nakshatra deals with themes of birth, death, and rebirth, encouraging endurance and emotional resilience. It often brings intense experiences that shape character and push individuals toward growth and self-realization.",
    color: "#f97316",
    rulingDeity: "Yama",
    image: "/images/nakshatra/bharani.png",
  },
  {
    id: 3,
    name: "Krittika",
    description:
      "Krittika is associated with fire, purification, and sharp intellect. Ruled by Agni, it represents the power to burn away impurities and reveal truth. This nakshatra gives courage, determination, and clarity. Individuals connected to Krittika are often strong-willed, direct, and capable of cutting through confusion to achieve their goals.",
    color: "#fbbf24",
    rulingDeity: "Agni",
    image: "/images/nakshatra/kritika.png",
  },
  {
    id: 4,
    name: "Rohini",
    description:
      "Rohini embodies beauty, fertility, and abundance. Ruled by the Moon, it is deeply connected to creativity, sensuality, and nurturing energy. This nakshatra attracts growth and prosperity, making it highly auspicious. It encourages artistic expression, emotional depth, and a strong connection to nature, comfort, and material as well as spiritual fulfillment.",
    color: "#ec4899",
    rulingDeity: "Brahma",
    image: "/images/nakshatra/rohini.png",
  },
  {
    id: 5,
    name: "Mrigashira",
    description:
      "Mrigashira represents curiosity, exploration, and the search for truth. Symbolized by a deer's head, it carries gentle, restless energy that seeks knowledge and new experiences. This nakshatra promotes adaptability, communication, and intellectual pursuits. It often reflects a longing for deeper understanding in relationships, spirituality, and life's mysteries.",
    color: "#8b5cf6",
    rulingDeity: "Soma",
    image: "/images/nakshatra/mrigshira.png",
  },
  {
    id: 6,
    name: "Ardra",
    description:
      "Ardra is the nakshatra of storms, transformation, and emotional intensity. Ruled by Rudra, it signifies destruction that leads to renewal. It brings deep feelings, challenges, and powerful change. This nakshatra encourages resilience, growth through adversity, and the ability to rebuild stronger after periods of upheaval and inner turmoil.",
    color: "#06b6d4",
    rulingDeity: "Rudra",
    image: "/images/nakshatra/ardra.png",
  },
  {
    id: 7,
    name: "Punarvasu",
    description:
      "Punarvasu represents renewal, return, and restoration. Governed by Aditi, it symbolizes infinite potential and nurturing energy. This nakshatra brings optimism, faith, and the ability to recover from setbacks. It encourages starting again with wisdom gained from experience, promoting balance, harmony, and a return to light after darkness.",
    color: "#22c55e",
    rulingDeity: "Aditi",
    image: "/images/nakshatra/punarvasu.png",
  },
  {
    id: 8,
    name: "Pushya",
    description:
      "Pushya is known as the nourisher and one of the most auspicious nakshatras. Ruled by Brihaspati, it represents growth, spirituality, and divine blessings. It encourages compassion, teaching, and protection. This nakshatra supports success in spiritual and material pursuits, fostering stability, wisdom, and the ability to nurture others with care and generosity.",
    color: "#10b981",
    rulingDeity: "Brihaspati",
    image: "/images/nakshatra/pushya.png",
  },
  {
    id: 9,
    name: "Ashlesha",
    description:
      "Ashlesha symbolizes mystery, intuition, and hidden power. Ruled by the Nagas, it is deeply connected to transformation and psychological depth. This nakshatra often deals with secrecy, emotional complexity, and inner strength. It encourages introspection and the ability to understand unseen forces, making it powerful yet sometimes challenging to navigate.",
    color: "#14b8a6",
    rulingDeity: "Nagas",
    image: "/images/nakshatra/ashlesha.png",
  },
  {
    id: 10,
    name: "Magha",
    description:
      "Magha represents royalty, authority, and ancestral heritage. Ruled by the Pitris, it emphasizes tradition, honor, and lineage. This nakshatra carries strong leadership qualities and a sense of pride. It encourages respect for roots and cultural values while inspiring individuals to take responsibility and lead with dignity and confidence.",
    color: "#f59e0b",
    rulingDeity: "Pitris",
    image: "/images/nakshatra/Magha.png",
  },
  {
    id: 11,
    name: "Purva Phalguni",
    description:
      "Purva Phalguni is associated with pleasure, creativity, and relaxation. Ruled by Bhaga, it reflects enjoyment, love, and artistic expression. This nakshatra encourages social connections, beauty, and leisure. It brings charm, romance, and a desire for comfort, making it ideal for creative pursuits and celebrating life's joys.",
    color: "#d97706",
    rulingDeity: "Bhaga",
    image: "/images/nakshatra/purvaphalguni.png",
  },
  {
    id: 12,
    name: "Uttara Phalguni",
    description:
      "Uttara Phalguni symbolizes commitment, partnership, and long-term stability. Governed by Aryaman, it represents agreements, support, and mutual growth. This nakshatra encourages loyalty, responsibility, and meaningful relationships. It is associated with lasting success, cooperation, and the ability to build strong foundations in both personal and professional life.",
    color: "#ea580c",
    rulingDeity: "Aryaman",
    image: "/images/nakshatra/uttraphalguni.png",
  },
  {
    id: 13,
    name: "Hasta",
    description:
      "Hasta is the nakshatra of skill, craftsmanship, and manifestation. Ruled by Savitar, it represents creativity through the hands and the power to shape reality. This nakshatra encourages intelligence, dexterity, and precision. It supports success in creative and technical fields, emphasizing the ability to turn ideas into tangible results.",
    color: "#dc2626",
    rulingDeity: "Savitar",
    image: "/images/nakshatra/Hasta_nakshatra.png",
  },
  {
    id: 14,
    name: "Chitra",
    description:
      "Chitra shines with beauty, brilliance, and artistic excellence. Ruled by Vishvakarma, the celestial architect, it is associated with design, creativity, and aesthetics. This nakshatra inspires innovation and visual appeal. It encourages individuals to create, decorate, and bring beauty into the world through imagination and skilled craftsmanship.",
    color: "#b91c1c",
    rulingDeity: "Vishvakarma",
    image: "/images/nakshatra/chitra.png",
  },
  {
    id: 15,
    name: "Swati",
    description:
      "Swati represents independence, flexibility, and adaptability. Ruled by Vayu, the wind god, it symbolizes freedom and movement. This nakshatra encourages self-reliance and growth through exploration. It allows individuals to adapt to changing circumstances while maintaining individuality, making it ideal for learning, travel, and personal development.",
    color: "#7c2d12",
    rulingDeity: "Vayu",
    image: "/images/nakshatra/swati.png",
  },
  {
    id: 16,
    name: "Vishakha",
    description:
      "Vishakha is driven by ambition, determination, and focus. Ruled by Indra and Agni, it represents the pursuit of goals and success. This nakshatra encourages persistence and dedication. It often brings a strong desire to achieve and excel, motivating individuals to overcome obstacles and reach their highest potential.",
    color: "#92400e",
    rulingDeity: "Indra and Agni",
    image: "/images/nakshatra/Vishakha.png",
  },
  {
    id: 17,
    name: "Anuradha",
    description:
      "Anuradha is the nakshatra of friendship, devotion, and harmony. Ruled by Mitra, it emphasizes cooperation and meaningful relationships. This nakshatra fosters loyalty, emotional balance, and teamwork. It encourages building strong connections and maintaining harmony in personal and professional life, making it supportive and nurturing in nature.",
    color: "#b45309",
    rulingDeity: "Mitra",
    image: "/images/nakshatra/anuradha.png",
  },
  {
    id: 18,
    name: "Jyeshtha",
    description:
      "Jyeshtha signifies seniority, authority, and protection. Ruled by Indra, it represents leadership and responsibility. This nakshatra carries strong willpower and resilience. It encourages individuals to take charge and protect others, often bringing challenges that require maturity, strength, and the ability to handle power wisely.",
    color: "#a16207",
    rulingDeity: "Indra",
    image: "/images/nakshatra/jyeshtha.png",
  },
  {
    id: 19,
    name: "Mula",
    description:
      "Mula represents roots, destruction, and deep transformation. Ruled by Nirriti, it symbolizes the breaking down of illusions to uncover truth. This nakshatra encourages introspection and a search for deeper meaning. It often brings intense experiences that lead to profound personal growth and a clearer understanding of life's foundations.",
    color: "#713f12",
    rulingDeity: "Nirriti",
    image: "/images/nakshatra/mula.png",
  },
  {
    id: 20,
    name: "Purva Ashadha",
    description:
      "Purva Ashadha reflects confidence, strength, and invincibility. Ruled by Apas, it is associated with water and emotional power. This nakshatra encourages self-expression and determination. It brings enthusiasm and optimism, helping individuals stand firm in their beliefs while pursuing success with passion and inner strength.",
    color: "#451a03",
    rulingDeity: "Apas",
    image: "/images/nakshatra/purva_ashadha.png",
  },
  {
    id: 21,
    name: "Uttara Ashadha",
    description:
      "Uttara Ashadha represents lasting victory, leadership, and perseverance. Ruled by the Vishvadevas, it symbolizes universal principles and righteousness. This nakshatra encourages discipline, responsibility, and long-term success. It inspires individuals to achieve goals through consistent effort, integrity, and a strong sense of purpose.",
    color: "#78350f",
    rulingDeity: "Vishvadevas",
    image: "/images/nakshatra/uttraashadha.png",
  },
  {
    id: 22,
    name: "Shravana",
    description:
      "Shravana is the nakshatra of listening, learning, and wisdom. Ruled by Vishnu, it emphasizes knowledge and communication. This nakshatra encourages curiosity and the ability to absorb information. It supports teaching, storytelling, and spiritual growth, making it ideal for gaining insight and sharing knowledge with others.",
    color: "#92400e",
    rulingDeity: "Vishnu",
    image: "/images/nakshatra/shravana.png",
  },
  {
    id: 23,
    name: "Dhanishta",
    description:
      "Dhanishta is associated with rhythm, prosperity, and success. Ruled by the Vasus, it represents wealth and fame. This nakshatra encourages confidence, ambition, and social connections. It brings opportunities for growth and recognition, often supporting careers in music, performance, and leadership roles.",
    color: "#7c2d12",
    rulingDeity: "Vasus",
    image: "/images/nakshatra/Dhanishtha.png",
  },
  {
    id: 24,
    name: "Shatabhisha",
    description:
      "Shatabhisha is the nakshatra of healing, mystery, and introspection. Ruled by Varuna, it is connected to secrecy and deep insight. This nakshatra encourages self-reflection and spiritual growth. It often brings a desire to understand hidden truths and supports healing, both physically and emotionally.",
    color: "#5b21b6",
    rulingDeity: "Varuna",
    image: "/images/nakshatra/shatbhisha.png",
  },
  {
    id: 25,
    name: "Purva Bhadrapada",
    description:
      "Purva Bhadrapada represents intensity, transformation, and spiritual awakening. Ruled by Aja Ekapada, it reflects duality and extremes. This nakshatra encourages deep thinking and inner change. It often brings powerful experiences that challenge individuals to evolve and embrace higher levels of consciousness.",
    color: "#6d28d9",
    rulingDeity: "Aja Ekapada",
    image: "/images/nakshatra/purvabhadrapad.png",
  },
  {
    id: 26,
    name: "Uttara Bhadrapada",
    description:
      "Uttara Bhadrapada symbolizes stability, wisdom, and inner depth. Ruled by Ahirbudhnya, it represents calmness and understanding. This nakshatra encourages patience and spiritual insight. It supports emotional balance and the ability to remain grounded while exploring deeper truths about life and existence.",
    color: "#7e22ce",
    rulingDeity: "Ahirbudhnya",
    image: "/images/nakshatra/uttrabhadrapad.png",
  },
  {
    id: 27,
    name: "Revati",
    description:
      "Revati, the final nakshatra, represents completion, guidance, and protection. Ruled by Pushan, it is associated with safe journeys and nourishment. This nakshatra encourages kindness, compassion, and spiritual growth. It brings a sense of fulfillment and helps individuals transition smoothly into new phases of life.",
    color: "#6366f1",
    rulingDeity: "Pushan",
    image: "/images/nakshatra/revati.png",
  },
];

export function getNakshatraByName(name: string): NakshatraDetail | null {
  return (
    nakshatras.find((n) => n.name.toLowerCase() === name.toLowerCase()) || null
  );
}

export function getNakshatraById(id: number): NakshatraDetail | null {
  return nakshatras.find((n) => n.id === id) || null;
}

export function getAllNakshatraNames(): string[] {
  return nakshatras.map((n) => n.name.toLowerCase());
}

export function getNakshatraColor(name: string): string {
  const nakshatra = getNakshatraByName(name);
  return nakshatra?.color || "#6366f1";
}
