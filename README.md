# portfolio-2yr

張哲菘的履歷與作品網站，用 Astro 建置的靜態頁面。

- `/` 履歷
- `/works` 作品牆（兩年 24 個專案）

## 開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
npm run preview
```

## 內容在哪裡改

- `src/data/resume.json`：履歷內容與聯絡資料
- `src/data/projects.json`：作品牆的專案資料（標題、說明、連結、縮圖、日期、技術）
- `public/img/`：專案縮圖
- `src/styles/global.css`：配色與樣式（最上方的 `:root` 變數）
