(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d786fe._.js", {

"[project]/Components/ui/ThreeDCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThreeDCard": (()=>ThreeDCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function ThreeDCard({ imageSrc, width, height }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = ()=>{
        setHovered(true);
    };
    const handleMouseLeave = ()=>{
        setHovered(false);
    };
    // Calculate modal size based on the black and white image dimensions
    const maxModalWidth = 400; // Maximum width for the modal
    const maxModalHeight = 500; // Maximum height for the modal
    const aspectRatio = width / height;
    let modalWidth = maxModalWidth;
    let modalHeight = maxModalWidth / aspectRatio;
    // Ensure the modal doesn't exceed max height
    if (modalHeight > maxModalHeight) {
        modalHeight = maxModalHeight;
        modalWidth = maxModalHeight * aspectRatio;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: cardRef,
        initial: {
            scale: 0.8,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        exit: {
            scale: 0.8,
            opacity: 0
        },
        transition: {
            type: "spring",
            duration: 0.4
        },
        className: "relative rounded-xl p-2 border bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] transition-transform duration-500 ease-out transform-gpu",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        style: {
            perspective: "1000px",
            transformStyle: "preserve-3d",
            width: `${modalWidth}px`,
            height: `${modalHeight}px`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: imageLoaded ? 1 : 0
                },
                transition: {
                    duration: 0.3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: "thumbnail",
                    width: modalWidth,
                    height: modalHeight,
                    className: "h-full w-full object-cover rounded-xl transition-shadow duration-500 ease-out",
                    onLoad: ()=>setImageLoaded(true),
                    draggable: false,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/Components/ui/ThreeDCard.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/ui/ThreeDCard.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-xl",
                animate: {
                    opacity: [
                        0.5,
                        1,
                        0.5
                    ]
                },
                transition: {
                    duration: 1.5,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/Components/ui/ThreeDCard.jsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Components/ui/ThreeDCard.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ThreeDCard, "6FJHuLSzgiiRDazJTPG9iKFSFiE=");
_c = ThreeDCard;
var _c;
__turbopack_refresh__.register(_c, "ThreeDCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/Paralexiamges.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Paraleximages": (()=>Paraleximages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$ui$2f$ThreeDCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Components/ui/ThreeDCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Paraleximages() {
    _s();
    const images = [
        "./Gallery/1.png",
        "./Gallery/2.webp",
        "./Gallery/3.jpeg",
        "./Gallery/4.webp",
        "./Gallery/5.jpg",
        "./Gallery/6.jpg",
        "./Gallery/7.jpg",
        "./Gallery/8.jpg",
        "./Gallery/9.png",
        "./Gallery/10.jpg",
        "./Gallery/11.jpg",
        "./Gallery/12.jpg",
        "./Gallery/13.jpg",
        "./Gallery/14.jpg",
        "./Gallery/15.jpg"
    ].map((path)=>path.startsWith("/") ? "." + path : path);
    const [hoveredImage, setHoveredImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredPosition, setHoveredPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagesLoaded, setImagesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Paraleximages.useEffect": ()=>{
            const checkMobile = {
                "Paraleximages.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
                }
            }["Paraleximages.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "Paraleximages.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["Paraleximages.useEffect"];
        }
    }["Paraleximages.useEffect"], []);
    const handleImageLoad = (index)=>{
        setImagesLoaded((prev)=>({
                ...prev,
                [index]: true
            }));
    };
    const handleImageError = (e)=>{
        e.target.src = "./Gallery/fallback.jpg"; // Add a fallback image
        console.error("Image failed to load:", e.target.src);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "image",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-800 text-center lg:text-4xl mt-8",
                children: "GALLERY"
            }, void 0, false, {
                fileName: "[project]/Components/Paralexiamges.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-justify text-gray-600 px-4 lg:px-8",
                children: "Discover the art of photo transformation through our professional editing showcase. Browse through our collection of before and after images to witness the stunning results of our expert retouching and enhancement techniques."
            }, void 0, false, {
                fileName: "[project]/Components/Paralexiamges.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4",
                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-visible mb-8",
                            onMouseEnter: (e)=>{
                                if (!isMobile) {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoveredPosition({
                                        x: rect.left + rect.width / 2,
                                        y: rect.top - 250
                                    });
                                    setHoveredImage(image);
                                }
                            },
                            onMouseLeave: ()=>!isMobile && setHoveredImage(null),
                            children: [
                                !imagesLoaded[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gray-200 animate-pulse rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Components/Paralexiamges.jsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: image,
                                    alt: `Gallery image ${index + 1}`,
                                    width: 800,
                                    height: 600,
                                    priority: index < 2,
                                    loading: index < 2 ? "eager" : "lazy",
                                    onError: handleImageError,
                                    className: "transition-all duration-300 ease-in-out rounded-lg w-full h-auto object-cover shadow-lg hover:shadow-xl grayscale hover:grayscale-0 hover:scale-[1.02]",
                                    onLoad: ()=>handleImageLoad(index),
                                    style: {
                                        border: "2px solid transparent",
                                        boxSizing: "border-box"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Components/Paralexiamges.jsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Components/Paralexiamges.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Components/Paralexiamges.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/Paralexiamges.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            !isMobile && hoveredImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 transition-all duration-300 ease-out transform-gpu",
                style: {
                    left: `${hoveredPosition.x}px`,
                    top: `${hoveredPosition.y}px`,
                    opacity: hoveredImage ? 1 : 0,
                    transform: `translate(-50%, -50%)`,
                    width: "400px",
                    height: "300px",
                    background: "transparent"
                },
                onMouseEnter: ()=>setHoveredImage(hoveredImage),
                onMouseLeave: ()=>setHoveredImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$ui$2f$ThreeDCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreeDCard"], {
                        imageSrc: hoveredImage,
                        width: 400,
                        height: 300,
                        style: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            borderRadius: "8px",
                            background: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Components/Paralexiamges.jsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Components/Paralexiamges.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/Paralexiamges.jsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Components/Paralexiamges.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Paraleximages, "1qRYu8tjEdEAc0ZKrzcaiUL5yCo=");
_c = Paraleximages;
var _c;
__turbopack_refresh__.register(_c, "Paraleximages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/lib/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/ui/SparklesCore.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SparklesCore": (()=>SparklesCore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@tsparticles/react/dist/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$slim$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tsparticles/slim/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Components/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@tsparticles/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tsparticles/react/dist/Particles.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const SparklesCore = (props)=>{
    _s();
    const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;
    const [init, setInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SparklesCore.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initParticlesEngine"])({
                "SparklesCore.useEffect": async (engine)=>{
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$slim$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlim"])(engine);
                }
            }["SparklesCore.useEffect"]).then({
                "SparklesCore.useEffect": ()=>{
                    setInit(true);
                }
            }["SparklesCore.useEffect"]);
        }
    }["SparklesCore.useEffect"], []);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
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
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: controls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("opacity-0", className),
        children: init && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id || generatedId,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full"),
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
_s(SparklesCore, "GDDYChLFNAxf9RfLmZZw8jvuJuo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = SparklesCore;
var _c;
__turbopack_refresh__.register(_c, "SparklesCore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/ui/Compare.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Compare": (()=>Compare)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$ui$2f$SparklesCore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Components/ui/SparklesCore.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Components/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDotsVertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDotsVertical$3e$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconDotsVertical.mjs [app-client] (ecmascript) <export default as IconDotsVertical>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const Compare = ({ firstImage = "", secondImage = "", className, firstImageClassName, secondImageClassname, initialSliderPercentage = 50, slideMode = "hover", showHandlebar = true, autoplay = false, autoplayDuration = 5000 })=>{
    _s();
    const [sliderXPercent, setSliderXPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSliderPercentage);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseOver, setIsMouseOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const autoplayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startAutoplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[startAutoplay]": ()=>{
            if (!autoplay) return;
            const startTime = Date.now();
            const animate = {
                "Compare.useCallback[startAutoplay].animate": ()=>{
                    const elapsedTime = Date.now() - startTime;
                    const progress = elapsedTime % (autoplayDuration * 2) / autoplayDuration;
                    const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
                    setSliderXPercent(percentage);
                    autoplayRef.current = setTimeout(animate, 16);
                }
            }["Compare.useCallback[startAutoplay].animate"];
            animate();
        }
    }["Compare.useCallback[startAutoplay]"], [
        autoplay,
        autoplayDuration
    ]);
    const stopAutoplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[stopAutoplay]": ()=>{
            if (autoplayRef.current) {
                clearTimeout(autoplayRef.current);
                autoplayRef.current = null;
            }
        }
    }["Compare.useCallback[stopAutoplay]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Compare.useEffect": ()=>{
            startAutoplay();
            return ({
                "Compare.useEffect": ()=>stopAutoplay()
            })["Compare.useEffect"];
        }
    }["Compare.useEffect"], [
        startAutoplay,
        stopAutoplay
    ]);
    function mouseEnterHandler() {
        setIsMouseOver(true);
        stopAutoplay();
    }
    function mouseLeaveHandler() {
        setIsMouseOver(false);
        if (slideMode === "hover") {
            setSliderXPercent(initialSliderPercentage);
        }
        if (slideMode === "drag") {
            setIsDragging(false);
        }
        startAutoplay();
    }
    const handleStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleStart]": (clientX)=>{
            if (slideMode === "drag") {
                setIsDragging(true);
            }
        }
    }["Compare.useCallback[handleStart]"], [
        slideMode
    ]);
    const handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleEnd]": ()=>{
            if (slideMode === "drag") {
                setIsDragging(false);
            }
        }
    }["Compare.useCallback[handleEnd]"], [
        slideMode
    ]);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleMove]": (clientX)=>{
            if (!sliderRef.current) return;
            if (slideMode === "hover" || slideMode === "drag" && isDragging) {
                const rect = sliderRef.current.getBoundingClientRect();
                const x = clientX - rect.left;
                const percent = x / rect.width * 100;
                requestAnimationFrame({
                    "Compare.useCallback[handleMove]": ()=>{
                        setSliderXPercent(Math.max(0, Math.min(100, percent)));
                    }
                }["Compare.useCallback[handleMove]"]);
            }
        }
    }["Compare.useCallback[handleMove]"], [
        slideMode,
        isDragging
    ]);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleMouseDown]": (e)=>handleStart(e.clientX)
    }["Compare.useCallback[handleMouseDown]"], [
        handleStart
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleMouseUp]": ()=>handleEnd()
    }["Compare.useCallback[handleMouseUp]"], [
        handleEnd
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleMouseMove]": (e)=>handleMove(e.clientX)
    }["Compare.useCallback[handleMouseMove]"], [
        handleMove
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleTouchStart]": (e)=>{
            if (!autoplay) {
                handleStart(e.touches[0].clientX);
            }
        }
    }["Compare.useCallback[handleTouchStart]"], [
        handleStart,
        autoplay
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleTouchEnd]": ()=>{
            if (!autoplay) {
                handleEnd();
            }
        }
    }["Compare.useCallback[handleTouchEnd]"], [
        handleEnd,
        autoplay
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Compare.useCallback[handleTouchMove]": (e)=>{
            if (!autoplay) {
                handleMove(e.touches[0].clientX);
            }
        }
    }["Compare.useCallback[handleTouchMove]"], [
        handleMove,
        autoplay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sliderRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full  aspect-[3/4] overflow-hidden mx-auto", className),
        style: {
            position: "relative",
            cursor: slideMode === "drag" ? "grab" : "col-resize"
        },
        onMouseMove: handleMouseMove,
        onMouseLeave: mouseLeaveHandler,
        onMouseEnter: mouseEnterHandler,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full  absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent",
                    style: {
                        left: `${sliderXPercent}%`,
                        top: "0",
                        zIndex: 40
                    },
                    transition: {
                        duration: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/Components/ui/Compare.jsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/Components/ui/Compare.jsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoizedSparklesCore, {
                                background: "transparent",
                                minSize: 0.4,
                                maxSize: 1,
                                particleDensity: 1200,
                                className: "w-full h-full",
                                particleColor: "#FFFFFF"
                            }, void 0, false, {
                                fileName: "[project]/Components/ui/Compare.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Components/ui/Compare.jsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        showHandlebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute   flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDotsVertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDotsVertical$3e$__["IconDotsVertical"], {
                                className: "h-4 w-4 text-black"
                            }, void 0, false, {
                                fileName: "[project]/Components/ui/Compare.jsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Components/ui/Compare.jsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Components/ui/Compare.jsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/ui/Compare.jsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden w-full h-full relative z-20 pointer-events-none",
                children: [
                    'import Image from "next/image"; // ✅ Make sure this import is at the top',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: firstImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden", firstImageClassName),
                            style: {
                                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`
                            },
                            transition: {
                                duration: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                alt: "first image",
                                src: firstImage,
                                fill: true,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full object-cover select-none", firstImageClassName),
                                draggable: false,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/Components/ui/Compare.jsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Components/ui/Compare.jsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/Components/ui/Compare.jsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Components/ui/Compare.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: secondImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none overflow-hidden", secondImageClassname),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        alt: "second image",
                        src: secondImage,
                        fill: true,
                        className: "rounded-2xl object-cover select-none",
                        draggable: false,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Components/ui/Compare.jsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Components/ui/Compare.jsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/Components/ui/Compare.jsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Components/ui/Compare.jsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
};
_s(Compare, "AYWpjX0MNpsp6GMssAtsdYn4kcA=");
_c = Compare;
const MemoizedSparklesCore = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$ui$2f$SparklesCore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesCore"]);
_c1 = MemoizedSparklesCore;
var _c, _c1;
__turbopack_refresh__.register(_c, "Compare");
__turbopack_refresh__.register(_c1, "MemoizedSparklesCore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Components/VideosForPortfolio.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VideosForPortfolio": (()=>VideosForPortfolio),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function VideosForPortfolio() {
    _s();
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [loadedVideos, setLoadedVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleVideoLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideosForPortfolio.useCallback[handleVideoLoad]": (index)=>{
            setLoadedVideos({
                "VideosForPortfolio.useCallback[handleVideoLoad]": (prev)=>({
                        ...prev,
                        [index]: true
                    })
            }["VideosForPortfolio.useCallback[handleVideoLoad]"]);
        }
    }["VideosForPortfolio.useCallback[handleVideoLoad]"], []);
    const handleVideoError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideosForPortfolio.useCallback[handleVideoError]": (index, error)=>{
            setErrors({
                "VideosForPortfolio.useCallback[handleVideoError]": (prev)=>({
                        ...prev,
                        [index]: error
                    })
            }["VideosForPortfolio.useCallback[handleVideoError]"]);
            console.error(`Error loading video ${index}:`, error);
        }
    }["VideosForPortfolio.useCallback[handleVideoError]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideosForPortfolio.useEffect": ()=>{
            const options = {
                root: null,
                rootMargin: "50px",
                threshold: 0.1
            };
            const observer = new IntersectionObserver({
                "VideosForPortfolio.useEffect": (entries)=>{
                    entries.forEach({
                        "VideosForPortfolio.useEffect": (entry)=>{
                            const video = entry.target;
                            if (entry.isIntersecting) {
                                if (!video.src) video.load();
                                video.play().catch({
                                    "VideosForPortfolio.useEffect": ()=>{}
                                }["VideosForPortfolio.useEffect"]);
                            } else {
                                video.pause();
                                video.currentTime = 0;
                            }
                        }
                    }["VideosForPortfolio.useEffect"]);
                }
            }["VideosForPortfolio.useEffect"], options);
            videoRefs.current.forEach({
                "VideosForPortfolio.useEffect": (video)=>{
                    if (video) observer.observe(video);
                }
            }["VideosForPortfolio.useEffect"]);
            return ({
                "VideosForPortfolio.useEffect": ()=>observer.disconnect()
            })["VideosForPortfolio.useEffect"];
        }
    }["VideosForPortfolio.useEffect"], []);
    const videos = [
        {
            src: "./video/4.mp4",
            title: "3D Model",
            desc: "Discover the Hindistan Unilever 3d View",
            poster: "./after.jpg"
        },
        {
            src: "./video/2.mp4",
            title: "HRM"
        },
        {
            src: "./video/3.mp4",
            title: "Product Shoot"
        },
        {
            src: "./video/1.mp4",
            title: "Hazelcorp"
        },
        {
            src: "./video/5.mp4",
            title: "Hindustan Unilever"
        },
        {
            src: "./video/4.mp4",
            title: "3D Work"
        },
        {
            src: "./video/6.mp4",
            title: "Icon Bags"
        },
        {
            src: "./video/7.mp4",
            title: "Miss India"
        },
        {
            src: "./video/8.mp4",
            title: "Nuts&Jars"
        },
        {
            src: "./video/9.mp4",
            title: "SCreation"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-800 text-center lg:text-4xl mb-4",
                    children: "FEATURED VIDEOS"
                }, void 0, false, {
                    fileName: "[project]/Components/VideosForPortfolio.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                    children: videos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: index * 0.1
                            },
                            className: `relative overflow-hidden rounded-2xl shadow-lg group
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`,
                            children: [
                                !loadedVideos[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Components/VideosForPortfolio.jsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: (el)=>videoRefs.current[index] = el,
                                    className: `w-full object-cover ${index === 0 ? "h-full" : "h-48"}`,
                                    loop: true,
                                    muted: true,
                                    playsInline: true,
                                    preload: "auto",
                                    poster: video.poster,
                                    onLoadedData: ()=>handleVideoLoad(index),
                                    onError: (e)=>handleVideoError(index, e),
                                    style: {
                                        filter: "none",
                                        willChange: "contents",
                                        maxHeight: "400px",
                                        backfaceVisibility: "hidden",
                                        transform: "translateZ(0)",
                                        WebkitTransform: "translateZ(0)",
                                        WebkitBackfaceVisibility: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: video.src,
                                            type: "video/mp4",
                                            media: "all"
                                        }, void 0, false, {
                                            fileName: "[project]/Components/VideosForPortfolio.jsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                                            kind: "captions",
                                            src: `/captions/${video.title}.vtt`,
                                            label: "English"
                                        }, void 0, false, {
                                            fileName: "[project]/Components/VideosForPortfolio.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Components/VideosForPortfolio.jsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: errors[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white",
                                            children: "Failed to load video"
                                        }, void 0, false, {
                                            fileName: "[project]/Components/VideosForPortfolio.jsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Components/VideosForPortfolio.jsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Components/VideosForPortfolio.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: false,
                                    whileHover: {
                                        opacity: 1
                                    },
                                    className: "absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${index === 0 ? "text-2xl" : "text-xl"} font-bold text-white`,
                                                children: video.title
                                            }, void 0, false, {
                                                fileName: "[project]/Components/VideosForPortfolio.jsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            video.desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-sm mt-2",
                                                children: video.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Components/VideosForPortfolio.jsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Components/VideosForPortfolio.jsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Components/VideosForPortfolio.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Components/VideosForPortfolio.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Components/VideosForPortfolio.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Components/VideosForPortfolio.jsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Components/VideosForPortfolio.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(VideosForPortfolio, "pDF6jbjVMvjEvtmkg/oat5MOQbo=");
_c = VideosForPortfolio;
const __TURBOPACK__default__export__ = VideosForPortfolio;
var _c;
__turbopack_refresh__.register(_c, "VideosForPortfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/portfolio/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_d786fe._.js.map