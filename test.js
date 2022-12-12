const searchUserId = (domElem) => {
    const arrId = []
    for (let elem of domElem) {
        arrId.push(elem.innerText)
    }
    return arrId
}
const workId = searchUserId(document.querySelectorAll('.resultBox'))


const clearUserId = (userId, workId) => {
    const sameId = []
    let elemText = ''

    userId.forEach(element => {
        elemText = element.innerText  
        if (workId.includes(elemText)) {
            sameId.push(element)
        }
    });
    return sameId
}
const userId = document.querySelectorAll('.pl-0.align-middle')

let clearArr = clearUserId(userId, workId)
// console.log(clearArr.length);
// 1 страница
// clearArr[0].click()
const dropMenu = document.querySelector('.dropdown-menu')


let index = 0
let clickInterval = setInterval(() => {
    // 2 клика на 2 странице 
    if (index === clearArr.length) {
        clearInterval(clickInterval)        
    } else {
        function timerClick (btn, delay = 1000) {
            setTimeout(() => btn.innerText = index, delay)
        }
        console.log(index, 'test1')
        console.log(clearArr[index])
        clearArr[index].innerText = 'TEST'
        index++
        console.log(index, 'test2')
        // 2 страница 2 клика
        setTimeout(() => {
            let btn1 = dropMenu.children[0]
            timerClick(btn1, 1500)
            timerClick(btn1, 2800)
        })
    
        setTimeout(() => {
            let doubleClick = dropMenu.children[1]
            let doubleClick2 = dropMenu.children[2]
            timerClick(doubleClick)
            timerClick(doubleClick2)
        }, 5000)
    
        setTimeout(() => {
            let btn3= dropMenu.children[3]
            timerClick(btn3)
        }, 9000)
        setTimeout(() => history.go(-2), 11000)
    }
    // if (index === clearArr.length) {
    //     clearInterval(clickInterval)
    // }    
}, 20000)




