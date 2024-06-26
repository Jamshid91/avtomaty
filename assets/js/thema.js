const switchBtn = document.querySelectorAll('.switch'),
      toggleTheme = document.querySelectorAll('.themeBtn');
let el = document.documentElement;


function theme() {
     switchBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if(el.hasAttribute ('date-theme')) {
                el.removeAttribute('date-theme');
                localStorage.removeItem('theme');
            }   else {
                el.setAttribute('date-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            if(localStorage.getItem('theme') !== null) {
                el.setAttribute('date-theme', 'dark');
            }
        })
     })
}
theme();


function themeMob() {
    toggleTheme.forEach(btn => {
        btn.addEventListener('click', () => {
            if(el.hasAttribute('date-theme')) {
                el.removeAttribute('date-theme');
                localStorage.removeItem('theme');
            } else {
                el.setAttribute('date-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }   
        });
    })

    if(localStorage.getItem('theme') !== null) {
        el.setAttribute('date-theme', 'dark');
    }
}
themeMob();