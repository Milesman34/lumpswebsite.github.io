import { randint } from "../../../utils";

// This object represents a die in the game
export default sides => ({
    // Value of the die
    value: randint(1, sides),

    // Number of sides on the die
    sides,

    // Is the die currently locked?
    isLocked: false
});