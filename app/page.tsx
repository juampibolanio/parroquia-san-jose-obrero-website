import HeroSection from '@/components/home/HeroSection';
import NoticeBanner from '@/components/home/NoticeBanner';
import Identity from '@/components/home/Identity';
import Schedules from '@/components/home/Schedules';
import YouthGroup from '@/components/home/YouthGroup';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <NoticeBanner />
      <Identity />
      <Schedules />
      <YouthGroup />
    </div>
  );
}