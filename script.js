var menuItem = document.querySelectorAll('.item-menu')
function selectlink(){
    menuItem.forEach((item)=>
    item.classlist.remove('ativo')
    )
    thisclasslist.add('ativo')

}

menuItem.forEach((item)=>
item.addEventListener('click', selectlink)
)

var btnExp = document.querySelector()