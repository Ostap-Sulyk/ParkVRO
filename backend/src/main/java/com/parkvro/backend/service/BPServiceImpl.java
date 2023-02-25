package com.parkvro.backend.service;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.repository.BPRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BPServiceImpl implements BPService {
    private final BPRepository bpRepository;

    @Override
    public BusinessPartner register(BusinessPartner businessPartner) {

        return bpRepository.save(businessPartner);
    }

    @Override
    public BusinessPartner getBusinessPartner(Long id) {
        return bpRepository.findById(id).get();
    }

    @Override
    public void deleteBusinessPartner(Long id) {
        bpRepository.deleteById(id);
    }

    @Override
    public List<BusinessPartner> getAllBusinessPartners() {
        return (List<BusinessPartner>) bpRepository.findAll();
    }
}
