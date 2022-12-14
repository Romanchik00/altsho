function showModalWin() {

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'flex'; // "включаем" его
    modalWin.style.placeContent = 'center'

    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;
    };
    // var subcribeButton = document.getElementById('subbut');
    // subcribeButton.onclick = function () {
    //   darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
    //   modalWin.style.display = 'none'; // делаем окно невидимым
    //   alert("You subcribe");
    //   return false;
    // };
}

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const fullName = document.getElementById('fullName');
const tel = document.getElementById('tel');
form.addEventListener('submit', function (event) {
    // Если поле email валдно, позволяем форме отправляться
    if ((!email.validity.valid) || (!fullName.validity.valid) || (!tel.validity.valid)) {
        event.preventDefault();
    }
});