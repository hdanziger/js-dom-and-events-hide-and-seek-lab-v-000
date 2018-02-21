function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
    const list = document.querySelectorAll('.ranked-list')
    for (let i = 0, l = list.length; i < l; i++) {
    let children = list[i].children
    
    for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
    }
}

function deepestChild() {
    let grandNode = document.getElementById('grand-node')
  let newNode = grandNode.children[0]
  
    while (newNode){
    grandNode = newNode
    newNode = grandNode.children[0]
    }
        return grandNode
 
}