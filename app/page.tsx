import { getAllCards } from '@/lib/cards';
import CardEl from './components/cardEl';
import Header from './components/header';

export default async function Home() {
  const data = await getAllCards();
  console.log(data);
  return (
    <div className="bg-[var(--cust-navy-950)] grid min-h-[100vh] justify-center items-center">
      <Header />
      {data.map((card) => (
        <CardEl key={card.title} card={card} />
      ))}
    </div>
  );
}
