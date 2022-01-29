"use strict";
exports.id = 8442;
exports.ids = [8442];
exports.modules = {

/***/ 1051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/form-info.json
const form_info_namespaceObject = JSON.parse('{"TN":"Let\'s Talk.","Do":"Email@example.com","m7":"+4.930.705.5448","xh":{"P":"295 Witting Streets Suite 666,","E":"Melbourne, Australia"}}');
;// CONCATENATED MODULE: ./src/components/Contact-form/contact-form.jsx



const ContactForm = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form md-mb50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "fw-700 color-font mb-50",
                                    children: "Get In Touch."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    id: "contact-form",
                                    method: "post",
                                    action: "contact.php",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "messages"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "controls",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "form_name",
                                                        type: "text",
                                                        name: "name",
                                                        placeholder: "Name",
                                                        required: "required"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "form_email",
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        required: "required"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        id: "form_message",
                                                        name: "message",
                                                        placeholder: "Message",
                                                        rows: "4",
                                                        required: "required"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    className: "butn bord",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Send Message"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 offset-lg-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont-info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "fw-700 color-font mb-50",
                                    children: "Contact Info."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow",
                                    "data-splitting": true,
                                    children: form_info_namespaceObject.TN
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item mb-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                children: form_info_namespaceObject.Do
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: form_info_namespaceObject.m7
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow",
                                    "data-splitting": true,
                                    children: "Visit Us."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                        children: [
                                            form_info_namespaceObject.xh.P,
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            form_info_namespaceObject.xh.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social mt-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const contact_form = (ContactForm);


/***/ }),

/***/ 8495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/config/particle-config.js
var particle_config = __webpack_require__(6362);
// EXTERNAL MODULE: ./src/config/pr-s-black.js
var pr_s_black = __webpack_require__(9764);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
;// CONCATENATED MODULE: ./src/data/sections/contact-header.json
const contact_header_namespaceObject = JSON.parse('{"T":{"P":"Let\'s talk","E":"about your project."},"k":"Feel free to ask me any question or let’s do to talk about our future collaboration."}');
;// CONCATENATED MODULE: ./src/components/Contact-header/contact-header.jsx






const ContactHeader = ({ sliderRef , blackStar  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        ref: sliderRef,
        className: "pages-header circle-bg valign position-re",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-9 col-md-11",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "capt",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "color-font mb-10 fw-700",
                                        children: [
                                            contact_header_namespaceObject.T.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            contact_header_namespaceObject.T.E
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: contact_header_namespaceObject.k
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
                id: "particles-js",
                options: blackStar ? pr_s_black/* default */.Z : particle_config/* default */.Z
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "circle-color",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gradient-circle"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gradient-circle two"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const contact_header = (ContactHeader);


/***/ })

};
;