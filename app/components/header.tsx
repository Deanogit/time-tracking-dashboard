import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-[var(--cust-navy-900)] rounded-[15px] w-[327px]">
      <div className="flex items-center bg-[var(--cust-purple-600)] p-8 rounded-[15px] ">
        <Image
          src="/image-jeremy.png"
          alt="Avatar image"
          width={234}
          height={234}
          className="w-16 h-16 border-2 border-white rounded-full mr-6"
        />
        <div>
          <p className="preset-6 text-[var(--cust-navy-200)]">Report for</p>
          <h1 className="preset-4 text-white">Jeremy Robson</h1>
        </div>
      </div>
      <ul className="text-[var(--cust-purple-500)] flex justify-around py-6 preset-5-reg">
        <li>
          <button className="hover:text-white cursor-pointer">Daily</button>
        </li>
        <li>
          <button className="hover:text-white cursor-pointer">Weekly</button>
        </li>
        <li>
          <button className="hover:text-white cursor-pointer">Monthly</button>
        </li>
      </ul>
    </div>
  );
}
