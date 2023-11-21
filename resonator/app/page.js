import Image from "next/image"
import Link from "next/link"
import Button from "./components/Button/page"
import Header from "./components/Header/page"


export default function Home() {
  return (
    <>
      <main className="hero--container">
        <div className='md:container md:mx-auto '>
          <Header />
          <section className="px-24 pt-12">
            <h1>New episode available now</h1>
            <h2>Available on Apple Soundcast and Spotify</h2>

            <div className="btn--wrap flex gap-3">
              <div className="btn btn1">
                <span></span>
                <div className="div">
                  <h6>Listen on</h6>
                  <h4>Apple podcast</h4>
                </div>
              </div>

              <div className="btn btn2">
                <span></span>
                <div className="div">
                  <h6>Listen on</h6>
                  <h4>Apple podcast</h4>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <section className="px-24 pt-24 relative">
        <div className="wrap grid grid-cols-2">
          <div className="profile">
            <h2>Best places to find design inspiration</h2>
          </div>
          <div className="image">
            <Image
              src='/assets/h1-podcastimg2.jpg.png'
              width={700}
              height={700}
            />
          </div>
        </div>
        <section className="px-24 pt-12 absolute top-0 left-0 flex gap-6">
          <Image
            src='/assets/h4-newimg3-650x650.jpg.png'
            width={200}
            height={200}
          />
          <div className="content flex justify-between">
            <div className="profile">
              <h2>Timmy Mike: the nature of design</h2>
              <p>Episode 1 . Microphone . 0:13</p>
            </div>
            <h3>Episode page <span>ARROW</span></h3>
 
          </div>
        </section>
      </section>

    </>

  )
}