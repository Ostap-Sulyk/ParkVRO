package com.parkvro.backend.service;

import com.parkvro.backend.entities.BusinessPartner;
import com.parkvro.backend.repository.BPRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BPServiceImpl implements BPService {
    private final BPRepository bpRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public BusinessPartner save(BusinessPartner businessPartner) {
        businessPartner.setBalance(BigDecimal.valueOf(0));
        businessPartner.setPassword(passwordEncoder.encode(businessPartner.getPassword()));
        return bpRepository.save(businessPartner);
    }

    @Override
    public Optional<BusinessPartner> getBusinessPartner(Long id) {
        return bpRepository.findById(id);
    }
    @Override
    public Optional<BusinessPartner> getBusinessPartner(String email) {
        return bpRepository.findByEmail(email);
    }

    @Override
    public void deleteBusinessPartner(String email) {
        bpRepository.delete(bpRepository.findByEmail(email).get());
    }

    @Override
    public List<BusinessPartner> getAllBusinessPartners() {
        return (List<BusinessPartner>) bpRepository.findAll();
    }
}
