import {createI18n} from 'vue-i18n'

const messages = {
    en: {
        menuList: {
            home: 'Home',
            account: 'Account',
            alliance: 'Alliance',
            airdrop: 'Airdrop',
            synopsis: 'Synopsis',
            sound: 'Sound',
            theme: 'Theme',
            themeType: {
                light: 'Light',
                dark: 'Dark'
            },
            quit: 'Quit',
            telegraph: 'Telegram',
            chat: 'Chat',
        },
        hotToken: {
            hotToken: 'Hot Token',
            newToken: 'New Token',
            aiRobot: "Ai Robot",
            projectAirdrop: "Airdrop",
            contractAddress: "Contract Address",
            contractLPAddress: "Contract LP",
            addRobot: "Add Robot",
        },
        intro: {
            centralizedPlatform: "What is a decentralized platform?",
            centralizedPlatformText: "There is no server, all transactions and connection interactions are completed by intelligent contract touch, and each touch has a record on the public chain that can be traced to the starting point of a single event, which is fully publicly searchable.",
            buyAIRobot: "How to buy an AI robot?",
            buyAIRobotText: "",
            aiRobotsBring: "What benefits can AI robots bring?",
            aiRobotsBringText: "",
            safeToParticipate: "Is it safe to participate in AI robot assets?",
            safeToParticipateText: "",
            aiRobotsGenerate: "How do AI robots generate promotional revenue?",
            aiRobotsGenerateText: "",
            playTheAirdrop: "How to play the airdrop of AI robot platform?",
            playTheAirdropText: "",
        },
        airdrop: {
            airdropTokens: 'Airdrop Tokens',
            launchAirdrop: "Release Airdrop",
            airdropQuantity: "Airdrop Quantity",
            lPValue: "LP Circulation Value",
            tokenPrice: "Token Price",
            totalVolume: "Total volume/Additional issue",
            totalAirdrop: "Total Airdrop",
            numberOfAirdrops: "Airdrop Copies",
            holdingAddress: "CoinHolding Address",
            airdropContract: "Airdrop Contract",
            lpContract: "LP Contract",
            tokenIntroduction: "Token Introduction",
            getItNow: "Get It Now",
            receiveTheAirdrop: "You must purchase the robot’s address to receive the airdrop.",
            address: "A single address can claim XX hours/X days/X times. Whether you hold XXX coins, you can claim it, and you can claim it if you don’t.",
            inputTokenName: "Enter The TokenName",
            inputAirdropQuantity: "Enter The TotalAirdropAmountPieces",
            inputAirdropQuantityCopy: "Enter The NumberOfAirdropCopiesCopies",
            inputTokenAddress: "Enter The TokenAddress",
            inputAirdropContract: 'Generate AirdropContract',
            inputTip: "(Payment Is Required To Generate AContractAddress)",
            confirmRelease: "Confirm Release",
            introductionToInputTokens: "Introduction To InputTokens",
            whetherToHold: "Whether To Hold",
            pickUpAtASingleAddress: "ASingleAddress",
            hoursDay: "Hours/Day",
            numberOfTokens: "Enter Number Of Tokens",
            defray: "Posting Requires Payment"
        },
        robot: {
            watchSwap: "WatchSwap",
            setUp: "SetUp",
            start: "Start",
            watchTip: "This section describes how to listen to swap !",
            LPAddress: "Enter The LP PairAddress",
            newTreading: "Display Number Of Latest Transaction Events",
            stopListening: "StopListen",
            startListening: "StartListen",
            estimatedProductionValue: "Production",
            numberOfSubWallets: "NumberSubWallets",
            SubWalletsAddress: "SubWalletsAddress",
            watchSetting: "Monitor buying and selling and reverse transaction settings [USDT chain/ERC20 token]",
            watchSetting1: "Monitor buying and selling and reverse transaction settings [USDT]",
            watchSetting2: "Monitor buying and selling and reverse transaction settings [ERC20 token]",
            priceLimit: "Price Upper Lower Setting",
            upperLimit: "Upper Limit",
            lowerLimit: "Lower Limit",
            buySellNum: "Number Of Single Buying And Selling Transactions",
            sell: "sell",
            buy: "buy",
            setMainUser: "Set the main account USDT buying decreasing and increasing function (%)",
            buySellRound: "Random upper/lower limits for single transaction quantity",
            slippage: "Slippage",
            delay: "Delay",
            automaticBuyingAndSelling: "AutoBuySell",
            advancedSettings: "Advanced",
            running: 'Running',
            notStarted: "NotStarted",
            startEndTime: "startEndTime",
            startTime: "startTime",
            endTime: "endTime",
            setSlippage: "setSlippage（%）",
            setUpCounterBuy: "Set the delay time for reverse buy and sell transactions（S）",
            setAutomatically: "Set AutomaticBuyingAndSelling Time（min）",
            selectStartTime: "Choose Start Time",
            selectEndTime: "Choose End Time",
            setUpMainAccountTrading: "Set the main account buying and selling increasing and decreasing functions",
            setUpTheMainAccountUSDT: "setUpTheMainAccountUSDT（%）",
            setUpTheMainAccountERC20Currency: "setUpTheMainAccountERC20Currency（%）",
            quickMode: "QuickMode",
            slowMode: "SlowMode",
            executedTo: "ExecutedTo",
            subWalletsTakeTime: "subWalletsTakeTime",
            second:"second",
            gather:"Gather"
        },
        member:{
            ordinaryMember:"OrdinaryMember",
            notPurchased:"NotPurchased",
            premiumMember:"PremiumMember",
            promotionDetails:"PromotionDetails",
            canReceiveAirdrops:"CanReceiveAirdrops",
            airdropsCanBeReleased:"AirdropsCanBeReleased",
            ecologicalDividends:"EcologicalDividends",
            totalNumberOfInvitations:"TotalNumberOfInvitations",
            directPushAddress:"PushAddress",
            level1:"Level1",
            level2:"Level2",
            levelThree:"Level3",
            superiorAddress:"SuperiorAddress",
            promotionAddress:"PromotionAddress",
            addRobot:"AddBot",
            canBeCounterBought:"CanBeCounterBought",
            canBeReversed:"CanBeCounterSold",
            youCanSetTheTimeToBuy:"CanSetTheTimeToBuy",
            youCanSetTheTimeToSell:"CanSetTheTimeToSell",
            theTransactionIsAFixedAmountOfACoins:"The transaction is a fixed amount of A coins and B coins",
            setAPriceLimitForBuyingAndSelling:"SetUpperAndLowerLimitsForTransactions",
            transactionSettingsACurrency:"Set the price of currency A and currency B in the transaction",
            subWalletsCanBeGenerated:"SubWalletsCanBeGenerated"
        },
        public: {
            open: 'Open',
            close: 'Close',
            ok: 'Ok',
            cancel: 'Cancel',
            confirm: 'Confirm',
            loading: 'Loading',
            clickSearch: "Click Of Search",
            detail: 'Details',
            gold: 'Gold',
            generate: "Generate",
            please: "Please ",
            times: "Times",
            ordinaryRobot: "Ordinary Robot",
            professionalRobot: "Pro Robot",
            add: "AddTo",
            more: "More",
            token: "Token",
            price: "Price",
            latest: 'latest',
            message: "treading message",
            buy: "buy",
            realTimePrice: "realTimePrice",
            atLeast: "atLeast",
            exchange: 'exchange',
            start:"Start",
            stop:"Stop",
            member:"Member",
        }
    },
    zh: {
        menuList: {
            home: '首页',
            account: '账户',
            alliance: '联盟',
            airdrop: '空投',
            synopsis: '简介',
            sound: '声音',
            theme: '主题',
            themeType: {
                light: '浅色',
                dark: '深色'
            },
            quit: '退出',
            telegraph: '电报',
            chat: '聊天',
        },
        hotToken: {
            hotToken: '热门代币',
            newToken: '上新代币',
            aiRobot: "Ai机器人",
            projectAirdrop: "项目空投",
            contractAddress: "合约地址",
            contractLPAddress: "合约LP地址",
            addRobot: "添加机器人",
        },
        intro: {
            centralizedPlatform: "什么是去中心化平台?",
            centralizedPlatformText: "没有服务器，所有交易与连接交互都由智能合 约触来完成，每次触在公链上都有记录可查可 遡源到单次事件的起始点，完全公开可查。",
            buyAIRobot: "如何购买AI机器人?",
            buyAIRobotText: "",
            aiRobotsBring: "AI机器人可以带来什么好处?",
            aiRobotsBringText: "",
            safeToParticipate: "参与AI机器人资产是否安全?",
            safeToParticipateText: "",
            aiRobotsGenerate: "AI机器人怎么产生推广收益?",
            aiRobotsGenerateText: "",
            playTheAirdrop: "AI机器人平台的空投怎么玩?",
            playTheAirdropText: "",
        },
        airdrop: {
            airdropTokens: '空投代币',
            launchAirdrop: "发布空投",
            airdropQuantity: "空投数量",
            lPValue: "LP流通市值",
            tokenPrice: "代币价格",
            totalVolume: "总量/增发",
            totalAirdrop: "空投总量",
            numberOfAirdrops: "空投份数",
            holdingAddress: "持币地址",
            airdropContract: "空投合约",
            lpContract: "LP合约",
            tokenIntroduction: "代币介绍",
            getItNow: "立即领取",
            receiveTheAirdrop: "购买机器人的地址才能领取空投",
            address: "单个地址领取XX小时/X天/X次 是否持有XXX币，有可领，无不可领",
            inputTokenName: "输入代币名称",
            inputAirdropQuantity: "输入空投总量（枚）",
            inputAirdropQuantityCopy: "输入空投份数（份）",
            inputTokenAddress: "输入代币地址",
            inputAirdropContract: '生成空投合约',
            inputTip: "(生成合约地址需要支付)",
            confirmRelease: "确认发布",
            introductionToInputTokens: "输入代币介绍",
            whetherToHold: "是否持有",
            pickUpAtASingleAddress: "单个地址领取",
            hoursDay: "小时/天",
            numberOfTokens: "输入代币数量",
            defray: "发布需要支付"
        },
        robot: {
            watchSwap: "监听SWAP",
            setUp: "设置",
            start: "启动",
            watchTip: "监听swap相关的介绍",
            LPAddress: "输入LP pair地址",
            newTreading: "最新交易事件显示数量",
            stopListening: "停止监听",
            startListening: "开始监听",
            estimatedProductionValue: "预估产值",
            numberOfSubWallets: "子钱包数量",
            SubWalletsAddress: "子钱包地址",
            watchSetting: "监听买卖并反向交易设置【USDT链/ERC20代币】",
            watchSetting1: "监听买卖并反向交易设置【USDT】",
            watchSetting2: "监听买卖并反向交易设置【ERC20代币】",
            priceLimit: "价格上/下限设置",
            upperLimit: "上限",
            lowerLimit: "下限",
            priceLimitTip: "上/下限设置，0为不限制",
            buySellNum: "单次买卖交易数量",
            sell: "卖",
            buy: "买",
            buySellRound: "单次交易数量随机上限/下限值",
            setMainUser: "设置主账户USDT买递减递增功能（%）",
            slippage: "滑点",
            delay: "延迟",
            automaticBuyingAndSelling: "自动买卖",
            advancedSettings: "高级设置",
            running: '运行中',
            notStarted: "未启动",
            startEndTime: "启动/结束时间",
            startTime: "启动时间",
            endTime: "结束时间",
            setSlippage: "设置滑点（%）",
            setUpCounterBuy: "设置反买反卖交易延迟时间（S）",
            setAutomatically: "设置自动买卖时间（min）",
            selectStartTime: "选择你的开始时间",
            selectEndTime: "选择你的结束时间",
            setUpMainAccountTrading: "设置主账户买卖递增递减功能",
            setUpTheMainAccountUSDT: "设置主账户USDT（%）",
            setUpTheMainAccountERC20Currency: "设置主账户ERC20币（%）",
            quickMode: "快速模式",
            slowMode: "慢速模式",
            executedTo: "执行到",
            subWalletsTakeTime: "个子钱包需要花费时间",
            second:"秒",
            gather:"归集"
        },
        member:{

            ordinaryMember:"普通会员",
            notPurchased:"未购买",
            premiumMember:"高级会员",
            promotionDetails:"推广详情",
            canReceiveAirdrops:"可领空投",
            airdropsCanBeReleased:"可发布空投",
            ecologicalDividends:"生态分红",
            totalNumberOfInvitations:"邀请总量",
            directPushAddress:"直推地址",
            level1:"一级",
            level2:"二级",
            levelThree:"三级",
            superiorAddress:"上级地址",
            promotionAddress:"推广地址",
            addRobot:"添加机器人",
            canBeCounterBought:"可以反买",
            canBeReversed:"可以反卖",
            youCanSetTheTimeToBuy:"可以设置时间买",
            youCanSetTheTimeToSell:"可以设置时间卖",
            theTransactionIsAFixedAmountOfACoins:"交易为固定数量的A币、B币",
            setAPriceLimitForBuyingAndSelling:"交易设置上限值和下限值",
            transactionSettingsACurrency:"交易设置A币、B币的价格",
            subWalletsCanBeGenerated:"可以生成子钱包"
        },

        public: {
            open: '开',
            close: '关',
            ok: '确认',
            cancel: '取消',
            confirm: '确认',
            loading: '加载中',
            clickSearch: "点击搜索",
            detail: "详情",
            generate: "生成",
            please: "请",
            gold: '枚',
            token: "代币",
            times: "次",
            ordinaryRobot: "普通机器人",
            professionalRobot: "专业机器人",
            add: "添加",
            more: "更多",
            price: "价格",
            latest: '最新',
            message: "交易消息",
            buy: "购买",
            realTimePrice: "实时价格",
            atLeast: "至少",
            exchange: '兑换',
            start:"启动",
            stop:"停止",
            member:"会员",
        }
    }
}
const i18n = createI18n({
    locale: localStorage.getItem('language') || 'zh', // 设置语言类型
    legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
    globalInjection: true, // 全局注册$t方法
    messages: messages,

})

export default i18n