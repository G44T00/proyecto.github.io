const container = document.querySelector('.container')


const figures = () => {
    for(let i = 0; i<= 25; i++){
        let figure = document.querySelector('.span-fondo')

        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 500)
    }
}

figures()