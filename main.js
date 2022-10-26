import arr from "./modules/arr.js"

let for_today = document.querySelector('.for_today')
let tomorrow = document.querySelector('.tomorrow')
let later = document.querySelector('.later')
let for_today_title = document.querySelector('.for_today_title')
let tomorrow_title = document.querySelector('.tomorrow_title')
let later_title = document.querySelector('.later_title')

let isChack = false
let a = localStorage.getItem('isChack')


let for_today_count = 0
let tomorrow_count = 0
let later_count = 0

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
    left.innerHTML = date
    task_block_text.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae."
    check_box.classList.add('check_box')
    check_text.classList.add('check_text')
    check_text.innerHTML = item.title

    task_block.append(check, task_block_text, left)
    check.append(check_box, check_text)

    if (item.left === 0) {
        left.innerHTML = 'Today'
        for_today.append(task_block)
        for_today_count++
        for_today_title.innerHTML = `FOR TODAY - ${for_today_count}`
    } else if (item.left === 1) {
        left.innerHTML = 'Tomorrow'
        tomorrow.append(task_block)
        tomorrow_count++
        tomorrow_title.innerHTML = `TOMORROW - ${tomorrow_count}`
    } else {
        later.append(task_block)
        later_count++
        later_title.innerHTML = `LATER - ${later_count}`
    }

    check_box.onclick = () => {
        if (check_box.classList.contains('check_box')) {
            check_box.classList.add('check_box_active')
            check_box.classList.remove('check_box')
            isChack = true
            localStorage.setItem('isChack', isChack)
            console.log('true');
        } else {
            check_box.classList.add('check_box')
            check_box.classList.remove('check_box_active')
            isChack = false
            localStorage.setItem('isChack', isChack)
            console.log('false');    
        }
        
    }

    if (a === true) {
        check_box.classList.add('check_box_active')
    }
}
