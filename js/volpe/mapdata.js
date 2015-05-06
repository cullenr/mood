"use strict";

volpe.mapdata = {
    e1m1: mood.factory.createMap({
        size: 25,
        tilemap: [
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,3,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,
            1,1,3,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,
            1,1,3,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,
            1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,
            1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,
            1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,
            1,0,1,1,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,
            1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,
            1,0,0,0,1,0,0,0,2,0,0,2,0,0,1,1,1,1,1,0,1,1,1,1,1,
            1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,
            1,1,0,0,0,0,1,1,1,0,0,2,0,0,0,1,1,0,0,0,0,0,0,0,1,
            1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,
            1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,
            1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,
            1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
            1,1,1,1,1,1,1,0,1,0,0,2,0,0,2,0,0,2,0,0,2,0,0,1,1,
            1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
            1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,2,0,0,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        skybox: mood.factory.createTexture("assets/red_panorama.jpg", 1024, 512),
        tiles: [
            mood.factory.createTile({
                terminal:false,
                passable: true,
                height: 0
            }),
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/wall_texture_3.jpg", 256, 256),
            }),
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/metal_1.jpg", 256, 256),
            }),
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/metal_2.jpg", 256, 256),
            })
        ],
        light: 0,
        fogThickness: 0,
        player: volpe.factory.createPlayer({
            x: 4,
            y: 2,
            rotation: 0
        })
    })
}