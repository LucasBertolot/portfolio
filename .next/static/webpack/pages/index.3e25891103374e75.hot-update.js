"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst skills = [\n    {\n        name: \"JavaScript\",\n        level: 4\n    },\n    {\n        name: \"React\",\n        level: 5\n    },\n    {\n        name: \"Node.js\",\n        level: 3\n    },\n    {\n        name: \"HTML/CSS\",\n        level: 4\n    },\n    {\n        name: \"C#\",\n        level: 3\n    },\n    {\n        name: \"Bootstrap\",\n        level: 4\n    }\n];\nconst Skill = (param)=>{\n    let { name , level  } = param;\n    _s();\n    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();\n    const renderStars = ()=>{\n        const stars = [];\n        for(let i = 1; i <= 5; i++){\n            const starColor = i <= level ? \"yellow.300\" : \"gray.300\";\n            stars.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {\n                boxSize: 4,\n                color: colorMode === \"light\" ? starColor : \"white\",\n                mr: 1\n            }, i, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined));\n        }\n        return stars;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                m: 1,\n                px: 3,\n                py: 1,\n                bg: colorMode === \"light\" ? \"blue.500\" : \"blue.200\",\n                color: colorMode === \"light\" ? \"white\" : \"blue.800\",\n                borderRadius: \"md\",\n                boxShadow: colorMode === \"light\" ? \"md\" : \"none\",\n                fontWeight: \"bold\",\n                _hover: {\n                    bg: colorMode === \"light\" ? \"blue.600\" : \"blue.300\"\n                },\n                display: \"inline-block\",\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"inline-block\",\n                ml: 2,\n                children: renderStars()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Skill, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode\n    ];\n});\n_c = Skill;\nconst Home = ()=>{\n    _s1();\n    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxW: \"container.md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            direction: {\n                base: \"column\",\n                md: \"row\"\n            },\n            justifyContent: {\n                base: \"center\",\n                md: \"space-between\"\n            },\n            alignItems: {\n                md: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    textAlign: \"center\",\n                    flex: 1,\n                    mr: {\n                        md: 10\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                            as: \"h2\",\n                            size: \"lg\",\n                            mb: 4,\n                            children: \"About Me\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        \"I am an internet enthusiast who has always enjoyed spending time online. Over the years, I have decided to pursue a career in this field and have developed skills as a front-end developer. I am passionate about creating engaging and dynamic web experiences, and I am always striving to stay up-to-date with the latest technologies and trends. I am excited to continue growing in this field and contribute to innovative projects.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    textAlign: \"left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                            as: \"h3\",\n                            size: \"lg\",\n                            mb: 4,\n                            children: \"Skills\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            children: skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                                    name: skill.name,\n                                    level: skill.level\n                                }, skill.name, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\codes\\\\javascript\\\\portfolio\\\\pages\\\\index.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Home, \"2Uu86IH3do63pkN3s1ysdRMmJuc=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode\n    ];\n});\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIHVzZUNvbG9yTW9kZSwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5cclxuY29uc3Qgc2tpbGxzID0gW1xyXG4gIHsgbmFtZTogJ0phdmFTY3JpcHQnLCBsZXZlbDogNCB9LFxyXG4gIHsgbmFtZTogJ1JlYWN0JywgbGV2ZWw6IDUgfSxcclxuICB7IG5hbWU6ICdOb2RlLmpzJywgbGV2ZWw6IDMgfSxcclxuICB7IG5hbWU6ICdIVE1ML0NTUycsIGxldmVsOiA0IH0sXHJcbiAgeyBuYW1lOiAnQyMnLCBsZXZlbDogMyB9LFxyXG4gIHsgbmFtZTogJ0Jvb3RzdHJhcCcsIGxldmVsOiA0IH1cclxuXTtcclxuXHJcbmNvbnN0IFNraWxsID0gKHsgbmFtZSwgbGV2ZWwgfSkgPT4ge1xyXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU3RhcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFycyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICBjb25zdCBzdGFyQ29sb3IgPSBpIDw9IGxldmVsID8gJ3llbGxvdy4zMDAnIDogJ2dyYXkuMzAwJztcclxuXHJcbiAgICAgIHN0YXJzLnB1c2goXHJcbiAgICAgICAgPFN0YXJJY29uXHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBib3hTaXplPXs0fVxyXG4gICAgICAgICAgY29sb3I9e2NvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/IHN0YXJDb2xvciA6ICd3aGl0ZSd9XHJcbiAgICAgICAgICBtcj17MX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGFycztcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFRleHRcclxuICAgICAgICBtPXsxfVxyXG4gICAgICAgIHB4PXszfVxyXG4gICAgICAgIHB5PXsxfVxyXG4gICAgICAgIGJnPXtjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnYmx1ZS41MDAnIDogJ2JsdWUuMjAwJ31cclxuICAgICAgICBjb2xvcj17Y29sb3JNb2RlID09PSAnbGlnaHQnID8gJ3doaXRlJyA6ICdibHVlLjgwMCd9XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxyXG4gICAgICAgIGJveFNoYWRvdz17Y29sb3JNb2RlID09PSAnbGlnaHQnID8gJ21kJyA6ICdub25lJ31cclxuICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgX2hvdmVyPXt7IGJnOiBjb2xvck1vZGUgPT09ICdsaWdodCcgPyAnYmx1ZS42MDAnIDogJ2JsdWUuMzAwJyB9fVxyXG4gICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICA+XHJcbiAgICAgICAge25hbWV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPEJveCBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIgbWw9ezJ9PlxyXG4gICAgICAgIHtyZW5kZXJTdGFycygpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5tZFwiPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogJ2NlbnRlcicsIG1kOiAnc3BhY2UtYmV0d2VlbicgfX1cclxuICAgICAgICBhbGlnbkl0ZW1zPXt7IG1kOiAnY2VudGVyJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBmbGV4PXsxfSBtcj17eyBtZDogMTAgfX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCIgbWI9ezR9PlxyXG4gICAgICAgICAgICBBYm91dCBNZVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIEkgYW0gYW4gaW50ZXJuZXQgZW50aHVzaWFzdCB3aG8gaGFzIGFsd2F5cyBlbmpveWVkIHNwZW5kaW5nIHRpbWUgb25saW5lLiBPdmVyIHRoZSB5ZWFycywgSSBoYXZlIGRlY2lkZWRcclxuICAgICAgICAgICAgICB0byBwdXJzdWUgYSBjYXJlZXIgaW4gdGhpcyBmaWVsZCBhbmQgaGF2ZSBkZXZlbG9wZWQgc2tpbGxzIGFzIGEgZnJvbnQtZW5kIGRldmVsb3Blci4gSSBhbSBwYXNzaW9uYXRlXHJcbiAgICAgICAgICAgICAgYWJvdXQgY3JlYXRpbmcgZW5nYWdpbmcgYW5kIGR5bmFtaWMgd2ViIGV4cGVyaWVuY2VzLCBhbmQgSSBhbSBhbHdheXMgc3RyaXZpbmcgdG8gc3RheSB1cC10by1kYXRlIHdpdGhcclxuICAgICAgICAgICAgICB0aGUgbGF0ZXN0IHRlY2hub2xvZ2llcyBhbmQgdHJlbmRzLiBJIGFtIGV4Y2l0ZWQgdG8gY29udGludWUgZ3Jvd2luZyBpbiB0aGlzIGZpZWxkIGFuZCBjb250cmlidXRlIHRvXHJcbiAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSBwcm9qZWN0cy5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibGdcIiBtYj17NH0+XHJcbiAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAge3NraWxscy5tYXAoKHNraWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNraWxsIGtleT17c2tpbGwubmFtZX0gbmFtZT17c2tpbGwubmFtZX0gbGV2ZWw9e3NraWxsLmxldmVsfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiQm94IiwiSGVhZGluZyIsIlRleHQiLCJ1c2VDb2xvck1vZGUiLCJGbGV4IiwiU3Rhckljb24iLCJza2lsbHMiLCJuYW1lIiwibGV2ZWwiLCJTa2lsbCIsImNvbG9yTW9kZSIsInJlbmRlclN0YXJzIiwic3RhcnMiLCJpIiwic3RhckNvbG9yIiwicHVzaCIsImJveFNpemUiLCJjb2xvciIsIm1yIiwibSIsInB4IiwicHkiLCJiZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZvbnRXZWlnaHQiLCJfaG92ZXIiLCJkaXNwbGF5IiwibWwiLCJIb21lIiwibWF4VyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImZsZXgiLCJhcyIsInNpemUiLCJtYiIsIm1hcCIsInNraWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});