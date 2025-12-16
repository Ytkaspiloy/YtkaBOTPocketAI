// Конфигурация бота
const CONFIG = {
    // Список инструментов для Forex рынка
    FOREX_INSTRUMENTS: [
        "GBP/CAD", "EUR/JPY", "CHF/JPY", "AUD/CAD", "USD/CAD",
        "USD/CHF", "GBP/AUD", "USD/JPY", "EUR/USD", "EUR/AUD",
        "AUD/USD", "CAD/JPY", "AUD/JPY", "EUR/GBP", "GBP/JPY",
        "GBP/CHF", "EUR/CAD", "CAD/CHF", "AUD/CHF"
    ],
    
    // Список инструментов для OTC рынка
    OTC_INSTRUMENTS: [
        // ВАЛЮТНЫЕ ПАРЫ
        "AUDCAD_OTC", "AUDCHF_OTC", "AUDJPY_OTC", "AUDNZD_OTC", "AUDUSD_OTC",
        "CADCHF_OTC", "CADJPY_OTC", "CHFJPY_OTC", "CHFNOK_OTC",
        "EURCHF_OTC", "EURGBP_OTC", "EURHUF_OTC", "EURJPY_OTC",
        "EURNZD_OTC", "EURTRY_OTC", "EURUSD_OTC",
        "GBPAUD_OTC", "GBPJPY_OTC", "GBPUSD_OTC",
        "NZDJPY_OTC", "NZDUSD_OTC",
        "USDCAD_OTC", "USDCHF_OTC", "USDJPY_OTC",
        
        // ЭКЗОТИЧЕСКИЕ ВАЛЮТЫ
        "USDARS_OTC", "USDBDT_OTC", "USDBRL_OTC", "USDCLP_OTC",
        "USDCNH_OTC", "USDCOP_OTC", "USDDZD_OTC", "USDEGP_OTC",
        "USDIDR_OTC", "USDINR_OTC", "USDMXN_OTC", "USDMYR_OTC",
        "USDPHP_OTC", "USDPKR_OTC", "USDSGD_OTC",
        "USDTHB_OTC", "USDVND_OTC", "YERUSD_OTC", "ZARUSD_OTC",
        "UAHUSD_OTC", "LBPUSD_OTC", "NGNUSD_OTC",
        "TNDUSD_OTC", "KESUSD_OTC", "MADUSD_OTC",
        
        // ВАЛЮТЫ С CNY
        "AEDCNY_OTC", "BHDCNY_OTC", "JODCNY_OTC", "OMRCNY_OTC",
        "QARCNY_OTC", "SARCNY_OTC",
        
        // КРИПТОВАЛЮТЫ
        "Bitcoin_OTC", "Ethereum_OTC", "Litecoin_OTC", "Cardano_OTC",
        "Polkadot_OTC", "Chainlink_OTC", "Dogecoin_OTC", "BNB_OTC",
        "Solana_OTC", "Polygon_OTC", "Avalanche_OTC", "Toncoin_OTC",
        "TRON_OTC", "Bitcoin_ETF_OTC",
        
        // АКЦИИ
        "Johnson&Johnson_OTC", "Apple_OTC", "American_Express_OTC",
        "Boeing_Company_OTC", "Cisco_OTC", "FACEBOOK_INC_OTC",
        "Intel_OTC", "McDonalds_OTC", "Microsoft_OTC", "Pfizer_Inc_OTC",
        "Tesla_OTC", "ExxonMobil_OTC", "Advanced_Micro_Devices_OTC",
        "Amazon_OTC", "Alibaba_OTC", "Citigroup_Inc_OTC",
        "Coinbase_Global_OTC", "Palantir_Technologies_OTC",
        "FedEx_OTC", "GameStop_Corp_OTC",
        "Marathon_Digital_Holdings_OTC", "Netflix_OTC", "VISA_OTC", "VIX_OTC",
        
        // ИНДЕКСЫ
        "100GBP_OTC", "AUS_200_OTC", "D30EUR_OTC", "DJI30_OTC",
        "E35EUR_OTC", "E50EUR_OTC", "F40EUR_OTC", "JPN225_OTC",
        "US100_OTC", "SP500_OTC",
        
        // СЫРЬЕ И МЕТАЛЛЫ
        "Gold_OTC", "Silver_OTC", "Natural_Gas_OTC",
        "Palladium_spot_OTC", "Platinum_spot_OTC", "Brent_Oil_OTC",
        "WTI_Crude_Oil_OTC"
    ],
    
    // Мультиязычность
    TRANSLATIONS: {
        ru: {
            // Общие
            'logo-text': 'Scalping Signal Pro',
            'market-label': 'Рынок',
            'currency-label': 'Инструмент',
            'timeframe-label': 'Таймфрейм',
            'risk-label': 'Уровень риска',
            'start-btn-text': 'Запуск бота',
            'stop-btn-text': 'Остановить',
            'stats-title': 'Статистика',
            'total-signals-label': 'Всего сигналов',
            'win-rate-label': 'Win Rate',
            'profit-label': 'Прибыль',
            'chart-title': 'График в реальном времени',
            'signal-title': 'Текущий сигнал',
            'history-title': 'История сигналов',
            
            // Состояния
            'status-connecting': 'Соединение с MT5...',
            'status-connected': 'Подключено к MT5',
            'status-disconnected': 'Отключено от MT5',
            'analyzing-waiting': 'Ожидание сигнала',
            'analyzing-processing': 'Анализ рынка',
            'signal-buy': 'ПОКУПКА',
            'signal-sell': 'ПРОДАЖА',
            'signal-break-even': 'БЕЗ УБЫТКА',
            'signal-profit': 'ПРИБЫЛЬ',
            'signal-loss': 'УБЫТОК'
        },
        en: {
            'logo-text': 'Scalping Signal Pro',
            'market-label': 'Market',
            'currency-label': 'Instrument',
            'timeframe-label': 'Timeframe',
            'risk-label': 'Risk Level',
            'start-btn-text': 'Start Bot',
            'stop-btn-text': 'Stop',
            'stats-title': 'Statistics',
            'total-signals-label': 'Total Signals',
            'win-rate-label': 'Win Rate',
            'profit-label': 'Profit',
            'chart-title': 'Real-Time Chart',
            'signal-title': 'Current Signal',
            'history-title': 'Signal History',
            
            'status-connecting': 'Connecting to MT5...',
            'status-connected': 'Connected to MT5',
            'status-disconnected': 'Disconnected from MT5',
            'analyzing-waiting': 'Waiting for signal',
            'analyzing-processing': 'Analyzing market',
            'signal-buy': 'BUY',
            'signal-sell': 'SELL',
            'signal-break-even': 'BREAK EVEN',
            'signal-profit': 'PROFIT',
            'signal-loss': 'LOSS'
        },
        uz: {
            'logo-text': 'Scalping Signal Pro',
            'market-label': 'Bozor',
            'currency-label': 'Instrument',
            'timeframe-label': 'Vaqt oraligi',
            'risk-label': 'Xavr Darajasi',
            'start-btn-text': 'Botni ishga tushirish',
            'stop-btn-text': 'To\'xtatish',
            'stats-title': 'Statistika',
            'total-signals-label': 'Jami signal',
            'win-rate-label': 'G\'alaba foizi',
            'profit-label': 'Foyda',
            'chart-title': 'Real vaqtda grafik',
            'signal-title': 'Joriy signal',
            'history-title': 'Signal tarixi',
            
            'status-connecting': 'MT5 ga ulanmoqda...',
            'status-connected': 'MT5 ga ulangan',
            'status-disconnected': 'MT5 dan uzilgan',
            'analyzing-waiting': 'Signal kutilmoqda',
            'analyzing-processing': 'Bozor tahlili',
            'signal-buy': 'SOTIB OLISH',
            'signal-sell': 'SOTISH',
            'signal-break-even': 'ZARARSIZ',
            'signal-profit': 'FOYDA',
            'signal-loss': 'ZARAR'
        }
    }
};

// Глобальные переменные
let currentLanguage = 'ru';
let isBotRunning = false;
let currentChart = null;
let currentInstrument = 'EUR/USD';
let currentTimeframe = 5;
let botInterval = null;
let signalHistory = [];
let statistics = {
    totalSignals: 0,
    profitableSignals: 0,
    totalProfit: 0,
    winRate: 0
};

// Эмуляция данных MT5 (в реальном проекте здесь будет WebSocket подключение)
class MT5DataFeed {
    constructor() {
        this.prices = {};
        this.initPrices();
    }
    
    initPrices() {
        // Инициализация стартовых цен для всех инструментов
        const allInstruments = [...CONFIG.FOREX_INSTRUMENTS, ...CONFIG.OTC_INSTRUMENTS];
        allInstruments.forEach(instrument => {
            const basePrice = this.getRandomPrice(instrument);
            this.prices[instrument] = {
                bid: basePrice,
                ask: basePrice + 0.0001,
                last: basePrice,
                volume: Math.floor(Math.random() * 1000) + 100
            };
        });
    }
    
    getRandomPrice(instrument) {
        // Генерация реалистичных цен в зависимости от инструмента
        if (instrument.includes('USD')) return 1.0 + Math.random() * 0.5;
        if (instrument.includes('EUR')) return 0.8 + Math.random() * 0.4;
        if (instrument.includes('GBP')) return 1.2 + Math.random() * 0.3;
        if (instrument.includes('JPY')) return 100 + Math.random() * 50;
        if (instrument.includes('Gold')) return 1800 + Math.random() * 500;
        if (instrument.includes('BTC')) return 30000 + Math.random() * 20000;
        return 1.0 + Math.random();
    }
    
    getCurrentPrice(instrument) {
        if (!this.prices[instrument]) {
            this.prices[instrument] = {
                bid: this.getRandomPrice(instrument),
                ask: this.getRandomPrice(instrument) + 0.0001,
                last: this.getRandomPrice(instrument),
                volume: Math.floor(Math.random() * 1000) + 100
            };
        }
        
        // Эмуляция движения цены
        const change = (Math.random() - 0.5) * 0.001;
        this.prices[instrument].bid += change;
        this.prices[instrument].ask = this.prices[instrument].bid + 0.0001;
        this.prices[instrument].last = this.prices[instrument].bid;
        
        return { ...this.prices[instrument] };
    }
    
    getHistoricalData(instrument, timeframe, bars = 100) {
        const data = [];
        let price = this.getRandomPrice(instrument);
        
        for (let i = bars; i > 0; i--) {
            const change = (Math.random() - 0.5) * 0.01;
            price += change;
            
            data.push({
                time: Date.now() / 1000 - i * timeframe,
                open: price - Math.random() * 0.005,
                high: price + Math.random() * 0.01,
                low: price - Math.random() * 0.01,
                close: price,
                volume: Math.floor(Math.random() * 1000) + 100
            });
        }
        
        return data;
    }
}

// Инициализация фида данных
const mt5Feed = new MT5DataFeed();

// AI анализатор рынка
class MarketAnalyzer {
    analyze(instrument, timeframe) {
        const priceData = mt5Feed.getHistoricalData(instrument, timeframe, 50);
        const currentPrice = mt5Feed.getCurrentPrice(instrument);
        
        // Технический анализ (упрощенный)
        const lastBars = priceData.slice(-5);
        const trend = this.calculateTrend(lastBars);
        const volatility = this.calculateVolatility(priceData);
        const momentum = this.calculateMomentum(priceData);
        
        // Генерация сигнала на основе анализа
        let signal = 'neutral';
        let confidence = 50;
        
        if (momentum > 0.5 && trend === 'up') {
            signal = 'buy';
            confidence = 60 + Math.random() * 30;
        } else if (momentum < -0.5 && trend === 'down') {
            signal = 'sell';
            confidence = 60 + Math.random() * 30;
        }
        
        return {
            signal,
            confidence: Math.min(95, Math.max(5, confidence)),
            entryPrice: currentPrice.bid,
            stopLoss: signal === 'buy' ? currentPrice.bid * 0.999 : currentPrice.bid * 1.001,
            takeProfit: signal === 'buy' ? currentPrice.bid * 1.002 : currentPrice.bid * 0.998,
            analysis: {
                trend,
                volatility,
                momentum
            }
        };
    }
    
    calculateTrend(bars) {
        const first = bars[0].close;
        const last = bars[bars.length - 1].close;
        const change = (last - first) / first;
        
        if (change > 0.001) return 'up';
        if (change < -0.001) return 'down';
        return 'sideways';
    }
    
    calculateVolatility(bars) {
        const changes = [];
        for (let i = 1; i < bars.length; i++) {
            changes.push(Math.abs((bars[i].close - bars[i-1].close) / bars[i-1].close));
        }
        return changes.reduce((a, b) => a + b, 0) / changes.length;
    }
    
    calculateMomentum(bars) {
        if (bars.length < 2) return 0;
        const recent = bars.slice(-3);
        const older = bars.slice(-6, -3);
        
        const recentAvg = recent.reduce((sum, bar) => sum + bar.close, 0) / recent.length;
        const olderAvg = older.reduce((sum, bar) => sum + bar.close, 0) / older.length;
        
        return (recentAvg - olderAvg) / olderAvg;
    }
    
    calculateResult(signal, entryPrice, closePrice) {
        if (signal === 'buy') {
            const change = (closePrice - entryPrice) / entryPrice;
            if (change > 0.0001) return 'profit';
            if (change < -0.0001) return 'loss';
            return 'break-even';
        } else if (signal === 'sell') {
            const change = (entryPrice - closePrice) / entryPrice;
            if (change > 0.0001) return 'profit';
            if (change < -0.0001) return 'loss';
            return 'break-even';
        }
        return 'neutral';
    }
}

// Инициализация анализатора
const analyzer = new MarketAnalyzer();

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initInstruments();
    initChart();
    initEventListeners();
    updateStatisticsDisplay();
    simulateMT5Connection();
});

// Мультиязычность
function initLanguage() {
    const savedLang = localStorage.getItem('scalping_language') || 'ru';
    changeLanguage(savedLang);
    
    // Настройка кастомного селектора языка
    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.dataset.lang;
            const flag = this.dataset.flag;
            changeLanguage(lang);
            
            // Обновление кастомного селектора
            document.getElementById('current-flag').src = flag;
            document.getElementById('current-lang-text').textContent = this.textContent;
            document.getElementById('language').value = lang;
            
            toggleLangDropdown();
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('scalping_language', lang);
    
    // Применение переводов
    const translations = CONFIG.TRANSLATIONS[lang];
    Object.keys(translations).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
                element.placeholder = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Обновление кнопок
    updateButtonStates();
}

function toggleLangDropdown() {
    const dropdown = document.getElementById('lang-options');
    dropdown.classList.toggle('show');
}

// Инициализация инструментов
function initInstruments() {
    const marketSelect = document.getElementById('market-type');
    const instrumentSelect = document.getElementById('currency-pair');
    
    marketSelect.addEventListener('change', function() {
        updateInstruments(this.value);
    });
    
    // Загрузка Forex инструментов по умолчанию
    updateInstruments('forex');
}

function updateInstruments(market) {
    const instrumentSelect = document.getElementById('currency-pair');
    instrumentSelect.innerHTML = '';
    
    const instruments = market === 'forex' ? CONFIG.FOREX_INSTRUMENTS : CONFIG.OTC_INSTRUMENTS;
    
    instruments.forEach(instrument => {
        const option = document.createElement('option');
        option.value = instrument;
        option.textContent = instrument;
        instrumentSelect.appendChild(option);
    });
    
    currentInstrument = instruments[0];
}

// Инициализация графика
function initChart() {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = '';
    
    const chart = LightweightCharts.createChart(chartContainer, {
        width: chartContainer.clientWidth,
        height: 400,
        layout: {
            background: { color: '#1e293b' },
            textColor: '#94a3b8',
        },
        grid: {
            vertLines: { color: '#334155' },
            horzLines: { color: '#334155' },
        },
        crosshair: {
            mode: LightweightCharts.CrosshairMode.Normal,
        },
        rightPriceScale: {
            borderColor: '#475569',
        },
        timeScale: {
            borderColor: '#475569',
            timeVisible: true,
            secondsVisible: true,
        },
    });
    
    const candleSeries = chart.addCandlestickSeries({
        upColor: '#10b981',
        downColor: '#ef4444',
        borderVisible: false,
        wickUpColor: '#10b981',
        wickDownColor: '#ef4444',
    });
    
    // Загрузка исторических данных
    const historicalData = mt5Feed.getHistoricalData(currentInstrument, 5, 100);
    candleSeries.setData(historicalData);
    
    currentChart = { chart, candleSeries };
    
    // Обновление графика в реальном времени
    setInterval(updateChart, 1000);
}

function updateChart() {
    if (!currentChart || !isBotRunning) return;
    
    const currentPrice = mt5Feed.getCurrentPrice(currentInstrument);
    const newCandle = {
        time: Date.now() / 1000,
        open: currentPrice.bid,
        high: currentPrice.bid * 1.0002,
        low: currentPrice.bid * 0.9998,
        close: currentPrice.bid,
    };
    
    currentChart.candleSeries.update(newCandle);
}

// Обработчики событий
function initEventListeners() {
    // Кнопки запуска/остановки бота
    document.getElementById('start-bot').addEventListener('click', startBot);
    document.getElementById('stop-bot').addEventListener('click', stopBot);
    
    // Изменение инструмента
    document.getElementById('currency-pair').addEventListener('change', function() {
        currentInstrument = this.value;
        if (currentChart) {
            const historicalData = mt5Feed.getHistoricalData(currentInstrument, currentTimeframe, 100);
            currentChart.candleSeries.setData(historicalData);
        }
    });
    
    // Изменение таймфрейма
    document.getElementById('timeframe').addEventListener('change', function() {
        currentTimeframe = parseInt(this.value);
        updateProgressBarDuration();
    });
    
    // Очистка истории
    document.getElementById('clear-history').addEventListener('click', clearHistory);
    
    // Кнопки управления графиком
    document.getElementById('chart-type-btn').addEventListener('click', toggleChartType);
    document.getElementById('timeframe-quick-btn').addEventListener('click', toggleQuickTimeframe);
}

// Управление ботом
function startBot() {
    if (isBotRunning) return;
    
    isBotRunning = true;
    updateButtonStates();
    updateStatus('connected');
    
    // Запуск цикла генерации сигналов
    botInterval = setInterval(generateSignal, currentTimeframe * 1000);
    
    // Начало прогресс-бара
    startProgressBar();
    
    console.log(`Бот запущен: ${currentInstrument} (${currentTimeframe} сек)`);
}

function stopBot() {
    if (!isBotRunning) return;
    
    isBotRunning = false;
    clearInterval(botInterval);
    updateButtonStates();
    updateStatus('disconnected');
    
    console.log('Бот остановлен');
}

function generateSignal() {
    if (!isBotRunning) return;
    
    // Показать состояние анализа
    showAnalyzingState();
    
    // Симуляция анализа (в реальном проекте здесь будет AI анализ)
    setTimeout(() => {
        const analysis = analyzer.analyze(currentInstrument, currentTimeframe);
        const currentPrice = mt5Feed.getCurrentPrice(currentInstrument);
        const closePrice = currentPrice.bid;
        
        // Расчет результата
        const result = analyzer.calculateResult(analysis.signal, analysis.entryPrice, closePrice);
        
        // Обновление отображения сигнала
        updateSignalDisplay(analysis, closePrice, result);
        
        // Добавление в историю
        addToHistory(analysis, closePrice, result);
        
        // Обновление статистики
        updateStatistics(result);
        
        // Сброс прогресс-бара
        resetProgressBar();
        
    }, 1000); // Симуляция времени анализа
}

// Отображение состояния анализа
function showAnalyzingState() {
    const analyzingText = document.getElementById('analyzing-text');
    const signalDetails = document.getElementById('signal-details');
    
    analyzingText.style.display = 'block';
    signalDetails.style.display = 'none';
    
    const text = CONFIG.TRANSLATIONS[currentLanguage]['analyzing-processing'];
    analyzingText.innerHTML = `${text}<span class="dots"><span>.</span><span>.</span><span>.</span></span>`;
}

// Обновление отображения сигнала
function updateSignalDisplay(analysis, closePrice, result) {
    const analyzingText = document.getElementById('analyzing-text');
    const signalDetails = document.getElementById('signal-details');
    const signalDirection = document.getElementById('signal-direction');
    const signalPair = document.getElementById('signal-pair');
    const entryPrice = document.getElementById('entry-price');
    const closePriceEl = document.getElementById('close-price');
    const signalResultText = document.getElementById('signal-result-text');
    const signalProbability = document.getElementById('signal-probability');
    const signalTime = document.getElementById('signal-time');
    
    // Показать детали сигнала
    analyzingText.style.display = 'none';
    signalDetails.style.display = 'block';
    
    // Обновление данных
    signalPair.textContent = currentInstrument;
    entryPrice.textContent = analysis.entryPrice.toFixed(5);
    closePriceEl.textContent = closePrice.toFixed(5);
    signalProbability.textContent = `${Math.round(analysis.confidence)}%`;
    
    // Время сигнала
    const now = new Date();
    signalTime.textContent = now.toLocaleTimeString();
    
    // Направление и результат
    const t = CONFIG.TRANSLATIONS[currentLanguage];
    
    if (analysis.signal === 'buy') {
        signalDirection.textContent = t['signal-buy'];
        signalDirection.className = 'signal-direction buy';
    } else if (analysis.signal === 'sell') {
        signalDirection.textContent = t['signal-sell'];
        signalDirection.className = 'signal-direction sell';
    }
    
    // Результат
    if (result === 'profit') {
        signalResultText.textContent = t['signal-profit'];
        signalResultText.className = 'result-positive';
    } else if (result === 'loss') {
        signalResultText.textContent = t['signal-loss'];
        signalResultText.className = 'result-negative';
    } else {
        signalResultText.textContent = t['signal-break-even'];
        signalResultText.className = 'result-neutral';
    }
}

// Управление прогресс-баром
function startProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const duration = currentTimeframe * 1000; // в миллисекундах
    
    progressFill.style.transition = `width ${duration}ms linear`;
    progressFill.style.width = '100%';
    
    // Таймер обратного отсчета
    updateCountdown();
}

function resetProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
    
    // Принудительное обновление для сброса анимации
    setTimeout(() => {
        progressFill.style.transition = `width ${currentTimeframe * 1000}ms linear`;
        startProgressBar();
    }, 50);
}

function updateCountdown() {
    const countdownElement = document.getElementById('signal-countdown');
    let timeLeft = currentTimeframe;
    
    const countdownInterval = setInterval(() => {
        if (!isBotRunning) {
            clearInterval(countdownInterval);
            return;
        }
        
        timeLeft--;
        countdownElement.textContent = `${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '';
        }
    }, 1000);
}

function updateProgressBarDuration() {
    const progressFill = document.getElementById('progress-fill');
    if (isBotRunning) {
        progressFill.style.transition = `width ${currentTimeframe * 1000}ms linear`;
    }
}

// История сигналов
function addToHistory(analysis, closePrice, result) {
    const historyBody = document.getElementById('history-body');
    const now = new Date();
    
    const row = document.createElement('tr');
    
    // Форматирование результата
    let resultClass = '';
    let resultText = '';
    const t = CONFIG.TRANSLATIONS[currentLanguage];
    
    if (result === 'profit') {
        resultClass = 'result-positive';
        resultText = t['signal-profit'];
    } else if (result === 'loss') {
        resultClass = 'result-negative';
        resultText = t['signal-loss'];
    } else {
        resultClass = 'result-neutral';
        resultText = t['signal-break-even'];
    }
    
    row.innerHTML = `
        <td>${now.toLocaleTimeString()}</td>
        <td>${currentInstrument}</td>
        <td class="${analysis.signal === 'buy' ? 'result-positive' : 'result-negative'}">
            ${analysis.signal === 'buy' ? t['signal-buy'] : t['signal-sell']}
        </td>
        <td>${analysis.entryPrice.toFixed(5)}</td>
        <td>${closePrice.toFixed(5)}</td>
        <td class="${resultClass}">${resultText}</td>
    `;
    
    // Добавление в начало таблицы
    historyBody.insertBefore(row, historyBody.firstChild);
    
    // Сохранение в localStorage
    signalHistory.unshift({
        time: now.toISOString(),
        instrument: currentInstrument,
        signal: analysis.signal,
        entryPrice: analysis.entryPrice,
        closePrice: closePrice,
        result: result,
        confidence: analysis.confidence
    });
    
    // Ограничение истории до 100 записей
    if (signalHistory.length > 100) {
        signalHistory = signalHistory.slice(0, 100);
        while (historyBody.children.length > 100) {
            historyBody.removeChild(historyBody.lastChild);
        }
    }
    
    localStorage.setItem('scalping_history', JSON.stringify(signalHistory));
}

function clearHistory() {
    if (confirm('Очистить историю сигналов?')) {
        signalHistory = [];
        document.getElementById('history-body').innerHTML = '';
        localStorage.removeItem('scalping_history');
    }
}

// Статистика
function updateStatistics(result) {
    statistics.totalSignals++;
    
    if (result === 'profit') {
        statistics.profitableSignals++;
        statistics.totalProfit += 1; // Упрощенный расчет прибыли
    } else if (result === 'loss') {
        statistics.totalProfit -= 1; // Упрощенный расчет убытка
    }
    
    statistics.winRate = statistics.totalSignals > 0 
        ? Math.round((statistics.profitableSignals / statistics.totalSignals) * 100)
        : 0;
    
    updateStatisticsDisplay();
    saveStatistics();
}

function updateStatisticsDisplay() {
    document.getElementById('total-signals').textContent = statistics.totalSignals;
    document.getElementById('win-rate').textContent = `${statistics.winRate}%`;
    
    const profitElement = document.getElementById('profit');
    profitElement.textContent = statistics.totalProfit >= 0 
        ? `+${statistics.totalProfit.toFixed(2)}` 
        : `${statistics.totalProfit.toFixed(2)}`;
    
    profitElement.className = statistics.totalProfit >= 0 
        ? 'stat-value profit-positive' 
        : 'stat-value profit-negative';
}

function saveStatistics() {
    localStorage.setItem('scalping_statistics', JSON.stringify(statistics));
}

function loadStatistics() {
    const saved = localStorage.getItem('scalping_statistics');
    if (saved) {
        statistics = JSON.parse(saved);
    }
}

// Утилиты
function updateButtonStates() {
    const startBtn = document.getElementById('start-bot');
    const stopBtn = document.getElementById('stop-bot');
    
    if (isBotRunning) {
        startBtn.disabled = true;
        stopBtn.disabled = false;
    } else {
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function updateStatus(status) {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const t = CONFIG.TRANSLATIONS[currentLanguage];
    
    statusDot.className = 'status-dot';
    statusDot.classList.add(status);
    
    if (status === 'connecting') {
        statusText.textContent = t['status-connecting'];
    } else if (status === 'connected') {
        statusText.textContent = t['status-connected'];
    } else if (status === 'disconnected') {
        statusText.textContent = t['status-disconnected'];
    }
}

function simulateMT5Connection() {
    updateStatus('connecting');
    
    // Симуляция подключения к MT5
    setTimeout(() => {
        updateStatus('connected');
        loadStatistics();
        
        // Загрузка сохраненной истории
        const savedHistory = localStorage.getItem('scalping_history');
        if (savedHistory) {
            signalHistory = JSON.parse(savedHistory);
            renderSavedHistory();
        }
    }, 2000);
}

function renderSavedHistory() {
    const historyBody = document.getElementById('history-body');
    const t = CONFIG.TRANSLATIONS[currentLanguage];
    
    signalHistory.forEach(record => {
        const time = new Date(record.time);
        
        const row = document.createElement('tr');
        
        let resultClass = '';
        let resultText = '';
        
        if (record.result === 'profit') {
            resultClass = 'result-positive';
            resultText = t['signal-profit'];
        } else if (record.result === 'loss') {
            resultClass = 'result-negative';
            resultText = t['signal-loss'];
        } else {
            resultClass = 'result-neutral';
            resultText = t['signal-break-even'];
        }
        
        row.innerHTML = `
            <td>${time.toLocaleTimeString()}</td>
            <td>${record.instrument}</td>
            <td class="${record.signal === 'buy' ? 'result-positive' : 'result-negative'}">
                ${record.signal === 'buy' ? t['signal-buy'] : t['signal-sell']}
            </td>
            <td>${record.entryPrice.toFixed(5)}</td>
            <td>${record.closePrice.toFixed(5)}</td>
            <td class="${resultClass}">${resultText}</td>
        `;
        
        historyBody.appendChild(row);
    });
}

function toggleChartType() {
    const btn = document.getElementById('chart-type-btn');
    btn.textContent = btn.textContent === 'Свечи' ? 'Линия' : 'Свечи';
}

function toggleQuickTimeframe() {
    const btn = document.getElementById('timeframe-quick-btn');
    const timeframes = ['3s', '5s', '10s', '15s', '30s', '1m', '2m', '3m'];
    const currentIndex = timeframes.indexOf(btn.textContent);
    const nextIndex = (currentIndex + 1) % timeframes.length;
    
    btn.textContent = timeframes[nextIndex];
    
    // Обновление основного селектора таймфрейма
    const timeframeSelect = document.getElementById('timeframe');
    const timeframeMap = {
        '3s': '3', '5s': '5', '10s': '10', '15s': '15',
        '30s': '30', '1m': '60', '2m': '120', '3m': '180'
    };
    
    timeframeSelect.value = timeframeMap[timeframes[nextIndex]];
    currentTimeframe = parseInt(timeframeMap[timeframes[nextIndex]]);
    
    if (isBotRunning) {
        updateProgressBarDuration();
    }
}

// Обработка изменения размера окна
window.addEventListener('resize', function() {
    if (currentChart && currentChart.chart) {
        currentChart.chart.resize(
            document.getElementById('chart-container').clientWidth,
            400
        );
    }
});

// Предотвращение закрытия страницы при работе бота
window.addEventListener('beforeunload', function(e) {
    if (isBotRunning) {
        e.preventDefault();
        e.returnValue = 'Бот все еще работает. Вы уверены, что хотите покинуть страницу?';
        return e.returnValue;
    }
});

console.log('Scalping Signal Pro v1.0 загружен');

// Эмуляция WebSocket подключения (для GitHub Pages)
class MockWebSocket {
    constructor(url) {
        this.url = url;
        this.readyState = 0; // CONNECTING
        this.onopen = null;
        this.onmessage = null;
        this.onclose = null;
        this.onerror = null;
        
        // Имитация подключения
        setTimeout(() => {
            this.readyState = 1; // OPEN
            if (this.onopen) this.onopen();
            
            // Отправка приветственного сообщения
            setTimeout(() => {
                if (this.onmessage) {
                    this.onmessage({
                        data: JSON.stringify({
                            type: 'connected',
                            clientId: Date.now(),
                            message: 'Подключено к Mock MT5 серверу',
                            timestamp: new Date().toISOString()
                        })
                    });
                }
            }, 100);
            
        }, 500);
    }
    
    send(data) {
        console.log('Mock WS send:', data);
        
        try {
            const parsed = JSON.parse(data);
            
            // Обработка различных типов сообщений
            setTimeout(() => {
                if (this.onmessage) {
                    if (parsed.type === 'subscribe') {
                        // Ответ на подписку
                        this.onmessage({
                            data: JSON.stringify({
                                type: 'subscribed',
                                symbols: parsed.symbols,
                                timeframe: parsed.timeframe,
                                message: 'Подписка оформлена'
                            })
                        });
                        
                        // Начало потока данных
                        this.startDataStream(parsed.symbols, parsed.timeframe);
                        
                    } else if (parsed.type === 'request-signal') {
                        // Генерация сигнала
                        const signal = window.mockMT5.generateSignal(
                            parsed.symbol, 
                            parsed.timeframe
                        );
                        
                        this.onmessage({
                            data: JSON.stringify({
                                type: 'signal',
                                data: signal
                            })
                        });
                    }
                }
            }, 300);
            
        } catch (error) {
            console.error('Mock WS error:', error);
        }
    }
    
    startDataStream(symbols, timeframe) {
        // Поток данных в реальном времени
        symbols.forEach(symbol => {
            setInterval(() => {
                if (this.readyState === 1 && this.onmessage) {
                    const price = window.mockMT5.getCurrentPrice(symbol);
                    
                    this.onmessage({
                        data: JSON.stringify({
                            type: 'price-update',
                            symbol: symbol,
                            bid: price.bid,
                            ask: price.ask,
                            time: price.time,
                            volume: price.volume
                        })
                    });
                }
            }, timeframe * 1000);
        });
    }
    
    close() {
        this.readyState = 3; // CLOSED
        if (this.onclose) this.onclose();
    }
}

// Переопределение WebSocket для эмуляции
if (window.location.hostname.includes('github.io') || 
    window.location.protocol === 'file:') {
    
    console.log('Используется Mock WebSocket для GitHub Pages');
    window.WebSocket = MockWebSocket;
    
    // Инициализация мок-сервера
    if (!window.mockMT5) {
        window.mockMT5 = new MockMT5DataFeed();
    }
}
