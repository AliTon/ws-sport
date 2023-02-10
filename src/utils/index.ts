/**
 * @param sportName
 * must return icon className using fontawesome or local icons
 * example - soccer and valid icon classname
 */
export function IconClassNameGenerator(sportName: string): string {
    switch (sportName) {
        case 'Soccer':
            return 'fa-solid fa-futbol'
        case 'Basketball':
            return 'fa-solid fa-basketball'
        case 'Tennis':
            return 'fa-solid fa-solid fa-tennis-ball'
        case 'Darts':
            return 'fa-solid fa-bullseye-arrow'
        case 'Volleyball':
            return 'fa-solid fa-volleyball'
        case 'Table Tennis':
            return 'fa-solid fa-table-tennis-paddle-ball'
        case 'Handball':
            return 'fa-solid fa-baseball'
        case 'Ice Hockey':
            return 'fa-solid fa-hockey-sticks'
        case 'Baseball':
            return 'fa-solid fa-baseball'
        case 'American Football':
            return 'fa-solid fa-football'
        case 'Boxing/MMA':
            return 'fa-solid fa-boxing-glove'
        case 'Cricket':
            return 'fa-brands fa-critical-role'
        case 'Horse racing':
            return 'fa-solid fa-horse'
        default:
            return 'fa-brands fa-font-awesome'
    }
}
