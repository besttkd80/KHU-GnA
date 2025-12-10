if (!window._easterEggLoaded) {
  window._easterEggLoaded = true;

  (function () {
    let buffer = "";
    const secret = "gna";

    function showPopup() {
      const overlay = document.createElement("div");
      overlay.style = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(3px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
      `;

      const box = document.createElement("div");
      box.style = `
        background: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        font-size: 1.1rem;
        text-align: center;
        line-height: 1.5;
        animation: popIn 0.3s ease-out;
      `;
      box.innerHTML = `
        <strong>🎉 이스터에그 발견!</strong><br><br>
        본 사이트 제작:<br>
        <b>정형웅(메인)</b> · <b>안예진(서브)</b> · <b>송지영(서브)</b>
      `;

      overlay.appendChild(box);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => overlay.remove(), 250);
      });
    }

    // 키 입력 감지
    document.addEventListener("keydown", (e) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > secret.length) {
        buffer = buffer.slice(buffer.length - secret.length);
      }
      if (buffer === secret) {
        showPopup();
        buffer = "";
      }
    });

    // CSS 애니메이션 추가
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      @keyframes popIn {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  })();
}
