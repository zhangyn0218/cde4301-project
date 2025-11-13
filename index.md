# AI-Assisted Evaluation for Pilot Monitoring Training in VR-Based Flight Simulators

**CDE4301 Interim Report**

**Instructor:** Khoo Eng Tat  
**Team:** Liu Yuhui (Ula) (A0266685L), Wang Yubo, Zhang Yining (A0258906R), Gao Jiquan (A0258910B)  
**Affiliation:** Singapore Airlines – NUS Digital Aviation Corp Lab  
**Semester:** AY2025/26 Sem 1

---

## Table of Contents

- [Abstract](#abstract)
- [1. Introduction and Background](#1-introduction-and-background)
  - [1.1 Context and Motivation](#11-context-and-motivation)
  - [1.2 Project Objective](#12-project-objective)
- [2. VR-based Training Expansion in the Lack of Accessible Full-Flight Simulators](#2-vr-based-training-expansion-in-the-lack-of-accessible-full-flight-simulators)
  - [2.1 Problem (Scalability & Cost)](#21-problem-scalability--cost)
  - [2.2 Solution (VR-Based Training Simulator)](#22-solution-vr-based-training-simulator)
  - [2.3 Potential Directions](#23-potential-directions)
  - [2.4 Value Proposition](#24-value-proposition)
- [3. AI Feedback for Self-Directed Learning in the Absence of a Pilot Instructor](#3-ai-feedback-for-self-directed-learning-in-the-absence-of-a-pilot-instructor)
  - [3.1 Problems (Training Without Data and Instructor Bottleneck)](#31-problems-training-without-data-and-instructor-bottleneck)
  - [3.2 Solution (Multimodal Data Collection and AI Feedback Report)](#32-solution-multimodal-data-collection-and-ai-feedback-report)
  - [3.3 Potential Directions](#33-potential-directions)
  - [3.4 Value Proposition](#34-value-proposition)
- [4. Prototyping & Preliminary Findings (AY2025/26 Sem 1)](#4-prototyping--preliminary-findings-ay202526-sem-1)
  - [4.1 VR Scenario Setup & Key Events](#41-vr-scenario-setup--key-events)
  - [4.2 Logging & Synchronization Workflow](#42-logging--synchronization-workflow)
  - [4.3 Data Preprocessing Pipeline](#43-data-preprocessing-pipeline)
  - [4.4 Speech Recognition: WER & Error Patterns](#44-speech-recognition-wer--error-patterns)
  - [4.5 Eye-Gaze Logs: Artifacts & Reliability](#45-eye-gaze-logs-artifacts--reliability)
- [5. Future Goals & Gantt Chart (AY2025/26 Sem 2 Plan)](#5-future-goals--gantt-chart-ay202526-sem-2-plan)
  - [5.1 Testing & Validation](#51-testing--validation)
  - [5.2 Integration & Experiments → AI Report](#52-integration--experiments--ai-report)
- [6. Conclusion](#6-conclusion)
- [References](#references)
- [Appendix](#appendix)

---

## Abstract

Pilot Monitoring (PM) plays a critical role in flight safety through situational awareness, cross-checking, and timely callouts. However, current PM training remains resource-intensive, subjective, and constrained by instructor and simulator availability. This project proposes a VR-based, AI-assisted evaluation framework to enhance scalability and objectivity in PM training. The prototype integrates eye-tracking, speech recognition, and event logging within a realistic Busan approach scenario to generate multimodal evidence aligned with Competency-Based Training and Assessment (CBTA) competencies. Preliminary tests identify synchronization and speech-recognition challenges but confirm the feasibility of automated performance capture. By transforming training sessions into traceable, data-driven feedback reports, this work aims to shift PM evaluation from score-centric to explanation-centric learning, improving transparency, consistency, and self-training efficiency.

---

## 1. Introduction and Background

### 1.1 Context and Motivation

Modern flight safety depends on the coordination between the Pilot Flying (PF) and the Pilot Monitoring (PM). The PM maintains situational awareness, cross-checks flight parameters, manages communications, and intervenes when deviations occur. The International Federation of Air Line Pilots' Associations emphasizes that effective PM "enhances situational awareness and reduces operational errors" (IFALPA, 2024). However, despite its critical importance, PM training and assessment remain largely manual, subjective, and resource-intensive, lagging behind advances in simulator fidelity and automation (IFALPA, 2024).

### 1.2 Project Objective

We develop a VR-based PM evaluation ecosystem that (i) scales training capacity, and (ii) converts sessions into objective evidence via multimodal capture (gaze, speech, events, physiology) and AI-assisted reports, aligned to CBTA/EBT competency outcomes (IATA, 2024; IATA, 2025).

---

## 2. VR-based Training Expansion in the Lack of Accessible Full-Flight Simulators

### 2.1 Problem (Scalability & Cost)

Full Flight Simulators (FFS) remain the gold standard for pilot training, offering high realism and motion feedback essential for competency-based assessment. However, they are extremely expensive—each unit costs around USD 20 million and requires specialized facilities, maintenance staff, and scheduling coordination. Despite their effectiveness, the limited global fleet of FFS units cannot keep pace with the projected demand for approximately 650,000 new pilots by 2043 (Boeing, 2025; CAE, 2025). Moreover, each training session depends on the availability of certified instructors and fixed motion-device time slots, further constraining throughput and accessibility. As a result, the current FFS-based model struggles to scale efficiently, creating a bottleneck that restricts training capacity and delays the development of essential pilot monitoring competencies.

### 2.2 Solution (VR-Based Training Simulator)

Currently, Virtual Reality (VR) cockpit simulators are developed to address this issue. It acts as an immersive, cost-efficient alternative to traditional FFS for recurrent pilot monitoring practice. As the aviation sector faces both rising pilot demand and a shortage of qualified instructors and simulator slots, the scalability of conventional training models is increasingly constrained. A VR-based cockpit provides an interactive 3-dimensional environment in which pilots can practise procedures, observe instrument behaviour, and receive real-time performance feedback. Compared to FFS, VR systems are portable, lower in cost, and can operate simultaneously in parallel training bays.

### 2.3 Potential Directions

When comparing the current virtual reality (VR) scenario to the fully controllable panels inside a Full Flight Simulator (FFS), the VR environment still cannot replicate the complete training experience that Pilot Monitoring (PM) trainees receive in the FFS. The current VR scenario supports Busan approach tasks, but only a limited subset of cockpit controls is interactive (e.g., the degree of the flap can only be changed from 15 degrees to 30 degrees). Critical systems such as autopilot mode control, Mode Control Panel (MCP) selections, altitude and heading adjustments, and Control Display Unit/Flight Management Computer (CDU/FMC) interactions remain non-interactive or only partially implemented, limiting the fidelity of monitoring tasks. In the next development phase, we will expand the range of interactive cockpit elements to reduce the "multiple-choice" feel and avoid pre-scripted deviations of the flight scenarios.

A detailed introduction to the Busan approach case and its associated interaction flow will be provided later in Section 4.1.

### 2.4 Value Proposition

#### 2.4.1 Spatial Efficiency

Conventional FFS installations are large, motion-based systems requiring dedicated facilities, maintenance, and technical staff. In contrast, each VR simulator occupies only a fraction of the physical space and has minimal maintenance costs compared to the FFSs.

Internal benchmarking and external industry data suggest that with the same spatial and maintenance resources needed to operate one FFS, approximately six VR-based simulator stations can be run in parallel, each equipped with a pilot cockpit seat and full-scale flight controls (DRDC, 2024).

This parallelization provides a six times increase in training throughput for equivalent infrastructure. The arrangement is especially suitable for procedural or monitoring-oriented sessions that do not require full-motion cues that the PF requires. In distributed environments such as university flight programmes or airline training centres, multiple VR bays can therefore serve several trainees simultaneously.

#### 2.4.2 Cost Efficiency

Cost is also a critical component in training system design. A single Level-D (highest level) FFS typically costs USD 15–25 million, excluding facility and long-term maintenance expenses (Boeing, 2025). By comparison, a commercial grade VR training cockpit costs roughly USD 4,000–5,000 per unit, depending on configuration. This means that the budget allocated for one FFS (~USD 20 million) could theoretically fund around 5,000 VR training units which is enough to equip multiple training centres or individual pilot stations for recurrent practice.

VR systems also incur substantially lower lifecycle costs: lower power consumption and less technical downtime. According to Cambridge University's Assessment of Evidence-Based Training in a Collaborative VR Flight Simulator (2025), VR training devices "enable multiple trainees to participate simultaneously, addressing bottlenecks in training schedules while maintaining comparable procedural effectiveness."

---

## 3. AI Feedback for Self-Directed Learning in the Absence of a Pilot Instructor

### 3.1 Problems (Training Without Data and Instructor Bottleneck)

Even within advanced simulator environments, critical training data often remain inaccessible outside the system, making real-time debriefing difficult and forcing instructors to rely on memory-based observations rather than objective evidence (IATA, 2024). This lack of data weakens feedback quality and consistency. Intensifying the issue, instructor availability has not kept pace with the growing number of trainees, resulting in delays and reducing opportunities for detailed, behavior-specific coaching. Human-factors research further highlights that many Pilot Monitoring (PM) lapses arise from subtle attention breakdowns and delayed anomaly detection, which are issues that are difficult to capture through traditional observation alone (Mumaw et al., 2021; Dismukes & Berman, 2021).

### 3.2 Solution (Multimodal Data Collection and AI Feedback Report)

While traditional pilot training relies mainly on the instructor's observation and qualitative judgment, the shortage of experienced instructors in the next decade will cause a data gap in training evaluation. Together, these challenges underscore the need for a scalable, evidence-based training system that can provide objective, data-driven insight into pilot performance.

#### 3.2.1 Automated Multimodal Data Collection

To address the problem, the project's second major focus integrates automated multimodal data collection directly within the VR cockpit system. This integration enables the system to capture objective, synchronized data streams without depending on continuous instructor presence.

The VR simulator continuously logs the following data:

1. Eye-tracking data, to capture where and how long the trainee's visual attention is distributed;
2. Speech recognition data, to record standard callouts, timing, and communication accuracy that will enable latency and completeness analysis (Pellegrini et al., 2019);
3. Simulator event logs, to document control inputs, checklist sequences, and task completions;
4. Physiological signals, such as heart rate and galvanic skin response (GSR), are used to estimate workload and stress levels. The indicators, such as GSR/HR, will indicate workload peaks explaining why lapses occur (stress vs. knowledge) (Harrivel et al., 2017).

All data streams are aligned with the Observable Behaviors (OBs) defined under the IATA Evidence-Based Training (EBT) competency model. By correlating multimodal evidence with standardized OBs explained in Figure 3.1, the system provides objective, competency-based evaluation that is reproducible and aligned with established aviation training frameworks.
<div align="center">

![Figure 3.1 Mapping of data collection with OBs](assets/images/figure3-1.png)

**Figure 3.1** Mapping of data collection with OBs

</div>


#### 3.2.2 AI-Assisted Report Generation

The second component of this solution is an AI-assisted report generator that automatically interprets the collected multimodal data.

After each session, the AI engine will first analyze and categorize behaviours into corresponding OB competencies; Secondly, the AI engine will generate visual summaries (e.g., gaze heatmaps, speech timelines, and event highlights); Thirdly, the system will produce a comprehensive performance report summarizing strengths, weaknesses, and recommendations. Each observation in the report is traceable to data, ensuring transparency and consistency across evaluations. This system enables trainees and instructors to review synchronized visual evidence.

### 3.3 Potential Directions

#### (a) Speech Module

The speech module can improve generic Azure Speech Recognition (ASR) with an aviation-specific lexicon and phrase set, supported by a Word Error Rate gated acceptance mechanism to filter out low-confidence transcripts (Zhao, 2023). This would reduce aviation-term misrecognition and prevent incorrect callouts from entering the assessment pipeline, resulting in more reliable and consistent evaluation of PM communication performance.

#### (b) Eye-Gaze Tracking

The gaze module applies low-pass filtering, which removes high-frequency uncertainties while preserving meaningful eye movements (Lee, Jeong, Kim, Shin, & Kim, 2022). Prior work has shown that refining pupil-orbit modelling can further enhance gaze-estimation accuracy by reducing tracking noise and stabilizing eye-movement signals. The module also uses event-anchored windows to analyze attention around critical moments, such as the time period during the "Wrong Runway" scenario. Together, these steps stabilize gaze data, improve fixation interpretation, and support clearer detection of whether the PM scanned key instruments or visually identified anomalies.

#### (c) Physiology Module

Examples of physiology modules can be the Galvanic Skin Response (GSR) sensor and the Heart Rate Monitor (HRM), and pupil-based measures to infer the pilot's cognitive load during monitoring tasks (Zhou, Jung, & Chen, 2015). Prior research shows that GSR features reliably track fluctuations in mental workload and can differentiate low-, medium-, and high-load conditions, making them suitable for dynamic workload assessment. Because cognitive workload is not directly observable in VR, these physiological signals provide an objective proxy that allows the system to detect overload or attentional narrowing and better explain performance lapses. For instance, the GSR reading would rise when more effort has been made by the PM; the HRV rate would decrease when the PM feels underloaded.

#### (d) Combination

The module would combine speech, gaze, and physiological data into unified indicators using multimodal learning and align with the scenarios (Xu et al., 2025; Minos et al., 2025). By capturing verbal behavior, visual scanning, and workload simultaneously, the system forms a more complete picture of PM performance throughout the training and identifies patterns such as delayed anomaly detection or incomplete monitoring. This action will enable more accurate and evidence-based training feedback.

### 3.4 Value Proposition

The integrated data collection and AI reporting framework creates a transparent, scalable, and evidence-based feedback ecosystem that enhances both training quality and efficiency.

#### 3.4.1 Evidence-Supported Evaluation

Traditional instructor-led evaluations in aviation training are limited by the lack of data. Research by the European Union Aviation Safety Agency (EASA, 2023) and IATA CBTA Guidance emphasizes the importance of complementing qualitative instructor judgment with quantitative performance evidence to improve training reliability. By combining these quantitative measures, the framework delivers assessments that are data-driven and reproducible, thereby meeting the ICAO requirement for "objective performance evidence" in competency-based training.

#### 3.4.2 Self-Directed Learning

Conventional debriefing relies heavily on instructor recall and interpretation. Data-driven debriefing introduces personalized, visual feedback that supports self-regulated learning and sustained skill retention.

Within the proposed framework, each trainee can independently review the data collected and analyzed, such as the synchronized heatmaps, speech timelines, and procedural logs, and this can be done immediately after each session. This self-directed feedback loop encourages reflective learning, allowing pilots to recognize errors, reinforce correct behaviors, and build cognitive awareness.

#### 3.4.3 Continuous Improvement

Instructor shortages and limited FFS simulation opportunities have constrained the scalability of traditional training programs. The proposed multimodal-AI architecture transforms the training ecosystem from an individual assessment model to a data-driven analytical platform capable of institutional learning. The proposed framework therefore supports large-scale analytics capable of identifying common weaknesses among PMs (e.g., delayed scan initiation, communication lapses, checklist deviations) and quantifying training effectiveness over time. These insights provide evidence-based scenario design and optimized instructor resource allocation.

---

## 4. Prototyping & Preliminary Findings (AY2025/26 Sem 1)

This part provides how the VR training prototype was deployed, evaluated, and instrumented for multimodal data collection. It begins by describing the scenario setup and the embedded pilot-monitoring events used to assess trainee responses in a controlled flight-approach sequence. The logging infrastructure, comprising speech recognition, eye-tracking, and automatic control-event capture, is then introduced together with the temporal synchronization workflow required to align these heterogeneous data streams with screen recordings. Next, the section outlines the Python-based preprocessing pipeline developed to convert raw logs into structured, analysis-ready formats. Finally, preliminary evaluations of the speech-recognition and eye-gaze modules are presented by the system, highlighting current system capabilities, observed artifacts, and limitations that would be discussed respectively in the following sections. Collectively, these components form the foundation for subsequent multimodal analysis of trainee behaviour in the VR environment.

### 4.1 VR Scenario Setup & Key Events

The flowchart in Figure 4.1 summarizes the setup process for the VR training prototype. The procedure begins by connecting the VR headset to the laptop and adjusting its fit for comfortable use. After that, the Vital application is launched to manage communication between the headset and laptop.

Display synchronization between both devices is then verified. If synchronization fails, the VR program is re-launched using the discrete graphics card to ensure stable rendering. Once synchronized, the scenario executable is started.

Depending on experimental needs, screen recording may be enabled. For high-resolution video and speech capture, Bandicam is used on the laptop; otherwise, the headset's built-in recorder is sufficient.

After setup, the trainee presses "Start" in the headset interface. If needed, a short tutorial on cockpit button and flap operations is shown; experienced users may skip this step. This process ensures consistent visual output and supports optional data recording for later analysis.

![Figure 4.1 Flowchart of VR Scenario Setup Process](assets/images/figure4-1.png)

**Figure 4.1** Flowchart of VR Scenario Setup Process

Based on this, we implemented a Busan approach procedure incorporating three pilot-monitoring (PM)-relevant events: LNAV not re-engaged, Wrong Runway alignment, and High on Profile (IFALPA, 2024). Figure 4.2 illustrates the flight path used in the scenario.

![Figure 4.2 Flight Path and Implanted PM Events](assets/images/figure4-2.png)

**Figure 4.2** Flight Path and Implanted PM Events

In Figure 4.2, blue words along with the grey boxes refer to the way points along the flight path in the scenario. Pilot monitoring tasks are stated by sequence under them. The red highlighted boxes refer to the introduction period of the errors.

Each of the three embedded human-error events is triggered at specific waypoints along the approach. Trainees are required to identify and resolve these errors in real time. If no corrective action is taken, the scenario will automatically execute a correction to ensure continuity of the simulation.

During testing, the trainee was able to perform pilot-monitoring (PM) tasks in , and the scenario responded appropriately to the user's actions. This demonstrates that the VR environment can replicate key procedural aspects of flight training.

Only a subset of cockpit controls is currently interactive. For instance, the flap control allows adjustment only between 15° and 30°, rather than the full operational range of 0° to 45° found in an actual aircraft. The next development goal is to extend interactivity to a wider range of cockpit components to enhance realism and procedural fidelity.

### 4.2 Logging & Synchronization Workflow

The current logging system records multiple data streams during each scenario session. For example, in the same trial described earlier, the system successfully captures the trainee's spoken command ("6000 check") through the speech recognition module, tracks eye-gaze movements, and automatically logs control events such as flap adjustments. A summary of these recorded entries is presented in the following Figure 4.3.

![Figure 4.3 Example of Automatic Logging Output](assets/images/figure4-3.png)

**Figure 4.3** Example of Automatic Logging Output (Manual Highlight for Illustration)

To enable cross-modal analysis, temporal synchronization between the event logs and screen recordings is required. However, because the video recording is manually initiated while the log recording starts automatically upon scenario launch, a non-zero time offset exists between the two datasets. Let the actual synchronization offset be denoted as Δt_sync.

Two measurable components contribute to this offset:

1. Δt_file: the delay value encoded in the video filename, representing the difference between the log start time and video start time as recorded by the operator.
2. Δt_event: the time shift estimated by matching a distinct event visible in both the video and log (e.g., the frame where flap movement occurs or a verbal command is recognized).

The total synchronization offset is therefore approximated as:

**Δt_sync = Δt_file + Δt_event**

Applying this correction aligns the video timeline t_video to the log timeline through:

**t_aligned = t_video + Δt_sync**

This method provides a practical means of achieving temporal consistency across data sources without requiring hardware-level clock synchronization. The resulting alignment allows each visual frame to be associated with corresponding speech, gaze, and control events, enabling detailed multimodal analysis of trainee behavior and system response during the VR session.

### 4.3 Data Preprocessing Pipeline

The original event logs were exported in CSV format, where each entry followed the structure:

**[Time] Category:Description**

For example, an event entry may appear as:

**[409.1554] EVENTCODE:VARY_SPEED**

While this format preserves temporal information, it is not user-friendly for analysis or correlation across multimodal datasets. To address this, we developed Python-based data conversion and structuring pipeline (refer to Appendix A for full implementation). The script automatically parses the raw CSV logs and converts them into a filterable Excel workbook, enabling straightforward sorting, searching, and cross-session comparison of events. Figure 4.4 presents an example of converted Excel output, which corresponds to the same period as shown in Figure 4.3.

![Figure 4.4 Example of Filtered Excel](assets/images/figure4-4.png)

**Figure 4.4** Example of Filtered Excel (Manual Highlight for Illustration)

The implementation makes use of the pandas and openpyxl libraries. The pandas package handles text parsing, pattern extraction, and numerical conversion, while openpyxl enables Excel writing, column resizing, and auto-filtering. The script reads the raw log line by line, extracts timestamps, event titles, and descriptions using regular expressions, and computes aligned timestamps with user-specified offsets. These timestamps are then converted into a more interpretable mm:ss format using a custom formatter.

The workflow begins by prompting the user to input the target filename and an optional offset value. The script processes the file, splits it into multiple categorized sheets: All, SPEECH, EyeGaze, and Others. It further exports them into an Excel file. The EyeGaze entries are further parsed to extract gaze direction (left/right), event type (enter/exit), and the associated cockpit element. In addition, the script automatically adjusts column widths, applies filters, and freezes header rows to improve readability.

This modular design allows efficient batch processing of event logs from different trainees with minimal manual effort. However, the synchronization offset between event logs and videos remains manually calculated due to inconsistent video naming conventions. Automating this offset estimation will be the next development goal to complete the end-to-end preprocessing pipeline in our proposed AI report.

### 4.4 Speech Recognition: WER & Error Patterns

Figure 4.5 presents samples of the filtered and synchronized speech-recognition logs. To evaluate recognition performance, the recognized transcripts were manually compared against the ground-truth spoken words across three representative samples.

![Figure 4.5 Sample of Filtered Speech Data](assets/images/figure4-5.png)

**Figure 4.5** Sample of Filtered Speech Data

![Figure 4.6 Sample of Cleaned and Corrected Speech Data](assets/images/figure4-6.png)

**Figure 4.6** Sample of Cleaned and Corrected Speech Data

Figure 4.6 shows the manually cleaned versions, where missing or truncated phrases were filled in to match the actual spoken content.

To quantify recognition accuracy, we use the Word Error Rate (WER) calculation, a standard metric in speech-recognition evaluation defined as:

**WER = (Substitution + Deletion + Insertion) / Number of Words**

Features and results of the 3 tested samples by us are as shown in Table 4.7:

| Sample | Features | WER |
|--------|----------|-----|
| A | Provided Datasets | 34.5% |
| B | Relatively Noisy Environment | 45.1% |
| C | Quiet Conditions | 32.2% |

**Table 4.7** Example of Filtered Excel

The overall average WER of approximately 37% reflects a balance between recognition accuracy and the low latency required for real-time interaction, since the VR scenario must respond instantly to specific spoken commands.

For instance, when the user says "Joining downwind Runway 18R," the system recognizes the phrase and triggers the virtual air-traffic controller's acknowledgment response, thereby demonstrating functional interaction between speech input and scenario behavior.

However, several recognition errors were found to have semantic significance that could impact scenario logic. Notable examples are shown in Table 4.8:

| Intended Phrase | Recognized Output | Impact |
|----------------|-------------------|---------|
| LNAV not engaged | Dial Neff not engaged | Alters meaning of navigation mode error |
| Direct to AB18R | Direct to a bit money right | Corrupts runway identifier |
| Wrong runway | Run runway | Prevents triggering of the 'Wrong Runway' event |

**Table 4.8** Examples of Notable Speech Recognition Mismatch

These findings indicate that while the current speech-recognition module performs reasonably well in ideal conditions, its accuracy is sensitive to background noise and phrase structure. Future work may focus on fine-tuning the language model with aviation-specific vocabulary and implementing real-time correction mechanisms to mitigate critical misrecognitions.

### 4.5 Eye-Gaze Logs: Artifacts & Reliability

The second data modality analyzed was the eye-gaze tracking logs, which record trainees' visual attention across cockpit interfaces. Each entry contains four main fields:

**eyeIdentifier_action_elements remarks**

For example, an eye gaze entry may appear as:

**right_enter_PFD speed**

The cockpit display as shown in Figure 4.9 is divided into distinct visual regions, such as the Mode Control Panel (MCP), Navigation Display (ND), Primary Flight Display (PFD), and Flight Management Computer (FMC). A example of region division is on the right.

![Figure 4.9 Cockpit Inward Vision and Element Segmentation](assets/images/figure4-9.png)

**Figure 4.9** Cockpit Inward Vision and Element Segmentation

A new record is generated whenever the user's gaze crosses into or out of one of these defined regions. From the processed data, four preliminary artifact patterns were observed, summarized below.

#### 4.5.1 High-Frequency Bursts

One of the most prominent artifacts observed in the eye-gaze data was the occurrence of high-frequency bursts, characterized by clusters of rapidly alternating enter and exit events within short time intervals. These bursts typically appear as dense sequences in the event timeline, often spanning only a few seconds but containing numerous transitions between adjacent cockpit elements. Such patterns do not correspond to deliberate scanning behavior; instead, they likely arise from the instability of gaze boundary detection. When the fixation point falls near the edge between two interface regions, for samples in Figure 4.10, between the Mode Control Panel (MCP) and the middle window, minor fluctuations in gaze estimation can cause repeated crossings of the region boundary, resulting in multiple spurious entries in the log.

![Figure 4.10 Typical Samples of High-Frequency Bursts](assets/images/figure4-10.png)

**Figure 4.10** Typical Samples of High-Frequency Bursts

#### 4.5.2 Data Gaps and Missing Segments

Another recurring issue identified in the gaze recordings was the presence of data gaps and missing segments. These appear as prolonged intervals in the event log where no gaze activity is recorded, despite the video evidence showing continuous visual fixation by the user. For example, as shown in Figure 4.11, there are only records of eye gaze data on the Primary Flight Display (PFD), while the recorded video shows a a few seconds of fixations on the middle window. Such discontinuities suggest temporary interruptions in data acquisition rather than genuine lapses in attention.

![Figure 4.11 Typical Sample with Video of Data Missing Segments](assets/images/figure4-11.png)

**Figure 4.11** Typical Sample with Video of Data Missing Segments

The most probable causes include momentary signal loss due to eye blinks, partial occlusion of the sensors by eyelids or reflections from the headset lens, and occasional latency within the eye-tracking software pipeline. In some instances, these missing segments also coincide with rapid head movements, which can momentarily shift the gaze beyond the calibrated tracking region.

#### 4.5.3 Left-Right Eye Imbalance

An additional irregularity observed in the gaze data was the imbalance between left- and right-eye recordings. As illustrated in Figure 4.12, the proportion of entries generated by each eye varied considerably across samples. In Sample A, right-eye events accounted for approximately 60% of all records, whereas in Sample B, the trend reversed, with the left eye contributing about 65%.

![Figure 4.12 Pie Charts of Eye Gaze Log Entry Components in Two Samples](assets/images/figure4-12.png)

**Figure 4.12** Pie Charts of Eye Gaze Log Entry Components in Two Samples

This asymmetric result suggests that the logging mechanism may not consistently record both eyes simultaneously. A plausible explanation is that when both eyes fixate on the same cockpit element, the system registers only one active stream, typically whichever eye first crosses the region boundary. While this imbalance does not invalidate the overall gaze trajectories, it introduces potential bias when analyzing fixation density or cross-eye coordination. To improve reliability, future sessions should include periodic recalibration and, if possible, enforce synchronized dual-eye logging to ensure balanced data capture.

#### 4.5.4 Unmatched Entry–Exit Pairs

The final artifact identified in the gaze dataset involves unmatched entry–exit pairs, where the number of recorded enter and exit events does not align. In an ideal logging sequence, each entry event marking the gaze's entry into a cockpit element should be followed by a corresponding exit event when the gaze leaves that element. However, several inconsistencies were observed, as illustrated in Figure 4.13, where the gaze appeared to enter the Primary Flight Display (PFD) but exited from the Navigation Display (ND).

![Figure 4.13 Sample of Unmatched Entry–Exit Pairs](assets/images/figure4-13.png)

**Figure 4.13** Sample of Unmatched Entry–Exit Pairs

These anomalies are most likely caused by overlapping or ambiguously defined region boundaries in the cockpit interface layout. When the gaze point transitions along shared borders, even small estimation errors in gaze coordinates can cause the tracker to misclassify the region change, resulting in skipped or mismatched entries. Another contributing factor may be short data gaps between consecutive samples, which interrupt the continuity of gaze tracking and prevent proper event pairing.

Such inconsistencies pose challenges for event-based gaze analysis, especially when calculating dwell durations or transitions between specific instruments. To address this, a post-processing correction step could be implemented to identify and reconcile orphaned entries by comparing temporal proximity and spatial adjacency of successive events. Refining the boundary definitions of cockpit elements within the VR interface will also help reduce ambiguity and improve event correspondence accuracy in future data collections.

Based on the findings, the current eye-tracking system is capable of capturing general gaze behavior but still exhibits several reliability issues. The four main artifacts—high-frequency bursts, data gaps, eye imbalance, and unmatched entry–exit pairs—indicate that the recorded data require further filtering before being used for quantitative analysis. These artifacts mainly arise from boundary instability, signal loss, and inconsistent dual-eye recording.

Overall, the gaze logs are sufficient for identifying major attention shifts between cockpit instruments but not yet precise enough for detailed fixation analysis. Future improvements should therefore focus on refining region boundaries, stabilizing signal capture, and automating artifact detection to enhance the accuracy and consistency of gaze-based behavioral evaluation.

---

## 5. Future Goals & Gantt Chart (AY2025/26 Sem 2 Plan)

### 5.1 Testing & Validation

In the first half of the project, the work will focus on testing and validation to prepare the system for full-scale integration. The VR flight scenario will be expanded by developing additional interactive cockpit components, including the autopilot system, the Mode Control Panel, altitude and heading selectors, and the Control Display Unit/Flight Management Computer pages. These enhancements aim to increase operational fidelity and support more authentic pilot-monitoring interactions.

The Azure Speech Recognition system will be upgraded by incorporating aviation-specific vocabulary and tuning recognition thresholds. Iterative testing will be conducted to minimise the Word Error Rate (WER) and improve recognition robustness under cockpit-noise conditions.

Eye-gaze processing will be refined by applying low-pass filtering to stabilize the signal and by aligning fixation windows around key cockpit events. These adjustments will ensure cleaner, temporally coherent gaze traces across trials, improving their suitability for subsequent behavioral analysis.

A physiology sensor study will then be conducted to evaluate the feasibility of incorporating galvanic skin response, heart-rate metrics, and other biosensor measures. Small-scale experiments on various experimentees will assess signal stability, artifact behavior, and recording quality to determine whether these measurements should be integrated into the main multimodal dataset.

Work on multimodal fusion will involve reviewing and comparing integration strategies that combine gaze, speech, and physiological signals. Both feature-level and decision-level approaches will be examined, and a prototype pipeline will be developed to test alignment methods, modelling options, and the consistency of cross-modal behavioral interpretation.

Finally, there will be a buffer period before the middle of the semester for troubleshooting, retesting, and delayed integration. This ensures that each refined subsystem meets data quality and robustness requirements before progressing to broader validation activities.

### 5.2 Integration & Experiments → AI Report

In the second half of the project, the focus will shift toward system integration with experimental validation combined into the AI-assisted reporting, consolidating all previously developed modules into a unified and operational framework.

The integration phase will combine all improved components, including the interactive cockpit, ASR module, GSR/heart-rate sensors, and logging into a single data model with unified time alignment. The integrated system will be validated against IATA 2024/2025 data model standards to ensure compatibility with international training data requirements (IATA, 2024/2025).

Next, experiments will be conducted using small-scale VR training sessions with Pilot Monitoring (PM) trainees to evaluate the integrated system under realistic Busan-approach conditions. Synchronization and data logging workflows will be verified through mock training runs by different people, and the real-time recording mechanism and post-session analysis will be checked. Multimodal data, including gaze, speech, and physiological signals, will be collected in the runs. Quantitative feedback will be analyzed to identify areas for refinement prior to the final reporting phase.

The AI-assisted report stage will focus on developing an automated analysis pipeline to generate synchronized timelines, heatmaps, and key-event summaries derived from multimodal data. These outputs will be mapped onto ICAO Operational Behaviors (OBs) and IATA CBTA competency dimensions based on our analysis in Figure 3,1. The system will also produce evidence-based insights. By explaining why performance lapses occur, we contribute to transparent, data-driven PM evaluation (IATA, 2024).

Finally, the evaluation and documentation phase at the end will consolidate all project outcomes. This phase will also finalize the user manual, project documentation, and presentation slides for final review and submission. Academic deliverables will be aligned for consistency and prepared for the final presentation, marking the completion of the validation and integration cycle.

Condensed workflows are presented in Figures 5.1 and 5.2.

![Figure 5.1 Gantt Chart (Sem 2 first half)](assets/images/figure5-1.png)

**Figure 5.1** Gantt Chart (Sem 2 first half)

![Figure 5.2 Gantt Chart (Sem 2 second half)](assets/images/figure5-2.png)

**Figure 5.2** Gantt Chart (Sem 2 second half)

---

## 6. Conclusion

This project establishes a foundation for modernizing Pilot Enhancing Monitoring (PM) training through a dual-focus approach: accessibility via VR-based simulation and improving objectivity through multimodal, AI-assisted evaluation. The prototype demonstrates that immersive VR environments can replicate key procedural elements of flight monitoring, while integrated gaze, speech, and event data enable deeper insight into trainee performance beyond traditional observation. Preliminary findings have clarified both technical challenges and methodological opportunities, leading to the next phase of system integration and evaluation. Moving forward, the project will focus on refining data synchronization, enhancing recognition accuracy, and using AI to learn how different inputs can be combined into meaningful, evidence-based feedback. Ultimately, our work aims to shift PM training toward a more transparent, scalable, and learner-centered paradigm—one that emphasizes understanding and improvement over bare numerical scoring.

---

## References

Ahlstrom, U., & Friedman-Berg, F. J. (2006). Using eye movement activity as a correlate of cognitive workload. *International Journal of Industrial Ergonomics, 36*(7), 623–636. https://doi.org/10.1016/j.ergon.2006.04.002

Boeing. (2025). *Pilot and Technician Outlook 2025–2043*.

CAE. (2025). *Pilot training capacity and instructor forecast report*.

Dismukes, R. K., & Berman, B. A. (2021). *Checklists and Monitoring: Why Crucial Defenses Sometimes Fail*. NASA Ames Research Center. https://human-factors.arc.nasa.gov/publications/NASA_TM_20210000047.pdf

DRDC. (2024, May 21). Learning to fly: DRDC research examines virtual reality training for pilots. https://science.gc.ca/site/science/en/blogs/defence-and-security-science/learning-fly-drdc-research-examines-virtual-reality-training-pilots

ETH Zurich. (2019). Tracking the eye of the pilot. https://ethz.ch/en/news-and-events/eth-news/news/2019/11/tracking-the-eye-of-the-pilot.html

Gazoni, E., & Clark, C. (2024). *openpyxl: A Python library to read/write Excel 2010 xlsx/xlsm/xltx/xltm files* (Version 3.1.5) [Computer software]. https://openpyxl.readthedocs.io/

Helmke, H., et al. (2022). *Readback error detection in ATC communication: A speech-recognition approach*. SESAR Innovation Research.

Harrivel, A. R., et al. (2017). *Physiological state prediction using multimodal sensing during simulated flight*. NASA/TM-2017-219655.

Holt, R. W. (2018). Rating scale design and rater training for performance measurement in complex systems. *Human Factors, 60*(3), 321–335. https://doi.org/10.1177/0018720818761557

IFALPA. (2024). *Enhancing Pilot Monitoring*. Briefing Leaflet 24HUPBL02. https://www.ifalpa.org/media/4086/24hupbl02-enhancing-pilot-monitoring.pdf

IATA. (2024). *Evidence-Based Training Implementation Guide* (Ed. 2). https://www.iata.org/contentassets/1e9a41b2b69b4e77a3f4cf2a84bdbed4/evidence-based-training-guide.pdf

IATA. (2025). *Competency assessment and evaluation for pilots, and instructors/evaluators guidance material* (4th). https://www.iata.org/contentassets/c0f61fc821dc4f62bb6441d7abedb076/competency-assessment-and-evaluation-for-pilots-instructors-and-evaluators-gm.pdf

Lee, S., Jeong, J., Kim, N., Shin, M., & Kim, S. (2022). Improving performance of the Human Pupil Orbit Model (HPOM) estimation method for eye-gaze tracking. *Sensors, 22*(23), 9398. https://www-proquest-com.libproxy1.nus.edu.sg/publiccontent/docview/2748560437?pq-origsite=summon&sourcetype=Scholarly%20Journals

Lefrançois, O., et al. (2021). Comparing expert and novice pilots' gaze patterns during instrument approaches. *Cognitive Research: Principles and Implications, 6*(1), 54.

Liu, D. J. (2025). Automatic speech recognition in ATC: Robustness challenges and adaptation. *Journal of Aviation Technology and Engineering, 14*(2), 73–82.

Liu, Y., et al. (2024). Low-interference wearable sensors for real-time cognitive workload detection. *IEEE Sensors Journal, 24*(5), 8812–8824.

Minas, D., Tews, L., Fotopoulos, A., Xenos, M., Calvo-Córdoba, A., & Rivas-Vidal, M. (2025). Eye-Tracking technologies for facilitating multimodal interaction in aviation environments. *Engineering Proceedings, 90*(1), 110.

*Multimodal Methods for Analyzing Learning and Training Environments: A Systematic Literature Review*. (2024). arXiv:2408.14491.

Mumaw, R. J., Berman, B. A., & Dismukes, R. K. (2021). *Analysis of pilot monitoring skills and review of training methods*. NASA TM-2021-0000047. https://human-factors.arc.nasa.gov/publications/NASA_TM_20210000047.pdf

Pauszek, J. R., et al. (2023). Reliability of eye-movement metrics across devices and sessions. *Frontiers in Psychology, 14*, 1134059.

Pellegrini, T., Farinas, J., Delpech, E., Lancelot, F., IRIT, Université Paul Sabatier, CNRS, Toulouse, France, & Airbus, Toulouse, France. (2019). The Airbus ATC speech recognition 2018 challenge. *INTERSPEECH 2019*. https://www.isca-archive.org/interspeech_2019/pellegrini19_interspeech.pdf

The pandas development team. (2024). *pandas-dev/pandas: Pandas* (Version 2.2.2) [Computer software]. Zenodo. https://doi.org/10.5281/zenodo.3509134

Van de Merwe, K., van Dijk, H., & van den Berg, F. (2012). Monitoring pilot situation awareness by means of eye-movement analysis. *Aviation, Space and Environmental Medicine, 83*(5), 509–516.

Wang, Z., et al. (2024). A review of automatic speech recognition for ATC communications. *Aerospace, 11*(2), 78.

Xu, R., Cao, S., Barnett-Cowan, M., Bulbul, G., Irving, E., Niechwiej-Szwedo, E., & Kearns, S. (2025). In-flight multimodal data collection for assessing pilot cognitive states. *MethodsX, 15*, 103589.

Yu, D., et al. (2021). Multimodal physiological sensing for pilot workload estimation. *IEEE Access, 9*, 147865–147878.

Zhao, S. (2023). Speech recognition system of specific vocabulary. In *2023 3rd Asia-Pacific Conference on Communications Technology and Computer Science (ACCTCS)*. IEEE. https://doi.org/10.1109/ACCTCS58815.2023.00018

Zhou, J., Jung, J. Y., & Chen, F. (2015). Dynamic workload adjustments in human-machine systems based on GSR features. In J. Abascal, S. B Shum, & M. Fetter (Eds.), *Human-Computer Interaction – INTERACT 2015, Part I* (Lecture Notes in Computer Science, Vol. 9296, pp. 550-558). Springer. https://link-springer-com.libproxy1.nus.edu.sg/chapter/10.1007/978-3-319-22701-6_40

---

## Appendix

### Python Script for Data Preprocessing

```python
import pandas as pd
import openpyxl
from openpyxl import load_workbook
from openpyxl.utils import get_column_letter

print(pd.__version__)
print(openpyxl.__version__)

file = input("Enter file name (without .csv): ").strip()
OFFSET = input("Enter OFFSET in seconds (default 0): ").strip()
OFFSET = float(OFFSET) if OFFSET else 0.0

input_file = file+".csv"
output_file = file+"-off"+str(OFFSET)+".xlsx"

# Read CSV as plain text (one column first)
with open(input_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

df = pd.DataFrame({"raw": [line.strip() for line in lines if line.strip()]})
raw_series = df.fillna("").astype(str).agg(" ".join, axis=1)
print(raw_series.shape)
df = pd.DataFrame({"raw": raw_series})

# Split into parts
df["Time Stamp"] = df["raw"].str.extract(r"\[(.*?)\]")
df["Time Stamp"] = pd.to_numeric(df["Time Stamp"], errors="coerce")
df["Title"] = df["raw"].str.extract(r"\](.*?):")
df["Description"] = df["raw"].str.split(":", n=1).str[1]
df["Aligned"] = df["Time Stamp"] + OFFSET

def fmt_mmss(t):
    if pd.isna(t):
        return ""
    sign = "-" if t < 0 else ""
    t = abs(float(t))
    m = int(t // 60)
    s = t - m * 60
    # Keep millisecond precision if fractional seconds exist
    out = f"{m:02d}:{s:06.3f}" if (s % 1) else f"{m:02d}:{int(s):02d}"
    # Trim trailing zeros if we used 3 decimals
    if "." in out:
        out = out.rstrip("0").rstrip(".")
    return sign + out

df["Aligned Time (mm:ss)"] = df["Aligned"].apply(fmt_mmss)
df["Time (mm:ss)"] = df["Time Stamp"].apply(fmt_mmss)

df = df[["Time Stamp", "Aligned", "Aligned Time (mm:ss)", "Title", "Description"]]
print(df)

df_speech = df[df["Title"].str.strip().eq("SPEECH")]
df_eyegaze = df[df["Title"].str.strip().eq("EyeGaze")]
df_others = df[~df["Title"].str.strip().isin(["SPEECH", "EyeGaze"])]

#Parse EyeGaze
desc = df_eyegaze["Description"].fillna("").astype(str).str.strip()
parsed = desc.str.extract(r'^\s*([A-Za-z]+)\s*[_-]\s*([A-Za-z]+)\s*[_-]\s*([A-Za-z0-9]+)\b\s*(.*)$')
parsed.columns = ["left/right", "enter/exit", "Place", "extra description"]
parsed["left/right"] = parsed["left/right"].str.lower().replace({"l":"left","r":"right"})
parsed["enter/exit"] = parsed["enter/exit"].str.lower().replace({"in":"enter","out":"exit"})
df_eyegaze = pd.concat([df_eyegaze, parsed], axis=1)

with pd.ExcelWriter(output_file, engine="openpyxl") as writer:
    df.to_excel(writer, index=False, sheet_name="All")
    df_speech.to_excel(writer, index=False, sheet_name="SPEECH")
    df_eyegaze.to_excel(writer, index=False, sheet_name="EyeGaze")
    df_others.to_excel(writer, index=False, sheet_name="Others")

wb = load_workbook(output_file)

for ws in wb.worksheets:
    for col in ws.columns:
        max_length = 0
        col_letter = col[0].column_letter
        for cell in col:
            try:
                value = str(cell.value)
                if len(value) > max_length:
                    max_length = len(value)
            except:
                pass
        ws.column_dimensions[col_letter].width = (max_length + 2) * 1.2
    
    last_col = get_column_letter(ws.max_column)
    last_row = ws.max_row
    ws.auto_filter.ref = f"A1:{last_col}{last_row}"
    ws.freeze_panes = "A2"

wb.save(output_file)
```
