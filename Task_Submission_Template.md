# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name: Mistry Tirth Tarunkumar
| **Internship ID** | [PRL-MERN-2026-XXXX] |
| **Date** | [2026/05/13] |
| **Course Day** | [Day 1] |
| **GitHub Repo** https://github.com/Tirth-Mistry09/developer-stamina-dashboard

---

## 🎯 Daily Objective
*Briefly describe what you aimed to achieve today.*
The objective of today’s task was to set up a professional React development environment using Vite and build a Developer Stamina Dashboard application. The project focused on understanding React fundamentals such as components, props, conditional rendering, state management, and event handling.

---

## 🛠️ Implementation & Changes (Self-Documentation)
*Use this section to explain the logic and technical changes you implemented today. This is critical for evaluating your problem-solving skills.*

### 1. New Features / Logic Implemented
 - Implemented React project setup using Vite.
- Configured custom Vite development server port.
- Added environment variable support using .env file.
- Created reusable React components such as Header, SkillList, SkillBadge, and Stamina.
- Implemented dynamic greeting logic based on current system time.
- Implemented props passing between parent and child components.
- Added conditional rendering for high-level skill badges.
- Developed stamina tracking system using React useState hook.
- Added special stamina reduction logic using modulus operator for every 5th click.
- Implemented burnout prevention by disabling the button at zero stamina.

### 2. UI/UX Enhancements
- Added dynamic greeting display.
- Added interactive stamina button functionality.
- Added real-time stamina updates without page refresh.
- Added skill badges with conditional rocket icon display.
- Structured the application using reusable component architecture.

### 3. Database / Backend Updates
- No backend implementation was included in Day 1 tasks.
- The current project focuses on frontend React concepts and Git workflow.
---

## 💻 Code Snippet: My Primary Contribution
*Share a critical piece of code or a logic change you implemented today.*

```javascript
function handleClick(){

    let newClickCount = clickCount + 1

    setClickCount(newClickCount)

    if(newClickCount % 5 === 0){

        setStamina((prev)=> Math.max(prev - 15,0))
    }

    else{

        setStamina((prev)=> Math.max(prev - 2,0))
    }
}

---

## 📸 Screenshots / Proof of Work
*Insert screenshots of your UI, API responses (Postman), or Console logs.*

> **UI Screenshot:**
> ![UI Screenshot](path/to/screenshot1.png)

> **API Response:**
> ![Postman Screenshot](path/to/screenshot2.png)

---

## 🛑 Challenges Faced & Solutions
*Describe any bugs or blockers you encountered and how you solved them.*

- **Problem:** [Describe the bug]
- **Solution:** [How you fixed it]

---

## 💡 Key Learnings
*What was the most important takeaway from today's session?*
- [Learning 1]
- [Learning 2]

---

## 🔗 Live Preview (If applicable)
- **Deployment Link:** [URL here]

---
**Signature:**  
*[Your Digital Signature/Name]*
