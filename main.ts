controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Puggo.vy == 0) {
        Puggo.vy = -115
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Puggo.setImage(assets.image`puggo_left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Puggo.setImage(assets.image`puggo_right`)
})
let Puggo: Sprite = null
scene.setBackgroundColor(6)
Puggo = sprites.create(assets.image`puggo_right`, SpriteKind.Player)
controller.moveSprite(Puggo, 100, 0)
Puggo.ay = 200
tiles.setTilemap(tilemap`test_level`)
scene.cameraFollowSprite(Puggo)
