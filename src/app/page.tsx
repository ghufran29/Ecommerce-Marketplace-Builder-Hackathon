import Category from "@/components/Category";
import FollowUs from "@/components/FollowUs";
import HeroSection from "@/components/HeroSection";
import NewArrival from "@/components/NewArrival";
import OurBlogs from "@/components/OurBlogs";
import TopPicks from "@/components/TopPicks";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Category/>
      <TopPicks/>
      <NewArrival/>
      <OurBlogs/>
      <FollowUs/>
    </main>
  );
}
