
const categoryTree = {
  Research_and_consultancy_ties: {
    "Consulting_for_FFI_via_the_university": {
      code: "CF1_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of uni personnel?",
          key: "name_of_uni_personnel",
          type: "text"
        },
        {
          label: "Type of consultancy?",
          key: "type_of_consultancy",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Remuneration?",
          key: "remuneration",
          type: "text"
        },
        {
          label: "Remuneration currency?",
          key: "remuneration_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Direct_research_collaboration": {
      code: "CF2_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of FFI personnel?",
          key: "name_of_ffi_personnel",
          type: "text"
        },
        {
          label: "Title at FFI?",
          key: "title_at_ffi",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Name of uni personnel?",
          key: "name_of_uni_personnel",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Title of research project?",
          key: "title_of_research_project",
          type: "text"
        },
        {
          label: "Department/academic discipline?",
          key: "departmentacademic_discipline",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_FFI_funding_for_research": {
      code: "CF2_2",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of FFI personnel?",
          key: "name_of_ffi_personnel",
          type: "text"
        },
        {
          label: "Title at FFI?",
          key: "title_at_ffi",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Name of uni personnel?",
          key: "name_of_uni_personnel",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Title of research project?",
          key: "title_of_research_project",
          type: "text"
        },
        {
          label: "Department/academic discipline?",
          key: "departmentacademic_discipline",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Membership_in_FFI_linked_research_consortia": {
      code: "CF3_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of consortia?",
          key: "name_of_consortia",
          type: "text"
        },
        {
          label: "Event Location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Indirect_financing_or_involvement_in_research": {
      code: "CF4_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Type of FFI involvement?",
          key: "type_of_ffi_involvement",
          type: "textarea"
        },
        {
          label: "Title of funded research?",
          key: "title_of_funded_research",
          type: "text"
        },
        {
          label: "Department/academic discipline?",
          key: "departmentacademic_discipline",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Buying_renting_or_obtaining_data_or_equipment_from_an_FFI_party": {
      code: "CF5_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Description of equipment/data?",
          key: "description_of_equipmentdata",
          type: "text"
        },
        {
          label: "Bought, rented, or obtained?",
          key: "bought_rented_or_obtained",
          type: "text"
        },
        {
          label: "Purchase price?",
          key: "purchase_price",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_research_ties": {
      code: "CF5_2",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/Description of research tie?",
          key: "titledescription_of_research_tie",
          type: "textarea"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  },
  Campus_Presence: {
    "FFI_advertisements": {
      code: "CF6_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/Ad Description",
          key: "titlead_description",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Link to image of ad?",
          key: "link_to_image_of_ad",
          type: "text"
        },
        {
          label: "Ad location on campus?",
          key: "ad_location_on_campus",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_sponsored_sports_teams": {
      code: "CF7_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Which sport?",
          key: "which_sport",
          type: "text"
        },
        {
          label: "Team Name?",
          key: "team_name",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_sponsored_student_organizations": {
      code: "CF8_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of student organization?",
          key: "name_of_student_organization",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_involved_panels_lectures_speeches_when_organised_outside_of_study_program_": {
      code: "CF9_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of Event?",
          key: "title_of_event",
          type: "text"
        },
        {
          label: "Event Location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_sponsored_events_and_excursions_outside_of_study_program_": {
      code: "CF10_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of Event?",
          key: "title_of_event",
          type: "text"
        },
        {
          label: "Event Location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Buildings_named_after_FFI": {
      code: "CF11_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of Building?",
          key: "name_of_building",
          type: "text"
        },
        {
          label: "Amount donated?",
          key: "amount_donated",
          type: "text"
        },
        {
          label: "Donation currency?",
          key: "donation_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_office_space_on_campus": {
      code: "CF12_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "How much office space?",
          key: "how_much_office_space",
          type: "text"
        },
        {
          label: "Amount donated?",
          key: "amount_donated",
          type: "text"
        },
        {
          label: "Donation currency?",
          key: "donation_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_memorabilia": {
      code: "CF13_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Item(s) given?",
          key: "items_given",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Amount donated?",
          key: "amount_donated",
          type: "text"
        },
        {
          label: "Donation currency?",
          key: "donation_currency",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_sponsored_awards_and_prizes_when_not_related_to_study_program_": {
      code: "CF14_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name/title of sponsored fellowship/scholarship/award?",
          key: "nametitle_of_sponsored_fellowshipscholarshipaward",
          type: "text"
        },
        {
          label: "Funding amount per fellowship/scholarship/award?",
          key: "funding_amount_per_fellowshipscholarshipaward",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Named_professorship_chair": {
      code: "CF15_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of funded professorship?",
          key: "title_of_funded_professorship",
          type: "text"
        },
        {
          label: "Name of appointee?",
          key: "name_of_appointee",
          type: "text"
        },
        {
          label: "Department?",
          key: "department",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_campus_presence": {
      code: "CF16_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/Description of campus presence?",
          key: "titledescription_of_campus_presence",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  },
  Educational_Ties: {
    "Curricula_advising": {
      code: "CF17_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Level of curricula (undergrad, grad etc.)",
          key: "level_of_curricula_undergrad_grad_etc",
          type: "text"
        },
        {
          label: "Department?",
          key: "department",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Guest_lectures_or_seminars_by_FFI_personnel_or_on_FFI_project_case_study": {
      code: "CF18_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of Event?",
          key: "title_of_event",
          type: "text"
        },
        {
          label: "Event Location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_field_trips_or_workshops_as_part_of_study_program": {
      code: "CF19_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of Event?",
          key: "title_of_event",
          type: "text"
        },
        {
          label: "Event Location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_trajectory_degree": {
      code: "CF20_1",
      form: [
        {
          label: "Degree Title?",
          key: "degree_title",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Department?",
          key: "department",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_educational_involvement": {
      code: "CF21_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/Description of educational involvement?",
          key: "titledescription_of_educational_involvement",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Amount funded?",
          key: "amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  },
  Career_and_recruitment_engagements: {
    "Career_events_and_job_fairs_with_attendance_of_FFI": {
      code: "CF22_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of career event or job fair?",
          key: "title_of_career_event_or_job_fair",
          type: "text"
        },
        {
          label: "Event location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Internships_and_jobs_in_collaboration_with_the_university": {
      code: "CF23_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/Description of Internship/Job?",
          key: "titledescription_of_internshipjob",
          type: "text"
        },
        {
          label: "Internship/Job Location?",
          key: "internshipjob_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Remuneration (enter \u201cunknown\u201d if not specified, \u201cunpaid\u201d if internship is unpaid, otherwise enter remuneration amount)?",
          key: "remuneration_enter_unknown_if_not_specified_unpaid_if_internship_is_unpaid_otherwise_enter_remuneration_amount",
          type: "text"
        },
        {
          label: "Currency of remuneration (if applicable)?",
          key: "currency_of_remuneration_if_applicable",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "FFI_sponsored_fellowships_scholarships_and_other_awards": {
      code: "CF24_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name/title of sponsored fellowship/scholarship/award?",
          key: "nametitle_of_sponsored_fellowshipscholarshipaward",
          type: "text"
        },
        {
          label: "Funding amount per fellowship/scholarship/award?",
          key: "funding_amount_per_fellowshipscholarshipaward",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Career_advising": {
      code: "CF25_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Level of student being advised (undergrad, grad etc.)",
          key: "level_of_student_being_advised_undergrad_grad_etc",
          type: "text"
        },
        {
          label: "Department?",
          key: "department",
          type: "text"
        },
        {
          label: "Title/Description of Internships or Jobs?",
          key: "titledescription_of_internships_or_jobs",
          type: "textarea"
        },
        {
          label: "Internship/Job Location?",
          key: "internshipjob_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other relevant information?",
          key: "other_relevant_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Networking_opportunities": {
      code: "CF26_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of networking opportunity?",
          key: "title_of_networking_opportunity",
          type: "text"
        },
        {
          label: "Networking opportunity Location?",
          key: "networking_opportunity_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Joint_training_and_workshops": {
      code: "CF27_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title of training/workshop?",
          key: "title_of_trainingworkshop",
          type: "text"
        },
        {
          label: "Event Location?",
          key: "event_location",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Number of FFI personnel attending?",
          key: "number_of_ffi_personnel_attending",
          type: "text"
        },
        {
          label: "Names of FFI personnel attending?",
          key: "names_of_ffi_personnel_attending",
          type: "textarea"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_career_recruitment_engagements": {
      code: "CF28_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/description of engagement?",
          key: "titledescription_of_engagement",
          type: "text"
        },
        {
          label: "Location of engagement?",
          key: "location_of_engagement",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  },
  Purely_Financial_Relationship: {
    "Gift_matching_programs": {
      code: "CF29_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "How many individual gifts/donations were matched?",
          key: "how_many_individual_giftsdonations_were_matched",
          type: "text"
        },
        {
          label: "Total amount funded?",
          key: "total_amount_funded",
          type: "text"
        },
        {
          label: "Funding currency?",
          key: "funding_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Uni_endowment_invested_in_FFI": {
      code: "CF30_1",
      form: [
        {
          label: "FFI beneficiary of investment?",
          key: "ffi_beneficiary_of_investment",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Amount invested?",
          key: "amount_invested",
          type: "text"
        },
        {
          label: "Investment amount currency?",
          key: "investment_amount_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Uni_land_leasing_for_fracking_drilling_or_exploration": {
      code: "CF31_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Land usage (Fracking, exploration etc.)",
          key: "land_usage_fracking_exploration_etc",
          type: "text"
        },
        {
          label: "On indigenous land?",
          key: "on_indigenous_land",
          type: "select"
        },
        {
          label: "Size of land?",
          key: "size_of_land",
          type: "text"
        },
        {
          label: "Leasing revenue received by university?",
          key: "leasing_revenue_received_by_university",
          type: "text"
        },
        {
          label: "Leasing revenue currency?",
          key: "leasing_revenue_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Donations_with_unspecified_interests_obligations_or_benefits": {
      code: "CF32_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/description of donation?",
          key: "titledescription_of_donation",
          type: "text"
        },
        {
          label: "Donation amount?",
          key: "donation_amount",
          type: "text"
        },
        {
          label: "Donation amount currency?",
          key: "donation_amount_currency",
          type: "text"
        },
        {
          label: "Donation date (yyyy)?",
          key: "donation_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_Financial_Relationship": {
      code: "CF33_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/description of financial relationship?",
          key: "titledescription_of_financial_relationship",
          type: "text"
        },
        {
          label: "Amount exchanged?",
          key: "amount_exchanged",
          type: "text"
        },
        {
          label: "Amount currency?",
          key: "amount_currency",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  },
  High_Level_Institutional_Agreements: {
    "Formal_contracts_between_FFI_and_uni": {
      code: "CF34_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/description?",
          key: "titledescription",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Signed date (mm-dd-yyyy or mm-yyyy or yyyy)?",
          key: "signed_date_mmddyyyy_or_mmyyyy_or_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Informal_understanding_between_FFI_and_Uni": {
      code: "CF34_2",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/description?",
          key: "titledescription",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Signed date (mm-dd-yyyy or mm-yyyy or yyyy)?",
          key: "signed_date_mmddyyyy_or_mmyyyy_or_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Joint_Ventures": {
      code: "CF34_3",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Title/description?",
          key: "titledescription",
          type: "text"
        },
        {
          label: "Start date (yyyy)?",
          key: "start_date_yyyy",
          type: "text"
        },
        {
          label: "End date (yyyy)?",
          key: "end_date_yyyy",
          type: "text"
        },
        {
          label: "Signed date (mm-dd-yyyy or mm-yyyy or yyyy)?",
          key: "signed_date_mmddyyyy_or_mmyyyy_or_yyyy",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  },
  Personnel_Overlap: {
    "Former_FFI_personnel_now_affiliated_with_Uni": {
      code: "CF35_1",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of personnel?",
          key: "name_of_personnel",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Title at FFI?",
          key: "title_at_ffi",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Remuneration?",
          key: "remuneration",
          type: "text"
        },
        {
          label: "Remuneration currency?",
          key: "remuneration_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Former_Uni_personnel_now_affiliated_with_FFI": {
      code: "CF35_2",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of personnel?",
          key: "name_of_personnel",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Title at FFI?",
          key: "title_at_ffi",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Remuneration?",
          key: "remuneration",
          type: "text"
        },
        {
          label: "Remuneration currency?",
          key: "remuneration_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Concurrently_affiliated_with_both_FFi_and_Uni": {
      code: "CF35_3",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of personnel?",
          key: "name_of_personnel",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Title at FFI?",
          key: "title_at_ffi",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Remuneration?",
          key: "remuneration",
          type: "text"
        },
        {
          label: "Remuneration currency?",
          key: "remuneration_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    },
    "Other_personnel_overlap": {
      code: "CF35_4",
      form: [
        {
          label: "Which FFI?",
          key: "which_ffi",
          type: "text"
        },
        {
          label: "Which University?",
          key: "which_uni",
          type: "text"
        },
        {
          label: "Name of personnel?",
          key: "name_of_personnel",
          type: "text"
        },
        {
          label: "Title at university?",
          key: "title_at_university",
          type: "text"
        },
        {
          label: "Start date at university (yyyy)?",
          key: "start_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "End date at university (yyyy)?",
          key: "end_date_at_university_yyyy",
          type: "text"
        },
        {
          label: "Title at FFI?",
          key: "title_at_ffi",
          type: "text"
        },
        {
          label: "Start date at FFI (yyyy)?",
          key: "start_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "End date at FFI (yyyy)?",
          key: "end_date_at_ffi_yyyy",
          type: "text"
        },
        {
          label: "Remuneration?",
          key: "remuneration",
          type: "text"
        },
        {
          label: "Remuneration currency?",
          key: "remuneration_currency",
          type: "text"
        },
        {
          label: "Other information?",
          key: "other_information",
          type: "textarea"
        },
        {
          label: "Apparent influence?",
          key: "apparent_influence",
          type: "text"
        },
        {
          label: "Noteworthy?",
          key: "noteworthy",
          type: "checkbox"
        },
        {
          label: "Source(s) other than Survey Report?",
          key: "sources_other_than_survey_report",
          type: "text"
        },
        {
          label: "Evidence/Quote(s) from sources other than Survey Report?",
          key: "evidencequotes_from_sources_other_than_survey_report",
          type: "textarea"
        }
      ]
    }
  }
};



const flattenHtmlToTextWithSpans = (html) => {
    const container = document.createElement("div");
    container.innerHTML = html;
    const lines = container.querySelectorAll("p[data-page][data-line]");
    const parts = [];

    lines.forEach((p) => {
      const page = p.getAttribute("data-page");
      const line = p.getAttribute("data-line");
      const text = p.textContent;

      parts.push(
        `<span data-page="${page}" data-line="${line}" class="text-span">${text} </span>`
      );
    });

    return parts.join("");
  };


const handleMouseUp = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const selectedText = selection.toString().trim();
    if (!selectedText) return;

    const range = selection.getRangeAt(0);
    const startNode = range.startContainer.parentElement;

    if (!startNode.classList.contains("text-span")) {
      alert("Please select text within the document.");
      return;
    }

    setSelectedSpan(startNode);
    setHighlightedText(selectedText);
    setLabelOpen(true);
  };

const applyHighlight = (span, labelId, color) => {
    const range = document.createRange();
    range.selectNodeContents(span);
    const text = span.textContent;
    span.innerHTML = span.innerHTML.replace(
      highlightedText,
      `<span class="highlighted" style="background-color:${color}" data-label-id="${labelId}">${highlightedText}</span>`
    );
  };


  const applyHighlight = (spanObj, labelId, color) => {
    if (!spanObj.spans || spanObj.spans.length === 0) return;

    spanObj.spans.forEach((span) => {
      const original = span.innerHTML;
      const text = span.textContent;
      const highlightStart = highlightedText.indexOf(text);

      // If span contains part of the selected text, wrap it
      if (highlightedText.includes(text)) {
        span.innerHTML = `<span class="highlighted" style="background-color:${color}" data-label-id="${labelId}">${original}</span>`;
      }
    });
  };



.page-marker {
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  color: #666;
  border-top: 1px dashed #ccc;
  padding-top: 10px;
}