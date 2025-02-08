import Hero from "@/components/hero";
import Partner from "@/components/partner";
import Inbox from "@/components/inbox";
import Blogs from "./blog/page";


export default function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <Blogs />
      <Inbox />
    </div>

  );
}
