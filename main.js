// function getUserId () { 
//     let arrUserId = []
//     const userId = document.querySelectorAll('.pl-0.align-middle');
    
//     for (let elem of userId) {
//         arrUserId.push(elem.innerText);
//     }
//     return [arrUserId, userId]
// }
// const argUserId = getUserId()


// function getWorkUserId () {
//     let arrWorkUserId = []
//     const workId = document.querySelectorAll('.resultBox')
    
//     for (let elem of workId) {
        
//         if (elem) {
//             arrWorkUserId.push(elem.innerText)
//         }
//     }
//     return [arrWorkUserId, workId]
// }
// const argWorkUserId = getWorkUserId()


// function getActiveUserId(userId, workUserId) {
//     let [usId, usIdSelector] = userId
//     let [wrkId, wrkIdSelector] = workUserId
//     let arrActiveUserId = []
//     let textEl
    
//     usIdSelector.forEach(el => {
//         textEl = el.innerText
//         // console.log(textEl, el)
//         if (wrkId.includes(textEl)) {
//             arrActiveUserId.push(el)
//         }
//     })
//     // console.log(arrActiveUserId);
//     return arrActiveUserId
// }
// const argActiveUserId = getActiveUserId(argUserId, argWorkUserId)


// function startActiveUser (activeUser) {
//     for (let el = activeUser.length; el--;) {
//         // console.log(activeUser[el]);
//         activeUser[el].addEventListener('click', () => console.log('test'));
//     } 
// }
// startActiveUser(argActiveUserId)


// function getPendingId () {
//     let arrUserId = []
//     const userPending = document.querySelectorAll('.checkbox.d-flex.align-items-center.p-075');

//     for (let elem of userPending) {
//         arrUserId.push(elem);
//     }
//     return arrUserId
// }
// const argPendingId = getPendingId()


// function clickPendingId(pendingId) {
//     for (let i = 0; i < pendingId.length; i++) {
//         console.log(pendingId[i]);
//         //pendingId[i].addEventListener('click', () => console.log('test'))
//     }
//     console.log(pendingId.length);
// }
// clickPendingId(argPendingId)


(function() {
    
    function getPendingId () {
        let arrUserId = []
        const userPending = document.querySelectorAll('.checkbox.d-flex.align-items-center.p-075');
        for (let elem of userPending) {
            // console.log(elem);
            arrUserId.push(elem);
        }
        return arrUserId
    }
    const argPendingId = getPendingId()


    function clickPendingId(pendingId) {
        for (let elem of pendingId) {
            // console.log(elem);
            elem.addEventListener("click", () => {
                elem.innerText = 'testtesttest'
            })      
        }
        
        console.log(pendingId.length);
    }
    clickPendingId(argPendingId)

})();

// class="checkbox d-flex align-items-center p-075"
// "p-0 align-middle"
// bgcolor="#000"


// function getMonthDate() {
//     let nowDate = new Date().getMonth()
//     // console.log(nowDate.getDate());
//     const dateInfo = {
//         0: 'Январь',
//         1: 'Февраль',
//         2: 'Март',
//         3: 'Апрель',
//         4: 'Май',
//         5: 'Июнь',
//         6: 'Июль',
//         7: 'Август',
//         8: 'Сентябрь',
//         9: 'Октябрь',
//         10: 'Нояб',
//         11: 'Дек'
//     }
//     return nowDate = dateInfo[nowDate]
// }
// const argNowDate = getMonthDate()
// console.log(argNowDate);
