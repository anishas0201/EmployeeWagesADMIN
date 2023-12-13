!function () {
    var e = "div", t = "button", a = "span", r = "p", o = {
        title: "Deduction Summary",
        catagories: [{ name: "EPF", value: 20, color: "#B6B0FB" }, { name: "ESI", value: 20, color: "#BBEEED" },
        { name: "TDS DEDUCTION", value: 20, color: "#FBDE9D" },
        { name: "TOTAL EMPLOYEE", value: 20, color: "#95A1FC" }]
    };
    function n(e, t) {
        "mouseenter" === e.type ? t.classList.contains("active") || t.classList.add("active") :
            "mouseleave" === e.type && t.classList.contains("active") && t.classList.remove("active")
    } function c(e, t = "") { var a = document.createElement(e); t && t.split(" ").forEach(function (e, t) { a.classList.add(e) }); return a }
    window.addEventListener("load", function () {
        [].forEach.call(document.querySelectorAll("[data-stepped-chart]"),
            function (s, i) {
                if (s) {
                    var l, d = 0; l = s.getAttribute("data-stepped-chart") ? JSON.parse(s.getAttribute("data-stepped-chart")) : o;
                    var p = c(r, "syncro-card-title");
                    p.textContent = "Deduction Summary";
                    p.style.fontSize = "14px";

                    var dropdown = c("select", "dropdown");
                    dropdown.style.fontSize = "12px";
                    dropdown.style.marginLeft = "42%";
                    dropdown.style.border = "1px solid white";

                    var days = ["Last 7 Days", "Yesterday", "2 Days Ago", "3 Days Ago", "4 Days Ago", "5 Days Ago", "6 Days Ago"];
                    days.forEach(function (day) {
                        var option = document.createElement("option");
                        option.textContent = day;
                        dropdown.appendChild(option);
                    });
                    p.appendChild(dropdown);

                    var m = c(e, "syncro-card-body");
                    m.appendChild(p);

                    var textContainer = c(e, "text-container");
                    textContainer.style.marginLeft = "10px";
                    textContainer.style.padding = "10px";



                    // Add the "6,4k" text
                    var numberText = c(a, "number-text");
                    numberText.textContent = "6,4k";
                    textContainer.appendChild(numberText);

                    // Add the "+3.4%" text
                    var percentageText = c(a, "percentage-text");

                    // Set the font size to 25px
                    numberText.style.fontSize = "25px";
                    percentageText.style.fontSize = "25px";
                    // percentageText.textContent = "× 1.034^5";
                    percentageText.textContent = "+3.4%";
                    
                    percentageText.style.color = "green"; // Change text color to green
                    percentageText.style.fontSize = "12px";
                    textContainer.appendChild(percentageText);

                    m.appendChild(textContainer);

                    var u = c(e, "syncro-progress-stepped"), v = c(e, "syncro-row"); l.catagories.forEach(function (e, t) { d += e.value }),
                        l.catagories.forEach(function (r, o) {
                            stepItem = c(e, "syncro-progress-stepped-item"),
                                stepItem.setAttribute("data-id", "progress-stepped-item-" + i + "-" + o), stepItem.textContent = r.value, stepItem.style.width = r.value / d * 100 + "%",stepItem.style.height = r.value / d * 100 + "%", stepItem.style.backgroundColor = r.color, u.appendChild(stepItem); var n = c(a, "syncro-dot"); n.style.backgroundColor = r.color;
                            var s = c(a, "syncro-category-name"); s.textContent = r.name; var l = c(t, "syncro-btn"); l.setAttribute("data-target", "progress-stepped-item-" + i + "-" + o), l.appendChild(n), l.appendChild(s); var p = c(e, "syncro-col-auto"); p.appendChild(l), v.appendChild(p)
                        });

                    m.appendChild(u), m.appendChild(v);

                    var f = c(e, "syncro-card"); f.appendChild(m); var y = c(e); y.appendChild(f), s.innerHTML = y.innerHTML, [].forEach.call(s.querySelectorAll(".syncro-progress-stepped-item"),
                        function (e) { e.addEventListener("mouseenter", t => { n(t, e) }), e.addEventListener("mouseleave", t => { n(t, e) }) }), [].forEach.call(s.querySelectorAll(".syncro-btn"), function (e) {
                            e.addEventListener("click", function () {
                                const t = e.getAttribute("data-target");
                                var a = document.querySelector('[data-id="' + t + '"]'); a.classList.contains("active") ? a.classList.remove("active") : ([].forEach.call(s.querySelectorAll(".syncro-progress-stepped-item"), function (e) { e.classList.remove("active") }), a.classList.add("active"))
                            })
                        })
                }
            })
    })
}();
