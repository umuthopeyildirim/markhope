import { Hero } from "react-daisyui"

function Features() {
  return(
    <Hero className="my-20" id="features">
      <Hero.Content className="text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold">Everything is connected</h1>
          <p className="text-xl py-6">
            The human brain is non-linear: we jump from idea to idea, all the time. Your second brain should work the same.
          </p>
          <p className="text-xl py-6">
            In MarkHope, making and following connections is frictionless. Tend to your notes like a gardener; at the end of the day, sit back and marvel at your own knowledge graph.
          </p>
          <div className="flex flex-col">
            <div className="py-6 px-12 bg-stone-800 border border-gray-800 shadow-md shadow-black rounded">
              <div className="flex flex-row h-8 text-center place-content-center	self-center">
                <img src="https://obsidian.md/images/cubes.svg" alt="Your Knowledge Building Blocks" />
                <h1 className="text-xl font-bold ml-2">YOUR KNOWLEDGE BUILDING BLOCKS</h1>
              </div>
              <p className="text-xl py-6">
                MarkHope is built to be extensible from the ground up. We want you to build your own system, play with it, tweak it, until you're happy.
              </p>
            </div>
            <div className="py-6 px-12 bg-stone-800 border border-gray-800 shadow-md shadow-black rounded mt-6">
              <div className="flex flex-row h-8 text-center place-content-center self-center">
                <img src="https://obsidian.md/images/plugin.png" alt="MIX AND MATCH" />
                <h1 className="text-xl font-bold ml-2">MIX AND MATCH</h1>
              </div>
              <p className="text-xl py-6">
                They are super easy to grab: the built-in plugin marketplace lets you install them with one click. And the sum of the parts is greater than the whole: some plugins work even better together.
              </p>
            </div>
            <div className="py-6 px-12 bg-stone-800 border border-gray-800 shadow-md shadow-black rounded mt-6">
              <div className="flex flex-row h-8 text-center place-content-center self-center">
                <img src="https://obsidian.md/images/crafting.svg" alt="DO IT YOURSELF" />
                <h1 className="text-xl font-bold ml-2">DO IT YOURSELF</h1>
              </div>
              <p className="text-xl py-6">
                Looking for something unique? There's no need to wait for someone else to make it! Whether you have programming experience or not, you can try your hands at making your MarkHope plugin.
              </p>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default Features;