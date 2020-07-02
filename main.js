const bodyElement = document.querySelector('body')

let div = document.createElement('div')

let coin = {
    state: 0,
    flip: function () {

        this.state = Math.floor(Math.random() * 2)
    },
    toString: function () {
        if (this.state === 0) {
            return "heads "
        }
        else {
            return "tails "
        }
    },

    toHTML: function () {
        let image = document.createElement('img');

        if (this.state === 0) {
            image.setAttribute("src", "./images/headsUp.JPEG")
        }
        else {
            image.setAttribute("src", "./images/tailsDown.JPEG")
        }
        return image;
    }
};
function display20Flips() {
    for (let index = 0; index < 20; index += 1) {
        coin.flip();
        bodyElement.append(coin.toString());
    }

}
new display20Flips()
function display20Images() {
    for (let index = 0; index < 20; index += 1) {
        coin.flip();
        div.append(coin.toHTML())
        bodyElement.append(div)
    }
}
new display20Images()