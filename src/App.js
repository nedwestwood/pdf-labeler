import React, { useState, useEffect } from "react";

// Highlight colors for each primary category
const highlightColors = {
  Buildings: "#FFD700", // gold
  Events: "#90EE90", // lightgreen
  FFI_Influence_on_Campus_Culture: "#87CEFA", // light sky blue
  FFI_Interations_with_uni_members: "#FFB6C1", // light pink
  Financial_relationship: "#FFA07A", // light salmon
  Other_high_level_contracts: "#DDA0DD", // plum
  Personnel_overlap: "#ADD8E6" // light blue
};

// Category tree with form definitions
const categoryTree = {
  Buildings: {
    "Buildings funded by FFI": {
      "(none)": {
        code: "CF1_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Name of Building", key: "buildingName", type: "text" },
          { label: "Amount donated", key: "amount", type: "text" },
          { label: "Donation currency", key: "currency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Buildings named after FFI": {
      "(none)": {
        code: "CF1_2",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Name of Building", key: "buildingName", type: "text" },
          { label: "Amount donated", key: "amount", type: "text" },
          { label: "Donation currency", key: "currency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other Buildings": {
      "(none)": {
        code: "CF1_3",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Name of Building", key: "buildingName", type: "text" },
          { label: "Amount donated", key: "amount", type: "text" },
          { label: "Donation currency", key: "currency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI office space on campus": {
      "(none)": {
        code: "CF2_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "How much office space?", key: "officeSpace", type: "text" },
          { label: "Amount donated", key: "amount", type: "text" },
          { label: "Donation currency", key: "currency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
  Events: {
    "FFI participation in events (panels, lectures, speeches)": {
      "(none)": {
        code: "CF3_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of Event", key: "eventTitle", type: "text" },
          { label: "Event Location", key: "eventLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Number of FFI personnel attending?", key: "personnelCount", type: "text" },
          { label: "Names of FFI personnel attending", key: "personnelNames", type: "textarea" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI sponsored field trips": {
      "(none)": {
        code: "CF3_2",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of Event", key: "eventTitle", type: "text" },
          { label: "Event Location", key: "eventLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Number of FFI personnel attending?", key: "personnelCount", type: "text" },
          { label: "Names of FFI personnel attending", key: "personnelNames", type: "textarea" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni hosted training for FFI personnel": {
      "(none)": {
        code: "CF3_3",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of Event", key: "eventTitle", type: "text" },
          { label: "Event Location", key: "eventLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Number of FFI personnel attending?", key: "personnelCount", type: "text" },
          { label: "Names of FFI personnel attending", key: "personnelNames", type: "textarea" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other FFI hosted events": {
      "(none)": {
        code: "CF3_4",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of Event", key: "eventTitle", type: "text" },
          { label: "Event Location", key: "eventLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Number of FFI personnel attending?", key: "personnelCount", type: "text" },
          { label: "Names of FFI personnel attending", key: "personnelNames", type: "textarea" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
  FFI_Influence_on_Campus_Culture: {
    "FFI ads": {
      "(none)": {
        code: "CF4_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/Ad Description", key: "adTitle", type: "text" },
          { label: "Amount funded?", key: "fundingAmount", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Link to image of ad?", key: "imageLink", type: "text" },
          { label: "Ad location on campus?", key: "adLocation", type: "textarea" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI sponsored sports teams": {
      "(none)": {
        code: "CF5_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Which sport", key: "sportName", type: "text" },
          { label: "Team name?", key: "teamName", type: "text" },
          { label: "Amount funded?", key: "fundAmount", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other relevant information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other influences": {
      "(none)": {
        code: "CF6_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/Description of other influence", key: "otherTitle", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
  FFI_Interations_with_uni_members: {
    "Curricula advising": {
      "(none)": {
        code: "CF7_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Level of curricula (undergrad, grad, etc.)", key: "curriculaLevel", type: "text" },
          { label: "Department?", key: "departmentIn", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI memorabilia": {
      "(none)": {
        code: "CF8_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Items given?", key: "itemsGiven", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI sponsored fellowships, scholarships, and other awards": {
      "(none)": {
        code: "CF9_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Names/title of sponsored fellowship/scholarship/award?", key: "awardTitle", type: "text" },
          { label: "Funding amount per fellowship/scholarship/award?", key: "fundAmount", type: "text" },
          { label: "Funding currency?", key: "fundCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI sponsored student organizations": {
      "(none)": {
        code: "CF10_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Names of student organization?", key: "orgName", type: "text" },
          { label: "Amount funded?", key: "fundAmount", type: "text" },
          { label: "Funding currency?", key: "fundCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI trajectory degree": {
      "(none)": {
        code: "CF11_1",
        form: [
          { label: "Degree title?", key: "degreeTitle", type: "text" },
          { label: "Department?", key: "departmentIn", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Recruitment": {
      "Networking Opportunities": {
        code: "CF12_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of networking opportunity?", key: "oppTitle", type: "text" },
          { label: "Networking opportunity location?", key: "oppLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Number of FFI personnel attending?", key: "personnelNumber", type: "text" },
          { label: "Names of FFI personnel attending?", key: "personnelName", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
      "Internship": {
        code: "CF13_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description of internship?", key: "internTitle", type: "text" },
          { label: "Internship location?", key: "internLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Internship renumeration (enter 'unknown' if not specified, 'unpaid' if internship is unpaid, otherwise enter renumeration amount)?", key: "internAmount", type: "text" },
          { label: "Currency of internship renumeration (if applicable)?", key: "internCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other interactions": {
      "(none)": {
        code: "CF14_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description of interaction?", key: "interactionTitle", type: "text" },
          { label: "Location of interaction?", key: "interactionLocation", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
  Financial_relationship: {
    "Funding for research": {
      "Funded Professorship": {
        code: "CF15_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of funded professorship?", key: "profTitle", type: "text" },
          { label: "Name of appointee?", key: "name", type: "text" },
          { label: "Department?", key: "department", type: "text" },
          { label: "Amount funded?", key: "fundAmount", type: "text" },
          { label: "Funding currency?", key: "fundCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Purpose of research funding (project, lab, center, etc.)?", key: "fundCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
      "Funded Research Center": {
        code: "CF16_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of funded research center?", key: "centerTitle", type: "text" },
          { label: "Department?", key: "department", type: "text" },
          { label: "Amount funded?", key: "fundAmount", type: "text" },
          { label: "Funding currency?", key: "fundCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Purpose of research funding (project, lab, center, etc.)?", key: "fundCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
      "Funded Research Project": {
        code: "CF17_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title of funded research project?", key: "projectTitle", type: "text" },
          { label: "Department/academic discipline?", key: "departmentDiscipline", type: "text" },
          { label: "Amount funded?", key: "fundAmount", type: "text" },
          { label: "Funding currency?", key: "fundCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Purpose of research funding (project, lab, center, etc.)?", key: "fundCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Gift matching programs": {
      "(none)": {
        code: "CF18_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description?", key: "programTitle", type: "text" },
          { label: "How many individual gifts/donations were matched?", key: "giftNumber", type: "text" },
          { label: "Total amount funded?", key: "fundAmount", type: "text" },
          { label: "Funding currency?", key: "fundCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni endowment invested in FFI": {
      "(none)": {
        code: "CF19_1",
        form: [
          { label: "FFI beneficiary of investment?", key: "beneficiary", type: "text" },
          { label: "Amount invested?", key: "investAmount", type: "text" },
          { label: "Investment amount currency?", key: "investCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni land leasing for fracking, drilling, or exploration": {
      "(none)": {
        code: "CF20_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Land usage (fracking, exploration, etc.)?", key: "landUsage", type: "text" },
          { label: "On indigenous land?", key: "indigLand", type: "text" },
          { label: "Size of land?", key: "landSize", type: "text" },
          { label: "Leasing revenue received by university?", key: "leaseRevenue", type: "text" },
          { label: "Leasing revenue currency?", key: "revenueCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Unspecified Donations": {
      "Donations for general operations, unspecified": {
        code: "CF21_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description of donation?", key: "title", type: "text" },
          { label: "Donation amount?", key: "donationAmount", type: "text" },
          { label: "Donation amount currency?", key: "donationCurrency", type: "text" },
          { label: "Donation date (yyyy)", key: "donationDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
      "Hidden donation purpose": {
        code: "CF21_2",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description of donation?", key: "title", type: "text" },
          { label: "Donation amount?", key: "donationAmount", type: "text" },
          { label: "Donation amount currency?", key: "donationCurrency", type: "text" },
          { label: "Donation date (yyyy)", key: "donationDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other Financial Relationship": {
      "(none)": {
        code: "CF22_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description of financial relationship?", key: "title", type: "text" },
          { label: "Amount exchanged?", key: "exchangeAmount", type: "text" },
          { label: "Amount currency?", key: "amountCurrency", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
  Other_high_level_contracts: {
    "Formal contracts between FFI and uni": {
      "(none)": {
        code: "CF23_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description?", key: "title", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Signed date (mm-dd-yyyy or mm-yyyy or yyyy?", key: "signedDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Memorandum of understanding between FFI and uni": {
      "(none)": {
        code: "CF23_2",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description?", key: "title", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Signed date (mm-dd-yyyy or mm-yyyy or yyyy?", key: "signedDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other contracts": {
      "(none)": {
        code: "CF23_3",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description?", key: "title", type: "text" },
          { label: "Start date (yyyy)", key: "startDate", type: "text" },
          { label: "End date (yyyy)", key: "endDate", type: "text" },
          { label: "Signed date (mm-dd-yyyy or mm-yyyy or yyyy?", key: "signedDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
  Personnel_overlap: {
    "FFI Personnel consults at uni": {
      "(none)": {
        code: "CF24_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Name of FFI personnel?", key: "perssonelName", type: "text" },
          { label: "Title at university?", key: "perssonelTitle", type: "text" },
          { label: "Start date at university (yyyy)", key: "startDateUni", type: "text" },
          { label: "End date at university (yyyy)", key: "endDateUni", type: "text" },
          { label: "Start date at FFI (yyyy)", key: "startDateFFI", type: "text" },
          { label: "End date at FFI (yyyy)", key: "endDateFFI", type: "text" },
          { label: "Renumeration?", key: "renumeration", type: "text" },
          { label: "Renumeration currency?", key: "renumerationCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "FFI Personnel receiving honrary degree": {
      "(none)": {
        code: "CF25_1",
        form: [
          { label: "Honorary degree recipient name?", key: "recipName", type: "text" },
          { label: "Honorary degree recipient FFI affiliation (company)?", key: "perssonelTitle", type: "text" },
          { label: "Title/position at FFI?", key: "title", type: "text" },
          { label: "Honorary degree award date (yyyy)?", key: "awardDate", type: "text" },
          { label: "Start date at FFI (yyyy)", key: "startDate", type: "text" },
          { label: "End date at FFI (yyyy)", key: "endDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Other personnel overlap": {
      "(none)": {
        code: "CF26_1",
        form: [
          { label: "Which FFI?", key: "nameFFI", type: "text" },
          { label: "Title/description of personnel overlap?", key: "title", type: "text" },
          { label: "Name of individual?", key: "name", type: "text" },
          { label: "Start date at university (yyyy)", key: "startDateUni", type: "text" },
          { label: "End date at university (yyyy)", key: "endDateUni", type: "text" },
          { label: "Start date at FFI (yyyy)", key: "startDateFFI", type: "text" },
          { label: "End date at FFI (yyyy)", key: "endDateFFI", type: "text" },
          { label: "Renumeration?", key: "renumeration", type: "text" },
          { label: "Renumeration currency?", key: "renumerationCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni board member affiliated with FFI": {
      "(none)": {
        code: "CF27_1",
        form: [
          { label: "Name of university board member?", key: "name", type: "text" },
          { label: "Title at university?", key: "titleUni", type: "text" },
          { label: "FFI affiliation?", key: "affiliationFFI", type: "text" },
          { label: "Title at FFI?", key: "titleFFI", type: "text" },
          { label: "Start date as university board member (yyyy)?", key: "startDateBoard", type: "text" },
          { label: "End date as university board member (yyyy)?", key: "endDateBoard", type: "text" },
          { label: "Start date of FFI affiliation (yyyy)?", key: "startDateFFI", type: "text" },
          { label: "End date of FFI affiliation (yyyy)?", key: "endDateFFI", type: "text" },
          { label: "Renumeration recieved from FFI?", key: "renumeration", type: "text" },
          { label: "Renumeration currency?", key: "renumerationCurrency", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni member consults for FFI": {
      "(none)": {
        code: "CF28_1",
        form: [
          { label: "Name of university member?", key: "name", type: "text" },
          { label: "Title at university?", key: "titleUni", type: "text" },
          { label: "FFI affiliation (company)?", key: "affiliation", type: "text" },
          { label: "Title at FFI?", key: "titleFFI", type: "text" },
          { label: "Start date at university (yyyy)", key: "startDateUni", type: "text" },
          { label: "End date at university (yyyy)", key: "endDateUni", type: "text" },
          { label: "Start date at FFI (yyyy)", key: "startDateFFI", type: "text" },
          { label: "End date at FFI (yyyy)", key: "endDateFFI", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni member on board of FFI": {
      "(none)": {
        code: "CF29_1",
        form: [
          { label: "Name of university member?", key: "name", type: "text" },
          { label: "Title at university?", key: "titleUni", type: "text" },
          { label: "FFI affiliation?", key: "affiliationFFI", type: "text" },
          { label: "Start date at university (yyyy)?", key: "startDateUni", type: "text" },
          { label: "End date at university (yyyy)?", key: "endDateUni", type: "text" },
          { label: "Start date as FFI board member (yyyy)?", key: "startDateFFI", type: "text" },
          { label: "End date as FFI board member (yyyy)?", key: "endDateFFI", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
    "Uni member solicited by FFI": {
      "(none)": {
        code: "CF30_1",
        form: [
          { label: "Name of university member solicited?", key: "name", type: "text" },
          { label: "Title at university?", key: "titleUni", type: "text" },
          { label: "Name of FFI?", key: "nameFFI", type: "text" },
          { label: "Name of FFI personnel soliciting?", key: "nameFFIpersonnel", type: "text" },
          { label: "Date of solicitation (yyyy)?", key: "solicitationDate", type: "text" },
          { label: "Other information", key: "otherInfo", type: "textarea" },
          { label: "Source(s) other than Survey Report", key: "sources", type: "text" },
          { label: "Evidence/Quote(s)", key: "evidence", type: "textarea" },
        ],
      },
    },
  },
};

const getAllFormKeysFromCategoryTree = () => {
  const formFields = {};

  const traverse = (obj) => {
    for (const primary in obj) {
      for (const secondary in obj[primary]) {
        for (const tertiary in obj[primary][secondary]) {
          const { code, form } = obj[primary][secondary][tertiary];
          if (!formFields[code]) formFields[code] = [];
          form.forEach(f => {
            const key = `${code}_${f.key}`;
            if (!formFields[code].includes(key)) {
              formFields[code].push(key);
            }
          });
        }
      }
    }
  };

  traverse(categoryTree);
  return formFields;
};


const getHighlightedText = (text, labels) => {
  const labelMap = {};

  // Group labels by text and matchIndex
  labels.forEach(label => {
    const key = `${label.highlightedText}__${label.matchIndex}`;
    labelMap[key] = label;
  });

  // Find all matches for all unique highlighted texts
  const entries = Object.keys(labelMap).map(k => {
    const [rawText, index] = k.split('__');
    const regex = new RegExp(rawText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');

    let match;
    let count = 0;
    const matches = [];

    while ((match = regex.exec(text)) !== null) {
      count++;
      if (count === parseInt(index, 10)) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
          label: labelMap[k]
        });
        break; 
      }
    }

    return matches[0]; 
  }).filter(Boolean);

  const sorted = entries.sort((a, b) => a.start - b.start);

  let lastIndex = 0;
  let result = "";

  for (const match of sorted) {
    const { start, end, text: matchedText, label } = match;
    const color = highlightColors[label.primaryCategory] || "#ffa";

    result += text.slice(lastIndex, start);

    result += `<mark style="background-color:${color};">${matchedText}</mark>`;
    lastIndex = end;
  }

  result += text.slice(lastIndex);

  return result;
};




function App() {
  const [userCodeBase, setUserCodeBase] = useState("1"); 
  const [labelCount, setLabelCount] = useState(1); 
  const [highlightOnlyLabels, setHighlightOnlyLabels] = useState([]);
  const [highlightedText, setHighlightedText] = useState("");
  const [labelOpen, setLabelOpen] = useState(false);
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [tertiaryCategory, setTertiaryCategory] = useState("");
  const [customFormData, setCustomFormData] = useState({});
  const [labels, setLabels] = useState([]);
  const [pdfText, setPdfText] = useState("");
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    fetch("/extracted_text.txt")
      .then((res) => res.text())
      .then((text) => {
        setPdfText(text);
        const splitPages = text.split(/--- Page (\d+) ---/).filter((part) => part.trim() !== "");
        const grouped = [];
        for (let i = 0; i < splitPages.length; i += 2) {
          const pageNum = parseInt(splitPages[i]);
          const content = splitPages[i + 1];
          if (!isNaN(pageNum)) {
            grouped.push({ page: pageNum, content });
          }
        }
        setPages(grouped);
      })
      .catch((err) => console.error("Failed to load PDF text:", err));
  }, []);

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : "";

    if (!text) return;

    const range = selection.getRangeAt(0);
    const selectedText = text;
    const fullText = pdfText;

    const selectedStart = fullText.indexOf(selectedText, range.startOffset);
    const selectedEnd = selectedStart + selectedText.length;

    if (selectedStart === -1) return;

    // Get all overlapping pages
    let runningIndex = 0;
    const involvedPages = [];

    for (const page of pages) {
      const pageStart = runningIndex;
      const pageEnd = runningIndex + page.content.length;

      if (selectedStart < pageEnd && selectedEnd > pageStart) {
        involvedPages.push(page.page);
      }

      runningIndex = pageEnd;
    }

    // Match index
    const regex = new RegExp(selectedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    let match, count = 0, matchIndex = 0;
    while ((match = regex.exec(fullText)) !== null) {
      count++;
      if (match.index >= selectedStart) {
        matchIndex = count;
        break;
      }
    }

    setHighlightedText(selectedText);
    setCustomFormData(prev => ({ ...prev, matchIndex }));
    setCurrentPage(involvedPages);
    setLabelOpen(true);
  };

  const handleFormChange = (key, value) => {
    setCustomFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const formMeta = getFormFields();
  
    // Guard against incomplete category selection
    if (!formMeta || !formMeta.code) {
      alert("Please select a valid primary, secondary, and tertiary category.");
      return;
    }
  
    const generatedLabelCode = `${userCodeBase}_${labelCount}`;
  
    const newLabel = {
      highlightedText,
      primaryCategory,
      secondaryCategory,
      tertiaryCategory,
      customFormData,
      matchIndex: customFormData.matchIndex,
      pageNumbers: currentPage,
      formCode: formMeta.code, 
      generatedLabelCode
    };
  
    console.log("Label saved:", newLabel);
  
    setLabels((prev) => [...prev, newLabel]);
    setLabelCount((prev) => prev + 1);
  
    // Reset UI
    setLabelOpen(false);
    setPrimaryCategory("");
    setSecondaryCategory("");
    setTertiaryCategory("");
    setCustomFormData({});
    setCurrentPage(null);
  };
  
  

  const getFormFields = () => {
    if (primaryCategory && secondaryCategory && tertiaryCategory) {
      return categoryTree?.[primaryCategory]?.[secondaryCategory]?.[tertiaryCategory] || null;
    }
    return null;
  };

  const downloadCSV = () => {
    const formFieldMap = getAllFormKeysFromCategoryTree(); // all CF codes and keys
    const allFieldKeys = Object.values(formFieldMap).flat();
  
    const header = [
      "Highlighted Text",
      "Primary Category",
      "Secondary Category",
      "Tertiary Category",
      "Page Number",
      "Form Code",
      "Generated Label Code",
      ...allFieldKeys
    ];
  
    const rows = labels.map(label => {
      const base = [
        label.highlightedText,
        label.primaryCategory,
        label.secondaryCategory,
        label.tertiaryCategory,
        Array.isArray(label.pageNumbers) ? label.pageNumbers.join(", ") : label.pageNumbers,
        label.formCode,
        label.generatedLabelCode || ""
      ];
  
      const formCode = label.formCode;
  
      const formValues = allFieldKeys.map(fullKey => {
        const match = fullKey.match(/^(CF\d+_\d+)_(.+)$/);
        if (!match) return "";
  
        const [_, codePrefix, fieldKey] = match;
        if (codePrefix !== formCode) return "";
        return label.customFormData?.[fieldKey] ?? "";
      });
  
      return [...base, ...formValues];
    });
  
    const csvContent = [header, ...rows]
      .map(row => row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(","))
      .join("\n");
  
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "labels.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const formDefinition = getFormFields();


  const saveAsHTMLWithHighlights = () => {
    const highlightedHTML = getHighlightedText(pdfText, labels);
    const fullHtml = `
      <html>
        <head><meta charset="UTF-8"><title>Highlighted Text</title></head>
        <body style="white-space: pre-wrap; font-family: sans-serif; padding: 2rem;">
          ${highlightedHTML}
        </body>
      </html>
    `;
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "highlighted_text.html");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const saveWithHighlightData = () => {
    const payload = {
      text: pdfText,
      labels
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "text_with_labels.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleJsonFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.text && Array.isArray(data.labels)) {
          setPdfText(data.text);
  
          // Keep only enough for highlighting
          const strippedLabels = data.labels.map((label) => ({
            highlightedText: label.highlightedText,
            matchIndex: label.matchIndex,
            pageNumbers: label.pageNumbers,
            primaryCategory: label.primaryCategory 
          }));
  
          setHighlightOnlyLabels(strippedLabels);
          setLabels([]); 
        } else {
          alert("Invalid JSON format");
        }
      } catch (err) {
        alert("Failed to parse JSON");
      }
    };
    reader.readAsText(file);
  };


  return (
    <div className="p-8 font-sans space-y-6" onMouseUp={handleTextSelection}>
      <h1 className="text-2xl font-bold">PDF Labeling Tool (Prototype)</h1>

      <div className="pt-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Label Group Code (e.g., 1, 2, 3, etc.):</label>
        <input
          type="text"
          className="w-40 p-2 border rounded"
          value={userCodeBase}
          onChange={(e) => setUserCodeBase(e.target.value)}
        />
      </div>

      <div className="bg-white border shadow p-4 rounded-lg whitespace-pre-wrap max-h-[400px] overflow-y-auto">
        <p dangerouslySetInnerHTML={{ __html: getHighlightedText(pdfText, [...highlightOnlyLabels, ...labels]) }} />
      </div>

      {labelOpen && (
        <div className="border p-4 bg-gray-50 rounded-lg shadow space-y-4 max-w-lg">
          <h2 className="text-lg font-semibold">
            Label: <span className="text-blue-600">"{highlightedText}"</span>
          </h2>
          {currentPage && (
            <p className="text-sm text-gray-500">
              Detected on Page{Array.isArray(currentPage) && currentPage.length > 1 ? "s" : ""} {Array.isArray(currentPage) ? currentPage.join(", ") : currentPage}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Primary Category</label>
            <select className="w-full p-2 border rounded" value={primaryCategory} onChange={(e) => {
              setPrimaryCategory(e.target.value);
              setSecondaryCategory("");
              setTertiaryCategory("");
            }}>
              <option value="">Select...</option>
              {Object.keys(categoryTree).map((cat) => <option key={cat}>{cat}</option>)}
            </select>
          </div>

          {primaryCategory && (
            <div>
              <label className="block text-sm font-medium mb-1">Secondary Category</label>
              <select className="w-full p-2 border rounded" value={secondaryCategory} onChange={(e) => {
                setSecondaryCategory(e.target.value);
                setTertiaryCategory("");
              }}>
                <option value="">Select...</option>
                {Object.keys(categoryTree[primaryCategory] || {}).map((sub) => <option key={sub}>{sub}</option>)}
              </select>
            </div>
          )}

          {primaryCategory && secondaryCategory && (
            <div>
              <label className="block text-sm font-medium mb-1">Tertiary Category</label>
              <select className="w-full p-2 border rounded" value={tertiaryCategory} onChange={(e) => setTertiaryCategory(e.target.value)}>
                <option value="">Select...</option>
                {Object.keys(categoryTree[primaryCategory]?.[secondaryCategory] || {}).map((sub) => <option key={sub}>{sub}</option>)}
              </select>
            </div>
          )}

          {formDefinition && (
            <div className="space-y-4 pt-4">
              <h3 className="text-md font-semibold">Custom Form</h3>
              {formDefinition.form.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-1">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={3}
                      className="w-full p-2 border rounded"
                      value={customFormData[field.key] || ""}
                      onChange={(e) => handleFormChange(field.key, e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={customFormData[field.key] || ""}
                      onChange={(e) => handleFormChange(field.key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between pt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleSave}>Save Label</button>
            <button className="text-sm text-gray-600 underline" onClick={() => setLabelOpen(false)}>Cancel</button>
          </div>
        </div>
      )}

      {labels.length > 0 && (
        <div className="pt-4 space-x-4">
          <button
            onClick={downloadCSV}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📄 Download Labels as CSV
          </button>
          <button
            onClick={saveAsHTMLWithHighlights}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            💾 Save as HTML
          </button>
          <button
            onClick={saveWithHighlightData}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            💾 Save as JSON
          </button>
        </div>
      )}

      <div className="pt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          📂 Load Previous JSON:
        </label>
        <input
          type="file"
          accept=".json"
          onChange={handleJsonFileUpload}
          className="block"
        />
      </div>      

    </div>
  );
}


export default App;
