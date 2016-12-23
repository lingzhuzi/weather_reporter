function selectMouseOver() {
    document.getElementById('btnPrev').className = 'btnHover';
    document.getElementById('btnNext').className = 'btnHover';
}

function selectMouseOut() {
    document.getElementById('btnPrev').className = 'btn';
    document.getElementById('btnNext').className = 'btn';
}
(function () {
    var isSundayFirst = (localStorage['isSundayFirst'] != "0");
    var oddEvenWeek = parseInt(localStorage['oddEvenWeek'] || '1');
    if (isSundayFirst) {
        document.getElementById('wkSundayLast').style.display = 'none'
    } else {
        document.getElementById('wkSundayFirst').style.display = 'none'
    }
    var S = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;

    function M(C) {
        return document.getElementById(C);
    }

    function R(C) {
        return document.createElement(C);
    }
    var P = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63];
    var K = "甲乙丙丁戊己庚辛壬癸";
    var J = "子丑寅卯辰巳午未申酉戌亥";
    var O = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
    var L = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
    var D = [0, 21208, 43467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
    var B = "日一二三四五六七八九十";
    var H = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊"];
    var E = "初十廿卅";
    var JR = {
        "2012": {
            reset: []
        }
    };
    var V = {
        "0101": "*1元旦节",
        "0214": "情人节",
        "0305": "学雷锋纪念日",
        "0308": "妇女节",
        "0312": "植树节",
        "0315": "消费者权益日",
        "0401": "愚人节",
        "0501": "*1劳动节",
        "0504": "青年节",
        "0601": "国际儿童节",
        "0701": "中国共产党诞辰",
        "0801": "建军节",
        "0910": "中国教师节",
        "1001": "*3国庆节",
        "1224": "平安夜",
        "1225": "圣诞节"
    };
    var T = {
        "0101": "*2春节",
        "0115": "元宵节",
        "0505": "*1端午节",
        "0815": "*1中秋节",
        "0909": "重阳节",
        "1208": "腊八节",
        "0100": "除夕"
    };
     var Holiday = [
		"2013-10-7",
		"2013-10-6", 
		"2013-10-5", 
		"2013-10-4",
		"2013-10-3", 
		"2013-10-2", 
		"2013-10-1",
		"2013-9-21", 
		"2013-9-20", 
		"2013-9-19",
		"2013-6-12", 
		"2013-6-11", 
		"2013-6-10", 
		"2013-5-1", 
		"2013-4-30", 
		"2013-4-29", 
		"2013-4-6", 
		"2013-4-5", 
		"2013-4-4", 
		"2013-2-15", 
		"2013-2-14", 
		"2013-2-13", 
		"2013-2-12", 
		"2013-2-11", 
		"2013-2-10", 
		"2013-2-9",
		"2013-1-3", 
		"2013-1-2", 
		"2013-1-1", 
		"2012-1-1", 
		"2012-1-2", 
		"2012-1-3", 
		"2012-1-22", 
		"2012-1-23", 
		"2012-1-24", 
		"2012-1-25", 
		"2012-1-26", 
		"2012-1-27", 
		"2012-1-28", 
		"2012-4-2", 
		"2012-4-3", 
		"2012-4-4", 
		"2012-4-29", 
		"2012-4-30", 
		"2012-5-1", 
		"2012-6-22", 
		"2012-6-23", 
		"2012-6-24", 
		"2012-9-30", 
		"2012-10-1", 
		"2012-10-2", 
		"2012-10-3", 
		"2012-10-4", 
		"2012-10-5", 
		"2012-10-6", 
		"2012-10-7"
	];
    var UnHoliday = [
		"2013-9-29",
		"2013-9-28",
		"2013-9-22",
		"2013-6-9",
		"2013-6-8",
		"2013-4-28",
		"2013-4-27",
		"2013-4-7",
		"2013-2-16",
		"2013-2-17",
		"2012-1-29", 
		"2012-1-21", 
		"2012-1-29", 
		"2012-3-31", 
		"2012-4-1", 
		"2012-4-28", 
		"2012-9-29" 
	];

    function U(Y) {
        function c(j, i) {
            var h = new Date((31556925974.7 * (j - 1900) + D[i] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
            return (h.getUTCDate());
        }

        function d(k) {
            var h, j = 348;
            for (h = 32768; h > 8; h >>= 1) {
                j += (P[k - 1900] & h) ? 1 : 0
            }
            return (j + b(k));
        }

        function a(h) {
            return (K.charAt(h % 10) + J.charAt(h % 12));
        }

        function b(h) {
            if (g(h)) {
                return ((P[h - 1900] & 65536) ? 30 : 29);
            } else {
                return (0);
            }
        }

        function g(h) {
            return (P[h - 1900] & 15);
        }

        function e(i, h) {
            return ((P[i - 1900] & (65536 >> h)) ? 30 : 29);
        }

        function C(m) {
            var k, j = 0, h = 0;
            var l = new Date(1900, 0, 31);
            var n = (m - l) / 86400000;
            this.dayCyl = n + 40;
            this.monCyl = 14;
            for (k = 1900; k < 2050 && n > 0; k++) {
                h = d(k);
                n -= h;
                this.monCyl += 12;
            }
            if (n < 0) {
                n += h;
                k--;
                this.monCyl -= 12;
            }
            this.year = k;
            this.yearCyl = k - 1864;
            j = g(k);
            this.isLeap = false;
            for (k = 1; k < 13 && n > 0; k++) {
                if (j > 0 && k == (j + 1) && this.isLeap == false) {
                    --k;
                    this.isLeap = true;
                    h = b(this.year);
                } else {
                    h = e(this.year, k);
                }
                if (this.isLeap == true && k == (j + 1)) {
                    this.isLeap = false;
                }
                n -= h;
                if (this.isLeap == false) {
                    this.monCyl++;
                }
            }
            if (n == 0 && j > 0 && k == j + 1) {
                if (this.isLeap) {
                    this.isLeap = false
                } else {
                    this.isLeap = true;
                    --k;
                    --this.monCyl;
                }
            }
            if (n < 0) {
                n += h;
                --k;
                --this.monCyl;
            }
            this.month = k;
            this.day = n + 1;
        }

        function G(h) {
            return h < 10 ? "0" + h : h;
        }

        function f(i, j) {
            var h = i;
            return j.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g,

            function (k) {
                switch (k) {
                case "yyyy":
                    var l = "000" + h.getFullYear();
                    return l.substring(l.length - 4);
                case "dd":
                    return G(h.getDate());
                case "d":
                    return h.getDate().toString();
                case "MM":
                    return G((h.getMonth() + 1));
                case "M":
                    return h.getMonth() + 1;
                }
            })
        }

        function Z(i, h) {
            var j;
            switch (i, h) {
            case 10:
                j = "初十";
                break;
            case 20:
                j = "二十";
                break;
            case 30:
                j = "三十";
                break;
            default:
                j = E.charAt(Math.floor(h / 10));
                j += B.charAt(h % 10);
            }
            return (j);
        }
        this.date = Y;
        this.isToday = false;
        this.isRestDay = false;
        this.solarYear = f(Y, "yyyy");
        this.solarMonth = f(Y, "M");
        this.solarDate = f(Y, "d");
        this.solarWeekDay = Y.getDay();
        this.solarWeekDayInChinese = "星期" + B.charAt(this.solarWeekDay);
        var X = new C(Y);
        this.lunarYear = X.year;
        this.shengxiao = O.charAt((this.lunarYear - 4) % 12);
        this.lunarMonth = X.month;
        this.lunarIsLeapMonth = X.isLeap;
        this.lunarMonthInChinese = this.lunarIsLeapMonth ? "闰" + H[X.month - 1] : H[X.month - 1];
        this.lunarDate = X.day;
        this.showInLunar = this.lunarDateInChinese = Z(this.lunarMonth, this.lunarDate);
        if (this.lunarDate == 1) {
            this.showInLunar = this.lunarMonthInChinese + "月";
        }
        this.ganzhiYear = a(X.yearCyl);
        this.ganzhiMonth = a(X.monCyl);
        this.ganzhiDate = a(X.dayCyl++);
        this.jieqi = "";
        this.restDays = 0;
        if (c(this.solarYear, (this.solarMonth - 1) * 2) == f(Y, "d")) {
            this.showInLunar = this.jieqi = L[(this.solarMonth - 1) * 2]
        }
        if (c(this.solarYear, (this.solarMonth - 1) * 2 + 1) == f(Y, "d")) {
            this.showInLunar = this.jieqi = L[(this.solarMonth - 1) * 2 + 1]
        }
        if (this.showInLunar == "清明") {
            this.showInLunar = "清明节";
            this.restDays = 1;
        }
        this.solarFestival = V[f(Y, "MM") + f(Y, "dd")];
        if (typeof this.solarFestival == "undefined") {
            this.solarFestival = "";
        } else {
            if (/\*(\d)/.test(this.solarFestival)) {
                this.restDays = parseInt(RegExp.$1);
                this.solarFestival = this.solarFestival.replace(/\*\d/, "")
            }
        }
        this.showInLunar = (this.solarFestival == "") ? this.showInLunar : this.solarFestival;
        this.lunarFestival = T[this.lunarIsLeapMonth ? "00" : G(this.lunarMonth) + G(this.lunarDate)];
        if (typeof this.lunarFestival == "undefined") {
            this.lunarFestival = "";
        } else {
            if (/\*(\d)/.test(this.lunarFestival)) {
                this.restDays = (this.restDays > parseInt(RegExp.$1)) ? this.restDays : parseInt(RegExp.$1);
                this.lunarFestival = this.lunarFestival.replace(/\*\d/, "");
            }
        }
        if (this.lunarMonth == 12 && this.lunarDate == e(this.lunarYear, 12)) {
            this.lunarFestival = T["0100"];
            this.restDays = 1;
        }
        this.showInLunar = (this.lunarFestival == "") ? this.showInLunar : this.lunarFestival;
        this.showInLunar = (this.showInLunar.length > 4) ? this.showInLunar.substr(0, 2) + "..." : this.showInLunar
    }
    var Q = (function () {
        var X = {};
        X.lines = 0;
        X.dateArray = new Array(42);

        function Y(a) {
            return (((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0));
        }

        function G(a, b) {
            return [31, (Y(a) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b];
        }

        function C(a, b) {
            a.setDate(a.getDate() + b);
            return a;
        }

        function Z(a) {
            var f = 0;
            var c = new U(new Date(a.solarYear, a.solarMonth - 1, 1));
            var d = (c.solarWeekDay - 1 == -1) ? 6 : c.solarWeekDay - 1;
            if (isSundayFirst) {
                if (d == 6) d = 0;
                else d++;
            }
            X.lines = Math.ceil((d + G(a.solarYear, a.solarMonth - 1)) / 7);

            for (var e = 0; e < X.dateArray.length; e++) {
                if (c.restDays != 0) {
                    f = c.restDays
                }
                if (f > 0) {
                    c.isRest = true
                }
                if (d-- > 0 || c.solarMonth != a.solarMonth) {
                    X.dateArray[e] = null;
                    continue;
                }
                var b = new U(new Date());
                if (c.solarYear == b.solarYear && c.solarMonth == b.solarMonth && c.solarDate == b.solarDate) {
                    c.isToday = true
                }
                X.dateArray[e] = c;

                c = new U(C(c.date, 1));
                f--;
            }
        }
        return {
            init: function (a) {
                Z(a);
            },
            getJson: function () {
                return X;
            }
        }
    })();
    var W = (function () {
        var C = M("top").getElementsByTagName("SELECT")[0];
        var X = M("top").getElementsByTagName("SELECT")[1];
        var G = M("top").getElementsByTagName("SPAN")[0];
        var c = M("top").getElementsByTagName("SPAN")[1];

        var Y = M("top").getElementsByTagName("INPUT")[0];
        var btnPrev = document.getElementById('btnPrev');
        var btnNext = document.getElementById('btnNext');

        function prev() {
            if (X.selectedIndex == 0) {
                X.selectedIndex = X.options.length - 1;
                if (C.selectedIndex != 0) C.selectedIndex--;
            } else {
                X.selectedIndex--;
            }
            f();
        }

        function next() {
            if (X.selectedIndex == X.options.length - 1) {
                X.selectedIndex = 0;
                if (C.selectedIndex != C.options.length - 1) C.selectedIndex++;
            } else {
                X.selectedIndex++;
            }
            f();
        }
        btnPrev.onclick = prev;
        btnNext.onclick = next;

        function a(g) {
            G.innerHTML = g.ganzhiYear;
            c.innerHTML = g.shengxiao;
        }

        function b(g) {
            C[g.solarYear - 1901].selected = true;
            X[g.solarMonth - 1].selected = true;
        }

        function f() {
            var j = C.value;
            var g = X.value;
            var i = new U(new Date(j, g - 1, 1));
            Q.init(i);
            N.draw();
            if (this == C) {
                i = new U(new Date(j, 3, 1));
                G.innerHTML = i.ganzhiYear;
                c.innerHTML = i.shengxiao
            }
            var h = new U(new Date());
            Y.style.visibility = (j == h.solarYear && g == h.solarMonth) ? "hidden" : "visible"
        }

        function Z() {
            var g = new U(new Date());
            a(g);
            b(g);
            Q.init(g);
            N.draw();
            Y.style.visibility = "hidden"
        }

        function d(k, g) {
            for (var j = 1901; j < 2050; j++) {
                var h = R("OPTION");
                h.value = j;
                h.innerHTML = j;
                if (j == k) {
                    h.selected = "selected"
                }
                C.appendChild(h)
            }
            for (var j = 1; j < 13; j++) {
                var h = R("OPTION");
                h.value = j;
                h.innerHTML = j;
                if (j == g) {
                    h.selected = "selected"
                }
                X.appendChild(h)
            }
            C.onchange = f;
            X.onchange = f
        }

        function e(g) {
            d(g.solarYear, g.solarMonth);
            G.innerHTML = g.ganzhiYear;
            c.innerHTML = g.shengxiao;
			 
            Y.onclick = Z;
            Y.style.visibility = "hidden";
        }
        return {
            init: function (g) {
                e(g);
            },
            reset: function (g) {
                b(g);
            }
        }
    })();
    var N = (function () {
        function C() {
            var Z = Q.getJson();
            var c = Z.dateArray;
            M("cm").style.height = Z.lines * 38 + 2 + "px";
            M("cm").innerHTML = "";
            for (var a = 0; a < c.length; a++) {
                if (c[a] == null) {
                    continue;
                }
                var X = R("DIV");
                if (c[a].isToday) {
                    X.style.border = "1px solid #a5b9da";
                    X.style.background = "#c1d9ff"
                }
                X.className = "cell";
                if (Holiday.indexOf(c[a].solarYear + "-" + c[a].solarMonth + "-" + c[a].solarDate) >= 0) {
                    X.className = "cell holiday";
                } else if (UnHoliday.indexOf(c[a].solarYear + "-" + c[a].solarMonth + "-" + c[a].solarDate) >= 0) {
                    X.className = "cell unholiday";
                }
                X.style.left = (a % 7) * 60 + "px";
                X.style.top = Math.floor(a / 7) * 38 + 2 + "px";
                var b = R("DIV");
                b.className = "so";
                b.style.color = (c[a].solarWeekDay == 6 || c[a].solarWeekDay == 0 || c[a].isRest) ? "#c60b02" : "#313131";
                //console.log("a:"+(parseInt(c[a].date.getTime())));
                var thisDay = (new Date(c[a].date.getFullYear(), c[a].date.getMonth() - 1, parseInt(c[a].solarDate)).getTime() / 86400000 + 4) / 7;
                //console.log("a:"+(thisDay)+","+a);
                if (oddEvenWeek == (c[a].date.getTime() / 604800000 % 2 + 1)) b.style.color = "#313131";
                b.innerHTML = c[a].solarDate;
                X.appendChild(b);
                var Y = R("DIV");
                Y.style.color = "#666";
                Y.innerHTML = c[a].showInLunar;
                X.appendChild(Y);
                X.onmouseover = (function (d) {
                    return function (f) {
                        F.show({
                            dateIndex: d,
                            cell: this
                        })
                    }
                })(a);
                X.onmouseout = function () {
                    F.hide()
                };
                M("cm").appendChild(X)
            }
            var G = R("DIV");
            G.id = "fd";
            M("cm").appendChild(G);
            F.init(G);
        }
        return {
            draw: function (G) {
                C(G);
            }
        }
    })();
    var F = (function () {
        var C;

        function Y(e, c) {
            if (arguments.length > 1) {
                var b = /([.*+?^=!:${}()|[\]\/\\])/g,
                    Z = "{".replace(b, "\\$1"),
                    d = "}".replace(b, "\\$1");
                var a = new RegExp("#" + Z + "([^" + Z + d + "]+)" + d, "g");
                if (typeof (c) == "object") {
                    return e.replace(a,

                    function (f, h) {
                        var g = c[h];
                        return typeof (g) == "undefined" ? "" : g
                    })
                }
            }
            return e;
        }

        function G(b) {
            var a = Q.getJson().dateArray[b.dateIndex];
            var Z = b.cell;
            var c = "#{solarYear}年&nbsp;#{solarMonth}月&nbsp;#{solarDate}日&nbsp;#{solarWeekDayInChinese}";
            c += "<br><b>农历&nbsp;#{lunarMonthInChinese}月#{lunarDateInChinese}</b>";
            c += "<br>#{ganzhiYear}年&nbsp;#{ganzhiMonth}月&nbsp;#{ganzhiDate}日";
            if (a.solarFestival != "" || a.lunarFestival != "" || a.jieqi != "") {
                c += "<br><b>#{lunarFestival} #{solarFestival} #{jieqi}</b>"
            }
            C.innerHTML = Y(c, a);
            C.style.top = Math.min(Z.offsetTop, 90) + Z.offsetHeight - 5 + "px";
            if (b.dateIndex % 7 <= 3) {
                C.style.left = Z.offsetLeft + Z.offsetWidth - 5 + "px";
            } else {
                C.style.left = Z.offsetLeft - 173 + "px";
            }
            C.style.display = "block";
        }

        function X() {
            C.style.display = "none";
        }
        return {
            show: function (Z) {
                G(Z);
            },
            hide: function () {
                X();
            },
            init: function (Z) {
                C = Z;
            }
        }
    })();
    var I = (function () {
        var G = M("bm").getElementsByTagName("A")[0];

        function C(X) {
            //G.href = "http://zh.wikipedia.org/zh-cn/" + X.solarMonth + "%E6%9C%88" + X.solarDate + "%E6%97%A5"
            // console.log(X.solarMonth + "%E6%9C%88" + X.solarDate + "%E6%97%A5");
        }
        return {
            setLink: function (X) {
                C(X);
            }
        }
    })();
    var A = new U(new Date());
    if (S) {
        window.attachEvent("onload",function () {W.reset(A);})
    }
    W.init(A);
    Q.init(A);
    N.draw();
    I.setLink(A);
	
/*	
	var topBox = document.querySelector(".topbox");
	var botbox = document.querySelector(".botbox");
	
	var dayCount = parseInt(localStorage["dayCount"] || "5");
	var tools1 = document.getElementById('iframeTools1');
	var tools2 = document.getElementById('iframeTools2');
	if (dayCount < 4){
		tools1.style.display = "none";
		tools2.style.display = "block";
		topBox.style.width = "450px";
		botbox.style.width = "450px";		
	}else{
		if (dayCount == 4){
			tools1.style.width = "210px";				
		}
		
		tools1.style.display = "block";
		tools2.style.display = "none";	
	}
*/
})();