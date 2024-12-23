// شاشة البداية الثنائية
window.onload = function () {
    setTimeout(() => {
        document.getElementById('binary-screen').style.display = 'none';
        if (!localStorage.getItem('visited')) {
            document.getElementById('tutorial-screen').style.display = 'block';
        }
    }, 4000);
};

// إغلاق نافذة الشرح الأولي
function closeTutorial() {
    document.getElementById('tutorial-screen').style.display = 'none';
    localStorage.setItem('visited', 'true');
}

// التحقق من كود التفعيل
function activate() {
    const code = document.getElementById('activation-code').value;
    if (code.length >= 8) {
        document.getElementById('activation-section').classList.remove('active');
        document.getElementById('menu-section').classList.add('active');
    } else {
        showError();
    }
}

// عرض رسالة الخطأ
function showError() {
    document.getElementById('error-screen').style.display = 'block';
}

function closeError() {
    document.getElementById('error-screen').style.display = 'none';
}

// عرض صفحة جديدة
function showPage(option) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('option-template').classList.add('active');
    document.getElementById('option-title').textContent = option;
}

// الرجوع للقائمة
function goBack() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('menu-section').classList.add('active');
}

// إدخال الـ ID
function submitID(inputId) {
    const idValue = document.getElementById(inputId).value;
    if (idValue.length < 8) {
        showError();
    } else {
        alert("تم تنفيذ طلبك!");
    }
} "إزالة البوت",
        "pet": "إضافة حيوان أليف"
    };
    document.getElementById('menu-section').classList.remove('active');
    document.getElementById('option-template').classList.add('active');
    document.getElementById('option-title').textContent = optionTitles[option];
}

// التحقق من الإدخال
function submitID(inputId) {
    const idValue = document.getElementById(inputId).value;
    if (idValue.length < 8) {
        showError();
    } else {
        showStatus();
    }