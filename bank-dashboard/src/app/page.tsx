import { Button, Input } from '../components/ui';
import { Search } from 'lucide-react';
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Input
        startContent={<Search width={20} height={20} />}
        placeholder="Search"
        variant="subtle"
      />
      <Input label="Label" placeholder="Search" />
    </div>
  );
}
