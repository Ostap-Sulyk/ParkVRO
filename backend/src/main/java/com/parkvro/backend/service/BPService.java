package com.parkvro.backend.service;

import com.parkvro.backend.entities.BusinessPartner;

import java.util.List;
import java.util.Optional;

public interface BPService {
    BusinessPartner save(BusinessPartner businessPartner);
    Optional<BusinessPartner> getBusinessPartner(Long id);
    Optional<BusinessPartner> getBusinessPartner(String email);
    void deleteBusinessPartner(String email);
    List<BusinessPartner> getAllBusinessPartners();
}
