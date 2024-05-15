const courses = [
  {
    id: 0,
    name: "MS CHD401 - Petrochemical Technology",
  },
  {
    id: 1,
    name: "MS CHD408 - Process Data Analytics",
  },
  {
    id: 2,
    name: "MS CHD411 - Catalytic Reaction Engineering",
  },
  {
    id: 3,
    name: "MS CHO401 - Process Integration",
  },
  {
    id: 4,
    name: "MS CHO402 - Biofuels & Biomass Conversion Technology",
  },
  {
    id: 5,
    name: "MS CSD404 - Computer Graphics",
  },
  {
    id: 6,
    name: "MS CSD411 - Introduction to Deep Learning",
  },
  {
    id: 7,
    name: "MS CSD511 - Information Theory and Coding",
  },
  {
    id: 8,
    name: "MS CSD520 - VLSI Design and Testing",
  },
  {
    id: 9,
    name: "MS CSO404 - Cryptography",
  },
  {
    id: 10,
    name: "MS CSO504 - Machine Learning",
  },
  {
    id: 11,
    name: "MS CSO505 - Soft Computing",
  },
  {
    id: 12,
    name: "MS CED401 - Traffic Engineering and Management",
  },
  {
    id: 13,
    name: "MS CED403 - Advanced Hydrology",
  },
  {
    id: 14,
    name: "MS CED501 - Computational Solid Mechanics",
  },
  {
    id: 15,
    name: "MS CED531 - Advanced Design of Structures",
  },
  {
    id: 16,
    name: "MS CEO528 - Ground Improvement and Geosynthetics",
  },
  {
    id: 17,
    name: "MS ECD403 - Computer Networks",
  },
  {
    id: 18,
    name: "MS ECD405 - Digital Systems Design using HDL",
  },
  {
    id: 19,
    name: "MS ECD415 - Optical Communication",
  },
  {
    id: 20,
    name: "MS ECO501 - Internet of Things",
  },
  {
    id: 21,
    name: "MS ECO561 - Embedded System Design",
  },
  {
    id: 22,
    name: "MS EED401 - Power System Protection and Switchgear",
  },
  {
    id: 23,
    name: "MS EED403 - Industrial Power Electronics",
  },
  {
    id: 24,
    name: "MS EEO403 - Digital Signal Processing",
  },
  {
    id: 25,
    name: "MS EEO404 - Renewable Energy Systems and Energy Audit",
  },
  {
    id: 26,
    name: "MS EEO405 - Industrial Automation",
  },
  {
    id: 27,
    name: "MS ESD401 - Biodiversity Conservation",
  },
  {
    id: 28,
    name: "MS ESD405 - Climate Vulnerability and Risk Analysis",
  },
  {
    id: 29,
    name: "MS ESD502 - Environmental Biotechnology",
  },
  {
    id: 30,
    name: "MS ESD511 - Aerosols in the Atmosphere",
  },
  {
    id: 31,
    name: "MS ESO405 - Cleaner  Energy",
  },
  {
    id: 32,
    name: "MS FMD403 - Engineering Materials Selection and Design",
  },
  {
    id: 33,
    name: "MS FMD461 - Computational Techniques and Modelling",
  },
  {
    id: 34,
    name: "MS FMD515 - Thermochemical Conversion of Coal and Biomass",
  },
  {
    id: 35,
    name: "MS FMO545 - Equipment Design",
  },
  {
    id: 36,
    name: "MS FMO547 - Additive Manufacturing",
  },
  {
    id: 37,
    name: "MS MND400 - Rock Excavation Engineering",
  },
  {
    id: 38,
    name: "MS MND401 - Advanced Mine Ventilation",
  },
  {
    id: 39,
    name: "MS MND402 - Open Pit Slope Analysis and Design",
  },
  {
    id: 40,
    name: "MS MND403 - Geospatial Technology in Mining",
  },
  {
    id: 41,
    name: "MS MND405 - Mine Safety Engineering",
  },
  {
    id: 42,
    name: "MS MND406 - Mine Environmental Engineering",
  },
  {
    id: 43,
    name: "MS MSO401 - Principles of Economics",
  },
  {
    id: 44,
    name: "MS MSO402 - Introduction to Financial Management",
  },
  {
    id: 45,
    name: "MS MSO403 - Foundations of Management and Organizational Behaviour",
  },
  {
    id: 46,
    name: "MS HSD405 - Introduction to Environmental Humanities",
  },
  {
    id: 47,
    name: "MS HSD525 - Advance Course in Applied Ethics",
  },
  {
    id: 48,
    name: "MS HSO309 - Fundamental of Sociology",
  },
  {
    id: 49,
    name: "MS HSO402 - Computational Psychology",
  },
  {
    id: 50,
    name: "MS HSO403 - Indian Society and Culture",
  },
  {
    id: 51,
    name: "MS HSO404 - Sociology of Health",
  },
  {
    id: 52,
    name: "MS MED539 - Fundamentals of Aerodynamics",
  },
  {
    id: 53,
    name: "MS MED540 - Fundamentals of Aeroacoustics",
  },
  {
    id: 54,
    name: "MS MEO528 - Robotics",
  },
  {
    id: 55,
    name: "MS MEO579 - Computational Fluid Dynamics",
  },
  {
    id: 56,
    name: "MS MED401 - Energy Conversion Equipment",
  },
  {
    id: 57,
    name: "MS MED549 - Cryogenic Engineering",
  },
  {
    id: 58,
    name: "MS MEO534 - Automation and Control",
  },
  {
    id: 59,
    name: "MS MMO504 - Advanced Fluid Power Systems and Control",
  },
  {
    id: 60,
    name: "MS PED401 - Offshore Drilling and Petroleum Production Practices",
  },
  {
    id: 61,
    name: "MS PED402 - Enhanced Oil Recovery Techniques",
  },
  {
    id: 62,
    name: "MS PEO401 - Petroleum Environment, Health and Safety Practices",
  },
  {
    id: 63,
    name: "MS PEO402 - Well Performance",
  },
  {
    id: 64,
    name: "MS PEO406 - Reservoir Geomechanics",
  },
  {
    id: 65,
    name: "MS PHD501 - Advanced Quantum Mechanics",
  },
  {
    id: 66,
    name: "MS PHD506 - Characterization Techniques",
  },
  {
    id: 67,
    name: "MS PHD577 - Numerical Methods and Simulation",
  },
  {
    id: 68,
    name: "MS PHO400 - Nanoelectronics and Nanophotonics",
  },
  {
    id: 69,
    name: "MS PHO504 - Optoelectronic Materials and Devices",
  },
  {
    id: 70,
    name: "MS GLC201 - Crystallography and Mineralogy",
  },
  {
    id: 71,
    name: "MS GLC202 - Physical and Structural Geology",
  },
  {
    id: 72,
    name: "MS GLC203 - Crystallography and Optical Mineralogy Practical",
  },
  {
    id: 73,
    name: "MS GLC204 - Structural Geology Practical",
  },
  {
    id: 74,
    name: "MS GLE201 - Geology for Engineering and Sciences",
  },
  {
    id: 75,
    name: "MS GPC501 - Solid Earth Geophysics",
  },
  {
    id: 76,
    name: "MS GLC202 - Physical and Structural Geology",
  },
  {
    id: 77,
    name: "MS GLE203 - Geology for Engineering and Sciences Practical",
  },
  {
    id: 78,
    name: "MS GPC201 - Introduction to Rock Physics",
  },
  {
    id: 79,
    name: "MS GPC202 - Self-Potential Method: Theory and Application",
  },
  {
    id: 80,
    name: "MS GPC203 - Lab on Rock Physics",
  },
  {
    id: 81,
    name: "MS GPC204 - Self-Potential Method Theory & Application Practical",
  },
  {
    id: 82,
    name: "MS GPE202 - Geophysical Prospecting",
  },
  {
    id: 83,
    name: "MS MCC201 - Modern Algebra",
  },
  {
    id: 84,
    name: "MS MCC202 - Computer Organization and Architecture",
  },
  {
    id: 85,
    name: "MS MCC203 - Real Analysis",
  },
  {
    id: 86,
    name: "MS MCC204 - Computer Organization and Architecture Practical",
  },
  {
    id: 87,
    name: "MS MCC505 - Probability & Statistics",
  },
  {
    id: 88,
    name: "MS GLC502 - Applied Geochemistry",
  },
  {
    id: 89,
    name: "MS GLC503 - Methods of Structural Geology",
  },
  {
    id: 90,
    name: "MS GLC504 - Micropaleontology and Vertebrate Palaeontology",
  },
  {
    id: 91,
    name: "MS GLC506 - Mineralogy and Geochemistry Practical",
  },
  {
    id: 92,
    name: "MS GLC507 - Methods of Structural Geology Practical",
  },
  {
    id: 93,
    name: "MS GLC508 - Micropaleontology and Vertebrate Paleontology Practical",
  },
  {
    id: 94,
    name: "MS GLO532 - Environmental Geology",
  },
  {
    id: 95,
    name: "MS GPC501 - Solid Earth Geophysics",
  },
  {
    id: 96,
    name: "MS GPC502 - Gravity Method",
  },
  {
    id: 97,
    name: "MS GPC504 - Mathematical Functional Analysis",
  },
  {
    id: 98,
    name: "MS GPC505 - Gravity Method Practical",
  },
  {
    id: 99,
    name: "MS GPC507 - Mathematical Functional Analysis Practical",
  },
  {
    id: 100,
    name: "MS GPE202 - Geophysical Prospecting",
  },
  {
    id: 101,
    name: "MS GPE203 - Geophysical Prospecting Practical",
  },
  {
    id: 102,
    name: "MS MCC301 - Number Theory and Cryptography",
  },
  {
    id: 103,
    name: "MS MCC302 - GPU Computing Practical",
  },
  {
    id: 104,
    name: "MS MCC502 - Differential Equations",
  },
  {
    id: 105,
    name: "MS MCD541 - GPU Computing",
  },
  {
    id: 106,
    name: "MS MCO403 - Graph Algorithms",
  },
  {
    id: 107,
    name: "MS GLC518 - Principles and Applications of Geostatistics",
  },
  {
    id: 108,
    name: "MS GLC519 - Engineering Geology",
  },
  {
    id: 109,
    name: "MS GLC520 - Hydrogeology",
  },
  {
    id: 110,
    name: "MS GLC524 - Principles and Applications of Geostatistics Practical",
  },
  {
    id: 111,
    name: "MS GLC525 - Engineering Geology and Hydrogeology Practical",
  },
  {
    id: 112,
    name: "MS GLD521 - Stratigraphy",
  },
  {
    id: 113,
    name: "MS GLD522 - Coalbed Methane, Shale Gas and Gas Hydrate Exploration",
  },
  {
    id: 114,
    name: "MS GLO523 - Atmosphere, Ocean and Climate Dynamics",
  },
  {
    id: 115,
    name: "MS GPC516 - Geophysical Inversion",
  },
  {
    id: 116,
    name: "MS GPC517 - Seismic Data Processing and Interpretation",
  },
  {
    id: 117,
    name: "MS GPC518 - Geophysical Inversion Practical",
  },
  {
    id: 118,
    name: "MS GPC519 - Seismic Data Processing and Interpretation  Practical",
  },
  {
    id: 119,
    name: "MS GPD501 - Geothermics and Geodynamics",
  },
  {
    id: 120,
    name: "MS GPD502 - Formation Evaluation",
  },
  {
    id: 121,
    name: "MS GPD503 - Image Processing and Geographic Information System",
  },
  {
    id: 122,
    name: "MS GPO501 - Groundwater Geophysics",
  },
  {
    id: 123,
    name: "MS MCC503 - Numerical Methods",
  },
  {
    id: 124,
    name: "MS MCC506 - Numerical Methods Practical",
  },
  {
    id: 125,
    name: "MS MCD531 - Cryptography",
  },
  {
    id: 126,
    name: "MS MCD557 - Finite Field Theory",
  },
  {
    id: 127,
    name: "MS MCO401 - Partial Differential Equations",
  },
  {
    id: 128,
    name: "MS MCO502 - Optimization Techniques",
  },
  {
    id: 129,
    name: "MS CYC514 - Photochemistry & Pericyclic Reactions",
  },
  {
    id: 130,
    name: "MS CYC515 - Molecular Spectroscopy",
  },
  {
    id: 131,
    name: "MS CYC516 - Strategies in Organic Synthesis",
  },
  {
    id: 132,
    name: "MS CYC517 - Physical Chemistry Lab - II",
  },
  {
    id: 133,
    name: "MS CYC518 - Analytical Chemistry Lab",
  },
  {
    id: 134,
    name: "MS CYD512 - Modern Aspects of Catalysis and Surface Science",
  },
  {
    id: 135,
    name: "MS CYD515 - Advances in Nonconventional Energy Systems",
  },
  {
    id: 136,
    name: "MS CYD522 - Advanced Biocatalysis",
  },
  {
    id: 137,
    name: "MS CYD532 - Solid State Materials: Chemistry & Engineering",
  },
  {
    id: 138,
    name: "MS CYD534 - Heterocyclic Chemistry",
  },
  {
    id: 139,
    name: "MS CYD536 - Science of Corrosion & Corrosion Control",
  },
  {
    id: 140,
    name: "MS MCC514 - Functional Analysis",
  },
  {
    id: 141,
    name: "MS MCC515 - Topology",
  },
  {
    id: 142,
    name: "MS MCC516 - Computational Fluid Dynamics",
  },
  {
    id: 143,
    name: "MS MCC517 - Design and Analysis of Algorithms",
  },
  {
    id: 144,
    name: "MS MCC518 - Computational Fluid Dynamics Practical",
  },
  {
    id: 145,
    name: "MS MCC519 - Design and Analysis of Algorithms  Practical",
  },
  {
    id: 146,
    name: "MS MCD533 - Numerical Optimization",
  },
  {
    id: 147,
    name: "MS PHC514 - Statistical Mechanics",
  },
  {
    id: 148,
    name: "MS PHC515 - Laser Physics and Technology",
  },
  {
    id: 149,
    name: "MS PHC516 - Nuclear and Particle Physics",
  },
  {
    id: 150,
    name: "MS PHC517 - Computation and Simulation",
  },
  {
    id: 151,
    name: "MS PHC518 - Experimental Physics - V",
  },
  {
    id: 152,
    name: "MS PHD509 - Advanced Condensed Matter Physics",
  },
  {
    id: 153,
    name: "MS PHD510 - Quantum Computation and Information",
  },
  {
    id: 154,
    name: "MS PHD575 - Theoretical Physics",
  },
  {
    id: 155,
    name: "MS PHD576 - Experimental Physics",
  },
  {
    id: 156,
    name: "MS GLC518 - Principles and Applications of Geostatistics",
  },
  {
    id: 157,
    name: "MS GLC519 - Engineering Geology",
  },
  {
    id: 158,
    name: "MS GLC520 - Hydrogeology",
  },
  {
    id: 159,
    name: "MS GLC524 - Principles and Applications of Geostatistics Practical",
  },
  {
    id: 160,
    name: "MS GLC525 - Engineering Geology and Hydrogeology Practical",
  },
  {
    id: 161,
    name: "MS GLD576 - Nanotechnology in Mineral and Hydrocarbon Exploration",
  },
  {
    id: 162,
    name: "MS GLD591 - Rock Slope Engineering",
  },
  {
    id: 163,
    name: "MS GPC516 - Geophysical Inversion",
  },
  {
    id: 164,
    name: "MS GPC517 - Seismic Data Processing and Interpretation",
  },
  {
    id: 165,
    name: "MS GPC518 - Geophysical Inversion Practical",
  },
  {
    id: 166,
    name: "MS GPC519 - Seismic Data Processing and Interpretation  Practical",
  },
  {
    id: 167,
    name: "MS GLC591 - Research Methodology",
  },
  {
    id: 168,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 169,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 170,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 171,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 172,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 173,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 174,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 175,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 176,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 177,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 178,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 179,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 180,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 181,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 182,
    name: "MS EEC550 - Research Methodology and Statistics for Electrical Engineering",
  },
  {
    id: 183,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 184,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 185,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 186,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 187,
    name: "MS FMC511 - Research Methodology",
  },
  {
    id: 188,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 189,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 190,
    name: "MS HSC501 - Research Methodology",
  },
  {
    id: 191,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 192,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 193,
    name: "MS HSC501 - Research Methodology",
  },
  {
    id: 194,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 195,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 196,
    name: "MS HSC501 - Research Methodology",
  },
  {
    id: 197,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 198,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 199,
    name: "MS HSC501 - Research Methodology",
  },
  {
    id: 200,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 201,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 202,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 203,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 204,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 205,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 206,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 207,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 208,
    name: "MS MNC700 - Research Methodology",
  },
  {
    id: 209,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 210,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 211,
    name: "MS MEC591 - Research Methodology and Statistics",
  },
  {
    id: 212,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 213,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 214,
    name: "MS MEC591 - Research Methodology and Statistics",
  },
  {
    id: 215,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 216,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 217,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 218,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 219,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 220,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 221,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 222,
    name: "MS HSI500 - Research and Technical Communication",
  },
  {
    id: 223,
    name: "MS MSD501 - Entrepreneurship and New Ventures",
  },
  {
    id: 224,
    name: "MS MSD502 - Financial Analytics",
  },
  {
    id: 225,
    name: "MS MSD503 - Sales and Distribution Management",
  },
  {
    id: 226,
    name: "MS MSD505 - Materials Management",
  },
  {
    id: 227,
    name: "MS MSD506 - Investment Analysis and Portfolio Management",
  },
  {
    id: 228,
    name: "MS MSD507 - Management of Banks and Financial Institutions",
  },
  {
    id: 229,
    name: "MS MSD508 - Advertising and Promotion Management",
  },
  {
    id: 230,
    name: "MS MSD510 - Personnel Management and Industrial Relations",
  },
  {
    id: 231,
    name: "MS MSD511 - Human Resources Development",
  },
  {
    id: 232,
    name: "MS MSD512 - Service Operations Management",
  },
  {
    id: 233,
    name: "MS MSD513 - Managerial Psychology",
  },
  {
    id: 234,
    name: "MS MSD516 - Organisational Development and Change",
  },
  {
    id: 235,
    name: "MS MSD517 - Strategic Management",
  },
  {
    id: 236,
    name: "MS MSD530 - Supply Chain Management and Logistics",
  },
  {
    id: 237,
    name: "MS MSD532 - Computational Finance",
  },
  {
    id: 238,
    name: "MS MSD533 - Marketing Research",
  },
  {
    id: 239,
    name: "MS MSD535 - Internet of Things and Blockchain for Business",
  },
  {
    id: 240,
    name: "MS HSC519 - Privacy, Morality & Law",
  },
  {
    id: 241,
    name: "MS HSC526 - The Psychology of the Internet",
  },
  {
    id: 242,
    name: "MS HSC528 - Theorizing Digital Transformation",
  },
  {
    id: 243,
    name: "MS HSC529 - Natural Language Processing Lab",
  },
  {
    id: 244,
    name: "MS HSD507 - Introduction to Drama, Theatre and Performance Studies",
  },
  {
    id: 245,
    name: "MS HSD559 - Analytical Philosophy",
  },
  {
    id: 246,
    name: "MS CHC201 - Chemical Process Calculations",
  },
  {
    id: 247,
    name: "MS CHC202 - Fluid and Particle Mechanics",
  },
  {
    id: 248,
    name: "MS CHC203 - Heat Transfer",
  },
  {
    id: 249,
    name: "MS CHC204 - Computational Tools for Chemical Engineers Lab",
  },
  {
    id: 250,
    name: "MS CHC205 - Fluid and Particle Mechanics Lab",
  },
  {
    id: 251,
    name: "MS CHE201 - Engineering Thermodynamics",
  },
  {
    id: 252,
    name: "MS CSC201 - Data Structures",
  },
  {
    id: 253,
    name: "MS CSC202 - Discrete Mathematics",
  },
  {
    id: 254,
    name: "MS CSC203 - Computer Organization",
  },
  {
    id: 255,
    name: "MS CSC204 - Data Structures Lab",
  },
  {
    id: 256,
    name: "MS CSC205 - Computer Organization Lab",
  },
  {
    id: 257,
    name: "MS CSE201 - Data Structures and Algorithms",
  },
  {
    id: 258,
    name: "MS CEC201 - Surveying",
  },
  {
    id: 259,
    name: "MS CEC202 - Environmental Engineering",
  },
  {
    id: 260,
    name: "MS CEC203 - Building Materials, Construction and Management",
  },
  {
    id: 261,
    name: "MS CEC204 - Material Testing Laboratory",
  },
  {
    id: 262,
    name: "MS CEC205 - Environmental Engineering Laboratory",
  },
  {
    id: 263,
    name: "MS CEE201 - Mechanics of Solid",
  },
  {
    id: 264,
    name: "MS ECC201 - Electronic Devices",
  },
  {
    id: 265,
    name: "MS ECC202 - Signals & Networks",
  },
  {
    id: 266,
    name: "MS ECC203 - Digital Circuits and System Design",
  },
  {
    id: 267,
    name: "MS ECC204 - Digital System Design Lab",
  },
  {
    id: 268,
    name: "MS ECC205 - Signals & Networks Lab",
  },
  {
    id: 269,
    name: "MS ECE301 - Analog Interface Electronics",
  },
  {
    id: 270,
    name: "MS EEC201 - Signals, Systems and Networks",
  },
  {
    id: 271,
    name: "MS EEC202 - Analog and Digital Electronics",
  },
  {
    id: 272,
    name: "MS EEC203 - Electromagnetic Theory and Applications",
  },
  {
    id: 273,
    name: "MS EEC271 - Networks Lab",
  },
  {
    id: 274,
    name: "MS EEC272 - Analog and Digital Electronics Lab",
  },
  {
    id: 275,
    name: "MS EEE202 - Utilization of Electrical Energy",
  },
  {
    id: 276,
    name: "MS ESC201 - Drinking Water Supply and Treatment",
  },
  {
    id: 277,
    name: "MS ESC202 - Air Pollution",
  },
  {
    id: 278,
    name: "MS ESC203 - Noise  Pollution and Control",
  },
  {
    id: 279,
    name: "MS ESC251 - Water Pollution Practical",
  },
  {
    id: 280,
    name: "MS ESC252 - Air and Noise Pollution Practical",
  },
  {
    id: 281,
    name: "MS ESE201 - Pollution Control and Management",
  },
  {
    id: 282,
    name: "MS FMC201 - Colloids and Interfacial Phenomena",
  },
  {
    id: 283,
    name: "MS FMC202 - Heat and Mass Transfer",
  },
  {
    id: 284,
    name: "MS FMC203 - Physical Separation Processes for Coal and Minerals",
  },
  {
    id: 285,
    name: "MS FMC251 - Particle Technology Laboratory",
  },
  {
    id: 286,
    name: "MS FMC252 - Physical Separation Processes Laboratory",
  },
  {
    id: 287,
    name: "MS FME221 - Particle Technology",
  },
  {
    id: 288,
    name: "MS GLE203 - Geology for Engineering and Sciences Practical",
  },
  {
    id: 289,
    name: "MS MNC200 - Elements of Mining",
  },
  {
    id: 290,
    name: "MS MNC201 - Rock Breakage",
  },
  {
    id: 291,
    name: "MS MNC202 - Mine Surveying",
  },
  {
    id: 292,
    name: "MS MNC203 - Mine Surveying Practical",
  },
  {
    id: 293,
    name: "MS MNC204 - Rock Breakage Practical",
  },
  {
    id: 294,
    name: "MS MNE201 - Introduction to Mining",
  },
  {
    id: 295,
    name: "MS MEC201 - Kinematics of Machines",
  },
  {
    id: 296,
    name: "MS MEC202 - Fluid Mechanics",
  },
  {
    id: 297,
    name: "MS MEC203 - Applied Thermodynamics",
  },
  {
    id: 298,
    name: "MS MEC204 - Applied Mechanics Lab",
  },
  {
    id: 299,
    name: "MS MEC205 - Thermodynamics and Fluid Mechanics Lab",
  },
  {
    id: 300,
    name: "MS MEE201 - Engineering Materials",
  },
  {
    id: 301,
    name: "MS MMC201 - Manufacturing Technology",
  },
  {
    id: 302,
    name: "MS MMC202 - Theory of Machines",
  },
  {
    id: 303,
    name: "MS MMC203 - Design of Machine Elements",
  },
  {
    id: 304,
    name: "MS MMC204 - Thermodynamics and Fluid Mechanics Lab",
  },
  {
    id: 305,
    name: "MS MMC205 - Solid Mechanics and Theory of Machines Lab",
  },
  {
    id: 306,
    name: "MS MME202 - Mining Machinery",
  },
  {
    id: 307,
    name: "MS GLE203 - Geology for Engineering and Sciences Practical",
  },
  {
    id: 308,
    name: "MS PEC201 - Drilling Technology",
  },
  {
    id: 309,
    name: "MS PEC202 - Elements of Reservoir Engineering",
  },
  {
    id: 310,
    name: "MS PEC203 - Drilling Fluids and Cements",
  },
  {
    id: 311,
    name: "MS PEC204 - Reservoir Engineering Practical",
  },
  {
    id: 312,
    name: "MS PEC205 - Drilling Fluids and Cementing Practical",
  },
  {
    id: 313,
    name: "MS PEE201 - Introduction to Petroleum Engineering",
  },
  {
    id: 314,
    name: "MS PHC200 - Waves and Acoustics",
  },
  {
    id: 315,
    name: "MS PHC201 - Classical Mechanics",
  },
  {
    id: 316,
    name: "MS PHC202 - Mathematical Physics",
  },
  {
    id: 317,
    name: "MS PHC203 - Mechanics Lab",
  },
  {
    id: 318,
    name: "MS PHC204 - Waves and Acoustics Lab",
  },
  {
    id: 319,
    name: "MS PHE200 - Biomedical Engineering",
  },
  {
    id: 320,
    name: "MS CHC301 - Separation Processes",
  },
  {
    id: 321,
    name: "MS CHC302 - Chemical Kinetics and Reaction Engineering",
  },
  {
    id: 322,
    name: "MS CHC303 - Process Design and Economics",
  },
  {
    id: 323,
    name: "MS CHC304 - Chemical Kinetics and Reaction Engineering Lab",
  },
  {
    id: 324,
    name: "MS CHC305 - Mass Transfer Lab",
  },
  {
    id: 325,
    name: "MS CHO404 - AI in Process Industries",
  },
  {
    id: 326,
    name: "MS CSC301 - Database Management Systems",
  },
  {
    id: 327,
    name: "MS CSC302 - Compiler Design",
  },
  {
    id: 328,
    name: "MS CSC303 - Database Management Systems Lab",
  },
  {
    id: 329,
    name: "MS CSC304 - Compiler Design Lab",
  },
  {
    id: 330,
    name: "MS CSO303 - Artificial Intelligence",
  },
  {
    id: 331,
    name: "MS CSO304 - Digital Image Processing",
  },
  {
    id: 332,
    name: "MS CEC301 - Structural Analysis - II",
  },
  {
    id: 333,
    name: "MS CEC302 - Foundation Engineering",
  },
  {
    id: 334,
    name: "MS CEC303 - Structural Engineering Laboratory",
  },
  {
    id: 335,
    name: "MS CEC304 - Geotechnical Engineering Laboratory",
  },
  {
    id: 336,
    name: "MS CEO301 - Reliability and Risk Assessment",
  },
  {
    id: 337,
    name: "MS CEO401 - Flow and Transport through Porous Media",
  },
  {
    id: 338,
    name: "MS ECC301 - Principles of Communication Systems",
  },
  {
    id: 339,
    name: "MS ECC302 - Digital Signal Processing",
  },
  {
    id: 340,
    name: "MS ECC303 - VLSI Design",
  },
  {
    id: 341,
    name: "MS ECC304 - Digital Signal Processing Lab",
  },
  {
    id: 342,
    name: "MS ECC305 - Communication System Lab",
  },
  {
    id: 343,
    name: "MS ECO302 - Power Electronics",
  },
  {
    id: 344,
    name: "MS EEC308 - Electrical Machines - II",
  },
  {
    id: 345,
    name: "MS EEC309 - Modern Control",
  },
  {
    id: 346,
    name: "MS EEC310 - Power Electronics",
  },
  {
    id: 347,
    name: "MS EEC375 - Microprocessor and Microcontrollers Lab",
  },
  {
    id: 348,
    name: "MS EEC376 - Electrical Machines and Control Lab",
  },
  {
    id: 349,
    name: "MS EED402 - High Voltage Engineering and Applications",
  },
  {
    id: 350,
    name: "MS ESC308 - Environmental Geotechnology",
  },
  {
    id: 351,
    name: "MS ESC309 - Wastewater Treatment",
  },
  {
    id: 352,
    name: "MS ESC310 - Environmental Impact Assessment",
  },
  {
    id: 353,
    name: "MS ESC355 - Environmental Geotechnology Practical",
  },
  {
    id: 354,
    name: "MS ESC356 - Wastewater Engineering Practical",
  },
  {
    id: 355,
    name: "MS ESO401 - Climate Change Impacts on Water Resources",
  },
  {
    id: 356,
    name: "MS FMC301 - Coal and Mineral Process Equipment Selection",
  },
  {
    id: 357,
    name: "MS FMC302 - Extractive Metallurgy",
  },
  {
    id: 358,
    name: "MS FMC306 - Coal and Mineral Process Equipment Selection Laboratory",
  },
  {
    id: 359,
    name: "MS FMC351 - Extractive Metallurgy Laboratory",
  },
  {
    id: 360,
    name: "MS FMD401 - Powder Metallurgy",
  },
  {
    id: 361,
    name: "MS FMD402 - Welding Metallurgy",
  },
  {
    id: 362,
    name: "MS MNC300 - Surface Mining",
  },
  {
    id: 363,
    name: "MS MNC301 - Mine Planning and Economics",
  },
  {
    id: 364,
    name: "MS MNC302 - Computer Aided Mine Planning and Design",
  },
  {
    id: 365,
    name: "MS MNC303 - Mine Ventilation Practical - II",
  },
  {
    id: 366,
    name: "MS MNO301 - Modern Surveying Techniques",
  },
  {
    id: 367,
    name: "MS MNO303 - Underground Construction Engineering",
  },
  {
    id: 368,
    name: "MS MSO301 - Operations Research",
  },
  {
    id: 369,
    name: "MS MSO404 - Introduction to Operations Management",
  },
  {
    id: 370,
    name: "MS MEC301 - Machine Design",
  },
  {
    id: 371,
    name: "MS MEC302 - Machining and Machine Tools",
  },
  {
    id: 372,
    name: "MS MEC303 - Advanced Solid Mechanics",
  },
  {
    id: 373,
    name: "MS MEC304 - Production Technology Lab",
  },
  {
    id: 374,
    name: "MS MEC305 - Machine Design Lab",
  },
  {
    id: 375,
    name: "MS MEO302 - Refrigeration and Air-conditioning",
  },
  {
    id: 376,
    name: "MS MED403 - Power Plant",
  },
  {
    id: 377,
    name: "MS MMC301 - Mineral Beneficiation Equipment",
  },
  {
    id: 378,
    name: "MS MMC302 - Automation and Control in Mining Machineries",
  },
  {
    id: 379,
    name: "MS MMC303 - Mine Electrical Technology Lab",
  },
  {
    id: 380,
    name: "MS MMC304 - Automation and Control Lab",
  },
  {
    id: 381,
    name: "MS MMO301 - Automobile Engineering",
  },
  {
    id: 382,
    name: "MS PEC301 - Applied Petroleum Reservoir Engineering and Management",
  },
  {
    id: 383,
    name: "MS PEC302 - Petroleum Production Operations",
  },
  {
    id: 384,
    name: "MS PEC303 - Natural Gas Engineering",
  },
  {
    id: 385,
    name: "MS PEC304 - Petroleum Production Engineering Practical",
  },
  {
    id: 386,
    name: "MS PEC305 - Process Engineering Practical",
  },
  {
    id: 387,
    name: "MS PEO404 - Petroleum Resource Management and Project Evaluation",
  },
  {
    id: 388,
    name: "MS PHC300 - Thermal Physics Lab",
  },
  {
    id: 389,
    name: "MS PHC301 - Electronics Lab",
  },
  {
    id: 390,
    name: "MS PHC514 - Statistical Mechanics",
  },
  {
    id: 391,
    name: "MS PHC515 - Laser Physics and Technology",
  },
  {
    id: 392,
    name: "MS PHO300 - Sensors and Transducers",
  },
  {
    id: 393,
    name: "MS PHO302 - Introduction to Astrophysics and Astronomy",
  },
  {
    id: 394,
    name: "MS CSC504 - Computing Techniques and Mathematical Tools",
  },
  {
    id: 395,
    name: "MS CSC507 - Computing Techniques and Mathematical Tools Lab",
  },
  {
    id: 396,
    name: "WS CHC206 - Chemical Engineering Thermodynamics",
  },
  {
    id: 397,
    name: "WS CHC207 - Principles of Mass Transfer",
  },
  {
    id: 398,
    name: "WS CHC208 - Chemical Process Technology",
  },
  {
    id: 399,
    name: "WS CHC209 - Process Dynamics and Control",
  },
  {
    id: 400,
    name: "WS CHC210 - Heat Transfer Lab",
  },
  {
    id: 401,
    name: "WS CHC211 - Process Control Lab",
  },
  {
    id: 402,
    name: "WS CHE202 - Transport Phenomena",
  },
  {
    id: 403,
    name: "WS CSC206 - Algorithm Design & Analysis",
  },
  {
    id: 404,
    name: "WS CSC207 - Computer Architecture",
  },
  {
    id: 405,
    name: "WS CSC208 - Theory of Computation",
  },
  {
    id: 406,
    name: "WS CSC209 - Operating Systems",
  },
  {
    id: 407,
    name: "WS CSC210 - Algorithm Design & Analysis Lab",
  },
  {
    id: 408,
    name: "WS CSC211 - Operating Systems Lab",
  },
  {
    id: 409,
    name: "WS CSE202 - Object Oriented Programming",
  },
  {
    id: 410,
    name: "WS CEC206 - Structural Analysis - I",
  },
  {
    id: 411,
    name: "WS CEC207 - Design of Concrete Structures",
  },
  {
    id: 412,
    name: "WS CEC208 - Geotechnical Engineering",
  },
  {
    id: 413,
    name: "WS CEC209 - Transportation Engineering",
  },
  {
    id: 414,
    name: "WS CEC210 - Surveying Laboratory",
  },
  {
    id: 415,
    name: "WS CEC211 - Transportation Engineering Laboratory",
  },
  {
    id: 416,
    name: "WS CEE202 - Fluid Mechanics and Machines",
  },
  {
    id: 417,
    name: "WS ECC206 - Analog Circuits",
  },
  {
    id: 418,
    name: "WS ECC207 - Electromagnetic Theory",
  },
  {
    id: 419,
    name: "WS ECC208 - Control Systems",
  },
  {
    id: 420,
    name: "WS ECC209 - Microprocessors & Microcontrollers",
  },
  {
    id: 421,
    name: "WS ECC210 - Electronic Devices and Circuits Lab",
  },
  {
    id: 422,
    name: "WS ECC211 - Microprocessor & Microcontroller Lab",
  },
  {
    id: 423,
    name: "WS ECE201 - Measurements and Instrumentations",
  },
  {
    id: 424,
    name: "WS EEC204 - Electrical Machines - I",
  },
  {
    id: 425,
    name: "WS EEC205 - Electrical Measurements",
  },
  {
    id: 426,
    name: "WS EEC206 - Control System Engineering",
  },
  {
    id: 427,
    name: "WS EEC207 - Power System Engineering",
  },
  {
    id: 428,
    name: "WS EEC273 - Control and Measurement lab",
  },
  {
    id: 429,
    name: "WS EEC274 - Electrical Machines and Power lab",
  },
  {
    id: 430,
    name: "WS EEE201 - Applied Electrical Engineering",
  },
  {
    id: 431,
    name: "WS ESC204 - Geology and Land use Planning",
  },
  {
    id: 432,
    name: "WS ESC205 - Introduction Ecology and Environmental Microbiology",
  },
  {
    id: 433,
    name: "WS ESC206 - Environmental Policy and Legislation",
  },
  {
    id: 434,
    name: "WS ESC207 - Air Pollution Control",
  },
  {
    id: 435,
    name: "WS ESC253 - Geology  Practical",
  },
  {
    id: 436,
    name: "WS ESC254 - Soil  and Environmental Microbiology Practical",
  },
  {
    id: 437,
    name: "WS ESE202 - Atmospheric  Science and Climate Change",
  },
  {
    id: 438,
    name: "WS FMC204 - Electrochemistry and Corrosion",
  },
  {
    id: 439,
    name: "WS FMC205 - Thermodynamics and Kinetics",
  },
  {
    id: 440,
    name: "WS FMC206 - Phase Transformation and Heat Treatment",
  },
  {
    id: 441,
    name: "WS FMC207 - Fine Particle Processing for Coal and Minerals",
  },
  {
    id: 442,
    name: "WS FMC253 - Fine Particle Processing Laboratory",
  },
  {
    id: 443,
    name: "WS FMC254 - Introduction to Fuel Technology Laboratory",
  },
  {
    id: 444,
    name: "WS FME222 - Introduction to Fuel Technology",
  },
  {
    id: 445,
    name: "WS MNC205 - Rock Mechanics",
  },
  {
    id: 446,
    name: "WS MNC206 - Mine Ventilation",
  },
  {
    id: 447,
    name: "WS MNC207 - Underground Metal Mining",
  },
  {
    id: 448,
    name: "WS MNC208 - Underground Coal Mining",
  },
  {
    id: 449,
    name: "WS MNC209 - Rock Mechanics Practical",
  },
  {
    id: 450,
    name: "WS MNC210 - Mine Ventilation practical - I",
  },
  {
    id: 451,
    name: "WS MNE202 - Introductory Rock Mechanics",
  },
  {
    id: 452,
    name: "WS MEC206 - Fluid Machines",
  },
  {
    id: 453,
    name: "WS MEC207 - Dynamics of Machinery",
  },
  {
    id: 454,
    name: "WS MEC208 - Heat and Mass Transfer",
  },
  {
    id: 455,
    name: "WS MEC209 - Production Technology",
  },
  {
    id: 456,
    name: "WS MEC210 - Heat Transfer and Fluid Machines Lab",
  },
  {
    id: 457,
    name: "WS MEC211 - Machine Dynamics and Solid Modeling Lab",
  },
  {
    id: 458,
    name: "WS MEE202 - Computer Aided Engineering Design",
  },
  {
    id: 459,
    name: "WS MMC206 - Mine Electrical Technology",
  },
  {
    id: 460,
    name: "WS MMC207 - Bulk Material Handling Equipment",
  },
  {
    id: 461,
    name: "WS MMC208 - Design of Mining Equipment Components",
  },
  {
    id: 462,
    name: "WS MMC209 - Hydraulics & Pneumatics",
  },
  {
    id: 463,
    name: "WS MMC210 - Hydraulics & Pneumatics Lab",
  },
  {
    id: 464,
    name: "WS MMC211 - Manufacturing Technology and Soft Computing Lab",
  },
  {
    id: 465,
    name: "WS MME201 - IC Engines",
  },
  {
    id: 466,
    name: "WS PEC206 - Elements of Petroleum Production Engineering",
  },
  {
    id: 467,
    name: "WS PEC207 - Petroleum Formation Evaluation",
  },
  {
    id: 468,
    name: "WS PEC208 - Reservoir Fluid Thermodynamics",
  },
  {
    id: 469,
    name: "WS PEC209 - Petroleum Product Testing Practical",
  },
  {
    id: 470,
    name: "WS PEC210 - Drilling Simulation Practical",
  },
  {
    id: 471,
    name: "WS PEE202 - Petroleum Environmental Management",
  },
  {
    id: 472,
    name: "WS PHC205 - Introduction to Quantum Mechanics",
  },
  {
    id: 473,
    name: "WS PHC206 - Applied Optics",
  },
  {
    id: 474,
    name: "WS PHC207 - Nuclear Science and Engineering",
  },
  {
    id: 475,
    name: "WS PHC208 - Electrodynamics",
  },
  {
    id: 476,
    name: "WS PHC209 - Optics Lab",
  },
  {
    id: 477,
    name: "WS PHC210 - Electricity and Magnetism Lab",
  },
  {
    id: 478,
    name: "WS PHE202 - Material Science and Engineering",
  },
  {
    id: 479,
    name: "WS CHC306 - Chemical Process Equipment Design",
  },
  {
    id: 480,
    name: "WS CHC307 - Process Modelling and Simulation",
  },
  {
    id: 481,
    name: "WS CHC308 - Chemical Process Equipment Design Lab",
  },
  {
    id: 482,
    name: "WS CHC309 - Process Simulation Lab",
  },
  {
    id: 483,
    name: "WS CHD402 - Polymers Science and Engineering",
  },
  {
    id: 484,
    name: "WS CHO301 - Petroleum Refining",
  },
  {
    id: 485,
    name: "WS CHO302 - Industrial Safety and Hazards Management",
  },
  {
    id: 486,
    name: "WS CSC305 - Computer Network",
  },
  {
    id: 487,
    name: "WS CSC306 - Software Engineering",
  },
  {
    id: 488,
    name: "WS CSC307 - Computer Networks Lab",
  },
  {
    id: 489,
    name: "WS CSC308 - Software Engineering Lab",
  },
  {
    id: 490,
    name: "WS CSO302 - Graph Theory",
  },
  {
    id: 491,
    name: "WS CSO304 - Digital Image Processing",
  },
  {
    id: 492,
    name: "WS CSO506 - Principles of Blockchain Technologies",
  },
  {
    id: 493,
    name: "WS CEC305 - Design of Steel Structures",
  },
  {
    id: 494,
    name: "WS CEC306 - Water Resources Engineering",
  },
  {
    id: 495,
    name: "WS CEC307 - Structural Detailing Laboratory",
  },
  {
    id: 496,
    name: "WS CEC308 - Water Resources Engineering Laboratory",
  },
  {
    id: 497,
    name: "WS CEO303 - Construction Management",
  },
  {
    id: 498,
    name: "WS CEO525 - Optimization Methods",
  },
  {
    id: 499,
    name: "WS CEO527 - Bridge Engineering",
  },
  {
    id: 500,
    name: "WS ECC306 - Digital Communication",
  },
  {
    id: 501,
    name: "WS ECC307 - Microwave Engineering",
  },
  {
    id: 502,
    name: "WS ECC308 - Digital Communication Lab",
  },
  {
    id: 503,
    name: "WS ECC309 - Microwave Engineering Lab",
  },
  {
    id: 504,
    name: "WS ECO301 - Microprocessor and its Application",
  },
  {
    id: 505,
    name: "WS ECO302 - Power Electronics",
  },
  {
    id: 506,
    name: "WS ECO402 - Optical Fiber Sensor",
  },
  {
    id: 507,
    name: "WS EEC311 - Power System Analysis and Control",
  },
  {
    id: 508,
    name: "WS EEC312 - Electrical Drives and Applications",
  },
  {
    id: 509,
    name: "WS EEC377 - Power and Switchgear Lab",
  },
  {
    id: 510,
    name: "WS EEC378 - Power Electronics and Drives lab",
  },
  {
    id: 511,
    name: "WS EED505 - Power Electronics for Renewable Energy Systems",
  },
  {
    id: 512,
    name: "WS EEO301 - Microprocessor & Microcontroller",
  },
  {
    id: 513,
    name: "WS EEO302 - Industrial Utilization of Electrical Power",
  },
  {
    id: 514,
    name: "WS ESC311 - Solid Waste Management",
  },
  {
    id: 515,
    name: "WS ESC312 - Geoinformatics",
  },
  {
    id: 516,
    name: "WS ESC357 - Solid Waste Management Practical",
  },
  {
    id: 517,
    name: "WS ESC358 - Geoinformatics Practical",
  },
  {
    id: 518,
    name: "WS ESD404 - Water Resource Planning and Management",
  },
  {
    id: 519,
    name: "WS ESD508 - Social Impact Assessment and R&R",
  },
  {
    id: 520,
    name: "WS ESD513 - Energy Auditing and Management",
  },
  {
    id: 521,
    name: "WS ESO301 - Applied Statistics for Environmental Engineering",
  },
  {
    id: 522,
    name: "WS FMC303 - Mechanical Metallurgy",
  },
  {
    id: 523,
    name: "WS FMC304 - Coal and Mineral Processing Plant Design",
  },
  {
    id: 524,
    name: "WS FMC305 - Coal and Mineral Processing Plant Design Laboratory",
  },
  {
    id: 525,
    name: "WS FMC352 - Heat Treatment and Mechanical Metallurgy Laboratory",
  },
  {
    id: 526,
    name: "WS FMD463 - Non Ferrous Extractive Metallurgy",
  },
  {
    id: 527,
    name: "WS FMD464 - Mineral Policy and Economics",
  },
  {
    id: 528,
    name: "WS FMO431 - Elements of Mineral Engineering",
  },
  {
    id: 529,
    name: "WS HSD512 - Gender Studies",
  },
  {
    id: 530,
    name: "WS HSD533 - Introduction to Yoga Philosophy",
  },
  {
    id: 531,
    name: "WS HSO307 - Philosophy and Critical Thinking",
  },
  {
    id: 532,
    name: "WS HSO308 - Social Psychology",
  },
  {
    id: 533,
    name: "WS HSO320 - Principles of Sociology",
  },
  {
    id: 534,
    name: "WS HSO511 - Brain and Behaviour",
  },
  {
    id: 535,
    name: "WS HSO512 - Experience Psychology",
  },
  {
    id: 536,
    name: "WS HSO514 - Introduction to Climate Change and Society",
  },
  {
    id: 537,
    name: "WS MNC304 - Mine Legislation and Safety",
  },
  {
    id: 538,
    name: "WS MNC305 - Mine Automation and Data Analytics",
  },
  {
    id: 539,
    name: "WS MNC306 - Mine Data Analytics Practical",
  },
  {
    id: 540,
    name: "WS MNC307 - Numerical Modelling/Remote Sensing & GIS Practical",
  },
  {
    id: 541,
    name: "WS MNO302 - Seabed Mining and Asteroid Mining",
  },
  {
    id: 542,
    name: "WS MNO304 - Coal Mine Methane Recovery and Utilization",
  },
  {
    id: 543,
    name: "WS MNO401 - Rock Engineering",
  },
  {
    id: 544,
    name: "WS MEC306 - Computer Aided Manufacturing",
  },
  {
    id: 545,
    name: "WS MEC307 - IC Engines and Gas Turbines",
  },
  {
    id: 546,
    name: "WS MEC308 - Computer Aided Manufacturing Lab",
  },
  {
    id: 547,
    name: "WS MEC309 - Heat Power and Refrigeration Lab",
  },
  {
    id: 548,
    name: "WS MED519 - Engineering Tribology",
  },
  {
    id: 549,
    name: "WS MEO302 - Refrigeration and Air-conditioning",
  },
  {
    id: 550,
    name: "WS MEO586 - Additive Manufacturing",
  },
  {
    id: 551,
    name: "WS MED545 - Turbomachinery",
  },
  {
    id: 552,
    name: "WS MEO581 - Fundamentals of Combustion",
  },
  {
    id: 553,
    name: "WS MEO590 - Advanced Scientific Computing",
  },
  {
    id: 554,
    name: "WS MMC305 - Underground Mining Equipment",
  },
  {
    id: 555,
    name: "WS MMC306 - Opencast Mining Equipment",
  },
  {
    id: 556,
    name: "WS MMC307 - Mining Machinery Lab",
  },
  {
    id: 557,
    name: "WS MMC308 - Pumps Fans & Compressors Lab",
  },
  {
    id: 558,
    name: "WS PEC306 - Directional Drilling",
  },
  {
    id: 559,
    name: "WS PEC307 - Oil and Gas Well Testing",
  },
  {
    id: 560,
    name: "WS PEC308 - Enhanced Oil Recovery Practical",
  },
  {
    id: 561,
    name: "WS PEC309 - Reservoir Characterization Practical",
  },
  {
    id: 562,
    name: "WS PEO301 - Heat and Mass Transfer in Petroleum Operations",
  },
  {
    id: 563,
    name: "WS PEO302 - Oil & Gas Field Development and Planning",
  },
  {
    id: 564,
    name: "WS PEO502 - Flow Assurance",
  },
  {
    id: 565,
    name: "WS PHC302 - Solid State Physics",
  },
  {
    id: 566,
    name: "WS PHC303 - Applied Optics Lab",
  },
  {
    id: 567,
    name: "WS PHC304 - Spectroscopy Lab",
  },
  {
    id: 568,
    name: "WS PHC510 - Atomic and Molecular Physics",
  },
  {
    id: 569,
    name: "WS PHO401 - Introduction to Quantum Devices",
  },
  {
    id: 570,
    name: "WS PHO403 - Energy Storage Technologies",
  },
  {
    id: 571,
    name: "WS CHD404 - Bioprocess Technology",
  },
  {
    id: 572,
    name: "WS CHD411 - Catalytic Reaction Engineering",
  },
  {
    id: 573,
    name: "WS CHD417 - Membrane Science and Engineering",
  },
  {
    id: 574,
    name: "WS CHO403 - Process Intensification",
  },
  {
    id: 575,
    name: "WS CSD401 - Advanced Algorithms",
  },
  {
    id: 576,
    name: "WS CSD403 - Combinatorics and Graph Theory",
  },
  {
    id: 577,
    name: "WS CSD404 - Computer Graphics",
  },
  {
    id: 578,
    name: "WS CSD405 - Evolutionary Computation",
  },
  {
    id: 579,
    name: "WS CSD508 - Distributed Systems",
  },
  {
    id: 580,
    name: "WS CSD510 - Information Retrieval",
  },
  {
    id: 581,
    name: "WS CSD521 - Wireless Networks",
  },
  {
    id: 582,
    name: "WS CSO505 - Soft Computing",
  },
  {
    id: 583,
    name: "WS CED404 - Environmental Engineering - II",
  },
  {
    id: 584,
    name: "WS CED529 - Advanced Foundation Engineering",
  },
  {
    id: 585,
    name: "WS CED542 - Prestressed Concrete Structures",
  },
  {
    id: 586,
    name: "WS CEO526 - Geoinformatics for Civil Engineering",
  },
  {
    id: 587,
    name: "WS ECD404 - Digital Image Processing",
  },
  {
    id: 588,
    name: "WS ECD419 - Satellite Communication",
  },
  {
    id: 589,
    name: "WS ECO500 - Wireless Sensor Networks",
  },
  {
    id: 590,
    name: "WS ECO506 - Machine Learning",
  },
  {
    id: 591,
    name: "WS EED405 - Instrumentation",
  },
  {
    id: 592,
    name: "WS EED406 - Special Purpose Electric Machines and Drives",
  },
  {
    id: 593,
    name: "WS EED511 - Power System Dynamics",
  },
  {
    id: 594,
    name: "WS EED513 - Power Quality",
  },
  {
    id: 595,
    name: "WS EEO504 - Condition Monitoring of Electrical Machines",
  },
  {
    id: 596,
    name: "WS EEO505 - Modern Sensors and Signal Conditioning Circuits",
  },
  {
    id: 597,
    name: "WS ESD402 - Industrial Waste Water Engineering",
  },
  {
    id: 598,
    name: "WS ESD406 - Environmental Nano Technology",
  },
  {
    id: 599,
    name: "WS ESD503 - Environmental Modelling",
  },
  {
    id: 600,
    name: "WS ESO505 - Climate Change and Modelling",
  },
  {
    id: 601,
    name: "WS FMD462 - Process Control and Plant Layout",
  },
  {
    id: 602,
    name: "WS FMD522 - Coal Preparation",
  },
  {
    id: 603,
    name: "WS FMD530 - Biofuels",
  },
  {
    id: 604,
    name: "WS FMD536 - Surface Engineering",
  },
  {
    id: 605,
    name: "WS MND407 - Underground Space Technology",
  },
  {
    id: 606,
    name: "WS MND408 - Innovative Mining Systems",
  },
  {
    id: 607,
    name: "WS MND409 - Introduction to Geographical Information System",
  },
  {
    id: 608,
    name: "WS MND410 - Advanced Blasting Techniques",
  },
  {
    id: 609,
    name: "WS MND411 - Advanced Underground Mining Methods",
  },
  {
    id: 610,
    name: "WS MND412 - Deep Coal Mining",
  },
  {
    id: 611,
    name: "WS MED529 - Composite Materials",
  },
  {
    id: 612,
    name: "WS MED531 - Fracture Mechanics",
  },
  {
    id: 613,
    name: "WS MEO522 - Condition Monitoring of Machines",
  },
  {
    id: 614,
    name: "WS MEO528 - Robotics",
  },
  {
    id: 615,
    name: "WS MED521 - Theory of Lubrication",
  },
  {
    id: 616,
    name: "WS MED541 - Microfluidics",
  },
  {
    id: 617,
    name: "WS MED542 - Finite Element Method in Thermal Engineering",
  },
  {
    id: 618,
    name: "WS MMO504 - Advanced Fluid Power Systems and Control",
  },
  {
    id: 619,
    name: "WS PED404 - Petroleum Engineering Design",
  },
  {
    id: 620,
    name: "WS PED405 - Pipeline Engineering",
  },
  {
    id: 621,
    name: "WS PED406 - Reservoir Modeling and Simulation",
  },
  {
    id: 622,
    name: "WS PED502 - Well Intervention, Workover and Stimulation Techniques",
  },
  {
    id: 623,
    name: "WS PEO405 - Integrated Reservoir Management",
  },
  {
    id: 624,
    name: "WS PEO506 - Carbon Capture And Sequestration",
  },
  {
    id: 625,
    name: "WS PHD503 - High Energy Physics",
  },
  {
    id: 626,
    name: "WS PHD511 - Astrophysics and Cosmology",
  },
  {
    id: 627,
    name: "WS PHD512 - Nonlinear Optics",
  },
  {
    id: 628,
    name: "WS PHD513 - Semiconductor Physics and Technology",
  },
  {
    id: 629,
    name: "WS PHO303 - Physics for Society",
  },
  {
    id: 630,
    name: "WS PHO503 - Physics of Nanomaterials",
  },
  {
    id: 631,
    name: "WS GLC205 - Introduction to Petrology",
  },
  {
    id: 632,
    name: "WS GLC206 - Introduction to Stratigraphy and Paleontology",
  },
  {
    id: 633,
    name: "WS GLC207 - Descriptive Mineralogy",
  },
  {
    id: 634,
    name: "WS GLC208 - Economic Geology and Indian Mineral Deposits",
  },
  {
    id: 635,
    name: "WS GLC209 - Petrology Practical",
  },
  {
    id: 636,
    name: "WS GLC210 - Economic Geology Practical",
  },
  {
    id: 637,
    name: "WS GLE202 - Resource Geology",
  },
  {
    id: 638,
    name: "WS GPC205 - Oceanography",
  },
  {
    id: 639,
    name: "WS GPC206 - Mathematical Geophysics",
  },
  {
    id: 640,
    name: "WS GPC207 - Radiometric Method",
  },
  {
    id: 641,
    name: "WS GPC208 - Radiometric Method Practical",
  },
  {
    id: 642,
    name: "WS GPE201 - Earth and Planetary System",
  },
  {
    id: 643,
    name: "WS MCC205 - Linear Algebra",
  },
  {
    id: 644,
    name: "WS MCC509 - Statistical  Inference",
  },
  {
    id: 645,
    name: "WS MCC510 - Operating Systems",
  },
  {
    id: 646,
    name: "WS MCC512 - Operating Systems Practical",
  },
  {
    id: 647,
    name: "WS MCE301 - Operations Research",
  },
  {
    id: 648,
    name: "WS MCO501 - Discrete Mathematics",
  },
  {
    id: 649,
    name: "WS GLC509 - Igneous Petrology",
  },
  {
    id: 650,
    name: "WS GLC510 - Metamorphic Petrology",
  },
  {
    id: 651,
    name: "WS GLC514 - Igneous and Metamorphic Petrology Practical",
  },
  {
    id: 652,
    name: "WS GLC515 - Sedimentology and Petroleum Geology Practical",
  },
  {
    id: 653,
    name: "WS GLD530 - Geodynamics",
  },
  {
    id: 654,
    name: "WS GLD540 - Geomorphology",
  },
  {
    id: 655,
    name: "WS GPC508 - Earthquake Seismology",
  },
  {
    id: 656,
    name: "WS GPC509 - Geoelectrical Method",
  },
  {
    id: 657,
    name: "WS GPC510 - Well Logging",
  },
  {
    id: 658,
    name: "WS GPC511 - Seismic Data Acquisition",
  },
  {
    id: 659,
    name: "WS GPC512 - Seismic Data Acquisition Practical",
  },
  {
    id: 660,
    name: "WS GPC513 - Geoelectrical Methods Practical",
  },
  {
    id: 661,
    name: "WS GPC515 - Earthquake Seismology and Well Logging Practical",
  },
  {
    id: 662,
    name: "WS GPO503 - Artificial Intelligence and Machine Learning in Geosciences",
  },
  {
    id: 663,
    name: "WS MCC511 - Database Management Systems",
  },
  {
    id: 664,
    name: "WS MCC513 - Database Management Systems Practical",
  },
  {
    id: 665,
    name: "WS MCD501 - Classical Mechanics",
  },
  {
    id: 666,
    name: "WS MCD508 - Theory of Computation",
  },
  {
    id: 667,
    name: "WS MCD511 - Mathematical Ecology",
  },
  {
    id: 668,
    name: "WS MCD560 - Orbital Mechanics",
  },
  {
    id: 669,
    name: "WS GLC513 - Coal Geology",
  },
  {
    id: 670,
    name: "WS GLC516 - Coal Geology Practical",
  },
  {
    id: 671,
    name: "WS GLC526 - Ore Geology",
  },
  {
    id: 672,
    name: "WS GLC533 - Ore Geology Practical",
  },
  {
    id: 673,
    name: "WS GLD528 - Geotechnical Engineering",
  },
  {
    id: 674,
    name: "WS GLD571 - Petroleum Exploration and Micropalaeontology",
  },
  {
    id: 675,
    name: "WS GLO545 - Radiogenic and Stable Isotope Geology",
  },
  {
    id: 676,
    name: "WS GPC520 - Magnetic Method",
  },
  {
    id: 677,
    name: "WS GPC521 - Geoelectromagnetic Method",
  },
  {
    id: 678,
    name: "WS GPC522 - Magnetic Method Practical",
  },
  {
    id: 679,
    name: "WS GPC523 - Geoelectromagnetic Method Practical",
  },
  {
    id: 680,
    name: "WS GPD507 - Geophysics for Mineral Exploration",
  },
  {
    id: 681,
    name: "WS GPD508 - Seismological Data Analysis",
  },
  {
    id: 682,
    name: "WS MCC401 - Software Engineering",
  },
  {
    id: 683,
    name: "WS MCC402 - Software Engineering Practical",
  },
  {
    id: 684,
    name: "WS MCD502 - Graph Theory",
  },
  {
    id: 685,
    name: "WS MCD510 - Complex Analysis",
  },
  {
    id: 686,
    name: "WS MCD516 - Industrial Statistics",
  },
  {
    id: 687,
    name: "WS MCO402 - Modelling and Simulation",
  },
  {
    id: 688,
    name: "WS  - ",
  },
  {
    id: 689,
    name: "WS GPC537 - Remote Sensing: Principles and Data Acquisition System",
  },
  {
    id: 690,
    name: "WS GPC538 - Advanced Numerical Methods",
  },
  {
    id: 691,
    name: "WS GPC539 - Remote Sensing: Principles and Data Acquisition System Practical",
  },
  {
    id: 692,
    name: "WS GPC540 - Advanced Numerical Methods Practical",
  },
  {
    id: 693,
    name: "WS GPD520 - Earthquake Statistics and Hazard",
  },
  {
    id: 694,
    name: "WS CHC530 - Reaction Engineering",
  },
  {
    id: 695,
    name: "WS CHC531 - Chemical Engineering Lab",
  },
  {
    id: 696,
    name: "WS CYC529 - Formulation/Manufacturing Lab",
  },
  {
    id: 697,
    name: "WS CYD524 - Basics of Chemical Biology",
  },
  {
    id: 698,
    name: "WS CYD529 - Computer Aided Drug Discovery",
  },
  {
    id: 699,
    name: "WS CYD530 - Pharmacovigilance and Regulatory Affairs",
  },
  {
    id: 700,
    name: "WS CYD531 - Biotechnology in Pharmaceutical Sciences",
  },
  {
    id: 701,
    name: "WS CHC508 - Advanced Mass transfer",
  },
  {
    id: 702,
    name: "WS CHC509 - Computational Fluid Dynamics",
  },
  {
    id: 703,
    name: "WS CHC510 - Advanced Chemical Engineering Lab",
  },
  {
    id: 704,
    name: "WS CHC511 - Term Paper and Presentation",
  },
  {
    id: 705,
    name: "WS CHD504 - Process Optimization",
  },
  {
    id: 706,
    name: "WS CHD505 - Interfacial and Colloidal Phenomena",
  },
  {
    id: 707,
    name: "WS CHO501 - Rheology",
  },
  {
    id: 708,
    name: "WS CHO503 - Introduction to Granular Mechanics",
  },
  {
    id: 709,
    name: "WS CSC508 - Computing Lab - I",
  },
  {
    id: 710,
    name: "WS CSC509 - Computing Lab - II",
  },
  {
    id: 711,
    name: "WS CSD505 - Cryptography and Network Security",
  },
  {
    id: 712,
    name: "WS CSD509 - Image and Video Processing",
  },
  {
    id: 713,
    name: "WS CSD513 - Internet of Things",
  },
  {
    id: 714,
    name: "WS CSD516 - Optimization Techniques",
  },
  {
    id: 715,
    name: "WS CSD517 - Parallel Computing",
  },
  {
    id: 716,
    name: "WS CSO501 - Principles of Artificial Intelligence",
  },
  {
    id: 717,
    name: "WS CSO503 - Data Mining",
  },
  {
    id: 718,
    name: "WS CSO507 - Deep Learning",
  },
  {
    id: 719,
    name: "WS CSO508 - Building Software Systems",
  },
  {
    id: 720,
    name: "WS CEC509 - Advanced Testing Laboratory",
  },
  {
    id: 721,
    name: "WS CEC510 - Term Project",
  },
  {
    id: 722,
    name: "WS CED528 - Structural Dynamics",
  },
  {
    id: 723,
    name: "WS CED530 - Hydrogeology and Well Hydraulics",
  },
  {
    id: 724,
    name: "WS CED532 - Slope and Retaining Structure",
  },
  {
    id: 725,
    name: "WS CED533 - Hydroclimatology",
  },
  {
    id: 726,
    name: "WS CED534 - Theory of Elastic Stability",
  },
  {
    id: 727,
    name: "WS CED535 - Soil Dynamics",
  },
  {
    id: 728,
    name: "WS CED537 - Earthquake Engineering",
  },
  {
    id: 729,
    name: "WS CEO524 - Finite Element Method",
  },
  {
    id: 730,
    name: "WS CEO531 - Railway Geotechnics",
  },
  {
    id: 731,
    name: "WS ECC507 - Electronics Engineering - I Lab",
  },
  {
    id: 732,
    name: "WS ECC508 - Electronics Engineering - II Lab",
  },
  {
    id: 733,
    name: "WS ECD500 - Advanced Signal Processing",
  },
  {
    id: 734,
    name: "WS ECD501 - Metamaterials and CRLH Transmission Lines",
  },
  {
    id: 735,
    name: "WS ECD503 - Wireless Communication Systems",
  },
  {
    id: 736,
    name: "WS ECD504 - Computer Communication Networks",
  },
  {
    id: 737,
    name: "WS ECD505 - CAD for VLSI",
  },
  {
    id: 738,
    name: "WS ECD514 - Photonic Sensors",
  },
  {
    id: 739,
    name: "WS ECD520 - Optoelectronic and Photonics Devices",
  },
  {
    id: 740,
    name: "WS ECD531 - Photonic Integrated Circuits",
  },
  {
    id: 741,
    name: "WS ECD540 - Advanced Antenna Theory",
  },
  {
    id: 742,
    name: "WS ECD541 - Microwave Measurements",
  },
  {
    id: 743,
    name: "WS ECD560 - Analog IC Design",
  },
  {
    id: 744,
    name: "WS ECD569 - MOS Device Physics and Modelling",
  },
  {
    id: 745,
    name: "WS ECO520 - Optical Networks",
  },
  {
    id: 746,
    name: "WS ECO560 - Test and Verification of VLSI Circuits",
  },
  {
    id: 747,
    name: "WS EEC501 - Power System Analysis",
  },
  {
    id: 748,
    name: "WS EEC508 - Power Electronic Converters",
  },
  {
    id: 749,
    name: "WS EEC513 - Advanced power System Simulation Lab",
  },
  {
    id: 750,
    name: "WS EEC514 - Advanced Power System Protection Lab",
  },
  {
    id: 751,
    name: "WS EED504 - Wireless Power Transfer",
  },
  {
    id: 752,
    name: "WS EEO501 - Smart Grid Technology",
  },
  {
    id: 753,
    name: "WS EEO503 - Electric & Hybrid Electric Vehicles",
  },
  {
    id: 754,
    name: "WS ESC506 - Environmental Laws and Impact Assessment",
  },
  {
    id: 755,
    name: "WS ESC507 - Municipal Solid Waste Management",
  },
  {
    id: 756,
    name: "WS ESC523 - Water and Wastewater Engineering Practical",
  },
  {
    id: 757,
    name: "WS ESC524 - Soil and Microbiology Practical",
  },
  {
    id: 758,
    name: "WS ESD505 - Advanced Water and Wastewater Treatment",
  },
  {
    id: 759,
    name: "WS ESD512 - Groundwater Contaminant Transport",
  },
  {
    id: 760,
    name: "WS ESO501 - Environmental Management System and Auditing",
  },
  {
    id: 761,
    name: "WS ESO502 - Environmental Aspects of Industries",
  },
  {
    id: 762,
    name: "WS FMC553 - Fuel Technology Laboratory",
  },
  {
    id: 763,
    name: "WS FMC556 - Materials Characterization Laboratory",
  },
  {
    id: 764,
    name: "WS FMD525 - Iron and Steel Making",
  },
  {
    id: 765,
    name: "WS FMD528 - Power Plant Engineering",
  },
  {
    id: 766,
    name: "WS FMD531 - Alternate Energy Systems",
  },
  {
    id: 767,
    name: "WS FMD540 - Size Enlargement Processes",
  },
  {
    id: 768,
    name: "WS FMD541 - Processing Equipment Selection",
  },
  {
    id: 769,
    name: "WS MCC539 - Advanced DBMS",
  },
  {
    id: 770,
    name: "WS MCC540 - Neural Networks and Deep Learning",
  },
  {
    id: 771,
    name: "WS MCC541 - Advanced DBMS Practical",
  },
  {
    id: 772,
    name: "WS MCC542 - Neural Networks and Deep Learning Practical",
  },
  {
    id: 773,
    name: "WS MCD543 - Missing Data Analysis in Survey Sampling",
  },
  {
    id: 774,
    name: "WS MCO531 - Stochastic Processes",
  },
  {
    id: 775,
    name: "WS MCO532 - Advanced Multivariate Analysis",
  },
  {
    id: 776,
    name: "WS MNC503 - Mine Planning and Design",
  },
  {
    id: 777,
    name: "WS MNC506 - Computer Aided Mine Planning and Design Practical",
  },
  {
    id: 778,
    name: "WS MNC508 - Geostatistics and Mine Valuation",
  },
  {
    id: 779,
    name: "WS MNC509 - Mine Simulation and Data analytics Practical",
  },
  {
    id: 780,
    name: "WS MND500 - Managerial Decision Making",
  },
  {
    id: 781,
    name: "WS MND556 - Computational Geomechanics",
  },
  {
    id: 782,
    name: "WS MNO501 - Mining, Energy and Climate Change",
  },
  {
    id: 783,
    name: "WS MNO510 - Rock Excavation Technology",
  },
  {
    id: 784,
    name: "WS MEC509 - Mechanical Engineering Lab - I",
  },
  {
    id: 785,
    name: "WS MEC510 - Mechanical Engineering Lab - II",
  },
  {
    id: 786,
    name: "WS MED513 - Thermo-Production Processes",
  },
  {
    id: 787,
    name: "WS MED525 - Rotor Dynamics",
  },
  {
    id: 788,
    name: "WS MED538 - Gas Dynamics",
  },
  {
    id: 789,
    name: "WS MED546 - Conduction and Radiation",
  },
  {
    id: 790,
    name: "WS MED547 - Convective and Two-phase Flow",
  },
  {
    id: 791,
    name: "WS MED554 - Surface Engineering",
  },
  {
    id: 792,
    name: "WS MED555 - Computer Aided Manufacturing and Robotics",
  },
  {
    id: 793,
    name: "WS MEO579 - Computational Fluid Dynamics",
  },
  {
    id: 794,
    name: "WS MSC515 - Software Lab",
  },
  {
    id: 795,
    name: "WS MSC517 - Simulation Modelling & Analysis Lab",
  },
  {
    id: 796,
    name: "WS MSC519 - Project Management",
  },
  {
    id: 797,
    name: "WS MSC520 - Quality Management",
  },
  {
    id: 798,
    name: "WS MSC527 - Machine Learning",
  },
  {
    id: 799,
    name: "WS MSD512 - Service Operations Management",
  },
  {
    id: 800,
    name: "WS MSD526 - Supply Chain Management",
  },
  {
    id: 801,
    name: "WS PEC508 - Petroleum Geomechanics and Hydraulic Fracturing",
  },
  {
    id: 802,
    name: "WS PEC509 - Advanced Drilling Technology",
  },
  {
    id: 803,
    name: "WS PEC510 - Petroleum Instrumentation and Measurements Practical",
  },
  {
    id: 804,
    name: "WS PEC511 - Development of Working Models Practical",
  },
  {
    id: 805,
    name: "WS PED501 - Reservoir Simulation",
  },
  {
    id: 806,
    name: "WS PEO501 - Fluid Flow through Porous Media",
  },
  {
    id: 807,
    name: "WS PEO503 - Unconventional Hydrocarbon Resources",
  },
  {
    id: 808,
    name: "WS CYC508 - Kinetics and Thermodynamics",
  },
  {
    id: 809,
    name: "WS CYC509 - Methods in Organic Synthesis",
  },
  {
    id: 810,
    name: "WS CYC510 - Organometallic Chemistry",
  },
  {
    id: 811,
    name: "WS CYC511 - Group Theory & Electronic Spectroscopy",
  },
  {
    id: 812,
    name: "WS CYC512 - Physical Chemistry Lab - I",
  },
  {
    id: 813,
    name: "WS CYC513 - Organic Chemistry Lab - II",
  },
  {
    id: 814,
    name: "WS CYD513 - Electroanalytical Methods",
  },
  {
    id: 815,
    name: "WS CYO503 - Rechargeable Battery Science and Technology",
  },
  {
    id: 816,
    name: "WS MCC508 - Advanced Algebra",
  },
  {
    id: 817,
    name: "WS MCC509 - Statistical  Inference",
  },
  {
    id: 818,
    name: "WS MCC510 - Operating Systems",
  },
  {
    id: 819,
    name: "WS MCC511 - Database Management Systems",
  },
  {
    id: 820,
    name: "WS MCC512 - Operating Systems Practical",
  },
  {
    id: 821,
    name: "WS MCC513 - Database Management Systems Practical",
  },
  {
    id: 822,
    name: "WS MCD504 - Measure Theory",
  },
  {
    id: 823,
    name: "WS PHC508 - Quantum Mechanics",
  },
  {
    id: 824,
    name: "WS PHC509 - Electrodynamics and Radiation theory",
  },
  {
    id: 825,
    name: "WS PHC510 - Atomic and Molecular Physics",
  },
  {
    id: 826,
    name: "WS PHC511 - Condensed Matter Physics",
  },
  {
    id: 827,
    name: "WS PHC512 - Experimental Physics - III",
  },
  {
    id: 828,
    name: "WS PHC513 - Experimental Physics - IV",
  },
  {
    id: 829,
    name: "WS PHD502 - Computational Physics",
  },
  {
    id: 830,
    name: "WS  - ",
  },
  {
    id: 831,
    name: "WS MSD514 - Financial Econometrics",
  },
  {
    id: 832,
    name: "WS MSD515 - Services Marketing",
  },
  {
    id: 833,
    name: "WS MSD521 - Consumer Behaviour",
  },
  {
    id: 834,
    name: "WS MSC510 - Corporate Finance",
  },
  {
    id: 835,
    name: "WS MSC511 - Organizational Behaviour",
  },
  {
    id: 836,
    name: "WS MSC512 - Operations Management",
  },
  {
    id: 837,
    name: "WS MSC513 - Marketing Management",
  },
  {
    id: 838,
    name: "WS MSC514 - Human Resources Management",
  },
  {
    id: 839,
    name: "WS MSC515 - Software Lab",
  },
  {
    id: 840,
    name: "WS MSC517 - Simulation Modelling & Analysis Lab",
  },
  {
    id: 841,
    name: "WS MCC539 - Advanced DBMS",
  },
  {
    id: 842,
    name: "WS MCC541 - Advanced DBMS Practical",
  },
  {
    id: 843,
    name: "WS MCO531 - Stochastic Processes",
  },
  {
    id: 844,
    name: "WS MSC510 - Corporate Finance",
  },
  {
    id: 845,
    name: "WS MSC524 - Marketing Management",
  },
  {
    id: 846,
    name: "WS MSC525 - Human Resources Management",
  },
  {
    id: 847,
    name: "WS MSC527 - Machine Learning",
  },
  {
    id: 848,
    name: "WS MSC528 - Machine Learning Lab",
  },
  {
    id: 849,
    name: "WS  - ",
  },
  {
    id: 850,
    name: "WS MSC529 - Big Data Lab",
  },
  {
    id: 851,
    name: "WS MSD514 - Financial Econometrics",
  },
  {
    id: 852,
    name: "WS MSD519 - International Finance",
  },
  {
    id: 853,
    name: "WS MSD520 - Merchant Banking and Financial Services",
  },
  {
    id: 854,
    name: "WS MSD524 - International Human Resource Management",
  },
  {
    id: 855,
    name: "WS MSD537 - HR Analytics",
  },
  {
    id: 856,
    name: "WS GLC509 - Igneous Petrology",
  },
  {
    id: 857,
    name: "WS GLC510 - Metamorphic Petrology",
  },
  {
    id: 858,
    name: "WS GLC511 - Applied Sedimentology",
  },
  {
    id: 859,
    name: "WS GLC512 - Petroleum Geology",
  },
  {
    id: 860,
    name: "WS GLC513 - Coal Geology",
  },
  {
    id: 861,
    name: "WS GLC514 - Igneous and Metamorphic Petrology Practical",
  },
  {
    id: 862,
    name: "WS GLC515 - Sedimentology and Petroleum Geology Practical",
  },
  {
    id: 863,
    name: "WS GLC516 - Coal Geology Practical",
  },
  {
    id: 864,
    name: "WS GPC508 - Earthquake Seismology",
  },
  {
    id: 865,
    name: "WS GPC509 - Geoelectrical Method",
  },
  {
    id: 866,
    name: "WS GPC510 - Well Logging",
  },
  {
    id: 867,
    name: "WS GPC511 - Seismic Data Acquisition",
  },
  {
    id: 868,
    name: "WS GPC512 - Seismic Data Acquisition Practical",
  },
  {
    id: 869,
    name: "WS GPC513 - Geoelectrical Methods Practical",
  },
  {
    id: 870,
    name: "WS GPC515 - Earthquake Seismology and Well Logging Practical",
  },
  {
    id: 871,
    name: "WS GLC526 - Ore Geology",
  },
  {
    id: 872,
    name: "WS GLC527 - Exploration Geology and Mineral Economics",
  },
  {
    id: 873,
    name: "WS GLC533 - Ore Geology Practical",
  },
  {
    id: 874,
    name: "WS GLC534 - Exploration Geology Practical",
  },
  {
    id: 875,
    name: "WS GLD531 - Sequence Stratigraphy and Basin Analysis",
  },
  {
    id: 876,
    name: "WS GLD544 - Kinematics of Rock Deformation",
  },
  {
    id: 877,
    name: "WS GLO542 - Remote Sensing and GIS",
  },
  {
    id: 878,
    name: "WS GPC520 - Magnetic Method",
  },
  {
    id: 879,
    name: "WS GPC521 - Geoelectromagnetic Method",
  },
  {
    id: 880,
    name: "WS GPC522 - Magnetic Method Practical",
  },
  {
    id: 881,
    name: "WS GPC523 - Geoelectromagnetic Method Practical",
  },
  {
    id: 882,
    name: "WS GPD509 - Well Log and Electrofacies Analysis",
  },
  {
    id: 883,
    name: "WS GPD510 - Reservoir Geophysics and Deep Water Imaging",
  },
  {
    id: 884,
    name: "WS GPO510 - Strong Motion Seismology and Structural Responses",
  },
  {
    id: 885,
    name: "WS CYP003 - Chemistry - II",
  },
  {
    id: 886,
    name: "WS CYP004 - Chemistry Lab - II",
  },
  {
    id: 887,
    name: "WS HSP002 - English - II",
  },
  {
    id: 888,
    name: "WS MCP002 - Mathematics - II",
  },
  {
    id: 889,
    name: "WS PHP003 - Physics - II",
  },
  {
    id: 890,
    name: "WS PHP004 - Physics Lab - II",
  },
  {
    id: 891,
    name: "WS GPD521 - Time Series Analysis in Geosciences",
  },
  {
    id: 892,
    name: "WS CYD518 - Metalloenzymes-Special Topics",
  },
  {
    id: 893,
    name: "WS CYD528 - Modern Separation Techniques",
  },
  {
    id: 894,
    name: "WS CHD503 - Catalysts & Materials Characterization Techniques",
  },
  {
    id: 895,
    name: "WS CHD507 - Modelling & Simulation",
  },
  {
    id: 896,
    name: "WS CHO504 - Electrochemical Energy Science and Engineering",
  },
  {
    id: 897,
    name: "WS CSD503 - Computational Number Theory",
  },
  {
    id: 898,
    name: "WS CSD518 - Pattern Recognition",
  },
  {
    id: 899,
    name: "WS CSO502 - Data Analytics",
  },
  {
    id: 900,
    name: "WS CEO529 - Blast Protection of Structures",
  },
  {
    id: 901,
    name: "WS CEO530 - Sustainable Engineering",
  },
  {
    id: 902,
    name: "WS ECD510 - Quantum Computation",
  },
  {
    id: 903,
    name: "WS ECD561 - ASIC Design",
  },
  {
    id: 904,
    name: "WS ECO542 - Advanced Microwave Measurement & Instrument",
  },
  {
    id: 905,
    name: "WS EED501 - Design of Power Converters",
  },
  {
    id: 906,
    name: "WS EED502 - Advanced Machine Drives",
  },
  {
    id: 907,
    name: "WS ESD506 - Biomedical and Hazardous Waste Management",
  },
  {
    id: 908,
    name: "WS ESD509 - Air and Noise Pollution Control",
  },
  {
    id: 909,
    name: "WS FMD534 - Metal Forming Technology",
  },
  {
    id: 910,
    name: "WS FMO541 - Characterization of Materials",
  },
  {
    id: 911,
    name: "WS MCD540 - Biostatistics",
  },
  {
    id: 912,
    name: "WS MCO533 - Numerical Linear Algebra",
  },
  {
    id: 913,
    name: "WS MND504 - Modelling and Analysis of Geospatial data",
  },
  {
    id: 914,
    name: "WS MND505 - Geospatial Technologies for Natural Resources",
  },
  {
    id: 915,
    name: "WS MND511 - Modern Blasting Technology in Mining",
  },
  {
    id: 916,
    name: "WS MND547 - Mine Automation",
  },
  {
    id: 917,
    name: "WS MED503 - Finite Element Method",
  },
  {
    id: 918,
    name: "WS MED509 - Advanced Thermodynamics",
  },
  {
    id: 919,
    name: "WS MED515 - Theory of Metal Forming",
  },
  {
    id: 920,
    name: "WS MEO534 - Automation and Control",
  },
  {
    id: 921,
    name: "WS MSD505 - Materials Management",
  },
  {
    id: 922,
    name: "WS MSD525 - Operations Analytics",
  },
  {
    id: 923,
    name: "WS PED503 - Enhanced Oil and Gas Recovery Methods",
  },
  {
    id: 924,
    name: "WS PED504 - Profile Modification & Water Shutoff",
  },
  {
    id: 925,
    name: "WS CYD501 - Medicinal Chemistry",
  },
  {
    id: 926,
    name: "WS CYD502 - Polymer Chemistry",
  },
  {
    id: 927,
    name: "WS CYD505 - Asymmetric Synthesis",
  },
  {
    id: 928,
    name: "WS CYD506 - Computational Chemistry",
  },
  {
    id: 929,
    name: "WS CYD512 - Modern Aspects of Catalysis and Surface Science",
  },
  {
    id: 930,
    name: "WS CYD520 - Advanced Fluorescence Spectroscopy",
  },
  {
    id: 931,
    name: "WS MCD503 - Integral Equations and Calculus of Variations",
  },
  {
    id: 932,
    name: "WS MCD513 - Methods of Applied Mathematics",
  },
  {
    id: 933,
    name: "WS PHD507 - Plasma and Space Physics",
  },
  {
    id: 934,
    name: "WS PHO502 - Introduction to Biophysics",
  },
  {
    id: 935,
    name: "WS GLD575 - Modern Instrumental Methods in Exploration Geosciences",
  },
  {
    id: 936,
    name: "WS GLO501 - Image Processing and Data Analysis",
  },
  {
    id: 937,
    name: "WS GPD522 - Computational Seismology",
  },
  {
    id: 938,
    name: "WS GPO511 - Satellite Image Processing and Geographic Information System",
  },
  {
    id: 939,
    name: "WS  - ",
  },
  {
    id: 940,
    name: "WS GLD551 - Elements of Rock Engineering",
  },
  {
    id: 941,
    name: "WS  - ",
  },
  {
    id: 942,
    name: "WS GPD505 - Near Surface Geophysics and Geotechnical Modelling",
  },
  {
    id: 943,
    name: "WS MCD532 - Data Mining",
  },
  {
    id: 944,
    name: "WS MCD535 - Bioinformatics",
  },
  {
    id: 945,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 946,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 947,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 948,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 949,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 950,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 951,
    name: "WS PHI101 - Physics",
  },
  {
    id: 952,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 953,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 954,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 955,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 956,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 957,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 958,
    name: "WS PHI101 - Physics",
  },
  {
    id: 959,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 960,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 961,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 962,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 963,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 964,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 965,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 966,
    name: "WS PHI101 - Physics",
  },
  {
    id: 967,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 968,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 969,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 970,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 971,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 972,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 973,
    name: "WS PHI101 - Physics",
  },
  {
    id: 974,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 975,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 976,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 977,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 978,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 979,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 980,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 981,
    name: "WS PHI101 - Physics",
  },
  {
    id: 982,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 983,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 984,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 985,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 986,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 987,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 988,
    name: "WS PHI101 - Physics",
  },
  {
    id: 989,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 990,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 991,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 992,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 993,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 994,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 995,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 996,
    name: "WS PHI101 - Physics",
  },
  {
    id: 997,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 998,
    name: "WS CEI101 - Engineering Graphics",
  },
  {
    id: 999,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1000,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 1001,
    name: "WS MEI101 - Engineering Mechanics",
  },
  {
    id: 1002,
    name: "WS MSI101 - Engineering Economics and Finance",
  },
  {
    id: 1003,
    name: "WS PHI101 - Physics",
  },
  {
    id: 1004,
    name: "WS PHI102 - Physics Lab",
  },
  {
    id: 1005,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1006,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1007,
    name: "WS GLI101 - Earth Sciences",
  },
  {
    id: 1008,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1009,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1010,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 1011,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1012,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 1013,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 1014,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1015,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1016,
    name: "WS ESI101 - Environmental Sciences",
  },
  {
    id: 1017,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1018,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1019,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1020,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1021,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1022,
    name: "WS GLI101 - Earth Sciences",
  },
  {
    id: 1023,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1024,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1025,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 1026,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1027,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 1028,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 1029,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1030,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1031,
    name: "WS ESI101 - Environmental Sciences",
  },
  {
    id: 1032,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1033,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1034,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1035,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1036,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1037,
    name: "WS GLI101 - Earth Sciences",
  },
  {
    id: 1038,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1039,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1040,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 1041,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1042,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 1043,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 1044,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1045,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1046,
    name: "WS ESI101 - Environmental Sciences",
  },
  {
    id: 1047,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1048,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1049,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1050,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1051,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1052,
    name: "WS GLI101 - Earth Sciences",
  },
  {
    id: 1053,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1054,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1055,
    name: "WS MCI103 - Numerical Methods",
  },
  {
    id: 1056,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1057,
    name: "WS CSI101 - Computer Programming",
  },
  {
    id: 1058,
    name: "WS CSI102 - Computer Programming Lab",
  },
  {
    id: 1059,
    name: "WS CYI101 - Chemistry",
  },
  {
    id: 1060,
    name: "WS CYI102 - Chemistry Lab",
  },
  {
    id: 1061,
    name: "WS ESI101 - Environmental Sciences",
  },
  {
    id: 1062,
    name: "WS HSI101 - Communication Skills",
  },
  {
    id: 1063,
    name: "WS MCI102 - Mathematics - II",
  },
  {
    id: 1064,
    name: "WS MEI102 - Manufacturing Processes",
  },
  {
    id: 1065,
    name: "WS GLC591 - Research Methodology",
  },
  {
    id: 1066,
    name: "WS GLD501 - Essentials of Mineral Geostatistics",
  },
  {
    id: 1067,
    name: "WS GPC555 - Research Methodology and Statistics",
  },
  {
    id: 1068,
    name: "WS CYC540 - Research Methodology and Statistics",
  },
  {
    id: 1069,
    name: "WS CHC518 - Research Methodology",
  },
  {
    id: 1070,
    name: "WS CSC516 - Research Methodology",
  },
  {
    id: 1071,
    name: "WS CEC502 - Research Methodology and Statistics",
  },
  {
    id: 1072,
    name: "WS ECC581 - Research Methodology",
  },
  {
    id: 1073,
    name: "WS EEC550 - Research Methodology and Statistics for Electrical Engineering",
  },
  {
    id: 1074,
    name: "WS ESC526 - Research Methodology",
  },
  {
    id: 1075,
    name: "WS HSD507 - Introduction to Drama, Theatre and Performance Studies",
  },
  {
    id: 1076,
    name: "WS HSD521 - Vedanta Philosophy",
  },
  {
    id: 1077,
    name: "WS HSD551 - Psychological Data Science",
  },
  {
    id: 1078,
    name: "WS MCC500 - Research Methodology",
  },
  {
    id: 1079,
    name: "WS MCC500 - Research Methodology",
  },
  {
    id: 1080,
    name: "WS MEC591 - Research Methodology and Statistics",
  },
  {
    id: 1081,
    name: "WS PHC571 - Research Methodology and Statistics",
  },
  {
    id: 1082,
    name: "WS HSC507 - Textual Analysis",
  },
  {
    id: 1083,
    name: "WS HSC516 - Quantitative Techniques Lab",
  },
  {
    id: 1084,
    name: "WS HSC520 - Introduction to Digital Humanities",
  },
  {
    id: 1085,
    name: "WS HSC521 - Data Science Fundamentals",
  },
  {
    id: 1086,
    name: "WS HSC527 - Digital Ethics",
  },
  {
    id: 1087,
    name: "WS HSC532 - Social Research Lab",
  },
  {
    id: 1088,
    name: "WS HSD554 - Mixed Method Research",
  },
  {
    id: 1089,
    name: "WS HSO508 - Digital Society",
  },
  {
    id: 1090,
    name: "WS HSO513 - Environment, Development and Politics",
  },
];

export default courses;
