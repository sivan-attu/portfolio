// Navbar Init
(() => {
    const navItem = [
        { name: 'Home', href: 'home'},
        { name: 'About', href: 'about'},
        { name: 'Contact', href: 'contact'},
    ]

    const navId = document.getElementById('navLinks');

    navItem.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${item.href}`;
        a.innerText = item.name;
        if (item.name === 'Home') {
            li.classList.add('active');
        }
        li.appendChild(a);
        navId.appendChild(li);
    })

    window.addEventListener('resize', ()=>{
        const width = window.innerWidth;
        const menuItems = document.getElementById('navLinks');
        if (width > 600) {
            menuItems.style.display = "flex";
        }else{
            menuItems.style.display = "none";
        }
    });

    navIsActiveItem();
})();

function navIsActiveItem(){
    const menuItems = document.querySelectorAll('#navLinks li');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => {
                i.removeAttribute('class');
            });
            item.classList.add('active');
        });
    });
}

// Menu Icon
function isVisible(){
    const menuItems = document.getElementById('navLinks');
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "flex";
    } else {
        menuItems.style.display = "none";
    }
}