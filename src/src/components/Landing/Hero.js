import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero style={{backgroundImage:'url(/img/starfield.svg)'}} className="my-20" id="home">
      <Hero.Content className="text-center">
        <div className="max-w-2xl">
          <h1 className="text-8xl font-bold">A second brain, for you, forever.</h1>
          <p className="text-2xl py-6">
            MarkHope is a powerful and extensible knowledge base that works on top of your local folder of plain text files.
          </p>
          <Button className="rounded mt-6 px-10 text-white h-full flex-col" href="login" color="primary">
            <span className="text-lg mt-4">Get Started with MarkHope</span>
            <span className="font-light text-sm mb-4 mt-2">It's free!</span>
          </Button>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;