const envName = "staging";   // dev | staging | qa | production
const timeouts={
    dev: 5000,
    staging: 8000,
    qa: 10000,
    production: 12000
};

let config={
    baseUrl: "",
    apiKetPattern: "",
    timeout: 0,
    description: ""
};

switch(envName){
    case "dev":
        config.baseUrl="https://dev.api.testingacademy.com";
        config.apiKeyPattern="dev_key_xxxx-xxxx";
        config.timeout=timeouts.dev;
        config.description="Development - Unstable environment for active development and testing.";
        break;
    case "staging":
        config.baseUrl="https://staging.api.testingacademy.com";
        config.apiKeyPattern="stg_key_xxxx-xxxx";
        config.timeout=timeouts.staging;
        config.description="staging - Pre-production mirror.";
        break;  
    case "qa":
        config.baseUrl="https://qa.api.testingacademy.com";
        config.apiKeyPattern="qa_key_xxxx-xxxx";    
        config.timeout=timeouts.qa;
        config.description="QA - Stable environment for final testing before production.";
        break;
    case "production":
        config.baseUrl="https://api.testingacademy.com";
        config.apiKeyPattern="prod_key_xxxx-xxxx";
        config.timeout=timeouts.production;
        config.description="Production - Most stable environment for end-users.";
        break;  
    default:
        console.log("Invalid environment name. Please choose from dev, staging, qa, or production.");
}   

console.log("Environment:", envName.toUpperCase());
console.log("Base URL:", config.baseUrl);
console.log("API Key:", config.apiKeyPattern);
console.log("Timeout: ", config.timeout + "ms");
console.log("Description:", config.description);