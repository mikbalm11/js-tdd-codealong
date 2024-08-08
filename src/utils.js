const currentYear = new Date().getFullYear();

export function currentAgeForBirthYear(birthYear) {
    return currentYear - birthYear;
}
