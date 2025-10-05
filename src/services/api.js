// src/services/api.js
export const fetchCompanies = async () => {
  const response = await fetch("/companies.json");
  if (!response.ok) throw new Error("Failed to load companies");
  return await response.json();
};

export const fetchCompanyById = async (id) => {
  const data = await fetchCompanies();
  return data.find((company) => company.id === parseInt(id));
};
