class PhysicsObject {
    velocity = { x: 0, y: 0 }
    acceleration = { x: 0, y: 0.5 }

    grounded = false

    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx) {}

    update() {
        this.velocity.y += this.acceleration.y
        this.y += this.velocity.y

        if (this.y + this.height > 1000) {
            this.velocity.y = 0
            this.y = 1000 - this.height
        }
    }

    checkCollisionWithTerrain(terrain) {
        if (this.y + this.height > terrain.y && this.y < terrain.y + terrain.height) {

            if (this.x + this.width > terrain.x && this.x < terrain.x + terrain.width) {
                this.velocity.y = 0
                this.y = terrain.y - this.height

                return true
            }

        }
        return false
    }
}
