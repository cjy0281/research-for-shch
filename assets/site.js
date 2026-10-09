"use strict";

function shareUrl(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" && !url.username && !url.password ? url : null;
  } catch {
    return null;
  }
}

for (const panel of document.querySelectorAll("[data-plugin]")) {
  const url = shareUrl(window.RESEARCH_PLUGIN_LINKS?.[panel.dataset.plugin]);
  if (!url) continue;

  const link = panel.querySelector("[data-plugin-link]");
  const status = panel.querySelector("[data-plugin-status]");
  link.href = url.href;
  link.hidden = false;
  status.hidden = true;

  const copy = panel.querySelector("[data-plugin-copy]");
  if (copy) {
    const field = panel.querySelector("[data-plugin-url]");
    const feedback = panel.querySelector("[data-copy-status]");
    field.value = url.href;
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(url.href);
        field.hidden = true;
        feedback.textContent = "已複製，可貼到 ChatGPT 對話框。";
      } catch {
        field.hidden = false;
        field.focus();
        field.select();
        feedback.textContent = "請手動複製已選取的完整網址。";
      }
    });
  }
}

const note = document.querySelector(".plugin-note");
if (note) {
  const cards = [...document.querySelectorAll(".unit-card")];
  const ready = cards.filter(card => {
    const key = card.getAttribute("href").replace(/\.html$/, "");
    return shareUrl(window.RESEARCH_PLUGIN_LINKS?.[key]);
  }).length;
  if (ready === cards.length && ready > 0) {
    note.querySelector("strong").textContent = "八個外掛入口已加入";
    note.querySelector("p").textContent = "各單元可下載對應的 Google Drive 分享檔案；第一次使用請先閱讀下載與安裝指南，存取權限由檔案擁有者設定。";
  } else if (ready > 0) {
    note.querySelector("strong").textContent = `已加入 ${ready} / ${cards.length} 個外掛入口`;
    note.querySelector("p").textContent = "教材皆可閱讀；已加入分享網址的單元會顯示外掛入口，其餘入口仍在準備中。";
  } else {
    note.querySelector("strong").textContent = "外掛入口準備中";
    note.querySelector("p").textContent = "教材已可閱讀；外掛分享網址加入後，各單元會顯示對應入口。";
  }
}
