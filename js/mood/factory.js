"use strict";

mood.factory = {
    createMap: function createMap(data) {
        if(typeof data.size !== "number" ||
           typeof data.player !== "object" ||
           typeof data.tilemap !== "object" ||
           typeof data.tiles !== "object") {
            throw new Error("required properties missing from map");
        }
        data.light = data.light || 0;
        data.fogThickness = data.fogThickness || 0;

        return data;
    },
    createTile: function createTile(data) {
        data = data || {};
        data.terminal = typeof data.terminal === "undefined" ? true : data.terminal;
        data.passable = typeof data.passable === "undefined" ? false : data.passable;
        data.height = data.height || 1;

        return data;
    },
    createPawn: function createPawn(data) {
        data = data || {};
        data.x = data.x || 0;
        data.y = data.y || 0;
        data.rotation = data.rotation || 0;
        
        return data;
    },
    createTexture: function createTexture(path, width, height) {
        var image = new Image();
        image.src = path;
        
        var data = {
            image: image, 
            width: width,
            height: height
        }

        return data;
    },
}
