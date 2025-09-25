#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createComponent(componentName, options = {}) {
    const {
        description = 'A reusable UI component',
        styles = '',
        html = '<div>Component HTML goes here</div>',
        javascript = '// Component JavaScript goes here',
        usage = 'Copy the HTML and CSS to use this component'
    } = options;

    // Read the template
    const templatePath = path.join(__dirname, 'component-template.html');
    let template = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders
    template = template
        .replace(/\{\{COMPONENT_NAME\}\}/g, componentName)
        .replace(/\{\{COMPONENT_DESCRIPTION\}\}/g, description)
        .replace(/\{\{COMPONENT_STYLES\}\}/g, styles)
        .replace(/\{\{COMPONENT_HTML\}\}/g, html)
        .replace(/\{\{COMPONENT_JAVASCRIPT\}\}/g, javascript)
        .replace(/\{\{USAGE_NOTES\}\}/g, usage);

    // Create filename
    const fileName = componentName.toLowerCase().replace(/\s+/g, '-');
    const outputPath = path.join(__dirname, `${fileName}.html`);

    // Write file
    fs.writeFileSync(outputPath, template);
    console.log(`✅ Component created: ${outputPath}`);

    return outputPath;
}

// Export for use as module
module.exports = { createComponent };

// CLI usage
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log(`
Usage: node create-component.js "Component Name"

Example: node create-component.js "Button Component"
        `);
        process.exit(1);
    }

    const componentName = args[0];
    createComponent(componentName);
}