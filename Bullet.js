class Bullet extends GameObject {
    // angle the bullet is moving
    direction = { sin: 0, cos: 0 }

    constructor(x, y, width, height, direction) {
        super(x, y, width, height)
        this.direction = direction
    }

    draw(ctx) {
        // draw a red circle as the bullet
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.updatePosition()
    }

    updatePosition() {
        this.x += this.direction.cos * 10
        this.y += this.direction.sin * 10
    }
}
