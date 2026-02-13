import HomePageClient from "@/components/HomePageClient";

export default async function HomePage() {
  const baseUrl = "https://quicklearnsys.com";

  let fixedTestimonials = [];
  let fixedClients = [];

  try {
    const [testimonialsRes, clientsRes] = await Promise.all([
      fetch(`${baseUrl}/data/testimonials/testimonials.json`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${baseUrl}/data/clients/clients.json`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (testimonialsRes.ok) {
      const testimonials = await testimonialsRes.json();
      fixedTestimonials = testimonials.map(item => ({
        ...item,
        image: item.image.replace(/^\.\//, `${baseUrl}/`),
      }));
    }

    if (clientsRes.ok) {
      const clients = await clientsRes.json();
      fixedClients = clients.map(item => ({
        ...item,
        logo: item.logo.replace(/^\.\//, `${baseUrl}/`),
      }));
    }
  } catch (error) {
    console.error("Failed to fetch homepage data:", error);
  }

  return <HomePageClient testimonials={fixedTestimonials} clients={fixedClients} />;
}
