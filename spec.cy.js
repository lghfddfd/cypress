describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ijk.vkusvill.ru/')
  })
  describe('Прокрутка слайдера', () => {
    it('Переходит по кнопкам на слайдере', () => {
      cy.visit('https://ijk.vkusvill.ru/') 
      for (let i = 0; i < 3; i++) { 
        cy.get('.VV_SliderBtn._desktop-lg._tablet-sm._mobile-sm._next._light.js-vv-mp-main-slider__btn-next').click()
      }
    })
  })
  describe('Поиск категории "Карта лояльности"', () => {
    it('Ищет категории на главной странице', () => {
      cy.visit('https://ijk.vkusvill.ru/')
      cy.contains('Карта лояльности')
    })
  })
  describe('Открывает сайт с заданным разрешением', () => {
    it('Открывает сайт с разрешением 550 на 750', () => {
      cy.visit('https://ijk.vkusvill.ru/')
      cy.viewport(550, 750)
    })
  })
  
  describe('Открытие категории "Готовая еда"', () => {
    it('Открывет категорию "Готовая еда"', () => {
      cy.visit('https://ijk.vkusvill.ru/') 
      cy.get('HeaderBottomBtn__Img').eq(4).click()
    })
  })
  describe('Заказ доставки и добавление в корзину', () => {
    it('Добавил товар в корзину', () => {
      cy.visit('https://ijk.vkusvill.ru/') 
      cy.get('HeaderBottomBtn__Img').eq(4).click()
      cy.get('.CartButton__textInner').eq(1).click()
    })
  })
  describe('Проверка наличия товара в корзине', () => {
    it('Суп находится в корзине', () => {
      cy.visit('https://ijk.vkusvill.ru/') 
      cy.get('HeaderBottomBtn__Img').eq(4).click()
      cy.get('.CartButton__textInner').eq(1).click()
      cy.get('.UniversMainIcBtn__Img').eq(0).click()
      cy.wait(1000)
      cy.contains('суп')    
    })
  })
})