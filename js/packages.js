const questionsData = [
    {
        Name: "Basic Diabetic Check",
        Test: "CBC, FBS, PPBS, Serum Creatinine, Urine routine",
        Parameters: "48",
        Price: "Rs. 399",
        Description: "The basic diabetic package comprises essential medical tests intended to evaluate and oversee the health of individuals with diabetes. These tests play a crucial role in diagnosing diabetes, monitoring blood sugar levels, and detecting potential complications early, ensuring effective management of the condition.",
    }, {
        Name: "Advance Diabetic Check",
        Test: "CBC, FBS, PPBS, Serum Creatinine, Urine routine, HbA1c, Insulin, Urine microalbumin, Urine creatinine",
        Parameters: "52",
        Price: "Rs. 1399",
        Description: "The Advanced Diabetic check builds upon the Basic Diabetic package by incorporating essential additional tests specifically designed for comprehensive diabetes management and assessment. Together, these tests offer a thorough evaluation of diabetes care. They facilitate ongoing monitoring of blood sugar levels, early detection of complications such as kidney disease, and the customization of treatment strategies to enhance patient well-being and quality of life. Regular testing through the Advanced Diabetic check is essential for proactive management, helping to mitigate the long-term health risks linked to diabetes.",
    }, {
        Name: "Fever Profile",
        Test: "CBC, ESR, CRP, Widal, Peripheral smear, Malaria Antigen, Urine routine",
        Parameters: "55",
        Price: "Rs. 699",
        Description: "These tests provide a comprehensive evaluation to diagnose the cause of fever and guide appropriate treatment. They are crucial for identifying infectious agents like bacteria and parasites, assessing inflammation levels, and monitoring overall health during febrile illnesses. Utilizing the basic fever profile package is essential for timely intervention and effective management of fever-related conditions.",
    }, {
        Name: "Advance Fever Profile",
        Test: "CBC, ESR, CRP, Widal, Peripheral smear, Malaria Antigen, Urine routine, Dengue profile, Typhoid, Chickengunia",
        Parameters: "61",
        Price: "Rs. 999",
        Description: "The advanced fever profile includes tests for Dengue, Typhoid, and Chikungunya in addition to the basic fever profile. This comprehensive package offers an in-depth evaluation to diagnose the cause of fever and guide appropriate treatment. It is vital for identifying infectious agents such as bacteria and parasites, detecting specific diseases like Dengue, Typhoid, and Chikungunya, assessing inflammation levels, and monitoring overall health during febrile illnesses. Utilizing the advanced fever profile is essential for timely intervention and effective management of a wide range of fever-related conditions.",
    }, {
        Name: "Basic Cardiac Care",
        Test: "CBC, ESR, CRP, BMI, ECG, Lipid Profile, Urine routine",
        Parameters: "56",
        Price: "Rs. 699",
        Description: "Especially post-COVID, it is essential to track your heart health to identify and manage any potential complications promptly. The Basic Cardiac Care Package includes a comprehensive set of tests designed to assess and monitor heart health. Utilizing this package is crucial for early detection, timely intervention, and effective management of heart-related conditions.",
    }, {
        Name: "Advance Cardiac Care",
        Test: "CBC, ESR, CRP, BMI, ECG, Lipid Profile, Urine routine, Apo A, Apo B",
        Parameters: "58",
        Price: "Rs. 1099",
        Description: "The Advanced Cardiac Care Package includes a comprehensive set of tests designed to thoroughly assess and monitor heart health. These additional tests provide a deeper understanding of your lipid profile and cardiovascular risk, enabling more precise diagnosis and treatment.",
    }, {
        Name: "PCOS Panel",
        Test: "CBC, FBS, LH, FSH, Insulin, TFT, Prolactin, Testosterone, E2",
        Parameters: "33",
        Price: "Rs. 1499",
        Description: "The PCOS Panel comprises a comprehensive set of tests designed to assess and monitor various aspects of health related to Polycystic Ovary Syndrome (PCOS). These tests offer valuable insights into the hormonal balance or imbalance in your body. Utilizing the PCOS Panel is essential for accurate diagnosis, timely intervention, and effective management of PCOS and its associated conditions. While it is recommended to complete the PCOS Panel on the second day of your menstrual cycle, it is not mandatory.",
    }, {
        Name: "Cancer Marker",
        Test: "CBC with Peripheral smear, CA19.9, CEA, PSA (Men) Pap smear, CA125 (Women)",
        Parameters: "28",
        Price: "Rs. 2499",
        Description: "The Cancer Marker Package comprises a comprehensive array of tests aimed at detecting and monitoring different types of cancer. Its use is critical for early detection, timely intervention, and effective management of diverse cancers. Regular screening using this package aids in identifying potential cancer markers promptly, enabling timely and appropriate treatment. PSA is specifically for males, while Pap smear and CA125 are specific tests for women.",
    }, {
        Name: "Mineral Profile",
        Test: "Iron Profile, Vit D, Vit B12, Electrolytes, Calcium, Magnesium, Phosphorous",
        Parameters: "13",
        Price: "Rs. 1999",
        Description: "The Mineral Profile comprises a comprehensive set of tests designed to assess and monitor essential mineral and vitamin levels in the body. This profile is recommended for individuals experiencing non-specific weakness. Utilizing the Mineral Profile helps identify deficiencies and imbalances, facilitating accurate diagnosis, timely intervention, and effective management of overall health."
    }, {
        Name: "Arthritic Profile",
        Test: "CBC, CRP, Calcium, Phosphorous, Uric acid, RA factor, ANA, A-CCP",
        Parameters: "28",
        Price: "Rs. 2499",
        Description: "If you experience consistent joint pain, getting an Arthritic Profile done is essential. The Arthritic Profile includes a comprehensive set of tests designed to assess and monitor various aspects of joint and bone health, aiding in the diagnosis and management of arthritis and related conditions. Utilizing the Arthritic Profile is crucial for accurate diagnosis, timely intervention, and effective management of arthritis and related conditions. Regular screening with this profile helps identify underlying issues, enabling prompt and appropriate treatment."
    }
];

const questionsContainer = document.getElementById("questions-container");

questionsData.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("question");

    article.innerHTML = `
      <div class="question-title">
        <p>${item.Name}<br>${item.Price}</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="far fa-plus-square"></i>
          </span>
          <span class="minus-icon">
            <i class="far fa-minus-square"></i>
          </span>
        </button>
      </div>
      <div class="question-text">
        <p><b>Package Name:</b> ${item.Name}</p>
        <p><b>Tests:</b> ${item.Test}</p>
        <p><b>Price:</b> ${item.Price}</p>
        <p><b>Details:</b> ${item.Description}</p>
      </div>
    `;

    questionsContainer.appendChild(article);
});

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        question.classList.toggle("show-text");
    });
});

const expandAllBtn = document.getElementById('expand-all');
const collapseAllBtn = document.getElementById('collapse-all');

expandAllBtn.addEventListener('click', () => {
    questions.forEach((question) => {
        question.classList.add('show-text');
    });
});

collapseAllBtn.addEventListener('click', () => {
    questions.forEach((question) => {
        question.classList.remove('show-text');
    });
});
