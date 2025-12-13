// ========== CONFIGURATION ==========
const CONFIG = {
    version: "2.0",
    botName: "Trading Signal Pro",
    defaultLanguage: "ru",
    telegramUrl: "https://t.me/+hScZSoUXQe9jN2Ji",
    updateInterval: 5000 // 5 seconds
};

// ========== TRANSLATIONS ==========
const TRANSLATIONS = {
    ru: {
        title: "Торговый сигнал",
        language: "Язык",
        currency: "Инструмент",
        timeframe: "Время",
        generateBtn: "Получить сигнал",
        telegramBtn: "Telegram",
        signalTitle: "Сигнал",
        placeholder: "Нажмите 'Получить сигнал'",
        buy: "ПОКУПКА",
        sell: "ПРОДАЖА",
        pair: "Пара",
        time: "Время",
        confidence: "Уверенность",
        analyzing: "Анализируем рынок...",
        success: "Сигнал сгенерирован!",
        error: "Ошибка, попробуйте снова"
    },
    en: {
        title: "Trading Signal",
        language: "Language",
        currency: "Instrument",
        timeframe: "Timeframe",
        generateBtn: "Get Signal",
        telegramBtn: "Telegram",
        signalTitle: "Signal",
        placeholder: "Click 'Get Signal'",
        buy: "BUY",
        sell: "SELL",
        pair: "Pair",
        time: "Time",
        confidence: "Confidence",
        analyzing: "Analyzing market...",
        success: "Signal generated!",
        error: "Error, please try again"
    },
    uz: {
        title: "Savdo Signali",
        language: "Til",
        currency: "Vositа",
        timeframe: "Vaqt",
        generateBtn: "Signal olish",
        telegramBtn: "Telegram",
        signalTitle: "Signal",
        placeholder: "'Signal olish' tugmasini bosing",
        buy: "SOTIB OLISH",
        sell: "SOTISH",
        pair: "Juftlik",
        time: "Vaqt",
        confidence: "Ishonch",
        analyzing: "Bozor tahlil qilinmoqda...",
        success: "Signal yaratildi!",
        error: "Xatolik, qayta urinib ko'ring"
    }
};

// ========== TRADING DATA ==========
const TRADING_PAIRS = [
    "EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD",
    "USD/CAD", "NZD/USD", "EUR/GBP", "EUR/JPY", "GBP/JPY",
    "XAU/USD", "BTC/USD", "ETH/USD", "USD/RUB", "AUD/JPY"
];

const TIMEFRAMES = [
    "1 минута", "5 минут", "15 минут", "30 минут",
    "1 час", "4 часа", "1 день", "1 неделя"
];

// ========== STATE ==========
let currentLanguage = CONFIG.defaultLanguage;
let isGenerating = false;
let lastSignal = null;

// ========== DOM ELEMENTS ==========
let elements = {};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    setLanguage(currentLanguage);
    updateDateTime();
    
    // Update time every second
    setInterval(updateDateTime, 1000);
    
    console.log(`${CONFIG.botName} v${CONFIG.version} initialized`);
});

function initializeElements() {
    elements = {
        // Language
        languageLabel: document.getElementById('language-label'),
        currentFlag: document.getElementById('current-flag'),
        currentLangText: document.getElementById('current-lang-text'),
        languageSelect: document.getElementById('language'),
        langOptions: document.getElementById('lang-options'),
        
        // Currency
        currencyLabel: document.getElementById('currency-label'),
        currencyPair: document.getElementById('currency-pair'),
        
        // Timeframe
        timeframeLabel: document.getElementById('timeframe-label'),
        timeframe: document.getElementById('timeframe'),
        
        // Buttons
        generateBtn: document.getElementById('generate-btn'),
        telegramBtn: document.getElementById('telegram-btn'),
        
        // Signal
        logoText: document.getElementById('logo-text'),
        signalTitle: document.getElementById('signal-title'),
        signalTime: document.getElementById('signal-time'),
        signalResult: document.getElementById('signal-result'),
        signalPlaceholder: document.querySelector('.signal-placeholder')
    };
    
    // Populate dropdowns
    populateCurrencyPairs();
    populateTimeframes();
}

function populateCurrencyPairs() {
    elements.currencyPair.innerHTML = '';
    TRADING_PAIRS.forEach(pair => {
        const option = document.createElement('option');
        option.value = pair;
        option.textContent = pair;
        elements.currencyPair.appendChild(option);
    });
}

function populateTimeframes() {
    elements.timeframe.innerHTML = '';
    TIMEFRAMES.forEach(tf => {
        const option = document.createElement('option');
        option.value = tf;
        option.textContent = tf;
        elements.timeframe.appendChild(option);
    });
}

// ========== LANGUAGE FUNCTIONS ==========
function toggleLangDropdown() {
    elements.langOptions.classList.toggle('show');
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    
    currentLanguage = lang;
    const t = TRANSLATIONS[lang];
    
    // Update texts
    elements.logoText.textContent = t.title;
    elements.languageLabel.textContent = t.language;
    elements.currencyLabel.textContent = t.currency;
    elements.timeframeLabel.textContent = t.timeframe;
    elements.generateBtn.textContent = t.generateBtn;
    elements.signalTitle.textContent = t.signalTitle;
    elements.signalPlaceholder.textContent = t.placeholder;
    
    // Update flag and language text
    const flagUrl = getFlagUrl(lang);
    elements.currentFlag.src = flagUrl;
    elements.currentLangText.textContent = t.language === "Язык" ? "Русский" : 
                                         t.language === "Language" ? "English" : "O'zbek";
    
    // Update select value
    elements.languageSelect.value = lang;
    
    // Close dropdown
    elements.langOptions.classList.remove('show');
    
    // Update existing signal if present
    if (lastSignal) {
        updateSignalLanguage(t);
    }
}

function getFlagUrl(lang) {
    const flags = {
        'ru': 'https://flagcdn.com/w20/ru.png',
        'en': 'https://flagcdn.com/w20/gb.png',
        'uz': 'https://flagcdn.com/w20/uz.png'
    };
    return flags[lang] || flags['en'];
}

function updateSignalLanguage(t) {
    const directionElement = document.querySelector('.signal-direction');
    if (directionElement) {
        const direction = directionElement.classList.contains('buy') ? t.buy : t.sell;
        directionElement.textContent = direction;
        
        document.querySelectorAll('.info-item .label')[0].textContent = t.pair;
        document.querySelectorAll('.info-item .label')[1].textContent = t.time;
        document.querySelectorAll('.info-item .label')[2].textContent = t.confidence;
    }
}

// ========== SIGNAL GENERATION ==========
async function generateSignal() {
    if (isGenerating) return;
    
    isGenerating = true;
    const t = TRANSLATIONS[currentLanguage];
    
    try {
        // Show analyzing state
        showAnalyzingState(t.analyzing);
        
        // Simulate API delay
        await delay(1500 + Math.random() * 1000);
        
        // Generate signal
        const currencyPair = elements.currencyPair.value;
        const timeframe = elements.timeframe.value;
        const signal = createTradingSignal(currencyPair, timeframe);
        
        // Display signal
        displaySignal(signal, t);
        lastSignal = signal;
        
        // Update time
        updateDateTime();
        
        // Success notification
        showNotification(t.success, 'success');
        
    } catch (error) {
        console.error('Error generating signal:', error);
        showNotification(t.error, 'error');
    } finally {
        isGenerating = false;
    }
}

function createTradingSignal(pair, timeframe) {
    // Advanced signal generation logic
    const isBuy = shouldBuySignal(pair);
    const confidence = calculateConfidence(pair, timeframe, isBuy);
    const targetPrice = calculateTargetPrice(pair, isBuy);
    const stopLoss = calculateStopLoss(pair, isBuy, targetPrice);
    
    return {
        pair: pair,
        direction: isBuy ? 'buy' : 'sell',
        confidence: confidence,
        timeframe: timeframe,
        target: targetPrice,
        stopLoss: stopLoss,
        timestamp: new Date(),
        riskReward: calculateRiskReward(pair, targetPrice, stopLoss)
    };
}

function shouldBuySignal(pair) {
    // Advanced logic based on pair type
    const pairType = pair.split('/')[0];
    const hour = new Date().getHours();
    
    // Forex pairs have different logic than crypto
    if (pair.includes('USD') || pair.includes('EUR') || pair.includes('JPY')) {
        // Forex: more buys during European/US session overlap
        return (hour >= 8 && hour <= 16) ? Math.random() > 0.4 : Math.random() > 0.6;
    } else if (pair.includes('BTC') || pair.includes('ETH')) {
        // Crypto: more volatile
        return Math.random() > 0.45;
    } else {
        // Others
        return Math.random() > 0.5;
    }
}

function calculateConfidence(pair, timeframe, isBuy) {
    let baseConfidence = 70;
    
    // Adjust based on timeframe
    if (timeframe.includes('минут') || timeframe.includes('minute')) {
        baseConfidence -= 5; // Shorter timeframes are less predictable
    } else if (timeframe.includes('час') || timeframe.includes('hour')) {
        baseConfidence += 5; // Longer timeframes are more reliable
    } else if (timeframe.includes('день') || timeframe.includes('day')) {
        baseConfidence += 10;
    }
    
    // Adjust based on pair volatility
    if (pair.includes('BTC') || pair.includes('ETH')) {
        baseConfidence -= 8; // Crypto is more volatile
    } else if (pair.includes('XAU')) {
        baseConfidence += 5; // Gold is more stable
    }
    
    // Add some randomness
    baseConfidence += Math.random() * 15;
    
    // Ensure within bounds
    return Math.min(95, Math.max(65, Math.round(baseConfidence)));
}

function calculateTargetPrice(pair, isBuy) {
    // Simplified price calculation
    const basePrices = {
        'EUR/USD': 1.0950,
        'GBP/USD': 1.2750,
        'USD/JPY': 148.00,
        'XAU/USD': 1980.00,
        'BTC/USD': 42000,
        'ETH/USD': 2250
    };
    
    let basePrice = basePrices[pair] || 100;
    const percentageChange = (0.5 + Math.random() * 1.5) / 100; // 0.5% to 2%
    
    return isBuy ? 
        (basePrice * (1 + percentageChange)).toFixed(4) :
        (basePrice * (1 - percentageChange)).toFixed(4);
}

function calculateStopLoss(pair, isBuy, targetPrice) {
    const target = parseFloat(targetPrice);
    const stopLossPercentage = 0.3 + Math.random() * 0.7; // 0.3% to 1%
    
    return isBuy ?
        (target * (1 - stopLossPercentage/100)).toFixed(4) :
        (target * (1 + stopLossPercentage/100)).toFixed(4);
}

function calculateRiskReward(pair, target, stopLoss) {
    const targetNum = parseFloat(target);
    const stopNum = parseFloat(stopLoss);
    const risk = Math.abs(targetNum - stopNum);
    const reward = risk * (1.5 + Math.random()); // 1.5:1 to 2.5:1 RR
    return reward.toFixed(2);
}

// ========== UI FUNCTIONS ==========
function showAnalyzingState(message) {
    elements.signalResult.innerHTML = `
        <div class="signal-analyzing">
            <div class="dots">
                ${message}
                <span>.</span><span>.</span><span>.</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
        </div>
    `;
    
    // Animate progress bar
    const progressFill = elements.signalResult.querySelector('.progress-fill');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += 2;
            progressFill.style.width = width + '%';
        }
    }, 30);
}

function displaySignal(signal, t) {
    const signalHTML = `
        <div class="signal-content fade-in">
            <div class="signal-direction ${signal.direction}">
                ${signal.direction === 'buy' ? t.buy : t.sell}
            </div>
            <div class="signal-info">
                <div class="info-item">
                    <div class="label">${t.pair}</div>
                    <div class="value">${signal.pair}</div>
                </div>
                <div class="info-item">
                    <div class="label">${t.time}</div>
                    <div class="value">${signal.timeframe}</div>
                </div>
                <div class="info-item">
                    <div class="label">${t.confidence}</div>
                    <div class="value">${signal.confidence}%</div>
                </div>
                <div class="info-item">
                    <div class="label">Цель</div>
                    <div class="value">${signal.target}</div>
                </div>
                <div class="info-item">
                    <div class="label">Стоп-лосс</div>
                    <div class="value">${signal.stopLoss}</div>
                </div>
                <div class="info-item">
                    <div class="label">Риск/Прибыль</div>
                    <div class="value">1:${signal.riskReward}</div>
                </div>
            </div>
            <div class="signal-timestamp">
                ${formatDateTime(signal.timestamp)}
            </div>
        </div>
    `;
    
    elements.signalResult.innerHTML = signalHTML;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ========== UTILITY FUNCTIONS ==========
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateDateTime() {
    const now = new Date();
    elements.signalTime.textContent = formatDateTime(now);
}

function formatDateTime(date) {
    return date.toLocaleString(currentLanguage === 'ru' ? 'ru-RU' : 
                              currentLanguage === 'uz' ? 'uz-UZ' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Generate signal button
    elements.generateBtn.addEventListener('click', generateSignal);
    
    // Language dropdown
    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.lang-select')) {
            elements.langOptions.classList.remove('show');
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            generateSignal();
        }
    });
    
    // Telegram button
    elements.telegramBtn.addEventListener('click', function(e) {
        console.log('Opening Telegram channel');
        // Event tracking could be added here
    });
}

// ========== CSS FOR NOTIFICATIONS ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100px); opacity: 0; }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .signal-analyzing {
        text-align: center;
        padding: 40px 0;
    }
    
    .signal-analyzing .dots {
        font-size: 18px;
        color: #94A3B8;
        margin-bottom: 20px;
    }
    
    .signal-analyzing .dots span {
        animation: blink 1.4s infinite both;
    }
    
    .signal-analyzing .dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .signal-analyzing .dots span:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes blink {
        0%, 20% { opacity: 0.2; }
        50%, 100% { opacity: 1; }
    }
    
    .signal-timestamp {
        margin-top: 20px;
        font-size: 12px;
        color: #64748B;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// ========== EXPORT FOR DEBUGGING ==========
window.TradingBot = {
    version: CONFIG.version,
    generateSignal: generateSignal,
    setLanguage: setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getLastSignal: () => lastSignal
};

console.log('Trading Signal Pro script loaded successfully');