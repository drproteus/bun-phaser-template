// https://tetris.wiki/Nintendo_Rotation_System
const T = {
  "i": [
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  ],
  "o": [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
  ],
  "j": [
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
  ],
  "l": [
    [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
  ],
  "s": [
    [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
  ],
  "t": [
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
  ],
  "z": [
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  ],
}

class Piece {
  constructor(shape) {
    this.index = 0
    this.shape = shape
    this.rotations = TETROMINOS[shape]
  }
  getShape() {
    return this.rotations[this.index]
  }
  rotateCW() {
    this.index = (this.index + 1) % this.rotations.length;
  }
  rotateCCW() {
    this.index = (this.index - 1) % this.rotations.length;
  }
  render() {
    console.log("TODO")
  }
}

class IPiece extends Piece {
  constructor() {
    super("i")
  }
}

class OPiece extends Piece {
  constructor() {
    super("o")
  }
}

class JPiece extends Piece {
  constructor() {
    super("j")
  }
}

class LPiece extends Piece {
  constructor() {
    super("l")
  }
}

class SPiece extends Piece {
  constructor() {
    super("s")
  }
}

class TPiece extends Piece {
  constructor() {
    super("t")
  }
}

class ZPiece extends Piece {
  constructor() {
    super("z")
  }
}

export { IPiece, OPiece, JPiece, LPiece, SPiece, TPiece, ZPiece }
