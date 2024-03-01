"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[35879],{85383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(74848),i=n(28453);const s={title:"How to Write Test Cases in Seata",keywords:["Seata","unit test","junit","mockito","assertj"],description:"This article mainly introduces the testing frameworks already used in Seata and community suggestions on how developers can better write test cases.",author:"Wang Zhongxiang - Apache Seata committer, trustdecision Technical Expert",date:new Date("2024-02-20T00:00:00.000Z")},o=void 0,r={permalink:"/blog/how-to-write-unit-tests",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/how-to-write-unit-tests.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/how-to-write-unit-tests.md",title:"How to Write Test Cases in Seata",description:"This article mainly introduces the testing frameworks already used in Seata and community suggestions on how developers can better write test cases.",date:"2024-02-20T00:00:00.000Z",formattedDate:"February 20, 2024",tags:[],readingTime:6.065,hasTruncateMarker:!1,authors:[{name:"Wang Zhongxiang - Apache Seata committer, trustdecision Technical Expert"}],frontMatter:{title:"How to Write Test Cases in Seata",keywords:["Seata","unit test","junit","mockito","assertj"],description:"This article mainly introduces the testing frameworks already used in Seata and community suggestions on how developers can better write test cases.",author:"Wang Zhongxiang - Apache Seata committer, trustdecision Technical Expert",date:"2024-02-20T00:00:00.000Z"},unlisted:!1,nextItem:{title:"Exploring the Journey of Open Source Development in Seata Project",permalink:"/blog/explore-seata-journey"}},d={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Recommended Frameworks",id:"recommended-frameworks",level:2},{value:"junit5",id:"junit5",level:3},{value:"mockito",id:"mockito",level:3},{value:"assertj",id:"assertj",level:3},{value:"Specifications",id:"specifications",level:2},{value:"1. [[mandatory]] Unit tests must adhere to the AIR principle.",id:"1-mandatory-unit-tests-must-adhere-to-the-air-principle",level:5},{value:"2. [[mandatory]] Unit tests should be fully automated and non-interactive.",id:"2-mandatory-unit-tests-should-be-fully-automated-and-non-interactive",level:5},{value:"3. [[mandatory]] Maintain the independence of unit tests. To ensure the stability, reliability, and ease of maintenance of unit tests, unit test cases must not call each other or depend on the execution order.",id:"3-mandatory-maintain-the-independence-of-unit-tests-to-ensure-the-stability-reliability-and-ease-of-maintenance-of-unit-tests-unit-test-cases-must-not-call-each-other-or-depend-on-the-execution-order",level:5},{value:"4. [[mandatory]] Unit tests must be repeatable and unaffected by external environments.",id:"4-mandatory-unit-tests-must-be-repeatable-and-unaffected-by-external-environments",level:5},{value:"5. [[mandatory]] For unit tests, ensure that the granularity of testing is small enough to facilitate precise issue localization. The granularity of unit testing is at most at the class level, generally at the method level.",id:"5-mandatory-for-unit-tests-ensure-that-the-granularity-of-testing-is-small-enough-to-facilitate-precise-issue-localization-the-granularity-of-unit-testing-is-at-most-at-the-class-level-generally-at-the-method-level",level:5},{value:"6. [[mandatory]] Incremental code for core business, core applications, and core modules must ensure that unit tests pass.",id:"6-mandatory-incremental-code-for-core-business-core-applications-and-core-modules-must-ensure-that-unit-tests-pass",level:5},{value:"7. [[mandatory]] Unit test code must be written in the following project directory: src/test/java; it is not allowed to be written in the business code directory.",id:"7-mandatory-unit-test-code-must-be-written-in-the-following-project-directory-srctestjava-it-is-not-allowed-to-be-written-in-the-business-code-directory",level:5},{value:"8. [[mandatory]] The basic goal of unit testing: achieve a statement coverage of 70%; the statement coverage and branch coverage of core modules must reach 100%.",id:"8-mandatory-the-basic-goal-of-unit-testing-achieve-a-statement-coverage-of-70-the-statement-coverage-and-branch-coverage-of-core-modules-must-reach-100",level:5},{value:"9. [[recommended]] When writing unit test code, adhere to the BCDE principle to ensure the delivery quality of the tested modules.",id:"9-recommended-when-writing-unit-test-code-adhere-to-the-bcde-principle-to-ensure-the-delivery-quality-of-the-tested-modules",level:5},{value:"10. [[recommended]] For database-related operations such as queries, updates, and deletions, do not assume that the data in the database exists, or directly manipulate the database to insert data. Please use program insertion or data import to prepare data.",id:"10-recommended-for-database-related-operations-such-as-queries-updates-and-deletions-do-not-assume-that-the-data-in-the-database-exists-or-directly-manipulate-the-database-to-insert-data-please-use-program-insertion-or-data-import-to-prepare-data",level:5},{value:"11. [[recommended]] For database-related unit tests, an automatic rollback mechanism can be set to prevent dirty data from being left in the database due to unit testing. Alternatively, clear prefix and suffix identifiers can be used for data generated by unit testing.",id:"11-recommended-for-database-related-unit-tests-an-automatic-rollback-mechanism-can-be-set-to-prevent-dirty-data-from-being-left-in-the-database-due-to-unit-testing-alternatively-clear-prefix-and-suffix-identifiers-can-be-used-for-data-generated-by-unit-testing",level:5},{value:"12. [[recommended]] For code that is untestable, necessary refactoring should be done at the appropriate time to make the code testable, avoiding writing non-standard test code just to meet testing requirements.",id:"12-recommended-for-code-that-is-untestable-necessary-refactoring-should-be-done-at-the-appropriate-time-to-make-the-code-testable-avoiding-writing-non-standard-test-code-just-to-meet-testing-requirements",level:5},{value:"13. [[recommended]] Unit tests, as a means of quality assurance, should complete the writing and verification of unit tests before submitting a pull request.",id:"13-recommended-unit-tests-as-a-means-of-quality-assurance-should-complete-the-writing-and-verification-of-unit-tests-before-submitting-a-pull-request",level:5},{value:"14. [[reference]] To facilitate unit testing, business code should avoid the following situations:",id:"14-reference-to-facilitate-unit-testing-business-code-should-avoid-the-following-situations",level:5}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,a.jsx)(t.p,{children:"As the Seata project continues to grow and expand, our contributor community is also continuously growing. With the continuous enhancement of project functionality, the requirements for code quality are also increasing. In this process, we expect every contributor to provide standardized and comprehensive test cases along with their feature code submissions."}),"\n",(0,a.jsx)(t.p,{children:"An excellent project relies on comprehensive unit tests as a fundamental guarantee. The Test-Driven Development (TDD) concept has been proposed for many years, emphasizing writing test cases before writing functional code. By writing unit tests, developers can gain a deeper understanding of the roles of related classes and methods in the code, grasp the core logic, and become familiar with the running scenarios of various situations. Meanwhile, unit tests also provide stable and secure protection for open-source projects, ensuring the quality and stability of the code when accepting contributor submissions. Unit testing is the first line of defense for quality assurance. Effective unit testing can detect over 90% of code bugs in advance and prevent code deterioration. During project refactoring and evolution, unit testing plays a crucial role, ensuring that the refactored code continues to function properly without introducing new bugs."}),"\n",(0,a.jsx)(t.p,{children:"In the community's view, contributing reasonable test case code is equally important as contributing functional code. To help developers write high-quality test cases, this article provides some basic standards and recommendations."}),"\n",(0,a.jsx)(t.h2,{id:"recommended-frameworks",children:"Recommended Frameworks"}),"\n",(0,a.jsx)(t.p,{children:"The community currently uses the following three frameworks to write test cases:"}),"\n",(0,a.jsx)(t.h3,{id:"junit5",children:"junit5"}),"\n",(0,a.jsx)(t.p,{children:"junit is the most commonly used unit testing framework in Java, used for writing and running repeatable test cases."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"        <junit-jupiter.version>5.8.2</junit-jupiter.version>\n        <dependency>\n            <groupId>org.junit</groupId>\n            <artifactId>junit-bom</artifactId>\n            <version>${junit-jupiter.version}</version>\n        </dependency>\n"})}),"\n",(0,a.jsx)(t.h3,{id:"mockito",children:"mockito"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://javadoc.io/static/org.mockito/mockito-core/5.10.0/org/mockito/Mockito.html",children:"mockito"}),"It is a mock framework mainly used for mock testing. It can simulate any bean managed by Spring, mock method return values, simulate throwing exceptions, etc. This allows us to complete testing and verification in situations where some dependencies are missing."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"        <mockito.version>4.11.0</mockito.version>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-core</artifactId>\n            <version>${mockito.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-junit-jupiter</artifactId>\n            <version>${mockito.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-inline</artifactId>\n            <version>${mockito.version}</version>\n        </dependency>\n"})}),"\n",(0,a.jsx)(t.h3,{id:"assertj",children:"assertj"}),"\n",(0,a.jsx)(t.p,{children:"assertj is an assertion library that provides a set of easy-to-use and highly readable assertion methods. When junit's assertions are difficult to meet, assertj can be used for assertions."}),"\n",(0,a.jsx)(t.p,{children:"Please note: We manage the versions of these three libraries uniformly in the pom.xml of seata-dependencies."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"        <assertj-core.version>3.12.2</assertj-core.version>\n        <dependency>\n            <groupId>org.assertj</groupId>\n            <artifactId>assertj-core</artifactId>\n            <version>${assertj-core.version}</version>\n        </dependency>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"specifications",children:"Specifications"}),"\n",(0,a.jsx)(t.p,{children:"We have referenced the Alibaba Java Development Manual and compiled some suggestions and specifications, divided into different levels. Among them, the [[mandatory]] parts must be strictly adhered to by developers. The community will review the code according to the mandatory rules when merging it. The [[recommended]] and [[reference]] parts are provided to help everyone better understand our considerations and principles for test cases."}),"\n",(0,a.jsx)(t.h5,{id:"1-mandatory-unit-tests-must-adhere-to-the-air-principle",children:"1. [[mandatory]] Unit tests must adhere to the AIR principle."}),"\n",(0,a.jsx)(t.p,{children:"Explanation: Good unit tests, from a macro perspective, possess characteristics of automation, independence, and repeatability."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A: Automatic"}),"\n",(0,a.jsx)(t.li,{children:"I: Independent"}),"\n",(0,a.jsx)(t.li,{children:"R: Repeatable"}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"2-mandatory-unit-tests-should-be-fully-automated-and-non-interactive",children:"2. [[mandatory]] Unit tests should be fully automated and non-interactive."}),"\n",(0,a.jsx)(t.p,{children:"Test cases are usually executed periodically, and the execution process must be fully automated to be meaningful. Tests that require manual inspection of output results are not good unit tests. System.out should not be used for manual verification in unit tests; assert must be used for verification."}),"\n",(0,a.jsx)(t.h5,{id:"3-mandatory-maintain-the-independence-of-unit-tests-to-ensure-the-stability-reliability-and-ease-of-maintenance-of-unit-tests-unit-test-cases-must-not-call-each-other-or-depend-on-the-execution-order",children:"3. [[mandatory]] Maintain the independence of unit tests. To ensure the stability, reliability, and ease of maintenance of unit tests, unit test cases must not call each other or depend on the execution order."}),"\n",(0,a.jsx)(t.p,{children:"Counterexample: method2 depends on the execution of method1, with the result of method1 being used as input for method2."}),"\n",(0,a.jsx)(t.h5,{id:"4-mandatory-unit-tests-must-be-repeatable-and-unaffected-by-external-environments",children:"4. [[mandatory]] Unit tests must be repeatable and unaffected by external environments."}),"\n",(0,a.jsx)(t.p,{children:"Explanation: Unit tests are usually included in continuous integration, and unit tests are executed each time code is checked in. If unit tests depend on external environments (network, services, middleware, etc.), it can lead to the unavailability of the continuous integration mechanism."}),"\n",(0,a.jsx)(t.p,{children:"Example: To avoid being affected by external environments, it is required to design the code to inject dependencies into the SUT. During testing, use a DI framework like Spring to inject a local (in-memory) implementation or a Mock implementation."}),"\n",(0,a.jsx)(t.h5,{id:"5-mandatory-for-unit-tests-ensure-that-the-granularity-of-testing-is-small-enough-to-facilitate-precise-issue-localization-the-granularity-of-unit-testing-is-at-most-at-the-class-level-generally-at-the-method-level",children:"5. [[mandatory]] For unit tests, ensure that the granularity of testing is small enough to facilitate precise issue localization. The granularity of unit testing is at most at the class level, generally at the method level."}),"\n",(0,a.jsx)(t.p,{children:"Explanation: Only with small granularity can errors be quickly located when they occur. Unit tests are not responsible for checking cross-class or cross-system interaction logic; that is the domain of integration testing."}),"\n",(0,a.jsx)(t.h5,{id:"6-mandatory-incremental-code-for-core-business-core-applications-and-core-modules-must-ensure-that-unit-tests-pass",children:"6. [[mandatory]] Incremental code for core business, core applications, and core modules must ensure that unit tests pass."}),"\n",(0,a.jsx)(t.p,{children:"Explanation: Add unit tests promptly for new code. If new code affects existing unit tests, promptly make corrections."}),"\n",(0,a.jsx)(t.h5,{id:"7-mandatory-unit-test-code-must-be-written-in-the-following-project-directory-srctestjava-it-is-not-allowed-to-be-written-in-the-business-code-directory",children:"7. [[mandatory]] Unit test code must be written in the following project directory: src/test/java; it is not allowed to be written in the business code directory."}),"\n",(0,a.jsx)(t.p,{children:"Explanation: This directory is skipped during source code compilation, and the unit test framework defaults to scanning this directory."}),"\n",(0,a.jsx)(t.h5,{id:"8-mandatory-the-basic-goal-of-unit-testing-achieve-a-statement-coverage-of-70-the-statement-coverage-and-branch-coverage-of-core-modules-must-reach-100",children:"8. [[mandatory]] The basic goal of unit testing: achieve a statement coverage of 70%; the statement coverage and branch coverage of core modules must reach 100%."}),"\n",(0,a.jsx)(t.p,{children:"Explanation: As mentioned in the application layering of project conventions, DAO layer, Manager layer, and highly reusable Service should all undergo unit testing."}),"\n",(0,a.jsx)(t.h5,{id:"9-recommended-when-writing-unit-test-code-adhere-to-the-bcde-principle-to-ensure-the-delivery-quality-of-the-tested-modules",children:"9. [[recommended]] When writing unit test code, adhere to the BCDE principle to ensure the delivery quality of the tested modules."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"B: Border, boundary value testing, including loop boundaries, special values, special time points, data sequences, etc."}),"\n",(0,a.jsx)(t.li,{children:"C: Correct, correct input, and expected results."}),"\n",(0,a.jsx)(t.li,{children:"D: Design, combined with design documents, to write unit tests."}),"\n",(0,a.jsx)(t.li,{children:"E: Error, forced error message input (such as: illegal data, exceptional processes, business allowance outside, etc.), and expected results."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"10-recommended-for-database-related-operations-such-as-queries-updates-and-deletions-do-not-assume-that-the-data-in-the-database-exists-or-directly-manipulate-the-database-to-insert-data-please-use-program-insertion-or-data-import-to-prepare-data",children:"10. [[recommended]] For database-related operations such as queries, updates, and deletions, do not assume that the data in the database exists, or directly manipulate the database to insert data. Please use program insertion or data import to prepare data."}),"\n",(0,a.jsx)(t.p,{children:"Counterexample: In a unit test for deleting a row of data, manually add a row directly into the database as the deletion target. However, this newly added row of data does not comply with the business insertion rules, resulting in abnormal test results."}),"\n",(0,a.jsx)(t.h5,{id:"11-recommended-for-database-related-unit-tests-an-automatic-rollback-mechanism-can-be-set-to-prevent-dirty-data-from-being-left-in-the-database-due-to-unit-testing-alternatively-clear-prefix-and-suffix-identifiers-can-be-used-for-data-generated-by-unit-testing",children:"11. [[recommended]] For database-related unit tests, an automatic rollback mechanism can be set to prevent dirty data from being left in the database due to unit testing. Alternatively, clear prefix and suffix identifiers can be used for data generated by unit testing."}),"\n",(0,a.jsx)(t.h5,{id:"12-recommended-for-code-that-is-untestable-necessary-refactoring-should-be-done-at-the-appropriate-time-to-make-the-code-testable-avoiding-writing-non-standard-test-code-just-to-meet-testing-requirements",children:"12. [[recommended]] For code that is untestable, necessary refactoring should be done at the appropriate time to make the code testable, avoiding writing non-standard test code just to meet testing requirements."}),"\n",(0,a.jsx)(t.h5,{id:"13-recommended-unit-tests-as-a-means-of-quality-assurance-should-complete-the-writing-and-verification-of-unit-tests-before-submitting-a-pull-request",children:"13. [[recommended]] Unit tests, as a means of quality assurance, should complete the writing and verification of unit tests before submitting a pull request."}),"\n",(0,a.jsx)(t.h5,{id:"14-reference-to-facilitate-unit-testing-business-code-should-avoid-the-following-situations",children:"14. [[reference]] To facilitate unit testing, business code should avoid the following situations:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Doing too much in constructors."}),"\n",(0,a.jsx)(t.li,{children:"Having too many global variables and static methods."}),"\n",(0,a.jsx)(t.li,{children:"Having too many external dependencies."}),"\n",(0,a.jsx)(t.li,{children:"Having too many conditional statements.\nExplanation: For multiple conditional statements, it is recommended to refactor using guard clauses, strategy patterns, state patterns, etc."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);