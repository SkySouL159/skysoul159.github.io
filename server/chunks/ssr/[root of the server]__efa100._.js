module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/Components/lib/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
}}),
"[project]/Components/ui/SparklesCore.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SparklesCore": (()=>SparklesCore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@tsparticles/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tsparticles/slim'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Components/lib/utils.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
const SparklesCore = (props)=>{
    const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;
    const [init, setInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initParticlesEngine(async (engine)=>{
            await loadSlim(engine);
        }).then(()=>{
            setInit(true);
        });
    }, []);
    const controls = useAnimation();
    const particlesLoaded = async (container)=>{
        if (container) {
            controls.start({
                opacity: 1,
                transition: {
                    duration: 1
                }
            });
        }
    };
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        animate: controls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("opacity-0", className),
        children: init && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Particles, {
            id: id || generatedId,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full w-full"),
            particlesLoaded: particlesLoaded,
            options: {
                background: {
                    color: {
                        value: background || "#0d47a1"
                    }
                },
                fullScreen: {
                    enable: false,
                    zIndex: 1
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    bounce: {
                        horizontal: {
                            value: 1
                        },
                        vertical: {
                            value: 1
                        }
                    },
                    collisions: {
                        absorb: {
                            speed: 2
                        },
                        bounce: {
                            horizontal: {
                                value: 1
                            },
                            vertical: {
                                value: 1
                            }
                        },
                        enable: false,
                        maxSpeed: 50,
                        mode: "bounce",
                        overlap: {
                            enable: true,
                            retries: 0
                        }
                    },
                    color: {
                        value: particleColor || "#ffffff",
                        animation: {
                            h: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            },
                            s: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            },
                            l: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            }
                        }
                    },
                    effect: {
                        close: true,
                        fill: true,
                        options: {},
                        type: {}
                    },
                    groups: {},
                    move: {
                        angle: {
                            offset: 0,
                            value: 90
                        },
                        attract: {
                            distance: 200,
                            enable: false,
                            rotate: {
                                x: 3000,
                                y: 3000
                            }
                        },
                        center: {
                            x: 50,
                            y: 50,
                            mode: "percent",
                            radius: 0
                        },
                        decay: 0,
                        distance: {},
                        direction: "none",
                        drift: 0,
                        enable: true,
                        gravity: {
                            acceleration: 9.81,
                            enable: false,
                            inverse: false,
                            maxSpeed: 50
                        },
                        path: {
                            clamp: true,
                            delay: {
                                value: 0
                            },
                            enable: false,
                            options: {}
                        },
                        outModes: {
                            default: "out"
                        },
                        random: false,
                        size: false,
                        speed: {
                            min: 0.1,
                            max: 1
                        },
                        spin: {
                            acceleration: 0,
                            enable: false
                        },
                        straight: false,
                        trail: {
                            enable: false,
                            length: 10,
                            fill: {}
                        },
                        vibrate: false,
                        warp: false
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 400,
                            height: 400
                        },
                        limit: {
                            mode: "delete",
                            value: 0
                        },
                        value: particleDensity || 120
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: speed || 4,
                            decay: 0,
                            delay: 0,
                            sync: false,
                            mode: "auto",
                            startValue: "random",
                            destroy: "none"
                        }
                    },
                    reduceDuplicates: false,
                    shadow: {
                        blur: 0,
                        color: {
                            value: "#000"
                        },
                        enable: false,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    },
                    shape: {
                        close: true,
                        fill: true,
                        options: {},
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: minSize || 1,
                            max: maxSize || 3
                        },
                        animation: {
                            count: 0,
                            enable: false,
                            speed: 5,
                            decay: 0,
                            delay: 0,
                            sync: false,
                            mode: "auto",
                            startValue: "random",
                            destroy: "none"
                        }
                    },
                    stroke: {
                        width: 0
                    },
                    zIndex: {
                        value: 0,
                        opacityRate: 1,
                        sizeRate: 1,
                        velocityRate: 1
                    },
                    destroy: {
                        bounds: {},
                        mode: "none",
                        split: {
                            count: 1,
                            factor: {
                                value: 3
                            },
                            rate: {
                                value: {
                                    min: 4,
                                    max: 9
                                }
                            },
                            sizeOffset: true
                        }
                    },
                    roll: {
                        darken: {
                            enable: false,
                            value: 0
                        },
                        enable: false,
                        enlighten: {
                            enable: false,
                            value: 0
                        },
                        mode: "vertical",
                        speed: 25
                    },
                    tilt: {
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false
                        },
                        direction: "clockwise",
                        enable: false
                    },
                    twinkle: {
                        lines: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1
                        },
                        particles: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1
                        }
                    },
                    wobble: {
                        distance: 5,
                        enable: false,
                        speed: {
                            angle: 50,
                            move: 10
                        }
                    },
                    life: {
                        count: 0,
                        delay: {
                            value: 0,
                            sync: false
                        },
                        duration: {
                            value: 0,
                            sync: false
                        }
                    },
                    rotate: {
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false
                        },
                        direction: "clockwise",
                        path: false
                    },
                    orbit: {
                        animation: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: false
                        },
                        enable: false,
                        opacity: 1,
                        rotation: {
                            value: 45
                        },
                        width: 1
                    },
                    links: {
                        blink: false,
                        color: {
                            value: "#fff"
                        },
                        consent: false,
                        distance: 100,
                        enable: false,
                        frequency: 1,
                        opacity: 1,
                        shadow: {
                            blur: 5,
                            color: {
                                value: "#000"
                            },
                            enable: false
                        },
                        triangles: {
                            enable: false,
                            frequency: 1
                        },
                        width: 1,
                        warp: false
                    },
                    repulse: {
                        value: 0,
                        enabled: false,
                        distance: 1,
                        duration: 1,
                        factor: 1,
                        speed: 1
                    }
                },
                detectRetina: true
            }
        }, void 0, false, {
            fileName: "[project]/Components/ui/SparklesCore.jsx",
            lineNumber: 45,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/ui/SparklesCore.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
}}),
"[project]/Components/UIsparkle.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UIsparkle": (()=>UIsparkle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$ui$2f$SparklesCore$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Components/ui/SparklesCore.jsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
function UIsparkle() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[16rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md sm:h-[20rem]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative container-width flex items-center justify-center",
            style: {
                height: "18rem"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$ui$2f$SparklesCore$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparklesCore"], {
                    background: "transparent",
                    minSize: 0.4,
                    maxSize: 1,
                    particleDensity: 1200,
                    className: "absolute inset-0 w-full h-full",
                    particleColor: "#FFFFFF"
                }, void 0, false, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl sm:text-7xl md:text-7xl lg:text-9xl text-center text-white z-10 mt-[5px] sm:mt-0",
                            children: "GRAVITY"
                        }, void 0, false, {
                            fileName: "[project]/Components/UIsparkle.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-4xl text-white mt-0 sm:mt-1 bg-black bg-opacity-50 px-4 py-1 rounded-md ",
                            children: "FILMS"
                        }, void 0, false, {
                            fileName: "[project]/Components/UIsparkle.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.2,
                                duration: 1
                            },
                            className: "text-center text-white text-xs sm:text-lg bg-black bg-opacity-70 px-4 py-2 rounded-md shadow-lg z-20 mt-6",
                            children: [
                                "We are Creative Media & Brand Transformation",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Components/UIsparkle.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                "Ads | Online Presence | Media Production",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Components/UIsparkle.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                "Creating ideas into reality"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Components/UIsparkle.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-20 top-5 sm:top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"
                }, void 0, false, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-20 top-5 sm:top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"
                }, void 0, false, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-60 top-5 sm:top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"
                }, void 0, false, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-60 top-5 sm:top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"
                }, void 0, false, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
                }, void 0, false, {
                    fileName: "[project]/Components/UIsparkle.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Components/UIsparkle.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/UIsparkle.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__efa100._.js.map