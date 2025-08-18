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
      className={`rounded-[15px] w-[327px] md:w-[188px] lg:w-[255px] lg:h-[244px] ${bgClass} pt-[38px] relative overflow-hidden mx-auto`}
    >
      <Image
        src={iconSrc}
        alt=""
        width={76}
        height={77}
        className="absolute -top-2 right-3 z-0 "
      />
      <div className="bg-[var(--cust-navy-900)] p-6 lg:p-8 lg:bottom-0 lg:absolute lg:w-full rounded-[15px] relative z-10 hover:bg-[var(--cust-navy-800)] cursor-pointer">
        <h2 className="text-white preset-5-md flex justify-between items-center md:mb-4 lg:mb-6">
          {card.title}
          <span className="text-[var(--cust-navy-200)]">
            &#x2022;&#x2022;&#x2022;
          </span>
        </h2>
        <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
          <h3 className="preset-3 text-white md:preset-1">
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
