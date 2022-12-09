function getUserId () { 
    // получаем все id юзеров в таблице
    let arrUserId = []
    const userId = document.querySelectorAll('.pl-0.align-middle');
    
    for (let el of userId) {
        arrUserId.push(el.innerText);
    }
    return [arrUserId, userId]
}
const argUserId = getUserId()
// console.log(argUserId);

// СДЕЛАТЬ 1 ФУНКЦИЮ И НА ЕЕ ОСНОВЕ СОЗДАВАТЬ ДВА МАССИВА

function getWorkUserId () {
    // получаем юзеров, которые успешно прошли Анализ
    let arrWorkUserId = []
    const workId = document.querySelectorAll('.resultBox')
    
    for (let el of workId) {
        
        if (el) {
            arrWorkUserId.push(el.innerText)
        }
    }
    return [arrWorkUserId, workId]
}
const argWorkUserId = getWorkUserId()
// console.log(argWorkUserId);


function getActiveUserId(userId, workUserId) {
    let [usId, usIdSelector] = userId
    let [wrkId, wrkIdSelector] = workUserId
    let arrActiveUserId = []
    let textEl
    
    usIdSelector.forEach(el => {
        textEl = el.innerText
        // console.log(textEl, el)
        if (wrkId.includes(textEl)) {
            arrActiveUserId.push(el)
        }
    })
    // console.log(arrActiveUserId);
    return arrActiveUserId
}
const argActiveUserId = getActiveUserId(argUserId, argWorkUserId)
// console.log(argActiveUserId);

// let newArr = []
let test = 1
let event = new Event('click')
function startActiveUser (activeUser) {
    // кликаем сами по подходящим юзерам
    // newArr = [...activeUser]
    
    for (let el = activeUser.length; el--;) {
        
        if ( test > 0) {
            if (activeUser[el].dispatchEvent(event)) {
                // activeUser[el].innerHTML ='<strong>TEST</strong>'
                activeUser.pop()
                // test--
            }
        }
    }
    // console.log(activeUser , 'innerArray');
}
startActiveUser(argActiveUserId)
// console.log(newArr, 'outArray');




    // function startActiveUser (activeUser) {
        // кликаем сами по подходящим юзерам
        // let event = new Event('click')
        // let test = 1
        // for (let el of activeUser) {
        //    
            // if ( test > 0) {
                // if (el.dispatchEvent(event) === 'true') {
                    // el.innerHTML ='<strong>TEST</strong>'
                    // test--
                // }
            // }
        // }
    // }
    // startActiveUser(argActiveUserId)



// Показательные клики
    // function startActiveUser (activeUser) {
        // кликаем сами по подходящим юзерам
        // for (let el of activeUser) {
            // el.innerHTML ='<strong>TEST</strong>'
        // }
    // }
    // startActiveUser(argActiveUserId)