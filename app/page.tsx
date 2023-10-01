import Banner from "@/components/banner"

interface Props { }

export default function Page() {
  return (
    <div>
        <main className="max-w-full px-2 md:px-4 lg:px-6">
        <section>
          <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/c-d-x-5qT09yIbROk-unsplash.jpg" title="Photography" linkHref="/photography" alt="camera"/>
        </section>
        <section className="mt-2">
          <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/heart.jpeg" title="Blogs" linkHref="/destinationPage" alt="rocky mountains"/>
          </section>
        </main>
      </div>
  )
}


