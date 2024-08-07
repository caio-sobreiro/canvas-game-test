class Game {
    player = null
    terrain = []
    bullets = []

    constructor() {}

    addTerrain(terrain) {
        this.terrain.push(terrain)
    }

    setPlayer(player) {
        this.player = player
    }

    update() {
        this.player.update()
        this.updatePlayerCollisionStatus()
        const bullet = this.player.checkIfPlayerIsFiring()
        if (bullet) {
            this.bullets.push(bullet)
        }
        this.bullets.forEach(b => b.update())
    }

    draw(ctx) {
        this.player.draw(ctx)
        this.terrain.forEach(t => t.draw(ctx))
        this.bullets.forEach(b => b.draw(ctx))
    }

    updatePlayerCollisionStatus() {
        const collisions = []
        for (const t of this.terrain) {
            collisions.push(this.player.checkCollisionWithTerrain(t))
        }
        if (collisions.some(c => c)) {
            this.player.grounded = true
        } else {
            this.player.grounded = false
        }
    }

    clearCanvas() {
        ctx.fillStyle = 'lightblue'
        ctx.fillRect(0, 0, c.width, c.height)
    }

}