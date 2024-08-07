class GameObject {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    checkCollisionWithTerrain(terrain) {
        // this is not working quite right, we should detect which side the player is colliding with the terrain
        // and then adjust the player's position accordingly

        // check if the player is colliding with the terrain
        if (this.x < terrain.x + terrain.width &&
            this.x + this.width > terrain.x &&
            this.y < terrain.y + terrain.height &&
            this.y + this.height > terrain.y) {
            // collision detected
            return true
        }
        return false
    }
}
