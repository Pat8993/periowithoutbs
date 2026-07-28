import type { ModuleData } from "./types";

export const modules: ModuleData[] = [
  {
    id: "module-1",
    title: "Module 1",
    subtitle: "Scientific Basis for Dental Hygiene Practice",
    color: "blue",
    colorLight: "bg-blue-50 border-blue-200",
    colorDark: "bg-blue-600",
    description:
      "Foundational sciences underlying dental hygiene: anatomy, biochemistry, microbiology, pathology, and pharmacology. This module covers the scientific knowledge base tested on the NBDHE.",
    sections: [
      {
        id: "anatomy-physiology",
        title: "Anatomy & Physiology",
        videoUrl: "head-neck-anatomy",
        quickFacts: [
          "The first pharyngeal arch forms the mandible, maxilla, malleus, incus, and muscles of mastication — all innervated by CN V (trigeminal).",
          "Tooth development (odontogenesis) stages in order: bud, cap, bell, apposition/maturation.",
          "Cleft lip = failed fusion of maxillary prominence with medial nasal prominence. Cleft palate = failed fusion of palatal shelves.",
          "The anterior two-thirds of the tongue is from arch 1 (CN V — general sensation; CN VII chorda tympani — taste); posterior one-third from arch 3 (CN IX — both).",
          "The trigeminal nerve (CN V) is the primary sensory nerve for the oral cavity and motor nerve for muscles of mastication.",
          "There are 20 primary teeth and 32 permanent teeth in the complete human dentition.",
          "The TMJ is a ginglymoarthrodial joint — it both hinges and glides.",
          "Parotid (Stensen's duct), submandibular (Wharton's duct), and sublingual (Rivinus ducts) are the three major salivary glands.",
          "The facial nerve (CN VII) passes through the parotid gland but does NOT innervate it — the gland is innervated by CN IX.",
          "Mnemonic — Cranial Nerves: Oh Oh Oh To Touch And Feel Very Green Vegetables AH! (Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Accessory, Hypoglossal)",
          "Mnemonic — External Carotid Branches: Some Angry Ladies Fight Over PMS (Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal)",
          "Muscles of mastication (masseter, temporalis, medial & lateral pterygoid) are all innervated by V3 — the mandibular division of trigeminal nerve.",
        ],
        content: [
          {
            type: "heading",
            text: "Head & Neck Anatomy",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The head and neck region contains complex anatomical structures essential to dental hygiene practice. The skull is divided into the cranium (8 bones) and the face (14 bones). Key bones include the maxillae, mandible, zygomatic, palatine, and temporal bones. The mandible is the only movable bone of the skull, articulating at the temporomandibular joint (TMJ). Understanding the foramina of the skull — such as the infraorbital, mental, and greater palatine foramina — is critical for local anesthesia administration.",
          },
          {
            type: "paragraph",
            text: "The muscles of mastication include the masseter, temporalis, medial pterygoid, and lateral pterygoid, all innervated by the mandibular division of the trigeminal nerve (CN V3). The muscles of facial expression are innervated by the facial nerve (CN VII). The suprahyoid and infrahyoid muscles assist in swallowing and speaking. Dental hygienists must understand these muscular relationships to identify deviations and pathology during extraoral examination.",
          },
          {
            type: "paragraph",
            text: "The vascular supply to the head and neck derives primarily from the common carotid arteries, which bifurcate into internal and external carotid arteries. The external carotid gives rise to the facial, lingual, and maxillary arteries — all significant for dental procedures. Venous drainage follows a parallel pattern, with the internal jugular vein as the primary drainage vessel. The lymphatic system of the head and neck is organized into superficial and deep cervical nodes, and lymphadenopathy may indicate infection, inflammation, or malignancy.",
          },
          {
            type: "heading",
            text: "Oral Cavity & Dentition",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The oral cavity is divided into the vestibule (between lips/cheeks and teeth) and the oral cavity proper (inside the dental arches). The oral mucosa includes masticatory mucosa (keratinized — attached gingiva, hard palate), lining mucosa (non-keratinized — buccal, labial, alveolar, floor of mouth, ventral tongue, soft palate), and specialized mucosa (dorsal tongue with papillae). The periodontium consists of gingiva, periodontal ligament, cementum, and alveolar bone — collectively the attachment apparatus of the tooth.",
          },
          {
            type: "paragraph",
            text: "Tooth anatomy includes the crown (clinical vs. anatomical), root, enamel (96% inorganic hydroxyapatite), dentin (70% inorganic), cementum, and pulp. The universal tooth numbering system uses numbers 1–32 for permanent teeth and letters A–T for primary teeth. The FDI/ISO system uses two-digit quadrant numbering. Eruption sequences are critical exam knowledge: primary mandibular central incisors erupt at approximately 6–10 months, and permanent first molars erupt around age 6.",
          },
          {
            type: "heading",
            text: "Embryology of the Head & Neck",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Embryonic development of the head and neck is dominated by the pharyngeal (branchial) apparatus, which forms during weeks 4–7 of gestation. The apparatus consists of six pharyngeal arches (the fifth regresses), separated externally by pharyngeal clefts and internally by pharyngeal pouches. Each arch contains a cartilage bar (skeletal precursor), muscular component, aortic arch artery, and cranial nerve. Arch 1 (mandibular arch): forms the mandible, maxilla, zygomatic bone, squamous temporal bone, malleus, and incus (Meckel\'s cartilage); muscles of mastication, tensor tympani, tensor veli palatini, mylohyoid, and anterior belly of digastric; innervated by CN V (trigeminal). Arch 2 (hyoid arch): forms Reichert\'s cartilage — stapes, styloid process, stylohyoid ligament, lesser horn and upper body of hyoid; muscles of facial expression, stapedius, stylohyoid, and posterior belly of digastric; innervated by CN VII (facial). Arch 3: forms greater horn and lower body of hyoid; stylopharyngeus muscle; innervated by CN IX (glossopharyngeal). Arches 4 and 6: form laryngeal cartilages (thyroid, cricoid, arytenoids, corniculate, cuneiform); pharyngeal and laryngeal muscles; innervated by CN X (vagus) — superior laryngeal nerve (arch 4) and recurrent laryngeal nerve (arch 6). The pharyngeal clefts: cleft 1 forms the external auditory meatus; clefts 2–4 are obliterated. Pharyngeal pouches: pouch 1 forms the tympanic cavity and Eustachian tube; pouch 2 forms the palatine tonsil bed; pouch 3 forms the inferior parathyroid glands and thymus; pouch 4 forms the superior parathyroid glands; the ultimobranchial body (pouch 5) contributes parafollicular C cells to the thyroid.",
          },
          {
            type: "paragraph",
            text: "Facial development begins around week 4 from five facial primordia surrounding the stomodeum (primitive mouth): the frontonasal prominence (single, superior), paired maxillary prominences (lateral), and paired mandibular prominences (inferior/caudal). The frontonasal prominence develops bilateral nasal placodes that invaginate to form nasal pits, creating the medial and lateral nasal prominences. The upper lip forms from fusion of the medial nasal prominences with the maxillary prominences; failure of fusion results in cleft lip. The intermaxillary segment (formed by fusion of the medial nasal prominences deep to the surface) gives rise to the philtrum of the upper lip, the premaxillary component of the maxilla (housing the four incisors), and the primary palate (anterior hard palate anterior to the incisive foramen). The secondary palate (hard palate posterior to incisive foramen + soft palate) forms from the palatal shelves — medial extensions of the maxillary prominences that initially grow vertically alongside the tongue, then elevate to a horizontal position above the tongue during week 8 and fuse at the midline. Failure of palatal shelf fusion results in cleft palate. Odontogenesis (tooth development) begins around week 6 with the formation of the dental lamina from oral ectoderm. Stages: bud stage (week 8 — epithelial proliferation into mesenchyme), cap stage (week 9–10 — formation of enamel organ with inner and outer enamel epithelium and stellate reticulum), bell stage (week 11–12 — differentiation of ameloblasts and odontoblasts, crown shape determined), and apposition/maturation stage (deposition of enamel and dentin matrix followed by mineralization). The tongue develops from multiple arches: anterior two-thirds (oral/body) from the median tongue bud and paired distal tongue buds from arch 1 mesenchyme; posterior one-third (pharyngeal/root) from arch 3 (copula/hypobranchial eminence). The foramen cecum marks the origin of the thyroid diverticulum, which descends along the thyroglossal duct from the tongue base to its final pretracheal position in the neck by week 7; persistence of the thyroglossal duct may result in thyroglossal duct cysts, typically presenting as midline neck swellings that move with swallowing and tongue protrusion.",
          },
          {
            type: "heading",
            text: "Anatomy Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/cranial-nerves.png",
                name: "Cranial Nerves (CN I–XII)",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/tooth-bud-stages.png",
                name: "Odontogenesis Stages",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/oral-cavity.png",
                name: "Oral Cavity Anatomy",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/tooth-numbers.png",
                name: "Universal Tooth Numbering (1–32)",
                disclaimer: "Illustrative example — for educational purposes.",
              },
            ],
          },
          {
            type: "heading",
            text: "Body Systems Review",

            level: 2,
          },
          {
            type: "paragraph",
            text: "The cardiovascular system is paramount in patient assessment: blood pressure classification (normal: <120/<80; elevated: 120–129/<80; Stage 1 HTN: 130–139/80–89; Stage 2 HTN: ≥140/≥90), heart rate norms (60–100 bpm adult), and conditions requiring antibiotic prophylaxis or medical consultation. The respiratory system and airway assessment are critical for identifying patients at risk for breathing complications during treatment. The endocrine system — particularly diabetes mellitus — has profound effects on periodontal health: diabetic patients have a 2–3x increased risk of periodontitis, and periodontal treatment can improve glycemic control (HbA1c reduction of ~0.4%).",
          },
        ],
      },
      {
        id: "biochem-nutrition",
        title: "Biochemistry & Nutrition",
        videoUrl: "biochem-nutrition",
        quickFacts: [
          "Dental caries results from acid demineralization when plaque pH drops below 5.5 (critical pH for enamel).",
          "Xylitol is a 5-carbon sugar alcohol that Streptococcus mutans cannot metabolize, making it cariostatic.",
          "Vitamin C deficiency impairs collagen synthesis, leading to weakened periodontal ligaments and gingival bleeding.",
          "Calcium and phosphate, with fluoride, promote remineralization via fluorapatite formation.",
          "Critical pH for enamel demineralization is 5.5; for dentin/cementum it is higher at 6.2–6.7 — root surfaces demineralize more readily.",
          "Mnemonic — Fat-soluble vitamins: ADEK (A, D, E, K) — these are stored in the body and can accumulate to toxic levels.",
          "Mnemonic — B-complex vitamins: The Rhythm Nearly Proved Contagious (Thiamine B1, Riboflavin B2, Niacin B3, Pyridoxine B6, Cobalamin B12)",
          "Xerostomia-causing medications to know: antihistamines, antihypertensives, antidepressants, diuretics, and anticholinergics.",
        ],
        content: [
          {
            type: "heading",
            text: "Biochemistry & Nutrition Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/vitamin-deficiencies.png",
                name: "Vitamin Deficiency Oral Manifestations — Vitamins A, B2 (Riboflavin), B3 (Niacin/Pellagra), B12 (Cobalamin), C (Scurvy), D — Enamel Hypoplasia, Glossitis, Angular Cheilitis, Bleeding Gingiva",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/demin-remin-cycle.png",
                name: "Demineralization/Remineralization Cycle — Teeter-Totter Model: pH < 5.5 Acid Attack (Ca²⁺/PO₄³⁻ Dissolve Out) vs pH > 5.5 Salivary Buffering (Ca²⁺/PO₄³⁻/F⁻ Redeposit as Fluorapatite)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/stephan-curve.png",
                name: "Stephan Curve — Plaque pH vs. Time After Glucose Challenge: Resting pH ~6.8, Critical pH 5.5 (Enamel) / 6.2 (Dentin), Rapid Drop in 2–5 Min, Slow Return Over 30–60 Min; Snacking Frequency Keeps pH Below Critical",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Macronutrients & Oral Health",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Carbohydrates are the primary dietary factor in dental caries etiology. Fermentable carbohydrates — especially sucrose, glucose, and fructose — are metabolized by oral bacteria (primarily Streptococcus mutans and Lactobacillus species) to produce organic acids that demineralize enamel. The frequency of sugar consumption is more cariogenic than the total quantity consumed, which is why dietary counseling emphasizes reducing between-meal snacking on sugary foods. Complex carbohydrates (starches) are generally less cariogenic unless they are retained in the oral cavity for extended periods.",
          },
          {
            type: "paragraph",
            text: "Proteins are essential for tissue repair, immune function, and collagen synthesis. The periodontal ligament, gingival connective tissue, and alveolar bone all depend on adequate protein intake for maintenance and healing. Amino acids such as arginine are metabolized by certain oral bacteria to produce ammonia, which can neutralize acids and provide a protective effect. Lipids are not directly cariogenic and may actually provide a protective coating on tooth surfaces.",
          },
          {
            type: "heading",
            text: "Micronutrients & Periodontal Health",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Vitamin C (ascorbic acid) is critical for collagen synthesis and cross-linking. Deficiency leads to scurvy, characterized by weakened collagen, gingival swelling, bleeding, and tooth mobility. Vitamin D facilitates calcium absorption and is essential for alveolar bone mineralization. Vitamin A supports epithelial integrity, and deficiencies can lead to hyperkeratosis of oral mucosa. B-complex vitamins (especially B2, B3, B6, B12, and folate) deficiencies manifest orally as glossitis, angular cheilitis, and oral ulcerations.",
          },
          {
            type: "paragraph",
            text: "Calcium and phosphate are the mineral building blocks of enamel and dentin. Adequate intake during tooth development is crucial for caries resistance. Fluoride promotes remineralization by forming fluorapatite, which is more acid-resistant than hydroxyapatite. Iron deficiency anemia may present as pale oral mucosa, atrophic glossitis, and increased susceptibility to oral candidiasis.",
          },
          {
            type: "heading",
            text: "Nutrition Counseling in Dental Hygiene",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dietary assessment is a standard component of the dental hygiene process of care. A 24-hour diet recall or 3–7 day food diary can identify caries-promoting dietary patterns. The Caries Risk Assessment Tool (CAT) from the AAPD incorporates dietary factors. Counseling should focus on reducing frequency of fermentable carbohydrate exposure, encouraging non-cariogenic snacks (cheese, nuts, vegetables), and promoting cariostatic foods (xylitol-containing products, dairy products). Patients with xerostomia need special dietary guidance, as reduced salivary flow impairs clearance and buffering.",
          },
        ],
      },
      {
        id: "microbiology-immunology",
        title: "Microbiology & Immunology",
        videoUrl: "microbiology",
        quickFacts: [
          "The oral microbiome contains over 700 bacterial species; approximately 50% are uncultivable.",
          "S. mutans is the primary etiological agent of dental caries due to its acidogenic and aciduric properties.",
          "P. gingivalis, T. denticola, and T. forsythia form the 'Red Complex' strongly associated with periodontitis.",
          "Biofilm formation follows a sequence: acquired pellicle → initial colonizers (Gram+) → secondary colonizers (Gram−) → mature biofilm.",
          "Gram-positive cocci: Staphylococcus (clusters), Streptococcus (chains) — both are primary colonizers of the tooth surface.",
          "Mnemonic — Caries bacteria: SM and LB (Streptococcus mutans and Lactobacillus — initials spell 'small' cariogenic bacteria).",
          "IgA is the primary immunoglobulin in saliva and mucosal surfaces — secretory IgA (sIgA) provides first-line immune defense.",
          "Periodontal Red Complex: P. gingivalis, T. denticola, T. forsythia — the 'red' signals highest pathogenic potential.",
        ],
        content: [
          {
            type: "heading",
            text: "Microbiology & Immunology Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/biofilm-stages.png",
                name: "Dental Biofilm Formation Stages — Acquired Pellicle → Initial Adhesion (S. sanguinis) → Coaggregation (F. nucleatum) → Mature Biofilm",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/red-complex.png",
                name: "Red Complex Pathogens — P. gingivalis (gingipains, fimbriae, LPS), T. forsythia (BspA, sialidase), T. denticola (motility, proteases, Msp)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/caries-tetrad.png",
                name: "Caries Tetrad — Host/Tooth, Bacteria (S. mutans, Lactobacillus), Substrate (fermentable CHOs), Time (Stephan Curve, pH <5.5)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "The Oral Microbiome",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The oral cavity hosts one of the most diverse microbial communities in the human body, with over 700 bacterial species identified. These microorganisms exist primarily as biofilms — structured communities embedded in an extracellular polymeric matrix that adheres to tooth surfaces (supragingival and subgingival), mucosal surfaces, and prostheses. The oral microbiome exists in a dynamic equilibrium with the host; disruption of this equilibrium (dysbiosis) leads to the two most prevalent oral diseases: dental caries and periodontal disease.",
          },
          {
            type: "paragraph",
            text: "Biofilm formation follows a well-defined sequence: The acquired enamel pellicle (salivary glycoproteins) forms within seconds of cleaning. Gram-positive cocci (Streptococcus species — S. sanguinis, S. oralis, S. mitis) are primary colonizers that adhere to pellicle receptors. Secondary colonizers (Gram-negative anaerobes including Fusobacterium nucleatum, which acts as a bridge organism) coaggregate with primary colonizers. Mature biofilm develops with a complex architecture containing fluid channels, and bacteria communicate via quorum sensing.",
          },
          {
            type: "heading",
            text: "Caries Etiology",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dental caries is a biofilm-mediated, sugar-driven, multifactorial disease. Streptococcus mutans is the primary etiological agent due to three key properties: (1) acidogenicity — rapid fermentation of carbohydrates to lactic acid; (2) aciduricity — ability to survive and continue metabolism at low pH; (3) synthesis of extracellular polysaccharides (glucans from sucrose via glucosyltransferases) that facilitate biofilm formation and adherence. Lactobacillus species contribute to caries progression, particularly in dentin. Caries requires four factors: a susceptible tooth surface, cariogenic bacteria, fermentable carbohydrates, and time — the caries tetrad.",
          },
          {
            type: "heading",
            text: "Periodontal Pathogens",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Periodontal diseases are polymicrobial infections. Socransky's microbial complexes organize subgingival bacteria by pathogenicity. The Red Complex — Porphyromonas gingivalis, Tannerella forsythia, and Treponema denticola — is most strongly associated with chronic periodontitis. P. gingivalis is considered a keystone pathogen: even in low abundance, it can dysregulate the host inflammatory response, shifting the entire microbial community toward dysbiosis. Aggregatibacter actinomycetemcomitans (Aa) is strongly associated with aggressive (now Grade C) periodontitis, particularly in younger patients, due to its leukotoxin production.",
          },
          {
            type: "heading",
            text: "Host Immune Response",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The host immune-inflammatory response to the subgingival biofilm is responsible for the majority of tissue destruction in periodontitis, not the bacteria directly. Innate immunity provides the first line of defense: neutrophils are recruited to the gingival sulcus, and their enzymes (MMPs, elastase) degrade connective tissue but also cause collateral damage. Cytokines — particularly IL-1β, TNF-α, and IL-6 — drive inflammation and bone resorption. Prostaglandins (especially PGE2) mediate vasodilation and bone resorption. The adaptive immune response involves T and B lymphocytes; in progressive lesions, B cells and plasma cells predominate. The RANK/RANKL/OPG pathway is the final common pathway for osteoclast activation and alveolar bone resorption.",
          },
        ],
      },
      {
        id: "pathology",
        title: "Pathology",
        videoUrl: "oral-pathology",
        quickFacts: [
          "Leukoplakia is a clinical term for a white patch that cannot be scraped off and cannot be characterized as any other definable disease — biopsy is indicated.",
          "Oral squamous cell carcinoma accounts for >90% of all oral cancers; 5-year survival is ~65%.",
          "Lichen planus presents with Wickham striae (lacy white lines) on buccal mucosa; erosive form requires monitoring.",
          "NUG (necrotizing ulcerative gingivitis) presents with punched-out papillae, pseudomembrane, fetid odor, and pain.",
          "Leukoplakia: biopsy is indicated if the lesion persists >2 weeks after removing suspected irritants — 5–25% show dysplasia.",
          "Fordyce granules are ectopic sebaceous glands appearing as yellowish papules on buccal/lip mucosa — normal variant, no treatment needed.",
          "Mnemonic — Oral cancer risk factors: SLATA (Smoking, Liquor/alcohol, Age >40, Tobacco smokeless, Actinic/UV radiation for lip).",
          "Geographic tongue = benign migratory glossitis — erythematous patches with white borders that change location; no treatment needed.",
        ],
        content: [
          {
            type: "heading",
            text: "Oral Lesions & Soft Tissue Pathology",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Recognition of oral pathology is a fundamental responsibility of the dental hygienist. White lesions include leukoplakia (clinical term for a white plaque that cannot be scraped off — associated with a 5–25% risk of malignant transformation), linea alba (frictional keratosis along buccal mucosa at occlusal plane), nicotine stomatitis (palatal keratosis from heat, not carcinogenic per se), oral lichen planus (immune-mediated with characteristic Wickham striae; reticular form is most common), and hairy leukoplakia (Epstein-Barr virus associated, seen on lateral tongue borders in immunocompromised patients).",
          },
          {
            type: "paragraph",
            text: "Red lesions (erythroplakia) carry a higher risk of dysplasia than white lesions — up to 90% of erythroplakic lesions show dysplasia, carcinoma in situ, or invasive carcinoma at biopsy. Other red lesions include erythematous candidiasis, hemangiomas, and telangiectasias. Pigmented lesions include amalgam tattoo (most common oral pigmentation), melanotic macule, oral melanosis, and malignant melanoma (rare but aggressive). Ulcerative lesions include traumatic ulcers, recurrent aphthous stomatitis (minor, major, herpetiform types), herpes simplex virus lesions, and squamous cell carcinoma.",
          },
          {
            type: "heading",
            text: "Dental Caries",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dental caries is classified by anatomical site (pit and fissure, smooth surface, root), by tissue involvement (incipient/white spot, enamel, dentin, pulpal), and by activity (active vs. arrested). The histopathology follows a sequence: subsurface demineralization with an intact surface layer (white spot lesion) → cavitation → involvement of dentinoenamel junction → lateral spread in dentin → pulp involvement. Root caries occurs on exposed cementum/dentin surfaces, typically in older adults with gingival recession and xerostomia. Rampant caries describes rapidly progressing, widespread caries, often associated with xerostomia or high-frequency sugar intake. Early childhood caries (ECC) is defined as one or more decayed, missing, or filled tooth surfaces in a child under 6.",
          },
          {
            type: "heading",
            text: "Periodontal Diseases",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The 2017 AAP/EFP classification system categorizes periodontal health, gingivitis (plaque-induced and non-plaque-induced), and periodontitis. Periodontitis is characterized by interdental clinical attachment loss (CAL) at ≥2 non-adjacent teeth, or buccal/oral CAL ≥3mm with pocketing >3mm at ≥2 teeth. Staging (I–IV) reflects severity and complexity; grading (A–C) reflects rate of progression and risk factors. Gingivitis is reversible with biofilm removal; periodontitis involves irreversible attachment loss but can be arrested with treatment. Necrotizing periodontal diseases (NUG, NUP) are characterized by necrosis, pseudomembrane, pain, and fetid odor, associated with stress, smoking, and immunocompromise.",
          },
          {
            type: "heading",
            text: "Systemic Conditions with Oral Manifestations",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Diabetes mellitus: Poorly controlled diabetes is associated with increased prevalence and severity of periodontitis (2–3x risk), multiple/recurrent periodontal abscesses, xerostomia, candidiasis, burning mouth syndrome, and impaired wound healing. HIV/AIDS: Oral manifestations include candidiasis (pseudomembranous, erythematous, angular cheilitis), oral hairy leukoplakia, Kaposi sarcoma, NUG/NUP, and recurrent HSV. Sjögren syndrome: Autoimmune destruction of salivary and lacrimal glands causing severe xerostomia and xerophthalmia; dramatically increases caries risk. Eating disorders: Bulimia causes dental erosion (perimolysis) from gastric acid on lingual surfaces of maxillary anterior teeth.",
          },
          {
            type: "heading",
            text: "Image Atlas: Common Oral Lesions",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/dental-caries.png",
                name: "Dental Caries",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/periodontitis.png",
                name: "Chronic Periodontitis",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/oral-candidiasis.png",
                name: "Oral Candidiasis",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/leukoplakia.png",
                name: "Leukoplakia",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/herpes-simplex.png",
                name: "Herpes Simplex (HSV-1)",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/aphthous-ulcer.png",
                name: "Aphthous Ulcer",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/lichen-planus.png",
                name: "Oral Lichen Planus",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/squamous-cell-carcinoma.png",
                name: "Squamous Cell Carcinoma",
                disclaimer: "Illustrative example — for educational purposes.",
              },
              {
                src: "/images/geographic-tongue.png",
                name: "Geographic Tongue",
                disclaimer: "Illustrative example — for educational purposes.",
              },
            ],
          },
        ],
      },
      {
        id: "pharmacology",
        title: "Pharmacology",
        videoUrl: "pharmacology",
        quickFacts: [
          "Amide local anesthetics (lidocaine, mepivacaine, bupivacaine, articaine) are metabolized in the liver; esters (procaine, benzocaine) are metabolized by plasma pseudocholinesterase.",
          "Epinephrine vasoconstrictor is contraindicated in patients taking non-selective beta-blockers (risk of hypertensive crisis).",
          "MRONJ risk: antiresorptive agents (bisphosphonates, denosumab) — oral bisphosphonates carry ~0.1% risk; IV bisphosphonates for cancer therapy carry ~1–10% risk.",
          "Antibiotic prophylaxis for infective endocarditis: amoxicillin 2g PO 30–60 min before procedure; clindamycin 600mg if penicillin-allergic.",
          "Local anesthetic max doses (mg/kg): Lidocaine 4.4 (7.0 w/epi), Articaine 7.0, Bupivacaine 1.3, Prilocaine 6.0, Mepivacaine 6.6.",
          "Mnemonic — LA max doses: LAME B-P (Lidocaine 7, Articaine 7, Mepivacaine 6.6, Etidocaine — Bupivacaine 1.3, Prilocaine 6).",
          "Epinephrine contraindications: unstable angina, recent MI (<6 months), uncontrolled hypertension, uncontrolled hyperthyroidism, non-selective beta-blocker use.",
          "Amoxicillin 2g pre-med prophylaxis is taken 1 hour before procedure for high-risk patients (prosthetic valves, prior IE, specific CHD).",
        ],
        content: [
          {
            type: "heading",
            text: "Pharmacology Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/la-classification-tree.png",
                name: "Local Anesthetic Classification Tree",
                disclaimer: "AI-generated educational illustration — for study purposes only",
              },
              {
                src: "/images/fluoride-mechanism.png",
                name: "Fluoride Mechanism of Action",
                disclaimer: "AI-generated educational illustration — for study purposes only",
              },
              {
                src: "/images/mronj-example.png",
                name: "MRONJ Radiographic Comparison",
                disclaimer: "AI-generated educational illustration — for study purposes only",
              },
            ],
          },
          {
            type: "heading",
            text: "Local Anesthetics",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Local anesthetics reversibly block sodium channels in nerve membranes, preventing depolarization and impulse propagation. They are classified into amides (lidocaine, mepivacaine, bupivacaine, articaine, prilocaine) and esters (procaine, benzocaine, tetracaine). Amides are metabolized by hepatic microsomal enzymes; esters are hydrolyzed by plasma pseudocholinesterase. The most commonly used dental local anesthetic is lidocaine 2% with epinephrine 1:100,000 (provides 60–90 minutes of pulpal anesthesia). Articaine 4% with epinephrine 1:100,000 has enhanced diffusion through bone due to its thiophene ring structure and is particularly useful for infiltration in the mandible.",
          },
          {
            type: "paragraph",
            text: "Maximum recommended doses (MRD) must be calculated based on patient weight. For lidocaine 2% with epinephrine: 7.0 mg/kg, not to exceed 500 mg (approximately 14 cartridges of 1.8 mL for a 70 kg adult). For articaine 4% with epinephrine: 7.0 mg/kg, not to exceed 500 mg (approximately 7 cartridges). Vasoconstrictors (epinephrine, levonordefrin) prolong anesthetic duration and reduce systemic toxicity by slowing absorption. Medical considerations: avoid epinephrine in patients with uncontrolled hypertension, recent MI (within 6 months), unstable angina, and those taking non-selective beta-blockers or tricyclic antidepressants.",
          },
          {
            type: "heading",
            text: "Analgesics",
            level: 2,
          },
          {
            type: "paragraph",
            text: "NSAIDs (ibuprofen, naproxen) are first-line dental analgesics due to their anti-inflammatory and analgesic properties. They inhibit cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis. Ibuprofen 400–600 mg provides equivalent analgesia to many opioid combinations with fewer side effects. Acetaminophen (paracetamol) provides analgesia and antipyresis but has minimal anti-inflammatory effect; it is hepatotoxic at doses >4g/day. Combination therapy (ibuprofen + acetaminophen) provides additive analgesia.",
          },
          {
            type: "heading",
            text: "Antibiotics in Dentistry",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Antibiotics are indicated for acute odontogenic infections with systemic signs (fever, lymphadenopathy, trismus, spreading cellulitis). Amoxicillin 500 mg TID for 7 days is first-line for odontogenic infections. For penicillin-allergic patients: clindamycin 300 mg QID or azithromycin 500 mg day 1 then 250 mg days 2–5. Metronidazole is effective against anaerobes and is often combined with amoxicillin for severe infections. Antibiotic prophylaxis before dental procedures is indicated for patients at high risk of infective endocarditis: prosthetic cardiac valves, previous infective endocarditis, congenital heart disease (unrepaired cyanotic, repaired with prosthetic material within 6 months, repaired with residual defects), and cardiac transplant recipients with valvulopathy.",
          },
          {
            type: "heading",
            text: "Fluorides & Medical Emergency Drugs",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Fluoride mechanisms: (1) promotes remineralization by formation of fluorapatite, which is more resistant to acid dissolution than hydroxyapatite; (2) inhibits demineralization; (3) inhibits bacterial enzyme systems (enolase) at high concentrations. Topical fluoride (varnish 5% NaF = 22,600 ppm fluoride; gel/foam APF 1.23% = 12,300 ppm) is more effective than systemic fluoride. Stannous fluoride (SnF2) provides additional antimicrobial and anti-hypersensitivity effects. Fluoride toxicity: probable toxic dose is 5 mg F/kg; certainly lethal dose is 16–32 mg F/kg in children.",
          },
          {
            type: "paragraph",
            text: "Medical emergency drugs that dental offices should maintain include: oxygen (primary emergency drug for all emergencies), epinephrine 1:1000 (anaphylaxis), nitroglycerin (angina), bronchodilator inhaler (asthma), oral glucose (hypoglycemia), diphenhydramine/Benadryl (allergic reactions), and aspirin 325 mg (suspected MI — chewable, non-enteric coated).",
          },
        ],
      },
    ],
  },
  {
    id: "module-2",
    title: "Module 2",
    subtitle: "Provision of Clinical Dental Hygiene Services",
    color: "green",
    colorLight: "bg-green-50 border-green-200",
    colorDark: "bg-green-600",
    description:
      "Clinical dental hygiene procedures and patient care: assessment, treatment planning, instrumentation, periodontal debridement, preventive agents, pain management, and maintenance.",
    sections: [
      {
        id: "patient-assessment",
        title: "Patient Assessment",
        videoUrl: "patient-assessment",
        quickFacts: [
          "ASA I: Normal healthy patient; ASA II: Mild systemic disease; ASA III: Severe systemic disease; ASA IV: Severe systemic disease that is a constant threat to life.",
          "Blood pressure must be taken at every appointment; ≥180/110 mmHg is a contraindication for elective dental treatment.",
          "A thorough medical history includes medications, allergies, hospitalizations, and review of systems.",
          "Vital signs: BP, pulse (60–100 bpm adult), respiration (12–20/min adult), temperature (98.6°F/37°C).",
          "ASA Physical Status: I (normal healthy), II (mild systemic disease), III (severe systemic disease), IV (constant threat to life), V (moribund), VI (brain-dead organ donor).",
          "Normal adult vital signs: BP <120/<80, HR 60–100 bpm, RR 12–20/min, Temp 98.6°F (37°C) — know thresholds for treatment modification.",
          "Mnemonic — Medical history taking: SAMPLE (Signs/symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to present condition).",
          "Stress reduction protocol for anxious/medically compromised patients: morning appointments, limit epinephrine, ensure profound anesthesia, short appointments.",
        ],
        content: [
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/asa-classification.png",
                name: "ASA Physical Status Classification (ASA I–VI)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/lymph-node-palpation.png",
                name: "Head & Neck Lymph Node Palpation",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/extraoral-exam.png",
                name: "Extraoral Examination Sequence (Steps 1–6)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Medical History Review",
            level: 2,
          },
          {
            type: "paragraph",
            text: "A comprehensive medical history is the foundation of safe dental hygiene care. The health history should be obtained at the initial appointment and reviewed/updated at every subsequent visit. Key components include: current and past medical conditions, hospitalizations and surgeries, medications (prescription, over-the-counter, supplements), allergies (drug, environmental, latex), and review of systems (cardiovascular, respiratory, endocrine, hepatic, renal, hematologic, immunologic, neurologic, and psychiatric). The ASA Physical Status Classification is used to assess perioperative risk: ASA I (normal healthy), ASA II (mild systemic disease, e.g., well-controlled hypertension), ASA III (severe systemic disease, e.g., uncontrolled diabetes), ASA IV (severe systemic disease that is a constant threat to life), ASA V (moribund, not expected to survive without surgery), ASA VI (brain-dead organ donor).",
          },
          {
            type: "paragraph",
            text: "Medications of particular concern in dental hygiene include: anticoagulants and antiplatelet agents (warfarin, clopidogrel, aspirin, direct oral anticoagulants) which increase bleeding risk during instrumentation; bisphosphonates and denosumab which increase risk of medication-related osteonecrosis of the jaw (MRONJ); immunosuppressants; and medications causing gingival enlargement (calcium channel blockers — nifedipine; anticonvulsants — phenytoin; immunosuppressants — cyclosporine). Always check for potential drug interactions when administering local anesthetics or prescribing analgesics.",
          },
          {
            type: "heading",
            text: "Vital Signs",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Vital signs must be recorded at every dental hygiene appointment. Blood pressure: normal <120/<80 mmHg; elevated 120–129/<80; Stage 1 HTN 130–139/80–89; Stage 2 HTN ≥140/≥90; hypertensive crisis >180/>120. Elective dental treatment is contraindicated at ≥180/110 mmHg — immediate medical referral is indicated. Pulse: normal adult 60–100 bpm; athletes may have resting pulse as low as 40 bpm; tachycardia (>100 bpm) may indicate stress, fever, or cardiovascular compromise; bradycardia (<60 bpm) may be normal in athletes or indicate conduction defects. Respiration: 12–20 breaths/min adult. Temperature: 98.6°F (37°C); fever ≥100.4°F warrants postponement of elective treatment.",
          },
          {
            type: "heading",
            text: "Extraoral & Intraoral Examination",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The extraoral examination proceeds systematically: inspect the head and face for symmetry, skin lesions, and abnormalities; palpate lymph nodes (preauricular, postauricular, submandibular, submental, cervical chain, supraclavicular) for size, consistency, mobility, and tenderness; palpate the TMJ for clicking, popping, crepitus, or tenderness during opening/closing; assess opening range (normal: 40–60 mm interincisally); examine the lips and vermilion border. The intraoral examination includes all oral structures: labial and buccal mucosa, mucobuccal fold, hard and soft palate, oropharynx, tongue (dorsal, ventral, lateral borders), floor of mouth, and gingiva. Use a systematic sequence to ensure no area is overlooked — this is the dental hygienist's primary cancer screening responsibility.",
          },
          {
            type: "heading",
            text: "Risk Assessment",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Risk assessment integrates findings from medical history, clinical examination, and diagnostic tests to determine a patient's risk profile. Caries risk assessment (CAMBRA — Caries Management By Risk Assessment) evaluates factors including: caries experience, diet (frequency of fermentable carbohydrate intake), fluoride exposure, salivary flow and quality, oral hygiene, and socioeconomic factors. Periodontal risk assessment considers: smoking status, diabetes, genetic factors (family history, IL-1 genotype), periodontal history, bleeding on probing, probing depths, bone loss relative to age, and specific pathogens. Oral cancer risk assessment evaluates: tobacco use (all forms), alcohol consumption, HPV status, age, gender, and sun exposure (lip cancer). Risk level determines recall intervals and treatment intensity.",
          },
        ],
      },
      {
        id: "periodontal-assessment",
        title: "Periodontal Assessment",
        videoUrl: "periodontal-assessment",
        quickFacts: [
          "Probing depth + gingival margin level (recession) = Clinical Attachment Level (CAL).",
          "BOP (bleeding on probing) is the most reliable clinical indicator of gingival inflammation.",
          "Furcation Class I: incipient; Class II: cul-de-sac; Class III: through-and-through; Class IV: through-and-through with recession.",
          "Mobility: Grade 0 = physiologic; Grade 1 = <1mm horizontal; Grade 2 = >1mm horizontal; Grade 3 = vertical + horizontal.",
          "CAL formula: Clinical Attachment Level = probing depth + gingival margin level (add recession, subtract enlargement from CEJ).",
          "BOP within 10 seconds of probing indicates active inflammation — absence of BOP is a strong negative predictor of future attachment loss.",
          "Furcation classes: Class I (<3mm horizontal), Class II (>3mm but not through), Class III (through-and-through), Class IV (through-and-through with recession).",
          "Mnemonic — AAP Staging & Grading: Staging = Severity (I–IV, how bad); Grading = Growth rate (A–C, how fast) — 'Stage the damage, Grade the risk.'",
        ],
        content: [
          {
            type: "heading",
            text: "Periodontal Assessment Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/periodontal-probing.png",
                name: "Periodontal Probing — 6 Sites Per Tooth",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/cal-calculation.png",
                name: "Clinical Attachment Level (CAL) Calculation",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/furcation-classification.png",
                name: "Furcation Classification (Class I–IV)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/miller-recession.png",
                name: "Miller Recession Classification (Class I–IV)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Probing Protocol",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Periodontal probing is the cornerstone of periodontal assessment. Six sites per tooth are probed: mesiobuccal, buccal/facial, distobuccal, mesiolingual, lingual/palatal, and distolingual. The probe is walked circumferentially around each tooth, entering the sulcus with light force (approximately 0.25 N or 25 grams). Probing depth (PD) is the distance from the gingival margin to the base of the sulcus/pocket. A healthy sulcus depth is 1–3 mm. Depths ≥4 mm indicate pocket formation characteristic of periodontitis, though pseudopocketing from gingival enlargement can produce false positives.",
          },
          {
            type: "paragraph",
            text: "Clinical attachment level (CAL) is the distance from the CEJ to the base of the pocket. CAL = probing depth + recession (distance from CEJ to gingival margin) when recession is present; when the gingival margin is coronal to the CEJ, CAL = probing depth − tissue enlargement. CAL is the gold standard for diagnosing and monitoring periodontitis because it reflects actual attachment loss over time. The 2017 classification requires interdental CAL at ≥2 non-adjacent teeth for a periodontitis diagnosis.",
          },
          {
            type: "heading",
            text: "Bleeding & Inflammation Assessment",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Bleeding on probing (BOP) is the most objective clinical sign of gingival inflammation. It indicates ulceration of the sulcular epithelium and is a predictor of future attachment loss — although BOP has high sensitivity but low specificity for disease progression. BOP is recorded as present/absent at each site and expressed as a percentage of sites. Healthy gingiva does not bleed on gentle probing; a BOP score of <10% is considered clinically healthy, while >30% indicates generalized inflammation. Gingival indices (GI — Löe & Silness; MGI — modified gingival index) quantify inflammation severity from 0 (normal) to 3 (severe inflammation with spontaneous bleeding).",
          },
          {
            type: "paragraph",
            text: "Gingival description includes: color (coral pink in health; erythematous in inflammation), contour (knife-edged papillae in health; bulbous, rolled, or blunted in disease), consistency (firm and resilient in health; spongy, edematous, or fibrotic in disease), texture (stippled in health; smooth and shiny in inflammation), and size. The presence or absence of stippling is not a reliable indicator of health, as stippling varies by individual.",
          },
          {
            type: "heading",
            text: "Furcation, Mobility & Mucogingival Assessment",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Furcation involvement is assessed using a curved Nabers probe. Classification (Glickman): Class I — horizontal attachment loss <3mm (incipient); Class II — horizontal loss >3mm but not through-and-through (cul-de-sac); Class III — through-and-through furcation; Class IV — through-and-through with gingival recession exposing the furcation. Maxillary molars have three furcations (buccal, mesiopalatal, distopalatal); mandibular molars have two (buccal, lingual). Maxillary first premolars may have a mesial furcation between roots.",
          },
          {
            type: "paragraph",
            text: "Tooth mobility is assessed using the handles of two instruments applying alternating force: Grade 0 — physiologic mobility (0.1–0.2mm); Grade 1 — slightly increased mobility (<1mm horizontal in buccolingual direction); Grade 2 — moderately increased mobility (>1mm horizontal); Grade 3 — severe mobility (horizontal >1mm and vertical depressibility). Mucogingival assessment evaluates the width of attached gingiva, gingival recession (classified by Miller: I — within MGJ, no interproximal bone loss; II — at or beyond MGJ, no interproximal bone loss; III — with interproximal bone loss; IV — severe interproximal bone loss with root coverage unlikely), and frenum attachments.",
          },
        ],
      },
      {
        id: "dental-charting",
        title: "Dental Charting & Radiographic Interpretation",
        videoUrl: "dental-charting",
        quickFacts: [
          "Bitewing radiographs are the standard for caries detection and alveolar bone level assessment.",
          "Periapical radiographs capture the entire tooth and surrounding bone; essential for endodontic and periapical pathology assessment.",
          "Panoramic radiographs provide an overview but lack the detail of intraoral films for caries and early bone loss.",
          "Carious lesions appear radiolucent; restorations (amalgam) appear radiopaque; composites may be radiolucent or slightly radiopaque.",
          "Universal/ADA numbering: permanent teeth 1–32 (maxillary right third molar → mandibular right third molar); primary teeth A–T.",
          "ALARA principle: As Low As Reasonably Achievable — minimize radiation exposure while maintaining diagnostic quality.",
          "Bitewings are ideal for interproximal caries and crestal bone levels; periapicals show entire tooth + periapical area; panoramic gives overall screening view.",
          "Mnemonic — BWX vs PA vs PAN: Bitewings = Between teeth, Periapicals = Pathosis at apex, Panoramic = Picture of everything.",
        ],
        content: [
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/bitewing-vs-pa.png",
                name: "Bitewing vs Periapical — Indications & Coverage",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/caries-radiolucency.png",
                name: "Caries Radiolucency — Incipient, Moderate, Advanced & Recurrent",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/radiographic-landmarks.png",
                name: "Radiographic Anatomical Landmarks — Panoramic Review",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Comprehensive Charting",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Complete dental charting is a medico-legal record and a diagnostic tool. Charting includes: existing restorations (material and surfaces), carious lesions (location and extent), missing teeth, prostheses (fixed — crowns, bridges; removable — partial, complete dentures), endodontic treatment, implants, and anomalies (supernumerary teeth, impactions, attrition, abrasion, erosion, abfraction). The Universal/ADA numbering system (1–32 permanent, A–T primary) is standard in the United States. Charting notation typically uses anatomic diagrams (odontograms) with symbols and abbreviations for conditions and treatments.",
          },
          {
            type: "paragraph",
            text: "Occlusal classification (Angle): Class I — mesiobuccal cusp of maxillary first molar occludes in buccal groove of mandibular first molar (normal); Class II — mandibular arch is distal to maxillary (retrognathic) — Division 1 (proclined incisors), Division 2 (retroclined centrals, lateral incisors proclined); Class III — mandibular arch is mesial to maxillary (prognathic). Overjet (horizontal overlap): normal 1–3mm; overbite (vertical overlap): normal 1–3mm or 5–25% of mandibular incisor height. Crossbite, open bite, and edge-to-edge relationships should be documented.",
          },
          {
            type: "heading",
            text: "Radiographic Techniques & Interpretation",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Intraoral radiographic techniques include: bitewing (BWX) — primarily for interproximal caries detection and alveolar bone crest evaluation, using vertical bitewings for periodontal assessment; periapical (PA) — capturing the entire tooth and periapical area, using paralleling (preferred, more accurate) or bisecting-angle technique; and occlusal — large area views for localization, sialoliths, and assessment of arch form. The paralleling technique (XCP/Rinn) produces the most geometrically accurate image by positioning the film parallel to the tooth long axis and the beam perpendicular to both film and tooth.",
          },
          {
            type: "paragraph",
            text: "Radiographic interpretation follows a systematic sequence: (1) assess technique and film quality; (2) evaluate anatomic landmarks; (3) examine each tooth for caries (radiolucencies at interproximal, occlusal, buccal/lingual, or root surfaces), restorations (radiopacities), and periapical pathology; (4) evaluate alveolar bone level (distance from CEJ to crest of alveolar bone — normal: 1–2mm apical to CEJ); (5) assess for pathology — periapical radiolucencies (granuloma, cyst, abscess), condensing osteitis (radiopacity), periodontal widening of PDL space, and furcation radiolucencies; (6) evaluate for incidental findings (retained root tips, foreign bodies, sialoliths, etc.).",
          },
        ],
      },
      {
        id: "treatment-planning",
        title: "Treatment Planning",
        videoUrl: "treatment-planning",
        quickFacts: [
          "The four phases of treatment: Preliminary (emergency), Phase I (non-surgical/etiologic), Phase II (surgical), Phase III (restorative), Phase IV (maintenance).",
          "Informed consent requires: explanation of condition, proposed treatment, risks/benefits, alternatives, and consequences of no treatment.",
          "Periodontal staging: I (mild), II (moderate), III (severe with potential for tooth loss), IV (severe with masticatory dysfunction).",
          "Periodontal grading: A (slow rate), B (moderate rate), C (rapid rate) — based on direct evidence of progression or indirect (bone loss/age, case phenotype, risk factors).",
          "Treatment phases: Preliminary (emergency) → Phase I (non-surgical/etiologic) → Phase II (surgical) → Phase III (restorative) → Phase IV (maintenance/SPT).",
          "Informed consent must cover: condition/diagnosis, proposed treatment, risks & benefits, alternatives, consequences of no treatment — document in chart.",
          "Periodontal Staging I–IV reflects severity/complexity; Grading A–C reflects rate of progression — both are needed for complete diagnosis per AAP 2017.",
          "Mnemonic — Phases of care: P-E-S-R-M (Preliminary/Emergency — Non-Surgical/Etio — Surgical — Restorative — Maintenance) or 'Please Enjoy Some Restful Moments.'",
        ],
        content: [
          {
            type: "heading",
            text: "Treatment Planning Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/aap-staging-grading.png",
                name: "AAP Periodontal Staging (I–IV) & Grading (A–C) Decision Tree — Severity Based on CAL, Bone Loss, Tooth Loss; Progression Rate Based on Bone Loss/Age, Risk Factors",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/phases-of-care.png",
                name: "Four Phases of Dental Care — Phase I (Non-Surgical/Etiologic: OHI, SRP), Phase II (Surgical), Phase III (Restorative), Phase IV (Maintenance/SPT)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },

          {
            type: "heading",
            text: "Phases of Care",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dental hygiene treatment is organized into phases defined by the dental hygiene process of care: assessment, diagnosis, planning, implementation, evaluation, and documentation (ADPIED). The preliminary phase addresses emergency needs — pain, acute infection, trauma. Phase I (non-surgical/etiologic therapy) is the core of dental hygiene practice: patient education, biofilm control instruction, scaling and root planing (periodontal debridement), caries control, and adjunctive therapies. Phase II includes surgical procedures (periodontal surgery, extractions, implant placement). Phase III is restorative (definitive restorations, prostheses). Phase IV is the maintenance/supportive phase — ongoing care at customized intervals.",
          },
          {
            type: "heading",
            text: "Informed Consent & ASA Classification",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Informed consent is both an ethical principle and a legal requirement. Valid consent requires: (1) disclosure — the provider explains the diagnosis, proposed treatment, risks and benefits, alternatives, and consequences of no treatment; (2) comprehension — the patient understands the information (use plain language, teach-back method); (3) voluntariness — consent is given freely without coercion; (4) competence — the patient has capacity to decide (not impaired by drugs, cognitive deficits, or being a minor). Consent can be written (preferred for invasive procedures) or verbal (documented in chart). The ASA classification guides treatment modifications: ASA I–II patients can generally receive routine care; ASA III patients may require medical consultation and modified treatment protocols; ASA IV patients typically receive only emergency care in a hospital setting.",
          },
          {
            type: "heading",
            text: "Periodontal Staging & Grading",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The 2017 AAP/EFP classification introduced staging (severity/complexity) and grading (progression rate) for periodontitis. Stage I: interdental CAL 1–2mm, radiographic bone loss in coronal third (<15%), no tooth loss due to periodontitis, probing depths ≤4mm. Stage II: interdental CAL 3–4mm, radiographic bone loss in coronal third (15–33%), no tooth loss due to periodontitis, probing depths ≤5mm. Stage III: interdental CAL ≥5mm, radiographic bone loss extending to middle third and beyond, tooth loss ≤4 teeth, probing depths ≥6mm, Class II–III furcation involvement, ridge defects. Stage IV: as Stage III plus need for complex rehabilitation due to masticatory dysfunction, secondary occlusal trauma, tooth loss ≥5 teeth, hypermobile teeth, ridge collapse.",
          },
          {
            type: "paragraph",
            text: "Grading: Grade A — slow rate of progression (no CAL loss over 5 years, bone loss/age <0.25), heavy biofilm with low destruction suggests low susceptibility. Grade B — moderate rate (expected progression, bone loss/age 0.25–1.0), biofilm commensurate with destruction. Grade C — rapid rate (CAL loss ≥2mm over 5 years, bone loss/age >1.0), destruction exceeds biofilm amount; risk factors (smoking ≥10 cigarettes/day, HbA1c ≥7.0 in diabetics) automatically shift grade to C.",
          },
        ],
      },
      {
        id: "instrumentation",
        title: "Instrumentation",
        videoUrl: "instrumentation",
        quickFacts: [
          "Gracey curettes are area-specific; Universal curettes can be used on all tooth surfaces.",
          "Gracey 1/2 and 3/4: anterior teeth; 5/6: anteriors and premolars; 7/8 and 9/10: posterior teeth (facial and lingual); 11/12: posterior mesial surfaces; 13/14: posterior distal surfaces.",
          "Sickles have a triangular cross-section with two cutting edges; used primarily for supragingival calculus removal.",
          "Ultrasonic scaling: magnetostrictive (elliptical motion, all sides active) vs. piezoelectric (linear motion, lateral sides active).",
          "Universal curettes: 90° blade-to-shank angle, both cutting edges usable — can be used on all tooth surfaces. Graceys: 70° offset, area-specific.",
          "Sickle scalers: triangular cross-section with pointed tip — designed for supragingival use only; the pointed tip can lacerate sulcular epithelium.",
          "Mnemonic — Gracey numbers: 1/2 & 3/4 (anterior), 5/6 (anterior/premolar), 7/8 & 9/10 (posterior facial/lingual), 11/12 (posterior mesial), 13/14 (posterior distal).",
          "Sharpening preserves the original blade angle: ~70° internal angle for Gracey curettes, ~90° for universal curettes — sharpen at first sign of dullness.",
        ],
        content: [
          {
            type: "heading",
            text: "Instrumentation Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/gracey-curettes.png",
                name: "Gracey Curette Identification Guide — Areas of Use",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/blade-angulation.png",
                name: "Blade Angulation: Gracey (70°) vs Universal (90°)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/sharpening-technique.png",
                name: "Sharpening Technique — Sharp vs Dull Cutting Edge",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Instrument Design & Classification",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Periodontal instruments are classified by purpose: examination instruments (mirror, probes, explorers), scaling instruments (sickles, curettes, files, ultrasonic/sonic scalers), and polishing instruments. Key design features include: handle (weight, diameter, texture for tactile sensitivity), shank (functional shank for adaptation around tooth contours — simple vs. complex; simple shanks for anterior teeth, complex shanks with multiple bends for posterior access), and working end (the blade or tip that contacts the tooth surface).",
          },
          {
            type: "paragraph",
            text: "Sickle scalers have a triangular/pointed cross-section with two cutting edges that meet in a sharp tip. They are designed for supragingival use only because the pointed tip can traumatize sulcular tissues. Straight shank sickles (anterior) and curved shank sickles (posterior) are available. Curettes have a rounded toe and semicircular cross-section with two cutting edges. The rounded back allows subgingival use. Gracey curettes are area-specific: the blade is offset at 70° to the lower shank (vs. 90° for universals), and only one cutting edge is used (the lower edge). Universal curettes (e.g., Columbia 13/14, 4R/4L) have both cutting edges usable and a 90° blade-to-shank angle.",
          },
          {
            type: "heading",
            text: "Gracey Curette Guide",
            level: 2,
          },
          {
            type: "table",
            table: {
              caption: "Gracey Curette Numbering & Application",
              headers: ["Gracey #", "Application Area", "Surfaces"],
              rows: [
                ["1/2, 3/4", "Anterior teeth", "Facial, lingual, mesial, distal (all surfaces)"],
                ["5/6", "Anteriors and premolars", "Facial, lingual, mesial, distal (all surfaces)"],
                ["7/8, 9/10", "Posterior teeth", "Facial and lingual surfaces"],
                ["11/12", "Posterior teeth", "Mesial surfaces only"],
                ["13/14", "Posterior teeth", "Distal surfaces only"],
                ["15/16", "Posterior teeth", "Mesial surfaces (modified for deeper pockets)"],
                ["17/18", "Posterior teeth", "Distal surfaces (modified for deeper pockets)"],
              ],
            },
          },
          {
            type: "heading",
            text: "Instrument Sharpening",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Sharp instruments are essential for effective calculus removal, patient comfort, and clinician ergonomics. A dull instrument requires more lateral pressure, reducing tactile sensitivity and increasing the risk of burnishing calculus and soft tissue trauma. Sharpening stones include: Arkansas stones (natural, fine grit, used with oil), India stones (synthetic, medium-coarse grit), ceramic stones (fine grit, used dry or with water), and diamond-coated stones (coarse, for gross reshaping). The sharpening technique preserves the original blade angulation: 70° internal angle for Gracey curettes, 90° for universal curettes. Sharpening should be performed at the first sign of dullness, typically every 15–20 strokes during heavy scaling. Sterilization cassettes allow safe transport of sharp instruments.",
          },
          {
            type: "heading",
            text: "Ultrasonic & Sonic Scalers",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Power-driven scalers remove deposits through mechanical vibration, cavitation (formation and collapse of microscopic bubbles that disrupt biofilm), and acoustic streaming (fluid movement that removes bacteria). Magnetostrictive units (e.g., Cavitron) use a metal stack that oscillates in an elliptical pattern at 25–30 kHz; all surfaces of the tip are active. Piezoelectric units use ceramic crystals that vibrate in a linear pattern at 25–50 kHz; only the lateral surfaces are active. Ultrasonic tips should be adapted at 0–15° to the tooth surface (vs. 45–90° for hand instruments), with a light, feather-like touch and constant motion. Water flow serves as coolant and irrigant; reduced flow causes overheating and pulp damage.",
          },
        ],
      },
      {
        id: "periodontal-debridement",
        title: "Periodontal Debridement & Deposit Removal",
        videoUrl: "periodontal-debridement",
        quickFacts: [
          "Calculus is mineralized dental plaque; supragingival calculus forms primarily from salivary calcium phosphate; subgingival calculus from gingival crevicular fluid.",
          "Scaling removes deposits from coronal and root surfaces; root planing removes cementum or surface dentin that is rough, impregnated with calculus, or contaminated with endotoxin.",
          "Endodontic-periodontal lesions: primary endo, primary perio, combined — classification determines treatment sequence.",
          "The endpoint of debridement is a smooth, glass-like root surface free of detectable deposits and biofilm.",
          "Calculus forms 24–72 hours after plaque accumulation: supragingival from salivary calcium phosphate, subgingival from GCF serum-derived minerals.",
          "Scaling = deposit removal (supra + subgingival); Root planing = removal of contaminated cementum/dentin to produce biologically compatible surface.",
          "Endo-perio lesions: primary endodontic (treat endo first), primary periodontal (treat perio first), combined (treat endo first then perio).",
          "Mnemonic — Re-eval timeline: '4 to 6' — re-evaluate 4–6 weeks post-SRP for tissue healing, epithelial reattachment, and resolution of inflammation.",
        ],
        content: [
          {
            type: "heading",
            text: "Periodontal Debridement Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/calculus-formation.png",
                name: "Calculus Formation — Plaque Biofilm → Mineralization by Salivary Calcium Phosphate (Supragingival) and GCF (Subgingival) → Incremental Layers on Root Cementum",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/endo-perio-lesion.png",
                name: "Endo-Perio Lesion Classification — Class I (Primary Endo: Apical Foramen), Class II (Primary Perio: Periodontal Pocket), Class III (Combined: Apical Foramen + Lateral Canals + Dentinal Tubules)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },

          {
            type: "heading",
            text: "Calculus Formation & Composition",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dental calculus is mineralized dental plaque that forms when calcium phosphate salts from saliva (supragingival) or gingival crevicular fluid (subgingival) precipitate within the plaque matrix. Calculus formation begins 24–72 hours after plaque accumulation if not disturbed. Mineralization starts as small foci that coalesce into a solid mass. The inorganic content of calculus is primarily hydroxyapatite (58%), whitlockite (21%), octacalcium phosphate (12%), and brushite (9%). The organic component includes bacteria, desquamated epithelial cells, and salivary proteins. Calculus itself is not the primary etiological factor in periodontitis — it is always covered by a layer of unmineralized biofilm, and it is this biofilm that causes inflammation. However, calculus acts as a retention surface for biofilm and a mechanical irritant.",
          },
          {
            type: "heading",
            text: "Scaling & Root Planing Technique",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Periodontal debridement encompasses scaling (removal of supra- and subgingival calculus and biofilm) and root planing (removal of residual calculus and contaminated cementum/dentin to produce a smooth root surface). The technique involves: (1) proper instrument selection based on deposit location, tenacity, and pocket depth; (2) correct adaptation — the terminal 1–2mm of the working end adapted flush against the tooth surface at the proper angulation (70–80° for calculus removal, 45–65° for finishing); (3) controlled strokes — short, overlapping, controlled strokes moving coronally; (4) stabilization — intraoral and extraoral fulcrums for control and prevention of injury; (5) thoroughness — systematic debridement of all surfaces in all quadrants.",
          },
          {
            type: "paragraph",
            text: "Treatment is typically organized by quadrants or sextants, with multiple appointments for moderate to severe periodontitis. Full-mouth disinfection protocols (completing all debridement within 24 hours) may reduce the risk of reinfection from untreated sites. Local anesthesia is typically required for effective subgingival debridement — scaling without anesthesia in diseased pockets is uncomfortable for the patient and compromises clinical outcomes because the clinician cannot instrument thoroughly.",
          },
          {
            type: "heading",
            text: "Clinical Endpoints & Adjunctive Therapies",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The clinical endpoint of periodontal debridement is a biologically compatible root surface that promotes healing. This includes: smooth root surfaces free of detectable calculus, removal of plaque biofilm, reduced probing depths, resolution of inflammation (decreased BOP), and gain of clinical attachment. Complete removal of all cementum is neither necessary nor desirable — modern approaches emphasize removal of biofilm and endotoxin-contaminated cementum while preserving healthy cementum. Re-evaluation is performed 4–6 weeks post-treatment, allowing time for epithelial attachment reformation and resolution of inflammation. At re-evaluation, persistent sites with BOP and deep pockets may require additional debridement or referral for surgical intervention.",
          },
        ],
      },
      {
        id: "preventive-agents",
        title: "Preventive Agents",
        videoUrl: "preventive-agents",
        quickFacts: [
          "5% NaF varnish (22,600 ppm fluoride): apply 2–4 times per year for caries prevention; sets on contact with saliva.",
          "Sealants: flowable resin placed in pits and fissures; retention requires strict moisture control (acid etch 15–20 sec, rinse, dry, bond, sealant, cure).",
          "Chlorhexidine gluconate 0.12% rinse: gold standard chemical plaque control; side effects: staining, taste alteration, increased supragingival calculus.",
          "Calcium phosphate technologies (ACP, CPP-ACP, TCP) enhance remineralization when combined with fluoride.",
          "5% NaF varnish = 22,600 ppm fluoride — sets on contact with saliva, applied 2–4x/year for high caries risk; preferred for children under 6.",
          "Sealant procedure: clean (no fluoride paste), isolate, etch 37% H₃PO₄ (15–20 sec perm, 30 sec primary), rinse, dry to frosty white, apply, cure 20 sec.",
          "Chlorhexidine 0.12% BID rinse — substantivity lasts 8–12 hrs; side effects: brown staining, taste alteration, increased supragingival calculus.",
          "Mnemonic — Fluoride mechanisms: RIDE (Remineralization via fluorapatite, Inhibits demineralization, Disrupts bacterial enzyme enolase, Enhances crystal formation).",
        ],
        content: [
          {
            type: "heading",
            text: "Preventive Agents Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/sealant-procedure.png",
                name: "Pit & Fissure Sealant Procedure — Steps 1–7: Clean, Isolate, Etch (37% H₃PO₄ 15–20 sec), Rinse/Dry (Frosty White), Apply Sealant, Light Cure (20 sec), Check Occlusion",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/fluoride-varnish.png",
                name: "Fluoride Varnish Application — 5% NaF (22,600 ppm F⁻) Applied with Brush; Post-Op: No Eating/Drinking 30 min, No Brushing Until Next Day, Soft Diet",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },

          {
            type: "heading",
            text: "Fluoride Therapy",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Fluoride is the single most effective caries-preventive agent. Its primary mechanism is topical: (1) promotes remineralization of early carious lesions by forming fluorapatite — Ca₁₀(PO₄)₆F₂ — which has a lower solubility product than hydroxyapatite and is more resistant to acid dissolution; (2) inhibits demineralization by adsorbing to crystal surfaces; (3) at high concentrations, inhibits bacterial enzymes involved in glycolysis (enolase). Professional topical fluoride includes: 5% sodium fluoride varnish (22,600 ppm F) — the preferred agent, sets on contact with saliva, applied 2–4x/year for high-risk patients; 1.23% acidulated phosphate fluoride (APF) gel/foam (12,300 ppm F) — applied in trays for 4 minutes; 2% neutral sodium fluoride gel/foam (9,000 ppm F) — for patients with porcelain, composite, or glass ionomer restorations (avoids etching effect of APF).",
          },
          {
            type: "heading",
            text: "Pit & Fissure Sealants",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Sealants provide a physical barrier that prevents microorganisms and food debris from entering pit and fissure anatomy — the most caries-susceptible tooth surfaces. Indications: deep, retentive pits and fissures; newly erupted teeth (within 4 years of eruption); no evidence of proximal caries; patient at moderate to high caries risk. The procedure: (1) clean tooth surface with pumice or air polishing (do not use fluoride prophylaxis paste — it interferes with etching); (2) isolate (rubber dam preferred, or cotton rolls + isolation devices); (3) etch with 37% phosphoric acid for 15–20 seconds (permanent teeth) or 30 seconds (primary teeth); (4) rinse thoroughly for 20–30 seconds, dry until enamel appears frosty white; (5) apply bonding agent (optional, improves retention in some studies); (6) apply sealant material; (7) cure with visible light for 20 seconds; (8) check occlusion and adjust; (9) verify retention at recall appointments.",
          },
          {
            type: "heading",
            text: "Antimicrobial Agents",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Chlorhexidine gluconate (CHX) is the most effective chemical plaque control agent available. It is a bisbiguanide with a broad antimicrobial spectrum and substantivity (binds to oral surfaces and is released over 8–12 hours, maintaining therapeutic levels). Mechanism of action: CHX is positively charged and binds to negatively charged bacterial cell walls, increasing permeability and causing cell lysis. Prescription: 0.12% CHX rinse, 15 mL for 30 seconds BID. Clinical uses: adjunct to periodontal therapy (short-term, 2–4 weeks post-SRP); management of NUG/NUP; pre-procedural rinse; and for patients with impaired oral hygiene ability. Limitations: extrinsic brown staining of teeth/tongue/restorations, altered taste perception, increased supragingival calculus formation, and rare hypersensitivity. Essential oils (Listerine: thymol, menthol, eucalyptol, methyl salicylate) provide moderate plaque reduction with fewer side effects than CHX.",
          },
          {
            type: "heading",
            text: "Desensitizing Agents",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dentin hypersensitivity results from exposed dentin with patent tubules — the hydrodynamic theory (Brannstrom) describes fluid movement within dentinal tubules stimulating mechanoreceptors near the pulp. Desensitizing agents work by: (1) occluding dentinal tubules (potassium oxalate, calcium phosphate technologies, glutaraldehyde-based agents, fluoride varnish, bioactive glass); or (2) depolarizing nerve endings (potassium nitrate — found in many OTC desensitizing toothpastes such as Sensodyne). In-office treatments include: 5% NaF varnish, glutaraldehyde/HEMA (Gluma), oxalate products, and bonding agents. The most effective strategy combines in-office treatment with home-use desensitizing toothpaste and correction of etiological factors (abrasive brushing, acid erosion, abfraction, gingival recession).",
          },
        ],
      },
      {
        id: "pain-management",
        title: "Pain Management",
        videoUrl: "pain-management",
        quickFacts: [
          "Maxillary infiltration: deposit near apex of target tooth; effective due to porous maxillary alveolar bone.",
          "Mandibular block (IAN): target is the mandibular foramen, medial to the ramus; landmarks: coronoid notch, pterygomandibular raphe, occlusal plane.",
          "PSA block: anesthetizes maxillary molars (except MB root of first molar); GPN block: anesthetizes palatal tissue.",
          "Topical anesthetic: benzocaine 20% (ester), lidocaine 5% (amide) — apply for 1–2 min for mucosal anesthesia; risk of methemoglobinemia with benzocaine.",
          "Maxillary infiltration is effective due to thin, porous cortical bone; mandibular posterior typically requires IAN block due to dense cortical plate.",
          "IAN block landmarks: coronoid notch (anterior ramus concavity), pterygomandibular raphe, occlusal plane — insert from contralateral premolar area.",
          "PSA block covers maxillary molars (except MB root of 1st molar ~28% of time), GPN block = posterior hard palate, nasopalatine = anterior palate.",
          "Mnemonic — Injection techniques: 'Max = Infiltrate, Mand = Block' — maxillary bone is porous enough for infiltration; mandibular cortical bone is too dense posteriorly.",
        ],
        content: [
          {
            type: "heading",
            text: "Pain Management Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/ian-block-anatomy.png",
                name: "IAN Block — Anatomical Landmarks (Coronoid Notch, Pterygomandibular Raphe, Mandibular Foramen, Lingula)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/maxillary-vs-mandibular.png",
                name: "Maxillary Infiltration vs Mandibular Block — PSA, MSA, ASA Sites & IAN/Lingual/Long Buccal Targets",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/maxillary-nerve-blocks.png",
                name: "Maxillary Nerve Block Targets — PSA, GPN, Nasopalatine (Tuberosity, Greater Palatine Foramen, Incisive Papilla)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Local Anesthesia Techniques",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Maxillary anesthesia is achieved primarily through supraperiosteal infiltration (local infiltration) near the apices of target teeth. The maxillary cortical bone is thin and porous, allowing anesthetic diffusion. For multiple teeth, a field block may be used. Specific nerve blocks include: posterior superior alveolar (PSA) block — anesthetizes maxillary molars except the mesiobuccal root of the first molar (which receives innervation from the middle superior alveolar nerve in ~72% of patients); middle superior alveolar (MSA) block — premolars and MB root of first molar; anterior superior alveolar (ASA)/infraorbital block — anterior teeth; greater palatine nerve block — posterior palatal tissue (target: greater palatine foramen, medial to second molar); nasopalatine nerve block — anterior palatal tissue (target: incisive papilla).",
          },
          {
            type: "paragraph",
            text: "Mandibular anesthesia relies primarily on the inferior alveolar nerve (IAN) block because the dense mandibular cortical bone limits infiltration effectiveness (except in children with less dense bone and anterior mandible). IAN block landmarks: (1) coronoid notch — greatest concavity on anterior border of ramus; (2) pterygomandibular raphe; (3) occlusal plane of mandibular posterior teeth. The needle is inserted from the contralateral premolar area, parallel to occlusal plane. After bone contact at the mandibular foramen (lingula), aspirate, then deposit 1.5–1.8 mL (one cartridge). Lingual nerve is anesthetized during withdrawal. The long buccal nerve block anesthetizes buccal gingiva of mandibular molars. The mental/incisive nerve block anesthetizes mandibular anterior teeth and premolars via the mental foramen (located between apices of first and second premolars).",
          },
          {
            type: "heading",
            text: "Topical Anesthesia & Adjunctive Techniques",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Topical anesthetics are applied before injection to reduce the discomfort of needle penetration. Common agents: benzocaine 20% (ester — fast onset, short duration, low allergenicity but risk of methemoglobinemia with excessive use), lidocaine 5% ointment/gel (amide), and EMLA cream (lidocaine 2.5% + prilocaine 2.5% eutectic mixture). Apply for 1–2 minutes with a cotton-tipped applicator on dried mucosa. Supplemental anesthesia techniques for the \"hot tooth\" (pulpal anesthesia failure): periodontal ligament (PDL) injection, intraosseous injection, and intrapulpal injection (requires access to pulp chamber). Computer-controlled local anesthetic delivery (CCLAD, e.g., The Wand) provides slow, controlled injection at constant pressure, improving comfort for palatal and PDL injections.",
          },
        ],
      },
      {
        id: "evaluation-maintenance",
        title: "Evaluation & Maintenance",
        videoUrl: "evaluation-maintenance",
        quickFacts: [
          "Re-evaluation is performed 4–6 weeks after Phase I therapy to allow tissue healing and resolution of inflammation.",
          "Supportive periodontal therapy intervals: typically 3 months for periodontitis patients (shorter than the recolonization time of pathogenic subgingival bacteria).",
          "Periodontal maintenance includes: medical history update, periodontal reevaluation, selective debridement of residual/recurrent pockets, biofilm control reinforcement, and caries prevention.",
          "Gingivitis patients: 6-month recall; periodontitis patients: 3–4 month recall; high-risk patients may require 2-month intervals.",
          "Re-evaluation at 4–6 weeks allows epithelial reattachment and resolution of inflammation — reconfirm diagnosis and determine need for surgical referral.",
          "SPT interval rationale: subgingival pathogens recolonize to pre-treatment levels in ~9–11 weeks — 3-month recall intervenes before full recolonization.",
          "SPT appointment includes: medical history update, EO/IO exam, periodontal reassessment with charting, selective debridement of problem sites, fluoride.",
          "Mnemonic — Recall intervals: 'Gingivitis = 6, Periodontitis = 3, Grade C/smokers = 2' — months between visits, shorter for higher risk.",
        ],
        content: [
          {
            type: "heading",
            text: "Evaluation & Maintenance Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/spt-intervals.png",
                name: "Supportive Periodontal Therapy (SPT) Interval Decision Tree — 3-Month Recall (High Risk: Deep Pockets, BOP, Furcation), 4-Month (Moderate Risk), 6-Month (Low Risk: Stable, Good OH)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/reevaluation-timeline.png",
                name: "Periodontal Re-Evaluation Timeline — 4–6 Weeks Post-SRP → Reassess PD, BOP, Plaque → Stable (Enter SPT) vs Active Disease (Re-Treat or Refer)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },

          {
            type: "heading",
            text: "Post-Treatment Evaluation",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Re-evaluation is the critical assessment phase following Phase I non-surgical periodontal therapy. Performed 4–6 weeks after completion of SRP, this allows time for: resolution of gingival inflammation, formation of new junctional epithelium (approximately 1–2 weeks), and connective tissue healing including initial collagen reformation. At re-evaluation, the clinician reassesses: probing depths, clinical attachment levels, bleeding on probing, plaque/biofilm indices, tissue tone and color, and patient-reported outcomes (sensitivity, comfort). Sites with persistent BOP and probing depths ≥5mm indicate areas that have not responded adequately and may benefit from surgical intervention (referral to periodontist). Sites with reduced BOP and stabilizing or improving probing depths indicate successful non-surgical therapy and readiness for the maintenance phase.",
          },
          {
            type: "heading",
            text: "Supportive Periodontal Therapy (SPT)",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Supportive periodontal therapy (formerly \"periodontal maintenance\") is the ongoing care phase critical to long-term periodontal stability. Without SPT, disease recurrence is common: studies show that patients who do not comply with maintenance lose teeth at 3–5x the rate of compliant patients. The rationale for 3–4 month intervals is microbiological: subgingival pathogenic bacteria recolonize to pre-treatment levels in approximately 9–11 weeks, but clinical signs of inflammation (BOP, increased probing depths) lag behind microbial repopulation. The 3-month interval intervenes before pathogenic recolonization is established, maintaining a predominantly Gram-positive, health-associated flora.",
          },
          {
            type: "paragraph",
            text: "An SPT appointment includes: (1) interval medical history update (new medications, health events); (2) extraoral and intraoral soft tissue examination (cancer screening); (3) periodontal reassessment — probing depths and BOP, with full-mouth charting at least annually; (4) comparison to baseline and previous maintenance records to detect disease progression; (5) selective scaling and root planing of sites with recurrent pocketing, BOP, or detectable calculus; (6) coronal polishing to remove extrinsic stain (only where needed); (7) fluoride application based on caries risk; (8) reinforcement of self-care and periodic behavior change counseling. The SPT interval is customized: 3–4 months for treated periodontitis, 6 months for gingivitis patients, and 2 months for aggressive (Grade C) periodontitis, poorly controlled diabetics, or heavy smokers.",
          },
        ],
      },
    ],
  },
  {
    id: "module-3",
    title: "Module 3",
    subtitle: "Community Health & Research Principles",
    color: "purple",
    colorLight: "bg-purple-50 border-purple-200",
    colorDark: "bg-purple-600",
    description:
      "Public health principles, epidemiology, biostatistics, program planning, health promotion, and research methodology applied to dental hygiene practice.",
    sections: [
      {
        id: "epidemiology-biostatistics",
        title: "Epidemiology & Biostatistics",
        videoUrl: "epidemiology",
        quickFacts: [
          "Prevalence = existing cases / total population at a point in time. Incidence = new cases / population at risk over a time period.",
          "Sensitivity = true positive rate (TP / (TP + FN)); Specificity = true negative rate (TN / (TN + FP)).",
          "DMFT index = sum of Decayed, Missing, and Filled permanent Teeth. DMFS counts surfaces.",
          "CPI (Community Periodontal Index): 0 = healthy, 1 = BOP, 2 = calculus, 3 = pocket 4–5mm, 4 = pocket ≥6mm.",
          "Mnemonic — Sensitivity vs Specificity: SnNout (Sensitive test Negative rules OUT disease) and SpPin (Specific test Positive rules IN disease).",
          "Mnemonic — Prevalence vs Incidence: P-I-E (Prevalence = Incidence × Duration) — prevalence is the pool, incidence is the flow into the pool.",
          "Incidence = NEW cases in a defined period / population at risk; Prevalence = ALL cases (existing + new) / total population at a point in time.",
          "p < 0.05 means there is less than 5% probability that the observed result occurred by chance alone — the threshold for statistical significance.",
        ],
        content: [

          {
            type: "heading",
            text: "Epidemiology & Biostatistics Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/sensitivity-specificity.png",
                name: "Sensitivity, Specificity, PPV, NPV — 2×2 Confusion Matrix & Diagnostic Test Formulas",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/dmft-index.png",
                name: "DMFT Index — Decayed, Missing, Filled Teeth with Scoring Rules (28 Teeth, Third Molars Excluded)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Epidemiological Principles",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Epidemiology is the study of disease distribution and determinants in populations. Key measures: prevalence (proportion of a population that has a condition at a specific time — a snapshot); incidence (rate of new cases developing in a population over a defined time period — a movie); and relative risk/odds ratio (measures of association between risk factors and disease). Cross-sectional studies measure prevalence; cohort studies measure incidence; case-control studies compare odds of exposure between cases and controls. The epidemiological triangle (agent, host, environment) describes the interplay of factors necessary for disease to occur.",
          },
          {
            type: "heading",
            text: "Dental Indices",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Dental indices quantify oral health status in populations. The DMFT/DMFS index (Klein, Palmer, Knutson) is the most widely used caries index: D = decayed (untreated cavitated lesions), M = missing due to caries, F = filled (restored due to caries), T = teeth, S = surfaces. A DMFT of <3.0 is a WHO goal for 12-year-olds. Limitations: DMFT does not distinguish between treated and arrested disease; it does not capture non-cavitated lesions; it is irreversible (can only increase or stay the same). The ICDAS (International Caries Detection and Assessment System) captures the full spectrum from early non-cavitated lesions to extensive cavitation.",
          },
          {
            type: "paragraph",
            text: "Periodontal indices include: the Community Periodontal Index (CPI) — uses a modified CPITN probe to assess bleeding, calculus, and pocketing in index teeth; the Gingival Index (GI — Löe & Silness, 1963) — scores 0 (normal) to 3 (severe inflammation with spontaneous bleeding); the Plaque Index (PlI — Silness & Löe, 1964); and the Simplified Oral Hygiene Index (OHI-S — Greene & Vermillion). For community water fluoridation surveillance, the Dean's Fluorosis Index classifies severity from 0 (normal) to 5 (severe fluorosis with pitting and brown staining).",
          },
          {
            type: "heading",
            text: "Biostatistics & Diagnostic Test Metrics",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Sensitivity and specificity are fundamental to evaluating diagnostic tests. Sensitivity = true positives / (true positives + false negatives) — a highly sensitive test correctly identifies those with disease (low false-negative rate). Specificity = true negatives / (true negatives + false positives) — a highly specific test correctly identifies those without disease (low false-positive rate). Positive predictive value (PPV) = probability that a positive test indicates disease; depends on prevalence. Negative predictive value (NPV) = probability that a negative test indicates health. BOP has high sensitivity (~95%) but low specificity (~30%) for periodontal disease — most bleeding sites do not progress, but non-bleeding sites are very unlikely to progress.",
          },
        ],
      },
      {
        id: "community-health",
        title: "Community Health Program Planning",
        videoUrl: "community-health",
        quickFacts: [
          "The PRECEDE-PROCEED model is a comprehensive framework for community health program planning and evaluation.",
          "Needs assessment identifies the gap between current health status and desired health outcomes in a defined population.",
          "Water fluoridation at 0.7 mg/L is one of the CDC's 'Ten Great Public Health Achievements' — reduces caries by ~25%.",
          "Program evaluation uses formative (during implementation) and summative (outcome/impact) assessment methods.",
          "Optimal water fluoridation level: 0.7 ppm (updated 2015 from previous 0.7–1.2 range) — reduces caries by ~25% across all age groups.",
          "Mnemonic — Program planning: APIE (Assessment → Planning → Implementation → Evaluation) — the four-phase cycle of community health programs.",
          "Needs assessment types: normative (professional judgment), perceived (patient-reported needs), expressed (actual demand/ utilization of services).",
          "Mnemonic — PRECEDE-PROCEED: The comprehensive 8-phase planning model (Green & Kreuter) for designing and evaluating health promotion programs.",
        ],
        content: [

          {
            type: "heading",
            text: "Community Health Program Planning Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/precede-proceed.png",
                name: "PRECEDE-PROCEED Model — 8-Phase Community Health Program Planning Framework (Green & Kreuter)",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/program-evaluation-cycle.png",
                name: "Program Evaluation Cycle — Assess Needs → Set Objectives → Plan → Implement → Evaluate → Revise",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Needs Assessment & Program Planning",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Community oral health program planning begins with a comprehensive needs assessment — a systematic process to identify the gap between the current oral health status of a defined population and desired health outcomes. Needs assessment methods include: epidemiological surveys (DMFT/DMFS screening, CPI screening), analysis of existing data (Medicaid utilization, hospital ER data for dental visits), community forums and focus groups, key informant interviews, and direct observation. The PRECEDE-PROCEED model (Green & Kreuter) provides an 8-phase framework: PRECEDE phases 1–4 (social/epidemiological/behavioral/educational assessment); PROCEED phases 5–8 (implementation, process/impact/outcome evaluation).",
          },
          {
            type: "paragraph",
            text: "Program objectives should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Example: 'Reduce the proportion of third-grade children with untreated dental caries in Jefferson County from 24% to 18% within 3 years through a school-based sealant program serving all Title I elementary schools.' Program components should address multiple levels of the socio-ecological model: intrapersonal (individual knowledge, attitudes, skills), interpersonal (family, peer influence), organizational (school, workplace policies), community (norms, coalitions), and policy (laws, funding).",
          },
          {
            type: "heading",
            text: "Implementation & Evaluation",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Program implementation requires: identified resources (funding, personnel, materials, facilities), a defined timeline with milestones, community partnerships and coalitions, and a communication plan. Common community oral health interventions include: school-based or school-linked sealant programs, community water fluoridation advocacy, fluoride varnish programs for high-risk children, oral health education in schools and senior centers, and dental screening and referral programs. Evaluation assesses: process (was the program implemented as planned? — formative evaluation, fidelity assessment), impact (immediate effects on knowledge, attitudes, behaviors — short-term outcomes), and outcome (long-term health status changes — reduced caries, reduced untreated disease). Cost-effectiveness and cost-benefit analyses inform sustainability decisions.",
          },
        ],
      },
      {
        id: "health-promotion",
        title: "Health Promotion & Education",
        videoUrl: "health-promotion",
        quickFacts: [
          "The Health Belief Model: behavior depends on perceived susceptibility, severity, benefits, barriers, cues to action, and self-efficacy.",
          "The Transtheoretical Model (Stages of Change): Precontemplation → Contemplation → Preparation → Action → Maintenance.",
          "Motivational Interviewing (MI) is a patient-centered counseling approach that explores and resolves ambivalence about behavior change.",
          "Teach-back method: patient demonstrates understanding by explaining the concept in their own words — confirms comprehension.",
          "Health Belief Model: six constructs — perceived susceptibility, severity, benefits, barriers, cues to action, and self-efficacy.",
          "Transtheoretical Model stages: Precontemplation → Contemplation → Preparation → Action → Maintenance — match intervention to patient's stage.",
          "Motivational Interviewing OARS: Open-ended questions, Affirmations, Reflective listening, Summarizing — collaborative, evocative, honors autonomy.",
          "Mnemonic — Stages of Change: PC-PAM (Precontemplation, Contemplation, Preparation, Action, Maintenance) — 'Please Consider Preparing for Action and Maintenance.'",
        ],
        content: [

          {
            type: "heading",
            text: "Health Promotion & Education Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/health-belief-model.png",
                name: "Health Belief Model — Perceived Susceptibility, Severity, Benefits, Barriers, Cues to Action, Self-Efficacy → Likelihood of Behavior Change",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/transtheoretical-model.png",
                name: "Transtheoretical Model (Stages of Change) — Precontemplation → Contemplation → Preparation → Action → Maintenance with Relapse Loop",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Health Behavior Theories",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The Health Belief Model (HBM) posits that health behavior is determined by: perceived susceptibility to a condition, perceived severity of the condition, perceived benefits of taking action, perceived barriers to action, cues to action (triggers), and self-efficacy (confidence in ability to perform the behavior). In oral health, a patient will floss if they believe they are susceptible to periodontitis, understand its severity, believe flossing will help, perceive few barriers, receive cues (clinician recommendation, bleeding gums), and feel confident they can floss correctly. The model is useful for designing patient education messages.",
          },
          {
            type: "paragraph",
            text: "The Transtheoretical Model (TTM/Stages of Change — Prochaska & DiClemente) describes behavior change as a process through stages: Precontemplation (not considering change in the next 6 months), Contemplation (intending to change within 6 months), Preparation (planning to act within 30 days, small steps taken), Action (actively engaged in the new behavior for <6 months), and Maintenance (sustained behavior >6 months). Relapse is common and part of the normal change process. Different strategies are appropriate for each stage: in precontemplation, raise awareness; in contemplation, explore ambivalence; in preparation, build a concrete plan; in action/maintenance, provide support and problem-solve barriers.",
          },
          {
            type: "heading",
            text: "Patient Communication & Education Strategies",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Motivational Interviewing (MI) is an evidence-based communication approach using OARS skills: Open-ended questions (not yes/no), Affirmations (recognizing strengths and efforts), Reflective listening (paraphrasing to demonstrate understanding and deepen exploration), and Summarizing (pulling together key points). The spirit of MI is collaborative (partnership, not expert-recipient), evocative (drawing out the patient's own motivation), and honors autonomy (respecting that the patient decides). In dental hygiene, MI is effective for improving oral hygiene adherence, smoking cessation counseling, and dietary behavior change.",
          },
          {
            type: "paragraph",
            text: "The teach-back method confirms patient understanding: ask the patient to explain or demonstrate the concept in their own words (\"To make sure I explained clearly, can you show me how you would floss between your back teeth?\"). If the patient cannot demonstrate correctly, re-teach using a different approach and check again. Health literacy universal precautions assume all patients may have difficulty understanding health information and recommend: plain language (avoid jargon), visual aids, chunking information (deliver 3–5 key points per visit), and creating a shame-free environment where patients feel comfortable asking questions.",
          },
        ],
      },
      {
        id: "research-principles",
        title: "Research Principles",
        videoUrl: "research-principles",
        quickFacts: [
          "Evidence-Based Decision Making (EBDM): integrate best scientific evidence, clinical expertise, and patient values/preferences.",
          "PICO framework: Population, Intervention, Comparison, Outcome — used to formulate clinical questions.",
          "Randomized controlled trials (RCTs) provide the highest level of evidence for treatment efficacy.",
          "IRB (Institutional Review Board) approval is required for research involving human subjects — ensures ethical conduct and protection of participants.",
          "PICO framework: Population, Intervention, Comparison, Outcome — use to formulate focused, answerable clinical questions.",
          "Evidence hierarchy (lowest→highest): expert opinion → case studies → cohort → RCT → systematic review → meta-analysis.",
          "IRB approval is required for all human subjects research — based on Belmont Report principles: respect for persons, beneficence, justice.",
          "Mnemonic — EBDM steps: 5 A's (Ask, Acquire, Appraise, Apply, Assess) — the evidence-based decision-making cycle.",
        ],
        content: [

          {
            type: "heading",
            text: "Research Principles Image Atlas",
            level: 2,
          },
          {
            type: "image-atlas",
            images: [
              {
                src: "/images/evidence-pyramid.png",
                name: "Evidence Hierarchy Pyramid — Expert Opinion → Case Series → Case-Control → Cohort → RCT → Systematic Reviews/Meta-Analyses",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
              {
                src: "/images/pico-framework.png",
                name: "PICO Framework — Patient/Population, Intervention, Comparison, Outcome → Clinical Question → Search Strategy → Evidence",
                disclaimer: "AI-generated educational illustration — for study purposes only.",
              },
            ],
          },
          {
            type: "heading",
            text: "Study Designs",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Research study designs form a hierarchy of evidence. Meta-analyses and systematic reviews synthesize results from multiple studies and provide the highest level of evidence for clinical decision-making. Randomized controlled trials (RCTs) randomly assign participants to intervention and control groups, minimizing selection bias and establishing causality — they are the gold standard for evaluating treatment efficacy. Cohort studies follow groups over time, comparing outcomes between exposed and unexposed groups (prospective) or using existing records (retrospective) — good for studying risk factors. Case-control studies compare cases (those with the outcome) to controls (without), looking backward at exposures — efficient for rare outcomes. Cross-sectional studies measure exposure and outcome simultaneously — useful for prevalence but cannot establish temporality. Case reports/series are the lowest level of evidence but may be the first signal of a new association or condition.",
          },
          {
            type: "heading",
            text: "Evidence-Based Decision Making (EBDM)",
            level: 2,
          },
          {
            type: "paragraph",
            text: "EBDM is the conscientious, explicit, and judicious integration of the best available scientific evidence with clinical expertise and patient values and preferences. The EBDM process: (1) ASK — formulate a focused clinical question using PICO (Population/Patient, Intervention, Comparison, Outcome); (2) ACQUIRE — search for evidence using databases (PubMed/MEDLINE, Cochrane Library, EMBASE, ADA EBD website); (3) APPRAISE — critically evaluate the evidence for validity, importance, and applicability; (4) APPLY — integrate the evidence with clinical expertise and patient preferences to make a clinical decision; (5) ASSESS — evaluate the outcome of the decision in that patient. Levels of evidence guide the strength of recommendations: Level I (systematic reviews of RCTs), Level II (individual RCTs), Level III (non-randomized controlled studies), Level IV (cohort/case-control studies), Level V (case series), Level VI (expert opinion).",
          },
          {
            type: "heading",
            text: "Research Ethics",
            level: 2,
          },
          {
            type: "paragraph",
            text: "Ethical principles governing human subjects research derive from the Belmont Report (1979): respect for persons (informed consent, protection of vulnerable populations), beneficence (maximize benefits, minimize harms — risk-benefit assessment), and justice (fair selection of subjects, equitable distribution of benefits and burdens). Institutional Review Board (IRB) approval is required before research involving human subjects begins. Informed consent for research must include: purpose, procedures, risks/discomforts, benefits, alternatives, confidentiality protections, contact information, and the voluntary nature of participation with the right to withdraw at any time without penalty. The Declaration of Helsinki (World Medical Association) provides international ethical guidelines. HIPAA Privacy Rule applies to research using protected health information.",
          },
        ],
      },
    ],
  },
];

export const stateSupplement = {
  id: "state-jurisprudence",
  title: "State Jurisprudence Supplement",
  subtitle: "State-Specific Requirements",
  color: "amber",
  colorLight: "bg-amber-50 border-amber-200",
  colorDark: "bg-amber-600",
  description:
    "Overview of state-specific dental hygiene practice requirements, jurisprudence exam topics, and common regulatory frameworks across U.S. states.",
  sections: [
    {
      id: "state-overview",
      title: "Overview of State Jurisprudence",
      videoUrl: "state-jurisprudence",
      quickFacts: [
        "All 50 states require licensure to practice dental hygiene; requirements vary by state dental board.",
        "The CDCA-WREB-CITA and ADEX are common regional clinical board examinations accepted by multiple states.",
        "Continuing education (CE) requirements typically range from 10–30 hours per renewal cycle (1–2 years).",
        "CPR certification (BLS for Healthcare Providers) is universally required for licensure and renewal.",
        "Licensure requires: CODA-accredited program graduation, NBDHE pass, regional/state clinical exam, and state jurisprudence exam.",
        "Supervision levels: General (dentist authorizes, not on-site), Indirect (dentist in facility), Direct (dentist in operatory) — varies by state.",
        "Mnemonic — Licensure components: GNRJ (Graduation, National board, Regional clinical, Jurisprudence) — all four required for initial licensure.",
        "Continuing education: typically 10–30 CE hours per 1–2 year renewal cycle; CPR certification must be current at all times.",
        "Dental Practice Act scope defines permitted duties; exceeding scope is practicing outside licensure — grounds for disciplinary action.",
        "Informed consent is legally required before treatment; involves explaining risks, benefits, alternatives, and consequences of no treatment.",
        "HIPAA protects patient privacy; unauthorized disclosure of PHI can result in civil and criminal penalties.",
        "Mandatory reporting laws require reporting suspected child abuse, elder abuse, or domestic violence in most states.",
        "Malpractice requires proof of duty, breach of duty, causation, and damages — documentation is the best defense.",
        "Mnemonic — SOAP notes: Subjective (patient says), Objective (clinician sees), Assessment (diagnosis), Plan (treatment) — the legal standard for documentation."
      ],
      content: [
        {
          type: "heading",
          text: "State Jurisprudence Image Atlas",
          level: 2,
        },
        {
          type: "image-atlas",
          images: [
            {
              src: "/images/supervision-levels.png",
              name: "Dental Hygiene Supervision Levels — Direct → Indirect → General → Direct Access (Most Restrictive to Least Restrictive)",
              disclaimer: "AI-generated educational illustration — for study purposes only.",
            },
            {
              src: "/images/licensure-pathway.png",
              name: "Licensure Pathway — CODA Program → NBDHE → Clinical Exam → State Licensure/Jurisprudence → CE Renewal; Alternative: Licensure by Credential/Endorsement",
              disclaimer: "AI-generated educational illustration — for study purposes only.",
            },
          ],
        },
        {
          type: "heading",
          text: "State Licensure Structure",
          level: 2,
        },
        {
          type: "paragraph",
          text: "Dental hygiene practice in the United States is regulated by individual state dental boards, typically under the state's department of professional regulation or department of health. Each state has a Dental Practice Act that defines the scope of practice, licensure requirements, supervision levels, and practice settings for dental hygienists. Licensure requires: (1) graduation from a CODA-accredited dental hygiene program; (2) successful completion of the National Board Dental Hygiene Examination (NBDHE); (3) successful completion of a regional or state clinical board examination (ADEX, CDCA-WREB-CITA, SRTA, CITA, or state-specific); and (4) successful completion of a state jurisprudence examination covering the state's Dental Practice Act and administrative rules.",
          },
          {
            type: "paragraph",
            text: "Licensure by credentials (reciprocity) allows hygienists licensed in one state to obtain licensure in another without repeating clinical board examinations, provided they meet the receiving state's requirements (which may include years in active practice, letters of good standing, and completion of the receiving state's jurisprudence exam). The number of states requiring a separate jurisprudence exam has increased, and many states now offer online jurisprudence testing.",
          },
          {
            type: "heading",
            text: "Common Regulatory Topics",
            level: 2,
          },
          {
            type: "paragraph",
            text: "While specific regulations vary by state, common jurisprudence exam topics include: scope of practice — what procedures a dental hygienist may legally perform (prophylaxis, SRP, administration of local anesthesia, nitrous oxide monitoring/administration, placement of sutures, etc.); supervision levels — general supervision (dentist authorizes but need not be present), indirect supervision (dentist must be in the facility), direct supervision (dentist must be in the operatory); delegation rules — which procedures may be delegated to dental assistants; infection control requirements — typically referencing CDC guidelines or OSHA Bloodborne Pathogens Standard; radiology certification and safety requirements; continuing education requirements for license renewal; mandatory reporting requirements — suspected child abuse, elder abuse; prescription authority limitations (if any); and advertising regulations (prohibition of false or misleading advertising, proper use of titles and credentials).",
          },
          {
            type: "heading",
            text: "Preparing for the Jurisprudence Exam",
            level: 2,
          },
          {
            type: "paragraph",
            text: "The jurisprudence exam is an open-book test in most states, designed to ensure familiarity with the state's Dental Practice Act. Preparation strategies: (1) obtain the most current version of the state Dental Practice Act and administrative rules from the state dental board website; (2) read the entire act, focusing on sections relevant to dental hygiene scope of practice, supervision, and prohibited acts; (3) pay attention to definitions — these are commonly tested; (4) note specific timeframes (license renewal periods, CE deadlines, notification requirements for address changes); (5) understand the disciplinary process and grounds for license suspension or revocation; (6) know mandatory reporting requirements; and (7) be familiar with fees and renewal procedures. Most state dental boards provide a candidate handbook or study guide for the jurisprudence exam.",
          },
        ],
      },
    ],
};
