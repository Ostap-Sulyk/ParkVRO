package com.parkvro.backend.repository;

import com.parkvro.backend.entities.BusinessPartner;
import org.springframework.data.repository.CrudRepository;

public interface BPRepository extends CrudRepository<BusinessPartner, Long> {
}
