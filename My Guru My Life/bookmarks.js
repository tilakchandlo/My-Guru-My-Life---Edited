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