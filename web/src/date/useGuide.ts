interface Guide {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  experience: string; // в годах
  imageUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  languages: string[];
  specialties: string[];
  location: string;
  availability: "available" | "busy" | "unavailable";
  certifications: string[];
}

// Mock data for guides
export const mockGuides: Guide[] = [
  {
    id: "g1",
    name: "Фарход Рахимов",
    description: "Профессиональный горный гид с 12-летним опытом. Специализируется на восхождениях в Памире и Фанских горах. Член Ассоциации горных гидов Таджикистана.",
    pricePerDay: 80,
    experience: "12 лет",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGd1aWRlJTIwbWFufGVufDF8fHx8MTc1NjMxODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviewCount: 87,
    category: "mountains",
    languages: ["Таджикский", "Русский", "Английский"],
    specialties: ["Альпинизм", "Трекинг", "Фотосафари"],
    location: "Памир",
    availability: "available",
    certifications: ["Сертифицированный горный гид", "Первая помощь в горах"]
  },
  {
    id: "g2",
    name: "Зарина Мирзоева",
    description: "Историк и культуролог, специализирующаяся на культурных турах по Душанбе и историческим местам Таджикистана. Автор нескольких книг о традициях Центральной Азии.",
    pricePerDay: 60,
    experience: "8 лет",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGd1aWRlJTIwd29tYW58ZW58MXx8fHwxNzU2MzE4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviewCount: 124,
    category: "cultural",
    languages: ["Таджикский", "Русский", "Английский", "Фарси"],
    specialties: ["История", "Археология", "Традиционные ремесла"],
    location: "Душанбе",
    availability: "available",
    certifications: ["Лицензированный экскурсовод", "Историк-культуролог"]
  },
  {
    id: "g3",
    name: "Акмал Холиков",
    description: "Экстремальный гид и инструктор по альпинизму. Организует приключенческие туры, рафтинг и скалолазание. Имеет международные сертификаты безопасности.",
    pricePerDay: 95,
    experience: "15 лет",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBndWlkZSUyMG1hbnxlbnwxfHx8fDE3NTYzMTg5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviewCount: 156,
    category: "adventure",
    languages: ["Таджикский", "Русский", "Английский"],
    specialties: ["Альпинизм", "Рафтинг", "Скалолазание", "Выживание"],
    location: "Фанские горы",
    availability: "busy",
    certifications: ["Международный инструктор альпинизма", "Спасатель МЧС"]
  },
  {
    id: "g4",
    name: "Мехрангез Юсупова",
    description: "Эколог и биолог, ведущая экотуры по национальным паркам и заповедникам. Специалист по флоре и фауне Памира.",
    pricePerDay: 70,
    experience: "10 лет",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBndWlkZSUyMHdvbWFufGVufDF8fHx8MTc1NjMxODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviewCount: 89,
    category: "nature",
    languages: ["Таджикский", "Русский", "Английский"],
    specialties: ["Экотуризм", "Орнитология", "Ботаника"],
    location: "Национальные парки",
    availability: "available",
    certifications: ["Эколог", "Орнитолог", "Гид по дикой природе"]
  },
  {
    id: "g5",
    name: "Рустам Назаров",
    description: "Историк, специализирующийся на Великом шелковом пути. Проводит туры по древним крепостям, караван-сараям и археологическим памятникам.",
    pricePerDay: 75,
    experience: "14 лет",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwZ3VpZGUlMjBtYW58ZW58MXx8fHwxNzU2MzE4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviewCount: 203,
    category: "historical",
    languages: ["Таджикский", "Русский", "Английский", "Арабский"],
    specialties: ["Археология", "Средневековая история", "Исламская архитектура"],
    location: "Худжанд",
    availability: "available",
    certifications: ["Археолог", "Лицензированный гид", "Историк"]
  },
  {
    id: "g6",
    name: "Нигора Абдуллаева",
    description: "Семейный гид, специализирующаяся на турах для семей с детьми. Организует образовательные и развлекательные программы.",
    pricePerDay: 50,
    experience: "6 лет",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBndWlkZSUyMHdvbWFufGVufDF8fHx8MTc1NjMxODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviewCount: 67,
    category: "family",
    languages: ["Таджикский", "Русский"],
    specialties: ["Семейный туризм", "Детские программы", "Образовательные туры"],
    location: "Душанбе",
    availability: "available",
    certifications: ["Детский психолог", "Педагог", "Гид"]
  }
];