export default function changeDateFormat(exDate) {
    const year = exDate.getFullYear();
    const month = exDate.getMonth() + 1;
    const date = exDate.getDate();
    return `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`;
}
