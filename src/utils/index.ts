/**
 * @param sportName
 * must return icon className using fontawesome or local icons
 * example - soccer and valid icon classname
 */
export function IconClassNameGenerator(sportName: string): string {
    switch (sportName) {
        case 'Soccer':
            return 'fa-solid fa-futbol';
        default:
            return 'fa-solid fa-futbol'
    }
}
