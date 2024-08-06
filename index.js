// get canvas
const c = document.getElementById('gameCanvas')
const ctx = c.getContext('2d')

// set canvas size
c.width = 1000
c.height = 1000

// set canvas background color
function clearCanvas() {
    ctx.fillStyle = 'lightblue'
    ctx.fillRect(0, 0, c.width, c.height)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function run () {
    const game = new Game()
    const player = new Player(50, 50, 50, 100)

    game.setPlayer(player)

    game.addTerrain(new Terrain(0, 900, 1000, 100))
    game.addTerrain(new Terrain(400, 750, 100, 100))
    game.addTerrain(new Terrain(200, 600, 100, 100))

    // key listeners
    window.addEventListener('keyup',(event) => player.releaseInput(event),false)
    window.addEventListener('keydown',(event) => player.pressInput(event),false)

    // game loop
    while (true) {
        clearCanvas()

        // update
        game.update()

        // draw
        game.draw(ctx)

        await sleep(1000 / 60)
    }
}

run()
