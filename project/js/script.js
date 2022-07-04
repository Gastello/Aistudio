$(document).ready(function () {
   $('.slider').slick(
      {
         //!Для пошаговой загрузки изображений (когда пользователь меняет картинку, то она загружается, а не все сразу)
         //!в теге пишем <img data-lazy=""> вместо src=""

         //Стрелки
         arrows: true,
         //Точки
         dots: true,
         //Авто-высота
         adaptiveHeight: false,
         //К-во слайдов
         slidesToShow: 1,
         //К-во слайдов, что прокручивется за раз
         slidesToScroll: 1,
         //Время прокрутки
         speed: 1000,
         //Тип анимации
         easing: 'linear',
         //Бесконечность слайдера
         infinite: false,
         //Стартовый слайд
         initialSlide: 0,
         //Авто-проигравание
         autoplay: false,
         //Скорость авто-проигравание
         autoplaySpeed: 2000,
         //Остановка авто-проигравание
         pauseOnFocus: true,
         pauseOnHover: true,
         pauseOnDotsHover: true,
         //Управление свайпом на ПК
         draggable: false,
         //Управление свайпом на телефонах
         swipe: true,
         //Длина свайпа, для прокрутки (Чем меньше число, тем длинее свайп)
         touchThreshold: 5,
         //Возможности тачскрина (Элементы слайдера не передвигаются при свайпе, но свайпаются)
         touchMove: true,
         //Возможность спамить переключениями слайда
         waitForAnimate: true,
         //Делает активный слайд центральным
         centerMode: false,
         //Автоматическая ширина картинок
         variableWidth: false,
         //К-вл рядов
         rows: 1,
         //К-вл слайдов в ряду
         slidesPerRow: 1,
         //Вертикальный слайдер (display: flex; наадо отключить, сладйу стоит задать высоту)
         vertical: false,
         //Вертикальный свайп
         verticalSwiping: false,
         //Слайд не листаеться, а плавно заменяется (только при slidesToShow: 1,)
         fade: false,
         //Связать слайдеры (указивать в двоих слайдерах их пару)
         //? asNavFor:".slider_second",
         //Брейк-поинты
         responsive: [
            {
               breakpoint: 767.99,
               settings: {
                  //новые ностройки
                  arrows: false,
               }
            },
            {
               breakpoint: 480,
               settings: {
                  //новые ностройки
                  arrows: false,
                  waitForAnimate: false,
               }
            }
         ],
         //max-width меняется на min-width
         mobileFirst: false,
         //Перемещение стрелочек/точке в контейнер
         //? appendArrows: $('.className'),
         //? appendDots: $('.className'),
         //max-width меняется на min-width
         mobileFirst: false,

      }
   );
   /*
   $('.slider_second').slick(
      {
         asNavFor:".slider",
      }
   );
   */

   // Событие до изменения в слайдере
   /*
   $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      console.log(nextSlide);
   });
   */

   // Метод перезагрузки слайдера
   /*
   $('.slider').slick('setPosition');   
   */

   // Метод переключения слайдера на 3 слайд
   /*
   $('.slider').slick('goTo', 3);   
   */

   // Метод переключения слайдера вперед/назад
   /*
   $('.link_l').slick('slickPrev'); 
   $('.link_r').slick('slickNext');   
   */

   // Метод переключения слайдера play/pause
   /*
   $('.link_play').slick('slickPlay'); 
   $('.link_pause').slick('slickPause');   
   */

   // Метод добавления html кода в слайдер
   /*
   $('.link-add').click(function(event){
   $('.slider').slick('slickAdd',"<div></div>"); 
   return false; //чтобы страница не перезагружалась
   }); 
   */

   // Метод удаления html слайда по индексу
   /*
   $('.link-remove').click(function(event){
   $('.slider').slick('slickRemove', 0); 
   return false; //чтобы страница не перезагружалась
   }); 
   */

   // Метод для того, чтобы получить инф. о конкретной опции
   /*
   var s=$('.slider').slick('slickGetOption', 'slidesToShow');
   console.log(s);
   */

   // Метод для переназначении конкретной опции
   /*
   var s=$('.slider').slick('slickSetOption', 'slidesToShow', 2);
   */

   // Метод для отключения слайдера
   /*
   $('.slider').slick('unslick');
   */
});

// ЦЕЙ КОД ВІДПОВІДАЄ ЗА ЦИФРИ
var $slider = $('.slider');
$slider.on('init', function (event, slick) {
   console.log(slick);
   $('.slider__current-slide').text(slick.currentSlide + 1);
   $('.slider__all-slides').text('/' + slick.slideCount)
});
var afterChange = function (slick, currentIndex) {
   currentSlide = slick.slickCurrentSlide() + 1;
   console.log(slick, currentSlide);
   slidesCount = slick.slideCount;
   $('.slider__current-slide').text(currentSlide);
};
$slider.on('afterChange', function (event, slick, currentSlide) {
   afterChange(slick, currentSlide);
});
$slider.on('swipe', function (event, slick, currentSlide) {
   afterChange(slick, currentSlide);
});