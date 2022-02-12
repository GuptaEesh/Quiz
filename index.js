let tabsType2 = document.querySelectorAll('.nav-secondTabs .tab');

function resetTabsType2() {
    tabsType2.forEach(tab => {
        tab.parentNode.classList.remove('selected-tab')
    });
}
tabsType2.forEach(tab => {
    tab.addEventListener('click', () => {
        resetTabsType2();
        tab.parentNode.classList.add('selected-tab');
    })
})