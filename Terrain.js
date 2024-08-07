class Terrain {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height / 3)

        ctx.fillStyle = 'brown'
        ctx.fillRect(this.x, this.y + this.height / 3, this.width, this.height / 3 * 2)

        // put a small dot at x, y
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, 5, 5)
    }
}
