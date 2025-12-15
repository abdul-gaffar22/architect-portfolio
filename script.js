/*
 * script.js - Architectural Portfolio Interactivity
 * Handles responsive navigation and project modal functionality.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Navigation Toggle for Mobile
    // ----------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // ----------------------------------------------------
    // 2. Project Modal Logic - Malik Abdul-Gaffar Project Data
    // ----------------------------------------------------
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeButton = modal.querySelector('.close-button');

    // IMPORTANT: EDIT THIS ARRAY WITH YOUR REAL PROJECTS AND IMAGE FILES
    const projectsData = [
        {
            id: 1,
            title: "Logistics Hub Warehouse",
            type: "Industrial / Commercial | BIM Model",
            image: "images/warehouse-project.jpg", 
            description: "A comprehensive BIM model for a large-scale modern warehouse facility. The design prioritized expansive clear spans, optimized loading docks, and energy-efficient envelope materials. All structural elements and mechanical layouts were detailed using **Revit** for accurate pre-fabrication and construction coordination.",
            details: [
                "Software: Revit, AutoCAD", 
                "Project Type: Industrial", 
                "Size: 150,000 sq ft", 
                "Focus: Structural Efficiency, Logistics Flow"
            ]
        },
        {
            id: 2,
            title: "Urban Renewal Residential Complex",
            type: "Multi-Unit Housing | Design Concept",
            image: "images/residential-project.jpg", 
            description: "Conceptual design for a high-density, low-rise residential complex aimed at urban renewal. The focus was on maximizing livable space while incorporating shared roof terraces and vertical gardens to enhance resident quality of life and sustainability. The model includes detailed interior unit layouts.",
            details: [
                "Software: Revit, AutoCAD, Visualization Tools", 
                "Project Type: Residential", 
                "Units: 45 Apartments", 
                "Focus: Density, Community Spaces, Natural Light"
            ]
        },
        {
            id: 3,
            title: "Future Project Slot",
            type: "Placeholder | Coming Soon",
            image: "images/placeholder-project-3.jpg",
            description: "This slot is ready for your next project. When you complete a new design, replace this object with its details.",
            details: ["Status: Empty Slot", "Ready for: Next BIM or Design Project"]
        }
    ];

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            
            const projectId = parseInt(card.dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);

            if (project) {
                const detailsList = project.details.map(detail => `<li>${detail}</li>`).join('');

                modalBody.innerHTML = `
                    <div class="modal-image-container">
                        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; margin-bottom: 20px;">
                    </div>
                    <h2>${project.title}</h2>
                    <p style="color: var(--color-accent); font-weight: 500; margin-bottom: 10px;">${project.type}</p>
                    <p>${project.description}</p>
                    <h3 style="margin-top: 20px; color: var(--color-text);">Key Data</h3>
                    <ul style="list-style-type: disc; padding-left: 20px; color: var(--color-text);">
                        ${detailsList}
                    </ul>
                `;
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ----------------------------------------------------
    // 3. Footer Year Update
    // ----------------------------------------------------
    document.getElementById('current-year').textContent = new Date().getFullYear();


});