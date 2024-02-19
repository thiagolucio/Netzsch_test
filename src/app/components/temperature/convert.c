#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
float convertCelsiusToFahrenheit(float celsius) {
    return (celsius * 9.0 / 5.0) + 32.0;
}


