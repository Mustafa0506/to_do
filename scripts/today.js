import arr from "../modules/arr.js"

let for_today = document.querySelector('.for_today')
let for_today_title = document.querySelector('.for_today_title')

let isChack = localStorage.getItem('isChack')
    
let for_today_count = 0

for (let item of arr) {

    // date

    let date = new Date()
    date.setDate(date.getDate() + item.left)
    // console.log(date);

    // date

    let task_block = document.createElement('div')

    let check = document.createElement('div')
    let task_block_text = document.createElement('div')
    let left = document.createElement('div')

    let check_box = document.createElement('div')
    let check_text = document.createElement('div')

    task_block.classList.add('task_block')

    check.classList.add('check')
    task_block_text.classList.add('task_block_text')
    left.classList.add('left')
    left.innerHTML = item.left
    task_block_text.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae."
    check_box.classList.add('check_box')
    check_text.classList.add('check_text')
    check_text.innerHTML = item.title

    task_block.append(check, task_block_text, left)
    check.append(check_box, check_text)

    if (item.left === 0) {
        for_today.append(task_block)
        left.innerHTML = 'Today'
        for_today_count++
        for_today_title.innerHTML = `FOR TODAY - ${for_today_count}`
    }

    check_box.onclick = () => {
        if (check_box.classList.contains('check_box')) {
            check_box.classList.add('check_box_active')
            check_box.classList.remove('check_box')
            isChack = true
            localStorage.setItem('isChack', isChack)
        } else {
            check_box.classList.add('check_box')
            check_box.classList.remove('check_box_active')
            isChack = false
            localStorage.setItem('isChack', isChack)
        }

    }
}
