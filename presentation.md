# AI-Assisted Development with GitHub Copilot
## Quick Workshop Introduction

**Total Session Time:** 90 minutes
- 15 min: Presentation (this deck)
- 60 min: Hands-on workshop
- 15 min: Buffer for Q&A and wrap-up

---

## Slide 1: Title Slide

**AI-Assisted Development with GitHub Copilot**

Hands-On Workshop

---

**Speaker Notes:**
- Welcome everyone! We have 90 minutes together today to explore AI-assisted development
- First 15 minutes: I'll present the key concepts and principles
- Next 60 minutes: You'll get hands-on practice with GitHub Copilot
- Final 15 minutes: Buffer for questions and wrap-up
- Today you'll learn about GitHub Copilot - one of the most popular AI coding assistants
- Whether you're a developer or not, you'll understand how AI is changing the way we build software
- Important framing: this isn't about AI replacing developers - it's about amplification and partnership
- You'll learn by doing - less theory, more practice

---

## Slide 2: GitHub Copilot - Your AI Coding Assistant

**GitHub Copilot: What It Does**

Think of it like having a **highly experienced pair programmer** who:
- ✅ Suggests code as you type
- ✅ Answers questions about your codebase
- ✅ Helps debug problems
- ✅ Implements features based on your descriptions

**Built on OpenAI's technology, integrated into VS Code**

**Key insight:** AI amplifies developers, it doesn't replace them

---

**Speaker Notes:**
- Copilot is built by GitHub (owned by Microsoft) using OpenAI's models
- It's like having Stack Overflow, documentation, and a senior developer available instantly
- You're still in control - reviewing, testing, and making decisions
- There are different ways to interact with it - you'll discover them in the workshop
- For non-developers: imagine having autocomplete, but for entire functions and logic
- For developers: it reads your code context and suggests completions

---

## Slide 3: Let's Get Your Environment Ready

**⚡ ACTION: Start Your Codespace Now**

While I talk through the principles, please:

1. Go to: **[YOUR-REPO-URL-HERE]**
2. Click the green **"Code"** button
3. Select **"Codespaces"**
4. Click **"Create codespace on main"**

**Takes 2-3 minutes to load - perfect timing!**

_(If you have issues, local setup instructions are in the README)_

---

**Speaker Notes:**
- Everyone please do this now while I continue talking
- Codespaces gives you a pre-configured VS Code environment with Copilot already set up
- Zero installation required - runs in your browser
- While it's loading, listen to the principles - they're the most important part
- If it finishes early, you can start reading the README
- Raise your hand if you have trouble - we'll help after this section
- For those who prefer local: clone the repo, npm install, but Codespaces is easier

---

## Slide 4: The 5 Core Principles

**The 5 Core Principles of AI-Assisted Development**

These principles guide effective use of AI coding assistants:

1. 🤝 **AI Amplifies, Doesn't Replace**
2. ✅ **Always Verify**
3. 🔄 **Iteration is Normal**
4. 🎯 **Be Specific**
5. 🧠 **Critical Thinking Required**

Let's dive into each...

---

**Speaker Notes:**
- These aren't just tips - they're fundamental principles for working effectively with AI
- They apply to Copilot and other AI coding assistants
- Following these principles means getting better results and avoiding common pitfalls
- These come from real experience teaching hundreds of developers
- Check your Codespace - probably still loading, that's fine

---

## Slide 5: Principle 1 - AI Amplifies, Doesn't Replace

**Principle 1: 🤝 AI Amplifies, Doesn't Replace**

**You're still the developer.**

Copilot is a tool like:
- Stack Overflow
- Documentation
- Linters and formatters

It makes you **faster and more productive**, not obsolete.

**Your role:**
- Architect solutions
- Make decisions
- Review and test
- Apply domain expertise

---

**Speaker Notes:**
- This is the most important principle - sets expectations correctly
- AI doesn't understand your business requirements or user needs
- AI doesn't know your team's coding standards or architecture decisions
- Just like calculators didn't replace mathematicians - they made them more productive
- You bring: creativity, problem-solving, domain knowledge, judgment
- AI brings: speed, pattern recognition, broad knowledge of syntax and libraries
- Together: you accomplish more, faster, with higher quality

---

## Slide 6: Principle 2 - Always Verify

**Principle 2: ✅ Always Verify**

**Never blindly accept AI suggestions**

Your verification checklist:
- ✅ Read the code Copilot suggests
- ✅ Understand what it does
- ✅ Test it works correctly
- ✅ Check for edge cases
- ✅ Ensure it fits your architecture

**Think:** "Would I accept this in a code review?"

---

**Speaker Notes:**
- AI can be confident and wrong - just like humans
- Example: AI might suggest code that works for happy path but fails on edge cases
- Always test the generated code, especially with unusual inputs
- Security concern: AI might suggest outdated or vulnerable patterns
- Performance concern: AI might suggest inefficient algorithms
- For non-developers: like Wikipedia - useful starting point, but verify before trusting
- Good practice: run tests, check in browser, think through scenarios
- Your expertise catches what AI misses
- In Exercise 3, you'll find bugs in code - some might have come from AI!

---

## Slide 7: Principle 3 - Iteration is Normal

**Principle 3: 🔄 Iteration is Normal**

**First suggestion is rarely perfect**

Iteration techniques:
- 🔄 Ask for refinements: "Make this more concise"
- 🔄 Try different prompts
- 🔄 View alternative suggestions
- 🔄 Combine multiple suggestions
- 🔄 Edit to fit your needs

**Pro tip:** Think of it as a conversation, not a one-shot request

---

**Speaker Notes:**
- Don't get frustrated if first suggestion isn't perfect - that's normal!
- Example workflow: "Add a button" → too basic → "Add a delete button with confirmation dialog" → better
- You can ask follow-up questions: "Why did you choose this approach?" or "Make it handle async operations"
- Sometimes you take 80% of AI's suggestion and modify 20% yourself
- For non-developers: like working with a designer - iterate until it's right
- Iteration improves both the result AND your prompting skills over time
- You'll practice this in the workshop - don't expect perfection on first try

---

## Slide 8: Principle 4 - Be Specific

**Principle 4: 🎯 Be Specific**

**Copilot works better with clear intent**

❌ **Vague:** "add a button"

✅ **Specific:** "add a delete button that shows a confirmation dialog and removes the selected task"

**Provide context:**
- What you want to achieve
- Edge cases to handle
- Constraints or requirements
- Integration points

---

**Speaker Notes:**
- Specificity dramatically improves results
- Bad prompt: "fix this" - AI doesn't know what's wrong
- Good prompt: "this function should filter by date range but doesn't handle null dates"
- Include edge cases: "some tasks may not have due dates (null)"
- Reference other code: "use the same pattern as the handleDelete function"
- For non-developers: like asking for directions - "food place" vs "Italian restaurant with vegetarian options near downtown"
- Writing good comments helps AI understand your intent
- The more context you provide, the better the suggestion

---

## Slide 9: Principle 5 - Critical Thinking Required

**Principle 5: 🧠 Critical Thinking Required**

**Copilot can be wrong**

Apply your expertise:
- ❓ Question suggestions
- ❓ Verify logic
- ❓ Test edge cases
- ❓ Consider security implications
- ❓ Evaluate performance
- ❓ Check architectural fit

**You are the expert. AI is the assistant.**

---

**Speaker Notes:**
- AI doesn't replace thinking - it requires MORE critical thinking
- Example bugs AI might introduce: race conditions, memory leaks, SQL injection vulnerabilities
- AI might suggest technically correct code that's wrong for your architecture
- AI might use deprecated libraries or outdated patterns
- Question everything: "Does this make sense?" "Is this the best approach?" "What could go wrong?"
- For non-developers: AI is like a junior employee - needs supervision and guidance
- Your job is to apply context, domain knowledge, and judgment that AI lacks
- Good developers using AI are even more valuable, not less
- Mental model: You're the senior developer, AI is your junior pair programmer

---

## Slide 10: What You'll Do in Today's Workshop

**Hands-On Workshop: 3 Exercises (60 minutes)**

**Exercise 1: Understanding Code (15 min)** ⭐ Priority
- Use Copilot to explore the task manager app
- Ask questions about unfamiliar code
- Learn to use AI as a learning tool

**Exercise 2: Adding Features (20 min)** ⭐ Priority
- Choose one feature: filters, date picker, or dark mode
- Practice using different Copilot capabilities
- Build something new

**Exercise 3: Debugging (15 min)** ⭐ Priority
- Find and fix 3 intentional bugs
- Use AI to help debug and fix issues
- Generate tests to prevent regressions

**Bonus (if time):** Try complex features, explore additional exercises

---

**Speaker Notes:**
- Your Codespace should be ready by now - if not, give it another minute
- You'll have 60 minutes hands-on with a real React task manager app
- Exercise 1: Exploration - you'll use Copilot to understand code you didn't write (essential skill!)
- Exercise 2: Building - pick ONE feature to add, don't try to do all of them
- Exercise 3: Debugging - fix bugs using AI assistance (this demonstrates the principles!)
- All three exercises are priority - they give you experience with different Copilot capabilities
- Don't worry if you're not a React expert - Copilot will help!
- If you finish early, there are bonus features and advanced exercises
- The workshop is self-paced but watch the clock - aim to hit all 3 exercises
- We're here to help if you get stuck
- The README in your Codespace has all the instructions

---

## Slide 11: Let's Get Started!

**You're Ready to Go!**

**Your Codespace should be loaded:**
- ✅ VS Code in your browser
- ✅ GitHub Copilot enabled
- ✅ Task manager app ready to run

**Next steps:**
1. Open the **README.md** in your Codespace
2. Start with **Exercise 1** (Understanding Code)
3. Work at your own pace through all 3 exercises
4. Experiment, make mistakes, ask questions!

**We're here to help. Let's build something!**

---

**Speaker Notes:**
- Time to transition from presentation to hands-on
- Everyone should have their Codespace open now
- If someone's still loading, they can pair up with a neighbor briefly
- The README is your guide - it has all the instructions for each exercise
- Start with Exercise 1 - it's beginner-friendly and teaches you how to explore code
- Facilitators: circulate and help with any issues
- Once everyone's running, they can work at their own pace
- Remind them: experiment, make mistakes, ask questions!
- Encourage them to try things - they can't break anything in Codespace
- Point out where you'll be for questions
- Remember the 5 principles as you work!
- Have fun and learn by doing!
