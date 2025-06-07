(this["webpackJsonpreact-secondapp"] =
  this["webpackJsonpreact-secondapp"] || []).push([
  [0],
  {
    143: function (e, a, t) {},
    156: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(9),
        i = t(0),
        l = t.n(i),
        r = t(17),
        c = t.n(r),
        s = t(74),
        o = t(8),
        m = (t(84), t(70)),
        d = t(32),
        u = t(71),
        E = t(72),
        p = t(76),
        f = (t(85), t(86), t(87), t(88), t(89), t(4)),
        g = t(18);
      var v = function (e) {
          var a = e.items.map(function (e, a) {
            return l.a.createElement(
              f.Animated,
              {
                key: a,
                className: "panel",
                animationIn: "animated-offer-col",
                animationInDelay: 200 * a,
                animationInDuration: 1e3,
                isVisible: !0,
              },
              l.a.createElement(
                "svg",
                {
                  className: "icon",
                },
                l.a.createElement("use", {
                  xlinkHref: "/images/svg/svgs.svg#" + e.icon,
                })
              ),
              l.a.createElement(
                "div",
                {
                  className: "title",
                },
                l.a.createElement("strong", null, e.title),
                l.a.createElement("br", null),
                e.subtitle
              ),
              l.a.createElement("p", null, e.description)
            );
          });
          return l.a.createElement(
            "div",
            {
              className: "grid",
            },
            a
          );
        },
        h = [
          {
            icon: "web",
            title: "Web",
            subtitle: "Design",
            description:
              " I can offer You modern and original website solutions. Stand out amongst other sites! Showcase yourself from your best side! As a graphic designer, I will design the layout and implement it into production.",
          },
          {
            icon: "visualid",
            title: "Visual",
            subtitle: "Identification",
            description:
              " A well-designed visual identification shows professionalism, builds and strengthens the brand image in the minds of customers. I will be happy to create projects for Your brand. Feel free to contact me!",
          },
          {
            icon: "print",
            title: "Projects",
            subtitle: "To be printed",
            description:
              " Printed materials, especially the ones in a big format, still have a big impact on the recipient's first impression. They attract the eyes of possible customers. Present your offer in a unique way designed by me.",
          },
          {
            icon: "cms",
            title: "Management",
            subtitle: "Systems",
            description:
              " Expand the possibilities of your company by implementing functional and modern, simple management systems. Discover the potential of using databases designed strictly for Your company.",
          },
        ];

      function b(e) {
        var a = Object(g.a)({
            threshold: 0.8,
          }),
          t = Object(n.a)(a, 2),
          i = t[0];
        if ("true" === t[1].toString()) {
          window.history.pushState(null, null, "/my-offer");
        }
        return l.a.createElement(
          "section",
          {
            id: "offer",
            className: "light",
            ref: i,
          },
          l.a.createElement(
            f.Animated,
            {
              animationIn: "anim-offer-header",
              animationInDuration: 1e3,
              animationInDelay: 800,
              isVisible: !0,
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              e.bigTitle
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "header offer-header-trigger reveal-animation",
            },
            l.a.createElement(
              "span",
              {
                className: "offer-header-span",
              },
              e.title
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "description",
            },
            l.a.createElement("div", {
              className: "line-divider anim-offer-line",
            }),
            l.a.createElement(
              f.Animated,
              {
                animationIn: "anim-offer-header",
                animationInDuration: 1e3,
                animationInDelay: 1200,
                isVisible: !0,
              },
              l.a.createElement(
                "div",
                {
                  className: "subtitle1",
                },
                "I will design a ",
                l.a.createElement(
                  "strong",
                  {
                    className: "px-1",
                  },
                  "complete"
                ),
                " project for You.",
                l.a.createElement("br", null),
                "Are you ready to stand out and be unique?"
              )
            ),
            l.a.createElement(
              f.Animated,
              {
                animationIn: "anim-offer-desc",
                animationInDuration: 1e3,
                animationInDelay: 600,
                sVisible: !0,
              },
              l.a.createElement(
                "div",
                {
                  className: "subtitle2",
                },
                "As a freelance graphic designer, I design for small and large companies. I approach each order individually, and for each website design, logo design or comprehensive visual identification, I apply the principles of correct composition. In my projects, I care about legibility and ease of reception. Each new project is a challenge for me and I carry it out with full commitment."
              )
            )
          ),
          l.a.createElement(v, {
            items: h,
          })
        );
      }
      var N = t(73),
        y = t(179),
        k = t(183),
        I = t(182),
        j = t(181),
        w = (function() {
          var w = null;
          $.ajax({
            'async': false,
            'global': false,
            'url': "/static/portfolio-items.json",
            'dataType': "json",
            'success': function(data) {
              w = data;
            }
          });
          return w;
        })(),      
        x = Object(y.a)(function (e) {
          return {
            root: {
              flexGrow: 1,
              backgroundColor: e.palette.background.paper,
            },
          };
        });

      function D(e) {
        return l.a.createElement(
          f.Animated,
          {
            animationIn: "anim-portfolio-tablabel",
            animationInDuration: 1e3,
            animationInDelay: e.delay,
            isVisible: !0,
          },
          e.title
        );
      }
      var O = function () {
        var e = Object(i.useState)("favorite"),
          a = Object(n.a)(e, 2),
          t = a[0],
          r = a[1],
          c = Object(i.useState)([]),
          s = Object(n.a)(c, 2),
          o = s[0],
          m = s[1],
          d = x(),
          u = l.a.useState(0),
          E = Object(n.a)(u, 2),
          p = E[0],
          g = E[1];
        return (
          Object(i.useEffect)(function () {
            m(w);
          }, []),
          Object(i.useEffect)(
            function () {
              m([]);
              var e = w.map(function (e) {
                return Object(N.a)({}, e, {
                  filtered: e.category.includes(t),
                });
              });
              m(e);
            },
            [t]
          ),
          l.a.createElement(
            "div",
            {
              className: d.root,
            },
            l.a.createElement(
              k.a,
              {
                position: "static",
                className: "shadow-none",
              },
              l.a.createElement(
                I.a,
                {
                  value: p,
                  onChange: function (e, a) {
                    g(a);
                  },
                  "aria-label": "simple tabs",
                  centered: !0,
                },
                l.a.createElement(j.a, {
                  label: l.a.createElement(D, {
                    title: "favorite",
                    delay: 200,
                  }),
                  active: p ? 1 : 0,
                  onClick: function () {
                    return r("favorite");
                  },
                }),
                l.a.createElement(j.a, {
                  label: l.a.createElement(D, {
                    title: "frontend",
                    delay: 400,
                  }),
                  active: p ? 1 : 0,
                  onClick: function () {
                    return r("frontend");
                  },
                }),
                l.a.createElement(j.a, {
                  label: l.a.createElement(D, {
                    title: "backend",
                    delay: 600,
                  }),
                  active: p ? 1 : 0,
                  onClick: function () {
                    return r("backend");
                  },
                }),
                l.a.createElement(j.a, {
                  label: l.a.createElement(D, {
                    title: "identification",
                    delay: 800,
                  }),
                  active: p ? 1 : 0,
                  onClick: function () {
                    return r("identification");
                  },
                }),
                l.a.createElement(j.a, {
                  label: l.a.createElement(D, {
                    title: "print",
                    delay: 1e3,
                  }),
                  active: p ? 1 : 0,
                  onClick: function () {
                    return r("print");
                  },
                }),
                l.a.createElement(j.a, {
                  label: l.a.createElement(D, {
                    title: "other",
                    delay: 1200,
                  }),
                  active: p ? 1 : 0,
                  onClick: function () {
                    return r("other");
                  },
                })
              ),
              l.a.createElement(
                "div",
                {
                  className: "grid",
                },
                o.map(function (e) {
                  return !0 === e.filtered
                    ? l.a.createElement(
                        f.Animated,
                        {
                          key: e.id,
                          animationIn: "anim-portfolio-item",
                          animationInDuration: 600,
                          animationInDelay: 300 * e.id,
                          animateOnMount: !0,
                        },
                        l.a.createElement(
                          "div",
                          {
                            id: e.id,
                            className: "item",
                          },
                          l.a.createElement(
                            "a",
                            {
                              href: "/portfolio/" + e.url,
                              className: "hover text-decoration-none",
                            },
                            l.a.createElement(
                              "span",
                              {
                                className: "overlay",
                              },
                              l.a.createElement(
                                "span",
                                {
                                  className: "name",
                                },
                                e.name
                              ),
                              l.a.createElement(
                                "span",
                                {
                                  className: "item-description",
                                },
                                e.description
                              ),
                              l.a.createElement(
                                "span",
                                {
                                  className: "tags",
                                },
                                e.category.map(function (e, a) {
                                  return l.a.createElement(
                                    "span",
                                    {
                                      key: a,
                                      className: "item_category",
                                    },
                                    e
                                  );
                                })
                              )
                            )
                          ),
                          l.a.createElement("img", {
                            src: "projects/" + e.url + "/splash.webp",
                            alt: e.name,
                          })
                        )
                      )
                    : "";
                })
              )
            )
          )
        );
      };

      function A(e) {
        var a = Object(g.a)({
            threshold: 0.6,
          }),
          t = Object(n.a)(a, 2),
          i = t[0];
        if ("true" === t[1].toString()) {
          window.history.pushState(null, null, "/portfolio");
        }
        return l.a.createElement(
          "section",
          {
            id: "portfolio",
            className: "light",
            ref: i,
          },
          l.a.createElement(
            f.Animated,
            {
              animationIn: "anim-portfolio-header",
              animationInDuration: 800,
              animationInDelay: 800,
              isVisible: !0,
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              e.bigTitle
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "header portfolio-header-trigger reveal-animation",
            },
            l.a.createElement("span", {
              className: "cover",
            }),
            l.a.createElement(
              "span",
              {
                className: "portfolio-header-span",
              },
              e.title
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "description",
            },
            l.a.createElement("div", {
              className: "line-divider anim-portfolio-line",
            }),
            l.a.createElement(
              f.Animated,
              {
                animationIn: "anim-portfolio-header",
                animationInDuration: 1e3,
                animationInDelay: 1200,
                isVisible: !0,
              },
              l.a.createElement(
                "div",
                {
                  className: "subtitle1",
                },
                "Projects that ",
                l.a.createElement(
                  "strong",
                  {
                    className: "px-1",
                  },
                  "I have"
                ),
                " finished recently as a freelance ",
                l.a.createElement("br", null),
                "web and graphic designer. Feel free to browse!"
              )
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "portfolio-grid",
            },
            l.a.createElement(O, null)
          )
        );
      }
      var L = t(20);
      var S = function (e) {
          var a = e.items.map(function (e, a) {
            return !0 === e.last
              ? l.a.createElement(
                  f.Animated,
                  {
                    key: a,
                    className: "panel",
                    animationIn: "anim-aboutme-col-special",
                    animationInDelay: 200 * a,
                    animationInDuration: 1e3,
                    isVisible: !0,
                  },
                  l.a.createElement(
                    "div",
                    {
                      className: "last-item",
                    },
                    l.a.createElement(
                      "div",
                      {
                        className: "title",
                      },
                      l.a.createElement(
                        "div",
                        {
                          className: "infinity-wrapper",
                        },
                        e.title
                      ),
                      l.a.createElement(
                        "button",
                        {
                          className: "btn-goto",
                          "data-url": "/grafik-komputerowy",
                          onClick: function (e) {
                            e.preventDefault(),
                              (window.location.href = "files/CV2025.pdf");
                          },
                        },
                        l.a.createElement("span", null, "Check my CV")
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className: "subtitle",
                      },
                      e.subtitle1,
                      l.a.createElement("br", null),
                      e.subtitle2
                    )
                  )
                )
              : l.a.createElement(
                  f.Animated,
                  {
                    key: a,
                    className: "panel",
                    animationIn: "anim-aboutme-col",
                    animationInDelay: 200 * a,
                    animationInDuration: 1e3,
                    isVisible: !0,
                  },
                  l.a.createElement(
                    "div",
                    {
                      className: "title",
                    },
                    e.title
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: "subtitle",
                    },
                    e.subtitle1,
                    l.a.createElement("br", null),
                    e.subtitle2
                  )
                );
          });
          return l.a.createElement(
            "div",
            {
              className: "grid",
            },
            a
          );
        },
        M =
          (t(143),
          [
            {
              title: "5+",
              subtitle1: "years",
              subtitle2: "of experience",
              last: !1,
            },
            {
              title: "50+",
              subtitle1: "finished",
              subtitle2: "projects",
              last: !1,
            },
            {
              title: "30+",
              subtitle1: "satisfied",
              subtitle2: "customers",
              last: !1,
            },
            {
              title: Object(L.a)(Array(8)).map(function (e, a) {
                return l.a.createElement(
                  "div",
                  {
                    id: "infinity" + (a + 1),
                    key: a,
                    className: "infinity",
                  },
                  l.a.createElement("div", {
                    className: "ball",
                  }),
                  l.a.createElement("div", {
                    className: "ball",
                  })
                );
              }),
              subtitle1: "creative",
              subtitle2: "ideas",
              last: !0,
            },
          ]);

      function T(e) {
        var a = Object(g.a)({
            threshold: 0.9,
          }),
          t = Object(n.a)(a, 2),
          i = t[0];
        if ("true" === t[1].toString()) {
          window.history.pushState(null, null, "/about-me");
        }
        return l.a.createElement(
          "section",
          {
            id: "aboutme",
            className: "dark aboutme-class",
            "data-id": "about-me",
            ref: i,
          },
          l.a.createElement(
            f.Animated,
            {
              animationIn: "anim-aboutme-header",
              animationInDuration: 1e3,
              animationInDelay: 800,
              isVisible: !0,
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              e.bigTitle
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "top",
            },
            l.a.createElement(
              "div",
              {
                className: "header aboutme-header-trigger reveal-animation",
              },
              l.a.createElement(
                "span",
                {
                  className: "aboutme-header-span",
                },
                e.title
              )
            ),
            l.a.createElement(
              "div",
              {
                className: "line-0px-container",
              },
              l.a.createElement("div", {
                className: "line-0px anim-aboutme-line",
              })
            ),
            l.a.createElement(
              "div",
              {
                className: "description",
              },
              l.a.createElement(
                f.Animated,
                {
                  animationIn: "anim-aboutme-header",
                  animationInDuration: 1e3,
                  animationInDelay: 1200,
                  isVisible: !0,
                },
                l.a.createElement(
                  "div",
                  {
                    className: "subtitle1",
                  },
                  "My name is ",
                  l.a.createElement(
                    "strong",
                    {
                      className: "px-1",
                    },
                    "Micha\u0142 Dychtanowski"
                  ),
                  ". I am a freelance graphic and web designer."
                )
              ),
              l.a.createElement(
                f.Animated,
                {
                  animationIn: "anim-aboutme-desc",
                  animationInDuration: 1e3,
                  animationInDelay: 600,
                  sVisible: !0,
                },
                l.a.createElement(
                  "div",
                  {
                    className: "subtitle2",
                  },
                  "Graphic and web design have been my hobby for about 5 years now. My adventure started with making simple edits to copyright free Wordrpess/Joomla/Webspell templates. I\u2019ve enjoyed doing it so much that I\u2019ve decided to dive deeper into the world of web design and programming. I am ready to work independently or as a member of a team. I have great communication skills. Im an adept multitasker with the ability to work on simultaneous projects and bringing them to a completion with great efficiency and accuracy."
                )
              )
            )
          ),
          l.a.createElement(S, {
            items: M,
          })
        );
      }

      function C(e) {
        var a = e.amount,
          t = e.name,
          n = e.id,
          i = Object(L.a)(Array(a)).map(function (e, a) {
            return l.a.createElement(
              "div",
              {
                className: "dot",
                key: n + a + 6,
              },
              l.a.createElement("span", {
                className: "dot-empty",
                "data-delay": n + a + 6,
              }),
              l.a.createElement("span", {
                className: "dot-highlighted",
                "data-delay": n + a + 10,
              })
            );
          }),
          r = Object(L.a)(Array(14 - a)).map(function (e, t) {
            return l.a.createElement(
              "div",
              {
                className: "dot",
                key: a + (n + t) + 6,
              },
              l.a.createElement("span", {
                className: "dot-empty",
                "data-delay": a + (n + t) + 6,
              })
            );
          }),
          c = i.concat(r);
        return l.a.createElement(
          "div",
          {
            className: "skill",
          },
          l.a.createElement(
            "div",
            {
              className: "skill-title",
            },
            l.a.createElement("span", null, t),
            l.a.createElement("div", {
              className: "arrow",
            })
          ),
          l.a.createElement(
            "div",
            {
              className: "dots",
            },
            c
          )
        );
      }

      function V(e) {
        var a = Object(g.a)({
            threshold: 0.8,
          }),
          t = Object(n.a)(a, 2),
          i = t[0];
        if ("true" === t[1].toString()) {
          window.history.pushState(null, null, "/skills");
        }
        return l.a.createElement(
          "section",
          {
            id: "skills",
            className: "light",
            ref: i,
          },
          l.a.createElement(
            f.Animated,
            {
              animationIn: "anim-skills-header",
              animationInDuration: 1e3,
              animationInDelay: 800,
              isVisible: !0,
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              e.bigTitle
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "header skills-header-trigger reveal-animation",
            },
            l.a.createElement(
              "span",
              {
                className: "skills-header-span",
              },
              e.title
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "description",
            },
            l.a.createElement("div", {
              className: "anim-skills-line line-divider",
            }),
            l.a.createElement(
              f.Animated,
              {
                animationIn: "anim-skills-header",
                animationInDuration: 1e3,
                animationInDelay: 1200,
                isVisible: !0,
              },
              l.a.createElement(
                "div",
                {
                  className: "subtitle1",
                },
                "What ",
                l.a.createElement(
                  "strong",
                  {
                    className: "px-1",
                  },
                  "technologies and languages"
                ),
                " I use while developing ",
                l.a.createElement("br", null),
                "websites and creating graphics. My soft skills."
              )
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "skills-container",
            },
            l.a.createElement(
              "div",
              {
                className: "circles-container-box",
              },
              l.a.createElement("div", {
                className: "circles-container",
              }),
              l.a.createElement(
                "div",
                {
                  className: "img-container",
                },
                l.a.createElement("img", {
                  src: "images/skills.webp",
                  alt: "Skills",
                })
              )
            ),
            l.a.createElement(
              "div",
              {
                className: "bars-container",
              },
              l.a.createElement(C, {
                id: 1,
                name: "COMMUNICATION",
                amount: 14,
              }),
              l.a.createElement(C, {
                id: 2,
                name: "TEAMWORK",
                amount: 10,
              }),
              l.a.createElement(C, {
                id: 3,
                name: "PROBLEM SOLVING",
                amount: 13,
              }),
              l.a.createElement(C, {
                id: 4,
                name: "PLANNING",
                amount: 12,
              }),
              l.a.createElement(C, {
                id: 5,
                name: "TIME MANAGEMENT",
                amount: 11,
              }),
              l.a.createElement(C, {
                id: 6,
                name: "QUICK LEARNING",
                amount: 12,
              }),
              l.a.createElement(C, {
                id: 7,
                name: "CREATIVITY",
                amount: 11,
              })
            )
          )
        );
      }

      function W(e) {
        var a = Object(g.a)({
            threshold: 0.8,
          }),
          t = Object(n.a)(a, 2),
          i = t[0];
        if ("true" === t[1].toString()) {
          window.history.pushState(null, null, "/contact");
        }
        return l.a.createElement(
          "section",
          {
            id: "contact",
            className: "light",
            ref: i,
          },
          l.a.createElement(
            f.Animated,
            {
              animationIn: "anim-contact-header",
              animationInDuration: 1e3,
              animationInDelay: 800,
              isVisible: !0,
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              e.bigTitle
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "header contact-header-trigger reveal-animation",
            },
            l.a.createElement(
              "span",
              {
                className: "offer-header-span",
              },
              e.title
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "description",
            },
            l.a.createElement("div", {
              className: "anim-contact-line line-divider",
            }),
            l.a.createElement(
              f.Animated,
              {
                animationIn: "anim-contact-header",
                animationInDuration: 1e3,
                animationInDelay: 1200,
                isVisible: !0,
              },
              l.a.createElement(
                "div",
                {
                  className: "subtitle1",
                },
                "Do u have a ",
                l.a.createElement(
                  "strong",
                  {
                    className: "px-1",
                  },
                  "project"
                ),
                " for me?",
                l.a.createElement("br", null),
                " You want to carry out an unusual order? Mail or call me!"
              )
            )
          )
        );
      }
      var z = t(75),
        P = t(43),
        H = t(14);

      function Q(e) {
        return l.a.createElement(
          P.a,
          {
            className: "navbar navbar-dark scrolling-navbar navbar-gradient",
            expand: "lg",
            fixed: "top",
          },
          l.a.createElement(
            "div",
            {
              className: "button_container",
              id: "toggle1",
            },
            l.a.createElement("span", {
              className: "top",
            }),
            l.a.createElement("span", {
              className: "middle",
            }),
            l.a.createElement("span", {
              className: "bottom",
            })
          ),
          l.a.createElement(
            "div",
            {
              className: "overlay-hamburger",
              id: "overlay-hamburger",
            },
            l.a.createElement(
              "nav",
              {
                className: "overlay-menu",
              },
              l.a.createElement(
                "ul",
                null,
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    H.Link,
                    {
                      href: "#",
                      className: "nav-link scroll",
                      id: "toggle2",
                      smooth: "easeInOutQuad",
                      to: "home",
                    },
                    "Home"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    H.Link,
                    {
                      href: "#",
                      className: "nav-link scroll",
                      id: "toggle3",
                      smooth: "easeInOutQuad",
                      to: "offer",
                    },
                    "Offer"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    H.Link,
                    {
                      href: "#",
                      className: "nav-link scroll",
                      id: "toggle4",
                      smooth: "easeInOutQuad",
                      to: "portfolio",
                    },
                    "Portfolio"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    H.Link,
                    {
                      href: "#",
                      className: "nav-link scroll",
                      id: "toggle5",
                      smooth: "easeInOutQuad",
                      to: "aboutme",
                    },
                    "About me"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    H.Link,
                    {
                      href: "#",
                      className: "nav-link scroll",
                      id: "toggle6",
                      smooth: "easeInOutQuad",
                      to: "skills",
                    },
                    "Skills"
                  )
                ),
                l.a.createElement(
                  "li",
                  null,
                  l.a.createElement(
                    H.Link,
                    {
                      href: "#",
                      className: "nav-link scroll",
                      id: "toggle7",
                      smooth: "easeInOutQuad",
                      to: "contact",
                    },
                    "Contact"
                  )
                )
              )
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "container",
            },
            l.a.createElement(
              P.a.Brand,
              {
                className: "text-white",
              },
              l.a.createElement(
                "a",
                {
                  href: "/",
                  className: "text-decoration-none text-light",
                },
                e.logo
              )
            ),
            l.a.createElement(
              P.a.Collapse,
              {
                id: "responsive-navbar-nav",
              },
              l.a.createElement(
                z.a,
                null,
                l.a.createElement(
                  "ul",
                  {
                    className: "navbar-nav",
                  },
                  l.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      id: "nav1",
                    },
                    l.a.createElement(
                      H.Link,
                      {
                        className: "nav-link scroll",
                        smooth: "easeInOutQuad",
                        to: "home",
                      },
                      "Home"
                    )
                  ),
                  l.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      id: "nav2",
                    },
                    l.a.createElement(
                      H.Link,
                      {
                        className: "nav-link scroll",
                        smooth: "easeInOutQuad",
                        to: "offer",
                        id: "offerscroll",
                      },
                      "Offer"
                    )
                  ),
                  l.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      id: "nav3",
                    },
                    l.a.createElement(
                      H.Link,
                      {
                        className: "nav-link scroll",
                        smooth: "easeInOutQuad",
                        to: "portfolio",
                        id: "portfolioscroll",
                      },
                      "Portfolio"
                    )
                  ),
                  l.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      id: "nav4",
                    },
                    l.a.createElement(
                      H.Link,
                      {
                        className: "nav-link scroll",
                        smooth: "easeInOutQuad",
                        to: "aboutme",
                        id: "aboutmescroll",
                      },
                      "About me"
                    )
                  ),
                  l.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      id: "nav5",
                    },
                    l.a.createElement(
                      H.Link,
                      {
                        className: "nav-link scroll",
                        smooth: "easeInOutQuad",
                        to: "skills",
                        id: "skillsscroll",
                      },
                      "Skills"
                    )
                  ),
                  l.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      id: "nav6",
                    },
                    l.a.createElement(
                      H.Link,
                      {
                        className: "nav-link scroll",
                        smooth: "easeInOutQuad",
                        to: "contact",
                        id: "contactscroll",
                      },
                      "Contact"
                    )
                  )
                )
              )
            )
          )
        );
      }

      function Y() {
        var e = Object(g.a)({
            threshold: 0.7,
          }),
          a = Object(n.a)(e, 2),
          t = a[0];
        if ("true" === a[1].toString()) {
          // window.history.pushState(null, null, "/");
        }
        return l.a.createElement(
          "section",
          {
            id: "home",
            className: "dark fullscreen",
            "data-id": "home",
            ref: t,
          },
          l.a.createElement(
            "div",
            {
              id: "wrapper",
            },
            l.a.createElement(
              "div",
              {
                className: "title-text",
              },
              l.a.createElement(
                "div",
                {
                  className: "animatable",
                },
                "Hello, my name is ",
                l.a.createElement("strong", null, "Micha\u0142 Dychtanowski"),
                "!"
              )
            ),
            l.a.createElement(
              "div",
              {
                className: "home-subTitle",
              },
              l.a.createElement(
                "div",
                {
                  className: "animatable-sub1 subtitle-text",
                },
                "I am a ",
                l.a.createElement("strong", null, "Freelance")
              ),
              "\xa0",
              l.a.createElement(
                "div",
                {
                  className: "animatable-sub2 subtitle-text",
                },
                l.a.createElement("strong", null, "Web Developer")
              ),
              "\xa0",
              l.a.createElement(
                "div",
                {
                  className: "animatable-sub3 subtitle-text",
                },
                "and ",
                l.a.createElement("strong", null, "Graphic Designer")
              ),
              "\xa0",
              l.a.createElement(
                "div",
                {
                  className: "animatable-sub4 subtitle-text",
                },
                "At your service",
                l.a.createElement("strong", null, ".")
              )
            ),
            l.a.createElement(
              "div",
              {
                className: "home-button",
              },
              l.a.createElement(
                H.Link,
                {
                  to: "aboutme",
                  delay: 100,
                  smooth: !0,
                  duraton: 500,
                },
                l.a.createElement(
                  "button",
                  {
                    className: "btn-goto animatable-button",
                  },
                  l.a.createElement(
                    "span",
                    {
                      className: "animatable-button",
                    },
                    "Learn more about me"
                  )
                )
              )
            )
          ),
        //   l.a.createElement(
        //     "div",
        //     {
        //       className: "animatable-pic",
        //     },
        //     l.a.createElement("img", {
        //       src: "/images/me.webp",
        //       alt: "MEEEEE",
        //     })
        //   )
        );
      }

      function R(e) {
        return l.a.createElement(
          "section",
          {
            id: "footer",
            className: "dark",
          },
          l.a.createElement(
            f.Animated,
            {
              animationIn: "anim-contact-col",
              animationInDelay: 600,
              animationInDuration: 1e3,
              isVisible: !0,
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              "S"
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "description",
            },
            l.a.createElement(
              "div",
              {
                className: "grid",
              },
              l.a.createElement(
                f.Animated,
                {
                  className: "panel",
                  animationIn: "anim-contact-col",
                  animationInDelay: 200,
                  animationInDuration: 1e3,
                  isVisible: !0,
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/contact.webp",
                      alt: "Call me!",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "tel:+48 508 665 315",
                    },
                    "+48 508 665 315"
                  )
                )
              ),
              l.a.createElement(
                f.Animated,
                {
                  className: "panel",
                  animationIn: "anim-contact-col",
                  animationInDelay: 400,
                  animationInDuration: 1e3,
                  isVisible: !0,
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/mailme.webp",
                      alt: "Mail me!",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "mailto:kontakt@shayenek.pl",
                    },
                    "kontakt@shayenek.pl"
                  )
                )
              ),
              l.a.createElement(
                f.Animated,
                {
                  className: "panel",
                  animationIn: "anim-contact-col",
                  animationInDelay: 600,
                  animationInDuration: 1e3,
                  isVisible: !0,
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/map.webp",
                      alt: "You can find me here!",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "/",
                    },
                    "Wroc\u0142aw, Poland"
                  )
                )
              ),
              l.a.createElement(
                f.Animated,
                {
                  className: "panel",
                  animationIn: "anim-contact-col",
                  animationInDelay: 600,
                  animationInDuration: 1e3,
                  isVisible: !0,
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/form.webp",
                      alt: "Use my contact form",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "/",
                    },
                    "USE MY CONTACT FORM"
                  )
                )
              )
            ),
            l.a.createElement("hr", null),
            l.a.createElement(
              f.Animated,
              {
                className: "justify-content-between anim-contact-footer",
              },
              "\xa92020 Shayenek.pl - Freelance Web Developer, Graphics Designer | Powered by React"
            )
          )
        );
      }
      var B = (function (e) {
        function a(e) {
          var t;
          return (
            Object(m.a)(this, a),
            ((t = Object(u.a)(this, Object(E.a)(a).call(this, e))).state = {
              title: "Shayenek Portfolio",
              headerLinks: [
                {
                  title: "Home",
                  path: "/",
                },
                {
                  title: "Aboout Me",
                  path: "/about",
                },
                {
                  title: "Contact",
                  path: "/contact",
                },
              ],
              home: {
                title: "Hello!",
                subTitle: "My name is Micha\u0142 Dychtanowski",
                text: "Welcome to my portfolio!",
              },
            }),
            t
          );
        }
        return (
          Object(p.a)(a, e),
          Object(d.a)(a, [
            {
              key: "render",
              value: function () {
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(
                    "div",
                    {
                      id: "loader-wrapper",
                    },
                    l.a.createElement("div", {
                      id: "loader",
                    }),
                    l.a.createElement("div", {
                      className: "loader-section section-left",
                    }),
                    l.a.createElement("div", {
                      className: "loader-section section-right",
                    })
                  ),
                  l.a.createElement("div", {
                    id: "particles-js",
                    style: {
                      zIndex: 1,
                    },
                  }),
                  l.a.createElement(Q, {
                    logo: "| SHAYENEK |",
                  }),
                  l.a.createElement(Y, null),
                  l.a.createElement(b, {
                    title: "What I do",
                    bigTitle: "MyOffer",
                  }),
                  l.a.createElement(A, {
                    title: "Portfolio",
                    bigTitle: "Projects",
                  }),
                  l.a.createElement(T, {
                    title: "About me",
                    bigTitle: "InBrief",
                  }),
                  l.a.createElement(V, {
                    title: "My skills",
                    bigTitle: "Proficiency",
                  }),
                  l.a.createElement(W, {
                    title: "Contact",
                    bigTitle: "WorkWithMe",
                  }),
                  l.a.createElement(R, null)
                );
              },
            },
          ]),
          a
        );
      })(i.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      t(154);

      function F(e) {
        return l.a.createElement(
          "section",
          {
            id: "footer",
            className: "dark",
          },
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              "S"
            )
          ),
          l.a.createElement(
            "div",
            {
              className: "description",
            },
            l.a.createElement(
              "div",
              {
                className: "grid",
              },
              l.a.createElement(
                "div",
                {
                  className: "panel",
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/contact.webp",
                      alt: "Call me!",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "tel:+48 508 665 315",
                    },
                    "+48 508 665 315"
                  )
                )
              ),
              l.a.createElement(
                "div",
                {
                  className: "panel",
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/mailme.webp",
                      alt: "Mail me!",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "mailto:kontakt@shayenek.pl",
                    },
                    "kontakt@shayenek.pl"
                  )
                )
              ),
              l.a.createElement(
                "div",
                {
                  className: "panel",
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/map.webp",
                      alt: "You can find me here!",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "/",
                    },
                    "Wroc\u0142aw, Poland"
                  )
                )
              ),
              l.a.createElement(
                "div",
                {
                  className: "panel",
                },
                l.a.createElement(
                  "div",
                  {
                    className: "title",
                  },
                  l.a.createElement(
                    "strong",
                    null,
                    l.a.createElement("img", {
                      src: "images/icons/form.webp",
                      alt: "Use my contact form",
                    })
                  )
                ),
                l.a.createElement(
                  "p",
                  null,
                  l.a.createElement(
                    "a",
                    {
                      href: "/",
                    },
                    "USE MY CONTACT FORM"
                  )
                )
              )
            ),
            l.a.createElement("hr", {
              style: {
                width: "100%",
              },
            }),
            l.a.createElement(
              "div",
              {
                className: "justify-content-between",
              },
              "\xa92020 Shayenek.pl - Freelance Web Developer, Graphics Designer"
            )
          )
        );
      }

      function G(e) {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            "div",
            {
              className: "nav-wrapper",
            },
            l.a.createElement(
              "a",
              {
                href: "/portfolio/" + e.previous,
                className: "previous",
              },
              l.a.createElement(
                "span",
                {
                  className: "icon",
                },
                l.a.createElement("i", {
                  className: "fas fa-chevron-left",
                })
              ),
              l.a.createElement(
                "span",
                {
                  className: "text",
                },
                "Prev"
              )
            ),
            l.a.createElement(
              "a",
              {
                href: "/portfolio",
                className: "close-item",
              },
              l.a.createElement(
                "span",
                {
                  className: "icon",
                },
                l.a.createElement("i", {
                  className: "fas fa-times",
                })
              ),
              l.a.createElement(
                "span",
                {
                  className: "text",
                },
                "Close"
              )
            ),
            l.a.createElement(
              "a",
              {
                href: "/portfolio/" + e.next,
                className: "next",
              },
              l.a.createElement(
                "span",
                {
                  className: "text",
                },
                "Next"
              ),
              l.a.createElement(
                "span",
                {
                  className: "icon",
                },
                l.a.createElement("i", {
                  className: "fas fa-chevron-right",
                })
              )
            )
          ),
          l.a.createElement(
            "section",
            {
              id: "headernoanim",
              className: "dark",
            },
            l.a.createElement(
              "div",
              {
                className: "background-text",
              },
              "SHAYENEK"
            ),
            l.a.createElement("h1", null, e.name),
            l.a.createElement("h2", null, e.description),
            l.a.createElement(
              "div",
              {
                className: "nav-wrapper-mob",
              },
              l.a.createElement(
                "a",
                {
                  href: "/portfolio/" + e.previous,
                  className: "previous",
                },
                l.a.createElement(
                  "span",
                  {
                    className: "icon",
                  },
                  l.a.createElement("i", {
                    className: "fas fa-chevron-left",
                  })
                ),
                l.a.createElement(
                  "span",
                  {
                    className: "text",
                  },
                  "Prev"
                )
              ),
              l.a.createElement(
                "a",
                {
                  href: "/portfolio",
                  className: "close-item",
                },
                l.a.createElement(
                  "span",
                  {
                    className: "icon",
                  },
                  l.a.createElement("i", {
                    className: "fas fa-times",
                  })
                ),
                l.a.createElement(
                  "span",
                  {
                    className: "text",
                  },
                  "Close"
                )
              ),
              l.a.createElement(
                "a",
                {
                  href: "/portfolio/" + e.next,
                  className: "next",
                },
                l.a.createElement(
                  "span",
                  {
                    className: "text",
                  },
                  "Next"
                ),
                l.a.createElement(
                  "span",
                  {
                    className: "icon",
                  },
                  l.a.createElement("i", {
                    className: "fas fa-chevron-right",
                  })
                )
              )
            )
          ),
          l.a.createElement(
            "section",
            {
              id: "portfolioitem",
              className: "light",
            },
            l.a.createElement("div", {
              id: "particles-js",
              style: {
                visibility: "hidden",
              },
            }),
            l.a.createElement("p", null, e.descriptionLong),
            !0 === e.monitor
              ? l.a.createElement(
                  "div",
                  {
                    className: "monitor",
                  },
                  l.a.createElement(
                    "div",
                    {
                      className: "web-img",
                    },
                    l.a.createElement("img", {
                      src: "projects/" + e.url + "/website.webp",
                      alt: e.name,
                    })
                  ),
                  l.a.createElement("img", {
                    src: "images/monitor.webp",
                    className: "bg-img",
                    alt: "Monitor",
                  })
                )
              : "",
            e.images.map(function (a, t) {
              return l.a.createElement("img", {
                src: "projects/" + e.url + "/" + a,
                key: t,
                alt: e.name,
              });
            })
          )
        );
      }
      c.a.render(
        l.a.createElement(function () {
          var e = Object(i.useState)([]),
            a = Object(n.a)(e, 2),
            t = a[0],
            r = a[1];
          return (
            Object(i.useEffect)(function () {
              r(w);
            }, []),
            l.a.createElement(
              s.a,
              null,
              l.a.createElement(
                o.c,
                null,
                l.a.createElement(
                  o.a,
                  {
                    exact: !0,
                    path: "/",
                  },
                  l.a.createElement(B, null)
                ),
                l.a.createElement(
                  o.a,
                  {
                    exact: !0,
                    path: "/my-offer",
                  },
                  l.a.createElement(B, null)
                ),
                l.a.createElement(
                  o.a,
                  {
                    exact: !0,
                    path: "/portfolio",
                  },
                  l.a.createElement(B, null)
                ),
                l.a.createElement(
                  o.a,
                  {
                    exact: !0,
                    path: "/about-me",
                  },
                  l.a.createElement(B, null)
                ),
                l.a.createElement(
                  o.a,
                  {
                    exact: !0,
                    path: "/skills",
                  },
                  l.a.createElement(B, null)
                ),
                l.a.createElement(
                  o.a,
                  {
                    exact: !0,
                    path: "/contact",
                  },
                  l.a.createElement(B, null)
                ),
                t.map(function (e) {
                  return l.a.createElement(
                    o.a,
                    {
                      key: e.id,
                      exact: !0,
                      path: "/portfolio/" + e.url,
                    },
                    l.a.createElement(G, {
                      splash: e.splash,
                      name: e.name,
                      url: e.url,
                      description: e.description,
                      descriptionLong: e.descriptionLong,
                      previous: e.previous,
                      next: e.next,
                      images: e.images,
                      monitor: e.monitor,
                    }),
                    l.a.createElement(F, null)
                  );
                })
              )
            )
          );
        }, null),
        document.getElementById("app")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    79: function (e, a, t) {
      e.exports = t(156);
    },
    84: function (e, a, t) {},
    85: function (e, a, t) {},
    86: function (e, a, t) {},
    87: function (e, a, t) {},
    88: function (e, a, t) {},
  },
  [[79, 1, 2]],
]);
//# sourceMappingURL=main.25b3a1f0.chunk.js.map
