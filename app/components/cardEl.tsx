import Image from 'next/image';
import type { Card } from '@/types';

export default function CardEl({ card }: { card: Card }) {
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
  const iconSrc = icons[card.title] || '/icon-default.svg';

  const bgClass = bgColors[card.title] || bgColors.default;

  return (
    <div className={`rounded-[15px] w-[327px] ${bgClass} pt-[38px] relative`}>
      {/**  Conditionally render card bg **/}
      {/** Conditionally render the svg **/}
      <Image
        src={iconSrc}
        alt=""
        width={76}
        height={77}
        className="absolute top-0 right-4 z-0"
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
            {card.timeframes.daily.current}
          </h3>
          <h4 className="preset-6 text-[var(--cust-navy-200)]">
            {card.timeframes.daily.previous}
          </h4>
        </div>
      </div>
    </div>
  );
}
