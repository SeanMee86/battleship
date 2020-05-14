class Ship {
    type: string;
    length: number;
}

class PlayerBoard {

    private constructor() {
    }

    //Should this create singleton?
    createBoard(): void {
        // Use Cells to create board possibly use utility function for Player and Attack boards
    }
}

class AttackBoard {

    private constructor() {
    }

    createBoard(): void {

    }
}

class PlayerCell {
    hasShip: boolean;
}

class AttackCell {
    clickable: boolean;

    // Emit event containing cell information
    attack() {

    }
}