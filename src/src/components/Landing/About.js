import { Hero } from "react-daisyui"

function AboutHero() {
  return(
    <>
      <Hero id="about">
        <Hero.Content>
          <div>
            <img src="https://obsidian.md/images/screenshot-1.0-hero-combo.png" alt="Hero" className="object-cover rounded-xl" />
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
                <div className="grid flex-grow my-8">
                  <p>I don't give app of the year awards, but I would 100% give it to MarkHope for slowly taking over almost everything I do that has anything to do with text files.</p>
                  <h1 className="font-bold">CGP Grey</h1>
                  <p className="font-light">YouTuber personality</p>
                </div>
                <div className="grid flex-grow">
                  <p>Being so extensible and personalizable, MarkHope is, quite simply, a dream come true for Markdown writers.</p>
                  <h1 className="font-bold">Federico Viticci @viticci</h1>
                  <p className="font-light">Founder of MacStories</p>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="grid flex-grow my-8">
                  <p>I don't give app of the year awards, but I would 100% give it to MarkHope for slowly taking over almost everything I do that has anything to do with text files.</p>
                  <h1 className="font-bold">CGP Grey</h1>
                  <p className="font-light">YouTuber personality</p>
                </div>
                <div className="grid flex-grow">
                  <p>Being so extensible and personalizable, MarkHope is, quite simply, a dream come true for Markdown writers.</p>
                  <h1 className="font-bold">Federico Viticci @viticci</h1>
                  <p className="font-light">Founder of MacStories</p>
                </div>
              </div>
            </div>
          </div>
        </Hero.Content>
      </Hero>

    </>
  )
}

export default AboutHero;