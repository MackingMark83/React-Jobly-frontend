import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api";
import CompaniesCard from "./CompaniesCard";
import LoadingSpinner from "../common/LoadingSpinner";


function CompaniesList() {
  console.debug("CompaniesList");

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    console.debug("CompaniesList useEffect getCompaniesOnMount");
    search();
  }, []);

  
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
      <div className="CompaniesList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompaniesList-list">
                  {companies.map(c => (
                      <CompaniesCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default CompaniesList;
