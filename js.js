$(document).ready(function () {
  var t = [
      { name: "Giáp Thìn", m1: Date.parse("Feb 10 2024 00:00:00") },
      { name: "Ất Tỵ", m1: Date.parse("Jan 29 2025 00:00:00") },
      { name: "Bính Ngọ", m1: Date.parse("Feb 17 2026 00:00:00") },
      { name: "Đinh Mùi", m1: Date.parse("Feb 6 2027 00:00:00") },
    ],
    e = t.length;
  setInterval(function () {
    for (var n = new Date().getTime(), a = 0; a < e; a++) {
      var o = t[a].m1 - 864e5,
        r = t[a].m1 + 864e5,
        m = t[a].m1 + 2592e5;
      if (n <= m) {
        var i = t[a].m1,
          s = !1,
          currentYear = new Date().getFullYear(),
          c = a + currentYear,
          g = t[a].name + " " + c,
          p = "Đồng hồ đếm ngược đến Tết " + g + "!",
          l = "Đếm ngược đến tết",
          h = "Chúc",
          u = "Mừng",
          x = "Năm",
          T = "Mới",
          f = "Ngày",
          y = "Giờ",
          d = "Phút",
          C = "Giây";
        if (
          (n >= t[a].m1 &&
            ((i = m),
            n >= r
              ? (l = "Sắp hết Tết rồi!!!")
              : ((s = !0),
                (l = "Tết rồi!!!Tết rồi!!!"),
                (f = "Cung"),
                (y = "Chúc"),
                (d = "Tân"),
                (C = "Xuân"))),
          !s)
        ) {
          var b = i - n;
          (T = Math.floor((b / 1e3) % 60)),
            (x = Math.floor((b / 1e3 / 60) % 60)),
            (u = Math.floor((b / 36e5) % 24)),
            (h = Math.floor(b / 864e5));
        }

        $("#tetornot").text(l),
          $("#days").text(h),
          $("#hours").text(u),
          $("#mins").text(x),
          $("#secs").text(T),
          $("#days-text").text(f),
          $("#hours-text").text(y),
          $("#mins-text").text(d),
          $("#secs-text").text(C),
          $("#tet").text(g),
          $("#thisNewYear").text(
            "Ngày diễn ra: Thứ Bảy, 10/02/2024 (Dương lịch) | 01/01/2024 (Âm lịch)"
          );
        n >= o &&
          ($("html").css({
            background:
              "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%) no-repeat center center fixed",
            backgroundSize: "cover",
          }),
          $(".clock").toggleClass("tet"),
          $(".clock .text").toggleClass("tet")),
          (document.title = p),
          $('meta[name="description"]').attr(
            "content",
            "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " +
              g +
              "? Đồng hồ đếm ngược tết " +
              g
          ),
          $('meta[property="og\\:title"]').attr("content", p),
          $('meta[property="og\\:description"]').attr(
            "content",
            "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?"
          );
        break;
      }
    }
  }, 1e3);
});
