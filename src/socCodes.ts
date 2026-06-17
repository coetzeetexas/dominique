export interface SOCEntry {
  code: string;
  title: string;
  level: 'major' | 'minor';
}

export const SOC_CODES: SOCEntry[] = [
  // ── 11 Management ────────────────────────────────────────────────────────────
  { code: '11-0000', title: 'Management Occupations', level: 'major' },
  { code: '11-1000', title: 'Top Executives', level: 'minor' },
  { code: '11-2000', title: 'Advertising, Marketing, Promotions, Public Relations, and Sales Managers', level: 'minor' },
  { code: '11-3000', title: 'Operations Specialties Managers', level: 'minor' },
  { code: '11-9000', title: 'Other Management Occupations', level: 'minor' },

  // ── 13 Business & Financial ───────────────────────────────────────────────────
  { code: '13-0000', title: 'Business and Financial Operations Occupations', level: 'major' },
  { code: '13-1000', title: 'Business Operations Specialists', level: 'minor' },
  { code: '13-2000', title: 'Financial Specialists', level: 'minor' },

  // ── 15 Computer & Mathematical ────────────────────────────────────────────────
  { code: '15-0000', title: 'Computer and Mathematical Occupations', level: 'major' },
  { code: '15-1200', title: 'Computer Occupations', level: 'minor' },
  { code: '15-2000', title: 'Mathematical Science Occupations', level: 'minor' },

  // ── 17 Architecture & Engineering ────────────────────────────────────────────
  { code: '17-0000', title: 'Architecture and Engineering Occupations', level: 'major' },
  { code: '17-1000', title: 'Architects, Surveyors, and Cartographers', level: 'minor' },
  { code: '17-2000', title: 'Engineers', level: 'minor' },
  { code: '17-3000', title: 'Drafters, Engineering Technicians, and Mapping Technicians', level: 'minor' },

  // ── 19 Life, Physical & Social Science ───────────────────────────────────────
  { code: '19-0000', title: 'Life, Physical, and Social Science Occupations', level: 'major' },
  { code: '19-1000', title: 'Life Scientists', level: 'minor' },
  { code: '19-2000', title: 'Physical Scientists', level: 'minor' },
  { code: '19-3000', title: 'Social Scientists and Related Workers', level: 'minor' },
  { code: '19-4000', title: 'Life, Physical, and Social Science Technicians', level: 'minor' },

  // ── 21 Community & Social Service ────────────────────────────────────────────
  { code: '21-0000', title: 'Community and Social Service Occupations', level: 'major' },
  { code: '21-1000', title: 'Counselors, Social Workers, and Other Community and Social Service Specialists', level: 'minor' },
  { code: '21-2000', title: 'Religious Workers', level: 'minor' },

  // ── 23 Legal ──────────────────────────────────────────────────────────────────
  { code: '23-0000', title: 'Legal Occupations', level: 'major' },
  { code: '23-1000', title: 'Lawyers, Judges, and Related Workers', level: 'minor' },
  { code: '23-2000', title: 'Legal Support Workers', level: 'minor' },

  // ── 25 Educational Instruction & Library ─────────────────────────────────────
  { code: '25-0000', title: 'Educational Instruction and Library Occupations', level: 'major' },
  { code: '25-1000', title: 'Postsecondary Teachers', level: 'minor' },
  { code: '25-2000', title: 'Preschool, Elementary, Middle, Secondary, and Special Education Teachers', level: 'minor' },
  { code: '25-3000', title: 'Other Teachers and Instructors', level: 'minor' },
  { code: '25-4000', title: 'Librarians, Curators, and Archivists', level: 'minor' },
  { code: '25-9000', title: 'Other Educational Instruction and Library Occupations', level: 'minor' },

  // ── 27 Arts, Design, Entertainment, Sports & Media ───────────────────────────
  { code: '27-0000', title: 'Arts, Design, Entertainment, Sports, and Media Occupations', level: 'major' },
  { code: '27-1000', title: 'Art and Design Workers', level: 'minor' },
  { code: '27-2000', title: 'Entertainers and Performers, Sports and Related Workers', level: 'minor' },
  { code: '27-3000', title: 'Media and Communication Workers', level: 'minor' },
  { code: '27-4000', title: 'Media and Communication Equipment Workers', level: 'minor' },

  // ── 29 Healthcare Practitioners & Technical ───────────────────────────────────
  { code: '29-0000', title: 'Healthcare Practitioners and Technical Occupations', level: 'major' },
  { code: '29-1000', title: 'Health Diagnosing and Treating Practitioners', level: 'minor' },
  { code: '29-2000', title: 'Health Technologists and Technicians', level: 'minor' },
  { code: '29-9000', title: 'Other Healthcare Practitioners and Technical Occupations', level: 'minor' },

  // ── 31 Healthcare Support ────────────────────────────────────────────────────
  { code: '31-0000', title: 'Healthcare Support Occupations', level: 'major' },
  { code: '31-1000', title: 'Home Health Aides, Nursing Assistants, and Psychiatric Aides', level: 'minor' },
  { code: '31-2000', title: 'Occupational Therapy and Physical Therapist Assistants and Aides', level: 'minor' },
  { code: '31-9000', title: 'Other Healthcare Support Occupations', level: 'minor' },

  // ── 33 Protective Service ────────────────────────────────────────────────────
  { code: '33-0000', title: 'Protective Service Occupations', level: 'major' },
  { code: '33-1000', title: 'First-Line Supervisors of Protective Service Workers', level: 'minor' },
  { code: '33-2000', title: 'Firefighting and Prevention Workers', level: 'minor' },
  { code: '33-3000', title: 'Law Enforcement Workers', level: 'minor' },
  { code: '33-9000', title: 'Other Protective Service Workers', level: 'minor' },

  // ── 35 Food Preparation & Serving ───────────────────────────────────────────
  { code: '35-0000', title: 'Food Preparation and Serving Related Occupations', level: 'major' },
  { code: '35-1000', title: 'Supervisors of Food Preparation and Serving Workers', level: 'minor' },
  { code: '35-2000', title: 'Cooks and Food Preparation Workers', level: 'minor' },
  { code: '35-3000', title: 'Food and Beverage Serving Workers', level: 'minor' },
  { code: '35-9000', title: 'Other Food Preparation and Serving Related Workers', level: 'minor' },

  // ── 37 Building & Grounds Cleaning ───────────────────────────────────────────
  { code: '37-0000', title: 'Building and Grounds Cleaning and Maintenance Occupations', level: 'major' },
  { code: '37-1000', title: 'Supervisors of Building and Grounds Cleaning and Maintenance Workers', level: 'minor' },
  { code: '37-2000', title: 'Building Cleaning and Pest Control Workers', level: 'minor' },
  { code: '37-3000', title: 'Grounds Maintenance Workers', level: 'minor' },

  // ── 39 Personal Care & Service ───────────────────────────────────────────────
  { code: '39-0000', title: 'Personal Care and Service Occupations', level: 'major' },
  { code: '39-1000', title: 'Supervisors of Personal Care and Service Workers', level: 'minor' },
  { code: '39-2000', title: 'Animal Care and Service Workers', level: 'minor' },
  { code: '39-3000', title: 'Entertainment Attendants and Related Workers', level: 'minor' },
  { code: '39-4000', title: 'Funeral Service Workers', level: 'minor' },
  { code: '39-5000', title: 'Personal Appearance Workers', level: 'minor' },
  { code: '39-6000', title: 'Baggage Porters, Bellhops, and Concierges', level: 'minor' },
  { code: '39-7000', title: 'Tour and Travel Guides', level: 'minor' },
  { code: '39-9000', title: 'Other Personal Care and Service Workers', level: 'minor' },

  // ── 41 Sales & Related ───────────────────────────────────────────────────────
  { code: '41-0000', title: 'Sales and Related Occupations', level: 'major' },
  { code: '41-1000', title: 'Supervisors of Sales Workers', level: 'minor' },
  { code: '41-2000', title: 'Retail Sales Workers', level: 'minor' },
  { code: '41-3000', title: 'Sales Representatives, Services', level: 'minor' },
  { code: '41-4000', title: 'Sales Representatives, Wholesale and Manufacturing', level: 'minor' },
  { code: '41-9000', title: 'Other Sales and Related Workers', level: 'minor' },

  // ── 43 Office & Administrative Support ───────────────────────────────────────
  { code: '43-0000', title: 'Office and Administrative Support Occupations', level: 'major' },
  { code: '43-1000', title: 'Supervisors of Office and Administrative Support Workers', level: 'minor' },
  { code: '43-2000', title: 'Communications Equipment Operators', level: 'minor' },
  { code: '43-3000', title: 'Financial Clerks', level: 'minor' },
  { code: '43-4000', title: 'Information and Record Clerks', level: 'minor' },
  { code: '43-5000', title: 'Material Recording, Scheduling, Dispatching, and Distributing Workers', level: 'minor' },
  { code: '43-6000', title: 'Secretaries and Administrative Assistants', level: 'minor' },
  { code: '43-9000', title: 'Other Office and Administrative Support Workers', level: 'minor' },

  // ── 45 Farming, Fishing & Forestry ───────────────────────────────────────────
  { code: '45-0000', title: 'Farming, Fishing, and Forestry Occupations', level: 'major' },
  { code: '45-1000', title: 'Supervisors of Farming, Fishing, and Forestry Workers', level: 'minor' },
  { code: '45-2000', title: 'Agricultural Workers', level: 'minor' },
  { code: '45-3000', title: 'Fishing and Hunting Workers', level: 'minor' },
  { code: '45-4000', title: 'Forest, Conservation, and Logging Workers', level: 'minor' },

  // ── 47 Construction & Extraction ─────────────────────────────────────────────
  { code: '47-0000', title: 'Construction and Extraction Occupations', level: 'major' },
  { code: '47-1000', title: 'Supervisors of Construction and Extraction Workers', level: 'minor' },
  { code: '47-2000', title: 'Construction Trades Workers', level: 'minor' },
  { code: '47-3000', title: 'Helpers, Construction Trades', level: 'minor' },
  { code: '47-4000', title: 'Other Construction and Related Workers', level: 'minor' },
  { code: '47-5000', title: 'Extraction Workers', level: 'minor' },

  // ── 49 Installation, Maintenance & Repair ────────────────────────────────────
  { code: '49-0000', title: 'Installation, Maintenance, and Repair Occupations', level: 'major' },
  { code: '49-1000', title: 'Supervisors of Installation, Maintenance, and Repair Workers', level: 'minor' },
  { code: '49-2000', title: 'Electrical and Electronic Equipment Mechanics, Installers, and Repairers', level: 'minor' },
  { code: '49-3000', title: 'Vehicle and Mobile Equipment Mechanics, Installers, and Repairers', level: 'minor' },
  { code: '49-4000', title: 'Other Installation, Maintenance, and Repair Occupations', level: 'minor' },

  // ── 51 Production ────────────────────────────────────────────────────────────
  { code: '51-0000', title: 'Production Occupations', level: 'major' },
  { code: '51-1000', title: 'Supervisors of Production Workers', level: 'minor' },
  { code: '51-2000', title: 'Assemblers and Fabricators', level: 'minor' },
  { code: '51-3000', title: 'Food Processing Workers', level: 'minor' },
  { code: '51-4000', title: 'Metal Workers and Plastic Workers', level: 'minor' },
  { code: '51-5000', title: 'Printing Workers', level: 'minor' },
  { code: '51-6000', title: 'Textile, Apparel, and Furnishings Workers', level: 'minor' },
  { code: '51-7000', title: 'Woodworkers', level: 'minor' },
  { code: '51-8000', title: 'Plant and System Operators', level: 'minor' },
  { code: '51-9000', title: 'Other Production Occupations', level: 'minor' },

  // ── 53 Transportation & Material Moving ──────────────────────────────────────
  { code: '53-0000', title: 'Transportation and Material Moving Occupations', level: 'major' },
  { code: '53-1000', title: 'Supervisors of Transportation and Material Moving Workers', level: 'minor' },
  { code: '53-2000', title: 'Air Transportation Workers', level: 'minor' },
  { code: '53-3000', title: 'Motor Vehicle Operators', level: 'minor' },
  { code: '53-4000', title: 'Rail Transportation Workers', level: 'minor' },
  { code: '53-5000', title: 'Water Transportation Workers', level: 'minor' },
  { code: '53-6000', title: 'Other Transportation Workers', level: 'minor' },
  { code: '53-7000', title: 'Material Moving Workers', level: 'minor' },

  // ── 55 Military ───────────────────────────────────────────────────────────────
  { code: '55-0000', title: 'Military Specific Occupations', level: 'major' },
  { code: '55-1000', title: 'Military Officer Special and Tactical Operations Leaders', level: 'minor' },
  { code: '55-2000', title: 'First-Line Enlisted Military Supervisors', level: 'minor' },
  { code: '55-3000', title: 'Military Enlisted Tactical Operations and Air/Weapons Specialists', level: 'minor' },
];

export const SOC_MAJORS = SOC_CODES.filter(c => c.level === 'major');

export function getMajorGroup(code: string): SOCEntry | undefined {
  const prefix = code.slice(0, 2);
  return SOC_MAJORS.find(m => m.code.startsWith(prefix));
}
