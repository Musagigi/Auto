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
// startActiveUser(argActiveUserId)s