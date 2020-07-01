enum LocationContains { none = "_", white = "W", black = "B" }
type Player = Exclude<keyof typeof LocationContains, "none">;
type Location = [number, number];
type QueensLocations = Record<Player, Location>;
type Board = LocationContains[][];

class ChessBoard {
    protected board: Board;
    protected BOARD_SIZE = 8;
    constructor() {
        this.board = this.buildBoard();
    }
    public inRank([x1]: Location, [x2]: Location): boolean {
        return x1 == x2;
    }
    public inFile([, y1]: Location, [, y2]: Location): boolean {
        return y1 == y2;
    }
    public inDiagonal([x1, y1]: Location, [x2, y2]: Location): boolean {
        return Math.abs(x1 - x2) == Math.abs(y1 - y2);
    }
    public placePiece([x, y]: Location, piece: LocationContains): void {
        this.board[x][y] = piece;
    }
    public isOccupied([x, y]: Location): boolean {
        return this.board[x][y] != LocationContains.none;
    }
    public toString(): string {
        let out = "";
        for (let x = 0; x < this.BOARD_SIZE; x++) {
            for (let y = 0; y < this.BOARD_SIZE; y++) {
                out += this.board[x][y] + ((y != this.BOARD_SIZE - 1) ? " " : "");
            }
            out += "\n";
        }
        return out;
    }
    private buildBoard(): Board {
        return Array.from(Array(this.BOARD_SIZE), () =>
            Array.from(Array(this.BOARD_SIZE), () => LocationContains.none)
        );
    }
}
export class QueenAttack {
    public white: Location = [-1, -1];
    public black: Location = [-1, -1];
    private board: ChessBoard;
    constructor(input: QueensLocations) {
        this.board = new ChessBoard();
        this.placeQueen("white", input.white);
        this.placeQueen("black", input.black);
    }
    public canAttack(): boolean {
        return this.board.inRank(this.white, this.black)
            || this.board.inFile(this.white, this.black)
            || this.board.inDiagonal(this.white, this.black)
    }
    protected placeQueen(player: Player, loc: Location): void {
        if (this.board.isOccupied(loc)) {
            throw new Error("Queens cannot share the same space");
        }
        this[player] = loc;
        this.board.placePiece(loc, LocationContains[player]);
    }
    public toString(): string {
        return this.board.toString();
    }
}

export default QueenAttack;
