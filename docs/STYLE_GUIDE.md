```markdown
# Style Guide: Physical AI & Humanoid Robotics

This style guide ensures consistency, clarity, and technical accuracy across all chapters of "Physical AI & Humanoid Robotics: From Simulation to Reality."

## 1. Tone and Voice

*   **Technical & Educational**: Maintain a formal, academic, and authoritative tone. Focus on objective explanations and factual correctness.
*   **Clear & Concise**: Avoid jargon where plain language suffices, but always prioritize technical precision. Every sentence should contribute to understanding.
*   **Empathetic to Learners**: While rigorous, the tone should be encouraging and accessible to engineering students. Break down complex topics logically.
*   **Active Voice**: Prefer active voice over passive voice for stronger, clearer prose.
    *   **Good**: "The robot executes the command."
    *   **Bad**: "The command is executed by the robot."

## 2. Terminology

*   **Consistency**: Use consistent terminology throughout the book. Refer to the Glossary (to be created) for preferred terms.
*   **Real Robotics Terms**: Utilize genuine robotics, AI, and engineering terminology (e.g., kinematics, SLAM, embodied intelligence, ROS 2, Isaac Sim). Do not invent terms.
*   **Acronyms**: Define all acronyms on first use (e.g., "Robot Operating System 2 (ROS 2)"). Subsequent uses can use the acronym.

## 3. Formatting and Structure

*   **Markdown**: All content must be in GitHub-flavored Markdown.
*   **Headings**: Use a consistent heading hierarchy (e.g., `# Chapter`, `## Section`, `### Subsection`). Do not skip heading levels.
*   **Lists**: Use bullet points for unordered lists (`*` or `-`) and numbered lists for ordered sequences.
*   **Bold & Italic**: Use bold (`**text**`) for emphasis on key terms. Use italics (`*text*`) for book titles, foreign words, or informal emphasis.
*   **Code Blocks**: Use fenced code blocks (````python) for all code snippets, specifying the language for syntax highlighting.
*   **Diagrams**: ASCII-style architecture diagrams should be within fenced `text` blocks.
*   **Internal References**: Use relative links for cross-referencing chapters, sections, and appendices (e.g., `[Chapter 1](docs/chapters/01-introduction-physical-ai.md)`).

## 4. Code Snippets

*   **Language**: Predominantly Python (`rclpy` for ROS 2, Isaac Sim Python APIs).
*   **Realism**: Code must be realistic, executable (conceptually or practically), and representative of typical robotics workflows.
*   **Accuracy**: Verify that all code is technically correct and free of hallucinations (fabricated libraries, functions, etc.).
*   **Conciseness**: Keep code snippets focused on demonstrating a specific concept. Avoid overly long or complex examples that distract from the learning objective.
*   **Comments**: Include concise comments to explain non-obvious parts of the code.

## 5. Diagrams

*   **Style**: ASCII-style architecture diagrams (e.g., `Camera --> Perception --> Planner --> Controller --> Robot`).
*   **Clarity**: Diagrams should clearly illustrate system architectures, data flows, or conceptual relationships.
*   **Accuracy**: Ensure diagrams are technically accurate and consistent with the accompanying text.

## 6. Hardware and Software References

*   **Specificity**: When referring to hardware or software, be as specific as possible (e.g., "Jetson Orin Nano," "RealSense D435i," "ROS 2 Foxy").
*   **Context**: Provide context for why a particular piece of hardware or software is relevant.

## 7. Review and Revision

*   All content should undergo a rigorous review process for technical accuracy, clarity, and adherence to this style guide.
*   Feedback should be constructive and actionable, focusing on improving the learning experience.
```