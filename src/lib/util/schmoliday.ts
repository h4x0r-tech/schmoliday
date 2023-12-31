export const easterSpencer = (year: number): Date => {
    const a = year % 19,
        b = Math.floor(year / 100),
        c = year % 100,
        d = Math.floor(b / 4),
        e = b % 4,
        f = Math.floor((b + 8) / 25),
        g = Math.floor((b - f + 1) / 3),
        h = (19 * a + b - d - g + 15) % 30,
        i = Math.floor(c / 4),
        k = c % 4,
        l = (32 + 2 * e + 2 * i - h - k) % 7,
        m = Math.floor((a + 11 * h + 22 * l) / 451),
        n = Math.floor((h + l - 7 * m + 114) / 31),
        o = (h + l - 7 * m + 114) % 31,
        day = o + 1,
        monthIndex = n - 1;
    return new Date(year, monthIndex, day);
}

export const easterSundayCurrentYear: Date = easterSpencer(new Date().getFullYear());
export const goodFriday = (easterSunday: Date = easterSundayCurrentYear): Date => {
    return new Date(easterSunday.addDays(-2));
}
export const palmSunday = (easterSunday: Date = easterSundayCurrentYear): Date => {
    return new Date(easterSunday.addDays(-7));
}
