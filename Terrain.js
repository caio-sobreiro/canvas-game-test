class Terrain {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height)

        // put a small dot at x, y
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, 5, 5)
    }
}
