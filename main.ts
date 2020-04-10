namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.say("Nom nom!", 500)
    pause(1000)
    game.over(true)
})
scene.setBackgroundColor(2)
game.setDialogFrame(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`)
game.setDialogTextColor(1)
game.setDialogCursor(img`
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
1 2 1 2 1 2 2 2 2 2 2 2 2 2 1 . 
1 2 1 2 1 2 2 1 1 2 2 2 2 2 1 . 
1 2 1 2 1 2 1 2 2 2 2 1 1 2 1 . 
1 2 1 2 1 2 1 2 2 2 1 2 2 2 1 . 
1 2 2 1 2 2 1 2 2 2 1 1 1 2 1 . 
1 2 2 2 2 2 2 1 1 2 2 2 1 2 1 . 
1 2 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
. 1 2 2 2 2 2 2 2 2 2 2 2 1 . . 
. . 1 2 2 2 2 2 2 2 2 2 1 . . . 
. . . 1 2 2 2 2 2 2 2 1 . . . . 
. . . . 1 1 2 2 2 1 1 . . . . . 
. . . . . . 1 2 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
`)
game.splash("Hello VCS students! ", "Space to continue")
game.showLongText("We are going to keep coding at Code Club!", DialogLayout.Center)
game.showLongText("Join us every Tuesday and Thursday at 2:45 pm.", DialogLayout.Center)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f f f f f e e e e f . . . . 
. . . . f f e e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
mySprite.image.flipX()
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . e e . . 
. . . . . . . . . . . . 7 e . . 
. . . . . . . . . . . . 5 4 . . 
. . . . . . . . . . . 1 5 5 4 . 
. . . . . . . . . . . 1 5 5 4 . 
. . . . . . . . . . 1 5 5 4 . . 
. . . . . . . . . . 5 5 e 4 . . 
. . . . . . . . . 1 5 5 5 4 . . 
. . . . . . . . 5 5 5 5 4 . . . 
. . . . . . 5 5 5 5 5 5 4 . . . 
. . . 5 5 5 5 5 e 5 5 4 . . . . 
5 5 5 5 5 5 5 5 5 5 4 . . . . . 
4 5 5 5 e 5 5 5 4 4 . . . . . . 
. 4 5 5 5 4 4 4 . . . . . . . . 
. . 4 4 4 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 1))
