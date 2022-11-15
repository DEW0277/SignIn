'use strict'

const name = document.querySelector('.name')
const surName = document.querySelector('.surName')
const age = document.querySelector('.age')
const btn = document.querySelector('.btn')
const input =document.querySelectorAll('input')
const table = document.querySelector('table')

let inputPlaceholder = []
function test(){
    input.forEach((item)=>{
        inputPlaceholder.push(item.placeholder)
    })
    input.forEach((item, itemIndex)=>{
        item.addEventListener('focus',()=>{
            item.placeholder = ''
        })
        item.addEventListener('blur', ()=>{
            item.placeholder = inputPlaceholder[itemIndex]
            if (item.value === ''){
                item.style.boxShadow = '0 0 4px 1px #ee0000, 0 0 6px #ee0000'
                item.placeholder = 'It should not be empty!!!'  
            }
        })
        item.addEventListener('input',()=>{
            item.style.boxShadow = 'none'
        })
    })

    btn.addEventListener('click', (stop)=>{
        stop.stopPropagation()
        stop.preventDefault()

        input.forEach((item, index) =>{

            if (item.value === ''){
                item.style.boxShadow = '0 0 4px 1px #ee0000, 0 0 6px #ee0000'
                item.placeholder = 'It should not be empty!!!'
                btn.classList.add('btnShake', 'formErr')
                setTimeout(()=>{
                    btn.classList.remove('btnShake')
                }, 200)
            }
            if (item.value !== ''){
                item.style.boxShadow = 'none'
                item.placeholder = inputPlaceholder[index]
            }

        })


        if (name.value !=='' && surName.value !== '' && age.value !== ''){
            btn.classList.remove('btnShake', 'formErr')
            table.innerHTML += `<tr class="user">
                <td>${name.value}</td>
                <td>${surName.value}</td>
                <td>${age.value}</td>
                <td class="userDel" title="Delete user data"><i class="fa-solid fa-trash"></i></td>
            </tr>`
            input.forEach((item, index)=>{
                item.value = ''
            })
            btn.classList.add('accept')
            btn.innerHTML = 'accepted'
            setTimeout(()=>{
                btn.classList.remove('accept')
                btn.innerHTML = 'send'
            }, 700)

            /* savol: nega userDel tashqarida ishlamadi, yani innerHTML da yaratilgan .userDel, .user ni olmadi
             yoki etc.*/

            const userData = document.querySelectorAll('.user')
            const userDel = document.querySelectorAll('.userDel')
            console.log(userData)
            userDel.forEach((item, index)=>{
                item.addEventListener('click',()=>{
                    userData.forEach((userItem, userIndex)=>{
                        if (userIndex === index){
                            userItem.style.display = 'none'
                        }
                    })
                })
            })

        }
    })
}
test();

