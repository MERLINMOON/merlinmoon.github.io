// ====================================== 
// 個人簡歷網站 - 混合模組化版本
// JavaScript 功能模組 - 分頁切換系統
// ====================================== 

/**
 * 分頁管理器 - 負責處理分頁切換功能
 */
class TabManager {
    constructor() {
        this.currentTab = 'activities'; // 預設分頁
        this.init();
    }

    /**
     * 初始化分頁系統
     */
    init() {
        console.log('🚀 分頁系統初始化中...');
        this.bindEvents();
        this.initializeSkillBars();
        console.log('✅ 分頁系統初始化完成');
    }

    /**
     * 綁定事件監聽器
     */
    bindEvents() {
        // 分頁按鈕點擊事件
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tabId = e.target.getAttribute('data-tab');
                this.switchTab(tabId);
            });
        });

        console.log(`📌 已綁定 ${tabButtons.length} 個分頁按鈕事件`);
    }

    /**
     * 切換分頁
     * @param {string} tabId - 分頁ID
     */
    switchTab(tabId) {
        console.log(`🔄 切換分頁: ${this.currentTab} → ${tabId}`);

        // 移除所有按鈕的 active 狀態
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // 移除所有內容的 active 狀態
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // 添加新的 active 狀態
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        const activeContent = document.getElementById(`${tabId}-content`);

        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
            this.currentTab = tabId;
            console.log(`✅ 分頁切換成功: ${tabId}`);
        } else {
            console.error(`❌ 找不到分頁: ${tabId}`);
        }
    }

    /**
     * 初始化技能進度條動畫
     */
    initializeSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const proficiency = item.getAttribute('data-proficiency');
            if (proficiency) {
                // 設置進度條寬度
                item.style.setProperty('--proficiency', `${proficiency}%`);
                
                // 添加動畫延遲
                setTimeout(() => {
                    item.classList.add('animated');
                }, Math.random() * 1000);
            }
        });

        console.log(`🎯 已初始化 ${skillItems.length} 個技能進度條`);
    }

    /**
     * 獲取當前分頁
     * @returns {string} 當前分頁ID
     */
    getCurrentTab() {
        return this.currentTab;
    }
}

/**
 * 工具函數集合
 */
const Utils = {
    /**
     * 動態新增分頁
     * @param {string} tabId - 分頁ID
     * @param {string} tabName - 分頁名稱
     * @param {string} content - 分頁內容HTML
     */
    addNewTab(tabId, tabName, content) {
        console.log(`➕ 新增分頁: ${tabName} (${tabId})`);

        // 新增分頁按鈕
        const navigation = document.querySelector('.tab-navigation');
        const newButton = document.createElement('button');
        newButton.className = 'tab-btn';
        newButton.setAttribute('data-tab', tabId);
        newButton.textContent = tabName;
        navigation.appendChild(newButton);

        // 新增分頁內容
        const contentContainer = document.querySelector('.tab-content-container');
        const newContent = document.createElement('div');
        newContent.className = 'tab-content';
        newContent.id = `${tabId}-content`;
        newContent.innerHTML = content;
        contentContainer.appendChild(newContent);

        // 重新綁定事件
        tabManager.bindEvents();
        
        console.log(`✅ 分頁 ${tabName} 新增成功`);
    },

    /**
     * 移除分頁
     * @param {string} tabId - 要移除的分頁ID
     */
    removeTab(tabId) {
        console.log(`➖ 移除分頁: ${tabId}`);

        const button = document.querySelector(`[data-tab="${tabId}"]`);
        const content = document.getElementById(`${tabId}-content`);

        if (button) button.remove();
        if (content) content.remove();

        console.log(`✅ 分頁 ${tabId} 移除成功`);
    },

    /**
     * 檢查系統狀態
     */
    checkSystemStatus() {
        const tabButtons = document.querySelectorAll('.tab-btn').length;
        const tabContents = document.querySelectorAll('.tab-content').length;
        const skillItems = document.querySelectorAll('.skill-item').length;

        console.log('📊 系統狀態檢查:');
        console.log(`   • 分頁按鈕: ${tabButtons} 個`);
        console.log(`   • 分頁內容: ${tabContents} 個`);
        console.log(`   • 技能項目: ${skillItems} 個`);
        console.log(`   • 當前分頁: ${tabManager.getCurrentTab()}`);
        
        return {
            tabButtons,
            tabContents,
            skillItems,
            currentTab: tabManager.getCurrentTab()
        };
    }
};

// ====================================== 
// 全域變數和初始化
// ====================================== 

// 全域分頁管理器實例
let tabManager;

/**
 * 頁面載入完成後初始化
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 頁面載入完成，開始初始化...');
    
    // 初始化分頁管理器
    tabManager = new TabManager();
    
    // 將工具函數掛載到全域 window 物件，方便除錯
    window.addNewTab = Utils.addNewTab;
    window.removeTab = Utils.removeTab;
    window.checkSystemStatus = Utils.checkSystemStatus;
    
    console.log('🎉 個人簡歷網站初始化完成！');
    console.log('💡 除錯指令:');
    console.log('   • checkSystemStatus() - 檢查系統狀態');
    console.log('   • addNewTab(id, name, content) - 新增分頁');
    console.log('   • removeTab(id) - 移除分頁');
});

/**
 * 頁面載入錯誤處理
 */
window.addEventListener('error', function(e) {
    console.error('❌ 頁面載入錯誤:', e.error);
});

// ====================================== 
// 模組導出（供其他腳本使用）
// ====================================== 

// 如果在模組環境中，導出相關功能
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TabManager,
        Utils
    };
} 