import Banner from "@/components/banner"

interface Props { }

export default function Page() {
  return (
      <div>
        <main className="max-w-full px-2 md:px-4 lg:px-6">
        <section>
          <Banner imgSrc="https://images.unsplash.com/photo-1682685797886-79020b7462a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" title="Photography" linkHref="/destinationPage" alt="rocky mountains"/>
        </section>
        <section className="mt-2">
          <Banner imgSrc="https://storage.googleapis.com/photo-portfolio/heart.jpeg" title="Blogs" linkHref="/destinationPage" alt="rocky mountains"/>
          </section>
        </main>
      </div>
  )
}
