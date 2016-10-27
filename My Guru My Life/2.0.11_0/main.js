//Swami Bapa
! function a(e, t, n) {
    function r(o, h) {
        if (!t[o]) {
            if (!e[o]) {
                var u = "function" == typeof require && require;
                if (!h && u) return u(o, !0);
                if (i) return i(o, !0);
                var s = new Error("Cannot find module '" + o + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            var c = t[o] = {
                exports: {}
            };
            e[o][0].call(c.exports, function(a) {
                var t = e[o][1][a];
                return r(t ? t : a)
            }, c, c.exports, a, e, t, n)
        }
        return t[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
    return r
}({
    1: [function(a, e) {
        "use strict";
        var t = a("./utils/Actions"),
            n = a("./Clock.react"),
            r = (a("./utils/Constants"), a("./stores/DataStore"), a("./Menu.react")),
            i = a("./Page.react"),
            o = a("./Quote.react"),
            h = a("react"),
            u = (a("./Todo.react"), a("./stores/TodoStore"), a("./utils/cx"), h.createClass({
                displayName: "App",
                render: function() {
                    return t.initialize(), h.createElement("div", null, h.createElement(i, null), h.createElement(n, null), h.createElement(o, null), h.createElement(r, null))
                }
            }));
        e.exports = u
    }, {
        "./Clock.react": 2,
        "./Menu.react": 3,
        "./Page.react": 5,
        "./Quote.react": 6,
        "./Todo.react": 7,
        "./stores/DataStore": 10,
        "./stores/TodoStore": 11,
        "./utils/Actions": 12,
        "./utils/Constants": 14,
        "./utils/cx": 22,
        react: "react"
    }],
    2: [function(a, e) {
        "use strict";
        var t = a("./utils/Constants"),
            n = a("./stores/DataStore"),
            r = a("react"),
            i = a("./utils/StoreListenerMixin"),
            o = a("./utils/cx"),
            h = t.ClockTypes,
            u = r.createClass({
                displayName: "Clock",
                mixins: [i],
                getInitialState: function() {
                    return {
                        date: new Date,
                        clockType: n.getState().clockType
                    }
                },
                componentDidMount: function() {
                    this.timer = setInterval(this._updateState, 5e3)
                },
                componentWillUnmount: function() {
                    clearInterval(this.timer)
                },
                render: function() {
                    return r.createElement("div", {
                        className: o("clock", "text")
                    }, r.createElement("div", {
                        className: o("date")
                    }, this.state.date.toDateString()), r.createElement("div", {
                        className: o("time")
                    }, this._formatTime()))
                },
                _updateState: function() {
                    this.setState({
                        date: new Date
                    })
                },
                _formatTime: function() {
                    var a = this.state.date.getMinutes(),
                        e = this.state.date.getHours();
                    return this.state.clockType == h.TWELVE && (e = (e + 11) % 12 + 1), 10 > e && (e = "0" + e), 10 > a && (a = "0" + a), e + ":" + a
                },
                _listen: function() {
                    return [n]
                },
                _onChange: function() {
                    this.setState({
                        clockType: n.getState().clockType
                    })
                }
            });
        e.exports = u
    }, {
        "./stores/DataStore": 10,
        "./utils/Constants": 14,
        "./utils/StoreListenerMixin": 20,
        "./utils/cx": 22,
        react: "react"
    }],
    3: [function(a, e) {
        "use strict";
        var t = a("./utils/Actions"),
            n = a("./utils/Constants"),
            r = a("./stores/DataStore"),
            i = a("./MenuItem.react"),
            o = a("react"),
            h = a("./utils/StoreListenerMixin"),
            u = a("./utils/cx"),
            s = n.Icons,
            c = n.Colors,
            m = n.ContentTypes,
            l = n.ClockTypes,
            v = n.PageTypes,
            p = o.createClass({
                displayName: "Menu",
                mixins: [h],
                getInitialState: function() {
                    var a = r.getState();
                    return {
                        selectedContentType: a.contentType,
                        clockType: a.clockType,
                        pageType: a.pageType
                    }
                },
                render: function() {
                    return o.createElement("div", {
                        className: u("menu")
                    }, o.createElement(i, {
                        title: "Clock",
                        icon: s.CLOCK,
                        bgColor: c.BELIZE_HOLE,
                        openMenu: !0,
                        menuItems: [
                            [!0, l.TWELVE],
                            [!0, l.TWENTY_FOUR]
                        ],
                        selectedItem: this.state.clockType,
                        onMenuItemSelect: this._onChageClock
                    }), o.createElement(i, {
                        title: "Backdrop",
                        icon: s.IMAGE,
                        bgColor: c.WISTERIA,
                        openMenu: !0,
                        menuItems: [
                            [!0, v.GURUHARI],
                            [!1, v.GURUPARAMPARA],
                            [!1, v.MANDIRS]
                        ],
                        selectedItem: this.state.pageType,
                        onMenuItemSelect: this._onChagePage
                    }), o.createElement(i, {
                        title: "Image",
                        icon: s.IMAGES,
                        bgColor: c.POMEGRANATE,
                        openMenu: !0,
                        menuItems: [
                            [!0, m.NEXT],
                            [!0, m.PREV],
                            [!0, m.RESET]
                        ],
                        onMenuItemSelect: this._onChagePageImage
                                        }), o.createElement(i, {
                        title: "Bookmarks",
                        icon: s.BOOKMARKS,
                        bgColor: c.ORANGE,
                        openMenu: !0,
                        menuItems: [
                            [!0, m.BAPS],
                            [!0, m.BAPSATL],
                            [!0, m.YOUTUBE],
                            [!0, m.YAHOO],
                            [!0, m.LIFEHACKER],
                            [!0, m.NBA],
                            [!0, m.NFL],
                            [!0, m.REDDIT],
                            [!0, m.GMAIL],
                            [!0, m.FACEBOOK]
                        ],
                        onMenuItemSelect: this._onChageBookmarkClick
                    }), o.createElement(i, {
                        title: "Adhiveshan",
                        icon: s.BOOK,
                        bgColor: c.NEPHRITIS,
                        openMenu: !0,
                        menuItems: [
                            [!0, m.DEFAULT],
                            [!0, m.SHLOKAS],
                            [!0, m.SAKHIS],
                            [!0, m.KIRTANS],
                            [!0, m.SWAMINI_VATO],
                            [!1, m.VACHNAMRUT]
                        ],
                        selectedItem: this.state.selectedContentType,
                        onMenuItemSelect: this._onChageContent
                    }))
                },
                _onSettingsClick: function() {
                    return !1
                },
                _onChageBookmarkClick: function(a) {
                    switch (a) {
                        case m.BAPSATL:
                            window.location = "http://www.baps.org/Global-Network/North-America/Atlanta/Daily-Darshan.aspx";
                            break;
                        case m.BAPS:
                            window.location = "http://www.baps.org";
                            break;
                        case m.GMAIL:
                            window.location = "http://www.gmail.com";
                            break;
                        case m.FACEBOOK:
                            window.location = "http://www.facebook.com";
                            break;
                        case m.YOUTUBE:
                            window.location = "http://www.youtube.com";
                            break
                        case m.NBA:
                            window.location = "http://www.nba.com";
                            break;
                        case m.NFL:
                            window.location = "http://www.nfl.com";
                            break;
                        case m.LIFEHACKER:
                            window.location = "http://www.lifehacker.com"
                            break
                        case m.REDDIT:
                            window.location = "http://www.reddit.com";
                            break;
                        case m.YAHOO:
                            window.location = "http://www.yahoo.com"
                    }
                },
                _onChageContent: function(a) {
                    t.setContentType(a)
                },
                _onChageClock: function(a) {
                    t.setClockType(a)
                },
                _onChagePage: function(a) {
                    t.setPageType(a)
                },
                _onChagePageImage: function(a) {
                    switch (a) {
                        case m.NEXT:
                            t.nextImage();
                            break;
                        case m.PREV:
                            t.prevImage();
                            break;
                        case m.RESET:
                            t.resetImage()
                    }
                },
                _listen: function() {
                    return [r]
                },
                _onChange: function() {
                    var a = r.getState();
                    this.setState({
                        selectedContentType: a.contentType,
                        clockType: a.clockType,
                        pageType: a.pageType
                    })
                }
            });
        e.exports = p
    }, {
        "./MenuItem.react": 4,
        "./stores/DataStore": 10,
        "./utils/Actions": 12,
        "./utils/Constants": 14,
        "./utils/StoreListenerMixin": 20,
        "./utils/cx": 22,
        react: "react"
    }],
    4: [function(a, e) {
        "use strict";
        var t = (a("./utils/Actions"), a("./utils/Constants")),
            n = a("react"),
            r = n.PropTypes,
            i = a("./utils/cx"),
            o = t.Colors,
            h = n.createClass({
                displayName: "MenuItem",
                props: {
                    onClick: r.func,
                    openMenu: r.bool,
                    menuItems: r.array,
                    selectedItem: r.string,
                    onMenuItemSelect: r.func,
                    title: r.string.isRequired,
                    icon: r.string.isRequired,
                    bgColor: r.string
                },
                getDefaultProps: function() {
                    return {
                        openMenu: !1,
                        menuItems: [],
                        selectedItem: null,
                        onMenuItemSelect: function() {},
                        bgColor: o.TURQUOISE
                    }
                },
                getInitialState: function() {
                    return {
                        isMenuOpen: !1
                    }
                },
                render: function() {
                    var a = this,
                        e = {};
                    return this.props.openMenu && this.props.menuItems.forEach(function(t) {
                        e[t[1]] = n.createElement("div", {
                            key: t[1],
                            className: i({
                                menu_item_list_item: !0,
                                menu_item_list_item_selected: t[0] && a.props.selectedItem && t[1] == a.props.selectedItem,
                                menu_item_list_item_disabled: !t[0]
                            }),
                            onClick: function() {
                                t[0] && a.props.onMenuItemSelect(t[1])
                            }
                        }, t[1].replace(/\w\S*/g, function(a) {
                            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
                        }))
                    }), n.createElement("div", {
                        style: {
                            "float": "left",
                            backgroundColor: this.props.bgColor,
                            height: this.props.openMenu && this.state.isMenuOpen ? 24 * this.props.menuItems.length + 40 : "100%"
                        },
                        className: i("menu_item"),
                        onClick: this._onClick,
                        onMouseOver: this._onHover,
                        onMouseOut: this._onNormal
                    }, n.createElement("div", {
                        className: i("menu_item_icon", "icon", this.props.icon)
                    }), n.createElement("div", {
                        className: i("menu_item_text")
                    }, this.props.title), n.createElement("div", {
                        className: i({
                            menu_item_list: !0,
                            menu_item_list_open: this.props.openMenu && this.state.isMenuOpen
                        })
                    }, e))
                },
                _onHover: function() {
                    this.setState({
                        isMenuOpen: !0
                    })
                },
                _onNormal: function() {
                    this.setState({
                        isMenuOpen: !1
                    })
                },
                _onClick: function() {
                    this.props.onClick && this.props.onClick()
                }
            });
        e.exports = h
    }, {
        "./utils/Actions": 12,
        "./utils/Constants": 14,
        "./utils/cx": 22,
        react: "react"
    }],
    5: [function(a, e) {
        "use strict";
        var t = a("./utils/Constants"),
            n = a("./stores/DataStore"),
            r = a("react"),
            i = a("./utils/StoreListenerMixin"),
            o = a("./utils/cx"),
            h = (t.PageTypes, r.createClass({
                displayName: "Page",
                mixins: [i],
                getInitialState: function() {
                    var a = n.getState();
                    return {
                        date: a.date,
                        imageDir: a.imageDir,
                        pageType: a.pageType
                    }
                },
                render: function() {
                    return r.createElement("div", {
                        onScroll: function() {
                            return !1
                        },
                        className: o("page"),
                        style: {
                            backgroundImage: "url(" + this.state.imageDir + ")"
                        }
                    })
                },
                _listen: function() {
                    return [n]
                },
                _onChange: function() {
                    var a = n.getState();
                    this.setState({
                        date: a.date,
                        imageDir: a.imageDir,
                        pageType: a.pageType
                    })
                }
            }));
        e.exports = h
    }, {
        "./stores/DataStore": 10,
        "./utils/Constants": 14,
        "./utils/StoreListenerMixin": 20,
        "./utils/cx": 22,
        react: "react"
    }],
    6: [function(a, e) {
        "use strict";
        var t = a("./utils/Constants"),
            n = a("./stores/DataStore"),
            r = a("react"),
            i = (r.PropTypes, a("./utils/StoreListenerMixin")),
            o = a("./utils/cx"),
            h = t.ContentTypes,
            u = t.QuoteTypes,
            s = r.createClass({
                displayName: "Quote",
                mixins: [i],
                getInitialState: function() {
                    var a = n.getState();
                    return {
                        quote: a.quote,
                        contentType: a.contentType
                    }
                },
                render: function() {
                    return r.createElement("div", {
                        className: o("quote", "text")
                    }, r.createElement("div", {
                        className: o("quote_text")
                    }, this._renderQuote(this.state.quote[0], this.state.contentType)), r.createElement("div", {
                        className: o("quote_reference")
                    }, this.state.quote[1]))
                },
                _renderQuote: function(a, e) {
                    switch (e) {
                        case h.SAKHIS:
                        case h.SHLOKAS:
                            var t = {};
                            return a.forEach(function(a, e) {
                                t[e] = r.createElement("span", {
                                    key: "lyric_" + e
                                }, a)
                            }), r.createElement("div", {
                                className: o("content_shloka")
                            }, t);
                        case h.KIRTANS:
                            var t = a[u.STANZA],
                                n = {};
                            t.forEach(function(a, e) {
                                n[e] = r.createElement("span", {
                                    key: "lyric_" + e
                                }, a)
                            });
                            var i = a[u.LINK] ? r.createElement("div", {
                                className: o("btn"),
                                onClick: this._onBtnClick
                            }, "AUDIO") : null;
                            return r.createElement("div", {
                                className: o("content_stanza")
                            }, n, i);
                        case h.DEFAULT:
                        default:
                            return r.createElement("div", {
                                className: o("content_default")
                            }, '"' + a + '"')
                    }
                },
                _listen: function() {
                    return [n]
                },
                _onChange: function() {
                    var a = n.getState();
                    this.setState({
                        quote: a.quote,
                        contentType: a.contentType
                    })
                },
                _onBtnClick: function() {
                    window.open(this.state.quote[0][u.LINK], "_blank")
                }
            });
        e.exports = s
    }, {
        "./stores/DataStore": 10,
        "./utils/Constants": 14,
        "./utils/StoreListenerMixin": 20,
        "./utils/cx": 22,
        react: "react"
    }],
    7: [function(a, e) {
        "use strict";
        var t = a("react"),
            n = a("./utils/cx"),
            r = t.createClass({
                displayName: "Todo",
                render: function() {
                    return t.createElement("div", {
                        className: n("todo", "text")
                    }, "TODO")
                }
            });
        e.exports = r
    }, {
        "./utils/cx": 22,
        react: "react"
    }],
    8: [function(a) {
        "use strict";
        var e = a("react"),
            t = a("./App.react");
        e.render(e.createElement(t, null), document.getElementById("root"))
    }, {
        "./App.react": 1,
        react: "react"
    }],
    9: [function(a, e) {
        "use strict";
        var t, n = a("../utils/AppDispatcher"),
            r = a("../utils/Constants"),
            i = a("events").EventEmitter,
            o = r.CHANGE_EVENT,
            h = function(a) {
                t = n.register(a)
            };
        $traceurRuntime.createClass(h, {
            getDispatchIndex: function() {
                return t
            },
            emitChange: function() {
                this.emit(o)
            },
            addChangeListener: function(a) {
                this.on(o, a)
            },
            removeChangeListener: function(a) {
                this.removeListener(o, a)
            }
        }, {}, i), e.exports = h
    }, {
        "../utils/AppDispatcher": 13,
        "../utils/Constants": 14,
        events: 23
    }],
    10: [function(a, e) {
        "use strict";
        var t = a("./BaseStore"),
            n = a("../utils/Constants"),
            r = a("../utils/Quotes"),
            i = a("../utils/Kirtans"),
            o = a("../utils/Shlokas"),
            h = a("../utils/Sakhis"),
            u = a("../utils/SwamiNiVato"),
            s = n.ActionTypes,
            c = n.ClockTypes,
            m = n.ContentTypes,
            l = n.LocalStore,
            v = n.PageTypes,
            p = n.QuoteTypes,
            d = new Date,
            y = m.DEFAULT,
            E = c.TWELVE,
            f = d.getDate(),
            g = v.GURUHARI,
            k = function() {
                var a = this;
                $traceurRuntime.superConstructor(b).call(this, function(e) {
                    switch (e.type) {
                        case s.INIT_LOAD:
                            a._localStoreGet([l.CONTENT_TYPE, l.TIME_FORMAT, l.PAGE_TYPE], function(e) {
                                y = e[l.CONTENT_TYPE] ? e[l.CONTENT_TYPE] : m.DEFAULT, E = e[l.TIME_FORMAT] ? e[l.TIME_FORMAT] : c.TWELVE, g = e[l.PAGE_TYPE] ? e[l.PAGE_TYPE] : v.GURUHARI, a.emitChange()
                            });
                            break;
                        case s.SET_PAGE_TYPE:
                            if (g != e.page) {
                                g = e.page;
                                var t = {};
                                t[l.PAGE_TYPE] = g, a._localStoreSet(t, function() {
                                    return a.emitChange()
                                })
                            }
                            break;
                        case s.SET_CONTENT_TYPE:
                            if (y != e.content) {
                                y = e.content;
                                var t = {};
                                t[l.CONTENT_TYPE] = y, a._localStoreSet(t, function() {
                                    return a.emitChange()
                                })
                            }
                            break;
                        case s.SET_CLOCK_TYPE:
                            if (E != e.clock) {
                                E = e.clock;
                                var t = {};
                                t[l.TIME_FORMAT] = E, a._localStoreSet(t, function() {
                                    return a.emitChange()
                                })
                            }
                            break;
                        case s.NEXT_IMAGE:
                            f += 1, f > 31 && (f = 1), f %= 32, a.emitChange();
                            break;
                        case s.PREV_IMAGE:
                            f -= 1, 0 >= f && (f = 31), f %= 32, a.emitChange();
                            break;
                        case s.RESET_IMAGE:
                            f = d.getDate(), a.emitChange()
                    }
                    return !0
                })
            },
            b = k;
        $traceurRuntime.createClass(k, {
            getState: function() {
                return {
                    quote: this._getContent(),
                    date: d.getDate(),
                    clockType: E,
                    contentType: y,
                    imageDir: "./images/" + g.toLowerCase() + "/" + f + ".jpg",
                    pageType: g
                }
            },
            _getContent: function() {
                var a = d.getDate();
                switch (y) {
                    case m.KIRTANS:
                        var e = i[a],
                            t = e.KIRTAN,
                            n = [];
                        return n[p.MEMORIZE] = e[p.MEMORIZE], n[p.STANZA] = t[Math.floor(Math.random() * t.length)], n[p.LINK] = e[p.LINK] ? e[p.LINK] : null, [n, e[p.TITLE]];
                    case m.SHLOKAS:
                        return [o[a][p.SHLOKA], o[a][p.REFERENCE]];
                    case m.SAKHIS:
                        return [h[a][p.SAKHI], h[a][p.REFERENCE]];
                    case m.SWAMINI_VATO:
                        return [u[a][p.VATO], u[a][p.REFERENCE]];
                    case m.DEFAULT:
                    default:
                        return [r[a][p.QUOTE], r[a][p.REFERENCE]]
                }
            },
            _localStoreGet: function(a, e) {
                chrome.storage ? chrome.storage.sync.get(a, function(a) {
                    e(a)
                }) : e(!1)
            },
            _localStoreSet: function(a, e) {
                chrome.storage ? chrome.storage.sync.set(a, e) : e(!1)
            }
        }, {}, t);
        var j = new k;
        e.exports = j
    }, {
        "../utils/Constants": 14,
        "../utils/Kirtans": 16,
        "../utils/Quotes": 17,
        "../utils/Sakhis": 18,
        "../utils/Shlokas": 19,
        "../utils/SwamiNiVato": 21,
        "./BaseStore": 9
    }],
    11: [function(a, e) {
        "use strict";
        var t = a("./BaseStore"),
            n = a("../utils/Constants"),
            r = n.ActionTypes,
            i = function() {
                var a = this;
                $traceurRuntime.superConstructor(o).call(this, function(e) {
                    switch (e.type) {
                        case r.INIT_LOAD:
                            a.emitChange()
                    }
                    return !0
                })
            },
            o = i;
        $traceurRuntime.createClass(i, {
            getState: function() {
                return {}
            }
        }, {}, t);
        var h = new i;
        e.exports = h
    }, {
        "../utils/Constants": 14,
        "./BaseStore": 9
    }],
    12: [function(a, e) {
        "use strict";
        var t = a("./AppDispatcher"),
            n = a("./Constants"),
            r = n.ActionTypes,
            i = {
                initialize: function() {
                    t.dispatch({
                        type: r.INIT_LOAD
                    })
                },
                setContentType: function(a) {
                    t.dispatch({
                        type: r.SET_CONTENT_TYPE,
                        content: a
                    })
                },
                setClockType: function(a) {
                    t.dispatch({
                        type: r.SET_CLOCK_TYPE,
                        clock: a
                    })
                },
                setPageType: function(a) {
                    t.dispatch({
                        type: r.SET_PAGE_TYPE,
                        page: a
                    })
                },
                nextImage: function() {
                    t.dispatch({
                        type: r.NEXT_IMAGE
                    })
                },
                prevImage: function() {
                    t.dispatch({
                        type: r.PREV_IMAGE
                    })
                },
                resetImage: function() {
                    t.dispatch({
                        type: r.RESET_IMAGE
                    })
                }
            };
        e.exports = i
    }, {
        "./AppDispatcher": 13,
        "./Constants": 14
    }],
    13: [function(a, e) {
        "use strict";
        var t = a("./Dispatcher"),
            n = new t;
        e.exports = n
    }, {
        "./Dispatcher": 15
    }],
    14: [function(a, e) {
        "use strict";
        var t = a("react/lib/keyMirror"),
            n = {
                ActionTypes: t({
                    INIT_LOAD: null,
                    NEXT_IMAGE: null,
                    PREV_IMAGE: null,
                    RESET_IMAGE: null,
                    SET_CLOCK_TYPE: null,
                    SET_CONTENT_TYPE: null,
                    SET_PAGE_TYPE: null,
                    TODO_ADD: null,
                    TODO_REMOVE: null,
                    TODO_MARK_COMPLETE: null,
                    TODO_MARK_INCOMPLETE: null
                }),
                QuoteTypes: t({
                    QUOTE: null,
                    SHLOKA: null,
                    SAKHI: null,
                    KIRTAN: null,
                    LINK: null,
                    MEMORIZE: null,
                    REFERENCE: null,
                    STANZA: null,
                    TITLE: null,
                    VATO: null
                }),
                ContentTypes: {
                    DEFAULT: "Default",
                    SHLOKAS: "Shlokas",
                    SAKHIS: "Sakhis",
                    KIRTANS: "Kirtans",
                    VACHNAMRUT: "Vachnamruts",
                    SWAMINI_VATO: "Swamini Vatos",
                    NEXT: "Next",
                    PREV: "Previous",
                    RESET: "Reset",
                    DRIVE: "Google Drive",
                    YAHOO: "Yahoo",
                    GMAIL: "Gmail",
                    FACEBOOK: "Facebook",
                    BAPSATL: "BAPS Atlanta",
                    BAPS: "BAPS",
                    YOUTUBE: "YouTube",
                    LIFEHACKER: "lifehacker",
                    NBA: "NBA",
                    NFL: "NFL",
                    REDDIT: "Reddit",
                    TWITTER: "Twitter"
                },
                ClockTypes: {
                    TWELVE: "12 Hour",
                    TWENTY_FOUR: "24 Hour"
                },
                PageTypes: {
                    GURUHARI: "Swamishri",
                    GURUPARAMPARA: "Guru Parampara",
                    MANDIRS: "Mandirs"
                },
                LocalStore: {
                    CONTENT_TYPE: "mgml_content_type",
                    TIME_FORMAT: "mgml_time_format",
                    PAGE_TYPE: "mgml_page_type"
                },
                Icons: {
                    BOOK: "icon_book",
                    BOOKMARKS: "icon_bookmarks",
                    CLOCK: "icon_clock",
                    IMAGE: "icon_image",
                    IMAGES: "icon_images",
                    GEAR: "icon_gear"
                },
                Colors: {
                    TURQUOISE: "#1abc9c",
                    EMERALD: "#2ecc71",
                    PETER_RIVER: "#3498db",
                    AMETHYST: "#9b59b6",
                    WET_ASHPHALT: "#34495e",
                    GREEN_SEA: "#16a085",
                    NEPHRITIS: "#27ae60",
                    BELIZE_HOLE: "#2980b9",
                    WISTERIA: "#8e44ad",
                    MIDNIGHT_BLUE: "#2c3e50",
                    SUN_FLOWER: "#f1c40f",
                    CARROT: "#e67e22",
                    ALIZARIN: "#e74c3c",
                    CLOUDS: "#ecf0f1",
                    CONCRETE: "#95a5a6",
                    ORANGE: "#f39c12",
                    PUMPKIN: "#d35400",
                    POMEGRANATE: "#c0392b",
                    SILVER: "#bdc3c7",
                    ASBESTOS: "#7f8c8d"
                },
                CHANGE_EVENT: "change"
            };
        e.exports = n
    }, {
        "react/lib/keyMirror": 28
    }],
    15: [function(a, e) {
        "use strict";
        var t = [],
            n = [],
            r = function() {};
        $traceurRuntime.createClass(r, {
            register: function(a) {
                return t.push(a), t.length - 1
            },
            dispatch: function(a) {
                var e = [],
                    r = [];
                n = t.map(function(a, t) {
                    return new Promise(function(a, n) {
                        e[t] = a, r[t] = n
                    })
                }), t.forEach(function(t, n) {
                    Promise.resolve(t(a)).then(function() {
                        e[n](a)
                    }, function() {
                        r[n](new Error("Dispatcher callback unsuccessful"))
                    })
                }), n = []
            },
            waitFor: function(a, e) {
                var t = a.map(function(a) {
                    return n[a]
                });
                return Promise.all(t).then(e)
            }
        }, {}), e.exports = r
    }, {}],
    16: [function(a, e) {
        "use strict";
        var t = a("./Constants"),
            n = (t.QuoteTypes.KIRTAN, t.QuoteTypes.MEMORIZE, t.QuoteTypes.TITLE, t.QuoteTypes.LINK, {
                1: {
                    KIRTAN: [
                        ["Rudu Swaminarayan nam, nitya sambharie re;", "Vali karta gharnu kam, ghadi na visarie re..."],
                        ["Dharmasutnu dhyan ja dharta,", "Var nahi bhavsagar tarta;", "Harta farta Harine haiye dharie re..."],
                        ["Dukh pade dilgir na thavu,", "Sukh male harkhai na javu;", "Saday himmat haiyethi nav harie re..."],
                        ["Sansar chhe sukhdukhno dariyo,", "Tema tari shake koik ja tariyo;", "Sant samagam karine manne marie re..."],
                        ["Smaran karta sukh ja thashe,", "Fogatno fero tali jashe;", "Mulji kahe Maharaj mujne tarie re..."]
                    ],
                    MEMORIZE: "Rudu Dharma Dukh Sukh Sansar Smaran (RD2S3)",
                    TITLE: "Rudu Swaminarayan nam...",
                    LINK: "https://www.youtube.com/watch?v=trpvTnlBWfY"
                },
                2: {
                    KIRTAN: [
                        ["Ame sau Swamina balak marishu Swamine mate,", "Ame sau Shriji tana yuvak ladishu Shrijine mate..."],
                        ["Nathi darta nathi karta amara jan ni parva,", "Amare dar nathi koino ame janmya chiye marva..."],
                        ["Ame a yagna arambhyo balidano ame daishu,", "Amara Akshar Purushottam Gunatit gnan ne gaishu..."],
                        ["Ame sau Shriji tana putro Akshare vas amaro chhe,", "Swadharmi bhasma choli do amare kshob shano chhe..."],
                        ["Juo sau Moti na Swami na rakhi kai te khami,", "Pragat Purushottam pami malya Gunatit Swami..."]
                    ],
                    MEMORIZE: "Ame Nathi Ame a Ame sau Juo (ANA2SJ)",
                    TITLE: "Ame sau Swamina balak..."
                },
                3: {
                    KIRTAN: [
                        ["Bhulish hu jagatni maya, Guruji nahi bhulu tamne,", "Jivan adhar din bandhu, Guruji nahi bhulu tamne..."],
                        ["Kadapi mahelma suto, Rakhadto saher ke raste,", "Sukhi hau ke dukhi hau pan, Guruju nahi bhulu tamne..."],
                        ["Banu hu rank ke raja, Kadapi seth duniyano,", "Amiri ke fakirima, Guruji nahi bhulu tamne..."],
                        ["Jivan na dham pachhadama, agar mrutyu bichhanama,", "Maranna swas leta pan, Guruji nai bhulu tamne..."],
                        ["Dukhona dungaro tute, kadi akhu jagat rute,", "Parantu pran na bhoge, Guruji nahi bhulu tamne..."],
                        ["Purya man mandire Swami, Pachi thi kya javana chho?", "Divano das Rasik kahe chhe, Guruji nahi bhulu tamne..."]
                    ],
                    MEMORIZE: "Bhulish. Kadapi. Banu. Jivan. Dukhona. Purya. (BKBJDP)",
                    TITLE: "Bhulish hu jagatni maya...",
                    LINK: "https://www.youtube.com/watch?v=8mtNeJxOy8U"
                },
                4: {
                    KIRTAN: [
                        ["Bhav dharine bolo, jay jay Akshar Purushottam;", "Jay Jay Akshar Purushottam..."],
                        ["Shastra sakalno sar param e, Brahma ane Parabrahma;", "Jay Jay Brahma ane Parabrahma..."],
                        ["Mul Akshar e Brahma anadi, Gunatitanand;", "Jay Jay Gunatitanand..."],
                        ["Purushottam Parabrahma anadi, Shri Hari Sahajanand;", "Jay Jay Shri Hari Sahajanand..."],
                        ["Bhagatijine Yagnapurushma, Gnanjivanne Pramukh Swamima;", "Vichari rahya Bhagwant..."],
                        ["Bhave nam rattan karvathi, shanti pame man;", "Jay Jay shanti pame man..."]
                    ],
                    MEMORIZE: "Bhav. Shashtra. Mul Akshar. Purushottam. Bhagatji. Sevasamarpan. Bhave. (BSMPBSB)",
                    TITLE: "Bhav dharine bolo...",
                    LINK: "https://www.youtube.com/watch?v=y7ojZWL0j2Y"
                },
                5: {
                    KIRTAN: [
                        ["Aj sakhi anand ni heli,", "Harimukh joi ne hun thai chu re gheli;"],
                        ["Maha re muni na dhyanma nave,", "Te re Shamaliyoji mujne bolave..."],
                        ["Je sukhne Bhav Brahma re ichchhe,", "Te re Shamaliyoji mujne re prichhe..."],
                        ["Na gai Ganga Godavari Kashi,", "Gher betha maliya Aksharvasi..."],
                        ["Tap re tirathma hu kai nav janu,", "Saheje saheje hu to sukhda re man..."],
                        ["Jeram kahe Swami saheje re maliya,", "Vatni vate va'lo adhalak dhaliya..."]
                    ],
                    MEMORIZE: "Aj. Maha. Je sukhne. Na gai. Tap re. Jeram. (AMJNTJ)",
                    TITLE: "Aj sakhi anand ni heli...",
                    LINK: "https://www.youtube.com/watch?v=1uv4qX5TzSA"
                },
                6: {
                    KIRTAN: [
                        ["Joi murti manohar tari,", "Mava re mara nena lobhana..."],
                        ["Molida upar naval kalangi,", "Shobhe chhe ati sari..."],
                        ["Het karine haidani upar,", "Mala motidani dhari..."],
                        ["Ati re shobhe chhe chhati upadti,", "Chai jagatthi nyari..."],
                        ["Brahmanand kahe a chhabi upar,", "Saravasva nakhu vari..."]
                    ],
                    MEMORIZE: "Joi. Molida. Het karine. Ati re. Brahmanand. (JMHAB)",
                    TITLE: "Joi murti manohar tari...",
                    LINK: "https://www.youtube.com/watch?v=-rc6j-RwmpY"
                },
                7: {
                    KIRTAN: [
                        ["Purvanu punya pragat thayu jyare,", "Swaminarayan maliya re tyare;"],
                        ["Nene Mohanvar nirakhya jyare,", "purankam thayu maru tyare..."],
                        ["Preme kari manir padhravya,", "Shyam Sundarvar mande re bhavya;"],
                        ["Nirakhi Narayan murti jyare,", "trividh tap talya mara tyare..."],
                        ["Kesar chandan charachyu chhe bhale,", "Hasta sundar khada pade chhe gale;"],
                        ["Kanuma kundal makarakar shobhe,", "Jeram kahe man joi joi lobhe..."]
                    ],
                    MEMORIZE: "Purva. Nene. Preme. Nirakhi. Kesar. Kanuma. (PNPNKK)",
                    TITLE: "Purvanu punya pragat thayu...",
                    LINK: "https://www.youtube.com/watch?v=dPMf8YJeyCA"
                },
                8: {
                    KIRTAN: [
                        ["Tamari murti vina mara Nath re,", "Beeju mane apasho ma..."],
                        ["Hu to e ja mangu chhu jodi hatha re,", "Beeju mane apasho ma..."],
                        ["Apo tamara janano sang re,", "Mara jivama e ja umang re..."],
                        ["Mara urma karo nivar re,", "Mane rakho rasiya tam pas re..."],
                        ["E ja araji dayanidhi dev re,", "Apo charanakamalni sev re..."],
                        ["Karo itar vasana door re,", "Rakho Premanandne hajur re..."]
                    ],
                    MEMORIZE: "Tamari. Hu to. Apo. Mara. E ja. Karo. (THAMEK)",
                    TITLE: "Tamari murti vina...",
                    LINK: "https://www.youtube.com/watch?v=Y5sZmbLbl8Q"
                },
                9: {
                    KIRTAN: [
                        ["Mohanne gamvaane ichho maan ni |", "Tyaago sarve joothi manni tek jo |", "Pativrataani dharma achal kari paaljo |", "Haricharne rahejo ablaa thai chhek jo ||"],
                        ["Vali ek vaat kahu chhu adhik vivekni |", "Saambhal beni taara sukhne kaaj jo |", "Harijan sange raakho pooran preetdi |", "Tyaago mad matsar joothi kul laaj jo ||"],
                        ["Sukhdaayak tame jaano sundar Shyaamne |", "Ati dukhdaayak man potaanu jaanjo |", "Muktanandna naath magan thai sevjo |", "Samji vichaari bolo amrutven jo ||"]
                    ],
                    MEMORIZE: "Mohanne. Vali ek. Sukhdaayak. (MVS)",
                    TITLE: "Mohanne gamvaane ichho...",
                    LINK: "https://www.youtube.com/watch?v=C8huNCJQsAc"
                },
                10: {
                    KIRTAN: [
                        ["Bhagya Jagya re aj janva koti thaya kalyan", "Udharo na rahyo ehno, Pamya Prabhu Pragat praman"],
                        ["Anathapananu Me'nu utaryu sada thaya sanath", "Dar na rahyo Bija devano grahyo harie hath"],
                        ["Kangalpananu Ke'vu na rahyu sada mananu sukh", "Masti avi re ati angma du palana dukh"],
                        ["Ansamajan algi thai sami samjanni vat", "Pampala sarve para palya malya shri Hari sakshat"],
                        ["Kasar na rahi koi vatni pamya prabhu pragat prasang", "Khot matine khatra thai rahi gayo chhe rang"],
                        ["Bhudar malta bhalu thayu fero favyo a var", "Sukh tani sima te shu kahu mane mod apar"],
                        ["Aj anand vadhamana haiye harakh na may", "Amalti vat te avi mali shi kahu sukhini simay"],
                        ["Aj amrrutni heli thai rahi nahi kai khot", "Ek kalyannu kya rahyu thaya kalyan kot"],
                        ["Rankpani to rahyu nahi koi ma kahesho kangal", "Nirdhaniya to ame nathi maha malyo chhe mal"],
                        ["Kon jane a kem thayu anyu anchitavya sukh", "Dhalo alaukik dhali gayo Malya Hari mukhomukh"],
                        ["Dhanya dhanya avsar ajno jema maliya Maharaj", "Nishkulanand danko jitno vagi gayo chhe aj"]
                    ],
                    MEMORIZE: "",
                    TITLE: "Bhagya Jagaya re aj janva...",
                    LINK: "https://www.youtube.com/watch?v=p4Dmoap3MYQ"
                },
                11: {
                    KIRTAN: [
                        ["Harijan sachare, je urma Himmat rajkhe,", "Vipatti varti re, kedi din vachan nav bhakhe..."],
                        ["Jaganu sukhdukh re, mayik mithya kari jane,", "Tan dahn jata re, antarma shok na ane..."],
                        ["Par upkari re, jan prem niyamma pura,", "Daihik dukhma re, dajhe nahi sadhu shura..."],
                        ["Harine samare re nitya ahonish umang bhariya,", "Sarva tajine re, Natanagar vahala kariya..."],
                        ["Brahmanand kahe re, eva harijanni balihar,", "Mastak jata re, nav mele vichari..."]
                    ],
                    MEMORIZE: "HJPHB",
                    TITLE: "Harijan sacha re..."
                },
                12: {
                    KIRTAN: [
                        ["Anubhavi anandma Brahmarasna bhodi re,", "Jivanmukta jogiya antar arogi re..."],
                        ["Je shikhe te sambhale triputine tane re,", "Mannu krutya man lagi asatya mane re..."],
                        ["Jya lagi jag vistaryo mrugtrishna pani re,", "Tema moh na pame mahamuni svapnu pramani re..."],
                        ["Je vadde a jakta chhe koi na jane re,", "Muktanand kahe gurumukhi te sukhada mane re..."]
                    ],
                    MEMORIZE: "Anubhavi. Je shikhe. Jya lagi. Je vade. (AJ3)",
                    TITLE: "Anubhavi anandma Brahmarasna...",
                    LINK: "https://www.youtube.com/watch?v=OID8cFurlj0"
                },
                13: {
                    KIRTAN: [
                        ["Hari vinaa hit kaari biju, koi taaru nathi..."],
                        ["Prabhu bhajyaa nu Ved Puraane kahyu chhe kathi,", "Akkal hinaa aalasi betho paamar tu pathi..."],
                        ["Maat Pita sut naari baandhav nahi tara saathi,", "Ant same to ekalaa jaavu kaa mare mathi..."],
                        ["Swarathiyo Sansaar temaa rahyo lath bathi,", "Sant purush ni sobat vinaa shee thaashe gati..."],
                        ["Akkalavantaa raaj karantaa moova mahaarathi,", "Devanand kahe aapane jaavu kahyu theth thi..."]
                    ],
                    MEMORIZE: "Hari. Prabhu. Maat Pita. Swarathiyo. Akkalavantaa. (HPMSA)",
                    TITLE: "Hari vinaa hit kaari biju...",
                    LINK: "https://www.youtube.com/watch?v=H5lT_qLuQnw"
                },
                14: {
                    KIRTAN: [
                        ["Re sagapan Harivar nu sachu,", "biju sarve kshanabhangur kachu..."],
                        ["Re sau sathe priti tali,", "re bhangyu man mithya bhali,", "Chhe varva jeva ek Vanmali..."],
                        ["Re sthir nahi avarda thodi,", "re tuchchh jani asha todi,", "Me jagna Jivan sathe jodi..."],
                        ["Re fogat fera nav farie", "re par gher pani shu bharie,", "Varie to Natavarne varie..."],
                        ["Re Bhudar bhetya bhay bhago,", "re sahu sathe todyo dhago,", "E rasik rangilathi rang lagyo..."],
                        ["Re evu janine sagpan kidhu,", "re me'nu te shir upar lidhu,", "Brahmanandnu karaj sidhu..."]
                    ],
                    MEMORIZE: "Sagapan. Sau sathe. Sthir. Fogat. Bhudhar. Evu Janine. ",
                    TITLE: "Re sagpan Harivar nu sachu..."
                },
                15: {
                    KIRTAN: [
                        ["Sant jan soi sada moi bhave,", "Deh indriya aru man adik ke, sangme nahi laptave..."],
                        ["Kam krodh aru lobh moha vash, ho na man lalchave;", "Mero hi dhyan ratan mukha mero, soi taji anya na ave..."],
                        ["Kshar Akshar aru Akshar parki, sab hi samaj ur lave;", "Sab gun puran param viveki, gun ko man na ave..."],
                        ["Pinda brahmandase par nij atma, jani ke mam gun gave;", "Muktanand kahar yu Mohan, soi jan sant kahave..."]
                    ],
                    MEMORIZE: "Sant. Kam. Kshar. Pinda.",
                    TITLE: "Sant jan soi sada moi bhave..."
                },
                16: {
                    KIRTAN: [
                        ["Dhanya dhanya e Sant sujanane,", "Jenu ulati palatyu ap, Sant te swayam Hari..."],
                        ["Ap tali malya Bhagwanma,", "Jena apma Harino vyap..."],
                        ["Jena shishma shish chhe Shyamnu,", "Jena nenma Nathana nen..."],
                        ["Jena mukhma mukh Maharajnu,", "Jena venma Va'lana ven..."],
                        ["Jena kanma kan chhe Krushnana,", "Jena nakma nasika Nath..."],
                        ["Jeni jibhama jibha Jivanni,", "Jena hathma Harina hath..."],
                        ["Jena hradayma hraday Hari tanu,", "Jena pavma Prabhuna pav..."],
                        ["Jem hiro hira vade vendhie,", "Tem thayo te sahaj samava..."],
                        ["Em Santma rahya chhe Shrihari,", "Mate Sant chhe sukhanu dham..."],
                        ["Dharma, bhakti, vairagya ne gnan je,", "Tene rahevanu Sant chhe tham..."],
                        ["Eva Sant shiromani kya male,", "Jene dehabuddhi kari dur..."],
                        ["Kahe Nishkulanand ene sange,", "Uge antare ananad sur..."]
                    ],
                    MEMORIZE: "",
                    TITLE: "Dhanya dhanya e Sant sujanane...",
                    LINK: "https://www.youtube.com/watch?v=I8hNLjcgeyY"
                },
                17: {
                    KIRTAN: [
                        ["Shashtriji Maharajno sang,", "Bhai mane bhagye malyo chhe..."],
                        ["Yagnapurushna darshan karata,", "Chade chhe chogano rang..."],
                        ["Adsath tirath mara Swami charanma,", "Koti Gaya ne koti Gang..."],
                        ["Nindana karnar narake jashe,", "Bhogavshe thaine bhoring..."],
                        ["Swami Shriji ema akhand biraje,", "Seva kari lyone dham..."],
                        ["Das Rasikna guru gunvanta,", "De chhe muktino kol..."]
                    ],
                    MEMORIZE: "",
                    TITLE: "Shashtriji Maharajno sang...",
                    LINK: "https://www.youtube.com/watch?v=64fq8DVzWJs"
                },
                18: {
                    KIRTAN: [
                        ["Bhakti karta chhute maaro praan, Yogi evu maa(n)gu re,", "Rahe janmo janam taaro saath, Yogi evu maa(n)gu re..."],
                        ["Taru mukhdu manohar joya karu,", "Raat dahdo bhajan taru bolya karu,", "Rahe ant samay taru Dhyaan, Yogi evu maa(n)gu re..."],
                        ["Maari asha niraasha karasho nahi,", "Maara avgun haiya ma dharasho nahi,", "Shwaso-shwase ratu taru naam, Yogi evu maa(n)gu re..."],
                        ["Maara paap ne taap te baali didha,", "Pragat Prabhu ni seva ma jodi didha,", "Aapo Akshardham nu sukh, Yogi evu maa(n)gu re..."]
                    ],
                    MEMORIZE: "Bhakti. Taru. Maari asha. Maara paap. (BTMAMP)",
                    TITLE: "Bhakti karta chhute maaro praan...",
                    LINK: "https://www.youtube.com/watch?v=EFgAfeUD-ko"
                },
                19: {
                    KIRTAN: [
                        ["Aaja Pragtya Pooran Brahma re, Swami Sukhakaaree", "Bhela aavyaa pote Parabrahma re, Swami Sukhakaaree"],
                        ["Karyaa aneka jeevanaa kaaja re, Swami Sukhakaaree", "Bhaangee Bhavanee Bhaavata aaja re, Swami Sukhakaaree"],
                        ["Aa taane aavyaa alabela re, Swami Sukhakaaree", "Valee gaee chhe rangadaanee rela re, Swami Sukhakaaree"],
                        ["Maare aananda anga na maaya re, Swami Sukhakaaree", "Muni Akhandanand em gaaya re, Swami Sukhakaaree"]
                    ],
                    MEMORIZE: "",
                    TITLE: "Aaja Pragatyaa Pooran Brahma re...",
                    LINK: "https://www.youtube.com/watch?v=1FiTRykgYo4"
                },
                20: {
                    KIRTAN: [
                        ["Namiyee narayanswaroop samarath sant hariroop |"],
                        ["Vaani tamaari jaane prem saravaani |", "Brahmaras varse anoop ||"],
                        ["Jaadu bhareli jaane drashti tamari |", "Brahmaras varse bhoop ||"],
                        ["Haiye chhalke chhe bahu vaalapni chholyu |", "Aankhaldi amrutni koop ||"],
                        ["Joto nathi jeno kyaaye jagatmaa |", "Dharmano maheke chhe dhoop ||"],
                        ["Daas vanmaali kahe kar jodi |", "Sharnu tamaaru sukh roop ||"]
                    ],
                    MEMORIZE: "",
                    TITLE: "Namiye narayanswaroop...",
                    LINK: "https://www.youtube.com/watch?v=sGnxhJFbTqE"
                },
                21: {
                    KIRTAN: [
                        ["Laago chho pyaaraa pyaara Pramukh Swami, Laago chho pyaaraa pyaara,", "Jeevan praan amaara Pramukh Swami, Lago chho pyaara pyaara..."],
                        ["Koti sooraj nu tej bharyu aap maa,", "Antar nu tam taalanaaraa Pramukh Swami..."],
                        ["Vadavaanal sam ati balavantaa,", "Brahma prakaas rel naara Pramukh Swami..."],
                        ["Anant chandra ni sheetalataa aap maa,", "Tapataa haiyaa thaaranaaraa Pramukh Swami..."],
                        ["Gaarudi o naa gaarudi aap chho,", "Manidhar dolaavanaaraa Pramukh Swami..."],
                        ["Sarve saamarathi aishvarya daabi,", "Namra bhaave vartanaaraa Pramukh Swami..."],
                        ["Swami Shreeji na akhand Dhaarak,", "Saadhutaa shobhaavnaaraa Pramukh Swami..."],
                        ["Parapkaari sant guruhari", "Van maali das naa vahaalaa Pramukh Swami..."]
                    ],
                    MEMORIZE: "",
                    TITLE: "Laago chho pyaaraa...",
                    LINK: "https://www.youtube.com/watch?v=cjDP0YqyRGc"
                },
                22: {
                    KIRTAN: [
                        ["Ghanu jivo ho jivan adhaar, Narayanswaroop tame,", "Guruhari chho haiyaa na haar, Narayanswaroop tame..."],
                        ["Chhiye sevak Swamiji tamara ame,", "Ame karshu hameshaa je tamne game,", "Raji rahejo jani nij bal..."],
                        ["Ame runi guruji tamara chhiye,", "Pran pyaaraa kaho to pran paathariye,", "Sada sarvatra jay jay kar..."],
                        ["Tan man dhan sarve charane dhariye,", "Man karma vachanthi seva kariye,", "Sarva jivo nu shreya karanaar..."],
                        ["Kariye arpan aavardaa amari badhi,", "Raho avichal anant kalpo sudhi,", "Sukh apo sahune apar..."],
                        ["Tav charno ma jivan amaru vite,", "Divya murti rahe Prabhu akhand chitte,", "Vanamali ne man vasanaar..."]
                    ],
                    MEMORIZE: "GCATKT",
                    TITLE: "Ghanu jivo ho jivan...",
                    LINK: "https://www.youtube.com/watch?v=QZk0ZgNKs80"
                },
                23: {
                    KIRTAN: [
                        ["Je dukh thaay te thaajo re ruda Swamine bhajata |", "Pind pade toy padavane dejo |", "Jiv jaaye to jaajo re ||"],
                        ["Unche bandhi niche agani salgave |", "Mar mushalano khaajo re ||"],
                        ["Lok ninde to nindavane dejo |", "raja dande to dandajo re ||"],
                        ["Harijanno daas ranchhod kahe chhe |", "Gun Guovindajina gajo re||"]
                    ],
                    MEMORIZE: "Je. Unche. Lok. Harijanno. (JULH)",
                    TITLE: "Je dukh thaay te thaajo...",
                    LINK: "https://www.youtube.com/watch?v=M1I0RMjevbU"
                },
                24: {
                    KIRTAN: [
                        ["Sant vina re sachi kon kahe, Sara sukhni vat;", "Daya rahi chhe jena dilma, nathi ghutma ghat,", "Sant vina re sachi kon kahe..."],
                        ["Jem janani haiye heta chhe, sada sutna sath,", "Arogi karava arabhakhne, Paye kadavera vat,", "Sant vina re sachi kon kahe..."],
                        ["Jem bhamari bhare bhatako, palatva iyadnu ang,", "Em Sant vachan katu kahe, Apva apno rang,", "Sant vina re sachi kon kahe..."],
                        ["Jano Sant sagachhe sahuna, jiva jarur jan,", "Nishkulanand nirbhay kare, ape pad niravan,", "Sant vina re sachi kon kahe..."]
                    ],
                    MEMORIZE: "Sant. Jem janani. Jem bhamari. Jano. (SJ3)",
                    TITLE: "Sant vina re sachi kon kahe..."
                },
                25: {
                    KIRTAN: [
                        ["Sant param hitkari, jagat mahi...", "Prabhupad pragat karavat priti, bharam mitavat bhari..."],
                        ["Paramkrupalu sakal jivan par,", "Harisam sab dukhhari.."],
                        ["Trigunatit firat tanu tyagi,", "Rit jagatse nyari..."],
                        ["Brahmanand kahe santki sobat,", "milat hai pragat Murari..."]
                    ],
                    MEMORIZE: "Sant. Paramkrupalu. Trigunatit. Brahmanand. (SPTB)",
                    TITLE: "Sant param hitkari...",
                    LINK: "https://www.youtube.com/watch?v=VzZFpW7FHMM"
                },
                26: {
                    KIRTAN: [
                        ["Haji bhala Sadhu, Hariki sadh,", "Tanki upadhi taje sohi Sadhu..."],
                        ["Man apmanme ekta, sukh-dukhme sambhav,", "Ahi ke sukh alp he, nahi swarg luchav..."],
                        ["Lalacha lobh haram hai, grahe ne ganthe dam,", "Nari nagani sam taje, rate nirantar Ram..."],
                        ["Matha na bandhe mamta kari, shathata kini tyag,", "Kabhu krodh na upaje, so sacha vairaga..."],
                        ["Tyage tikha tamtama, rasna bhogvilas,", "Muktanand so Santke, sada rahat Hari pas..."]
                    ],
                    MEMORIZE: "Haji. Man. Lalacha. Matha. Tyage. (HMLMT)",
                    TITLE: "Haji bhala Sadhu...",
                    LINK: "https://www.youtube.com/watch?v=hMltj5bvZI8"
                },
                27: {
                    KIRTAN: [
                        ["Bhaji le Bhagawanne, Sacha Santane mali,", "Vachanama vishwas rakhi, bhajanma bhali,", "Purav kera pap tara, to jashe bali..."],
                        ["Olakhi le Avinashi, raheje jnanama gali,", "Rizashe rangarel valo, adhalak dhali..."]
                    ],
                    MEMORIZE: "Bhajile. Vachanma. Olakhi.",
                    TITLE: "Bhaji le Bhagwanne..."
                },
                28: {
                    KIRTAN: [
                        ["Bolya Shri Hare re, sambhalo narnari harijan;", "Mare ek varta re, sahune sambhalavyanu chhe man..."],
                        ["Mari murti re, mara lok, bhog ne mukta;", "Sarve divya che re, tya to joyani chhe jukt..."],
                        ["Maru Dham chhe re, Akshar Amrut jenu nam;", "Sarve samrathi re, shakti gune kari abhiram..."],
                        ["Ati tejomay re, ravi shashi kotik varne jay;", "Shital shant chhe re, tejni upma nav devay..."],
                        ["Tema hu rahu re, dvidhuj divya sada sakar;", "Durlabh devne re, Maro koi na pame par..."],
                        ["Jiva Ishwar tano re, maya kal purush pradhan;", "Sahune vash karu re, sahuno prerak hu Bhagwan..."],
                        ["Aganit vishvani re, utpatti palan pralay thay;", "Mari marji vina re, koithi tarnu nav today..."],
                        ["Em mane janjo re, mara ashrit sau narnari;", "Mein tame agale re, varta satya kahi chhe Mari..."],
                        ["Hu te tam karane re, avyo Dham thaki dhari deh;", "Premanandno re, va'lo varasya amrut meh..."]
                    ],
                    MEMORIZE: "BMMATJAEH",
                    TITLE: "Bolya Shri Hari re...",
                    LINK: "https://www.youtube.com/watch?v=qoxxW9oxOeo"
                },
                29: {
                    KIRTAN: [
                        ["Sacha santna ang endhan re, joi leva jivadie |", "Jene malve manyu kalyan re, tene jova ghadighadiye ||"],
                        ["Khata pita jota janashe re, ashay ena antarno |", "Uthe bese bole kalashe re, pase vasta e narno ||"],
                        ["Hashe harad haiya keru re, van kahye pan vartashe |", "Jem jem chhapadshe ghaneru re, tem tem chaatu thashe ||"],
                        ["Khay khune lasan laki re, te gandh kare chhupavanu |", "Kahe Nishkulanand vat naki re, jem chhe tem janavanu ||"]
                    ],
                    MEMORIZE: "Sacha. Khata. Hashe. Khay. (SKHK)",
                    TITLE: "Sacha santna ang..."
                },
                30: {
                    KIRTAN: [
                        ["Mano mali chhe moti vaat, haath avi te ma harjo re,", "Kari jatan divas raat, suta betha sambharjo re..."],
                        ["Sacho madiyo chhe satsang, ange achal kari rakhajo re,", "Rakhe chade bijano rang avu dahapan dur rakhajo re..."],
                        ["Lai betha chho moto labh, bheti puran brahmane re,", "Nahi to dukhno uagath dabh, Mani lejo ae marmane re..."],
                        ["Aj pamya chho anand, vamya darun dukh ne re,", "em kahe Nishkulanand, rakhe mukata eva sukhne re..."]
                    ],
                    MEMORIZE: "",
                    TITLE: "Mano madi chhe moti vaat...",
                    LINK: "https://www.youtube.com/watch?v=0t3eeyOFbmI"
                },
                31: {
                    KIRTAN: [
                        ["Sant jan soi sada moi bhave,", "Deh indriya aru man adik ke, sangme nahi laptave..."],
                        ["Kam krodh aru lobh moha vash, ho na man lalchave;", "Mero hi dhyan ratan mukha mero, soi taji anya na ave..."],
                        ["Kshar Akshar aru Akshar parki, sab hi samaj ur lave;", "Sab gun puran param viveki, gun ko man na ave..."],
                        ["Pinda brahmandase par nij atma, jani ke mam gun gave;", "Muktanand kahar yu Mohan, soi jan sant kahave..."]
                    ],
                    MEMORIZE: "Sant. Kam. Kshar. Pinda.",
                    TITLE: "Sant jan soi sada moi bhave..."
                }
            });
        e.exports = n
    }, {
        "./Constants": 14
    }],
    17: [function(a, e) {
        "use strict";
        var t = a("./Constants"),
            n = (t.QuoteTypes.QUOTE, t.QuoteTypes.REFERENCE, {
                1: {
                    QUOTE: "A Sant to sarva jagatna adhar rup chhe.",
                    REFERENCE: "Vachnamrut Gadhada I-27"
                },
                2: {
                    QUOTE: "Pragat Bhagwan ne a pragat Sadhuni agnathi ek niyam rakhe to kalyan thay.",
                    REFERENCE: "Swamini Vato 4/37"
                },
                3: {
                    QUOTE: "Evi nishthaval je Sant chhe, tena pagni rajne to ame pan mathe chadaviye chhiye, ane tene dukhavta thaka manma biye chhiye, ane tena darshan-ne pan ichhiye chhiye.",
                    REFERENCE: "Vachnamrut Gadhada I-37"
                },
                4: {
                    QUOTE: "A Sadhu ava ne ava Akshardham-mathi avya chhe evo parbhav akhand janay to aho! aho! sarkhu rahe.",
                    REFERENCE: "Swamini Vato 1/222"
                },
                5: {
                    QUOTE: "Satpurushno je prasang ej Parmeshwarne vishe dradh priti thavanu karan chhe.",
                    REFERENCE: "Vachnamrut Gadhada I-44"
                },
                6: {
                    QUOTE: "Motano mahima jivane samajvo kathan chhe; kem je, brahmandni pan ganati nahi ne vali a lokna tuccha padarthni pan sambhavna rakhe.",
                    REFERENCE: "Swamini Vato 2/130"
                },
                7: {
                    QUOTE: "Jo Mota Purushni sevama khabardar thaine rahe to ena pap baline bhasma thai jay chhe.",
                    REFERENCE: "Vachnamrut Gadhada I-55"
                },
                8: {
                    QUOTE: "Sadhuna haiyama Bhagwan chhe te jivana haiyama ghale chhe.",
                    REFERENCE: "Swamini Vato 2/75"
                },
                9: {
                    QUOTE: "A Sadhu jevo kyay mal nathi.",
                    REFERENCE: "Swamini Vato 6/246"
                },
                10: {
                    QUOTE: "Shastre kahya je nishkam, nirlobh, nirman, nisswad, nissneh ityadik Santna lakshan, tene sambhaline eval lakshan jya dekhay eva je Sant tene ne Bhagwan-ne sakshat sambandh hoy.",
                    REFERENCE: "Vachnamrut Gadhada III-27"
                },
                11: {
                    QUOTE: "Ava Sadhu-ne manma sambhariye to man-na pap bali jay.",
                    REFERENCE: "Swamini Vato 1/30"
                },
                12: {
                    QUOTE: "Eva yatharth Bhagwan-na Bhakta chhe... Tenu darshan to Bhagwanna darshan tulya chhe, ane ena darshane karine anant patit jivano udhar thay chhe eva e mota chhe.",
                    REFERENCE: "Vachnamrut Gadhada I-37"
                },
                13: {
                    QUOTE: "Tem apanane pragat Sant malya chhe have shu baki rahyu?",
                    REFERENCE: "Swamini Vato 1/104"
                },
                14: {
                    QUOTE: "So janme karine uttam bhakta jevo thanaro hoy, te a ne a janme karine uttam bhakta thay chhe. Evu Bhagwan ne te Bhagwan-na Bhakta teni sarkhi seva karyanu fal chhe.",
                    REFERENCE: "Vachnamrut Vadtal 5"
                },
                15: {
                    QUOTE: "[Ava Sadhuni] vatu sambhadiye to kan-na pap bali jay ne darshan kariye to ankh-na pap bali jay, em mahima janvo.",
                    REFERENCE: "Swamini Vato 1/30"
                },
                16: {
                    QUOTE: "Ane eva Sant manushya chhe to pan Bhagwan-ni pethe seva karva yogya chhe.",
                    REFERENCE: "Vachnamrut Gadhada III-26"
                },
                17: {
                    QUOTE: "Jena guru Akshar hoy te Akshardham-ma lai jay ne Purushottam-ne melve.",
                    REFERENCE: "Swamini Vato 6/267"
                },
                18: {
                    QUOTE: "Vali jivane mokshanu je dwar te pan eva Sadhuna prasang thaki ughadu thay chhe.",
                    REFERENCE: "Vachnamrut Gadhada I-54"
                },
                19: {
                    QUOTE: "Purve je je anant prakar-na ashcharya thai gaya chhe tatha hamna je thay chhe tatha agad thashe te sarve mane malya eva pratyaksh Bhagwan te vate ja thay chhe.",
                    REFERENCE: "Vachnamrut Gadhada II-27"
                },
                20: {
                    QUOTE: "Bhagwan ene vash chhe, Bhagwan e kahe em kare chhe.",
                    REFERENCE: "Swamini Vato 4/143"
                },
                21: {
                    QUOTE: "Eva je Sant tene manushya jeva na janva ne dev jeva pan na janva; kem je, eni kriya dev-manushyane vishe hoy nahi.",
                    REFERENCE: "Vachnamrut Gadhada III-26"
                },
                22: {
                    QUOTE: "Ane jyare avo Sant samagam prapta thyo tyare deh mukine jene pamva te to deh chhata ja malya chhe.",
                    REFERENCE: "Vachnamrut Gadhada III-2"
                },
                23: {
                    QUOTE: "Kaheshe Sant to e bahu sara re, Khara kalyanana karanara re; Etlo ja guna koi grahshe re, Te to Brahmamole vas leshe re.",
                    REFERENCE: "Purushottam Prakash (Chapter 41)"
                },
                24: {
                    QUOTE: "Satpurushne vishe dradh priti e ja atmadarshan-nu sadhan chhe... ane Parmeshwar-nu sakshat darshan thavanu pan e ja sadhan chhe.",
                    REFERENCE: "Vachnamrut Vadtal 11"
                },
                25: {
                    QUOTE: "A Sadhu... antaryami chhe, sarvagna chhe, enu karyu thay chhe, ne e manushya jeva dekhay chhe, pan manushya jeva nathi.",
                    REFERENCE: "Swamini Vato 4/143"
                },
                26: {
                    QUOTE: "Ane eva Santu darshan thayu tyare em janvu je, 'Mane shakshat Bhagwan-nu darshan thayu'.",
                    REFERENCE: "Vachnamrut Sarangpur 10"
                },
                27: {
                    QUOTE: "Bhagwan-na bhaktane Bhagwan-nu swarup Akshardham sahit pruthvi upar virajman chhe em samajvu ane bija agal pan evi rite varta karvi.",
                    REFERENCE: "Vachnamrut Gadhada I-71"
                },
                28: {
                    QUOTE: "Sant krupae sukh upaje, Sant krupathi sare kama; Sant krupathi pamiye, Purana Purushottam dhama.",
                    REFERENCE: "Bhaktachintamani 2/2"
                },
                29: {
                    QUOTE: "Sant sevya tene sarve sevya, Sevya Shri Hari Bhagwan; Rushi muni sevya devata, Jene Sant karya raji mana.",
                    REFERENCE: "Bhaktachintamani 2/4"
                },
                30: {
                    QUOTE: "Kahe bahu prakare kalyana re, Ati aganit aparaman re; Pana sahuthi saras Santama re, Rakhyu Valame eni vatama re.",
                    REFERENCE: "Purushottam Prakash (Chapter 41)"
                },
                31: {
                    QUOTE: "Sant hu ne hu te vali Santa re, Em Shrimukhe kahe Bhagawanta re; Sant manajo mari murati re, Ema fer nathi ek rati re.",
                    REFERENCE: "Purushottam Prakash (Chaper 41)"
                }
            });
        e.exports = n
    }, {
        "./Constants": 14
    }],
    18: [function(a, e) {
        "use strict";
        var t = a("./Constants"),
            n = (t.QuoteTypes.SAKHI, t.QuoteTypes.REFERENCE, {
                1: {
                    SAKHI: ["Tamara pratap thaki, Pangalo parvat chade |", "Tamara pratap thaki, Andhane ankho jade ||"],
                    REFERENCE: "Bhaktachintamani 1-36"
                },
                2: {
                    SAKHI: ["Tamara pratap thaki, Muko mukhe Veda bhane |", "Tamara pratap thaki, Rank te raja bane ||"],
                    REFERENCE: "Bhaktachintamani 1-37"
                },
                3: {
                    SAKHI: ["Kamdugha kalpataru, Paras chintamani char |", "Sant saman e eke nahi, Me manama karyo vichar ||"],
                    REFERENCE: "Bhaktachintamani 2-7"
                },
                4: {
                    SAKHI: ["Alpa sukh ema rahyu, Mali tali jaya chhe eha |", "Sant sevye sukh upaje, Rahe akhand atala eha ||"],
                    REFERENCE: "Bhaktachintamani 2-8"
                },
                5: {
                    SAKHI: ["Sant krupae sukh upaje, Sant krupathi sare kam |", "Sant krupathi pamiye, Puran Purushottam dham ||"],
                    REFERENCE: "Bhaktachintamani 2-2"
                },
                6: {
                    SAKHI: ["Sant krupathi sadmati jage, Sant krupathi sadgun |", "sant krupa vina sadhuta, Kahone pamya kun ||"],
                    REFERENCE: "Bhaktachintamani 2-3"
                },
                7: {
                    SAKHI: ["Sant sevya tene sarva sevya, Sevya Shri Hari Bhagwan |", "Rushi muni sevya devata, Jene Sant karya raji man ||"],
                    REFERENCE: "Bhaktachintamani 2-4"
                },
                8: {
                    SAKHI: ["Jap tap tirth vrat vali, Tene karya yog yagan |", "Sarve karaj sariyu, Jene Sant karya prasanna ||"],
                    REFERENCE: "Bhaktachintamani 2-5"
                },
                9: {
                    SAKHI: ["Eva Sant shiromani, Ghani ghani shu kahu vat |", "Tevu nathi trilokma, Sant sama tulya sakshat ||"],
                    REFERENCE: "Bhaktachintamani 2-6"
                },
                10: {
                    SAKHI: ["Tyag shobha Santni, em kahe Veda Puran |", "Tyagi thai tan saukh ichchhe, E ja mota ajan ||"],
                    REFERENCE: "Bhaktachintamani 58-38"
                },
                11: {
                    SAKHI: ["Mara janane antakale, Jarur tedava avavu |", "Birud maru e na badale, Te sarve janane janavavu ||"],
                    REFERENCE: "Bhaktachintamani 68-9"
                },
                12: {
                    SAKHI: ["Prakat rupe Satasangma, Rahu chhu rudi perya |", "Vali avanie avatar lahu, Nrup yogi viprane gherya ||"],
                    REFERENCE: "Bhaktachintamani 68-13"
                },
                13: {
                    SAKHI: ["Jan pratye Jivan kahe, Jene jetlo Satsang |", "Teno tetla papno, Thay baher bhitur bhang ||"],
                    REFERENCE: "Bhaktachintamani 84-38"
                },
                14: {
                    SAKHI: ["Aganya vina je avavu, Tema raji ame nahi rati |", "Vachan pramane je varate, Te uparye prasanna ati ||"],
                    REFERENCE: "Bhaktachintamani 86-3"
                },
                15: {
                    SAKHI: ["Pan jiya lagi pran raheshe, Jibha Swami Sahajanand kaheshe |", "teh vina kahe biju kem, Padi anti antarma em ||"],
                    REFERENCE: "Bhaktachintamani 102-48"
                },
                16: {
                    SAKHI: ["Sant juve te bhelo hu jou re, Sant suta pachhi hu sou re |", "Sant jage te bhelo hu jagu re, Sant joi ati anuragu re ||"],
                    REFERENCE: "Purushottam Prakash 41-7"
                },
                17: {
                    SAKHI: ["Sant hu ne hu te vali Sant re, Em Shrimukhe kahe Bhagavant re |", "Sant manjo mari murati re, ema fer nathi ek rati re ||"],
                    REFERENCE: "Purushottam Prakash 41-9"
                },
                18: {
                    SAKHI: ["Kaheshe Sant to e bahu sara re, Khara kalyanana karnara re |", "Etlo j guna koi greshe re, te to Brahmamo'le vas leshe re ||"],
                    REFERENCE: "Purushottam Prakash 41-14"
                },
                19: {
                    SAKHI: ["Sant desh pradesh fare chhe re, Sahu jivana agha hare chhe re |", "Ena darshan sparsh je karshe re, Teto bhavajal par utarashe re ||"],
                    REFERENCE: "Purushottam Prakash 41-19"
                },
                20: {
                    SAKHI: ["Vali santne api aganya re, Re'vu nahi ahi avya vina re |", "Varaso varas ek mas re, Karvo a mandirma nivas re ||"],
                    REFERENCE: "Purushottam Prakash 32-13"
                },
                21: {
                    SAKHI: ["Dharma dharma sahu koi kahe, Pan dharmama bau marma chhe |", "Pragat Prabhuna vachan pale, Ethi moto koi dharma chhe? ||"],
                    REFERENCE: "Sarsiddhi 28-9"
                },
                22: {
                    SAKHI: ["Jem so so shunya sara kare, Pan ek na kare jo agale |", "Te sarvalo shano malashe, Je kare chee kalap kagale ||"],
                    REFERENCE: "Sarsiddhi 1-7"
                },
                23: {
                    SAKHI: ["Jem mor-patni bindu avata, Rate liye chhe rase bharelada |", "Teno mayur thay tadavat, Thay padata binduna dhelada ||"],
                    REFERENCE: "Sarsiddhi 29-8"
                },
                24: {
                    SAKHI: ["Tem avata vachan vala tana, Grahi liye nar garaju thai |", "Te puran pame prapti, Fari feravani rahe nai ||"],
                    REFERENCE: "Sarsiddhi 29-9"
                },
                25: {
                    SAKHI: ["So vatni ek vat chhe, Nav karvo agna lop |", "Raji karvanu rahyu paru, Pan karaviye nahi Harino kp ||"],
                    REFERENCE: "Vachanvidhi 4-5"
                },
                26: {
                    SAKHI: ["Alpa sukh saru aganya, Lope chhe Shri Hari tani |", "Param sukh kem pamashe, Bhai dharjo tena dhani ||"],
                    REFERENCE: "Vachanvidhi 4-7"
                },
                27: {
                    SAKHI: ["Male Prabhu pragat praman re, Ka to tena malele kalyan re |", "Teh vina to koti upaye re, Atyantik kalyan na thaye re ||"],
                    REFERENCE: "Kalyn Nirnay 2-16"
                },
                28: {
                    SAKHI: ["Ek ghadi adhi ghadi, Taki puni adh |", "Tulsi sangat Santki, Kate koti apradh ||"],
                    REFERENCE: "Sakhio"
                },
                29: {
                    SAKHI: ["Kanak tajyo kamini tajyo, Tajyo dhatuko sang |", "Tulsi laghu bhojan kari, Jive manake rang ||"],
                    REFERENCE: "Sakhio"
                },
                30: {
                    SAKHI: ["Guru Govind donu khade, Kisko lagu pay |", "Balihari Guru devki, Jine Govind diyo batay ||"],
                    REFERENCE: "Sakhio"
                },
                31: {
                    SAKHI: ["Pan jiya lagi pran raheshe, Jibha Swami Sahajanand kaheshe |", "teh vina kahe biju kem, Padi anti antarma em ||"],
                    REFERENCE: "Bhaktachintamani 102-48"
                }
            });
        e.exports = n
    }, {
        "./Constants": 14
    }],
    19: [function(a, e) {
        "use strict";
        var t = a("./Constants"),
            n = (t.QuoteTypes.SHLOKA, t.QuoteTypes.REFERENCE, {
                1: {
                    SHLOKA: ["Twameva mata cha pita twameva, Twameva bandhuscha sakha twameva |", "Twameva vidya dravinam twameva, Twameva saravam mama deva deva ||"],
                    REFERENCE: "Pandava Gita"
                },
                2: {
                    SHLOKA: ["Gururbrahma Gururvishnur, Gurur devo maheswaraha |", "Guru(hu) sakshat Parambrahma, Tasmai shrigurave namaha ||"],
                    REFERENCE: "Anonymous"
                },
                3: {
                    SHLOKA: ["Sarvetra sukhina(ha) santu, Sarve santu niramayaha |", "Sarve bhadrani pashyantu, Ma kashchid dukham-apnuyat ||"],
                    REFERENCE: "Anonymous"
                },
                4: {
                    SHLOKA: ["Ati-manoharam sarva-sundaram, Tilaka-lakshanam chanchalekshanam |", "Vibhuda-vanditam Swaminath te, Vapuri-hastuno nitya darshane ||"],
                    REFERENCE: "Anonymous"
                },
                5: {
                    SHLOKA: ["Sarva-dharman pari-tyajya, Mam-ekam sharanam Vraj |", "Aham tvam sarva-papebhyo, Mokshayishyami ma suchaha ||"],
                    REFERENCE: "Bhagvad Gita 9-26"
                },
                6: {
                    SHLOKA: ["Prasangam-ajaram pasham, Atmana(ha) kavayo viduhu |", "Sa eva sadhushu kruto, Moksha-dwaram-apavrutam ||"],
                    REFERENCE: "Bhagwad Gita 3-25-20"
                },
                7: {
                    SHLOKA: ["Karyam na sahasa kinchit, Karyo dharmastu satvaram |", "Pathaniyadhita-vidya, Karya(ha) sangonvaham satam ||"],
                    REFERENCE: "Shikshapatri 36"
                },
                8: {
                    SHLOKA: ["Nijatmanam brahmarupam, Dehatraya-vilakshanam |", "Vibhavya tena kartavya, Bhakti(hi) Krushnasya sarvada ||"],
                    REFERENCE: "Shikshapatri 116"
                },
                9: {
                    SHLOKA: ["Dharmo gneya(ha) sadachara(ha), Shruti-smrutyu-papaditaha |", "Mahatmyagnan-yugbhuri, Sneho bhaktishcha Madhave ||"],
                    REFERENCE: "Shikshapatri 103"
                },
                10: {
                    SHLOKA: ["Galidanam tadanam cha, Krutam kumatibhir-janaihi |", "Kshantavyam-eva sarvesham, Chintaniyam hitam cha taihi ||"],
                    REFERENCE: "Shikshapatri 201"
                },
                11: {
                    SHLOKA: ["Bhava-sambhava-bhiti-bhedanam, Sukha-sampat-karuna-niketanam |", "Vrata-dana-tapa(ha) kriya falam, Sahajananda gurum bhaje sada ||"],
                    REFERENCE: "Anonymous"
                },
                12: {
                    SHLOKA: ["Sharanagat papa-parvatam, Ganayitva na tadiya sadgunam |", "Anumapya-tulam hi manyate, Sahajananda gurum bhaje sada ||"],
                    REFERENCE: "Anonymous"
                },
                13: {
                    SHLOKA: ["Shrimad-sadguna-shalinam-chidachidi, Vyaptam cha divyakrutim", "Jiveshakshar-muktakoti-sukhadam, Naikavatar-adhipam |", "Gneyam Shri Purushottamm munivarair, Vedadi-kirtyam vibhum", "Tan-Mulakshar-yutam-eva, Sahajanandam cha vande sada ||"],
                    REFERENCE: "Anonymous"
                },
                14: {
                    SHLOKA: ["Yada yada hi dharmasya, Glanir bhavati Bharata |", "Abhyutthanam-adharmasya, Tadatmanam srujamyaham ||"],
                    REFERENCE: "Bhagvad Gita 4-7"
                },
                15: {
                    SHLOKA: ["Paritranaya sadhunam, Vinashaya cha dushkrutam |", "Dharma-sansthapan-arthaya, Sambhavami yuge yuge ||"],
                    REFERENCE: "Bhagvad Gita 4-8"
                },
                16: {
                    SHLOKA: ["Tadviddhi pranipatena, Pariprashnena sevaya |", "Upadekshyanti te gnanam, Gnaninas-tattva-darshinaha ||"],
                    REFERENCE: "Bhagvad Gita 4-34"
                },
                17: {
                    SHLOKA: ["Shraddhavan labhate gnanam, Tatpara(ha) saiyatendriyaha |", "Gnanam labdhava param shantim, Achiren-adhigachchhati ||"],
                    REFERENCE: "Bhagvad Gita 4-39"
                },
                18: {
                    SHLOKA: ["Daivi hyesham gunamayi, Mama maya duratyaya |", "Mameva ye prapadyante, Mayametam taranti te ||"],
                    REFERENCE: "Bhagvad Gita 3-14"
                },
                19: {
                    SHLOKA: ["Shravanm kirtanam Vishno(ho), Smaranam padasevanam |", "Archanam vandanam dasyam, Sakhyam atmanivedanam ||"],
                    REFERENCE: "Shrimad Bhagvat 7-5-23"
                },
                20: {
                    SHLOKA: ["Sadhavo hrudayam mahyam, Sadhunam hrudayam tvaham |", "Madanyat te na jananti, Naham tebhyo managapi ||"],
                    REFERENCE: "Shrimad Bhagvat 9-4-68"
                },
                21: {
                    SHLOKA: ["Ishavasyam-idam sarvam, Yatkincha jagatyam jagat |", "Tena tyaktena bhunjitaha, Ma grudha kasyasvid dhanam ||"],
                    REFERENCE: "Ishavasya Upanishad"
                },
                22: {
                    SHLOKA: ["Asato ma sad-gamay, Tamaso ma jyotir-gamaya |", "Mrutyor-mamrutam gamaya, Om shantihi shantihi shantihi ||"],
                    REFERENCE: "Anonymous"
                },
                23: {
                    SHLOKA: ["Mukam karoti vachalam, Pangum langhayate girim |", "Yatkrupa tam-aham vande, Paramanandam Madhavam ||"],
                    REFERENCE: "Anonymous"
                },
                24: {
                    SHLOKA: ["Bhaj govindam bhaj govindam, Govindam bhaj mudha-mate |", "Samprapte sannihite kale, Nahi nahi rakshati dukrunkarane ||"],
                    REFERENCE: "Anonymous"
                },
                25: {
                    SHLOKA: ["Punarapi jananam punarapi maranam Punarapi janani jathare shayanam |", "Iha sansare bahu dustare Krupaya pare pahi Murare ||"],
                    REFERENCE: "Charpat Panjari"
                },
                26: {
                    SHLOKA: ["Ganga papam shashi tapam, Dainyam kalpatarus-tatha |", "Papam tapam cha dainyam cha, Ghnanti santo mahashayaha ||"],
                    REFERENCE: "Anonymous"
                },
                27: {
                    SHLOKA: ["Shri Vasudeva-vimalamruta-dhamavasam Narayanam narakatarananama-dheyam |", "Shyamam sitam dvibhujam-eva chaturbhujam cha Tvam Bhakti-Dharma-tanayam sharanam prapadye ||"],
                    REFERENCE: "Anonymous"
                },
                28: {
                    SHLOKA: ["Varnivesha-ramaniya-darshanam, Mandahasa-ruchiranan-ambujam |", "Pujitam sura-narottamair-muda, Dharma-nandanam-aham vichintaye ||"],
                    REFERENCE: "Anonymous"
                },
                29: {
                    SHLOKA: ["Vande Shri Purushottamam cha paraman, Dhamaksharam gnanadam,", "Vande Pragaji Bhaktam-eva-managham, Brahmaswarupam muda |", "Vande Yagnapurushdas charanam, Shri-Yogirajam tatha,", "Vande Shri Pramukham gunalaya-gurum, Mokshaya bhaktya sada ||"],
                    REFERENCE: "Anonymous"
                },
                30: {
                    SHLOKA: ["Brahmanandam param sukhadam, Kevalam gnana-murtim,", "Dvandvatitam gagana-sadrusham, Tattvamasyadi lakshanam |", "Ekam nityam vimalam-achalam, Sarvadhi-sakshibhutam,", "Bhavatitam triguna-rahitam, Sadgurum tam namami ||"],
                    REFERENCE: "Anonymous"
                },
                31: {
                    SHLOKA: ["Paritranaya sadhunam, Vinashaya cha dushkrutam |", "Dharma-sansthapan-arthaya, Sambhavami yuge yuge ||"],
                    REFERENCE: "Bhagvad Gita 4-8"
                }
            });
        e.exports = n
    }, {
        "./Constants": 14
    }],
    20: [function(a, e) {
        "use strict";
        var t = {
            componentDidMount: function() {
                var a = this;
                this._listen().forEach(function(e) {
                    e.addChangeListener(a._onChange)
                })
            },
            componentWillUnmount: function() {
                var a = this;
                this._listen().forEach(function(e) {
                    e.removeChangeListener(a._onChange)
                })
            }
        };
        e.exports = t
    }, {}],
    21: [function(a, e) {
        "use strict";
        var t = a("./Constants"),
            n = (t.QuoteTypes.VATO, t.QuoteTypes.REFERENCE, {
                1: {
                    VATO: ["Nitye lakh rupiya lave ne Satsangnu ghasatu bolato hoy to te mane na game ne suta suta khay pan Bhagwanna bhaktanu saru bolato hoy to teni chakari hu karavu, evo maro swabhav chee."],
                    REFERENCE: "Swamini Vat 1/237"
                },
                2: {
                    VATO: ["Seva to potani shraddha pramane thay te karavi, pan aseva to na ja karvi. Te aseva te shu je, avagun levo."],
                    REFERENCE: "Swamini Vat 2/132"
                },
                3: {
                    VATO: ["Apano janma be vat sadhava saru thayo chhe, tema ek Aksharrup thavu, ema deh antarayrup chhe; ne biju Bhagvanma jodavu, tema sang anek prakarna antarayrup chhe. E be khot talavi."],
                    REFERENCE: "Swamini Vat 4/99"
                },
                4: {
                    VATO: ["Jene Bhagwan bhajava hoi tenathi badhayni marji rakhi shakay nahi, tenathi to Bhagwanni marji sachavay."],
                    REFERENCE: "Swamini Vat 5/59"
                },
                5: {
                    VATO: ["Bhagwane kahyu chhe je, 'Jevo hu satsange karine vash thau chhu evo tap, yagna, yog, vrat, danadik sadhane karine pan vash nathi thato.' Te satsang te shu je? 'Mota Ekantikne hath jodavu ne te kahe tem karvu e ja chhe.'"],
                    REFERENCE: "Swamini Vat 1/17"
                },
                6: {
                    VATO: ["Manne dharye bhajan-bhakti vagere kare chhe tema antare shanti nahi, pan Bhagwan ne Sadhuna kahya pramane kare to shanti thay chhe."],
                    REFERENCE: "Swamini Vat 5/45"
                },
                7: {
                    VATO: ["Jevo bijane samajavavano agrah chhe, evo potane samajavano hoi; ane jevo bijana dosh jovano agrah chhe, evo potana dosh talvano hoi to kai kasar rahe ja nahi."],
                    REFERENCE: "Swamini Vat 2/61"
                },
                8: {
                    VATO: ["Bhagwan maliya pachhi karvanu e chhe je, janpanarup daravaje rahevu tatha sang olakhvo tatha hath, man ne irshya na rakhavi."],
                    REFERENCE: "Swamini Vat 5/1"
                },
                9: {
                    VATO: ["Nirantar sarve kriyama pachhu valine jovu je, mare Bhagwan bhajava chhe ne hu shu karu chhu? Em joya karavu."],
                    REFERENCE: "Swamini Vat 2/35"
                },
                10: {
                    VATO: ["Jo mar mar karto koi avto hoi to em samajvu je, 'Mara Swaminu ja karyu sarve thay chhe, pan te vina koinu halavyu pandadu pan haltu nathi.'"],
                    REFERENCE: "Swamini Vat 1/88"
                },
                11: {
                    VATO: ["Bajaro khavo ne Prabhu bhajava, biju kai karvu nathi ne rotala to Bhagwanne deva chhe, Sadhune deva chhe, te deshe, deshe, ne deshe."],
                    REFERENCE: "Swamini Vat 1/26"
                },
                12: {
                    VATO: ["Sarva-karta Bhagwan chhe. Hamna apane unghma javu hoy to javai nahi ne unghma gaya hoie ne pachhi chor avine lunti jai pan apanathi jagay nahi. Mate sarva-karta to Bhagwan chhe."],
                    REFERENCE: "Swamini Vat 1/201"
                },
                13: {
                    VATO: ["Ardho-ardha katha-vartano jog rakhshe to tenu saru raheshe ane a to mota karkhana thaya te kai khute em to chhe nahi."],
                    REFERENCE: "Swamini Vat 2/51"
                },
                14: {
                    VATO: ["Jem jem vat sambhale tem tem antahkaran sudhha thay chhe, ne jem jem antahkaran sudhha thay tem tem vat samjay ne sukh pan thay."],
                    REFERENCE: "Swamini Vat 2/108"
                },
                15: {
                    VATO: ["Karod kam bagadine pan ek moksha sudharvo ne kadapi karod kam sudharya ne ek moksha bagadiyo to tema shu karyu?"],
                    REFERENCE: "Swamini Vat 1/14"
                },
                16: {
                    VATO: ["Apane janie chhie je, apanne Bhagwanma het chhe pan apana karta to apana upar Bhagwanne ne Sadhune jhaju het chhe."],
                    REFERENCE: "Swamini Vat 1/196"
                },
                17: {
                    VATO: ["Koti tap karine, koti jap karine, koti vrat karine, koti dan karine ne koti yagna karine pan je Bhagwanne ne Sadhune pamava hata te aj apanane malya chhe."],
                    REFERENCE: "Swamini Vat 1/294"
                },
                18: {
                    VATO: ["A satsang malyo chhe e to param chintamani mali chhe, tema jiv bahu vruddhine pame chhe."],
                    REFERENCE: "Swamini Vat 1/166"
                },
                19: {
                    VATO: ["Munzavan ave to kem karvu? E prashna puchhyo, teno uttar karyo je, 'Swaminarayan, Swaminarayan' bhajan karvu tethi munzavan tali jay."],
                    REFERENCE: "Swamini Vat 1/272"
                },
                20: {
                    VATO: ["Koi Bhagwan sambhare teni seva mare karavavi, tena lugada mare dhovaravava ne tene mare betha betha khava devu chhe."],
                    REFERENCE: "Swamini Vat 1/276"
                },
                21: {
                    VATO: ["Satya, hit ne priya evu vachan bolavu ne upeksharahit bolvu pan agrahthi vachan kehvu nahi."],
                    REFERENCE: "Swamini Vat 5/163"
                },
                22: {
                    VATO: ["Nirantar mandirnu kam karya kare to pan gnan vruddhi pame nahi ne gnan to sadhu-samagamthi ja thay."],
                    REFERENCE: "Swamini Vat 1/53"
                },
                23: {
                    VATO: ["Koti janme kasar talavani hoy te aj tali jay ne brahmarup kari mukee, jo kharekhara sadhu male ne te kahe tem kare to."],
                    REFERENCE: "Swamini Vat 1/119"
                },
                24: {
                    VATO: ["Jetalu kai mayama sukh chhe te dukh vinanu hoi nahi, e vat pan ek jani rakhvi"],
                    REFERENCE: "Swamini Vat 1/25"
                },
                25: {
                    VATO: ["Ava sadhu khasada mare to pan Akshardhamma lai jay ne bija mashruna gadlama suvadi muke to pan narak ma nakhe em samajvu."],
                    REFERENCE: "Swamini Vat 1/57"
                },
                26: {
                    VATO: ["Ekantik Sadhu vina bija koine jivnu sachu het karata avade nahi; ne bija to het kare te indriyunu poshan kare, tema to mulagu avalu thay."],
                    REFERENCE: "Swamini Vat 2/91"
                },
                27: {
                    VATO: ["Ek ruchi vala be ja hoie to hajaro ne lakho chhie ne te vina to hajaro ne lakho hoi to pan ekala ja chhie em samajavu."],
                    REFERENCE: "Swamini Vat 1/334"
                },
                28: {
                    VATO: ["Mota pase nishkapat thavama bahu labh chhe. Te ek janne rup dekhai gaayu teno akar bandhai gayo. Pachhi tene mota sant pase kahyu, tyare te sante Maharajni stuti karine tali nakhyu."],
                    REFERENCE: "Swamini Vat 2/127"
                },
                29: {
                    VATO: ["Shravan Vadi Chhathne divase vat kari je, 'Biju badhu Bhagwan kare pan je bhajan ne niyam palava e be to koine na kari ape, e to potane ja karavu pade, te jo kare to thay.'"],
                    REFERENCE: "Swamini Vat 2/255"
                },
                30: {
                    VATO: ["Deh mukine pamava chhe te ja a pragat vatu kare chhe, pan em sarvene samajay nahi. Ane je tyag-vairagyani vatu karie chhie, te to marge chadavava saru karie chhie, pan samajavanu atalu ja chhe."],
                    REFERENCE: "Swamini Vat 1/263"
                },
                31: {
                    VATO: ["Antarma tadhu rahya kare ne dhagi na jay tena be upay chhe; ek to Bhagwannu bhajan karavu ne biju Bhagwanne sarva-karta samajava ne tema sukh ave to sukh bhogavi levu ne dukh ave to dukh bhogavi levu. Te kahyu chhe je, Dasana dushman Hari ke'di hoy nahi, jem karashe tem sukh ja thashe."],
                    REFERENCE: "Swamini Vat 1/148"
                }
            });
        e.exports = n
    }, {
        "./Constants": 14
    }],
    22: [function(a, e) {
        "use strict";

        function t(a) {
            return "object" == typeof a ? Object.keys(a).filter(function(e) {
                return a[e]
            }).join(" ") : Array.prototype.join.call(arguments, " ")
        }
        e.exports = t
    }, {}],
    23: [function(a, e) {
        function t() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function n(a) {
            return "function" == typeof a
        }

        function r(a) {
            return "number" == typeof a
        }

        function i(a) {
            return "object" == typeof a && null !== a
        }

        function o(a) {
            return void 0 === a
        }
        e.exports = t, t.EventEmitter = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(a) {
            if (!r(a) || 0 > a || isNaN(a)) throw TypeError("n must be a positive number");
            return this._maxListeners = a, this
        }, t.prototype.emit = function(a) {
            var e, t, r, h, u, s;
            if (this._events || (this._events = {}), "error" === a && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if (e = arguments[1], e instanceof Error) throw e;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (t = this._events[a], o(t)) return !1;
            if (n(t)) switch (arguments.length) {
                case 1:
                    t.call(this);
                    break;
                case 2:
                    t.call(this, arguments[1]);
                    break;
                case 3:
                    t.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for (r = arguments.length, h = new Array(r - 1), u = 1; r > u; u++) h[u - 1] = arguments[u];
                    t.apply(this, h)
            } else if (i(t)) {
                for (r = arguments.length, h = new Array(r - 1), u = 1; r > u; u++) h[u - 1] = arguments[u];
                for (s = t.slice(), r = s.length, u = 0; r > u; u++) s[u].apply(this, h)
            }
            return !0
        }, t.prototype.addListener = function(a, e) {
            var r;
            if (!n(e)) throw TypeError("listener must be a function");
            if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", a, n(e.listener) ? e.listener : e), this._events[a] ? i(this._events[a]) ? this._events[a].push(e) : this._events[a] = [this._events[a], e] : this._events[a] = e, i(this._events[a]) && !this._events[a].warned) {
                var r;
                r = o(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[a].length > r && (this._events[a].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), "function" == typeof console.trace && console.trace())
            }
            return this
        }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(a, e) {
            function t() {
                this.removeListener(a, t), r || (r = !0, e.apply(this, arguments))
            }
            if (!n(e)) throw TypeError("listener must be a function");
            var r = !1;
            return t.listener = e, this.on(a, t), this
        }, t.prototype.removeListener = function(a, e) {
            var t, r, o, h;
            if (!n(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[a]) return this;
            if (t = this._events[a], o = t.length, r = -1, t === e || n(t.listener) && t.listener === e) delete this._events[a], this._events.removeListener && this.emit("removeListener", a, e);
            else if (i(t)) {
                for (h = o; h-- > 0;)
                    if (t[h] === e || t[h].listener && t[h].listener === e) {
                        r = h;
                        break
                    }
                if (0 > r) return this;
                1 === t.length ? (t.length = 0, delete this._events[a]) : t.splice(r, 1), this._events.removeListener && this.emit("removeListener", a, e)
            }
            return this
        }, t.prototype.removeAllListeners = function(a) {
            var e, t;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[a] && delete this._events[a], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (t = this._events[a], n(t)) this.removeListener(a, t);
            else
                for (; t.length;) this.removeListener(a, t[t.length - 1]);
            return delete this._events[a], this
        }, t.prototype.listeners = function(a) {
            var e;
            return e = this._events && this._events[a] ? n(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
        }, t.listenerCount = function(a, e) {
            var t;
            return t = a._events && a._events[e] ? n(a._events[e]) ? 1 : a._events[e].length : 0
        }
    }, {}],
    24: [function(a, e, t) {
        (function(a) {
            function e(a, e) {
                for (var t = 0, n = a.length - 1; n >= 0; n--) {
                    var r = a[n];
                    "." === r ? a.splice(n, 1) : ".." === r ? (a.splice(n, 1), t++) : t && (a.splice(n, 1), t--)
                }
                if (e)
                    for (; t--; t) a.unshift("..");
                return a
            }

            function n(a, e) {
                if (a.filter) return a.filter(e);
                for (var t = [], n = 0; n < a.length; n++) e(a[n], n, a) && t.push(a[n]);
                return t
            }
            var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                i = function(a) {
                    return r.exec(a).slice(1)
                };
            t.resolve = function() {
                for (var t = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                    var o = i >= 0 ? arguments[i] : a.cwd();
                    if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                    o && (t = o + "/" + t, r = "/" === o.charAt(0))
                }
                return t = e(n(t.split("/"), function(a) {
                    return !!a
                }), !r).join("/"), (r ? "/" : "") + t || "."
            }, t.normalize = function(a) {
                var r = t.isAbsolute(a),
                    i = "/" === o(a, -1);
                return a = e(n(a.split("/"), function(a) {
                    return !!a
                }), !r).join("/"), a || r || (a = "."), a && i && (a += "/"), (r ? "/" : "") + a
            }, t.isAbsolute = function(a) {
                return "/" === a.charAt(0)
            }, t.join = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return t.normalize(n(a, function(a) {
                    if ("string" != typeof a) throw new TypeError("Arguments to path.join must be strings");
                    return a
                }).join("/"))
            }, t.relative = function(a, e) {
                function n(a) {
                    for (var e = 0; e < a.length && "" === a[e]; e++);
                    for (var t = a.length - 1; t >= 0 && "" === a[t]; t--);
                    return e > t ? [] : a.slice(e, t - e + 1)
                }
                a = t.resolve(a).substr(1), e = t.resolve(e).substr(1);
                for (var r = n(a.split("/")), i = n(e.split("/")), o = Math.min(r.length, i.length), h = o, u = 0; o > u; u++)
                    if (r[u] !== i[u]) {
                        h = u;
                        break
                    }
                for (var s = [], u = h; u < r.length; u++) s.push("..");
                return s = s.concat(i.slice(h)), s.join("/")
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(a) {
                var e = i(a),
                    t = e[0],
                    n = e[1];
                return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : "."
            }, t.basename = function(a, e) {
                var t = i(a)[2];
                return e && t.substr(-1 * e.length) === e && (t = t.substr(0, t.length - e.length)), t
            }, t.extname = function(a) {
                return i(a)[3]
            };
            var o = "b" === "ab".substr(-1) ? function(a, e, t) {
                return a.substr(e, t)
            } : function(a, e, t) {
                return 0 > e && (e = a.length + e), a.substr(e, t)
            }
        }).call(this, a("_process"))
    }, {
        _process: 25
    }],
    25: [function(a, e) {
        function t() {}
        var n = e.exports = {};
        n.nextTick = function() {
            var a = "undefined" != typeof window && window.setImmediate,
                e = "undefined" != typeof window && window.MutationObserver,
                t = "undefined" != typeof window && window.postMessage && window.addEventListener;
            if (a) return function(a) {
                return window.setImmediate(a)
            };
            var n = [];
            if (e) {
                var r = document.createElement("div"),
                    i = new MutationObserver(function() {
                        var a = n.slice();
                        n.length = 0, a.forEach(function(a) {
                            a()
                        })
                    });
                return i.observe(r, {
                        attributes: !0
                    }),
                    function(a) {
                        n.length || r.setAttribute("yes", "no"), n.push(a)
                    }
            }
            return t ? (window.addEventListener("message", function(a) {
                var e = a.source;
                if ((e === window || null === e) && "process-tick" === a.data && (a.stopPropagation(), n.length > 0)) {
                    var t = n.shift();
                    t()
                }
            }, !0), function(a) {
                n.push(a), window.postMessage("process-tick", "*")
            }) : function(a) {
                setTimeout(a, 0)
            }
        }(), n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.on = t, n.addListener = t, n.once = t, n.off = t, n.removeListener = t, n.removeAllListeners = t, n.emit = t, n.binding = function() {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function() {
            throw new Error("process.chdir is not supported")
        }
    }, {}],
    26: [function(a) {
        (function(e, t) {
            ! function(a) {
                "use strict";

                function e(a) {
                    return {
                        configurable: !0,
                        enumerable: !1,
                        value: a,
                        writable: !0
                    }
                }

                function t() {
                    return "__$" + Math.floor(1e9 * Math.random()) + "$" + ++J + "$__"
                }

                function n(a) {
                    return Y[a]
                }

                function r() {
                    var a = t();
                    return Y[a] = !0, a
                }

                function i(a) {
                    return "object" == typeof a && a instanceof u
                }

                function o(a) {
                    return i(a) ? "symbol" : typeof a
                }

                function h(a) {
                    var e = new u(a);
                    if (!(this instanceof h)) return e;
                    throw new TypeError("Symbol cannot be new'ed")
                }

                function u(a) {
                    var e = t();
                    P(this, Q, {
                        value: this
                    }), P(this, U, {
                        value: e
                    }), P(this, $, {
                        value: a
                    }), c(this), Z[e] = this
                }

                function s(a) {
                    var e = a[W];
                    return e && e.self === a ? e : G(a) ? (z.hash.value = X++, z.self.value = a, q.value = C(null, z), P(a, W, q), q.value) : void 0
                }

                function c(a) {
                    return s(a), K.apply(this, arguments)
                }

                function m(a) {
                    return s(a), V.apply(this, arguments)
                }

                function l(a) {
                    return s(a), x.apply(this, arguments)
                }

                function v(a) {
                    return Z[a] || Y[a]
                }

                function p(a) {
                    return i(a) ? a[U] : a
                }

                function d(a) {
                    for (var e = [], t = 0; t < a.length; t++) v(a[t]) || e.push(a[t]);
                    return e
                }

                function y(a) {
                    return d(F(a))
                }

                function E(a) {
                    return d(B(a))
                }

                function f(a) {
                    for (var e = [], t = F(a), n = 0; n < t.length; n++) {
                        var r = Z[t[n]];
                        r && e.push(r)
                    }
                    return e
                }

                function g(a, e) {
                    return L(a, p(e))
                }

                function k(a) {
                    return H.call(this, p(a))
                }

                function b(e) {
                    return a.traceur && a.traceur.options[e]
                }

                function j(a, e, t) {
                    return i(e) && (e = e[U]), P(a, e, t), a
                }

                function S(a) {
                    P(a, "defineProperty", {
                        value: j
                    }), P(a, "getOwnPropertyNames", {
                        value: y
                    }), P(a, "getOwnPropertyDescriptor", {
                        value: g
                    }), P(a.prototype, "hasOwnProperty", {
                        value: k
                    }), P(a, "freeze", {
                        value: c
                    }), P(a, "preventExtensions", {
                        value: m
                    }), P(a, "seal", {
                        value: l
                    }), P(a, "keys", {
                        value: E
                    })
                }

                function R(a) {
                    for (var e = 1; e < arguments.length; e++)
                        for (var t = F(arguments[e]), n = 0; n < t.length; n++) {
                            var r = t[n];
                            v(r) || ! function(e, t) {
                                P(a, t, {
                                    get: function() {
                                        return e[t]
                                    },
                                    enumerable: !0
                                })
                            }(arguments[e], t[n])
                        }
                    return a
                }

                function T(a) {
                    return null != a && ("object" == typeof a || "function" == typeof a)
                }

                function w(a) {
                    if (null == a) throw M();
                    return N(a)
                }

                function A(a) {
                    if (null == a) throw new TypeError("Value cannot be converted to an Object");
                    return a
                }

                function O(a, e) {
                    a.Symbol || (a.Symbol = e, Object.getOwnPropertySymbols = f), a.Symbol.iterator || (a.Symbol.iterator = e("Symbol.iterator"))
                }

                function I(a) {
                    O(a, h), a.Reflect = a.Reflect || {}, a.Reflect.global = a.Reflect.global || a, S(a.Object)
                }
                if (!a.$traceurRuntime) {
                    var N = Object,
                        M = TypeError,
                        C = N.create,
                        _ = N.defineProperties,
                        P = N.defineProperty,
                        K = N.freeze,
                        L = N.getOwnPropertyDescriptor,
                        F = N.getOwnPropertyNames,
                        B = N.keys,
                        H = N.prototype.hasOwnProperty,
                        V = (N.prototype.toString, Object.preventExtensions),
                        x = Object.seal,
                        G = Object.isExtensible,
                        D = e,
                        J = 0,
                        U = t(),
                        $ = t(),
                        Q = t(),
                        Z = C(null),
                        Y = C(null);
                    P(h.prototype, "constructor", e(h)), P(h.prototype, "toString", D(function() {
                        var a = this[Q];
                        if (!b("symbols")) return a[U];
                        if (!a) throw TypeError("Conversion from symbol to string");
                        var e = a[$];
                        return void 0 === e && (e = ""), "Symbol(" + e + ")"
                    })), P(h.prototype, "valueOf", D(function() {
                        var a = this[Q];
                        if (!a) throw TypeError("Conversion from symbol to string");
                        return b("symbols") ? a : a[U]
                    })), P(u.prototype, "constructor", e(h)), P(u.prototype, "toString", {
                        value: h.prototype.toString,
                        enumerable: !1
                    }), P(u.prototype, "valueOf", {
                        value: h.prototype.valueOf,
                        enumerable: !1
                    });
                    var W = r(),
                        q = {
                            value: void 0
                        },
                        z = {
                            hash: {
                                value: void 0
                            },
                            self: {
                                value: void 0
                            }
                        },
                        X = 0;
                    c(u.prototype), I(a), a.$traceurRuntime = {
                        checkObjectCoercible: A,
                        createPrivateName: r,
                        defineProperties: _,
                        defineProperty: P,
                        exportStar: R,
                        getOwnHashObject: s,
                        getOwnPropertyDescriptor: L,
                        getOwnPropertyNames: F,
                        isObject: T,
                        isPrivateName: n,
                        isSymbolString: v,
                        keys: B,
                        setupGlobals: I,
                        toObject: w,
                        toProperty: p,
                        "typeof": o
                    }
                }
            }("undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : this),
            function() {
                "use strict";

                function e(e, n) {
                    function r(a) {
                        return "/" === a.slice(-1)
                    }

                    function i(a) {
                        return "/" === a[0]
                    }

                    function o(a) {
                        return "." === a[0]
                    }
                    return t = t || "undefined" != typeof a && a("path"), r(n) || i(n) ? void 0 : o(n) ? a(t.resolve(t.dirname(e), n)) : a(n)
                }
                var t;
                $traceurRuntime.require = e
            }(),
            function() {
                "use strict";

                function a() {
                    for (var a, e = [], t = 0, n = 0; n < arguments.length; n++) {
                        var r = $traceurRuntime.checkObjectCoercible(arguments[n]);
                        if ("function" != typeof r[$traceurRuntime.toProperty(Symbol.iterator)]) throw new TypeError("Cannot spread non-iterable object.");
                        for (var i = r[$traceurRuntime.toProperty(Symbol.iterator)](); !(a = i.next()).done;) e[t++] = a.value
                    }
                    return e
                }
                $traceurRuntime.spread = a
            }(),
            function() {
                "use strict";

                function a(a, e) {
                    var t = d(a);
                    do {
                        var n = p(t, e);
                        if (n) return n;
                        t = d(t)
                    } while (t);
                    return void 0
                }

                function e(a) {
                    return a.__proto__
                }

                function t(a, e, t, r) {
                    return n(a, e, t).apply(a, r)
                }

                function n(e, t, n) {
                    var r = a(t, n);
                    return r ? r.get ? r.get.call(e) : r.value : void 0
                }

                function r(e, t, n, r) {
                    var i = a(t, n);
                    if (i && i.set) return i.set.call(e, r), r;
                    throw c("super has no setter '" + n + "'.")
                }

                function i(a) {
                    for (var e = {}, t = E(a), n = 0; n < t.length; n++) {
                        var r = t[n];
                        e[r] = p(a, r)
                    }
                    for (var i = f(a), n = 0; n < i.length; n++) {
                        var o = i[n];
                        e[$traceurRuntime.toProperty(o)] = p(a, $traceurRuntime.toProperty(o))
                    }
                    return e
                }

                function o(a, e, t, n) {
                    return v(e, "constructor", {
                        value: a,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    }), arguments.length > 3 ? ("function" == typeof n && (a.__proto__ = n), a.prototype = m(h(n), i(e))) : a.prototype = e, v(a, "prototype", {
                        configurable: !1,
                        writable: !1
                    }), l(a, i(t))
                }

                function h(a) {
                    if ("function" == typeof a) {
                        var e = a.prototype;
                        if (s(e) === e || null === e) return a.prototype;
                        throw new c("super prototype must be an Object or null")
                    }
                    if (null === a) return null;
                    throw new c("Super expression must either be null or a function, not " + typeof a + ".")
                }

                function u(a, e, n) {
                    null !== d(e) && t(a, e, "constructor", n)
                }
                var s = Object,
                    c = TypeError,
                    m = s.create,
                    l = $traceurRuntime.defineProperties,
                    v = $traceurRuntime.defineProperty,
                    p = $traceurRuntime.getOwnPropertyDescriptor,
                    d = ($traceurRuntime.getOwnPropertyNames, Object.getPrototypeOf),
                    y = Object,
                    E = y.getOwnPropertyNames,
                    f = y.getOwnPropertySymbols;
                $traceurRuntime.createClass = o, $traceurRuntime.defaultSuperCall = u, $traceurRuntime.superCall = t, $traceurRuntime.superConstructor = e, $traceurRuntime.superGet = n, $traceurRuntime.superSet = r
            }(),
            function() {
                "use strict";

                function a(a) {
                    return {
                        configurable: !0,
                        enumerable: !1,
                        value: a,
                        writable: !0
                    }
                }

                function e(a) {
                    return new Error("Traceur compiler bug: invalid state in state machine: " + a)
                }

                function t() {
                    this.state = 0, this.GState = E, this.storedException = void 0, this.finallyFallThrough = void 0, this.sent_ = void 0, this.returnValue = void 0, this.tryStack_ = []
                }

                function n(a, e, t, n) {
                    switch (a.GState) {
                        case f:
                            throw new Error('"' + t + '" on executing generator');
                        case k:
                            if ("next" == t) return {
                                value: void 0,
                                done: !0
                            };
                            throw n;
                        case E:
                            if ("throw" === t) throw a.GState = k, n;
                            if (void 0 !== n) throw y("Sent value to newborn generator");
                        case g:
                            a.GState = f, a.action = t, a.sent = n;
                            var r = e(a),
                                i = r === a;
                            return i && (r = a.returnValue), a.GState = i ? k : g, {
                                value: r,
                                done: i
                            }
                    }
                }

                function r() {}

                function i() {}

                function o(a, e, n) {
                    var r = c(a, n),
                        i = new t,
                        o = d(e.prototype);
                    return o[S] = i, o[R] = r, o
                }

                function h(a) {
                    return a.prototype = d(i.prototype), a.__proto__ = i, a
                }

                function u() {
                    t.call(this), this.err = void 0;
                    var a = this;
                    a.result = new Promise(function(e, t) {
                        a.resolve = e, a.reject = t
                    })
                }

                function s(a, e) {
                    var t = c(a, e),
                        n = new u;
                    return n.createCallback = function(a) {
                        return function(e) {
                            n.state = a, n.value = e, t(n)
                        }
                    }, n.errback = function(a) {
                        m(n, a), t(n)
                    }, t(n), n.result
                }

                function c(a, e) {
                    return function(t) {
                        for (;;) try {
                            return a.call(e, t)
                        } catch (n) {
                            m(t, n)
                        }
                    }
                }

                function m(a, e) {
                    a.storedException = e;
                    var t = a.tryStack_[a.tryStack_.length - 1];
                    return t ? (a.state = void 0 !== t.catch ? t.catch : t.finally, void 0 !== t.finallyFallThrough && (a.finallyFallThrough = t.finallyFallThrough), void 0) : (a.handleException(e), void 0)
                }
                if ("object" != typeof $traceurRuntime) throw new Error("traceur runtime not found.");
                var l = $traceurRuntime.createPrivateName,
                    v = $traceurRuntime.defineProperties,
                    p = $traceurRuntime.defineProperty,
                    d = Object.create,
                    y = TypeError,
                    E = 0,
                    f = 1,
                    g = 2,
                    k = 3,
                    b = -2,
                    j = -3;
                t.prototype = {
                    pushTry: function(a, e) {
                        if (null !== e) {
                            for (var t = null, n = this.tryStack_.length - 1; n >= 0; n--)
                                if (void 0 !== this.tryStack_[n].catch) {
                                    t = this.tryStack_[n].catch;
                                    break
                                }
                            null === t && (t = j), this.tryStack_.push({
                                "finally": e,
                                finallyFallThrough: t
                            })
                        }
                        null !== a && this.tryStack_.push({
                            "catch": a
                        })
                    },
                    popTry: function() {
                        this.tryStack_.pop()
                    },
                    get sent() {
                        return this.maybeThrow(), this.sent_
                    },
                    set sent(a) {
                        this.sent_ = a
                    },
                    get sentIgnoreThrow() {
                        return this.sent_
                    },
                    maybeThrow: function() {
                        if ("throw" === this.action) throw this.action = "next", this.sent_
                    },
                    end: function() {
                        switch (this.state) {
                            case b:
                                return this;
                            case j:
                                throw this.storedException;
                            default:
                                throw e(this.state)
                        }
                    },
                    handleException: function(a) {
                        throw this.GState = k, this.state = b, a
                    }
                };
                var S = l(),
                    R = l();
                r.prototype = i, p(i, "constructor", a(r)), i.prototype = {
                    constructor: i,
                    next: function(a) {
                        return n(this[S], this[R], "next", a)
                    },
                    "throw": function(a) {
                        return n(this[S], this[R], "throw", a)
                    }
                }, v(i.prototype, {
                    constructor: {
                        enumerable: !1
                    },
                    next: {
                        enumerable: !1
                    },
                    "throw": {
                        enumerable: !1
                    }
                }), Object.defineProperty(i.prototype, Symbol.iterator, a(function() {
                    return this
                })), u.prototype = d(t.prototype), u.prototype.end = function() {
                    switch (this.state) {
                        case b:
                            this.resolve(this.returnValue);
                            break;
                        case j:
                            this.reject(this.storedException);
                            break;
                        default:
                            this.reject(e(this.state))
                    }
                }, u.prototype.handleException = function() {
                    this.state = j
                }, $traceurRuntime.asyncWrap = s, $traceurRuntime.initGeneratorFunction = h, $traceurRuntime.createGeneratorInstance = o
            }(),
            function() {
                function a(a, e, t, n, r, i, o) {
                    var h = [];
                    return a && h.push(a, ":"), t && (h.push("//"), e && h.push(e, "@"), h.push(t), n && h.push(":", n)), r && h.push(r), i && h.push("?", i), o && h.push("#", o), h.join("")
                }

                function e(a) {
                    return a.match(h)
                }

                function t(a) {
                    if ("/" === a) return "/";
                    for (var e = "/" === a[0] ? "/" : "", t = "/" === a.slice(-1) ? "/" : "", n = a.split("/"), r = [], i = 0, o = 0; o < n.length; o++) {
                        var h = n[o];
                        switch (h) {
                            case "":
                            case ".":
                                break;
                            case "..":
                                r.length ? r.pop() : i++;
                                break;
                            default:
                                r.push(h)
                        }
                    }
                    if (!e) {
                        for (; i-- > 0;) r.unshift("..");
                        0 === r.length && r.push(".")
                    }
                    return e + r.join("/") + t
                }

                function n(e) {
                    var n = e[u.PATH] || "";
                    return n = t(n), e[u.PATH] = n, a(e[u.SCHEME], e[u.USER_INFO], e[u.DOMAIN], e[u.PORT], e[u.PATH], e[u.QUERY_DATA], e[u.FRAGMENT])
                }

                function r(a) {
                    var t = e(a);
                    return n(t)
                }

                function i(a, t) {
                    var r = e(t),
                        i = e(a);
                    if (r[u.SCHEME]) return n(r);
                    r[u.SCHEME] = i[u.SCHEME];
                    for (var o = u.SCHEME; o <= u.PORT; o++) r[o] || (r[o] = i[o]);
                    if ("/" == r[u.PATH][0]) return n(r);
                    var h = i[u.PATH],
                        s = h.lastIndexOf("/");
                    return h = h.slice(0, s + 1) + r[u.PATH], r[u.PATH] = h, n(r)
                }

                function o(a) {
                    if (!a) return !1;
                    if ("/" === a[0]) return !0;
                    var t = e(a);
                    return t[u.SCHEME] ? !0 : !1
                }
                var h = new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
                    u = {
                        SCHEME: 1,
                        USER_INFO: 2,
                        DOMAIN: 3,
                        PORT: 4,
                        PATH: 5,
                        QUERY_DATA: 6,
                        FRAGMENT: 7
                    };
                $traceurRuntime.canonicalizeUrl = r, $traceurRuntime.isAbsolute = o, $traceurRuntime.removeDotSegments = t, $traceurRuntime.resolveUrl = i
            }(),
            function() {
                "use strict";

                function a(a) {
                    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                    var i = n,
                        o = $traceurRuntime.getOwnHashObject(a).hash;
                    i[o] || (i[o] = Object.create(null)), i = i[o];
                    for (var h = 0; h < e.length - 1; h++) o = $traceurRuntime.getOwnHashObject(e[h]).hash, i[o] || (i[o] = Object.create(null)), i = i[o];
                    var u = e[e.length - 1];
                    return o = $traceurRuntime.getOwnHashObject(u).hash, i[o] || (i[o] = new t(a, e)), i[o]
                }
                var e = {
                        any: {
                            name: "any"
                        },
                        "boolean": {
                            name: "boolean"
                        },
                        number: {
                            name: "number"
                        },
                        string: {
                            name: "string"
                        },
                        symbol: {
                            name: "symbol"
                        },
                        "void": {
                            name: "void"
                        }
                    },
                    t = function(a, e) {
                        this.type = a, this.argumentTypes = e
                    };
                $traceurRuntime.createClass(t, {}, {});
                var n = Object.create(null);
                $traceurRuntime.GenericType = t, $traceurRuntime.genericType = a, $traceurRuntime.type = e
            }(),
            function(a) {
                "use strict";

                function e(a, e) {
                    var t = [],
                        n = e - 3;
                    0 > n && (n = 0);
                    for (var r = n; e > r; r++) t.push(a[r]);
                    return t
                }

                function t(a, e) {
                    var t = e + 1;
                    t > a.length - 1 && (t = a.length - 1);
                    for (var n = [], r = e; t >= r; r++) n.push(a[r]);
                    return n
                }

                function n(a) {
                    for (var e = "", t = 0; a - 1 > t; t++) e += "-";
                    return e
                }

                function r(a) {
                    if (a) {
                        var e = g.normalize(a);
                        return m[e]
                    }
                }

                function i(a) {
                    var e = arguments[1],
                        t = Object.create(null);
                    return Object.getOwnPropertyNames(a).forEach(function(n) {
                        var r, i;
                        if (e === f) {
                            var o = Object.getOwnPropertyDescriptor(a, n);
                            o.get && (r = o.get)
                        }
                        r || (i = a[n], r = function() {
                            return i
                        }), Object.defineProperty(t, n, {
                            get: r,
                            enumerable: !0
                        })
                    }), Object.preventExtensions(t), t
                }
                var o, h = $traceurRuntime,
                    u = h.canonicalizeUrl,
                    s = h.resolveUrl,
                    c = h.isAbsolute,
                    m = Object.create(null);
                o = a.location && a.location.href ? s(a.location.href, "./") : "";
                var l = function(a, e) {
                    this.url = a, this.value_ = e
                };
                $traceurRuntime.createClass(l, {}, {});
                var v = function(a, e) {
                        this.message = this.constructor.name + ": " + this.stripCause(e) + " in " + a, this.stack = e instanceof p || !e.stack ? "" : this.stripStack(e.stack)
                    },
                    p = v;
                $traceurRuntime.createClass(v, {
                    stripError: function(a) {
                        return a.replace(/.*Error:/, this.constructor.name + ":")
                    },
                    stripCause: function(a) {
                        return a ? a.message ? this.stripError(a.message) : a + "" : ""
                    },
                    loadedBy: function(a) {
                        this.stack += "\n loaded by " + a
                    },
                    stripStack: function(a) {
                        var e = [];
                        return a.split("\n").some(function(a) {
                            return /UncoatedModuleInstantiator/.test(a) ? !0 : (e.push(a), void 0)
                        }), e[0] = this.stripError(e[0]), e.join("\n")
                    }
                }, {}, Error);
                var d = function(a, e) {
                        $traceurRuntime.superConstructor(y).call(this, a, null), this.func = e
                    },
                    y = d;
                $traceurRuntime.createClass(d, {
                    getUncoatedModule: function() {
                        if (this.value_) return this.value_;
                        try {
                            var r;
                            return void 0 !== typeof $traceurRuntime && (r = $traceurRuntime.require.bind(null, this.url)), this.value_ = this.func.call(a, r)
                        } catch (i) {
                            if (i instanceof v) throw i.loadedBy(this.url), i;
                            if (i.stack) {
                                var o = this.func.toString().split("\n"),
                                    h = [];
                                i.stack.split("\n").some(function(a) {
                                    if (a.indexOf("UncoatedModuleInstantiator.getUncoatedModule") > 0) return !0;
                                    var r = /(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(a);
                                    if (r) {
                                        var i = parseInt(r[2], 10);
                                        h = h.concat(e(o, i)), h.push(n(r[3]) + "^"), h = h.concat(t(o, i)), h.push("= = = = = = = = =")
                                    } else h.push(a)
                                }), i.stack = h.join("\n")
                            }
                            throw new v(this.url, i)
                        }
                    }
                }, {}, l);
                var E = Object.create(null),
                    f = {},
                    g = {
                        normalize: function(a, e) {
                            if ("string" != typeof a) throw new TypeError("module name must be a string, not " + typeof a);
                            if (c(a)) return u(a);
                            if (/[^\.]\/\.\.\//.test(a)) throw new Error("module name embeds /../: " + a);
                            return "." === a[0] && e ? s(e, a) : u(a)
                        },
                        get: function(a) {
                            var e = r(a);
                            if (!e) return void 0;
                            var t = E[e.url];
                            return t ? t : (t = i(e.getUncoatedModule(), f), E[e.url] = t)
                        },
                        set: function(a, e) {
                            a = String(a), m[a] = new d(a, function() {
                                return e
                            }), E[a] = e
                        },
                        get baseURL() {
                            return o
                        },
                        set baseURL(a) {
                            o = String(a)
                        },
                        registerModule: function(a, e, t) {
                            var n = g.normalize(a);
                            if (m[n]) throw new Error("duplicate module named " + n);
                            m[n] = new d(n, t)
                        },
                        bundleStore: Object.create(null),
                        register: function(a, e, t) {
                            e && (e.length || t.length) ? this.bundleStore[a] = {
                                deps: e,
                                execute: function() {
                                    var a = arguments,
                                        n = {};
                                    e.forEach(function(e, t) {
                                        return n[e] = a[t]
                                    });
                                    var r = t.call(this, n);
                                    return r.execute.call(this), r.exports
                                }
                            } : this.registerModule(a, e, t)
                        },
                        getAnonymousModule: function(e) {
                            return new i(e.call(a), f)
                        },
                        getForTesting: function(a) {
                            var e = this;
                            return this.testingPrefix_ || Object.keys(E).some(function(a) {
                                var t = /(traceur@[^\/]*\/)/.exec(a);
                                return t ? (e.testingPrefix_ = t[1], !0) : void 0
                            }), this.get(this.testingPrefix_ + a)
                        }
                    },
                    k = new i({
                        ModuleStore: g
                    });
                g.set("@traceur/src/runtime/ModuleStore", k), g.set("@traceur/src/runtime/ModuleStore.js", k);
                var b = $traceurRuntime.setupGlobals;
                $traceurRuntime.setupGlobals = function(a) {
                    b(a)
                }, $traceurRuntime.ModuleStore = g, a.System = {
                    register: g.register.bind(g),
                    registerModule: g.registerModule.bind(g),
                    get: g.get,
                    set: g.set,
                    normalize: g.normalize
                }, $traceurRuntime.getModuleImpl = function(a) {
                    var e = r(a);
                    return e && e.getUncoatedModule()
                }
            }("undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : this), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js", [], function() {
                "use strict";

                function a(a) {
                    return a >>> 0
                }

                function e(a) {
                    return a && ("object" == typeof a || "function" == typeof a)
                }

                function t(a) {
                    return "function" == typeof a
                }

                function n(a) {
                    return "number" == typeof a
                }

                function r(a) {
                    return a = +a, k(a) ? 0 : 0 !== a && g(a) ? a > 0 ? f(a) : E(a) : a
                }

                function i(a) {
                    var e = r(a);
                    return 0 > e ? 0 : j(e, R)
                }

                function o(a) {
                    return e(a) ? a[Symbol.iterator] : void 0
                }

                function h(a) {
                    return t(a)
                }

                function u(a, e) {
                    return {
                        value: a,
                        done: e
                    }
                }

                function s(a, e, t) {
                    e in a || Object.defineProperty(a, e, t)
                }

                function c(a, e, t) {
                    s(a, e, {
                        value: t,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    })
                }

                function m(a, e, t) {
                    s(a, e, {
                        value: t,
                        configurable: !1,
                        enumerable: !1,
                        writable: !1
                    })
                }

                function l(a, e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var n = e[t],
                            r = e[t + 1];
                        c(a, n, r)
                    }
                }

                function v(a, e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var n = e[t],
                            r = e[t + 1];
                        m(a, n, r)
                    }
                }

                function p(a, e, t) {
                    t && t.iterator && !a[t.iterator] && (a["@@iterator"] && (e = a["@@iterator"]), Object.defineProperty(a, t.iterator, {
                        value: e,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    }))
                }

                function d(a) {
                    T.push(a)
                }

                function y(a) {
                    T.forEach(function(e) {
                        return e(a)
                    })
                }
                var E = Math.ceil,
                    f = Math.floor,
                    g = isFinite,
                    k = isNaN,
                    b = Math.pow,
                    j = Math.min,
                    S = $traceurRuntime.toObject,
                    R = b(2, 53) - 1,
                    T = [];
                return {get toObject() {
                        return S
                    },
                    get toUint32() {
                        return a
                    },
                    get isObject() {
                        return e
                    },
                    get isCallable() {
                        return t
                    },
                    get isNumber() {
                        return n
                    },
                    get toInteger() {
                        return r
                    },
                    get toLength() {
                        return i
                    },
                    get checkIterable() {
                        return o
                    },
                    get isConstructor() {
                        return h
                    },
                    get createIteratorResultObject() {
                        return u
                    },
                    get maybeDefine() {
                        return s
                    },
                    get maybeDefineMethod() {
                        return c
                    },
                    get maybeDefineConst() {
                        return m
                    },
                    get maybeAddFunctions() {
                        return l
                    },
                    get maybeAddConsts() {
                        return v
                    },
                    get maybeAddIterator() {
                        return p
                    },
                    get registerPolyfill() {
                        return d
                    },
                    get polyfillAll() {
                        return y
                    }
                }
            }), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js", [], function() {
                "use strict";

                function a(a, e) {
                    if (r(e)) {
                        var t = h(e);
                        return t && a.objectIndex_[t.hash]
                    }
                    return "string" == typeof e ? a.stringIndex_[e] : a.primitiveIndex_[e]
                }

                function e(a) {
                    a.entries_ = [], a.objectIndex_ = Object.create(null), a.stringIndex_ = Object.create(null), a.primitiveIndex_ = Object.create(null), a.deletedCount_ = 0
                }

                function t(a) {
                    var e = a,
                        t = e.Object,
                        n = e.Symbol;
                    a.Map || (a.Map = c);
                    var r = a.Map.prototype;
                    void 0 === r.entries && (a.Map = c), r.entries && (i(r, r.entries, n), i(t.getPrototypeOf((new a.Map).entries()), function() {
                        return this
                    }, n))
                }
                var n = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    r = n.isObject,
                    i = n.maybeAddIterator,
                    o = n.registerPolyfill,
                    h = $traceurRuntime.getOwnHashObject,
                    u = Object.prototype.hasOwnProperty,
                    s = {},
                    c = function() {
                        var a = arguments[0];
                        if (!r(this)) throw new TypeError("Map called on incompatible type");
                        if (u.call(this, "entries_")) throw new TypeError("Map can not be reentrantly initialised");
                        if (e(this), null !== a && void 0 !== a)
                            for (var t, n = a[$traceurRuntime.toProperty(Symbol.iterator)](); !(t = n.next()).done;) {
                                var i = t.value,
                                    o = i[0],
                                    h = i[1];
                                this.set(o, h)
                            }
                    };
                return $traceurRuntime.createClass(c, {get size() {
                        return this.entries_.length / 2 - this.deletedCount_
                    },
                    get: function(e) {
                        var t = a(this, e);
                        return void 0 !== t ? this.entries_[t + 1] : void 0
                    },
                    set: function(e, t) {
                        var n = r(e),
                            i = "string" == typeof e,
                            o = a(this, e);
                        if (void 0 !== o) this.entries_[o + 1] = t;
                        else if (o = this.entries_.length, this.entries_[o] = e, this.entries_[o + 1] = t, n) {
                            var u = h(e),
                                s = u.hash;
                            this.objectIndex_[s] = o
                        } else i ? this.stringIndex_[e] = o : this.primitiveIndex_[e] = o;
                        return this
                    },
                    has: function(e) {
                        return void 0 !== a(this, e)
                    },
                    "delete": function(a) {
                        var e, t, n = r(a),
                            i = "string" == typeof a;
                        if (n) {
                            var o = h(a);
                            o && (e = this.objectIndex_[t = o.hash], delete this.objectIndex_[t])
                        } else i ? (e = this.stringIndex_[a], delete this.stringIndex_[a]) : (e = this.primitiveIndex_[a], delete this.primitiveIndex_[a]);
                        return void 0 !== e ? (this.entries_[e] = s, this.entries_[e + 1] = void 0, this.deletedCount_++, !0) : !1
                    },
                    clear: function() {
                        e(this)
                    },
                    forEach: function(a) {
                        for (var e = arguments[1], t = 0; t < this.entries_.length; t += 2) {
                            var n = this.entries_[t],
                                r = this.entries_[t + 1];
                            n !== s && a.call(e, r, n, this)
                        }
                    },
                    entries: $traceurRuntime.initGeneratorFunction(function m() {
                        var a, e, t;
                        return $traceurRuntime.createGeneratorInstance(function(n) {
                            for (;;) switch (n.state) {
                                case 0:
                                    a = 0, n.state = 12;
                                    break;
                                case 12:
                                    n.state = a < this.entries_.length ? 8 : -2;
                                    break;
                                case 4:
                                    a += 2, n.state = 12;
                                    break;
                                case 8:
                                    e = this.entries_[a], t = this.entries_[a + 1], n.state = 9;
                                    break;
                                case 9:
                                    n.state = e === s ? 4 : 6;
                                    break;
                                case 6:
                                    return n.state = 2, [e, t];
                                case 2:
                                    n.maybeThrow(), n.state = 4;
                                    break;
                                default:
                                    return n.end()
                            }
                        }, m, this)
                    }),
                    keys: $traceurRuntime.initGeneratorFunction(function l() {
                        var a, e, t;
                        return $traceurRuntime.createGeneratorInstance(function(n) {
                            for (;;) switch (n.state) {
                                case 0:
                                    a = 0, n.state = 12;
                                    break;
                                case 12:
                                    n.state = a < this.entries_.length ? 8 : -2;
                                    break;
                                case 4:
                                    a += 2, n.state = 12;
                                    break;
                                case 8:
                                    e = this.entries_[a], t = this.entries_[a + 1], n.state = 9;
                                    break;
                                case 9:
                                    n.state = e === s ? 4 : 6;
                                    break;
                                case 6:
                                    return n.state = 2, e;
                                case 2:
                                    n.maybeThrow(), n.state = 4;
                                    break;
                                default:
                                    return n.end()
                            }
                        }, l, this)
                    }),
                    values: $traceurRuntime.initGeneratorFunction(function v() {
                        var a, e, t;
                        return $traceurRuntime.createGeneratorInstance(function(n) {
                            for (;;) switch (n.state) {
                                case 0:
                                    a = 0, n.state = 12;
                                    break;
                                case 12:
                                    n.state = a < this.entries_.length ? 8 : -2;
                                    break;
                                case 4:
                                    a += 2, n.state = 12;
                                    break;
                                case 8:
                                    e = this.entries_[a], t = this.entries_[a + 1], n.state = 9;
                                    break;
                                case 9:
                                    n.state = e === s ? 4 : 6;
                                    break;
                                case 6:
                                    return n.state = 2, t;
                                case 2:
                                    n.maybeThrow(), n.state = 4;
                                    break;
                                default:
                                    return n.end()
                            }
                        }, v, this)
                    })
                }, {}), Object.defineProperty(c.prototype, Symbol.iterator, {
                    configurable: !0,
                    writable: !0,
                    value: c.prototype.entries
                }), o(t), {get Map() {
                        return c
                    },
                    get polyfillMap() {
                        return t
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js"), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js", [], function() {
                "use strict";

                function a(a) {
                    a.map_ = new o
                }

                function e(a) {
                    var e = a,
                        t = e.Object,
                        n = e.Symbol;
                    a.Set || (a.Set = u);
                    var i = a.Set.prototype;
                    i.values && (r(i, i.values, n), r(t.getPrototypeOf((new a.Set).values()), function() {
                        return this
                    }, n))
                }
                var t = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    n = t.isObject,
                    r = t.maybeAddIterator,
                    i = t.registerPolyfill,
                    o = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js").Map,
                    h = ($traceurRuntime.getOwnHashObject, Object.prototype.hasOwnProperty),
                    u = function() {
                        var e = arguments[0];
                        if (!n(this)) throw new TypeError("Set called on incompatible type");
                        if (h.call(this, "map_")) throw new TypeError("Set can not be reentrantly initialised");
                        if (a(this), null !== e && void 0 !== e)
                            for (var t, r = e[$traceurRuntime.toProperty(Symbol.iterator)](); !(t = r.next()).done;) {
                                var i = t.value;
                                this.add(i)
                            }
                    };
                return $traceurRuntime.createClass(u, {get size() {
                        return this.map_.size
                    },
                    has: function(a) {
                        return this.map_.has(a)
                    },
                    add: function(a) {
                        return this.map_.set(a, a), this
                    },
                    "delete": function(a) {
                        return this.map_.delete(a)
                    },
                    clear: function() {
                        return this.map_.clear()
                    },
                    forEach: function(a) {
                        var e = arguments[1],
                            t = this;
                        return this.map_.forEach(function(n, r) {
                            a.call(e, r, r, t)
                        })
                    },
                    values: $traceurRuntime.initGeneratorFunction(function s() {
                        var a, e;
                        return $traceurRuntime.createGeneratorInstance(function(t) {
                            for (;;) switch (t.state) {
                                case 0:
                                    a = this.map_.keys()[Symbol.iterator](), t.sent = void 0, t.action = "next", t.state = 12;
                                    break;
                                case 12:
                                    e = a[t.action](t.sentIgnoreThrow), t.state = 9;
                                    break;
                                case 9:
                                    t.state = e.done ? 3 : 2;
                                    break;
                                case 3:
                                    t.sent = e.value, t.state = -2;
                                    break;
                                case 2:
                                    return t.state = 12, e.value;
                                default:
                                    return t.end()
                            }
                        }, s, this)
                    }),
                    entries: $traceurRuntime.initGeneratorFunction(function c() {
                        var a, e;
                        return $traceurRuntime.createGeneratorInstance(function(t) {
                            for (;;) switch (t.state) {
                                case 0:
                                    a = this.map_.entries()[Symbol.iterator](), t.sent = void 0, t.action = "next", t.state = 12;
                                    break;
                                case 12:
                                    e = a[t.action](t.sentIgnoreThrow), t.state = 9;
                                    break;
                                case 9:
                                    t.state = e.done ? 3 : 2;
                                    break;
                                case 3:
                                    t.sent = e.value, t.state = -2;
                                    break;
                                case 2:
                                    return t.state = 12, e.value;
                                default:
                                    return t.end()
                            }
                        }, c, this)
                    })
                }, {}), Object.defineProperty(u.prototype, Symbol.iterator, {
                    configurable: !0,
                    writable: !0,
                    value: u.prototype.values
                }), Object.defineProperty(u.prototype, "keys", {
                    configurable: !0,
                    writable: !0,
                    value: u.prototype.values
                }), i(e), {get Set() {
                        return u
                    },
                    get polyfillSet() {
                        return e
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js"), System.registerModule("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js", [], function() {
                "use strict";

                function a(a, e) {
                    v[u] = a, v[u + 1] = e, u += 2, 2 === u && h()
                }

                function t() {
                    return function() {
                        e.nextTick(o)
                    }
                }

                function n() {
                    var a = 0,
                        e = new m(o),
                        t = document.createTextNode("");
                    return e.observe(t, {
                            characterData: !0
                        }),
                        function() {
                            t.data = a = ++a % 2
                        }
                }

                function r() {
                    var a = new MessageChannel;
                    return a.port1.onmessage = o,
                        function() {
                            a.port2.postMessage(0)
                        }
                }

                function i() {
                    return function() {
                        setTimeout(o, 1)
                    }
                }

                function o() {
                    for (var a = 0; u > a; a += 2) {
                        var e = v[a],
                            t = v[a + 1];
                        e(t), v[a] = void 0, v[a + 1] = void 0
                    }
                    u = 0
                }
                var h, u = 0,
                    s = a,
                    c = "undefined" != typeof window ? window : {},
                    m = c.MutationObserver || c.WebKitMutationObserver,
                    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    v = new Array(1e3);
                return h = "undefined" != typeof e && "[object process]" === {}.toString.call(e) ? t() : m ? n() : l ? r() : i(), {get default() {
                        return s
                    }
                }
            }), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js", [], function() {
                "use strict";

                function a(a) {
                    return a && "object" == typeof a && void 0 !== a.status_
                }

                function e(a) {
                    return a
                }

                function t(a) {
                    throw a
                }

                function n(a) {
                    var n = void 0 !== arguments[1] ? arguments[1] : e,
                        i = void 0 !== arguments[2] ? arguments[2] : t,
                        o = r(a.constructor);
                    switch (a.status_) {
                        case void 0:
                            throw TypeError;
                        case 0:
                            a.onResolve_.push(n, o), a.onReject_.push(i, o);
                            break;
                        case 1:
                            c(a.value_, [n, o]);
                            break;
                        case -1:
                            c(a.value_, [i, o])
                    }
                    return o.promise
                }

                function r(a) {
                    if (this === g) {
                        var e = o(new g(E));
                        return {
                            promise: e,
                            resolve: function(a) {
                                h(e, a)
                            },
                            reject: function(a) {
                                u(e, a)
                            }
                        }
                    }
                    var t = {};
                    return t.promise = new a(function(a, e) {
                        t.resolve = a, t.reject = e
                    }), t
                }

                function i(a, e, t, n, r) {
                    return a.status_ = e, a.value_ = t, a.onResolve_ = n, a.onReject_ = r, a
                }

                function o(a) {
                    return i(a, 0, void 0, [], [])
                }

                function h(a, e) {
                    s(a, 1, e, a.onResolve_)
                }

                function u(a, e) {
                    s(a, -1, e, a.onReject_)
                }

                function s(a, e, t, n) {
                    0 === a.status_ && (c(t, n), i(a, e, t))
                }

                function c(a, e) {
                    d(function() {
                        for (var t = 0; t < e.length; t += 2) m(a, e[t], e[t + 1])
                    })
                }

                function m(e, t, r) {
                    try {
                        var i = t(e);
                        if (i === r.promise) throw new TypeError;
                        a(i) ? n(i, r.resolve, r.reject) : r.resolve(i)
                    } catch (o) {
                        try {
                            r.reject(o)
                        } catch (o) {}
                    }
                }

                function l(a) {
                    return a && ("object" == typeof a || "function" == typeof a)
                }

                function v(e, t) {
                    if (!a(t) && l(t)) {
                        var n;
                        try {
                            n = t.then
                        } catch (i) {
                            var o = k.call(e, i);
                            return t[b] = o, o
                        }
                        if ("function" == typeof n) {
                            var h = t[b];
                            if (h) return h;
                            var u = r(e);
                            t[b] = u.promise;
                            try {
                                n.call(t, u.resolve, u.reject)
                            } catch (i) {
                                u.reject(i)
                            }
                            return u.promise
                        }
                    }
                    return t
                }

                function p(a) {
                    a.Promise || (a.Promise = f)
                }
                var d = System.get("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js").default,
                    y = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").registerPolyfill,
                    E = {},
                    f = function(a) {
                        if (a !== E) {
                            if ("function" != typeof a) throw new TypeError;
                            var e = o(this);
                            try {
                                a(function(a) {
                                    h(e, a)
                                }, function(a) {
                                    u(e, a)
                                })
                            } catch (t) {
                                u(e, t)
                            }
                        }
                    };
                $traceurRuntime.createClass(f, {
                    "catch": function(a) {
                        return this.then(void 0, a)
                    },
                    then: function(r, i) {
                        "function" != typeof r && (r = e), "function" != typeof i && (i = t);
                        var o = this,
                            h = this.constructor;
                        return n(this, function(e) {
                            return e = v(h, e), e === o ? i(new TypeError) : a(e) ? e.then(r, i) : r(e)
                        }, i)
                    }
                }, {
                    resolve: function(e) {
                        return this === g ? a(e) ? e : i(new g(E), 1, e) : new this(function(a) {
                            a(e)
                        })
                    },
                    reject: function(a) {
                        return this === g ? i(new g(E), -1, a) : new this(function(e, t) {
                            t(a)
                        })
                    },
                    all: function(a) {
                        var e = r(this),
                            t = [];
                        try {
                            var n = a.length;
                            if (0 === n) e.resolve(t);
                            else
                                for (var i = 0; i < a.length; i++) this.resolve(a[i]).then(function(a, r) {
                                    t[a] = r, 0 === --n && e.resolve(t)
                                }.bind(void 0, i), function(a) {
                                    e.reject(a)
                                })
                        } catch (o) {
                            e.reject(o)
                        }
                        return e.promise
                    },
                    race: function(a) {
                        var e = r(this);
                        try {
                            for (var t = 0; t < a.length; t++) this.resolve(a[t]).then(function(a) {
                                e.resolve(a)
                            }, function(a) {
                                e.reject(a)
                            })
                        } catch (n) {
                            e.reject(n)
                        }
                        return e.promise
                    }
                });
                var g = f,
                    k = g.reject,
                    b = "@@thenable";
                return y(p), {get Promise() {
                        return f
                    },
                    get polyfillPromise() {
                        return p
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js"), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js", [], function() {
                "use strict";

                function a(a) {
                    var e = String(a),
                        t = Object.create(s.prototype);
                    return t[i(h)] = e, t[i(u)] = 0, t
                }
                var e, t = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    n = t.createIteratorResultObject,
                    r = t.isObject,
                    i = $traceurRuntime.toProperty,
                    o = Object.prototype.hasOwnProperty,
                    h = Symbol("iteratedString"),
                    u = Symbol("stringIteratorNextIndex"),
                    s = function() {};
                return $traceurRuntime.createClass(s, (e = {}, Object.defineProperty(e, "next", {
                    value: function() {
                        var a = this;
                        if (!r(a) || !o.call(a, h)) throw new TypeError("this must be a StringIterator object");
                        var e = a[i(h)];
                        if (void 0 === e) return n(void 0, !0);
                        var t = a[i(u)],
                            s = e.length;
                        if (t >= s) return a[i(h)] = void 0, n(void 0, !0);
                        var c, m = e.charCodeAt(t);
                        if (55296 > m || m > 56319 || t + 1 === s) c = String.fromCharCode(m);
                        else {
                            var l = e.charCodeAt(t + 1);
                            c = 56320 > l || l > 57343 ? String.fromCharCode(m) : String.fromCharCode(m) + String.fromCharCode(l)
                        }
                        return a[i(u)] = t + c.length, n(c, !1)
                    },
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }), Object.defineProperty(e, Symbol.iterator, {
                    value: function() {
                        return this
                    },
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }), e), {}), {get createStringIterator() {
                        return a
                    }
                }
            }), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/String.js", [], function() {
                "use strict";

                function a(a) {
                    var e = String(this);
                    if (null == this || "[object RegExp]" == p.call(a)) throw TypeError();
                    var t = e.length,
                        n = String(a),
                        r = (n.length, arguments.length > 1 ? arguments[1] : void 0),
                        i = r ? Number(r) : 0;
                    isNaN(i) && (i = 0);
                    var o = Math.min(Math.max(i, 0), t);
                    return d.call(e, n, i) == o
                }

                function e(a) {
                    var e = String(this);
                    if (null == this || "[object RegExp]" == p.call(a)) throw TypeError();
                    var t = e.length,
                        n = String(a),
                        r = n.length,
                        i = t;
                    if (arguments.length > 1) {
                        var o = arguments[1];
                        void 0 !== o && (i = o ? Number(o) : 0, isNaN(i) && (i = 0))
                    }
                    var h = Math.min(Math.max(i, 0), t),
                        u = h - r;
                    return 0 > u ? !1 : y.call(e, n, u) == u
                }

                function t(a) {
                    if (null == this) throw TypeError();
                    var e = String(this);
                    if (a && "[object RegExp]" == p.call(a)) throw TypeError();
                    var t = e.length,
                        n = String(a),
                        r = n.length,
                        i = arguments.length > 1 ? arguments[1] : void 0,
                        o = i ? Number(i) : 0;
                    o != o && (o = 0);
                    var h = Math.min(Math.max(o, 0), t);
                    return r + h > t ? !1 : -1 != d.call(e, n, o)
                }

                function n(a) {
                    if (null == this) throw TypeError();
                    var e = String(this),
                        t = a ? Number(a) : 0;
                    if (isNaN(t) && (t = 0), 0 > t || 1 / 0 == t) throw RangeError();
                    if (0 == t) return "";
                    for (var n = ""; t--;) n += e;
                    return n
                }

                function r(a) {
                    if (null == this) throw TypeError();
                    var e = String(this),
                        t = e.length,
                        n = a ? Number(a) : 0;
                    if (isNaN(n) && (n = 0), 0 > n || n >= t) return void 0;
                    var r, i = e.charCodeAt(n);
                    return i >= 55296 && 56319 >= i && t > n + 1 && (r = e.charCodeAt(n + 1), r >= 56320 && 57343 >= r) ? 1024 * (i - 55296) + r - 56320 + 65536 : i
                }

                function i(a) {
                    var e = a.raw,
                        t = e.length >>> 0;
                    if (0 === t) return "";
                    for (var n = "", r = 0;;) {
                        if (n += e[r], r + 1 === t) return n;
                        n += arguments[++r]
                    }
                }

                function o() {
                    var a, e, t = [],
                        n = Math.floor,
                        r = -1,
                        i = arguments.length;
                    if (!i) return "";
                    for (; ++r < i;) {
                        var o = Number(arguments[r]);
                        if (!isFinite(o) || 0 > o || o > 1114111 || n(o) != o) throw RangeError("Invalid code point: " + o);
                        65535 >= o ? t.push(o) : (o -= 65536, a = (o >> 10) + 55296, e = o % 1024 + 56320, t.push(a, e))
                    }
                    return String.fromCharCode.apply(null, t)
                }

                function h() {
                    var a = $traceurRuntime.checkObjectCoercible(this),
                        e = String(a);
                    return s(e)
                }

                function u(u) {
                    var s = u.String;
                    m(s.prototype, ["codePointAt", r, "endsWith", e, "includes", t, "repeat", n, "startsWith", a]), m(s, ["fromCodePoint", o, "raw", i]), l(s.prototype, h, Symbol)
                }
                var s = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js").createStringIterator,
                    c = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    m = c.maybeAddFunctions,
                    l = c.maybeAddIterator,
                    v = c.registerPolyfill,
                    p = Object.prototype.toString,
                    d = String.prototype.indexOf,
                    y = String.prototype.lastIndexOf;
                return v(u), {get startsWith() {
                        return a
                    },
                    get endsWith() {
                        return e
                    },
                    get includes() {
                        return t
                    },
                    get repeat() {
                        return n
                    },
                    get codePointAt() {
                        return r
                    },
                    get raw() {
                        return i
                    },
                    get fromCodePoint() {
                        return o
                    },
                    get stringPrototypeIterator() {
                        return h
                    },
                    get polyfillString() {
                        return u
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/String.js"), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js", [], function() {
                "use strict";

                function a(a, e) {
                    var t = o(a),
                        n = new l;
                    return n.iteratorObject_ = t, n.arrayIteratorNextIndex_ = 0, n.arrayIterationKind_ = e, n
                }

                function e() {
                    return a(this, m)
                }

                function t() {
                    return a(this, s)
                }

                function n() {
                    return a(this, c)
                }
                var r, i = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    o = i.toObject,
                    h = i.toUint32,
                    u = i.createIteratorResultObject,
                    s = 1,
                    c = 2,
                    m = 3,
                    l = function() {};
                return $traceurRuntime.createClass(l, (r = {}, Object.defineProperty(r, "next", {
                    value: function() {
                        var a = o(this),
                            e = a.iteratorObject_;
                        if (!e) throw new TypeError("Object is not an ArrayIterator");
                        var t = a.arrayIteratorNextIndex_,
                            n = a.arrayIterationKind_,
                            r = h(e.length);
                        return t >= r ? (a.arrayIteratorNextIndex_ = 1 / 0, u(void 0, !0)) : (a.arrayIteratorNextIndex_ = t + 1, n == c ? u(e[t], !1) : n == m ? u([t, e[t]], !1) : u(t, !1))
                    },
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }), Object.defineProperty(r, Symbol.iterator, {
                    value: function() {
                        return this
                    },
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }), r), {}), {get entries() {
                        return e
                    },
                    get keys() {
                        return t
                    },
                    get values() {
                        return n
                    }
                }
            }), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js", [], function() {
                "use strict";

                function a(a) {
                    var e, t, n = arguments[1],
                        r = arguments[2],
                        i = this,
                        o = k(a),
                        h = void 0 !== n,
                        u = 0;
                    if (h && !v(n)) throw TypeError();
                    if (l(o)) {
                        e = p(i) ? new i : [];
                        for (var s, c = o[$traceurRuntime.toProperty(Symbol.iterator)](); !(s = c.next()).done;) {
                            var m = s.value;
                            e[u] = h ? n.call(r, m, u) : m, u++
                        }
                        return e.length = u, e
                    }
                    for (t = g(o.length), e = p(i) ? new i(t) : new Array(t); t > u; u++) e[u] = h ? "undefined" == typeof r ? n(o[u], u) : n.call(r, o[u], u) : o[u];
                    return e.length = t, e
                }

                function e() {
                    for (var a = [], e = 0; e < arguments.length; e++) a[e] = arguments[e];
                    for (var t = this, n = a.length, r = p(t) ? new t(n) : new Array(n), i = 0; n > i; i++) r[i] = a[i];
                    return r.length = n, r
                }

                function t(a) {
                    var e = void 0 !== arguments[1] ? arguments[1] : 0,
                        t = arguments[2],
                        n = k(this),
                        r = g(n.length),
                        i = f(e),
                        o = void 0 !== t ? f(t) : r;
                    for (i = 0 > i ? Math.max(r + i, 0) : Math.min(i, r), o = 0 > o ? Math.max(r + o, 0) : Math.min(o, r); o > i;) n[i] = a, i++;
                    return n
                }

                function n(a) {
                    var e = arguments[1];
                    return i(this, a, e)
                }

                function r(a) {
                    var e = arguments[1];
                    return i(this, a, e, !0)
                }

                function i(a, e) {
                    var t = arguments[2],
                        n = void 0 !== arguments[3] ? arguments[3] : !1,
                        r = k(a),
                        i = g(r.length);
                    if (!v(e)) throw TypeError();
                    for (var o = 0; i > o; o++) {
                        var h = r[o];
                        if (e.call(t, h, o, r)) return n ? o : h
                    }
                    return n ? -1 : void 0
                }

                function o(i) {
                    var o = i,
                        h = o.Array,
                        m = o.Object,
                        l = o.Symbol;
                    d(h.prototype, ["entries", u, "keys", s, "values", c, "fill", t, "find", n, "findIndex", r]), d(h, ["from", a, "of", e]), y(h.prototype, c, l), y(m.getPrototypeOf([].values()), function() {
                        return this
                    }, l)
                }
                var h = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js"),
                    u = h.entries,
                    s = h.keys,
                    c = h.values,
                    m = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    l = m.checkIterable,
                    v = m.isCallable,
                    p = m.isConstructor,
                    d = m.maybeAddFunctions,
                    y = m.maybeAddIterator,
                    E = m.registerPolyfill,
                    f = m.toInteger,
                    g = m.toLength,
                    k = m.toObject;
                return E(o), {get from() {
                        return a
                    },
                    get of() {
                        return e
                    },
                    get fill() {
                        return t
                    },
                    get find() {
                        return n
                    },
                    get findIndex() {
                        return r
                    },
                    get polyfillArray() {
                        return o
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js"), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js", [], function() {
                "use strict";

                function a(a, e) {
                    return a === e ? 0 !== a || 1 / a === 1 / e : a !== a && e !== e
                }

                function e(a) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t, n = arguments[e],
                            r = null == n ? [] : l(n),
                            i = r.length;
                        for (t = 0; i > t; t++) {
                            var o = r[t];
                            m(o) || (a[o] = n[o])
                        }
                    }
                    return a
                }

                function t(a, e) {
                    var t, n, r = c(e),
                        i = r.length;
                    for (t = 0; i > t; t++) {
                        var o = r[t];
                        m(o) || (n = s(e, r[t]), u(a, r[t], n))
                    }
                    return a
                }

                function n(n) {
                    var r = n.Object;
                    i(r, ["assign", e, "is", a, "mixin", t])
                }
                var r = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    i = r.maybeAddFunctions,
                    o = r.registerPolyfill,
                    h = $traceurRuntime,
                    u = h.defineProperty,
                    s = h.getOwnPropertyDescriptor,
                    c = h.getOwnPropertyNames,
                    m = h.isPrivateName,
                    l = h.keys;
                return o(n), {get is() {
                        return a
                    },
                    get assign() {
                        return e
                    },
                    get mixin() {
                        return t
                    },
                    get polyfillObject() {
                        return n
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js"), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js", [], function() {
                "use strict";

                function a(a) {
                    return o(a) && l(a)
                }

                function e(e) {
                    return a(e) && c(e) === e
                }

                function t(a) {
                    return o(a) && v(a)
                }

                function n(e) {
                    if (a(e)) {
                        var t = c(e);
                        if (t === e) return m(t) <= p
                    }
                    return !1
                }

                function r(r) {
                    var i = r.Number;
                    h(i, ["MAX_SAFE_INTEGER", p, "MIN_SAFE_INTEGER", d, "EPSILON", y]), u(i, ["isFinite", a, "isInteger", e, "isNaN", t, "isSafeInteger", n])
                }
                var i = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
                    o = i.isNumber,
                    h = i.maybeAddConsts,
                    u = i.maybeAddFunctions,
                    s = i.registerPolyfill,
                    c = i.toInteger,
                    m = Math.abs,
                    l = isFinite,
                    v = isNaN,
                    p = Math.pow(2, 53) - 1,
                    d = -Math.pow(2, 53) + 1,
                    y = Math.pow(2, -52);
                return s(r), {get MAX_SAFE_INTEGER() {
                        return p
                    },
                    get MIN_SAFE_INTEGER() {
                        return d
                    },
                    get EPSILON() {
                        return y
                    },
                    get isFinite() {
                        return a
                    },
                    get isInteger() {
                        return e
                    },
                    get isNaN() {
                        return t
                    },
                    get isSafeInteger() {
                        return n
                    },
                    get polyfillNumber() {
                        return r
                    }
                }
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js"), System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js", [], function() {
                "use strict";
                var a = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").polyfillAll;
                a(Reflect.global);
                var e = $traceurRuntime.setupGlobals;
                return $traceurRuntime.setupGlobals = function(t) {
                    e(t), a(t)
                }, {}
            }), System.get("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js")
        }).call(this, a("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 25,
        path: 24
    }],
    27: [function(a, e) {
        (function(a) {
            "use strict";
            var t = function(e, t, n, r, i, o, h, u) {
                if ("production" !== a.env.NODE_ENV && void 0 === t) throw new Error("invariant requires an error message argument");
                if (!e) {
                    var s;
                    if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var c = [n, r, i, o, h, u],
                            m = 0;
                        s = new Error("Invariant Violation: " + t.replace(/%s/g, function() {
                            return c[m++]
                        }))
                    }
                    throw s.framesToPop = 1, s
                }
            };
            e.exports = t
        }).call(this, a("_process"))
    }, {
        _process: 25
    }],
    28: [function(a, e) {
        (function(t) {
            "use strict";
            var n = a("./invariant"),
                r = function(a) {
                    var e, r = {};
                    "production" !== t.env.NODE_ENV ? n(a instanceof Object && !Array.isArray(a), "keyMirror(...): Argument must be an object.") : n(a instanceof Object && !Array.isArray(a));
                    for (e in a) a.hasOwnProperty(e) && (r[e] = e);
                    return r
                };
            e.exports = r
        }).call(this, a("_process"))
    }, {
        "./invariant": 27,
        _process: 25
    }]
}, {}, [26, 8]);