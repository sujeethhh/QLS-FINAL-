
import EventPageClient from "@/components/EventPageClient";

export const metadata = {
  title: "Upcoming IT Training Events & Courses in Hyderabad | QuickLearn Systems",
  description: "Browse upcoming IT training events, certification boot camps, and workshops in Hyderabad by QuickLearn Systems. Register for ITIL, Agile, PMP, DevOps, SAFe training sessions.",
  keywords: "IT training events Hyderabad, certification boot camps Hyderabad, upcoming training courses Hyderabad, ITIL training schedule Hyderabad, Agile workshops Hyderabad, PMP training events Hyderabad, QuickLearn Systems events, professional training Hyderabad, IT certification events India",
  openGraph: {
    title: "Upcoming IT Training Events in Hyderabad | QuickLearn Systems",
    description: "Register for upcoming IT certification training events and workshops in Hyderabad by QuickLearn Systems",
    siteName: "QuickLearn Systems",
  },
};
export default async function Events() {
  const onlineRes = await fetch("https://quicklearnsys.com/data/online_events.json", {
    cache: "no-store" // ensures fresh data every request
  });
  const onlineEvents = await onlineRes.json();

 return(
  <>
  <EventPageClient onlineEvents={onlineEvents}/>
  </>
 )
}
