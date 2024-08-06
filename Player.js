class Player extends PhysicsObject {

    keys = {}

    constructor(x, y, width, height) {
        super(x, y, width, height)
    }

    draw(ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x, this.y, this.width, this.height)

        // put a small dot at x, y
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, 5, 5)
    }

    update() {
        super.update()
        this.updatePosition()
    }

    updatePosition() {
        if (this.keys['KeyD']) {
            this.x += 5
        }

        if (this.keys['KeyA']) {
            this.x -= 5
        }

        if (this.keys['Space'] && this.grounded) {
            this.y -= 1
            this.velocity.y -= 20
        }
    }

    pressInput(event) {
        this.keys[event.code] = true
    }

    releaseInput(event) {
        this.keys[event.code] = false
    }
}
