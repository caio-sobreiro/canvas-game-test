class Game {
    player = null
    terrain = []

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
    }

    draw(ctx) {
        this.player.draw(ctx)
        this.terrain.forEach(t => t.draw(ctx))
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

}