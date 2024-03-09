import ContactForm from "@/components/contact_form";
import HotNews from "@/components/home/hot_spot_crawler";
import CustomNavbar from "@/components/navigation_bar";
import Sidebar from "@/components/sidebar";

export default function Fengye7Home() {
  return (
    <>
      <CustomNavbar />
      <Sidebar />
      <ContactForm />
      <HotNews/>
    </>
  );
}
