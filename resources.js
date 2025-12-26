const resources = [
  // Housing & Homelessness
  {
    category: "Housing & Homelessness",
    name: "Coordinated Entry (Carnegie Resource Center)",
    address: "3001 Oakes Ave, Everett, WA 98201",
    phone: "2-1-1 or (800) 223-8145",
    hours: "Mon-Fri 1pm-4pm (Sign-in 12:45pm)",
    services: "In-person intake for literally homeless.",
    notes: "wa211.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Housing Authority of Snohomish County (HASCO)",
    address: "12711 4th Ave West, Everett, WA 98204",
    phone: "(425) 290-8499",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Low Income Affordable Housing, Vouchers.",
    notes: "www.hasco.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Cocoon House",
    address: "Everett, WA 98201 (Call for specific access)",
    phone: "(425) 877-5171",
    hours: "",
    services: "Short/long-term housing for teens 12-24. LGBTQIA+ friendly.",
    notes: "cocoonhouse.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Domestic Violence Services Snohomish County",
    address: "Everett, WA (Confidential)",
    phone: "(425) 252-2873",
    hours: "24-hour crisis line",
    services: "Emergency shelter, legal advocacy.",
    notes: "dvs-snoco.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Everett Housing Authority",
    address: "Everett, WA 98201",
    phone: "(425) 258-9222",
    hours: "",
    services: "Low Income Affordable/Public Housing.",
    notes: "www.evha.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Housing Hope Everett",
    address: "Everett, WA",
    phone: "Call 2-1-1 for referral",
    hours: "",
    services: "Housing Assistance Programs.",
    notes: "www.housinghope.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "YWCA",
    address: "2802 Broadway, Everett, WA",
    phone: "(425) 258-2766",
    hours: "",
    services: "Emergency/transitional housing for women & families.",
    notes: "www.ywcaworks.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Seattle Housing Authority",
    address: "Seattle, WA 98119",
    phone: "(206) 615-3300",
    hours: "",
    services: "Low Income Affordable/Public Housing.",
    notes: "www.seattlehousing.org",
    transportation: ""
  },
  {
    category: "Housing & Homelessness",
    name: "Catholic Community Services",
    address: "Everett, WA",
    phone: "Call 2-1-1 for referral",
    hours: "",
    services: "Housing navigation, shelter, HEN, rapid rehousing.",
    notes: "ccsww.org",
    transportation: ""
  },

  // Home Ownership
  {
    category: "Home Ownership",
    name: "Housing Hope Team HomeBuilding",
    address: "5830 Evergreen Way, Everett",
    phone: "(425) 322-3723 x234",
    hours: "",
    services: "Sweat equity loans.",
    notes: "homes@housinghope.org",
    transportation: ""
  },
  {
    category: "Home Ownership",
    name: "Community Housing Improvement Program (CHIP)",
    address: "2930 Wetmore Ave, Ste 8B, Everett",
    phone: "(425) 257-8735",
    hours: "",
    services: "Low-interest loans for home repairs (Everett).",
    notes: "www.everettwa.gov/CHIP",
    transportation: ""
  },
  {
    category: "Home Ownership",
    name: "Homage - Minor Home Repair",
    address: "5026 196th St SW, Lynnwood",
    phone: "(425) 265-2222",
    hours: "",
    services: "Minor home repairs for safety/accessibility.",
    notes: "www.homage.org",
    transportation: ""
  },

  // Resource Centers
  {
    category: "Resource Center",
    name: "Carnegie Resource Center",
    address: "3001 Oakes Ave, Everett 98201",
    phone: "(425) 434-4680",
    hours: "",
    services: "Housing navigation, legal services, DSHS benefits.",
    notes: "pioneerhumanservices.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Arlington Community Resource Center",
    address: "103 E 3rd St (2nd floor), Arlington",
    phone: "(360) 322-6988",
    hours: "",
    services: "Basic needs: food, clothing, shelter, utilities.",
    notes: "www.voaww.org/acrc",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Lake Stevens Community Resource Center",
    address: "8021 20th St SE, Lake Stevens",
    phone: "(425) 405-2252",
    hours: "",
    services: "Food, clothing, shelter, housing help.",
    notes: "voaww.org/lscrc",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Stanwood Community Resource Center",
    address: "9612 271st St NW, Stanwood",
    phone: "(360) 629-5257",
    hours: "",
    services: "Food, utilities, housing, eviction help.",
    notes: "www.crc-sc.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Sky Valley Food Bank",
    address: "233 Sky River Pkwy, Monroe",
    phone: "(360) 794-7959",
    hours: "",
    services: "Utility bills & basic needs.",
    notes: "svfoodbank.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Interfaith Family Shelter",
    address: "Everett, WA",
    phone: "(425) 200-5121",
    hours: "",
    services: "Homeless Prevention program.",
    notes: "interfaithwa.org/prevention",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Bridgeways",
    address: "4716 61st Street NE, Marysville",
    phone: "(425) 513-8213",
    hours: "",
    services: "Case management, rental assistance, job training.",
    notes: "bridgeways.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Saint Vincent De Paul",
    address: "Everett, WA",
    phone: "(425) 355-3504",
    hours: "",
    services: "Financial assistance, gas vouchers, prescription aid.",
    notes: "svdpnsc.com",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Hand In Hand",
    address: "9502 19th Ave SE, Ste F, Everett",
    phone: "(425) 374-2461",
    hours: "",
    services: "Basic needs, food resources.",
    notes: "handinhandkids.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Take the Next Step",
    address: "202 S Sams St, Monroe",
    phone: "(360) 794-1022",
    hours: "",
    services: "Basic needs, job coaching, gas cards.",
    notes: "www.ttns.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Linc Northwest / The Center at North Marysville",
    address: "1424 172nd St NE, Marysville",
    phone: "(360) 654-4205",
    hours: "",
    services: "Substance prevention, mentoring, mental health, clothing.",
    notes: "www.lincnw.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Holy Cross Outreach",
    address: "6915 SR 92, Lake Stevens",
    phone: "(360) 691-2636",
    hours: "",
    services: "Food, utility/rent bills (Lake Stevens/Granite Falls).",
    notes: "hccclakestevens.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Lutheran Community Services NW",
    address: "2500 Hewitt Ave, Ste 300, Everett",
    phone: "(425) 521-5811",
    hours: "",
    services: "Housing, mental health, DSHS apps, basic needs.",
    notes: "lcsnw.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "The C-Suite Center for Hope",
    address: "Marysville, WA",
    phone: "(425) 626-5141",
    hours: "",
    services: "Resource navigation for cancer patients.",
    notes: "www.c-suitehope.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Sound Pathways",
    address: "1625 E Marine View Dr, Ste 4, Everett",
    phone: "(425) 258-2977",
    hours: "",
    services: "Substance use intervention, free clothing/hygiene.",
    notes: "soundpathways.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "The Village on Casino Road",
    address: "14 E Casino Rd, Everett",
    phone: "(425) 610-3856",
    hours: "",
    services: "Utilities, food, counseling, free phones.",
    notes: "villageoncasinoroad.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Peer Seattle",
    address: "1520 Bellevue Ave, Ste 100, Seattle 98122",
    phone: "(206) 322-2437",
    hours: "",
    services: "Peer coaching, LGBTQIA2S+ priority.",
    notes: "www.peerseattle.org",
    transportation: ""
  },
  {
    category: "Resource Center",
    name: "Bethany Compassion Center",
    address: "1421 Broadway, Everett",
    phone: "(425) 512-9696",
    hours: "",
    services: "Navigation, financial assistance, laundry, showers.",
    notes: "bethanycompassioncenter.com",
    transportation: ""
  },

  // DSHS Offices
  {
    category: "DSHS Office",
    name: "DSHS Arlington",
    address: "3704 172nd St NE Ste P, Arlington",
    phone: "877-501-2233",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Apply for food/cash benefits.",
    notes: "www.dshs.wa.gov",
    transportation: ""
  },
  {
    category: "DSHS Office",
    name: "DSHS Everett",
    address: "840 N Broadway Ste 200, Everett",
    phone: "877-501-2233",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Apply for food/cash benefits.",
    notes: "www.dshs.wa.gov",
    transportation: ""
  },
  {
    category: "DSHS Office",
    name: "DSHS Lynnwood",
    address: "20311 52nd Ave W Ste 100, Lynnwood",
    phone: "877-501-2233",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Apply for food/cash benefits.",
    notes: "www.dshs.wa.gov",
    transportation: ""
  },
  {
    category: "DSHS Office",
    name: "DSHS Monroe",
    address: "19705 State Route 2, Ste 100, Monroe",
    phone: "877-501-2233",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Apply for food/cash benefits.",
    notes: "www.dshs.wa.gov",
    transportation: ""
  },

  // Senior Services
  {
    category: "Senior Services",
    name: "Homage",
    address: "5026 196th St SW, Lynnwood",
    phone: "(800) 422-2024",
    hours: "",
    services: "Resources for older adults & disabilities.",
    notes: "homage.org",
    transportation: ""
  },
  {
    category: "Senior Services",
    name: "Sunrise Services Senior Housing",
    address: "7100 Evergreen Way, Everett",
    phone: "(425) 212-4200",
    hours: "",
    services: "Housing placement for elderly/disabled.",
    notes: "www.sunriseservicesinc.com",
    transportation: ""
  },

  // Disability Resources
  {
    category: "Disability Resources",
    name: "Arc of Snohomish County",
    address: "127 E Intercity Ave, Ste C, Everett",
    phone: "(425) 258-2459",
    hours: "",
    services: "Support for I/DD and families.",
    notes: "www.arcsno.org",
    transportation: ""
  },
  {
    category: "Disability Resources",
    name: "MSHH Donor Closet",
    address: "409 Howell Way, Edmonds",
    phone: "(425) 712-1807",
    hours: "",
    services: "Low-cost medical/mobility equipment.",
    notes: "www.mshh-donorcloset.com",
    transportation: ""
  },
  {
    category: "Disability Resources",
    name: "Center for Independence",
    address: "502 State Ave, Ste 102, Marysville",
    phone: "(360) 393-3890",
    hours: "",
    services: "Independent living skills, peer support.",
    notes: "www.cfi-wa.org",
    transportation: ""
  },

  // Immigrant Resources
  {
    category: "Immigrant Resources",
    name: "Refugee and Immigrant Services NW",
    address: "840 N Broadway, Ste 200, Everett",
    phone: "(425) 388-9307",
    hours: "",
    services: "Legal immigration & naturalization services.",
    notes: "risnw.org",
    transportation: ""
  },
  {
    category: "Immigrant Resources",
    name: "Lutheran Community Services NW (Safe Route)",
    address: "911 Stewart St, Seattle 98101",
    phone: "(206) 694-5742",
    hours: "",
    services: "Legal services for refugees & immigrants.",
    notes: "lcsnw.org/safe-route",
    transportation: ""
  },
  {
    category: "Immigrant Resources",
    name: "Muslim Association of Puget Sound (MAPS)",
    address: "5010 Grove St, Marysville",
    phone: "(425) 861-9555",
    hours: "",
    services: "Rental assistance, food, legal clinic.",
    notes: "mapsredmond.org",
    transportation: ""
  },

  // Youth Resources
  {
    category: "Youth Resources",
    name: "U-Turn at Cocoon House",
    address: "3530 Colby Ave, Everett",
    phone: "(425) 259-5802",
    hours: "",
    services: "Drop-in (ages 12-24). Showers, laundry, food.",
    notes: "cocoonhouse.org",
    transportation: ""
  },
  {
    category: "Youth Resources",
    name: "SnoCo Connect",
    address: "301 Smith Ave, 4th floor, Everett",
    phone: "(425) 374-8351",
    hours: "",
    services: "Support for 14-24 year olds.",
    notes: "snococonnect.org",
    transportation: ""
  },
  {
    category: "Youth Resources",
    name: "Lambert House",
    address: "1818 15th Ave, Seattle 98102",
    phone: "(206) 322-2515",
    hours: "",
    services: "LGBTQIA2S+ youth (10-22).",
    notes: "www.lamberthouse.org",
    transportation: ""
  },

  // Shelter
  {
    category: "Shelter",
    name: "Cocoon House Central",
    address: "Everett, WA",
    phone: "(425) 877-5171",
    hours: "",
    services: "Teens under 18.",
    notes: "Call 2-1-1",
    transportation: ""
  },
  {
    category: "Shelter",
    name: "Esther's Place",
    address: "Everett, WA",
    phone: "(425) 512-0749",
    hours: "",
    services: "Women & children. Day services available.",
    notes: "Call 2-1-1",
    transportation: ""
  },
  {
    category: "Shelter",
    name: "Everett Gospel Mission Women & Children",
    address: "Everett, WA",
    phone: "(425) 740-2501",
    hours: "",
    services: "Women and children only.",
    notes: "Call 2-1-1",
    transportation: ""
  },
  {
    category: "Shelter",
    name: "Everett Gospel Mission Men's Shelter",
    address: "Everett, WA",
    phone: "(425) 740-2550",
    hours: "",
    services: "Men only.",
    notes: "Call 2-1-1",
    transportation: ""
  },
  {
    category: "Shelter",
    name: "YWCA Pathways for Women",
    address: "Lynnwood, WA",
    phone: "(425) 774-9843",
    hours: "",
    services: "Women and children only.",
    notes: "Call 2-1-1",
    transportation: ""
  },
  {
    category: "Cold Weather Shelter",
    name: "South Snohomish Emergency Shelter",
    address: "17620 60th Ave W, Lynnwood (Maple Park Church)",
    phone: "(206) 743-9843",
    hours: "Open Nov-March when freezing.",
    services: "Transport from Lynnwood City Hall.",
    notes: "WeAllBelong.org",
    transportation: ""
  },

  // Safe Parking
  {
    category: "Safe Parking",
    name: "Cars to Housing (Interfaith Family Shelter)",
    address: "Everett, WA",
    phone: "(425) 200-5121",
    hours: "",
    services: "Families with children. Apply online.",
    notes: "interfaithwa.org/cars-to-housing",
    transportation: ""
  },
  {
    category: "Safe Parking",
    name: "Car Camp (Edmonds UU Church)",
    address: "8109 224th St SW, Edmonds 98026",
    phone: "(425) 778-0373",
    hours: "",
    services: "Women & families with kids.",
    notes: "euuc.org",
    transportation: ""
  },
  {
    category: "Safe Parking",
    name: "St. Jude Catholic Church",
    address: "10526 166th Ave NE, Redmond 98052",
    phone: "(425) 658-4982",
    hours: "",
    services: "Adults 18+.",
    notes: "safeparking@stjude-redmond.org",
    transportation: ""
  },

  // Showers & Laundry
  {
    category: "Showers & Laundry",
    name: "Bethany Compassion Center",
    address: "1421 Broadway, Everett",
    phone: "(425) 512-9696",
    hours: "Thurs 3-6pm & Sat 9am-12pm.",
    services: "Showers & Laundry",
    notes: "bethanycompassioncenter.com",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "Washed Mobile (Everett Transit)",
    address: "3201 Smith Ave, Everett",
    phone: "",
    hours: "Daily 7:30am-6pm",
    services: "Laundry.",
    notes: "www.washedmobile.com",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "Washed Mobile (Port of Everett)",
    address: "607 10th St, Everett",
    phone: "",
    hours: "Daily 6am-11pm",
    services: "Laundry.",
    notes: "www.washedmobile.com",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "Shower to the People (Everett)",
    address: "2936 Rockefeller Ave, Everett",
    phone: "",
    hours: "Wed 4pm",
    services: "Free showers.",
    notes: "showertothepeople.yourwebsitespace.com",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "Shower to the People (Lynnwood)",
    address: "6215 196th St SW, Lynnwood",
    phone: "",
    hours: "Sat 7:30am",
    services: "Free showers.",
    notes: "showertothepeople.yourwebsitespace.com",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "Everett Gospel Mission",
    address: "3711 Smith Ave, Everett",
    phone: "(425) 740-2550",
    hours: "Women 11:30am-1pm; Men 1pm-4pm.",
    services: "Showers",
    notes: "egmission.org",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "Lynnwood Shower Site",
    address: "19726 65th Ave W, Lynnwood",
    phone: "",
    hours: "Mon-Sat 10am-5pm",
    services: "Free showers.",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Showers & Laundry",
    name: "VOAWW Sky Valley",
    address: "617 1st St, Sultan",
    phone: "",
    hours: "Mon & Wed 10am-2pm",
    services: "Free showers.",
    notes: "N/A",
    transportation: ""
  },

  // Utilities
  {
    category: "Utilities",
    name: "St. Vincent De Paul Project PRIDE",
    address: "6424 Broadway, Everett 98203",
    phone: "(425) 374-1243",
    hours: "",
    services: "Grants for PUD disconnect notices.",
    notes: "svdpnsc.com/help",
    transportation: ""
  },
  {
    category: "Utilities",
    name: "Snohomish PUD",
    address: "N/A",
    phone: "(425) 783-1000",
    hours: "",
    services: "Discounts up to 60%.",
    notes: "www.snopud.com",
    transportation: ""
  },

  // Legal
  {
    category: "Legal",
    name: "Columbia Legal Services",
    address: "N/A",
    phone: "(800) 542-0794",
    hours: "",
    services: "Legal rights for low income.",
    notes: "www.columbialegal.org",
    transportation: ""
  },
  {
    category: "Legal",
    name: "Snohomish County Legal Services",
    address: "N/A",
    phone: "(425) 258-9283",
    hours: "",
    services: "Free legal aid for poverty.",
    notes: "www.snocolegal.org",
    transportation: ""
  },
  {
    category: "Legal",
    name: "Northwest Justice Project",
    address: "N/A",
    phone: "(888) 201-1012",
    hours: "",
    services: "Civil legal assistance.",
    notes: "www.nwjustice.org",
    transportation: ""
  },
  {
    category: "Legal",
    name: "Lavender Rights Project",
    address: "911 E Pike St, #314, Seattle 98122",
    phone: "(253) 325-1416",
    hours: "",
    services: "Black trans women/femmes focus.",
    notes: "lavenderrightsproject.org",
    transportation: ""
  },

  // Food Bank
  {
    category: "Food Bank",
    name: "Arlington Community Food Bank",
    address: "19118 63rd Ave NE, Arlington",
    phone: "(360) 435-1631",
    hours: "Mon 5-6pm, Wed 5:30-6:30pm, Fri 12-1pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Canyon Hills Community Church",
    address: "22125 17th Ave SE, Ste 111, Bothell",
    phone: "(425) 488-4121",
    hours: "Tue 11:30-1:30 & 5-6:30.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Darrington Food Pantry",
    address: "1045 Montague Ave, Darrington",
    phone: "(360) 436-0646",
    hours: "Mon 10-12, 1st/2nd Wed 10-12.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Edmonds Food Bank",
    address: "828 Caspers St, Edmonds",
    phone: "(425) 778-5833",
    hours: "Mon 3-5:30, Tue 9-12.",
    services: "Food Bank",
    notes: "edmondsfoodbank.org",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Bethel Baptist Church",
    address: "2625 Hoyt Ave, Everett",
    phone: "(425) 252-0249",
    hours: "Tue-Fri 10am-4pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Trinity Lutheran Aid Bank",
    address: "2324 Lombard Ave, Everett",
    phone: "(425) 252-1239",
    hours: "Fri 10:30am-12:30pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Salvation Army Food Bank",
    address: "2525 Rucker Ave, Everett",
    phone: "(425) 259-8129",
    hours: "Mon/Fri 10-1, Tue-Thu 10-3.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Everett Food Bank (North)",
    address: "1230 Broadway Ave, Everett",
    phone: "(425) 259-3191",
    hours: "Mon/Wed/Thu 10-2; 2nd/4th Tue 3-6.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Everett Food Bank (South)",
    address: "805 W Casino Rd, Everett",
    phone: "(425) 259-3191",
    hours: "1st/3rd Tue 3-5pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Holy Cross Catholic Church",
    address: "6915 SR 92, Lake Stevens",
    phone: "(360) 691-2636",
    hours: "Tue 10-12 & 2-4.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Lake Stevens Food Bank",
    address: "2111 117th Ave NE, Lake Stevens",
    phone: "(425) 334-3430",
    hours: "Thu 1:30-6pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Lynnwood Food Bank",
    address: "5320 176th St SW, Lynnwood",
    phone: "(425) 745-1635",
    hours: "Wed 11-5, Fri 10-1.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Marysville Community Food Bank",
    address: "4150 88th St NE, Marysville",
    phone: "(360) 658-1054",
    hours: "Mon/Fri 9-11, Tue 3-6.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Sky Valley Food Bank",
    address: "233 Sky River Parkway, Monroe",
    phone: "(360) 794-7959",
    hours: "Wed 2pm-5pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Mill Creek Food Bank",
    address: "4326 148th St SE, Mill Creek",
    phone: "(425) 316-3333",
    hours: "Mon/Thu 4-7pm.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Snohomish Community Food Bank",
    address: "1330 Ferguson Park Rd, Snohomish",
    phone: "(360) 568-7993",
    hours: "Tue 3-6, Fri 10-1.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Food Bank",
    name: "Sultan Food Bank",
    address: "703 1st St, Sultan",
    phone: "(360) 793-2400",
    hours: "Thu 5-7, Fri 9:30-12.",
    services: "Food Bank",
    notes: "N/A",
    transportation: ""
  },

  // Health
  {
    category: "Health",
    name: "Community Health Center (Arlington)",
    address: "326 S Stillaguamish Ave, Arlington",
    phone: "(360) 572-5400",
    hours: "",
    services: "Medical, Dental, Pharmacy.",
    notes: "chcsno.org",
    transportation: ""
  },
  {
    category: "Health",
    name: "Community Health Center (Edmonds)",
    address: "23320 Hwy 99, Edmonds",
    phone: "(425) 640-5500",
    hours: "",
    services: "Medical, Dental, Pharmacy.",
    notes: "chcsno.org",
    transportation: ""
  },
  {
    category: "Health",
    name: "Community Health Center (Everett Central)",
    address: "4201 Rucker Ave, Everett",
    phone: "(425) 382-4000",
    hours: "",
    services: "Medical, Dental, Pharmacy.",
    notes: "chcsno.org",
    transportation: ""
  },
  {
    category: "Health",
    name: "Community Health Center (Lynnwood)",
    address: "4111 194th St SW, Lynnwood",
    phone: "(425) 835-5200",
    hours: "",
    services: "Medical, Dental, Pharmacy.",
    notes: "chcsno.org",
    transportation: ""
  },
  {
    category: "Health",
    name: "Safe Harbor Free Clinic",
    address: "7209 265th St NW, Ste 203/204, Stanwood",
    phone: "(425) 870-7384",
    hours: "",
    services: "Free healthcare for uninsured.",
    notes: "safeharborfreeclinic.org",
    transportation: ""
  },
  {
    category: "Health",
    name: "Lahai Health",
    address: "19820 Scriber Lake Rd, Ste 2, Lynnwood",
    phone: "(206) 363-4105",
    hours: "",
    services: "Medical, Dental, Mental Health.",
    notes: "lahai.org",
    transportation: ""
  },
  {
    category: "Health",
    name: "Sea Mar Community Health Centers",
    address: "1509 32nd St, Everett",
    phone: "(425) 312-0202",
    hours: "",
    services: "Community health.",
    notes: "seamar.org",
    transportation: ""
  },

  // Mental Health
  {
    category: "Mental Health",
    name: "Providence Behavioral Health Urgent Care",
    address: "1330 Rockefeller, Ste 140, Everett",
    phone: "(425) 261-4210",
    hours: "",
    services: "Urgent care for adults 18+.",
    notes: "providence.org",
    transportation: ""
  },
  {
    category: "Mental Health",
    name: "Marysville Bridgeways Clubhouse",
    address: "4716 61st St NE, Marysville",
    phone: "(425) 513-8213",
    hours: "",
    services: "Mental illness support.",
    notes: "bridgeways.org",
    transportation: ""
  },

  // Substance Use
  {
    category: "Substance Use",
    name: "Everett Recovery Café",
    address: "1212 California St, Everett",
    phone: "(425) 258-5630",
    hours: "",
    services: "Drug/alcohol free community.",
    notes: "everettrecoverycafe.org",
    transportation: ""
  },
  {
    category: "Substance Use",
    name: "Snohomish County Diversion Center",
    address: "1818 Wall St, Everett",
    phone: "(425) 471-6100",
    hours: "",
    services: "Shelter for homeless with substance use.",
    notes: "N/A",
    transportation: ""
  },
  {
    category: "Substance Use",
    name: "Ideal Option",
    address: "4301 Hoyt Ave, Everett",
    phone: "(877) 522-1275",
    hours: "",
    services: "Medication-assisted treatment.",
    notes: "idealoption.com",
    transportation: ""
  }
];
