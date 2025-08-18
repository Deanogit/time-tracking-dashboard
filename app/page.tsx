'use client';

import { useState, useEffect } from 'react';
import { getAllCards } from '@/lib/cards';
import CardEl from './components/cardEl';
import Header from './components/header';
import type { Card } from '@/types';

export default function Home() {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>(
    'daily'
  );

  useEffect(() => {
    async function fetchData() {
      const data = await getAllCards();
      setCards(data);
    }
    fetchData();
  }, []);

  const data = getAllCards();
  console.log(data);
  return (
    <div className="grid gap-6 lg:gap-8 justify-center items-center py-20 grid-cols-1 md:grid-cols-3 md:grid-rows-3 w-[327px] md:w-[612px] lg:grid-cols-4 lg:grid-rows-2 lg:w-[1116px] mx-auto">
      <Header timeframe={timeframe} setTimeframe={setTimeframe} />
      {cards
        ? cards.map((card) => (
            <CardEl key={card.title} card={card} timeframe={timeframe} />
          ))
        : Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[15px] w-[327px] h-40 bg-gray-700 animate-pulse"
            ></div>
          ))}
    </div>
  );
}
