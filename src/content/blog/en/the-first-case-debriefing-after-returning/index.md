---
title: The First Post-Project Debriefing After My Return
customSlug: the-first-case-debriefing-after-returning
tags:
  - Development Journal
snippet: This was my first time undertaking a project related to the government, and I encountered some difficulties and made some mistakes. I hope to remind myself through this diary entry not to make the same mistakes in the future.
publishDate: 2023-11-10 15:58
category: Life
---
This was my first time taking on a government-related project, but it may also be the last. I rarely deal with projects from public institutions. XD

## Difficulties Encountered in the Project

### Background Introduction

This project involved revamping a government's image website, including the front-end and back-end. We were a subcontractor of the vendor contracted by the government agency. The contracting vendor (hereinafter referred to as the client) would let the commissioning government agency (hereinafter referred to as the agency) choose the desired front-end and back-end templates. For the back-end, there were no UI design drafts, and the default styles of the template could be used for the front-end. For the front-end, a designer provided design drafts, and the designer would create similar designs based on the template chosen by the client.

There were two front-end partners, including myself. I was mainly responsible for the front-end and part of the back-end, while the other partner was responsible for the back-end and part of the front-end. There were also two back-end developers (one of them also served as the PM, which was really difficult for him).

![the-first-case-debriefing-after-returning]( /images/the-first-case-debriefing-after-returning-cover.png "composition api let me free")

### What I Learned

* Mastering the operation of multi-language systems.
I usually work on back-end projects and rarely deal with front-end-related tasks. This was my first time encountering requirements related to multi-language systems. I learned about the operation mode of multi-language systems and some pitfalls, such as the "@" special character issue. I even applied it to my own technical blog. XD
* Breaking away from the Options API and embracing the freedom of the Composition API.
However, when using Vue, due to my previous experience, I was mostly familiar with the Options API. This time, I fully grasped the Composition API, and I'm very happy about it. I really can't go back.
* Moving beyond Vuex and getting acquainted with the Pinia Store.
With the clean Composition API, I also learned the Pinia Store, getting rid of Vuex's lengthy API.

### Difficulties Encountered

* Long design draft production time, compressing development schedule.
Originally, this project started in July, but the design draft for the homepage wasn't produced until almost the end of August. The reason was that the client needed to constantly confirm design details with the agency, resulting in the complete production of the front-end design drafts only by mid-September. (In between, our PM even asked in the group if this project was in a pending state. 😅)
* Front-end design elements did not match the template chosen by the agency.
I guess, possibly due to the urgency of producing drafts in a short time, the design drafts produced by the design team did not align with our expectation of using the template chosen by the agency.
* Senior officials intervened, making extensive modifications to the design during the acceptance phase.
Later, we didn't have time to present to the agency during the client's first proposal in mid-September. We completed the first delivery in early October, followed by a lengthy acceptance phase. During the acceptance period, the agency continuously provided feedback to the client on parts that needed modification. (There was one image that I had to reset at least five times...)

### My Mistakes and How I Should Improve

* Schedule and quality are equally important; actively communicate and seek help when facing difficulties.
During the first submission, there was still sufficient time for planning and development. However, during the acceptance phase, we received a large number of modifications, and repeated development led to mental exhaustion, but more so, I had the mental pressure of these modifications. In consideration of the schedule, I accelerated development but failed to maintain code quality.
Since I had already agreed to and accepted the modifications, if I had any objections, I should have proposed extending the schedule and corresponding costs at that time. This way, I wouldn't have neglected quality during subsequent revisions, making myself feel aggrieved and unhappy. This is an area where I need to improve.

* In the absence of design drafts, front-end partners should have more consensus.
The lack of design drafts for the back-end led to two completely different UI presentations when we were creating the back-end. We should have confirmed relevant requirements before development to ensure which UI elements we should keep consistent, avoiding the situation where two parts of the same back-end page were different.

* Actively discuss with designers when discovering design pattern discrepancies.
In this project, we communicated with the designer through the client and had little direct communication. However, when we discovered that the design of the homepage differed significantly from the template specified by the agency, we should have actively requested at least one online meeting with the designer. This might have helped make our development smoother.

People learn from their mistakes and gradually grow through repeated experiences. I will remember the mistakes made this time to avoid repeating them in the future.

