"use client";

export default function GuidesList() {
  const guides = [
    { id: 1, name: "Ахмад — гид по Душанбе" },
    { id: 2, name: "Зариф — гид по Памиру" },
    { id: 3, name: "Манижа — культурный гид" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {guides.map((guide) => (
        <div
          key={guide.id}
          className="p-4 bg-blue-100 rounded-lg shadow hover:shadow-lg transition"
        >
          {guide.name}
        </div>
      ))}
    </div>
  );
}
