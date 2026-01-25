const ACTIVE_CLASS = {
  tab: 'tab-nav__button--active',
  panel: 'tab-panel--active',
}

const tabs = document.querySelectorAll('.tab-nav .tab-nav__button')
const tabPanels = document.querySelectorAll('.tab-panel')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => tab.classList.remove(ACTIVE_CLASS.tab))
    tab.classList.add(ACTIVE_CLASS.tab)

    tabPanels.forEach((panel) => panel.classList.remove(ACTIVE_CLASS.panel))

    const targetId = tab.getAttribute('data-target')
    const targetContent = document.getElementById(targetId)
    
    if (targetContent) {
      targetContent.classList.add(ACTIVE_CLASS.panel)
    }
  })
})
