$(document).ready(function() {
    var currentFloor = 2; // переменная с текущим этажем
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    // функция при наведении мышкой на этаж
    floorPath.on("mouseover", function() {
        floorPath.removeClass("currenet-floor"); // удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    //отслеживаем клик по кнопке вверх
    counterUp.on("click", function() {
        // проверяем значение этажа
        if (currentFloor < 18) {
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // формируем переменную с этажом, чтобы было 01 а не 1
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("currenet-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("currenet-floor"); //подсвечиваем текущий этаж
        }
    });
    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("currenet-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("currenet-floor");
        }
    });

    function toggleModal() {
        modal.toggleClass("is-open");
    }
});