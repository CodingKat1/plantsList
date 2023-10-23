const deleteText = document.querySelectorAll('.fa-trash')
const thumbsUpText = document.querySelectorAll('.fa-thumbs-up')
const thumbsDownText = document.querySelector('.fa-thumbs-down')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deletePlant)
})

Array.from(thumbsUpText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

Array.from(thumbsDownText).forEach((element)=> {
    element.addEventListener('click', subtractLike)
})

async function deletePlant(){
    const row = this.closest('tr')
    const cName = row.querySelector('td').textContent
    const bName = row.querySelector('td:nth-child(2)').textContent
    try{
        const response = await fetch('deletePlant', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'commonNameS': cName,
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const row = this.closest('tr')
    const cName = row.querySelector('td').textContent
    const bName = row.querySelector('td:nth-child(2)').textContent
    const tLikes = Number(row.querySelector('td:nth-child(3)').textContent)
    // const cName = this.parentNode.childNodes[1].innerText
    // const bName = this.parentNode.childNodes[3].innerText
    // const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'commonNameS': cName,
              'botanicalNameS': bName,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function subtractLike(){
    const row = this.closest('tr')
    const cName = row.querySelector('td').textContent
    const bName = row.querySelector('td:nth-child(2)').textContent
    const tLikes = Number(row.querySelector('td:nth-child(3)').textContent)
    try{
        const response = await fetch('subtractOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'commonNameS': cName,
              'botanicalNameS': bName,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}