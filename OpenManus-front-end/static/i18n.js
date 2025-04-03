const i18n = {
    en: {
        welcome: {
            title: "Welcome to OpenManus Local Version",
            subtitle: "Please enter a task prompt to start a new task"
        },
        config: {
            title: "System Configuration",
            subtitle: "Please fill in the necessary configuration information to continue using the system",
            note: "Please ensure that the following configuration information is correct.",
            apiKeyNote: "If you do not have an API key, please obtain one from the corresponding AI service provider.",
            llmConfig: "LLM Configuration",
            serverConfig: "Server Configuration",
            save: "Save Configuration",
            cancel: "Cancel",
            required: "Required"
        },
        input: {
            placeholder: "Enter task prompt...",
            button: "Create Task"
        },
        history: {
            title: "History Tasks"
        },
        status: {
            running: "Task running",
            completed: "Task completed",
            failed: "Task failed",
            error: "Error"
        },
        buttons: {
            configSetting: "Configuration"
        }
    },
    zh: {
        welcome: {
            title: "欢迎使用 OpenManus 本地版",
            subtitle: "请输入任务提示以开始新任务"
        },
        config: {
            title: "系统配置",
            subtitle: "请填写必要的配置信息以继续使用系统",
            note: "请确保以下配置信息正确无误。",
            apiKeyNote: "如果您没有API密钥，请从相应的AI服务提供商获取。",
            llmConfig: "LLM 配置",
            serverConfig: "服务器配置",
            save: "保存配置",
            cancel: "取消",
            required: "必填"
        },
        input: {
            placeholder: "输入任务提示...",
            button: "创建任务"
        },
        history: {
            title: "历史任务"
        },
        status: {
            running: "任务运行中",
            completed: "任务完成",
            failed: "任务失败",
            error: "错误"
        },
        buttons: {
            configSetting: "系统配置"
        }
    },
    ja: {
        welcome: {
            title: "OpenManus ローカル版へようこそ",
            subtitle: "タスクを開始するにはプロンプトを入力してください"
        },
        config: {
            title: "システム設定",
            subtitle: "システムを使用するために必要な設定情報を入力してください",
            note: "以下の設定情報が正しいことを確認してください。",
            apiKeyNote: "APIキーをお持ちでない場合は、対応するAIサービスプロバイダーから取得してください。",
            llmConfig: "LLM 設定",
            serverConfig: "サーバー設定",
            save: "設定を保存",
            cancel: "キャンセル",
            required: "必須"
        },
        input: {
            placeholder: "タスクプロンプトを入力...",
            button: "タスク作成"
        },
        history: {
            title: "タスク履歴"
        },
        status: {
            running: "タスク実行中",
            completed: "タスク完了",
            failed: "タスク失敗",
            error: "エラー"
        },
        buttons: {
            configSetting: "システム設定"
        }
    },
    ko: {
        welcome: {
            title: "OpenManus 로컬 버전에 오신 것을 환영합니다",
            subtitle: "새 작업을 시작하려면 프롬프트를 입력하세요"
        },
        config: {
            title: "시스템 설정",
            subtitle: "시스템을 계속 사용하려면 필요한 구성 정보를 입력하세요",
            note: "다음 구성 정보가 올바른지 확인하세요.",
            apiKeyNote: "API 키가 없는 경우 해당 AI 서비스 제공업체에서 얻으세요.",
            llmConfig: "LLM 설정",
            serverConfig: "서버 설정",
            save: "설정 저장",
            cancel: "취소",
            required: "필수"
        },
        input: {
            placeholder: "작업 프롬프트 입력...",
            button: "작업 생성"
        },
        history: {
            title: "작업 기록"
        },
        status: {
            running: "작업 실행 중",
            completed: "작업 완료",
            failed: "작업 실패",
            error: "오류"
        },
        buttons: {
            configSetting: "시스템 설정"
        }
    },
    de: {
        welcome: {
            title: "Willkommen bei OpenManus Lokale Version",
            subtitle: "Bitte geben Sie eine Aufgabenanweisung ein, um eine neue Aufgabe zu starten"
        },
        config: {
            title: "Systemkonfiguration",
            subtitle: "Bitte füllen Sie die erforderlichen Konfigurationsinformationen aus",
            note: "Bitte stellen Sie sicher, dass die folgenden Konfigurationsinformationen korrekt sind.",
            apiKeyNote: "Wenn Sie keinen API-Schlüssel haben, erhalten Sie diesen vom entsprechenden KI-Dienstanbieter.",
            llmConfig: "LLM Konfiguration",
            serverConfig: "Server Konfiguration",
            save: "Konfiguration speichern",
            cancel: "Abbrechen",
            required: "Erforderlich"
        },
        input: {
            placeholder: "Aufgabenanweisung eingeben...",
            button: "Aufgabe erstellen"
        },
        history: {
            title: "Aufgabenverlauf"
        },
        status: {
            running: "Aufgabe wird ausgeführt",
            completed: "Aufgabe abgeschlossen",
            failed: "Aufgabe fehlgeschlagen",
            error: "Fehler"
        },
        buttons: {
            configSetting: "Systemeinstellungen"
        }
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const texts = i18n[lang];

    document.querySelector('.welcome-message h1').textContent = texts.welcome.title;
    document.querySelector('.welcome-message p').textContent = texts.welcome.subtitle;

    document.getElementById('config-button').value = texts.buttons.configSetting;
    document.getElementById('config-button').title = texts.buttons.configSetting;

    document.querySelector('.config-modal-header h2').textContent = texts.config.title;
    document.querySelector('.config-modal-header p').textContent = texts.config.subtitle;
    document.querySelector('.note-box p:first-child').textContent = texts.config.note;
    document.querySelector('.note-box p:last-child').textContent = texts.config.apiKeyNote;

    document.querySelectorAll('.config-section h3').forEach(h3 => {
        if (h3.textContent.includes('LLM')) {
            h3.textContent = texts.config.llmConfig;
        } else if (h3.textContent.includes('Server')) {
            h3.textContent = texts.config.serverConfig;
        }
    });

    document.getElementById('save-config-btn').textContent = texts.config.save;
    document.getElementById('cancel-config-btn').textContent = texts.config.cancel;

    document.getElementById('prompt-input').placeholder = texts.input.placeholder;
    document.querySelector('#input-container button').textContent = texts.input.button;

    document.querySelector('.history-panel h2').textContent = texts.history.title;

    document.querySelectorAll('.required-mark').forEach(mark => {
        mark.textContent = texts.config.required;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    document.getElementById('language-select').value = currentLang;
    updatePageContent(currentLang);

    document.getElementById('language-select').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
});
