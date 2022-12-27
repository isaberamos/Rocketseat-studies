const div = document.createElement('div');
div.innerText = "Hello"

const body = document.querySelector('body')

body.append(div)

//body.prepend(div)
const script = body.querySelector('script')
body.insertBefore(div, script)


const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)