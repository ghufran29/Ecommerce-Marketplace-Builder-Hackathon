import Category from "@/components/Category";
import FollowUs from "@/components/FollowUs";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import NewArrival from "@/components/NewArrival";
import OurBlogs from "@/components/OurBlogs";
import TopPicks from "@/components/TopPicks";

export default function Home() {
  return (
    <main>
      {/* <Hero/> */}
      <HeroSection/>
      <Category/>
      <TopPicks/>
      <NewArrival/>
      <OurBlogs/>
      <FollowUs/>
    </main>
  );
}
