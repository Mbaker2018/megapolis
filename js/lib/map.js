 // Создание обработчика для события window.onLoad
               YMaps.jQuery(function () {
                   // Создание экземпляра карты и его привязка к созданному контейнеру
                   var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
                       map.behaviors.disable(['drag', 'dblClickZoom']);

                   // Установка для карты ее центра и масштаба
                   map.setCenter(new YMaps.GeoPoint(37.34827,55.772242), 10);

                   // Создания стиля для балуна
                   var style = new YMaps.Style();
                   style.balloonStyle = {template: new YMaps.LayoutTemplate(SampleBalloonLayout)};
                   style.iconStyle = new YMaps.IconStyle();
                   style.iconStyle.href = "img/pinmap.png";
                   style.iconStyle.size = new YMaps.Point(42, 68);
                   style.iconStyle.offset = new YMaps.Point(-55, -30);

                   style.iconStyle.shadow = new YMaps.IconShadowStyle();
                   style.iconStyle.shadow.href = "img/map-shadow.png";
                   style.iconStyle.shadow.size = new YMaps.Point(51, 49);
                   style.iconStyle.shadow.offset = new YMaps.Point(-61, -15);

                   // Создание метки с созданным стилем и добавление ее на карту
                   var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.450984,55.790059), {style: style});
                   placemark.description = "Здесь можно разместить описание метки.";
                   map.addOverlay(placemark);

               });

               // Макет для балуна, реализующий интерфейс YMaps.IBalloonLayout
               function SampleBalloonLayout() {
                   this.element = YMaps.jQuery(
                       "<div class=\"b-simple-balloon-layout\">");

                   this.close = this.element.find(".close");
                   this.content = this.element.find(".content");

                   // // Отключает кнопку закрытия балуна
                   // this.disableClose = function(){
                   //     this.close.unbind("click").css("display", "none");
                   // };

                   // // Включает кнопку закрытия балуна
                   // this.enableClose = function(callback){
                   //     this.close.bind("click", callback).css("display", "");
                   //     return false;
                   // };

                   // Добавляет макет на страницу
                   this.onAddToParent = function (parentNode) {
                       YMaps.jQuery(parentNode).append(this.element);
                       this.update();
                   };

                   // Удаляет макет со страницы
                   this.onRemoveFromParent = function () {
                       this.element.remove();
                   };

                   // Устанавливает содержимое
                   this.setContent = function (content) {
                       content.onAddToParent(this.content[0]);
                   };

                   // Обработка обновления
                   this.update = function () {
                       this.element.css("margin-top", this.getOffset().getY());
                   };

                   // Возвращает сдвиг макета балуна относительно его точки позиционирования
                   this.getOffset = function () {
                       return new YMaps.Point(0, -this.content.height() - 45);
                   };

                   // Устанавливает максимально допустимый размер содержимого балуна
                   this.setMaxSize = function (maxWidth, maxHeight) {};
               };
