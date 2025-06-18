const classNames = [
  {
    name: "red",
    className: [
      "bg-red-100",
      "bg-red-200",
      "bg-red-300",
      "bg-red-400",
      "bg-red-500",
      "bg-red-600",
      "bg-red-700",
      "bg-red-800",
      "bg-red-900",
      "bg-red-950",
    ],
  },
];

export default function ColorGrid() {
  return (
    <div className="space-y-10 p-6">
      {classNames.map((className) => (
        <div key={className.name}>
          <h2 className="text-xl font-semibold mb-4 capitalize">
            {className.name}
          </h2>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {className.className.map((tone) => {
              return (
                <div
                  key={tone}
                  className={`${tone} dark:${tone} h-16 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center text-xs text-black dark:text-white`}
                >
                  {tone}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
