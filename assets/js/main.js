        let currentLanguage = 'en'; // Default language

        function toggleLanguage() {
            currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
            updateLanguage();
        }

        function updateLanguage() {
            if (currentLanguage === 'en') {
                document.getElementById('headerTitle').textContent = 'Plant Manager';
                document.getElementById('homeWelcome').textContent = 'Welcome to Plant Manager';
                document.getElementById('plantNameLabel').textContent = 'Enter Plant Name:';
                document.getElementById('submitButton').textContent = 'Submit';
                document.getElementById('plantOptionsTitle').innerHTML = 'Choose an Option for <span id="currentPlantName"></span>';
                document.getElementById('plantingInstructionsButton').textContent = 'Planting Instructions & Schedule';
                document.getElementById('diseaseInfoButton').textContent = 'Plant Disease Information';
                document.getElementById('backToHomeButton').textContent = 'Back to Home';
                document.getElementById('plantingPageTitle').textContent = 'Planting Instructions & Schedule';
                document.getElementById('plantingDateLabel').textContent = 'Planting Date:';
                document.getElementById('careInstructionsLabel').
                    document.getElementById('careInstructionsLabel').textContent = 'Care Instructions:';
                document.getElementById('tipsLabel').textContent = 'Tips:';
                document.getElementById('harvestDateLabel').textContent = 'Harvest Date:';
                document.getElementById('submitScheduleButton').textContent = 'Submit Schedule';
                document.getElementById('diseasePageTitle').textContent = 'Plant Disease Information';
                document.getElementById('diseaseDescriptionLabel').textContent = 'Disease Description:';
                document.getElementById('diseaseSymptomsLabel').textContent = 'Disease Symptoms:';
                document.getElementById('diseaseDiscoveryDateLabel').textContent = 'Disease Discovery Date:';
                document.getElementById('submitDiseaseInfoButton').textContent = 'Submit Disease Info';
                document.getElementById('goToResistanceButton').textContent = 'Go to Disease Resistance';
                document.getElementById('backToOptionsButton').textContent = 'Back to Options';
                document.getElementById('resistancePageTitle').textContent = 'Plant Disease Resistance';
                document.getElementById('resistanceMeasuresLabel').textContent = 'Resistance Measures:';
                document.getElementById('preventionTipsLabel').textContent = 'Prevention Tips:';
                document.getElementById('submitResistanceInfoButton').textContent = 'Submit Resistance Info';
                document.getElementById('backToHomeResistanceButton').textContent = 'Back to Home';
            } else {
                document.getElementById('headerTitle').textContent = 'مدير النباتات';
                document.getElementById('homeWelcome').textContent = 'مرحباً بك في مدير النباتات';
                document.getElementById('plantNameLabel').textContent = 'أدخل اسم النبات:';
                document.getElementById('submitButton').textContent = 'إرسال';
                document.getElementById('plantOptionsTitle').innerHTML = 'اختر خيارًا لـ <span id="currentPlantName"></span>';
                document.getElementById('plantingInstructionsButton').textContent = 'إرشادات الزراعة والجدول الزمني';
                document.getElementById('diseaseInfoButton').textContent = 'معلومات الأمراض النباتية';
                document.getElementById('backToHomeButton').textContent = 'العودة إلى الصفحة الرئيسية';
                document.getElementById('plantingPageTitle').textContent = 'إرشادات الزراعة والجدول الزمني';
                document.getElementById('plantingDateLabel').textContent = 'تاريخ الزراعة:';
                document.getElementById('careInstructionsLabel').textContent = 'إرشادات العناية:';
                document.getElementById('tipsLabel').textContent = 'نصائح:';
                document.getElementById('harvestDateLabel').textContent = 'تاريخ الحصاد:';
                document.getElementById('submitScheduleButton').textContent = 'إرسال الجدول الزمني';
                document.getElementById('diseasePageTitle').textContent = 'معلومات الأمراض النباتية';
                document.getElementById('diseaseDescriptionLabel').textContent = 'وصف المرض:';
                document.getElementById('diseaseSymptomsLabel').textContent = 'أعراض المرض:';
                document.getElementById('diseaseDiscoveryDateLabel').textContent = 'تاريخ اكتشاف المرض:';
                document.getElementById('submitDiseaseInfoButton').textContent = 'إرسال معلومات المرض';
                document.getElementById('goToResistanceButton').textContent = 'الذهاب إلى مقاومة الأمراض';
                document.getElementById('backToOptionsButton').textContent = 'العودة إلى الخيارات';
                document.getElementById('resistancePageTitle').textContent = 'مقاومة الأمراض النباتية';
                document.getElementById('resistanceMeasuresLabel').textContent = 'تدابير المقاومة:';
                document.getElementById('preventionTipsLabel').textContent = 'نصائح الوقاية:';
                document.getElementById('submitResistanceInfoButton').textContent = 'إرسال معلومات المقاومة';
                document.getElementById('backToHomeResistanceButton').textContent = 'العودة إلى الصفحة الرئيسية';
            }
        }

        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
            document.getElementById(pageId).classList.remove('hidden');
        }

        function handlePlantNameSubmit(event) {
            event.preventDefault();
            const plantName = document.getElementById('plantName').value;
            document.getElementById('currentPlantName').textContent = plantName;
            showPage('plantOptionsPage');
        }

        function handlePlantingFormSubmit(event) {
            event.preventDefault();
            const plantingDate = document.getElementById('plantingDate').value;
            const careInstructions = document.getElementById('careInstructions').value;
            const tips = document.getElementById('tips').value;
            const harvestDate = document.getElementById('harvestDate').value;
            console.log('Planting Details:', { plantingDate, careInstructions, tips, harvestDate });
            event.target.reset();
            showPage('homePage');
        }

        function handleDiseaseFormSubmit(event) {
            event.preventDefault();
            const diseaseDescription = document.getElementById('diseaseDescription').value;
            const diseaseSymptoms = document.getElementById('diseaseSymptoms').value;
            const diseaseDiscoveryDate = document.getElementById('diseaseDiscoveryDate').value;
            console.log('Disease Details:', { diseaseDescription, diseaseSymptoms, diseaseDiscoveryDate });
            event.target.reset();
            showPage('resistancePage');
        }

        function handleResistanceFormSubmit(event) {
            event.preventDefault();
            const resistanceMeasures = document.getElementById('resistanceMeasures').value;
            const preventionTips = document.getElementById('preventionTips').value;
            console.log('Resistance Details:', { resistanceMeasures, preventionTips });
            event.target.reset();
            showPage('homePage');
        }

        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('plantNameForm').addEventListener('submit', handlePlantNameSubmit);
            document.getElementById('plantingForm').addEventListener('submit', handlePlantingFormSubmit);
            document.getElementById('diseaseForm').addEventListener('submit', handleDiseaseFormSubmit);
            document.getElementById('resistanceForm').addEventListener('submit', handleResistanceFormSubmit);
        });
