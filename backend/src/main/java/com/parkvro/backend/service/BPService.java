package com.parkvro.backend.service;

import com.parkvro.backend.entities.BusinessPartner;

import java.util.List;

public interface BPService {
    BusinessPartner register(BusinessPartner businessPartner);
    BusinessPartner getBusinessPartner(Long id);
    void deleteBusinessPartner(Long id);
    List<BusinessPartner> getAllBusinessPartners();
}
