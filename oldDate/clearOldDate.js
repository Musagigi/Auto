function getTodayDate() {
    // получаем сегодняшний день
    const dateInfo = {
        0: 'Январь',
        1: 'Февраль',
        2: 'Март',
        3: 'Апрель',
        4: 'Май',
        5: 'Июнь',
        6: 'Июль',
        7: 'Август',
        8: 'Сентябрь',
        9: 'Октябрь',
        10: 'Нояб',
        11: 'Дек'
    }
    let nowDay = new Date().getDate()
    let nowMonth = new Date().getMonth() 
    nowMonth = dateInfo[nowMonth]
    let nowDate = `${nowDay} ${nowMonth}`
    
    nowDay > 9 ? nowDate : nowDate = `0${nowDay} ${nowMonth}`
    
    return nowDate
}
const argTodayDate = getTodayDate()
// console.log(argNowDate);


function getOldDateRequest (date) {
    // собираем массив обращений, ДО сегодняшнего дня
    const usersTable = document.querySelector('.table.mb-0.table-borderless.task-table') // таблица Да
    let arrChildTag = []
    let needParentTag = {}

    for (let elemTable of usersTable.children) {

        for (let userRows of elemTable.children) {
            // console.log(userRows);
            if (!userRows.children[3].innerText.includes(date)) {
                
                needParentTag = userRows.children[1].children[0]
                arrChildTag.push(needParentTag)
            } 
        }
    }
    return arrChildTag
}
const argOldDateRequest = getOldDateRequest(argTodayDate)
// console.log(argPendingUser);


function clickOldDate(arrTag) {
    // кликаем по всем юзерам в массиве
    for (let elem of arrTag) {
        // elem.innerText ='test'
        elem.click()
    }
}
clickOldDate(argOldDateRequest)