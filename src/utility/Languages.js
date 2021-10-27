//map from browser default language to support language
export const BROWSER_LANGUAGES = {
    'en-US': 'en',
    'en-GB': 'en',
    'zh-CN': 'zh-CN', 
    'zh-TW': 'zh-TW',
    'zh-HK': 'zh-TW',
    'ja': 'ja',
    'ko': 'ko',
    'hi': 'hi',
    'si' :'si',
    'my-MM': 'my-MM'
};

//Supported language id to native name
export const SUPPORTED_LANGUAGES = {
    'en': 'English',
    'zh-CN': '简体中文 (Chinese Simplified)', 
    'zh-TW': '繁體中文 (Chinese Tranditional)',
    'ja': '日本語 (Japanese)',
    'ko': '한국어 (Korean)',
    'hi': 'हिन्दी (Hindi)',
    'si': 'සිංහල (Sinhalese)',
    'my-MM': 'မြန်မာ (Myanmar)'
};

export const getBrowserLang = () => BROWSER_LANGUAGES[navigator.language] || 'en';
