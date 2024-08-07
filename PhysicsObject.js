class PhysicsObject extends GameObject {
    velocity = { x: 0, y: 0 }
    acceleration = { x: 0, y: 0.5 }

    grounded = false

    constructor(x, y, width, height) {
        super(x, y, width, height)
    }

    // Gravity
    update() {
        this.velocity.y += this.acceleration.y
        this.y += this.velocity.y

        if (this.y + this.height > 1000) {
            this.velocity.y = 0
            this.y = 1000 - this.height
        }
    }
}
