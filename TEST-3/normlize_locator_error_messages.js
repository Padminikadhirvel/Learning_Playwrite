
function categorizeError(rawMessage) {
  const normalized = rawMessage
    .trim()               
    .toLowerCase()        
    .replace(/\s+/g, " "); 
    

  let category;

  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  console.log("Normalized message:", normalized);
  console.log("Category:", category);
}

const rawMessage = " Locator not found after TIMEOUT ";

categorizeError(rawMessage);