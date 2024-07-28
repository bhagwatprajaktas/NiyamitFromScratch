document.addEventListener("DOMContentLoaded", function () {
    const offers = [
        { name: "FIT BIT", parameters: "60", price: "₹ 799", tests: ["CBC FBS", "RFT", "LIPID PROFILE URINE ROUTINE", "CALCIUM PHOSPHOROUS"] },
        { name: "FIT MID", parameters: "79", price: "₹ 1699", tests: ["CBC FBS", "RFT", "LIPID PROFILE URINE ROUTINE", "CALCIUM PHOSPHOROUS LFT", "TFT", "HbA1C", "ELECTROLYTES"] },
        { name: "FIT VIT", parameters: "81", price: "₹ 2599", tests: ["CBC FBS", "RFT", "LIPID PROFILE URINE ROUTINE", "CALCIUM PHOSPHOROUS LFT", "TFT", "HbA1C", "ELECTROLYTES", "VIT B12", "VIT D"] },
        { name: "FIT SURE", parameters: "87", price: "₹ 3599", tests: ["CBC FBS", "RFT", "LIPID PROFILE URINE ROUTINE", "CALCIUM PHOSPHOROUS LFT", "TFT", "HbA1C", "ELECTROLYTES", "VIT B12", "VIT D", "IRON PROFILE", "MAGNESIUM", "PSA/CA125"] }
    ];

    const tests = [
        {
            name: "Fine Needle Aspiration Cytology (FNAC) Test",
            description: "FNAC offers rapid, accurate diagnoses for early detection and effective management of medical conditions.",
            details: "FNAC is a quick, minimally invasive procedure used to diagnose lumps or masses in the body. A thin needle extracts a small sample of cells from the suspicious area for microscopic examination.",
            purpose: "Diagnoses infections, inflammation, benign tumors, and cancers.",
            procedure: "Performed in a clinic; a fine needle aspirates cells from the lump.",
            benefits: "Quick, safe, and cost-effective. Provides a tissue diagnosis to guide treatment.",
            preparation: "No special preparation needed. Resume normal activities immediately.",
            risks: "Minimal, with rare minor bleeding or infection."
        },
        {
            name: "Pap Smear Test",
            description: "Regular Pap smears are crucial for women’s health, offering peace of mind through early detection and prevention of cervical cancer.",
            details: "A Pap smear is a simple and essential screening test for cervical cancer. It involves collecting cells from the cervix to detect abnormal changes that could indicate pre-cancerous conditions or cancer.",
            purpose: "Screens for cervical cancer and pre-cancerous changes in cervical cells.",
            procedure: "A healthcare provider gently scrapes cells from the cervix during a pelvic exam.",
            benefits: "Early detection of abnormal cells, allowing for timely treatment and prevention of cervical cancer.",
            preparation: "Avoid intercourse, douching, or using vaginal products 24 hours before the test. Best scheduled when not menstruating.",
            risks: "Minimal discomfort; very safe with rare minor bleeding or infection."
        },
        {
            name: "Semen Analysis",
            description: "Semen analysis is a vital step in understanding male reproductive health and addressing fertility challenges effectively.",
            details: "Semen analysis is a crucial test to evaluate male fertility. It examines the quality and quantity of sperm in a semen sample to identify potential fertility issues.",
            purpose: "Assesses male fertility by analyzing sperm count, motility, morphology, and overall semen quality.",
            procedure: "The patient provides a semen sample, typically collected through masturbation in a sterile container.",
            benefits: "Identifies potential causes of male infertility, aiding in diagnosis and treatment planning.",
            preparation: "Abstain from ejaculation for 2-5 days before the test. Avoid alcohol, caffeine, and medications that could affect results.",
            risks: "Non-invasive and risk-free."
        },
        {
            name: "Sputum Analysis",
            description: "Sputum analysis is essential for diagnosing and managing respiratory infections and diseases, leading to targeted and effective treatment.",
            details: "Sputum analysis is a diagnostic test used to detect infections or diseases in the lungs and airways by examining mucus (sputum) coughed up from the respiratory tract.",
            purpose: "Diagnoses respiratory infections, tuberculosis, pneumonia, bronchitis, and lung cancer.",
            procedure: "The patient provides a sputum sample by coughing deeply to expel mucus into a sterile container.",
            benefits: "Identifies pathogens or abnormal cells, guiding effective treatment and management of respiratory conditions.",
            preparation: "May be asked to rinse your mouth with water before collecting the sample; best collected in the morning.",
            risks: "Non-invasive and safe."
        },

        {
            name: "Body Fluid Analysis",
            description: "Body fluid analysis is a diagnostic test used to examine various types of body fluids to detect infections, diseases, or other medical conditions.",
            details: "Body fluid analysis is crucial for accurate diagnosis and effective management of numerous medical conditions, providing valuable insights into a patient’s health.",
            purpose: "Evaluates fluids such as blood, urine, cerebrospinal fluid, synovial fluid, pleural fluid, and peritoneal fluid for signs of infection, inflammation, or other abnormalities.",
            procedure: "The specific fluid is collected using appropriate techniques, such as blood draw, urine sample, lumbar puncture, or aspiration.",
            benefits: "Helps diagnose a wide range of conditions, including infections, inflammatory diseases, cancers, and metabolic disorders.",
            preparation: "Preparation varies depending on the type of fluid being analyzed. Follow specific instructions provided by the healthcare provider.",
            risks: "Generally minimal, but can include discomfort or slight risk of infection at the collection site."
        },
        {
            name: "Histopathology Biopsy",
            description: "Histopathology biopsy is a critical tool in diagnosing and understanding diseases, enabling precise and effective treatment strategies.",
            details: "A histopathology biopsy is a diagnostic procedure that involves the examination of tissue samples under a microscope to detect diseases, especially cancer.",
            purpose: "Diagnoses diseases like cancer, inflammatory conditions, and infections by analyzing tissue architecture and cellular details.",
            procedure: "A small tissue sample is collected from the affected area using techniques such as needle biopsy, excisional biopsy, or surgical biopsy. The sample is then processed and examined by a pathologist.",
            benefits: "Provides a definitive diagnosis, guiding treatment decisions and management plans.",
            preparation: "Preparation varies depending on the biopsy type. Follow specific instructions provided by the healthcare provider.",
            risks: "Generally minimal but can include bleeding, infection, or discomfort at the biopsy site."
        }


    ];

    const offersContainer = document.getElementById('offers-container');
    const testsContainer = document.getElementById('tests-container');
    const modalsContainer = document.getElementById('modals-container');

    // Generate Offers
    offers.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.className = 'custom-card-horizontal mb-4';
        offerCard.innerHTML = `
                <div class="custom-card-body">
                    <h5 class="custom-card-title">${offer.name}</h5>
                    <h6 class="custom-card-subtitle mb-2 text-muted">Price</h6>
                    <p class="custom-card-text">${offer.price}</p>
                    <h6 class="custom-card-subtitle mb-2 text-muted">Parameters</h6>
                    <p class="custom-card-text">${offer.parameters}</p>
                    <h6 class="custom-card-subtitle mb-2 text-muted">Included Tests <i class="bi bi-info-circle" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="${offer.tests.join(', ')}"></i></h6>
                </div>
            `;
        offersContainer.appendChild(offerCard);
    });

    // Initialize Bootstrap Popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Generate Specialized Tests and Modals
    tests.forEach((test, index) => {
        const testCard = document.createElement('div');
        testCard.className = 'custom-card col-md-3 mb-4 mx-1';
        testCard.innerHTML = `
                <div class="custom-card-body" data-bs-toggle="modal" data-bs-target="#testModal${index + 1}">
                    <h5 class="custom-card-title">${test.name}</h5>
                    <p class="custom-card-text">${test.description}</p>
                </div>
            `;
        testsContainer.appendChild(testCard);

        const testModal = document.createElement('div');
        testModal.className = 'modal fade';
        testModal.id = `testModal${index + 1}`;
        testModal.tabIndex = -1;
        testModal.ariaLabelledby = `testModalLabel${index + 1}`;
        testModal.ariaHidden = true;
        testModal.innerHTML = `
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="testModalLabel${index + 1}">${test.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h6>Purpose</h6>
                            <p>${test.purpose}</p>
                            <h6>Procedure</h6>
                            <p>${test.procedure}</p>
                            <h6>Benefits</h6>
                            <p>${test.benefits}</p>
                            <h6>Preparation</h6>
                            <p>${test.preparation}</p>
                            <h6>Risks</h6>
                            <p>${test.risks}</p>
                            <h6>${test.details}</h6>
                        </div>
                    </div>
                </div>
            `;
        modalsContainer.appendChild(testModal);
    });
});