class TopDownPlayer extends GameObject {
    keys = {}
    currrentDirection = { sin: 0, cos: 0 }
    canFire = true

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
        // super.update()
        this.updatePosition()
    }

    checkIfPlayerIsFiring () {
        if (this.keys['Space'] && this.canFire) {
            this.canFire = false
            setTimeout(() => this.canFire = true, 100)
            return new Bullet(this.x, this.y, 10, 10, { ...this.currrentDirection })
        }
    }

    updatePosition() {
        if (this.keys['KeyD']) {
            this.x += 5
            this.currrentDirection.cos = 1
        }

        if (this.keys['KeyA']) {
            this.x -= 5
            this.currrentDirection.cos = -1
        }

        if (this.keys['KeyS']) {
            this.y += 5
            this.currrentDirection.sin = 1
        }

        if (this.keys['KeyW']) {
            this.y -= 5
            this.currrentDirection.sin = -1
        }

        if (!this.keys['KeyD'] && !this.keys['KeyA']) {
            this.currrentDirection.cos = 0
        }

        if (!this.keys['KeyS'] && !this.keys['KeyW']) {
            this.currrentDirection.sin = 0
        }
    }

    pressInput(event) {
        this.keys[event.code] = true
    }

    releaseInput(event) {
        this.keys[event.code] = false
    }
}

class SideScrollerPlayer extends PhysicsObject {
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
