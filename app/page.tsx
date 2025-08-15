import { getAllCards } from '@/lib/cards';
import CardEl from './components/cardEl';
import Header from './components/header';

export default async function Home() {
  const data = await getAllCards();
  console.log(data);
  return (
    <div className="bg-[var(--cust-navy-950)] grid gap-6 min-h-[100vh] justify-center items-center py-20">
      <Header />
      {data.map((card) => (
        <CardEl key={card.title} card={card} />
      ))}
    </div>
  );
}
