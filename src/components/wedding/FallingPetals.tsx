import { useEffect, useState, useMemo } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  const petalEmojis = useMemo(() => ["🌸", "🌷", "💮", "🏵️", "✿"], []);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 10,
      size: 0.8 + Math.random() * 0.8,
      opacity: 0.4 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal absolute text-2xl"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s, ${petal.duration / 2}s`,
            fontSize: `${petal.size}rem`,
            opacity: petal.opacity,
          }}
        >
          {petalEmojis[petal.id % petalEmojis.length]}
        </span>
      ))}
    </div>
  );
};
