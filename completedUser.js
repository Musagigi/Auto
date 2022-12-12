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
console.log(clearArr.length);

let index = 0
let clickInterval = setInterval(() => { 
    
    if (index === clearArr.length) {
        clearInterval(clickInterval)        
    } else {
        // 1 клик 1 страница
        clearArr[index].click()
        index++

        function timerClick (btn, delay = 1000) {
            setTimeout(() => btn.click(), delay)
        }
   
        // 2 страница 2 клика
        setTimeout(() => {
            let btn1 = document.querySelector('.d-flex.align-self-center').children[2]
            timerClick(btn1, 3000)
            timerClick(btn1, 4000)
        }, 1000)

         // 3 страница 2 клика
        setTimeout(() => {
            let doubleClick = document.querySelectorAll('#signButton')
            timerClick(doubleClick[0])
            timerClick(doubleClick[1])
        }, 8000)
    
         // 3 страница 1 клик (сохранить все)
        setTimeout(() => {
            let btn3= document.querySelector('.btn.btn-primary.mt-3')
            timerClick(btn3)
        }, 15000)

        setTimeout(() => history.go(-2), 18000)

    }

}, 20000)