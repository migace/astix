define(['game/drawer'], function(drawer) {
    var blocksPerRow = 8,
        divinaProportio = 1.618,
        blockWidth = drawer.canvasWidth / blocksPerRow,
        blockHeight = (blockWidth / divinaProportio) / 2,
        startBlocksQuantity = 40;

    return {
        blockWidth: blockWidth,
        blockHeight: blockHeight,
        startBlocksQuantity: startBlocksQuantity,
        blocksPerRow: blocksPerRow,
    };
})