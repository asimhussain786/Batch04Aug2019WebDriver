$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com\\w2a\\cucumber\\developer.feature");
formatter.feature({
  "line": 1,
  "name": "About Developer",
  "description": "\r\nIn order to get a high paid job\r\nAs a Developer\r\nI want to learn AdvanceJava",
  "id": "about-developer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "I am a CoreJava Developer",
  "description": "",
  "id": "about-developer;i-am-a-corejava-developer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am a \"CoreJava\" Developer",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I started development",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I created a \"simple\" java program",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I am \"not\" experienced",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "My Boss is \"still\" satisfied",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "CoreJava",
      "offset": 8
    }
  ],
  "location": "Developer.I_am_a_CoreJava_Developer(String)"
});
formatter.result({
  "duration": 155765000,
  "status": "passed"
});
formatter.match({
  "location": "Developer.I_started_development()"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simple",
      "offset": 13
    }
  ],
  "location": "Developer.I_created_a_simple_java_program(String)"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 6
    }
  ],
  "location": "Developer.I_am_not_experienced(String)"
});
formatter.result({
  "duration": 356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "still",
      "offset": 12
    }
  ],
  "location": "Developer.My_Boss_is_highly_satisfied(String)"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I am a AdvanceJava Developer",
  "description": "",
  "id": "about-developer;i-am-a-advancejava-developer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am a \"AdvanceJava\" Developer",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I started development",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I created a \"complex\" java program",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I am \"very\" experienced",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "My Boss is \"highly\" satisfied",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "AdvanceJava",
      "offset": 8
    }
  ],
  "location": "Developer.I_am_a_CoreJava_Developer(String)"
});
formatter.result({
  "duration": 579400,
  "status": "passed"
});
formatter.match({
  "location": "Developer.I_started_development()"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "complex",
      "offset": 13
    }
  ],
  "location": "Developer.I_created_a_simple_java_program(String)"
});
formatter.result({
  "duration": 206000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 6
    }
  ],
  "location": "Developer.I_am_not_experienced(String)"
});
formatter.result({
  "duration": 212800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "highly",
      "offset": 12
    }
  ],
  "location": "Developer.My_Boss_is_highly_satisfied(String)"
});
formatter.result({
  "duration": 183700,
  "status": "passed"
});
formatter.uri("com\\w2a\\cucumber\\tester.feature");
formatter.feature({
  "line": 1,
  "name": "About Testers",
  "description": "\r\nIn order to get a high paid job\r\nAs a Tester\r\nI want to learn Automation",
  "id": "about-testers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 19,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Manual\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"Less\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Low\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Average\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 2366700,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Less",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 201300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 211800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Average",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 173900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Automation\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"High\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Very\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Highly\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 325000,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 120800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Very",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Highly",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 167800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I am a Manual Tester",
  "description": "",
  "id": "about-testers;i-am-a-manual-tester;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am a \"Database\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I apply for a Job",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I got a \"Good\" paid job",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am \"Better\" satisfied with my salary",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "My parents are \"Better\" satisfied",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Database",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 362100,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_Job()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 97100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 128800,
  "status": "passed"
});
});