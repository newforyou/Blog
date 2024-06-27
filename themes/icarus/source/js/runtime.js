function show_runtime() {
  Begin = new Date("05/11/2023 18:00:00"); //这里改成自己的建站时间
  Now = new Date();
  T = Now.getTime() - Begin.getTime();
  if (T < 0) return;
  a = T / 86400000;
  day = Math.floor(a);
  b = (a - day) * 24;
  hour = Math.floor(b);
  c = (b - hour) * 60;
  minute = Math.floor((b - hour) * 60);
  second = Math.floor((c - minute) * 60);
  if (typeof runtime_page !== "undefined")
    runtime_page.innerHTML =
      "截至目前，本站已经运行了" +
      day +
      "天" +
      hour +
      "小时" +
      minute +
      "分" +
      second +
      "秒。";
  if (typeof runtime_footer !== "undefined")
    runtime_footer.innerHTML =
      "本站已平稳运行" +
      day +
      "天" +
      hour +
      "小时" +
      minute +
      "分" +
      second +
      "秒~";
}
setInterval(show_runtime, 1000);
