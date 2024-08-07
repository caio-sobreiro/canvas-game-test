// get canvas
const c = document.getElementById('gameCanvas')
const ctx = c.getContext('2d')

// set canvas size
c.width = 1000
c.height = 1000

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function run () {
    const game = new Game()
    const player = new TopDownPlayer(50, 50, 50, 50)

    game.setPlayer(player)

    game.addTerrain(new Terrain(0, 950, 1000, 50))
    game.addTerrain(new Terrain(0, 0, 50, 1000))
    game.addTerrain(new Terrain(950, 0, 50, 1000))
    game.addTerrain(new Terrain(0, 0, 1000, 50))

    // key listeners
    window.addEventListener('keyup',(event) => player.releaseInput(event),false)
    window.addEventListener('keydown',(event) => player.pressInput(event),false)

    // game loop
    while (true) {
        game.clearCanvas()

        // update
        game.update()

        // draw
        game.draw(ctx)

        await sleep(1000 / 60)
    }
}

run()
