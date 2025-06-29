# 個人簡歷網站 - 混合模組化版本

> 蔡沐恩的個人簡歷網站，採用**混合模組化架構**，結合直接開啟便利性與模組化開發優勢，易於維護和擴展。

## 🌟 架構特色

### 🔧 混合模組化設計
- **HTML 整合**：所有組件內容整合在 `index.html` 中，可直接雙擊開啟
- **CSS 模組化**：樣式分離為多個 CSS 檔案，便於維護
- **JavaScript 模組化**：功能模組化設計，具備分頁切換和工具函數
- **無需伺服器**：解決 CORS 限制，可直接開啟 HTML 檔案
- **易於編輯**：清楚的區塊註解，方便找到要修改的內容

## 📁 專案結構

```
merlinmoon.github.io/
├── index.html                  # 主文件（整合所有內容，可直接開啟）
├── css/                        # CSS樣式模組
│   ├── base.css                # 基礎樣式（全域設定、佈局結構）
│   ├── header.css              # Header區域樣式（個人資訊、動畫效果）
│   ├── sidebar.css             # Sidebar區域樣式（卡片、技能條）
│   └── content.css             # Content區域樣式（導航、時間軸、標籤）
├── js/                         # JavaScript功能模組
│   └── main.js                 # 分頁切換系統 + 工具函數
├── components/                 # HTML組件（保留供參考）
│   ├── header.html             # Header組件（個人基本資訊）
│   ├── sidebar.html            # Sidebar組件（關於我、教育、技能）
│   ├── navigation.html         # Navigation組件（分頁按鈕）
│   ├── activities.html         # 活動經驗組件（競賽、獲獎等）
│   └── work.html               # 工作經驗組件（工作履歷）
├── merlin_photo.png            # 個人頭像圖片
└── README.md                   # 專案說明文件
```

## 🚀 工作原理

### 混合架構設計
1. **HTML 整合** → 所有組件內容直接寫在 `index.html` 中
2. **CSS 模組化** → 樣式分離為多個 CSS 檔案，通過 `<link>` 標籤引用
3. **JavaScript 模組化** → 分頁切換和工具函數獨立成模組
4. **直接開啟** → 無需 HTTP 伺服器，雙擊即可開啟

### 區塊註解系統
```html
<!-- ====================================== -->
<!-- HEADER 區域 - 頁面頂部個人資訊 -->
<!-- ====================================== -->
<header class="header">...</header>

<!-- ====================================== -->
<!-- SIDEBAR 區域 - 側邊欄個人資訊 -->
<!-- ====================================== -->
<aside class="sidebar">...</aside>
```

## 📝 使用指南

> 💡 **重要提醒**：現在所有內容都整合在 `index.html` 中，直接編輯此文件即可！

### 1. 修改個人資訊
**編輯文件**：`index.html`  
**尋找區塊**：`<!-- HEADER 區域 - 頁面頂部個人資訊 -->`

```html
<!-- 修改姓名 -->
<h1 class="name">你的姓名</h1>

<!-- 修改職位 -->
<h2 class="title">你的職位標題</h2>

<!-- 修改聯絡資訊 -->
<a href="mailto:你的email" class="contact-link">你的email</a>
```

### 2. 修改關於我、教育背景、技能
**編輯文件**：`index.html`  
**尋找區塊**：`<!-- SIDEBAR 區域 - 側邊欄個人資訊 -->`

#### 新增關於我內容
```html
<div class="about-card-level2">
    <h4>新的面向</h4>
    <p>你的描述內容</p>
</div>
```

#### 新增教育背景
```html
<div class="education-card-level2">
    <h4>學校名稱</h4>
    <p><strong>科系 學位</strong></p>
    <p><strong>就學期間</strong></p>
</div>
```

#### 新增技能專長
```html
<div class="skill-item" data-proficiency="熟練度百分比"><span>技能名稱</span></div>
```

### 3. 修改分頁按鈕
**編輯文件**：`index.html`  
**尋找區塊**：`<!-- Navigation 分頁按鈕 -->`

```html
<!-- 新增分頁按鈕 -->
<button class="tab-btn" data-tab="新分類ID">新分類名稱</button>
```

### 4. 新增活動經驗
**編輯文件**：`index.html`  
**尋找區塊**：`<!-- ACTIVITIES 分頁 - 活動經驗內容 -->`

在 `.timeline-container` 中新增：
```html
<div class="experience-item">
    <div class="experience-header">
        <h4 class="experience-title">活動名稱</h4>
        <div class="links-section">
            <a href="連結URL" class="link-item" target="_blank">連結文字</a>
        </div>
        <span class="experience-date">日期範圍</span>
    </div>
    <div class="experience-content">
        <p>活動描述內容</p>
        <p>可以使用 <span class="highlight">重點標記</span> 強調關鍵內容</p>
        <p>也可以使用 <span class="award">獎項標記</span> 標示獲獎內容</p>
        <div class="tech-stack">
            <span class="tech-tag">技能標籤1</span>
            <span class="tech-tag">技能標籤2</span>
        </div>
    </div>
</div>
```

### 5. 新增工作經驗
**編輯文件**：`index.html`  
**尋找區塊**：`<!-- WORK 分頁 - 工作經驗內容 -->`

使用相同的經驗項目結構即可。

## 🔧 進階功能

### 新增全新分頁
**直接在 `index.html` 中添加：**

1. **新增分頁按鈕**（在 Navigation 區域）：
```html
<button class="tab-btn" data-tab="projects">專案作品</button>
```

2. **新增分頁內容**（在 tab-content-container 中）：
```html
<div class="tab-content" id="projects-content">
    <div class="timeline-section">
        <h3 class="timeline-title">專案作品</h3>
        <div class="timeline-container">
            <!-- 專案內容 -->
        </div>
    </div>
</div>
```

### 使用 JavaScript 工具函數

#### 檢查系統狀態
```javascript
// 在瀏覽器控制台執行
checkSystemStatus();
```

#### 動態新增分頁
```javascript
// 新增專案作品分頁
addNewTab('projects', '專案作品', `
    <div class="timeline-section">
        <h3 class="timeline-title">專案作品</h3>
        <div class="timeline-container">
            <!-- 專案內容 -->
        </div>
    </div>
`);
```

#### 移除分頁
```javascript
// 移除特定分頁
removeTab('projects');
```

## 🛠️ 開發工具

### 除錯功能
打開瀏覽器的開發者工具（F12），在 Console 中可以看到：
- ✅ 組件載入成功訊息
- ❌ 載入失敗的錯誤訊息
- 🔄 分頁切換日誌
- 📊 組件狀態檢查

### 常用除錯指令
```javascript
// 檢查所有組件狀態
checkComponentStatus();

// 重新載入所有組件
ComponentLoader.loadAllComponents();

// 重新綁定分頁事件
TabManager.bindEvents();
```

## 🎨 樣式自定義

### CSS 模組對應
- **基礎佈局** → 修改 `css/base.css`
- **Header 動畫** → 修改 `css/header.css`
- **Sidebar 卡片** → 修改 `css/sidebar.css`
- **時間軸和標籤** → 修改 `css/content.css`

### 標籤系統
- `highlight` - 專案重點標記（米金色背景）
- `award` - 獲獎榮譽標記（亮金色背景 + 🏆）
- `tech-tag` - 技術技能標記（藍灰色背景 + 🔧）

## 🚀 部署說明

### 架構優勢
✅ **可直接開啟**：解決了 CORS 限制問題，無需 HTTP 伺服器  
✅ **保持模組化**：CSS 和 JavaScript 仍然模組化，易於維護  
✅ **分享方便**：可以直接分享 HTML 文件給他人查看  

### 本地使用
```bash
# 直接雙擊開啟
index.html

# 或使用瀏覽器開啟
# 無需任何伺服器設定！
```

### 生產部署
- **GitHub Pages**：直接推送到倉庫即可
- **其他平台**：上傳所有文件到網頁伺服器根目錄
- **本機分享**：可直接將資料夾壓縮分享給他人

## 🔍 故障排除

### 常見問題

**Q: 頁面空白或內容未顯示**
A: 檢查瀏覽器控制台是否有錯誤訊息，確認 CSS 和 JavaScript 文件路徑正確

**Q: 分頁切換無效**
A: 在控制台執行 `checkSystemStatus()` 檢查系統狀態，確認分頁按鈕和內容是否正確對應

**Q: 技能進度條沒有動畫**
A: 確認技能項目的 `data-proficiency` 屬性設定正確

**Q: 樣式未生效**
A: 確認 CSS 文件路徑正確，檢查瀏覽器快取，或強制重新整理 (Ctrl+F5)

### 除錯步驟
1. 打開瀏覽器開發者工具（F12）
2. 查看 Console 標籤的訊息
3. 執行 `checkSystemStatus()` 檢查系統狀態
4. 檢查 Network 標籤是否有載入失敗的 CSS/JS 文件

## 📄 授權

此專案為個人簡歷模板，採用模組化架構設計，歡迎參考學習。如有任何問題或建議，請隨時聯絡。

---

**維護者**：蔡沐恩  
**更新日期**：2024年  
**版本**：混合模組化版本 v3.0  
**架構特色**：可直接開啟 + 模組化設計 🎯