// Basic code obfuscation
(function(){
    // Disable console methods
    const consoleMethods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'clear', 'count', 'dir', 'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'timeLog', 'trace', 'profile', 'profileEnd'];
    consoleMethods.forEach(method => {
        console[method] = function(){};
    });

    // Disable common debugging functions
    window.onerror = function() { return true; };
    window.onunhandledrejection = function() { return true; };

    // Disable source maps
    if (window.SourceMap) {
        window.SourceMap = undefined;
    }

    // Disable common debugging properties
    Object.defineProperty(window, 'console', {
        get: function() {
            return {};
        }
    });

    // Disable common debugging methods
    const debugMethods = ['debugger', 'eval', 'Function'];
    debugMethods.forEach(method => {
        Object.defineProperty(window, method, {
            get: function() {
                return function(){};
            }
        });
    });
})(); 