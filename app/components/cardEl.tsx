'use client';

import Image from 'next/image';
import type { Card } from '@/types';

type CardElProps = {
  card: Card;
  timeframe: 'daily' | 'weekly' | 'monthly';
};

export default function CardEl({ card, timeframe }: CardElProps) {
  // Bg-color mapping
  const bgColors: Record<string, string> = {
    Work: 'bg-[var(--cust-orange-300)]',
    Play: 'bg-[var(--cust-blue-300)]',
    Study: 'bg-[var(--cust-pink-400)]',
    Exercise: 'bg-[var(--cust-green-400)]',
    Social: 'bg-[var(--cust-purple-700)]',
    default: 'bg-[var(--cust-yellow-300)]',
  };

  // Icon mapping
  const icons: Record<string, string> = {
    Work: '/icon-work.svg',
    Play: '/icon-play.svg',
    Study: '/icon-study.svg',
    Exercise: '/icon-exercise.svg',
    Social: '/icon-social.svg',
    'Self Care': '/icon-self-care.svg',
  };

  // Timeframe mapping
  const time: Record<string, string> = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month',
  };
  const iconSrc = icons[card.title] || '/icon-default.svg';

  const bgClass = bgColors[card.title] || bgColors.default;

  const lastTime = time[timeframe];

  return (
    <div
      className={`rounded-[15px] w-[327px] ${bgClass} pt-[38px] relative overflow-hidden`}
    >
      <Image
        src={iconSrc}
        alt=""
        width={76}
        height={77}
        className="absolute -top-2 right-3 z-0 "
      />
      <div className="bg-[var(--cust-navy-900)] p-6 rounded-[15px] relative z-10">
        <h2 className="text-white preset-5-md flex justify-between items-center">
          {card.title}
          <span className="text-[var(--cust-navy-200)]">
            &#x2022;&#x2022;&#x2022;
          </span>
        </h2>
        <div className="flex items-center justify-between">
          <h3 className="preset-3 text-white">
            {card.timeframes[timeframe].current}hrs
          </h3>
          <h4 className="preset-6 text-[var(--cust-navy-200)]">
            {lastTime} - {card.timeframes[timeframe].previous}hrs
          </h4>
        </div>
      </div>
    </div>
  );
}
