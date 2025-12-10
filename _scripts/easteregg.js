(function () {
  let buffer = "";
  const secret = "gna";

  document.addEventListener("keydown", (e) => {
    buffer += e.key.toLowerCase();
    if (buffer.length > secret.length) {
      buffer = buffer.slice(buffer.length - secret.length);
    }

    if (buffer === secret) {
      alert("본 사이트 제작: 정형웅(메인) · 안예진(서브) · 송지영(서브)");
      buffer = "";
    }
  });
})();
