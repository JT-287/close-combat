namespace SpriteKind {
    export const crosshare = SpriteKind.create()
    export const scope = SpriteKind.create()
    export const blood = SpriteKind.create()
    export const knife = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const monster = SpriteKind.create()
}
namespace StatusBarKind {
    export const ammo = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . f . . . f f f f f f f 
        . . . . . f f . . . f f f f f f 
        . . . . f f f . . f . f f f f f 
        . . . f f f . . . f . . f f f f 
        . . . f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . f . . . . f f f f f f 
        . . . . f f f . . f . f f f f f 
        . . . f f f . . . f . . f f f f 
        . . . f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . f . . . . f . f f f f f 
        . . . f f f . . . f . . f f f f 
        . . . f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . f . f f f f f 
        . . . f . . . . . f . . f f f f 
        . . f f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . f . f f f f f 
        . . . . . . . . . f . . f f f f 
        . . . . . . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . f . f f f f f 
        . . . . . . . . . f . . f f f f 
        . . . . . . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . f . f f f f f 
        . . . . . . . . . f . . f f f f 
        . . . . . . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . . . . . . f . f f f f f 
        . . . f . . . . . f . . f f f f 
        . . f f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . . . . . . f f f f f f 
        . . . . f . . . . f . f f f f f 
        . . . f f f . . . f . . f f f f 
        . . . f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . . . . . f f f f f f f 
        . . . . . f . . . . f f f f f f 
        . . . . f f f . . f . f f f f f 
        . . . f f f . . . f . . f f f f 
        . . . f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . . . f f c f f f f . 
        . . . . . f . . . f f f f f f f 
        . . . . . f f . . . f f f f f f 
        . . . . f f f . . f . f f f f f 
        . . . f f f . . . f . . f f f f 
        . . . f f . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . f f f f c f f f f . 
        . . . . . . f f . f f f f f f f 
        . . . . . f f f . . f f f f f f 
        . . . . . f f . . f . f f f f f 
        . . . . . . . . . f . . f f f f 
        . . . . . . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f c f f f . . . 
        . . . . . . f f f f b f f f f . 
        . . . . . . f f . f f f f f f f 
        . . . . . f f f . . f f f f f f 
        . . . . . f f . . f . f f f f f 
        . . . . . . . . . f . . f f f f 
        . . . . . . . . . . f f . f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f b f f f . . . 
        . . . . . . f f f f c f f f f . 
        . . . . . . f f . f f f f f f f 
        . . . . . f f f . . f f f f f f 
        . . . . . f f . . f . f f f f f 
        . . . . . . . . . f . . f f f f 
        . . . . . . . . . . f f . f f f 
        `],
    100,
    false
    )
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(1000)
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 0, 255, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 0, 255, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    statusbar.value += 100
    hasAmmo = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hasAmmo == true) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 500, Render.getAttribute(Render.attribute.dirY) * 500)
        animation.runImageAnimation(
        mySprite2,
        [img`
            5 . . . . . . . . . . . . . . . 
            . 5 . 5 . . . . . . . . . . . . 
            . . 1 5 . . . . . . . . . . . . 
            . 5 5 1 . . . . . . . . . . . . 
            . . . . f . . . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . f f c f f f . . . 
            . . . . . . f f f f b f f f f . 
            . . . . . . f f . f f f f f f f 
            . . . . . f f f . . f f f f f f 
            . . . . . f f . . f . f f f f f 
            . . . . . . . . . f . . f f f f 
            . . . . . . . . . . f f . f f f 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f . . . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . f f b f f f . . . 
            . . . . . . f f f f c f f f f . 
            . . . . . . f f . f f f f f f f 
            . . . . . f f f . . f f f f f f 
            . . . . . f f . . f . f f f f f 
            . . . . . . . . . f . . f f f f 
            . . . . . . . . . . f f . f f f 
            `],
        100,
        false
        )
        music.play(music.createSoundEffect(WaveShape.Noise, 2588, 1, 255, 0, 102, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        statusbar.value += -5
    } else if (hasAmmo == false) {
        music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        mySprite2.sayText("out of ammo", 500, false)
    }
})
statusbars.onZero(StatusBarKind.ammo, function (status) {
    hasAmmo = false
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite7 = sprites.create(img`
        ....................
        ....................
        ...................2
        ..................22
        .................22.
        ................22..
        ..............222...
        .............222.2..
        ...........222..2...
        ........22222..2....
        ......222222..2.....
        ....22222.22.22.....
        .2222222.2.22.......
        222222..2222........
        22...22222..........
        ....2222............
        ..2222..............
        22..................
        ....................
        ....................
        `, SpriteKind.blood)
    music.play(music.createSoundEffect(WaveShape.Noise, 1637, 1935, 245, 0, 113, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    mySprite7.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite7.setScale(5, ScaleAnchor.Middle)
    music.play(music.createSong(hex`0078000408030109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060000000010001000400050001000c000d0001001000110001001800190001001c001d0001002400250001002800290001003000310001003400350001003c003d0001004000410001004800490001004c004d000100540055000100580059000100`), music.PlaybackMode.LoopingInBackground)
    color.startFadeFromCurrent(color.Black, 2000)
    color.pauseUntilFadeDone()
    game.reset()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += -1
    if (controller.A.isPressed()) {
        splatter = sprites.create(img`
            ................2...
            ..........2.........
            ....................
            ..........2...2.....
            ..........2..2......
            .........22.2.......
            .........2..2.....2.
            ........2..2....22..
            ....2...2.2.2..22...
            .......222.22.22....
            ....2..22.22.2......
            ....2..222.22.......
            ...22.222.2.........
            ...2..2222.........2
            ...222222222222222..
            ...2222..222222.....
            ...222222...........
            ...22...............
            ....................
            ....................
            `, SpriteKind.blood)
        splatter.setFlag(SpriteFlag.RelativeToCamera, true)
        tiles.placeOnRandomTile(splatter, assets.tile`myTile0`)
        splatter.setScale(5, ScaleAnchor.Middle)
        splatter.setPosition(randint(5, 160), randint(5, 160))
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    otherSprite.setImage(img`
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
        . . . . . . . . . . . . b f c . 
        . . . f . . . . . . . . b d c . 
        . . . f f b c b b b b b b f c . 
        . . . f f b c b f b b c b d c . 
        . . . . . . . . . . . . . . . . 
        `)
    sprites.destroy(otherSprite, effects.none, 5000)
    otherSprite.follow(mySprite, 0)
    info.changeScoreBy(1)
})
let splatter: Sprite = null
let mySprite7: Sprite = null
let projectile2: Sprite = null
let mySprite5: Sprite = null
let hasAmmo = false
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
game.setDialogCursor(img`
    7 f f f f f f f f f f f f f f 7 
    f 7 f f f f f f f f f f f f 7 f 
    f f 7 f f f f f f f f f f 7 f f 
    f f f 7 f f f f f f f f 7 f f f 
    f f f f 7 f f f f f f 7 f f f f 
    f f f f f 7 f f f f 7 f f f f f 
    f f f f f f 7 f f 7 f f f f f f 
    f f f f f f f 7 7 f f f f f f f 
    f f f f f f f 7 7 f f f f f f f 
    f f f f f f 7 f f 7 f f f f f f 
    f f f f f 7 f f f f 7 f f f f f 
    f f f f 7 f f f f f f 7 f f f f 
    f f f 7 f f f f f f f f 7 f f f 
    f f 7 f f f f f f f f f f 7 f f 
    f 7 f f f f f f f f f f f f 7 f 
    7 f f f f f f f f f f f f f f 7 
    `)
game.setDialogTextColor(7)
game.showLongText("close combat", DialogLayout.Full)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = Render.getRenderSpriteVariable()
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f b f f f . . . . 
    . . . . . . . f f c f f f f . . 
    . . . . . . f f f f f f f f f . 
    . . . . . . f f . . f f f f f f 
    . . . . . f f f . f . f f f f f 
    . . . . . f f . . f . . f f f f 
    . . . . . . . . . . f f . . f f 
    `, SpriteKind.Player)
mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 18))
mySprite2.setScale(5, ScaleAnchor.Middle)
mySprite2.setPosition(129, 88)
animation.runMovementAnimation(
mySprite2,
animation.animationPresets(animation.bobbing),
2000,
true
)
Render.moveWithController(2, 2, 1)
Render.setViewMode(ViewMode.raycastingView)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.value = 100
statusbar2.setLabel("HP")
statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar2.positionDirection(CollisionDirection.Top)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . b b b b b . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.crosshare)
statusbar = statusbars.create(20, 4, StatusBarKind.ammo)
statusbar.value = 100
statusbar.setLabel("ammo", 1)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Bottom)
mySprite3.setFlag(SpriteFlag.RelativeToCamera, true)
hasAmmo = true
let SplatterDistance = spriteutils.distanceBetween(mySprite, mySprite5)
game.onUpdateInterval(5000, function () {
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . . f d f . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . c c b c c . . . . . 
        . . . . . . b c c c b . . . . . 
        . . . . . . b c b c b . . . . . 
        . . . . . . f c c c f . . . . . 
        . . . . . . . b c b . b . . . . 
        . . . . . . . c . c . . b . . . 
        . . . . . . . b . b . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . f f . f f . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite5,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . . f d f . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . c c b c c . . . . . 
        . . . . . . b c c c b . . . . . 
        . . . . . . b c b c b . . . . . 
        . . . . . . f c b c f . . . . . 
        . . . . . . . b c c . b . . . . 
        . . . . . . . c . b . . b . . . 
        . . . . . . . b . f . . . . . . 
        . . . . . . . f . f f . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . . f d f . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . c c b c c . . . . . 
        . . . . . . b c c c b . . . . . 
        . . . . . . b c b c b . . . . . 
        . . . . . . f c b c f . . . . . 
        . . . . . . . c c b . b . . . . 
        . . . . . . . b . c . . b . . . 
        . . . . . . . f . b . . . . . . 
        . . . . . . f f . f . . . . . . 
        . . . . . . . . . f f . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile0`)
    mySprite5.follow(mySprite, 10)
})
game.onUpdateInterval(5000, function () {
    for (let value of sprites.allOfKind(SpriteKind.blood)) {
        sprites.destroy(value)
    }
})
game.onUpdateInterval(2000, function () {
    statusbar2.value += 3
})
