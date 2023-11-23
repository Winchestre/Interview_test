import Image from "next/image"
import Episodes from "./components/Episodes"
import ImageSlider from "./components/Header/ImageSlider"
import Hosts from "./components/Hosts"
import { slideData, hosts } from './data/data.json'

export default function Home() {
  const slides = [
    { url: '/assets/pd8-img1-300x300.jpg.png', title: 'keep your watch', id: 1, episode: '8' },
    { url: '/assets/pd-imgnew12-300x300.jpg.png', title: 'open your mind easy', id: 2, episode: '6' },
    { url: '/assets/pd5-img1.jpg.png', title: 'enter into the dragon', id: 3, episode: '7' },
  ]

  const containerStyles = {
    width: "200px",
    height: "200px",
    margin: "0 auto"
  }
  return (
    <>
      <main className="hero--container">
        <div className="hero--image"></div>
        <div>
          <section className="hero-main px-48 pt-16">
            <h1>New episode<br />available now</h1>
            <h2 className="pb-10">Available on Apple Soundcast and Spotify</h2>

            <div className="btn--wrap flex gap-3">
              <div className="btn btn1 flex justify-between gap-2">
                <span>
                    <Image 
                      src='/assets/podcast.svg'  
                      width={23}
                      height={23}
                      style={{ backgroundColor: "#fff", borderRadius: "50%"}}                
                    />
                  </span>
                <div>
                  <h6>Listen on</h6>
                  <h4>Apple podcast</h4>
                </div>
              </div>

              <div className="btn btn2 flex justify-between gap-2">
                <span>
                  <Image 
                    src='/assets/cloud.svg'  
                    width={23}
                    height={23}
                    style={{ backgroundColor: "#fff", borderRadius: "50%"}}                
                  />
                </span>
                <div>
                  <h6>Listen on</h6>
                  <h4>Soundcloud</h4>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <section className=" mid--section px-48 pt-48">
        <div className="wrap grid grid-cols-2 gap-24">
          <div className="profile">
            <h2>Best places to find<br />design inspiration</h2>
            <div className="play-btn flex gap-3 py-6">
              <Image
                src='/assets/Play.png'
                width={50}
                height={50}
                alt='play'
              />
              <div className="category">
                <h4>Episode 1</h4>
                <p>Category . 0:15</p>
              </div>
            </div>
            <div className="video--details gap-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni et, exercitationem itaque fuga molestiae dolore sed soluta tenetur
                inventore cupiditate officiis quod laboriosam molestias! At distinctio labore eum accusamus.
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati earum, vel culpa ipsa, animi sit, distinctio
                repellendus voluptatem quia at laudantium eos enim cupiditate architecto vitae reprehenderit nulla non nostrum!</p>
            </div>
            <div className=" episode--text flex gap-2 pt-3">
              <h3>Episode page</h3>
              <div className="pt-1">
                <Image
                  src='/assets/Frame (1).svg'
                  width={15}
                  height={15}
                  alt='arrow'
                />
              </div>
            </div>
          </div>
          <div className="image-wrap">
            <Image
              src='/assets/h1-podcastimg2.jpg.png'
              width={700}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="video--panel absolute flex gap-6">
        <Image
          src='/assets/h4-newimg3-650x650.jpg.png'
          width={200}
          height={200}
        />
        <div className="content--main">
          <div className="content flex justify-between pr-12 pt-6">
            <div className="profile">
              <h2>Timmy Mike: the nature<br />of design</h2>
              <p>Episode 1 . Microphone . 0:13</p>
            </div>
            <div className="flex gap-2">
              <h3>Episode page</h3>
              <div className="pt-1">
                <Image
                  src='/assets/Frame (1).svg'
                  width={15}
                  height={15}
                  alt='arrow'
                />
              </div>
            </div>
          </div>

          <div className="play-toggle py-3 flex gap-6">
            <Image
              src='/assets/Play.png'
              width={50}
              height={50}
              alt='play'
            />
            <div className="timer flex gap-4 pt-6">
              <p>10s</p>
              <p>10s</p>
            </div>

          </div>
        </div>
      </section>

      <section className="podcasts pt-6">
        <h2>Top podcasts:</h2>
        <p>Discover the selection of the most popular podcasts.</p>
        <div className="bg-red-500" style={containerStyles}>
          <ImageSlider slides={slides} />
          <div className="podcast--details">
            <h3>Episode {slides[0].episode}</h3>
          </div>
        </div>
      </section>

      <section className="episodes px-48 pt-48">
        <div className="episodes--wrap flex justify-between align-center">
          <h2>Essential episodes:</h2>
          <div className="flex gap-2 pt-6">
            <h3>View all episodes</h3>
            <div className="pt-1">
              <Image
                src='/assets/Frame (1).svg'
                width={15}
                height={15}
                alt='arrow'
              />
            </div>
          </div>
        </div>
        <ul className=" episodes--main grid grid-cols-3 gap-y-12">
          <Episodes slides={slideData} />
        </ul>
      </section>


      <section className="video--player pt-36">
        <div className="thumbnail relative"></div>
        <div className="play--btn">
          <Image
            src='/assets/Frame (7).svg'
            width={35}
            height={35}
            style={{ position: "absolute", left: "50%", backgroundColor: "#fff", padding: "3px 5px", borderRadius: "50%" }}
          />
        </div>
      </section>

      <section className="hosts episodes px-48 pt-36">
        <div className="episodes--wrap flex justify-between align-center">
          <h2>Meet your hosts:</h2>
          <div className="flex gap-2 pt-6">
            <h3>View all of them</h3>
            <div className="pt-1">
              <Image
                src='/assets/Frame (1).svg'
                width={15}
                height={15}
                alt='arrow'
              />
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-y-12">
          <Hosts hosts={hosts} />
        </ul>
      </section>
    </>

  )
}