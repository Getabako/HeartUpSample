// カリキュラムデータ
const curriculumData = [
    {
        id: 1,
        characteristic: 'adhd',
        goal: 'motor-skill',
        title: 'ADHDの子どものための運動能力向上プログラム',
        description: '注意の持続が困難な特性を考慮し、短時間で切り替えのある活動を中心に構成',
        activities: [
            '5分間のボールタッチ練習（1分ごとに種類を変更）',
            'ミニゲーム形式でのドリブル練習',
            '的当てゲームで集中力と正確性を向上',
            '短時間の試合形式（3分×3セット）'
        ]
    },
    {
        id: 2,
        characteristic: 'asd',
        goal: 'social',
        title: 'ASDの子どものための社会性向上プログラム',
        description: '視覚的支援とルーティンを重視し、段階的に他者との関わりを増やす',
        activities: [
            '視覚的なルール表示を使った練習',
            'ペアワークから始める協調活動',
            '役割を明確にしたチーム活動',
            '成功体験を積み重ねる小集団ゲーム'
        ]
    },
    {
        id: 3,
        characteristic: 'ld',
        goal: 'rule',
        title: 'LDの子どものためのルール理解プログラム',
        description: '言葉だけでなく、実際の動きと視覚的支援を組み合わせてルールを学習',
        activities: [
            'イラストカードを使ったルール説明',
            '実演を交えた段階的なルール導入',
            'シンプルなルールから複雑なルールへの移行',
            '成功体験を重視したゲーム形式の練習'
        ]
    },
    {
        id: 4,
        characteristic: 'motor',
        goal: 'motor-skill',
        title: '運動発達支援基礎プログラム',
        description: '基本的な運動能力から段階的にサッカースキルへ移行',
        activities: [
            'バランス感覚を養う基礎運動',
            '大きなボールから始めるボール慣れ',
            '歩く・走る・止まるの基本動作練習',
            '楽しみながら行う協調運動'
        ]
    },
    {
        id: 5,
        characteristic: 'communication',
        goal: 'communication',
        title: 'コミュニケーション能力向上プログラム',
        description: 'サッカーを通じて自然なコミュニケーションの機会を創出',
        activities: [
            '声かけを必要とするパス練習',
            'ジェスチャーを使った意思疎通ゲーム',
            'チームでの作戦会議の練習',
            '感情表現を含むフィードバック活動'
        ]
    }
];

// 研修資料データ
const trainingData = [
    {
        id: 1,
        issue: 'behavior',
        title: '問題行動への対応方法',
        description: '療育現場でよく見られる問題行動とその対応策',
        content: [
            '行動の背景を理解する：なぜその行動が起きるのかを分析',
            '予防的アプローチ：環境設定と事前の声かけ',
            'ポジティブな行動支援：望ましい行動を強化',
            'クールダウンの方法：落ち着くための場所と時間の確保',
            '保護者との連携：家庭での様子の共有'
        ]
    },
    {
        id: 2,
        issue: 'communication',
        title: 'コミュニケーション支援の基礎',
        description: '発達に応じたコミュニケーション支援の方法',
        content: [
            '視覚的支援ツールの活用方法',
            'シンプルで明確な指示の出し方',
            '非言語コミュニケーションの理解',
            'AAC（補助代替コミュニケーション）の基礎',
            '子どもの理解度に応じた調整方法'
        ]
    },
    {
        id: 3,
        issue: 'assessment',
        title: 'アセスメントの実施方法',
        description: '適切な支援のための評価方法',
        content: [
            '観察記録の取り方と分析',
            '発達検査の基礎知識',
            '運動能力の評価方法',
            '社会性の評価ポイント',
            'アセスメント結果の活用方法'
        ]
    },
    {
        id: 4,
        issue: 'planning',
        title: '個別支援計画の作成',
        description: '効果的な個別支援計画の立て方',
        content: [
            '現状把握と目標設定',
            'スモールステップの設定方法',
            '具体的な支援方法の記載',
            '評価基準の設定',
            '定期的な見直しと修正'
        ]
    },
    {
        id: 5,
        issue: 'parent',
        title: '保護者との連携方法',
        description: '信頼関係を築く保護者対応',
        content: [
            '日々の情報共有の方法',
            '面談の進め方とポイント',
            '家庭での取り組みの提案',
            '困難な状況での対応方法',
            '連携ノートの活用'
        ]
    },
    {
        id: 6,
        issue: 'safety',
        title: '安全管理マニュアル',
        description: '療育活動における安全確保',
        content: [
            '活動前の安全チェックリスト',
            '緊急時対応フローチャート',
            'ケガの予防と初期対応',
            'アレルギー・持病への配慮',
            'ヒヤリハット事例の共有'
        ]
    }
];

// ナビゲーション機能
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // アクティブクラスの切り替え
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // セクションの表示切り替え
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// カリキュラム検索機能
document.getElementById('searchCurriculum').addEventListener('click', () => {
    const characteristic = document.getElementById('childCharacteristic').value;
    const goal = document.getElementById('goal').value;
    const resultsDiv = document.getElementById('curriculumResults');
    
    // 結果をクリア
    resultsDiv.innerHTML = '';
    
    // フィルタリング
    const results = curriculumData.filter(item => {
        return (!characteristic || item.characteristic === characteristic) &&
               (!goal || item.goal === goal);
    });
    
    // 結果表示
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>該当するカリキュラムが見つかりませんでした。</p>';
    } else {
        results.forEach(item => {
            const resultHtml = `
                <div class="result-item">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <p><strong>活動内容：</strong></p>
                    <ul>
                        ${item.activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                </div>
            `;
            resultsDiv.innerHTML += resultHtml;
        });
    }
});

// 研修資料検索機能
document.getElementById('searchTraining').addEventListener('click', () => {
    const issue = document.getElementById('issue').value;
    const resultsDiv = document.getElementById('trainingResults');
    
    // 結果をクリア
    resultsDiv.innerHTML = '';
    
    // フィルタリング
    const results = trainingData.filter(item => {
        return !issue || item.issue === issue;
    });
    
    // 結果表示
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>該当する研修資料が見つかりませんでした。</p>';
    } else {
        results.forEach(item => {
            const resultHtml = `
                <div class="result-item">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <p><strong>学習内容：</strong></p>
                    <ul>
                        ${item.content.map(content => `<li>${content}</li>`).join('')}
                    </ul>
                </div>
            `;
            resultsDiv.innerHTML += resultHtml;
        });
    }
});