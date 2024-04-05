var day = 0;
var month = 0;
var signoZodiacal = "";
function zodiac(day, month) {
    if ((day > 21 && month == 3) || (day < 19 && month == 4)) {
        signoZodiacal = "ARIES";
    }
    else if ((day > 20 && month == 4) || (day < 20 && month == 5)) {
        signoZodiacal = "TAURO";
    }
    else if ((day > 21 && month == 5) || (day < 20 && month == 6)) {
        signoZodiacal = "G\u00C9MINIS";
    }
    else if ((day > 21 && month == 6) || (day < 22 && month == 7)) {
        signoZodiacal = "C\u00C1NCER";
    }
    else if ((day > 23 && month == 7) || (day < 22 && month == 8)) {
        signoZodiacal = "LEO";
    }
    else if ((day > 23 && month == 8) || (day < 22 && month == 9)) {
        signoZodiacal = "VIRGO";
    }
    else if ((day > 23 && month == 9) || (day < 22 && month == 10)) {
        signoZodiacal = "LIBRA";
    }
    else if ((day > 23 && month == 10) || (day < 21 && month == 11)) {
        signoZodiacal = "ESCORPIO";
    }
    else if ((day > 22 && month == 11) || (day < 21 && month == 12)) {
        signoZodiacal = "SAGITARIO";
    }
    else if ((day > 22 && month == 12) || (day < 19 && month == 1)) {
        signoZodiacal = "CAPRICORNIO";
    }
    else if ((day > 20 && month == 1) || (day < 18 && month == 2)) {
        signoZodiacal = "ACUARIO";
    }
    else if ((day > 19 && month == 2) || (day < 20 && month == 3)) {
        signoZodiacal = "PISCIS";
    }
    return signoZodiacal;
}
;
console.log("El signo zodiacal es: ".concat(zodiac(23, 3)));
var country = "";
var continente = "";
function continent(country) {
    if (country == "España" || country == "Italia" || country == "Grecia" || country == "Portugal" || country == "Francia") {
        continente = "Europa";
    }
    else if (country == "Egipto" || country == "Nigeria" || country == "Argelia" || country == "Costa de Marfil" || country == "Tanzania") {
        continente = "África";
    }
    else if (country == "Filipinas" || country == "China" || country == "India" || country == "Camboya" || country == "Vietnam") {
        continente = "Asia";
    }
    else if (country == "EEUU" || country == "Canadá" || country == "Argentina" || country == "Cuba" || country == "Brasil") {
        continente = "América";
    }
    else if (country == "Australia" || country == "Nueva Zelanda" || country == "Fiji" || country == "Islas de Cook" || country == "Papúa Nueva Guinea") {
        continente = "Oceanía";
    }
    else {
        console.log("Ese país no se encuentra en la base de datos. Por favor, inserte otro. ¡Gracias!");
        return continente;
    }
}
console.log("El pa\u00EDs ".concat(country = "Camboya", " pertenece al continente de ").concat(continent(country = "Camboya")));
