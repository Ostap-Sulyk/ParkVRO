package com.parkvro.backend.repository;

import com.parkvro.backend.entities.BusinessPartner;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface BPRepository extends CrudRepository<BusinessPartner, Long> {
    Optional<BusinessPartner> findByEmail(String email);
}
