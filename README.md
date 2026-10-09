# 高中專題研究及小論文學習站

繁體中文靜態研究教材網站：首頁八個單元，各自連到教材與對應外掛的 Google Drive 分享檔案。教材包含學習目標、步驟、示例、練習與對話提示；八個分享網址已填入，但未驗證外部檔案內容與分享權限。

## 本機預覽

不需安裝套件或執行建置。在 repository 根目錄執行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

GitHub Pages 使用 `main` 分支的 `/(root)` 發布。程式變更須先提交並推送到該分支，才會更新公開網站。Codex 環境發布與 GitHub Pages 部署為不同操作。

## 八個單元與外掛

| 單元 | 教材頁面／連結設定鍵 | 對應外掛 |
| --- | --- | --- |
| 選題與研究問題 | `topic.html`／`topic` | 題目｜研究問題 |
| 前言與研究動機 | `introduction.html`／`introduction` | 前言思考教練 |
| 文獻閱讀與整合 | `literature.html`／`literature` | 文獻閱讀與整合教練 |
| 研究方法 | `methods.html`／`methods` | 研究方法教練 |
| 資料分析 | `analysis.html`／`analysis` | 資料分析教練 |
| 結論與論證反思 | `conclusion.html`／`conclusion` | 結論｜論證反思 |
| 學術倫理與引用倫理 | `ethics.html`／`ethics` | 學倫｜引用倫理 |
| 引用與文獻檢核 | `audit.html`／`audit` | 檢核｜引用與文獻 |

八個網址集中存放於 `assets/plugin-links.js`，可依設定鍵更新。Google Drive 檔案入口並不直接啟動 ChatGPT 外掛；使用者需依檔案提供的說明操作。若日後改用外掛直接使用網址，也需同步調整各頁的入口說明。不要填入 `skill://` 或 `app://` 等 Codex 內部識別碼。

空白、格式不正確或非 HTTPS 的網址不會啟用外掛按鈕，教材仍可閱讀。網址必須能由預期使用者開啟；連結設定不會替外掛更改分享權限。所有外掛入口由同一個設定檔維護。

共用樣式位於 `assets/styles.css`。各頁內容直接存放於 HTML，可獨立編輯，沒有產生器或建置步驟。

## 學生使用指南

`guide.html` 提供選擇教練、Google Drive 下載、外掛 ZIP 匯入、確認啟用、第一次對話與疑難排解。首頁及八個單元均有指南入口。

題目套件已透過教師上傳的 ZIP 核對：顯示名稱為「題目｜研究問題」，版本為 `0.1.2`，包含根目錄 `plugin.json`、`.codex-plugin/plugin.json` 與 `skills/instructions/SKILL.md`。未將 ZIP 或套件內部檔案加入網站。

安裝流程依教師提供的實際操作入口撰寫：方式 A 使用 ChatGPT「上傳外掛程式」並選取原始 ZIP；方式 B 把分享網址貼到對話框，依出現的安裝提示完成確認。指南附上名稱核對、首次提問與無法讀取分享網址時的 ZIP 替代流程。此流程仍需使用具備相應外掛功能的帳號；未在本工作環境實際執行學生帳號的 ChatGPT 安裝。
