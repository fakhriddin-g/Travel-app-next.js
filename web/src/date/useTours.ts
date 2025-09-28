import TourCard from "../components/TourCard";

interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  location: string;
  maxGroupSize: number;
  tourType: "local" | "international";
}


export const mockTours: Tour[] = [
  {
    id: "1",
    title: "Памирский тракт - крыша мира",
    description: "Незабываемое путешествие по одной из самых высокогорных дорог мира через величественные пики Памира.",
    price: 850,
    duration: "7 дней",
    imageUrl: "https://images.unsplash.com/photo-1621425022689-308a7b7691a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW1pciUyMG1vdW50YWlucyUyMHRhamlraXN0YW58ZW58MXx8fHwxNzU2MzE4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviewCount: 124,
    category: "mountains",
    location: "Памир",
    maxGroupSize: 8,
    tourType: "local"
  },
  {
    id: "2",
    title: "Душанбе - жемчужина Центральной Азии",
    description: "Откройте для себя столицу Таджикистана с её современными парками, музеями и традиционными базарами.",
    price: 320,
    duration: "3 дня",
    imageUrl: "https://images.unsplash.com/photo-1728288154153-edf28e2400a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXNoYW5iZSUyMGNpdHklMjB0YWppa2lzdGFufGVufDF8fHx8MTc1NjMxODk2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviewCount: 86,
    category: "cultural",
    location: "Душанбе",
    maxGroupSize: 15,
    tourType: "local"
  },
  {
    id: "3",
    title: "Фанские горы - треккинг для души",
    description: "Пешие походы через альпийские луга, кристально чистые озера и заснеженные вершины Фанских гор.",
    price: 650,
    duration: "5 дней",
    imageUrl: "https://images.unsplash.com/photo-1592639296319-4a46ea0f0008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYXNpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTYzMTg5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviewCount: 203,
    category: "adventure",
    location: "Фанские горы",
    maxGroupSize: 6,
    tourType: "local"
  },
  {
    id: "4",
    title: "Шелковый путь - историческое наследие",
    description: "Путешествие по древним торговым маршрутам с посещением исторических городов и крепостей.",
    price: 750,
    duration: "6 дней",
    imageUrl: "https://images.unsplash.com/photo-1599717311201-c7f8606938be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwcm9hZCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTYzMTg5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviewCount: 97,
    category: "historical",
    location: "Худжанд",
    maxGroupSize: 12,
    tourType: "international"
  },
  {
    id: "5",
    title: "Сафед-Дара - каньон чудес",
    description: "Исследование живописного каньона с водопадами, горячими источниками и уникальной флорой.",
    price: 480,
    duration: "4 дня",
    imageUrl: "https://images.unsplash.com/photo-1551188924-967544c805e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWppa2lzdGFuJTIwbW91bnRhaW5zJTIwdG91cmlzbXxlbnwxfHx8fDE3NTYzMTg5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviewCount: 156,
    category: "nature",
    location: "Сафед-Дара",
    maxGroupSize: 10,
    tourType: "local"
  },
  {
    id: "6",
    title: "Искандеркуль - озеро легенд",
    description: "Поездка к священному озеру Искандеркуль с его бирюзовыми водами и окружающими горными пейзажами.",
    price: 420,
    duration: "2 дня",
    imageUrl: "https://images.unsplash.com/photo-1592639296319-4a46ea0f0008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYXNpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTYzMTg5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviewCount: 78,
    category: "nature",
    location: "Искандеркуль",
    maxGroupSize: 20,
    tourType: "local"
  },
  {
    id: "7",
    title: "Таджикистан + Узбекистан - Великий шёлковый путь",
    description: "Комбинированный тур по двум странам с посещением Самарканда, Бухары и исторических мест Таджикистана.",
    price: 1200,
    duration: "10 дней",
    imageUrl: "https://images.unsplash.com/photo-1599717311201-c7f8606938be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwcm9hZCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTYzMTg5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviewCount: 187,
    category: "cultural",
    location: "Таджикистан + Узбекистан",
    maxGroupSize: 16,
    tourType: "international"
  },
  {
    id: "8",
    title: "Памир - Гиндукуш экспедиция",
    description: "Трансграничная экспедиция через Памир в Афганистан и Пакистан для опытных путешественников.",
    price: 2500,
    duration: "14 дней",
    imageUrl: "https://images.unsplash.com/photo-1621425022689-308a7b7691a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW1pciUyMG1vdW50YWlucyUyMHRhamlraXN0YW58ZW58MXx8fHwxNzU2MzE4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviewCount: 92,
    category: "adventure",
    location: "Памир - Гиндукуш",
    maxGroupSize: 6,
    tourType: "international"
  },
  {
    id: "9",
    title: "Центральная Азия - культурное наследие",
    description: "Путешествие по Таджикистану, Киргизии и Казахстану с изучением общего культурного наследия региона.",
    price: 1800,
    duration: "12 дней",
    imageUrl: "https://images.unsplash.com/photo-1728288154153-edf28e2400a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXNoYW5iZSUyMGNpdHklMjB0YWppa2lzdGFufGVufDF8fHx8MTc1NjMxODk2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviewCount: 134,
    category: "historical",
    location: "Центральная Азия",
    maxGroupSize: 12,
    tourType: "international"
  }
];