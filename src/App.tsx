import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Twitter, 
  Camera, 
  Users, 
  Calendar,
  BarChart3,
  CheckCircle,
  Bell,
  Settings,
  ChevronDown,
  Send,
  Smartphone,
  Brain,
  Star,
  Clock,
  Target
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Neatifyはどのように部屋を評価しますか？",
    answer: "NeatifyのAIは、清潔さ、整理整頓、照明を分析し、0-100ポイントのスコアを提供します。緑（80+）が優秀、青（60-79）が良好、オレンジ（40-59）が改善が必要、赤（40未満）が不良を示します。"
  },
  {
    question: "写真はいつまで表示されますか？",
    answer: "BeRealと同様に、すべての写真は24時間後に期限切れになります。これにより、フレッシュなコンテンツと継続的な参加が促進されます。"
  },
  {
    question: "友達を追加するにはどうすればよいですか？",
    answer: "アプリ内のソーシャルタブから友達を検索し、フォローできます。友達の日々の部屋評価をリアルタイムで確認し、お互いの進捗を励まし合えます。"
  },
  {
    question: "通知をオフにできますか？",
    answer: "はい、アカウント設定から通知をカスタマイズできます。24時間経過後の撮影リマインダーなど、すべての通知のON/OFF切り替えが可能です。"
  },
  {
    question: "AIが生成するタスクとは何ですか？",
    answer: "部屋の分析に基づいて、AIが具体的な改善提案を生成します。例えば「ベッドを整える」「本を整理する」など、24時間以内に完了できるタスクです。"
  },
  {
    question: "データは安全ですか？",
    answer: "はい、すべてのデータはFirebaseを使用して安全に暗号化され、プライバシー設定で共有レベルを管理できます。写真は24時間後に自動的に期限切れになります。"
  }
];

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('お問い合わせありがとうございます。24時間以内にご返信いたします。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Neatify サポート</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#usage" className="text-gray-600 hover:text-blue-600 transition-colors">使い方</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI搭載部屋審査アプリ</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Neatify サポートセンター
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AIを使用して部屋の清潔さを評価し、友達と進捗を共有する<br />
            革新的なソーシャル生産性アプリのサポートサイトです
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#usage" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              使い方を見る
            </a>
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-medium">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* App Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Neatifyの主要機能</h3>
            <p className="text-lg text-gray-600">AIと社会的動機で部屋を清潔に保つ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">AI部屋審査</h4>
              <p className="text-gray-600">清潔さ、整理整頓、照明を分析し、0-100ポイントのスコアとパーソナライズされた改善タスクを提供</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">日々の写真撮影</h4>
              <p className="text-gray-600">24時間サイクルで部屋の写真を撮影し、BeRealスタイルの一時的共有で継続的な動機を維持</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">ソーシャル機能</h4>
              <p className="text-gray-600">友達をフォローし、リアルタイムフィードで進捗を共有、アクティビティ通知でエンゲージメント向上</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">分析と追跡</h4>
              <p className="text-gray-600">週間統計、連続記録追跡、進捗視覚化、アチーブメントシステムでモチベーション維持</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">カレンダービュー</h4>
              <p className="text-gray-600">日々のサムネイル付き月間カレンダーで写真履歴とスコアタイムラインを確認</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">スマート通知</h4>
              <p className="text-gray-600">24時間経過後の自動撮影リマインダーとカスタマイズ可能な通知設定</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section id="usage" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">アプリの使い方</h3>
            <p className="text-lg text-gray-600">簡単なステップでNeatifyを始めましょう</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">アカウント作成と認証</h4>
                <p className="text-gray-600 leading-relaxed">メールアドレスまたはGoogleアカウントでサインアップし、プロフィールを設定します。アプリ初回起動時に通知権限を許可すると、撮影リマインダーを受け取れます。</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">日々の部屋撮影</h4>
                <p className="text-gray-600 leading-relaxed">カスタムカメラUIで部屋の写真を撮影します。撮影前にプレビューして、満足できない場合は再撮影可能です。写真は24時間後に自動的に期限切れになります。</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">AI分析結果の確認</h4>
                <p className="text-gray-600 leading-relaxed">AIが清潔さ、整理整頓、照明を分析し、0-100ポイントのスコアを提供します。色分けされた評価（緑：優秀、青：良好、オレンジ：改善が必要、赤：不良）で一目で状況を把握できます。</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">改善タスクの実行</h4>
                <p className="text-gray-600 leading-relaxed">AIが生成した具体的な改善タスクを確認し、24時間以内に完了を目指します。完了したタスクはチェックオフでき、進捗統計に反映されます。</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">友達との進捗共有</h4>
                <p className="text-gray-600 leading-relaxed">ソーシャルタブから友達を検索・フォローし、リアルタイムフィードで日々の評価を共有します。コメントやいいねでお互いを励まし合い、継続的なモチベーションを維持できます。</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">6</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">進捗の追跡と分析</h4>
                <p className="text-gray-600 leading-relaxed">カレンダービューで過去の写真とスコアを確認し、週間統計で平均スコアや連続記録をチェックします。アチーブメントシステムで達成した改善マイルストーンを確認できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h3>
            <p className="text-lg text-gray-600">Neatifyについてのよくある質問と回答</p>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-gray-900">{item.question}</h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
            <p className="text-lg text-gray-600">ご質問やご要望がございましたら、お気軽にお問い合わせください</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">連絡先情報</h4>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">サポートメール</h5>
                    <p className="text-gray-600">kotaro17206@icloud.com</p>
                    <p className="text-sm text-gray-500 mt-1">24時間以内にご返信いたします</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">電話サポート</h5>
                    <p className="text-gray-600">080-4175-5965</p>
                    <p className="text-sm text-gray-500 mt-1">平日 9:00-18:00（土日祝除く）</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Twitter className="w-6 h-6 text-sky-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">お問い合わせフォーム</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="お問い合わせの件名"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>送信する</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Neatify</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AIを活用した部屋審査で、清潔で整理された生活空間の維持をサポートします。
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">アプリ</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">機能紹介</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ダウンロード</a></li>
                <li><a href="#" className="hover:text-white transition-colors">更新履歴</a></li>
                <li><a href="#" className="hover:text-white transition-colors">システム要件</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">サポート</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#usage" className="hover:text-white transition-colors">使い方</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">トラブルシューティング</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">法的情報</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">セキュリティ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ライセンス</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Neatify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://twitter.com/neatify_app" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:support@neatify.app" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;