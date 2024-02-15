#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
double celsiusToFahrenheit(double celsius) {
    return (celsius * 9.0 / 5.0) + 32.0;
}
