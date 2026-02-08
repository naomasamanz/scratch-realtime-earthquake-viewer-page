function showEEW(eq) {
  // EEWポップアップを作る（簡易版）
  const eewBox = document.createElement("div");
  eewBox.style.position = "fixed";
  eewBox.style.top = "0";
  eewBox.style.left = "0";
  eewBox.style.width = "100%";
  eewBox.style.backgroundColor = "red";
  eewBox.style.color = "white";
  eewBox.style.fontSize = "24px";
  eewBox.style.textAlign = "center";
  eewBox.style.padding = "10px";
  eewBox.style.zIndex = 9999;
  eewBox.textContent = `⚠ 緊急地震速報！ ${eq.prefecture} 最大震度 ${eq.maxIntensity}`;
  document.body.appendChild(eewBox);

  // 数秒で自動消去
  setTimeout(() => eewBox.remove(), 5000);
}
