module.exports = [
"[project]/src/app/grupos/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GruposPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function GruposPage() {
    // Estructura de datos para los grupos
    const grupos = [
        {
            nombre: "Grupo A",
            equipos: [
                {
                    nombre: "México",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/mexico.png"
                },
                {
                    nombre: "Sudáfrica",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/sudafrica.png"
                },
                {
                    nombre: "Corea del Sur",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/corea-del-sur.png"
                },
                {
                    nombre: "Playoff UEFA D",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uefa.png"
                }
            ]
        },
        {
            nombre: "Grupo B",
            equipos: [
                {
                    nombre: "Canadá",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/canada.png"
                },
                {
                    nombre: "Qatar",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/qatar.png"
                },
                {
                    nombre: "Suiza",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/suiza.png"
                },
                {
                    nombre: "Playoff UEFA A",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uefa.png"
                }
            ]
        },
        {
            nombre: "Grupo C",
            equipos: [
                {
                    nombre: "Brasil",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/brasil.png"
                },
                {
                    nombre: "Marruecos",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/marruecos.png"
                },
                {
                    nombre: "Haití",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/haiti.png"
                },
                {
                    nombre: "Escocia",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/escocia.png"
                }
            ]
        },
        {
            nombre: "Grupo D",
            equipos: [
                {
                    nombre: "Estados Unidos",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/usa.png"
                },
                {
                    nombre: "Paraguay",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/paraguay.png"
                },
                {
                    nombre: "Australia",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/australia.png"
                },
                {
                    nombre: "Playoff UEFA C",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uefa.png"
                }
            ]
        },
        {
            nombre: "Grupo E",
            equipos: [
                {
                    nombre: "Alemania",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/alemania.png"
                },
                {
                    nombre: "Costa de Marfil",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/costa-de-marfil.png"
                },
                {
                    nombre: "Ecuador",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/ecuador.png"
                },
                {
                    nombre: "Curazao",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/curazao.png"
                }
            ]
        },
        {
            nombre: "Grupo F",
            equipos: [
                {
                    nombre: "Países Bajos",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/paises-bajos.png"
                },
                {
                    nombre: "Japón",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/japon.png"
                },
                {
                    nombre: "Túnez",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/tunez.png"
                },
                {
                    nombre: "Playoff UEFA B",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uefa.png"
                }
            ]
        },
        {
            nombre: "Grupo G",
            equipos: [
                {
                    nombre: "Bélgica",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/belgica.png"
                },
                {
                    nombre: "Egipto",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/egipto.png"
                },
                {
                    nombre: "Irán",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/iran.png"
                },
                {
                    nombre: "Nueva Zelanda",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/nueva-zelanda.png"
                }
            ]
        },
        {
            nombre: "Grupo H",
            equipos: [
                {
                    nombre: "España",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/espana.png"
                },
                {
                    nombre: "Cabo Verde",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/cabo-verde.png"
                },
                {
                    nombre: "Arabia Saudita",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/arabia-saudita.png"
                },
                {
                    nombre: "Uruguay",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uruguay.png"
                }
            ]
        },
        {
            nombre: "Grupo I",
            equipos: [
                {
                    nombre: "Francia",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/francia.png"
                },
                {
                    nombre: "Senegal",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/senegal.png"
                },
                {
                    nombre: "Noruega",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/noruega.png"
                },
                {
                    nombre: "Playoff 2",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uefa.png"
                }
            ]
        },
        {
            nombre: "Grupo J",
            equipos: [
                {
                    nombre: "Argentina",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/argentina.png"
                },
                {
                    nombre: "Argelia",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/argelia.png"
                },
                {
                    nombre: "Austria",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/austria.png"
                },
                {
                    nombre: "Jordania",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/jordania.png"
                }
            ]
        },
        {
            nombre: "Grupo K",
            equipos: [
                {
                    nombre: "Portugal",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/portugal.png"
                },
                {
                    nombre: "Uzbekistán",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uzbekistan.png"
                },
                {
                    nombre: "Colombia",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/colombia.png"
                },
                {
                    nombre: "Playoff 1",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/uefa.png"
                }
            ]
        },
        {
            nombre: "Grupo L",
            equipos: [
                {
                    nombre: "Inglaterra",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/inglaterra.png"
                },
                {
                    nombre: "Croacia",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/croacia.png"
                },
                {
                    nombre: "Ghana",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/ghana.png"
                },
                {
                    nombre: "Panamá",
                    pj: 0,
                    dg: 0,
                    pts: 0,
                    bandera: "/images/banderas/panama.png"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#f0f2f5] pt-24 pb-12 px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/grupos/page.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-10 ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black uppercase italic tracking-tighter leading-none",
                                children: [
                                    "Fase de ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/grupos/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 130
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: "Grupos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/grupos/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 137
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/grupos/page.tsx",
                                lineNumber: 123,
                                columnNumber: 75
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4 italic",
                                children: "Clasifican los dos mejores de cada grupo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/grupos/page.tsx",
                                lineNumber: 126,
                                columnNumber: 200
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/grupos/page.tsx",
                        lineNumber: 122,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: grupos.map((grupo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "island-card overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-black uppercase italic tracking-tighter text-lg",
                                            children: grupo.nombre
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/grupos/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 638
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/grupos/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 575
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "text-[8px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left pb-2",
                                                                children: "Selección"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/grupos/page.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 1237
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "PJ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/grupos/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 1324
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2",
                                                                children: "DG"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/grupos/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 1411
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "pb-2 text-blue-600",
                                                                children: "PTS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/grupos/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 1498
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/grupos/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 1150
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/grupos/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 1071
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-gray-50",
                                                    children: grupo.equipos.map((equipo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-black italic ${index < 2 ? 'text-blue-600' : 'text-gray-300'}`,
                                                                            children: index + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/grupos/page.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 2083
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: equipo.bandera,
                                                                            alt: equipo.nombre,
                                                                            className: "w-6 h-4 object-cover rounded-sm shadow-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/grupos/page.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 2400
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] font-black uppercase tracking-tighter text-black",
                                                                            children: equipo.nombre
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/grupos/page.tsx",
                                                                            lineNumber: 163,
                                                                            columnNumber: 2503
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/grupos/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 1980
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 text-center text-[10px] font-bold text-gray-500",
                                                                    children: equipo.pj
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/grupos/page.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 2907
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 text-center text-[10px] font-bold text-gray-500",
                                                                    children: equipo.dg
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/grupos/page.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 3002
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3 text-center text-[11px] font-black text-black",
                                                                    children: equipo.pts
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/grupos/page.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 3097
                                                                }, this)
                                                            ]
                                                        }, equipo.nombre, true, {
                                                            fileName: "[project]/src/app/grupos/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 1885
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/grupos/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 1719
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/grupos/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 1000
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/grupos/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 937
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 p-3 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-[8px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors",
                                            children: "Ver Fixture Completo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/grupos/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 3625
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/grupos/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 3562
                                    }, this)
                                ]
                            }, grupo.nombre, true, {
                                fileName: "[project]/src/app/grupos/page.tsx",
                                lineNumber: 135,
                                columnNumber: 465
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/grupos/page.tsx",
                        lineNumber: 133,
                        columnNumber: 379
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/grupos/page.tsx",
                lineNumber: 121,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/grupos/page.tsx",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_grupos_page_tsx_44e277ab._.js.map