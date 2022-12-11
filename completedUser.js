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


// clearArr[0].click() это
// setTimeout(() => clearArr[0].click(), 1000) или это
// вместо этого, выше
let event = new Event('click')
let el = clearArr[0] 
if (el.dispatchEvent(event)) {
    el.innerHTML ='<strong>TEST</strong>'
}

// Шаг 2 кликаем по всем кнопкам
function btnClick (elem) {
    elem.click()
    elem.innerText = 'test'
}

function timerClick (btn, delay, btnClick) {
    setTimeout(btnClick, delay, btn)
}

let delay = 2000
const btn3 = document.querySelector('.dropdown-menu')

timerClick(btn3.children[0], delay, btnClick)
timerClick(btn3.children[1], delay + 1000, btnClick)
timerClick(btn3.children[2], delay + 3000, btnClick)
timerClick(btn3.children[3], delay + 3000, btnClick)
timerClick(btn3.children[4], delay + 5500, btnClick)


// Шаг 3, делаем 2 клика назад (возвр. на главную)
history.go(-2)