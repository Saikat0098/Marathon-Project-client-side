import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
   
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);  
  }, [theme]);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light";
    setTheme(selectedTheme);
  };

  return (
   <div>
    
   </div>
  );
};

export default ThemeToggle;
