function meuEscopo() {
    const form = document.querySelector("#formIMC");
    const resp = form.querySelector("#resp");
    const getHistoric = form.querySelector("#getHistoric");

    function calculateAndOther() {
        const date = new Date();
        const dayWeek = date.getDay();
        const dayMonth = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const dayWeekFormated = "";
        const dayMonthFormated = "";
        const monthFormated = "";
        const minuteFormated = "";
        const secondFormated = "";
        const hourFormated = "";
        const hrMinSeond = "";

        function createP() {
            const p = document.createElement("p");
            return p
        }

        function dayWeekFormat() {
            const daysWeek = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]

            switch (dayWeek) {
                case 0:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                case 1:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                case 2:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                case 3:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                case 4:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                case 5:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                case 6:
                    dayWeekFormated = daysWeek[dayWeek];
                    break;
                default:
                    dayWeekFormated = "Algum dia ai";
            }

            return dayWeekFormated
        }

        function formatZeroAtLeftTime() {
            if(hour < 10){
                hourFormated = `0${hour}`;
                return hourFormated
            }
            if(minute < 10){
                minuteFormated = `0${minute}`;
                return minuteFormated
            }
            if(second < 10){
                secondFormated = `0${second}`;
                return secondFormated
            }

            hrMinSeond = `${hourFormated}H:${minuteFormated}M:${secondFormated}S`;

            return hrMinSeond
        }

        function formatMonth() {
            const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

            if(month)
        }

        function formatDaysMonth() {

        }

        function createObject() {
            const obj = {
                peso: peso,
                altura: altura,
                dia: formatDaysMonth(),
                diaSemana: dayWeekFormat(),
                mes: formatMonth(),
                hora: formatZeroAtLeftTime(),
                ano: year
            }

            return obj
        }

        function createHistoric() {
            const historic = [createObject()]

            return historic
        }
    }

    function getEventForm(e) {
        e.preventDefault()
        alert("Evento previnido")
    }

    form.addEventListener("submit", getEventForm)
}

meuEscopo()