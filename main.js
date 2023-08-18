const languages = [
  { value: 'af', text: 'Afrikaans' },
  { value: 'sq', text: 'Albanian' },
  { value: 'am', text: 'Amharic' },
  { value: 'ar', text: 'Arabic' },
  { value: 'an', text: 'Aragonese' },
  { value: 'hy', text: 'Armenian' },
  { value: 'ast', text: 'Asturian' },
  { value: 'az', text: 'Azerbaijani' },
  { value: 'eu', text: 'Basque' },
  { value: 'be', text: 'Belarusian - беларуская' },
  { value: 'bn', text: 'Bengali - বাংলা' },
  { value: 'bs', text: 'Bosnian - bosanski' },
  { value: 'br', text: 'Breton - brezhoneg' },
  { value: 'bg', text: 'Bulgarian - български' },
  { value: 'ca', text: 'Catalan - català' },
  { value: 'ckb', text: 'Central Kurdish - کوردی (دەستنوسی عەرەبی)' },
  { value: 'zh', text: 'Chinese - 中文' },
  { value: 'zh-HK', text: 'Chinese (Hong Kong) - 中文（香港）' },
  { value: 'zh-CN', text: 'Chinese (Simplified) - 中文（简体）' },
  { value: 'zh-TW', text: 'Chinese (Traditional) - 中文（繁體）' },
  { value: 'co', text: 'Corsican' },
  { value: 'hr', text: 'Croatian - hrvatski' },
  { value: 'cs', text: 'Czech - čeština' },
  { value: 'da', text: 'Danish - dansk' },
  { value: 'nl', text: 'Dutch - Nederlands' },
  { value: 'en', text: 'English' },
  { value: 'en-AU', text: 'English (Australia)' },
  { value: 'en-CA', text: 'English (Canada)' },
  { value: 'en-IN', text: 'English (India)' },
  { value: 'en-NZ', text: 'English (New Zealand)' },
  { value: 'en-ZA', text: 'English (South Africa)' },
  { value: 'en-GB', text: 'English (United Kingdom)' },
  { value: 'en-US', text: 'English (United States)' },
  { value: 'eo', text: 'Esperanto - esperanto' },
  { value: 'et', text: 'Estonian - eesti' },
  { value: 'fo', text: 'Faroese - føroyskt' },
  { value: 'fil', text: 'Filipino' },
  { value: 'fi', text: 'Finnish - suomi' },
  { value: 'fr', text: 'French - français' },
  { value: 'fr-CA', text: 'French (Canada) - français (Canada)' },
  { value: 'fr-FR', text: 'French (France) - français (France)' },
  { value: 'fr-CH', text: 'French (Switzerland) - français (Suisse)' },
  { value: 'gl', text: 'Galician - galego' },
  { value: 'ka', text: 'Georgian - ქართული' },
  { value: 'de', text: 'German - Deutsch' },
  { value: 'de-AT', text: 'German (Austria) - Deutsch (Österreich)' },
  { value: 'de-DE', text: 'German (Germany) - Deutsch (Deutschland)' },
  { value: 'de-LI', text: 'German (Liechtenstein) - Deutsch (Liechtenstein)' },
  { value: 'de-CH', text: 'German (Switzerland) - Deutsch (Schweiz)' },
  { value: 'el', text: 'Greek - Ελληνικά' },
  { value: 'gn', text: 'Guarani' },
  { value: 'gu', text: 'Gujarati - ગુજરાતી' },
  { value: 'ha', text: 'Hausa' },
  { value: 'haw', text: 'Hawaiian - Ōlelo Hawaii' },
  { value: 'he', text: 'Hebrew - עברית' },
  { value: 'hi', text: 'Hindi - हिन्दी' },
  { value: 'hu', text: 'Hungarian - magyar' },
  { value: 'is', text: 'Icelandic - íslenska' },
  { value: 'id', text: 'Indonesian - Indonesia' },
  { value: 'ia', text: 'Interlingua' },
  { value: 'ga', text: 'Irish - Gaeilge' },
  { value: 'it', text: 'Italian - italiano' },
  { value: 'it-IT', text: 'Italian (Italy) - italiano (Italia)' },
  { value: 'it-CH', text: 'Italian (Switzerland) - italiano (Svizzera)' },
  { value: 'ja', text: 'Japanese - 日本語' },
  { value: 'kn', text: 'Kannada - ಕನ್ನಡ' },
  { value: 'kk', text: 'Kazakh - қазақ тілі' },
  { value: 'km', text: 'Khmer - ខ្មែរ' },
  { value: 'ko', text: 'Korean - 한국어' },
  { value: 'ku', text: 'Kurdish - Kurdî' },
  { value: 'ky', text: 'Kyrgyz - кыргызча' },
  { value: 'lo', text: 'Lao - ລາວ' },
  { value: 'la', text: 'Latin' },
  { value: 'lv', text: 'Latvian - latviešu' },
    { value: 'ln', text: 'Lingala - lingála' },
    { value: 'lt', text: 'Lithuanian - lietuvių' },
    { value: 'mk', text: 'Macedonian - македонски' },
    { value: 'ms', text: 'Malay - Bahasa Melayu' },
    { value: 'ml', text: 'Malayalam - മലയാളം' },
    { value: 'mt', text: 'Maltese - Malti' },
    { value: 'mr', text: 'Marathi - मराठी' },
    { value: 'mn', text: 'Mongolian - монгол' },
    { value: 'ne', text: 'Nepali - नेपाली' },
    { value: 'no', text: 'Norwegian - norsk' },
    { value: 'nb', text: 'Norwegian Bokmål - norsk bokmål' },
    { value: 'nn', text: 'Norwegian Nynorsk - nynorsk' },
    { value: 'oc', text: 'Occitan' },
    { value: 'or', text: 'Oriya - ଓଡ଼ିଆ' },
    { value: 'om', text: 'Oromo - Oromoo' },
    { value: 'ps', text: 'Pashto - پښتو' },
    { value: 'fa', text: 'Persian - فارسی' },
    { value: 'pl', text: 'Polish - polski' },
    { value: 'pt', text: 'Portuguese - português' },
    { value: 'pt-BR', text: 'Portuguese (Brazil) - português (Brasil)' },
    { value: 'pt-PT', text: 'Portuguese (Portugal) - português (Portugal)' },
    { value: 'pa', text: 'Punjabi - ਪੰਜਾਬੀ' },
    { value: 'qu', text: 'Quechua' },
    { value: 'ro', text: 'Romanian - română' },
    { value: 'mo', text: 'Romanian (Moldova) - română (Moldova)' },
    { value: 'rm', text: 'Romansh - rumantsch' },
    { value: 'ru', text: 'Russian - русский' },
    { value: 'gd', text: 'Scottish Gaelic' },
    { value: 'sr', text: 'Serbian - српски' },
    { value: 'sh', text: 'Serbo-Croatian - Srpskohrvatski' },
    { value: 'sn', text: 'Shona - chiShona' },
    { value: 'sd', text: 'Sindhi' },
    { value: 'si', text: 'Sinhala - සිංහල' },
    { value: 'sk', text: 'Slovak - slovenčina' },
    { value: 'sl', text: 'Slovenian - slovenščina' },
    { value: 'so', text: 'Somali - Soomaali' },
    { value: 'st', text: 'Southern Sotho' },
    { value: 'es', text: 'Spanish - español' },
    { value: 'es-AR', text: 'Spanish (Argentina) - español (Argentina)' },
    { value: 'es-419', text: 'Spanish (Latin America) - español (Latinoamérica)' },
    { value: 'es-MX', text: 'Spanish (Mexico) - español (México)' },
    { value: 'es-ES', text: 'Spanish (Spain) - español (España)' },
    { value: 'es-US', text: 'Spanish (United States) - español (Estados Unidos)' },
    { value: 'su', text: 'Sundanese' },
    { value: 'sw', text: 'Swahili - Kiswahili' },
    { value: 'sv', text: 'Swedish - svenska' },
    { value: 'tg', text: 'Tajik - тоҷикӣ' },
    { value: 'ta', text: 'Tamil - தமிழ்' },
    { value: 'tt', text: 'Tatar' },
    { value: 'te', text: 'Telugu - తెలుగు' },
    { value: 'th', text: 'Thai - ไทย' },
    { value: 'ti', text: 'Tigrinya - ትግርኛ' },
    { value: 'to', text: 'Tongan - lea fakatonga' },
    { value: 'tr', text: 'Turkish - Türkçe' },
    { value: 'tk', text: 'Turkmen' },
    { value: 'tw', text: 'Twi' },
    { value: 'uk', text: 'Ukrainian - українська' },
    { value: 'ur', text: 'Urdu - اردو' },
    { value: 'ug', text: 'Uyghur' },
    { value: 'uz', text: 'Uzbek - ozbek' },
    { value: 'vi', text: 'Vietnamese - Tiếng Việt' },
    { value: 'wa', text: 'Walloon - wa' },
    { value: 'cy', text: 'Welsh - Cymraeg' },
    { value: 'fy', text: 'Western Frisian' },
    { value: 'xh', text: 'Xhosa' },
    { value: 'yi', text: 'Yiddish' },
    { value: 'yo', text: 'Yoruba - Èdè Yorùbá' },
    { value: 'zu', text: 'Zulu - isiZulu' }
];


async function fetchCountries() {
  try {
    const response = await fetch('https://trial.mobiscroll.com/content/countries.json');
    const data = await response.json();
    const dropdown = document.getElementById('countryDropdown');

    data.forEach(item => {
      if (item.value != 'NP') {
        const option = document.createElement('option');
        option.value = item.value;

        const optionContent = '<div class="md-country-picker-item">' + item.text + '</div>';

        option.innerHTML = optionContent;

        dropdown.appendChild(option);
      }
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

fetchCountries();

const selectElement = document.getElementById('languageSelect');

languages.forEach(language => {
  const option = document.createElement('option');
  option.value = language.value;
  option.text = language.text;
  selectElement.appendChild(option);
});

const categories = [
  {value: 'food', text: 'Food' },
  {value: 'sports', text: 'Sports' }
]

const selectCategory = document.getElementById('categorySelect');

categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category.value;
  option.text = category.text;
  selectCategory.appendChild(option);
});