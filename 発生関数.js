function triggerVirtualEarthquake(eq) {
  // 1. パネルに表示（元のビューアーの関数があればそちらを呼ぶ）
  const panelMaxIntensity = document.querySelector("#最大震度");
  if(panelMaxIntensity) panelMaxIntensity.textContent = eq.maxIntensity;

  const panelPrefecture = document.querySelector("#震源地");
  if(panelPrefecture) panelPrefecture.textContent = eq.prefecture;

  const panelMagnitude = document.querySelector("#マグニチュード");
  if(panelMagnitude) panelMagnitude.textContent = eq.magnitude;

  const panelDepth = document.querySelector("#深さ");
  if(panelDepth) panelDepth.textContent = eq.depth;

  // 2. 緊急地震速報（EEW）を表示
  if(eq.isEEW) showEEW(eq);

  // 3. 地図マーカーを動かす場合
  if(window.updateMapMarker) window.updateMapMarker(eq);
}
