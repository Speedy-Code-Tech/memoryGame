const emojis = ["😀", "😀", "😍", "😍", "😘", "😘", "🥰", "🥰", "🤑", "🤑", "🤡", "🤡", "🥺", "🥺", "👽", "👽"]
const shuffle_emoji = (emojis.sort(() => (Math.random() > .5) ? 2 : -1))


for (let i = 0; i < shuffle_emoji.length; i++) {
    let item = document.createElement("div")
    item.classList = "item"
    item.innerHTML = shuffle_emoji[i]
    document.querySelector(".square").appendChild(item)

    item.addEventListener('click', function () {
        this.classList.add('jester')
        setTimeout(() => {

            if (document.querySelectorAll('.jester').length) {
                if (document.querySelectorAll('.jester')[0].innerHTML === document.querySelectorAll('.jester')[1].innerHTML) {
                    document.querySelectorAll('.jester')[0].classList.add('match')
                    document.querySelectorAll('.jester')[1].classList.add('match')

                    document.querySelectorAll('.jester')[1].classList.remove('jester')
                    document.querySelectorAll('.jester')[0].classList.remove('jester')

                    if (document.querySelectorAll('.match').length === emojis.length) {
                        setTimeout(() => {
                            document.querySelector('.modalshow').classList.add('show')
                            setTimeout(() => {
                                document.querySelector('.show').classList.add('modalshow')
                                document.querySelector('.show').classList.remove('show')
                                window.location.reload()
                            }, 1000)
                        }, 300);

                    }



                } else {
                    document.querySelectorAll('.jester')[1].classList.remove('jester')
                    document.querySelectorAll('.jester')[0].classList.remove('jester')
                }
            }
        }, 300)
    })
}

document.getElementById("next").addEventListener('click', function () {
    window.location.reload()
})