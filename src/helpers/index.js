export function getShortMonth(month) {
    switch (month) {
        case 'января':
            return "ЯНВ"
        case 'февраля':
            return "ФЕВ"
        case 'марта':
            return "МАРТ"
        case 'апреля':
            return "АПР"
        case 'мая':
            return "МАЙ"
        case 'июня':
            return "ИЮНь"
        case 'июля':
            return "ИЮЛЬ"
        case 'августа':
            return "АВГ"
        case 'сентября':
            return "СЕН"
        case 'октября':
            return "ОКТ"
        case 'ноября':
            return "НОЯБ"
        case 'декабря':
            return "ДЕК"
        default:
            return "МЕС"
    }

}

export function getTime() {
    let date = new Date()
    let time = date.getDate() + " " + date.getMonth() + " " + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes()
    return time
}