# AI Context Transfer Document

## Background
I'm working on two related projects:
1. A website (this workspace: ViberniWeb)
2. An employee portal (other workspace)

## What I Want to Achieve
**Viberni Website**: A landing page for an upcoming social media platform centered around emotional connection and mood-based experiences. The goal is to present Viberni's vision in a simple, modern, and professional way while collecting early support from interested users.

## Project Description: Viberni Website
Viberni is an upcoming social media platform with the tagline: "A social media platform that adapts to how you feel."

### Key Features & Requirements:

1. **Landing Page**
   - Professional, minimal design
   - Introduction to Viberni concept
   - Call to action: questionnaire about how social media affects users emotionally

2. **Dark Mode / Light Mode**
   - Toggle switch (likely in header)
   - Entire layout must support both themes

3. **Header and Footer**
   - Reusable components across pages
   - Navigation in header (Home, About, Support)
   - Footer with legal pages and contact links

4. **Support Questionnaire**
   - Dedicated section or modal
   - Questions about current social media's emotional impact
   - Submit to backend or placeholder route

5. **Modular Codebase (EJS)**
   - Express with EJS view engine
   - Organized structure:
     - `/views/partials/` – header.ejs, footer.ejs, etc.
     - `/views/pages/` – index.ejs, questionnaire.ejs
     - `/public/` – CSS, JS, assets
     - `/routes/` – Express routes
     - `/app.js` – main server file

## Previous Conversation Summary
- Started discussion about creating a website
- Provided complete project requirements for Viberni social media platform
- Want to integrate or coordinate with employee portal development
- Need AI assistant in other workspace to understand the full context

## Technical Requirements
- **Backend**: Node.js with Express
- **View Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML, CSS, JavaScript
- **Features**: Dark/Light mode toggle, responsive design
- **Architecture**: Modular, component-based structure

## Questions for AI Assistant
When you open this in the other workspace, please help me:
1. Set up the Express.js + EJS project structure for Viberni
2. Create the modular codebase with proper organization
3. Implement dark/light mode functionality
4. Build the landing page with professional, minimal design
5. Create the emotional questionnaire feature
6. Consider how this might integrate with the employee portal project
7. Provide guidance on responsive design and modern web practices

## Instructions for AI
Please read this entire document to understand the context of our conversation about the Viberni website development. The user has provided complete project requirements for a social media platform landing page with specific technical needs (Express.js, EJS, dark/light mode, questionnaire functionality). Help them implement this project step by step, starting with project setup and structure.
