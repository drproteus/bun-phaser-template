import { IPiece } from "./lib/pieces"

let p = new IPiece()
console.log(p.getShape())
console.log(p.render())
p.rotateCW()
console.log(p.getShape())
console.log(p.render())
p.rotateCW()
console.log(p.getShape())
console.log(p.render())
