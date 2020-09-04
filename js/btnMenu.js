const $menu = document.querySelector('.menu-close')

const $btnMenu = document.querySelector('.btnMenu')

$btnMenu.addEventListener('click', function(){
    if ($btnMenu.checked == true) {
        $menu.classList.add('menu-open')
    console.log($btnMenu.event())
    }
    $menu.classList.remove('menu-open')
    
})

console.log($btnMenu)