// 0 top collision only
// 1



export let world = {
    columns: 8,
    row: 5,
    tile_size: 40,

    map:[0,0,0,0,0,0,0,0,// I went with a smaller map this time
        0,0,0,0,0,0,0,0,// 0s represent walkable tiles and everything else
        1,0,0,0,0,0,0,2,// represents a collision tile or wall tile
        3,0,0,4,0,0,2,5,// the different numbers correspond to different
        5,5,5,5,5,5,5,5]// collision shapes.
}