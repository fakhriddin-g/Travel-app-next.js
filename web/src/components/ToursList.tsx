"use client";

export default function ToursList() {
  const tours = [
    { id: 1, name: "Горный тур по Памиру" },
    { id: 2, name: "Культурный тур по Худжанду" },
    { id: 3, name: "Приключение в Фанских горах" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
        >
          {tour.name}
        </div>
      ))}
    </div>
  );
}
