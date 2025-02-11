
export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.name) {
      errors.name = "Name is required.";
    }
  
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
  
    if (!formData.message) {
      errors.message = "Message is required.";
    }
  
    return errors;
  };

  export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };